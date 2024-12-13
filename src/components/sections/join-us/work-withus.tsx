"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function WorkWithus() {
  const lists = [
    {
      content:
        "Joining a humanitarian association with 40 years’ expertise in emergency and post-emergency response for civilian populations in crisis situations caused by armed conflict, climatic hazards or economic collapse.",
    },
    {
      content:
        "Adopting a caring approach focused on the needs of local communities and foster a respectful and humane working environment.",
    },
    {
      content:
        "Being close to the field, where every day brings new challenges and opportunities.",
    },
    {
      content:
        "Working as a team, with committed colleagues who collaborate closely to achieve common goals. Together, we are committed to providing sustainable solutions and making a tangible difference in the field.",
    },
  ];

  return (
    <section id="work-withus" className="flex flex-col gap-10 py-14">
      <header className="w-full flex flex-col items-start gap-4 px-lg lg:px-6xl">
        <h2 className="text-xl lg:text-4xl">
          Working at Première Urgence Internationale means…
        </h2>
      </header>

      <div className="flex flex-col gap-4 px-lg lg:px-6xl">
        {lists.map((item, index) => (
          <p key={item.content} className="text-sm flex items-center gap-2">
            <FaArrowRight size={22} className="text-cyan-600" />
            {item.content}
          </p>
        ))}
      </div>

      <p className="text-sm flex items-center gap-2 px-lg lg:px-6xl">
        Première Urgence Internationale has been awarded the “Happy Trainees”
        label for three consecutive years, attesting to its commitment to the
        quality of the induction and development of its employees with
        internship or work-study status. This recognition, based on the opinions
        of those concerned, underlines the positive and enriching working
        environment offered by Première Urgence Internationale.
      </p>

      <div className="w-full min-h-80 bg-gray-100 bg-spiral bg-center py-20 px-md lg:px-5xl">
        <div className="flex flex-1 p-4 flex-col lg:flex-row items-center lg:items-stretch">
          <div className="w-72 min-h-96 relative">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/images/support.jpg"
              className="w-full h-full top-0 left-0 absolute object-cover bg-gray-50"
            />
          </div>

          <div className="flex flex-1 flex-col p-10 lg:py-20 w-full bg-white min-h-96 gap-2 items-start">
            <h4 className="text-cyan-600 font-cavet text-3xl lg:text-5xl">
              Christelle André
            </h4>
            <span className="text-sm">
              Director of Human Resources © Première Urgence Internationale
            </span>

            <blockquote className="lg:w-5/6 text-justify font-anton my-4 text-xl">
              Taking people into account and enjoying working together are
              essential to the success of our missions.
            </blockquote>

            <button className="outline-none border-2 relative border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
              <span className="z-50 gap-2 flex items-center  group-hover:text-cyan-600">
                see all news{" "}
                <FaArrowRight className=" text-cyan-600 group-hover:text-cyan-600 transition-all" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
