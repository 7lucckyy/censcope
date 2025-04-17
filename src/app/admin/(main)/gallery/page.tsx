import Image from "next/image";

import { UploadImage } from "@/components/gallery/upload-image";
import { db } from "@/db";
import { images as imagesTable } from "@/db/schema";
import { getSupabaseImagePath } from "@/lib/utils";

async function GalleryPage() {
  const images = await db.select().from(imagesTable);

  return (
    <div className="relative mx-auto mt-24 max-lg:max-w-2xl">
      <div className="line-y px-4 py-2 sm:px-2">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
          Every pixel designed with intent
        </h2>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
          Not too trendy, not too plain — Catalyst finds the perfect middle
          ground, blending depth, clarity, and motion into an interface that’s
          as intuitive as it is beautiful.
        </p>
      </div>
      <div className="line-y mt-6 px-4 py-2 sm:px-2">
        <a
          href="https://catalyst-demo.tailwindui.com"
          className="gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 px-4 py-2"
          target="_blank"
        >
          Live preview
          <svg
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 10 10"
            className="-mr-0.5 w-2.5"
          >
            <path d="M0 0H3V1H1V9H9V7H10V10H0V0Z"></path>
            <path d="M8.29293 1H5.00004V0H10V5H9.00004V1.70711L4.35359 6.35355L3.64648 5.64645L8.29293 1Z"></path>
          </svg>
        </a>
      </div>

      <UploadImage />

      <div className="relative mt-16 lg:mt-20">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 gap-10 max-sm:hidden sm:grid-cols-2 sm:max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5"></div>
          <div className="border-l border-gray-950/5 lg:border-x"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden"></div>
        </div>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:max-md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image) => (
            <li
              key={image.id}
              className="max-sm:line-y sm:max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y"
            >
              <div
                className="block transition hover:bg-gray-950/2.5"
              >
                <div className="p-2">
                  <Image
                    src={getSupabaseImagePath(image.url)}
                    className="aspect-[1062/720] rounded-md outline outline-gray-950/10 sm:rounded-xl lg:rounded-xl"
                    width="240"
                    height="200"
                    alt=""
                  />
                </div>
                <p className="px-4 py-2 text-sm/6 font-medium sm:px-2">
                  {image.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GalleryPage;
