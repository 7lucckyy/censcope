"use server";

import { AuthError } from "next-auth";
import { signOut as authSignOut } from "@/lib/auth";

import { signIn } from "../auth";

export async function authenticate(_: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signOut() {
  authSignOut({ redirectTo: "/admin/signin", redirect: true });
}
