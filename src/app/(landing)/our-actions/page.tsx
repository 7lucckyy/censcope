"use client";
import Banner from "@/components/banner";
import OurActions from "@/components/landing/actions";
import ScrollableSection from "@/components/scrollable";

export default function Page() {
  const sections = [
    {
      id: "actions",
      label: "Our Actions",
      component: OurActions,
    },
  ];

  return (
    <>
      <Banner
        path="Our Actions"
        title="our actions"
        image="/images/support.jpg"
        content={`Our 199 projects are carried out in 25 countries by 3,007 national employees, 219 expatriates and 139 head office staff. 
        Having become Première Urgence Internationale in 2011, the organization is now active in 25 countries in Africa, Asia, Europe, Latin America, and the Middle East, engaging in direct aid for populations suffering crises.`}
      />

      <ScrollableSection sections={sections} />
    </>
  );
}
