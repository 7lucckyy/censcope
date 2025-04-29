import { ImageIcon } from 'lucide-react'
import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController } from "react-hook-form"
import { Control, FieldValues, Path } from "react-hook-form";


interface AvatarUploadProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    handleImageChange: Dispatch<SetStateAction<string | undefined>>;
}

export function AvatarUpload<T extends FieldValues>({
    control,
    name,
    handleImageChange }: AvatarUploadProps<T>) {
    const { field } = useController({ control, name })

    const handleFileChange = useCallback((file: File) => {
        if (!file) return;

        field.onChange(file)
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                handleImageChange(reader.result);
            }
        };

        reader.onerror = () => {
            console.error('File reading has failed');
        };

        reader.onabort = () => {
            console.warn('File reading was aborted');
        };

        reader.readAsDataURL(file);
    }, [field, handleImageChange]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        handleFileChange(acceptedFiles[0])
    }, [handleFileChange])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] }, maxFiles: 1 })

    return (
        <div className="col-span-full">
            <label htmlFor="avatar" className="block text-sm/6 font-medium text-gray-900">
                Avatar
            </label>
            {/* Added `relative` positioning context for the absolute overlay */}
            <div {...getRootProps()} className="relative mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-white px-6 py-10">

                {/* --- Default Content (Visible when not dragging) --- */}
                <div className="text-center">
                    <ImageIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                            htmlFor="file-upload"
                            onClick={(e) => e.stopPropagation()}
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            {/* Keep the original text logic, it will be covered by the overlay when active */}
                            <span>Upload a file</span>
                            <input {...getInputProps({
                                // It's often better to put onChange directly in useDropzone config if possible,
                                // but this works too. Ensure it doesn't conflict with onDrop.
                                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                                    handleFileChange(event.target.files?.[0] as File)
                            })} id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>

                {/* --- Drop Here Overlay (Visible only when dragging) --- */}
                {isDragActive && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-indigo-100/75 backdrop-blur-sm">
                        <div className="text-center">
                            {/* Optional: Add an icon specific to dropping */}
                            {/* <ArrowDownTrayIcon className="mx-auto size-12 text-indigo-600" /> */}
                            <p className="mt-2 text-lg font-semibold text-indigo-700">
                                Drop here
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}