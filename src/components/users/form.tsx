"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { toast } from "sonner"

import { AvatarUpload } from './avatar-upload';
import { createUser } from "@/lib/actions/users";
import { SelectUser } from "@/db/schema";
import { getSupabaseImagePath } from "@/lib/utils";



const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const UserFormSchema = z.object({
    userId: z.string().optional(),
    name: z
        .string({
            required_error: "Please enter the user's name",
        }),
    email: z
        .string({
            required_error: "Please enter the user's email",
        }).email(),
    password: z
        .string({
            required_error: "Please enter the user's password",
        }).min(8, "Password should be a minimum of 8 characters"),
    confirm_password: z
        .string({
            required_error: "Please enter the user's password",
        }).min(8, "Password should be a minimum of 8 characters"),
    avatar: z
        .instanceof(File)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
            "Only .jpg, .png, and .webp formats are supported."
        )
        .refine((file) => file.size <= MAX_FILE_SIZE, "Max file size is 5MB."),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ['confirm_password'],
});;


function UsersForm({ user }: { user: SelectUser | null }) {
    const [image, setImage] = useState<string | undefined>(undefined)
    const [pending, setPending] = useState(false)
    const form = useForm({
        resolver: zodResolver(UserFormSchema),
        defaultValues: { name: user?.name ?? "", email: user?.email ?? "", userId: user?.id }
    });

    const watchedAvatar = form.watch('avatar'); // 'avatar' should match the name prop passed to AvatarUpload

    const onSubmit = async (values: z.infer<typeof UserFormSchema>) => {
        setPending(true)
        const formdata = new FormData();

        if (values.userId) formdata.set("userId", values.userId);
        formdata.set("name", values.name);
        formdata.set("email", values.email);
        formdata.set("password", values.password);
        formdata.set("avatar", values.avatar);

        const res = await createUser(formdata);
        if (res.success) toast.info(res.message)
        if (!res.success) toast.error(res.message)
        console.log(res);
        setPending(false)

    };
    return (
        <form className="" onSubmit={form.handleSubmit(onSubmit, err => console.error(err))}>
            <div className="p-8 rounded-2xl border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="janesmith"
                                    {...form.register("name")}
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">workcation.com/</div>
                                <input
                                    id="email"
                                    type="email"
                                    {...form.register("email")}
                                    placeholder="janesmith@example.com"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                    id="password"
                                    type="password"
                                    {...form.register("password")}
                                    placeholder="********"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                            {form.formState.errors.password && <p className="mt-1 text-sm text-red-600">{form.formState.errors.password.message?.toString()}</p>}
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="confirm_password" className="block text-sm/6 font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input
                                    id="confirm_password"
                                    type="password"
                                    {...form.register("confirm_password")}
                                    placeholder="********"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                            {form.formState.errors.confirm_password && <p className="mt-1 text-sm text-red-600">{form.formState.errors.confirm_password.message?.toString()}</p>}

                        </div>
                    </div>

                    {(image || user?.avatar) && (
                        <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <div className="size-12 rounded-full overflow-clip">
                                    <Image width={48} height={48} src={image ?? getSupabaseImagePath(user?.avatar as string)} alt="" />
                                </div>
                                {watchedAvatar &&
                                    <button
                                        type="button"
                                        onClick={() => { setImage(undefined); form.resetField("avatar") }}
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Remove
                                    </button>
                                }
                            </div>
                        </div>
                    )}

                    <AvatarUpload control={form.control} name="avatar" handleImageChange={setImage} />
                    {form.formState.errors.avatar && <p className="mt-1 text-sm text-red-600">{form.formState.errors.avatar.message?.toString()}</p>}

                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        disabled={pending}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {pending ? `${user ? "Updating" : "Creating"}...` : `${user ? "Update User" : "Create User"}`}

                    </button>
                </div>
            </div>
        </form>
    )
}

export default UsersForm