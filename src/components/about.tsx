import React from "react";
import ScrollVelocity from "./ScrollVelocity";
import {
  FigmaDark,
  GcpDark,
  GraphqlDark,
  Javascript,
  Mongodb,
  NextjsDark,
  NodejsDark,
  ReactDark,
  Sass,
  TailwindcssDark,
  Typescript,
  ViteDark,
} from "./devIcons";

const About: React.FC = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto py-40 px-4"
        id="about"
      >
        {/* Left Column */}
        <div className="md:w-1/2 w-full">
          <h2 className="mb-4">
            I design with curiosity, build with intention, and launch with
            impact.
          </h2>
          <p className="text-gray-400">
            Crafting bold, interactive UIs built on modern tech stacks. Blending
            creativity with functionality—delivering seamless experiences tha
            shine across platforms and devices. Based in Canada, open to
            full-time roles and freelance projects.
          </p>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 w-full h-full mx-4 flex justify-center">
          <img src="/images/about.png" alt="Profile" className="object-cover" />
        </div>
      </div>
      <div className="lg:mb-20">
        <h2 className="mb-6 text-center">Techs I work with</h2>
        <ScrollVelocity
          texts={[
            <span key="t-1" className="flex gap-5 mr-5">
              <ReactDark />
              <NodejsDark />
              <NextjsDark />
              <TailwindcssDark />
              <GraphqlDark />
              <Mongodb />
              <FigmaDark />
              <Typescript />
              <GcpDark />
              <Javascript />
              <Sass />
              <ViteDark />
            </span>,
            <span key="t-2" className="flex gap-5 mr-5 mt-5">
              <Mongodb />
              <ViteDark />
              <Typescript />
              <FigmaDark />
              <GraphqlDark />
              <TailwindcssDark />
              <Sass />
              <GcpDark />
              <NextjsDark />
              <ReactDark />
              <Javascript />
              <NodejsDark />
            </span>,
          ]}
          velocity={15}
          className="custom-scroll-text"
        />
      </div>
    </>
  );
};

export default About;
