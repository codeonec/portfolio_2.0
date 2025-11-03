import React from "react";
import LiquidEther from "./LiquidEther";

const Hero: React.FC = () => (
  <section className="flex flex-col items-center justify-center relative">
    <div style={{ width: "100%", height: 700, position: "relative" }}>
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
    <div className="absolute top-1/2 transform -translate-y-1/2 px-4">
      <h1 className="text-8xl mb-6 text-center uppercase">
        Hello <span className="inline-block"><img src="/images/hand_wave.gif" alt="hello" className="h-20"/></span>, I'm <span className="underline decoration-4 underline-offset-8 decoration-[#7868E5]">Ritul</span>
      </h1>
      <h2 className="text-2xl mb-4 text-center">
        Website and UI & Designer
      </h2>
      <p className="text-lg max-w-xl mx-auto text-center text-gray-400">
        I'm a designer and developer based in Canada who creates digital
        experiences and interfaces.
      </p>
    </div>
  </section>
);

export default Hero;
