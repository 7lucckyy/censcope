"use client";
import Banner from "@/components/banner";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function Page() {
  const { ref } = useIntersectionObserver();

  return (
    <>
      <Banner
        path="Support Us"
        title="support us"
        content="Find out how you can support Première Urgence Internationale and get involved."
      />

      <section ref={ref} className="w-full flex flex-col"></section>
    </>
  );
}
