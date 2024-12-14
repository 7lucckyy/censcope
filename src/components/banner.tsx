import Link from "next/link";
import Image from "next/image";

export default function Banner(properties: {
  path?: string;
  title?: string;
  image?: unknown;
  content?: string;
  className?: string;
}) {
  return (
    <section
      id="banner"
      className="w-full bg-gray-600 flex flex-col gap-10 items-center pt-10 p-md md:p-lg md:pt-20 pb-40 mt-20 md:mt-28"
    >
      <Image
        alt=""
        width={1000}
        height={1000}
        src={(properties.image as string) || ""}
        className="top-0 left-0 w-full h-full absolute object-cover"
      />

      <header className="w-full flex items-center justify-start gap-2 z-10">
        <p className="p-1 text-xs lg:text-sm bg-white flex gap-2 capitalize">
          <Link href="/" className="underline">
            home
          </Link>

          <span className="">/</span>

          <Link href={"#"} className="">
            {properties.path}
          </Link>
        </p>
      </header>

      <div className="flex flex-col items-center gap-10 text-center z-10">
        <h3 className="font-black uppercase text-2xl lg:text-5xl text-cyan-600 font-titillium">
          {properties.title}
        </h3>
        <p className="font-bold uppercase text-xs lg:text-lg p-4 py-10 w-10/12 lg:w-5/6 bg-white">
          {properties.content}
        </p>
      </div>
    </section>
  );
}
