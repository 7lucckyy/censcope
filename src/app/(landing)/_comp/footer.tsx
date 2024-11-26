import Link from "next/link";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { socialLinks } from "@/constants/config";
import SubscribeForm from "@/components/forms/subscribe";
import { MdLocalPhone, MdLocationPin } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col bg-primary gap-0.5">
            <div className="flex flex-wrap gap-0.5">
                <div className="flex flex-1 flex-col items-start justify-center gap-4 basis-80 md:basis-96 p-10 py-28 bg-dark">
                    <Link href="/" className="flex gap-4 items-center">
                        <Image alt="" src="/logo.png" width={500} height={500} className="h-16 w-16 object-contain" />
                        <span className="uppercase font-bold text-5xl text-white">censcorpe</span>
                    </Link>

                    <p className="text-gray-500 text-lg">Reach out to us for partnership or support</p>
                    <p className="text-gray-500 text-lg flex gap-3 items-center justify-start"><MdLocationPin size={20} /> Address: Plot No. 1, Opposite, Kashim Ibrahim House Maiduguri, Borno state.</p>
                    <p className="text-gray-500 text-lg flex gap-3 items-center justify-start"><MdLocalPhone size={20} /> +234 80691 22990</p>
                    <p className="text-gray-500 text-lg flex gap-3 items-center justify-start"><IoMdMail size={20} /> censcope@gmail.com</p>

                    <div className="flex gap-2 items-center justify-start">
                        {socialLinks.map(item => (
                            <a key={item.href} href={item.href} className="w-12 h-12 bg-primary p-1 flex text-white items-center justify-center">
                                <item.icon size={20} className="" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-start justify-center gap-8 basis-80 md:basis-96 p-20 py-28 bg-dark">
                    <span className="text-lg text-primary">Tweets by CENSCORP</span>
                    <h3 className="text-2xl uppercase font-bold text-white mb-8">newsletter</h3>

                    <SubscribeForm />
                </div>
            </div>

            <div className="w-full flex items-center text-white justify-between bg-dotted-pattern bg-dotted-size bg-dark">
                <p className="capitalize p-6 px-10">&copy; <span className="uppercase text-primary">censcope</span> all rights reserved</p>

                <p className="bg-primary px-14 p-6 flex items-center justify-center gap-2 relative before:absolute before:right-full before:h-full before:bg-primary before:w-14 before:origin-top-left before:skew-x-[30deg]">
                    Developed by <a href="https://github.com/mminuwaali" target="_blank" className="text-dark uppercase">mminuwaali</a>
                </p>
            </div>
        </footer>
    );
}
