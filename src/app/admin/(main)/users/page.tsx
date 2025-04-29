import UsersForm from "@/components/users/form";

export default function UsersPage() {
    return (
        <div className="relative mx-auto mt-24 max-lg:max-w-2xl">
            <div className="grid grid-cols-5">
                <div className="col-span-2 border-b border-gray-900/10 pb-12 px-6">
                    <h2 className="text-base/7 font-semibold text-gray-900">Your Users</h2>
                    <p className="mt-1 text-sm/6 text-gray-600 max-w-xs">
                        We&apos;ll always let you know about important changes, but you pick what else you want to hear about.
                    </p>
                </div>
                <UsersForm />
            </div>
        </div>
    )
}
