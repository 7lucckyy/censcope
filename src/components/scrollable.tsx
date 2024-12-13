import { useIntersectionObserver } from "@/hooks/observe.hook";
import { useEffect, useMemo, useRef, useState } from "react";

interface SectionConfig {
  id: string;
  label: string;
  component: React.ElementType;
}

export default function ScrollableSection(props: {
  sections: SectionConfig[];
}) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  const { ref, entryData } = useIntersectionObserver();

  useEffect(() => {
    if (entryData) {
      const { bottom, height, top } = entryData.boundingClientRect;

      const progress = (top / height) * 100;

      setScrollProgress(Math.max(-progress + 10, 0));
    }
  }, [entryData]);

  useEffect(() => {
    props.sections.forEach(({ id }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const { top, height } = entry.boundingClientRect;

          // When scrolling down, activate when element reaches top
          if (top <= 0 && entry.isIntersecting) {
            setActiveSection(id);
          }

          // When scrolling up, activate when element is 200px from top
          if (top <= 200 && top > 0 && entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "-200px 0px 0px 0px",
        }
      );

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        sectionRefs.current[id] = observer;
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((observer) =>
        observer.disconnect()
      );
    };
  }, [props.sections]);

  return (
    <div className="w-full flex flex-col">
      <header
        className={`${
          scrollProgress > 0
            ? "fixed top-20 lg:top-28 left-0 right-0"
            : "relative"
        } bg-white z-50 p-4 transition-all duration-300`}
      >
        <div className="hidden lg:flex gap-4 px-md items-center justify-evenly">
          {props.sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-4 py-2 rounded font-titillium ${
                activeSection === id ? "text-cyan-600" : "text-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="h-0.5 bg-gray-200 mt-4 overflow-hidden">
          <div
            className="h-full bg-cyan-600 transition-all ease-linear duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <div ref={ref} className="flex-1 overflow-y-auto">
        {props.sections.map((section) => (
          <section.component key={section.id} />
        ))}
      </div>
    </div>
  );
}
