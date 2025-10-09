import React from "react";

type Experience = {
  jobTitle: string;
  company: string;
  duration: string;
};

const experiences: Experience[] = [
  { jobTitle: "Cloud Application Developer", company: "Azoma.ai", duration: "Feb 2024 - May 2024" },
  { jobTitle: "Junior Software Engineer", company: 'Pilotplans', duration: "Jun 2020 - Dec 2021" },
  { jobTitle: "Freelance Web Developer", company: 'Themeforest', duration: "Jan 2020 - May 2020" },
];

const Timeline: React.FC = () => (
  <div className="flex w-full max-w-6xl mx-auto py-40 ">
    {/* Left Column: Sticky Heading */}
    <div className="w-1/2 pr-8">
      <div className="sticky top-24">
        <h2>Professional Journey</h2>
      </div>
    </div>
    {/* Right Column: Timeline */}
    <div className="w-1/2 relative pt-5">
      <ol className="relative before:absolute before:-ml-px before:h-full before:w-[1px] before:rounded-full before:bg-gray-500">
        {experiences.map((exp, index) => (
          <li className="relative -ms-[8.5px] flex items-start gap-4 mb-16" key={index}>
            <span className="size-4 shrink-0 rounded-full bg-[#7868E5]"></span>

            <div className="-mt-2">
              <h3>{exp.company}</h3>
              <div className="text-md">{exp.jobTitle}</div>
              <time className="text-sm font-medium text-gray-400">
                {exp.duration}
              </time>

            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default Timeline;
