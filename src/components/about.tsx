import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 max-w-6xl mx-auto py-40">
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
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/vite.svg"
          alt="Profile"
          className="rounded-lg shadow-lg w-64 h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
