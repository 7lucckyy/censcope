"use client";
import Banner from "@/components/banner";
import ScrollableSection from "@/components/scrollable";
import OurCommit from "@/components/sections/about/our-commit";
import OurAccount from "@/components/sections/about/our-account";
import OurHistory from "@/components/sections/about/our-history";
import OurInformation from "@/components/sections/about/our-information";
import OurOrganisation from "@/components/sections/about/our-organisation";

export default function Page() {
  const sections = [
    {
      label: "Who we are",
      id: "our-information",
      component: OurInformation,
    },
    {
      id: "our-history",
      label: "Our History",
      component: OurHistory,
    },
    {
      id: "our-commit",
      label: "Our Commit",
      component: OurCommit,
    },
    {
      id: "our-organisation",
      label: "Our Organisation",
      component: OurOrganisation,
    },
    {
      id: "our-account",
      label: "Our Account",
      component: OurAccount,
    },
  ];

  return (
    <>
      <Banner
        path="About Us"
        title="about us"
        image="/images/support.jpg"
        content="Première Urgence Internationale is a non-profit, apolitical and secular international NGO. It helps civilian victims marginalized or excluded by the effects of war, hazard-related disasters and economic collapse."
      />

      <ScrollableSection sections={sections} />
    </>
  );
}
