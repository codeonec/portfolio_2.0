"use client";
import { ReactLenis } from "lenis/react";
import { MoveUpRight } from "lucide-react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef, forwardRef } from "react";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  liveLink: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  liveLink: string;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  liveLink,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-[60px] md:top-[20px]"
    >
      <motion.div
        style={{
          background: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[550px] md:h-[450px] w-[95%] sm:w-[90%] md:w-[90%] lg:w-[70%] max-w-[860px] rounded-md p-10 origin-top`}
      >
        <div
          className={`flex flex-col md:flex-row h-full mt-5 gap-5 md:gap-10`}
        >
          <div className={`md:w-[40%] relative md:top-[10%]`}>
            <h3 className="text-4xl mb-4">{title}</h3>
            <p className="text-sm">{description}</p>
            <span className="flex items-center pt-2">
              <a
                href={liveLink}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a>
              <MoveUpRight height={18} />
            </span>
          </div>

          <div
            className={`relative md:w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt="image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(
  ({ projects }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

    return (
      <ReactLenis root>
        <main ref={container}>
          <section className="w-full">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                  liveLink={project.liveLink}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  }
);

Component.displayName = "Component";

export default Component;
