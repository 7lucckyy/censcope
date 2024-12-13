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
        path="Support us"
        title="support us"
        image="/images/support.jpg"
        content="Find out how you can support Première Urgence Internationale and get involved."
      />

      <ScrollableSection sections={sections} />
    </>
  );
}
