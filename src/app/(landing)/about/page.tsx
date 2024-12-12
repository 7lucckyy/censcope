"use client";
import Banner from "@/components/banner";
import OurCommit from "@/components/sections/about/our-commit";
import OurAccount from "@/components/sections/about/our-account";
import OurHistory from "@/components/sections/about/our-history";
import { useIntersectionObserver } from "@/hooks/observe.hook";
import OurInformation from "@/components/sections/about/our-information";
import OurOrganisation from "@/components/sections/about/our-organisation";

export default function Page() {
  const { ref, entryData } = useIntersectionObserver();

  console.log(entryData?.boundingClientRect.bottom);
  return (
    <>
      <Banner
        path="About Us"
        title="about us"
        content="Première Urgence Internationale is a non-profit, apolitical and secular international NGO. It helps civilian victims marginalized or excluded by the effects of war, hazard-related disasters and economic collapse."
      />
      <section ref={ref} className="w-full flex flex-col">
        <OurInformation />
        <OurHistory />
        <OurCommit />
        <OurOrganisation />
        <OurAccount />
      </section>
    </>
  );
}
