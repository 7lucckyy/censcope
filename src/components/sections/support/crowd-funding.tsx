"use client";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function CrowdFunding() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="crowd-funding"
      className="flex flex-col gap-10 py-14 px-lg lg:px-5xl bg-gray-100"
    >
      <header className="w-full flex flex-col items-center text-center gap-4">
        <h2 className="text-xl lg:text-4xl">Our commitments</h2>
        <p className="text-sm lg:text-base text-center lg:w-3/5">
          To help, relieve and preserve lives by carrying out humanitarian and
          development actions throughout the world, without discrimination, on
          behalf of civilian victims endangered, marginalized or excluded by the
          effects of armed conflict, hazard-related disasters or economic
          collapse resulting from political upheaval or the consequences of
          environmental and climatic degradation.
        </p>
      </header>
    </section>
  );
}
