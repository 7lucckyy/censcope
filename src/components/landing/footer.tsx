import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full md:sticky md:bottom-0 flex flex-col">
            <div className="w-full py-20 px-xl">
                <div className="w-full h-60 bg-white"></div>
            </div>


            <div className="w-full flex gap-6 flex-col md:flex-row py-10 px-lg bg-white justify-evenly">
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className=" text-xl">Get informed</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="flex flex-col relative">
                            Contact us
                        </Link>
                        <Link href="#" className="flex flex-col relative">
                            Press area
                        </Link>
                    </nav>
                </div>

                <div className="h-full w-0.5 bg-black/20 flex-none hidden md:flex" />

                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className=" text-xl">Get involved</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="flex flex-col relative">
                            Support our action
                        </Link>
                        <Link href="#" className="flex flex-col relative">
                            Our job offers
                        </Link>
                    </nav>
                </div>

                {/* <div className="h-full w-0.5 bg-black/20 flex-none hidden md:flex" /> */}

                {/* <div className="flex flex-col gap-6 items-center md:items-start">
                    <h3 className=" text-xl">Certification and label</h3>
                    <nav className="flex gap-6 items-center">
                        <Link href="#" className="flex flex-col relative">
                            <Image alt="" width={100} height={100} src="/images/certify.png" className="w-24 h-24 object-contain" />
                        </Link>
                        <Link href="#" className="flex flex-col relative">
                            <Image alt="" width={100} height={100} src="/images/label.png" className="h-16 w-16 object-contain" />
                        </Link>
                    </nav>
                </div> */}
            </div>

            <nav className="w-full flex items-center capitalize text-white p-6 md:px-3xl font-titillium justify-around bg-cyan-600">
                <Link href="#" className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full">
                    sitemap
                </Link>
                <Link href="#" className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full">
                    legal notices
                </Link>
                <Link href="#" className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full">
                    cookie policy
                </Link>
                <Link href="#" className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full">
                    contact us
                </Link>
            </nav>
        </footer>
    );
}
