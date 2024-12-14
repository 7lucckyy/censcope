import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants/config";
import NewslineCard from "@/components/landing/cards/newsline";

export default function Page() {
  return (
    <>
      <section
        id="banner"
        className="w-full bg-spiral bg-gray-200 flex flex-col gap-10 items-center pt-10 p-md md:p-lg md:pt-20 pb-0 mt-20 md:mt-28"
      >
        <header className="w-full flex items-center justify-start gap-2 z-10">
          <p className="p-1 text-xs lg:text-sm bg-white flex gap-2 capitalize">
            <Link href="/" className="underline">
              home
            </Link>

            <span className="">/</span>

            <Link href={"#"} className="">
              news
            </Link>
          </p>
        </header>

        <div className="flex flex-col w-full items-center gap-10 text-center z-10">
          <h3 className="font-black uppercase text-2xl lg:text-5xl text-cyan-600 font-titillium">
            news
          </h3>

          <div className="p-10 w-10/12 lg:w-3/5 flex flex-col gap-6 items-center bg-white">
            <p className="text-lg font-thin first-letter:capitalize font-anton">
              Read the latest news on our humanitarian missions around the
              world.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-all"
                >
                  <link.icon className="transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col py-10 px-md lg:px-4xl">
        <div className="w-full grid grid-cols-auto-fill-20 gap-10  justify-evenly">
          {Array.from({ length: 10 }).map((_, key) => (
            <NewslineCard key={key} />
          ))}
        </div>
      </section>
    </>
  );
}
