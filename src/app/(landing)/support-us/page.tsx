"use client";
import Banner from "@/components/banner";
import ScrollableSection from "@/components/scrollable";
import EventPart from "@/components/sections/support/events-parts";
import CrowdFunding from "@/components/sections/support/crowd-funding";
import DonateReason from "@/components/sections/support/donate-reason";
import MakeDonation from "@/components/sections/support/make-donation";

export default function Page() {
  const sections = [
    {
      id: "make-donation",
      label: "Make a donation",
      component: MakeDonation,
    },
    {
      id: "donate-reason",
      component: DonateReason,
      label: "Why and HOW to donate?",
    },
    {
      id: "crowd-funding",
      label: "Crowdfunding",
      component: CrowdFunding,
    },
    {
      id: "event-part",
      component: EventPart,
      label: "Take part in our events",
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
