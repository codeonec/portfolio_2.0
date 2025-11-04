import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto py-40 px-4" id="about">
      {/* Left Column */}
      <div className="md:w-1/2 w-full">
        <h2 className="mb-4">
          I design with curiosity, build with intention, and launch with impact.
        </h2>
        <p className="text-gray-400">
          Crafting bold, interactive UIs built on modern tech stacks. Blending
          creativity with functionality—delivering seamless experiences tha
          shine across platforms and devices. Based in Canada, open to full-time
          roles and freelance projects.
        </p>
      </div>
      {/* Right Column */}
      <div className="md:w-1/2 w-full h-full mx-4 flex justify-center">
        <img
          src="/images/about.png"
          alt="Profile"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default About;
