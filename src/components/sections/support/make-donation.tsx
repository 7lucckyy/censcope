"use client";

export default function MakeDonation() {
  return (
    <section id="make-donation" className="flex flex-col gap-10 py-14">
      <header className="w-full flex flex-col items-start gap-4 px-lg lg:px-5xl">
        <h2 className="text-xl lg:text-4xl">Make a donation</h2>
        <div className="text-sm lg:text-base text-justify flex flex-col gap-6">
          <p className="">
            Première Urgence Internationale&#39;s mission is simple: to provide
            vital humanitarian aid to populations affected by conflicts,
            climatic hazards and health and economic crises around the world.
          </p>

          <p className="">
            Every year, your support enables us to make a positive impact on the
            lives of <b>5 million people</b> in crisis zones, including
            “forgotten” crises that attract little attention from the media or
            institutional donors.
          </p>
          <p className="">
            Every donation counts and has the power to change the course of a
            life.
            <br />
            <br />
            Your generosity and the trust you place in the work of our teams are
            the cornerstones of our humanitarian operations
          </p>
        </div>
      </header>
    </section>
  );
}
