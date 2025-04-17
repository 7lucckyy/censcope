"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { images } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { createClient, createSupabaseAdmin } from "../supabase/server";

const BASE_FOLDERNAME = "gallery";
const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME;

export async function deleteGallery(galleryId: string) {
  return db.transaction(async (tx) => {
    try {
      if (!BUCKET_NAME) {
        throw new Error("Supabase URL or bucket name is not defined");
      }
      const supabase = await createSupabaseAdmin();

      const galleryItem = await tx.query.images.findFirst({
        where: eq(images.id, galleryId),
      });

      if (!galleryItem) {
        return { error: "Gallery item not found." };
      }

      const { error: storageError } = await supabase.storage
        .from(BUCKET_NAME)
        .remove([galleryItem?.url]);

      if (storageError) {
        console.error(storageError);
        return { error: "Failed to delete image from storage." };
      }

      await tx.delete(images).where(eq(images.id, galleryId));

      revalidatePath("/admin/gallery");

      return { success: "Image deleted successfully." };
    } catch (error) {
      console.error(error);
      return { error: "An error occurred while deleting the image." };
    }
  });
}

export async function uploadImage(formData: FormData) {
  const results: {
    filename: string;
    success: boolean;
    error?: string;
    path?: string;
  }[] = []; // To store the outcome of each file upload
  let hasErrors = false;

  try {
    if (!BUCKET_NAME) {
      throw new Error("Supabase bucket name is not defined");
    }

    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Supabase getUser error:", userError);
      return { error: "Could not authenticate user for upload.", results };
    }

    // --- Handle Multiple Files ---
    const files = formData.getAll("files") as File[]; // Use getAll() and match the input field name "files"

    if (!files || files.length === 0) {
      return { error: "No files provided.", results };
    }

    // --- Loop through each file ---
    for (const file of files) {
      if (!file || typeof file.name !== "string" || file.size === 0) {
        console.warn("Skipping invalid file entry:", file);
        results.push({
          filename: "unknown",
          success: false,
          error: "Invalid file entry",
        });
        hasErrors = true;
        continue;
      }

      const originalFilename = file.name;
      try {
        const extension = originalFilename.split(".").pop();
        const filenameWithoutExt = originalFilename.replace(/\.[^/.]+$/, "");
        // Construct the path according to RLS policies
        const uniqueFilename = `${BASE_FOLDERNAME}/${
          user.id
        }/${filenameWithoutExt}-${crypto.randomUUID()}.${extension}`;

        const { data: imageData, error: imageError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(uniqueFilename, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (imageError) {
          console.error(`Error uploading ${originalFilename}:`, imageError);
          results.push({
            filename: originalFilename,
            success: false,
            error: imageError.message,
          });
          hasErrors = true;
          continue;
        }

        await db.insert(images).values({
          title: filenameWithoutExt,
          url: imageData.path,
        });

        results.push({
          filename: originalFilename,
          success: true,
          path: imageData.path,
        });
      } catch (uploadError) {
        let errorMessage = "Processing failed";
        if (uploadError instanceof Error) {
          // Type guard: checks if uploadError is an instance of Error
          // Inside this block, TypeScript knows uploadError has .message, .name, .stack properties
          console.error(
            `Failed to process ${originalFilename}: ${uploadError.message}`,
            uploadError.stack
          );
          errorMessage = uploadError.message;
        } else {
          // Handle cases where something else was thrown (string, object, etc.)
          console.error(
            `Failed to process ${originalFilename}: Unexpected error type`,
            uploadError
          );
          // Try to convert the unknown error to a string representation
          errorMessage =
            String(uploadError) ||
            "Non-error object thrown during file processing";
        }
        results.push({
          filename: originalFilename,
          success: false,
          error: errorMessage,
        });
        hasErrors = true;
      }
    }

    if (results.some((r) => r.success)) {
      // Only revalidate if at least one succeeded
      revalidatePath("/admin/gallery");
    }

    const successfulUploads = results.filter((r) => r.success).length;
    const failedUploads = results.length - successfulUploads;

    return {
      message: `Processed ${results.length} files. ${successfulUploads} uploaded successfully, ${failedUploads} failed.`,
      success: !hasErrors, // Overall success if no individual errors occurred
      results: results, // Detailed results for each file
    };
  } catch (error) {
    console.error("General error during multi-file upload:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred during the upload process.",
      success: false,
      results,
    };
  }
}
