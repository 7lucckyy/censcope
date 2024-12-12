import Link from "next/link";

export default function Banner(properties: {
  path?: string;
  title?: string;
  content?: string;
  className?: string;
}) {
  return (
    <section
      id="banner"
      className="w-full bg-gray-600 flex flex-col gap-10 items-start pt-10 p-md md:p-lg md:pt-20 mt-20 md:mt-28"
    >
      <header className="w-full flex items-center justify-start gap-2">
        <p className="p-1 text-sm bg-white flex gap-2 capitalize">
          <Link href="/" className="underline">
            home
          </Link>

          <span className="">/</span>

          <Link href={"#"} className="">
            {properties.path}
          </Link>
        </p>
      </header>

      <div className="flex flex-col items-center gap-10 text-center">
        <h3 className="font-black uppercase text-2xl lg:text-5xl text-cyan-600 font-titillium">
          {properties.title}
        </h3>
        <p className="font-bold uppercase text-xl p-4 py-10 w-10/12 lg:w-3/5 bg-white">
          {properties.content}
        </p>
      </div>
    </section>
  );
}
