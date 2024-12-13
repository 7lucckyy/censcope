"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function JobCategory() {
  return (
    <section
      id="job-category"
      className="flex flex-col gap-2 py-10 items-center px-md lg:px-3xl"
    >
      <h2 className="text-cyan-600 font-anton text-xl lg:text-3xl">Our jobs</h2>
      <p className="text-sm lg:text-base text-center my-10">
        To bring our projects to fruition, we recruit talent from a wide range
        of professional channels, whether technical or support, at head office
        or in the field.
      </p>

      <div className="w-full grid gap-8 grid-cols-auto-fit-8">
        {Array.from({ length: 11 }).map((_, key) => (
          <Link
            href="#"
            key={key}
            className="p-4 px-0 border border-black group flex items-center justify-around gap-4"
          >
            <span className="font-semibold transition-all group-hover:text-cyan-600">
              Lorem, ipsum dolor
            </span>
            <FaArrowRight className=" text-cyan-600 group-hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}
