import { FaArrowRight } from "react-icons/fa";

export default function Eventpart() {
  const lists = [
    { content: "Exhibitions" },
    { content: "Conferences" },
    { content: "Solidarity bibs" },
    { content: "Charity streamings" },
  ];

  return (
    <section
      id="event-part"
      className="flex flex-col gap-10 py-14 px-lg lg:px-6xl"
    >
      <header className="w-full flex flex-col items-start gap-4">
        <h2 className="text-xl lg:text-4xl">
          Throughout the year, you can support us by taking part in the various
          events we organize.
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        {lists.map((item, index) => (
          <p key={item.content} className="text-sm flex items-center gap-2">
            <FaArrowRight size={22} className="text-cyan-600" />
            {item.content}
          </p>
        ))}
      </div>
    </section>
  );
}
