"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function DonateReason() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="donate-reason"
      className="flex flex-col gap-10 py-14 bg-gray-100"
    >
      <header className="w-full flex flex-col items-center text-center gap-4 px-md lg:px-lg">
        <h2 className="text-xl lg:text-4xl">Why and HOW to donate ?</h2>
        <p className="text-sm lg:text-base text-center lg:w-3/5">
          <b>Your donations guarantee our freedom and effectiveness.</b>
          <br />
          <br />
          Première Urgence Internationale teams intervene in major crises and
          are constantly adjusting their responses to new emergencies: in
          situations of conflict or climate-related disasters,{" "}
          <b>
            it is vital for the victims that we can react as quickly as
            possible.
          </b>
          <br />
          <br />
          To help the most vulnerable populations, we need to be able to
          mobilize our own funds immediately in case of an emergency, so that we
          can respond as effectively as possible.
          <br />
          <br />
          <b>
            With your support, we can ensure and anticipate this rapid response.
          </b>
          <br />
          <br />
          In addition to our emergency operations, your donations also fund
          reconstruction and development programs. In this way, you help entire
          communities to rebuild and regain their independence.
          <br />
          <br />
          Première Urgence Internationale is committed to using every penny
          efficiently and transparently. We regularly publish detailed financial
          reports to show you the tangible impact of your generosity.
        </p>
      </header>

      <div className="w-full flex flex-col lg:flex-row gap-20 px-md lg:px-2xl">
        <div className="flex-1 flex my-auto flex-col items-center">
          <div className="w-full aspect-video bg-black"></div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center lg:items-start gap-6">
            <h3 className="p-4 flex items-center justify-center max-w-80 lg:max-w-96 bg-white font-cavet text-xl lg:text-4xl font-semibold relative before:absolute before:w-full before:scale-x-110 before:h-2/3 before:bg-inherit before:rotate-12 after:absolute after:w-full after:scale-x-105 after:h-2/3 after:bg-inherit after:-rotate-6">
              <span className="z-10 text-cyan-600">Donate occasionally</span>
            </h3>

            <p className="text-xs lg:text-sm lg:w-5/6">
              Use our secure form to make a one-time donation. It&#39;s quick,
              easy and you can choose the amount that suits you best.
            </p>
          </div>

          <div className="w-full flex flex-col items-center lg:items-start gap-6">
            <h3 className="p-4 flex items-center justify-center max-w-80 lg:max-w-96 bg-white font-cavet text-xl lg:text-4xl font-semibold relative before:absolute before:w-full before:scale-x-110 before:h-2/3 before:bg-inherit before:rotate-12 after:absolute after:w-full after:scale-x-105 after:h-2/3 after:bg-inherit after:-rotate-6">
              <span className="z-10 text-cyan-600">Donate regularly</span>
            </h3>

            <p className="text-xs lg:text-sm lg:w-5/6">
              Use our secure form to make a one-time donation. It&#39;s quick,
              easy and you can choose the amount that suits you best.
            </p>
          </div>

          <div className="w-full flex flex-col items-center lg:items-start gap-6">
            <h3 className="p-4 flex items-center justify-center max-w-80 lg:max-w-96 bg-white font-cavet text-xl lg:text-4xl font-semibold relative before:absolute before:w-full before:scale-x-110 before:h-2/3 before:bg-inherit before:rotate-12 after:absolute after:w-full after:scale-x-105 after:h-2/3 after:bg-inherit after:-rotate-6">
              <span className="z-10 text-cyan-600 text-center">
                Life insurance: a gift within everyone&#39;s reach
              </span>
            </h3>

            <p className="text-xs lg:text-sm lg:w-5/6">
              You can designate Première Urgence Internationale as the
              beneficiary of all or part of the capital saved in your life
              insurance policy. It&#39;s a way of giving lasting support to our
              actions and making a commitment that goes beyond your own
              lifetime. Don&#39;t hesitate to ask your bank or insurance company
              for advice on the options best suited to your situation and needs.
            </p>
          </div>

          <div className="w-full flex flex-col items-center lg:items-start gap-6">
            <h3 className="p-4 flex items-center justify-center max-w-80 lg:max-w-96 bg-white font-cavet text-xl lg:text-4xl font-semibold relative before:absolute before:w-full before:scale-x-110 before:h-2/3 before:bg-inherit before:rotate-12 after:absolute after:w-full after:scale-x-105 after:h-2/3 after:bg-inherit after:-rotate-6">
              <span className="z-10 text-cyan-600">Give with confidence</span>
            </h3>

            <p className="text-xs lg:text-sm lg:w-5/6">
              Every year, 93% of our financial resources are allocated directly
              to our social missions in the field. Only 0.5% is spent on
              fundraising. Every year, our association is audited by SGS ICS,
              which attests to the rigor and transparency of our operations and
              management. We have been awarded the “DO GOOD” label by GANDEE (2
              stars) as part of an audit carried out in 2021 and updated every
              year since. You can consult the rating criteria for this label
              here.
            </p>
          </div>
        </div>
      </div>

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
              Axelle Marcot
            </h4>
            <span className="text-sm">
              Fundraising Officer © Première Urgence Internationale
            </span>

            <blockquote className="lg:w-5/6 text-justify font-anton my-4 text-xl">
              Your donations guarantee Première Urgence Internationale&#39;s
              freedom of action. Every year, your support enables us to have a
              positive impact on the lives of millions of people in crisis
              zones, including “forgotten” crises that receive little attention
              from the media or institutional donors.
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
