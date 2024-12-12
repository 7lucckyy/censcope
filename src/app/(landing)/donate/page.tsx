"use client";
import Banner from "@/components/banner";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function Page() {
  const { ref } = useIntersectionObserver();

  return (
    <>
      <Banner
        path="Join Us"
        title="join us"
        content="remière Urgence Internationale is always on the lookout for new talent to expand its team, whether at headquarters in France or in our 25 countries of intervention. Don't wait any longer, join us !"
      />

      <section ref={ref} className="w-full flex flex-col"></section>
    </>
  );
}
