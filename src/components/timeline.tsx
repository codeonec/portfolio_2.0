import React, { useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { FileCog } from "lucide-react";

type Experience = {
  jobTitle: string;
  company: string;
  duration: string;
  image?: string;
  link?: string;
};

type CompanyVisualProps = {
  image?: string;
  company: string;
};

const CompanyVisual: React.FC<CompanyVisualProps> = ({ image, company }) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (!image || imageFailed) {
    return <FileCog className="h-6 w-6 text-gray-300" aria-label={`${company} icon`} />;
  }

  return (
    <img
      src={image}
      className="h-6 shadow-gray-50"
      alt={company}
      onError={() => setImageFailed(true)}
    />
  );
};

const experiences: Experience[] = [
  {
    jobTitle: "Independent Software Engineer",
    company: "Prowbot - AI Personal Finance App",
    duration: "Nov 2024 - Present",
    link: "https://github.com/codeonec/prowbot",
  },
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
          <div className="absolute left-[7px] md:-left-[1px] top-0 w-[2px] h-full">
            <motion.div
              id="scroll-indicator"
              style={{
                scaleY: scrollYProgress,
                height: '100%',
                width: "1.5px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                originY: 0,
                backgroundColor: "#fff6e8",
                boxShadow: "0 0 8px #fff6e8",
                background: "linear-gradient(359deg,rgba(255, 246, 232, 1) 0%, rgba(255, 246, 232, 0) 100%)",
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
                  <CompanyVisual image={exp.image} company={exp.company} />
                  <h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 decoration-[#fff6e8] hover:opacity-90"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
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
