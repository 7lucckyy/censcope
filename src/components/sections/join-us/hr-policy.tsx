"use client";

import { FaArrowRight } from "react-icons/fa";

export default function HrPolicy() {
  const lists = [
    { content: "Fairness and non-discrimination" },
    { content: "Transparency" },
    { content: "Objectivity" },
    { content: "Adaptability" },
    { content: "Privacy" },
  ];

  return (
    <section
      id="hr-policy"
      className="w-full min-h-80 bg-gray-100 bg-spiral bg-center py-20 px-md lg:px-5xl"
    >
      <div className="flex flex-1 p-10 flex-col bg-white items-center justify-center">
        <span className="font-cavet text-2xl lg:text-4xl font-semibold">
          Join Us
        </span>
        <h3 className="text-cyan-600 font-anton text-xl lg:text-3xl">
          Axelle Marcot
        </h3>

        <p className="text-sm lg:text-base text-center my-10">
          Première Urgence Internationale offers numerous benefits to its
          employees and has built its HR policy on 5 pillars:
        </p>

        <div className="flex flex-col gap-4 lg:w-2/5">
          {lists.map((item, index) => (
            <p key={item.content} className="text-sm flex items-start gap-2">
              <b className="font-anton whitespace-nowrap">{index + 1} /</b>{" "}
              {item.content}
            </p>
          ))}
        </div>

        <button className="outline-none border-2 relative border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
          <span className="z-50 gap-2 flex items-center  group-hover:text-cyan-600">
            see our hr policy{" "}
            <FaArrowRight className=" text-cyan-600 group-hover:text-cyan-600 transition-all" />
          </span>
        </button>
      </div>
    </section>
  );
}
