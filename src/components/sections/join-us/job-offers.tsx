"use client";

import NewslineCard from "@/components/landing/cards/newsline";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function JobOffers() {
  return (
    <section id="job-offers" className="flex flex-col gap-10 py-10">
      <header className="w-full flex gap-10 items-baseline justify-between flex-col lg:flex-row px-md md:px-2xl">
        <div className="flex flex-col md:gap-4 ">
          <h2 className="text-2xl md:text-3xl first-letter:capitalize">
            Our most recent job offers
          </h2>

          <div className="text-sm lg:text-base text-justify flex flex-col gap-6">
            <p className="">
              We recruit people with specific skills in a wide range of fields
              related to our actions in the field. Commitment and
              professionalism are the two main characteristics of the staff in
              the field and at headquarters who implement Première Urgence
              Internationale&#39;s emergency and post-emergency programs.
            </p>

            <p className="">
              Whether you&#39;re looking for a position in the field or at head
              office, a permanent contract or an internship, all our job offers
              on our website. Once you&#39;ve checked that you have all the
              required skills, you can apply directly on our website, as
              indicated on the job description.
            </p>

            <p className="">
              If your profile interests us, you will first be invited to an HR
              interview. Following this interview, a test and a technical
              interview will be scheduled. Finally, if this interview is
              conclusive, a managerial interview will be organized.
            </p>

            <p className="">
              If you do not hear from us within approximately one month, you may
              consider that your application has unfortunately been
              unsuccessful. This does not affect your skills or the quality of
              your experience. We invite you to consult our job offers on a
              regular basis, and to apply again if an offer matches your
              criteria.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white ml-auto mt-auto">
          <FaArrowLeft
            onClick={() => {}}
            className="p-2 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all"
          />
          <FaArrowRight
            onClick={() => {}}
            className="p-2 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all"
          />
        </div>
      </header>

      <div className="w-full flex items-center justify-start gap-4 overflow-auto snap-x snap-mandatory hide-scrollbar">
        <div className="h-96 aspect-[3/4] snap-start hidden md:flex" />
        {Array.from({ length: 10 }).map((_, id) => (
          <NewslineCard key={id} />
        ))}
      </div>

      <button className="mx-auto outline-none border-2 relative border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
        <span className="z-50 gap-2 flex items-center  group-hover:text-white">
          our job offers{" "}
          <FaArrowRight className=" text-cyan-600 group-hover:text-white transition-all" />
        </span>
      </button>
    </section>
  );
}
