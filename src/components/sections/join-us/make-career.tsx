"use client";

import NewslineCard from "@/components/landing/cards/newsline";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MakeCareer() {
  return (
    <section id="make-career" className="flex flex-col gap-10 py-14">
      <header className="w-full flex flex-col items-start gap-4 px-lg lg:px-5xl">
        <h2 className="text-xl lg:text-4xl">Make a donation</h2>

        <p>
          Involvement in humanitarian aid does not necessarily mean working in
          the field. There are many other jobs at head office that are just as
          essential to our projects in the field.
        </p>
      </header>

      <div className="w-full min-h-80 bg-gray-100 bg-spiral bg-center py-20 px-md lg:px-5xl">
        <div className="flex flex-1 p-4 flex-col lg:flex-row items-center lg:items-stretch">
          <Image
            alt=""
            width={1000}
            height={1000}
            src="/images/support.jpg"
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-4 px-lg lg:px-5xl">
        <h2 className="text-xl lg:text-3xl">
          Working at headquarters or in the field
        </h2>

        <div className="text-sm lg:text-base text-justify flex flex-col gap-6">
          <p>
            At Première Urgence Internationale, we never send volunteers into
            the field. Even with a great deal of determination, it’s not enough:
            field positions require very specific skills, and there are numerous
            training courses and university curricula to meet these needs.
          </p>

          <p>
            Field positions open to international expatriates are generally
            coordination, project management and management positions. They
            currently represent around 220 positions in our 25 countries of
            operation.
          </p>

          <p>
            Our 25 field missions are staffed by national employees recruited
            directly in the countries where we operate. They represent some
            3,000 positions worldwide.
          </p>

          <p>
            But working in the humanitarian sector isn’t just about working in
            the field. To carry out our projects successfully, we need talent at
            head office in support functions such as Communications, Information
            Systems, Human Resources, Finance, Logistics and General Services.
            Although these positions are not necessarily in the field, they are
            in close contact with our employees around the world. Currently, 140
            people work at Première Urgence Internationale’s headquarters just
            outside Paris, in Asnières-Sur-Seine.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-4 px-lg lg:px-5xl">
        <h2 className="text-xl lg:text-3xl">Encouraging change and mobility</h2>

        <div className="text-sm lg:text-base text-justify flex flex-col gap-6">
          <p>
            Première Urgence Internationale supports the professional
            development of its employees by offering numerous opportunities for
            internal growth and ongoing development, and by encouraging mobility
            between field and head office.
          </p>

          <p>
            Training is a priority for us, as it is essential for improving the
            skills, efficiency and motivation of our staff. By investing in the
            professional development of our teams, we guarantee a better quality
            of intervention and greater adaptability to humanitarian challenges.
          </p>

          <p>
            If you would like more information about training and working in the
            humanitarian sector, please visit the portal of our partner{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              solidaire-info.org.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
