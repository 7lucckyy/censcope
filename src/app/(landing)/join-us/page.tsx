"use client";
import Banner from "@/components/banner";
import News from "@/components/landing/news";
import ScrollableSection from "@/components/scrollable";
import HrPolicy from "@/components/sections/join-us/hr-policy";
import JobOffers from "@/components/sections/join-us/job-offers";
import MakeCareer from "@/components/sections/join-us/make-career";
import WorkWithus from "@/components/sections/join-us/work-withus";
import JobCategory from "@/components/sections/join-us/job-category";

export default function Page() {
  const sections = [
    {
      id: "job-offers",
      label: "Job offers",
      component: JobOffers,
    },
    {
      id: "work-withus",
      component: WorkWithus,
      label: "What working with us means",
    },
    {
      id: "make-career",
      component: MakeCareer,
      label: "Make a career",
    },
    {
      id: "hr-policy",
      component: HrPolicy,
      label: "HR policy",
    },
    {
      id: "job-category",
      component: JobCategory,
      label: "Jobs",
    },
    {
      label: "News",
      id: "newsline",
      component: News,
    },
  ];

  return (
    <>
      <Banner
        path="Join us"
        title="join us"
        image="/images/support.jpg"
        content={`Première Urgence Internationale is always on the lookout for new talent to expand its team, whether at headquarters in France or in our 25 countries of intervention. Don't wait any longer, join us !`}
      />

      <ScrollableSection sections={sections} />
    </>
  );
}
