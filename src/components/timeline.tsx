import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";

type Experience = {
  jobTitle: string;
  company: string;
  duration: string;
  image: string;
};

const experiences: Experience[] = [
  {
    jobTitle: "Cloud Application Developer",
    company: "Azoma.ai",
    duration: "Feb 2024 - May 2024",
    image: "/images/azoma.avif",
  },
  {
    jobTitle: "Junior Software Engineer",
    company: "Pilotplans",
    duration: "Jun 2020 - Dec 2021",
    image: "/images/pilot.png",
  },
  {
    jobTitle: "Freelance Web Developer",
    company: "Themeforest",
    duration: "Jan 2020 - May 2020",
    image: "/images/themeforest.png",
  },
];

const Timeline: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div
      className="flex md:flex-row flex-col w-full max-w-6xl mx-auto py-40 px-4"
      ref={ref}
    >
      {/* Left Column: Sticky Heading */}
      <div className="md:w-1/2 md:pr-8 mb-16 md:mb-0">
        <div className="sticky top-24">
          <h2>Professional Journey</h2>
        </div>
      </div>
      {/* Right Column: Timeline */}
      <div className="md:w-1/2 relative pt-5">
        <ol className="relative before:absolute before:ml-[7.5px] md:before:-ml-px before:h-full before:w-[1px] before:rounded-full before:bg-gray-500">
          <div className="rotate-90 absolute top-0 -left-[.5px] right-0 w-full h-[2px] origin-left px-3 overflow-hidden">
            <motion.div
              id="scroll-indicator"
              style={{
                scaleX: scrollYProgress,
                height: 10,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                originX: 0,
                transform: "rotate(90deg)",
                backgroundColor: "#fff6e8",
              }}
            />
          </div>
          {experiences.map((exp, index) => (
            <li
              className="relative md:-ms-[8.5px] flex items-start gap-4 mb-24"
              key={index}
            >
              <span className="size-4 shrink-0 rounded-full bg-[#7868E5]"></span>
              <div className="-mt-2">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.image}
                    className="h-6 shadow-gray-50"
                    alt={exp.company}
                  />
                  <h3>{exp.company}</h3>
                </div>
                <div className="text-xl my-2">{exp.jobTitle}</div>
                <time className="font-medium text-gray-400">
                  {exp.duration}
                </time>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
