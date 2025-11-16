import { Dribbble, Github, Linkedin, MoveUpRight, Twitter } from "lucide-react";
import React from "react";
import { LinkButton } from "./button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Upper row: two columns */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-6 border-b border-gray-800">
          {/* Left column: heading + links (About, Work, Contact) */}
          <div className="">
            <h2 className="">Design Meets Code — Let’s Connect</h2>
            <div className="mt-4 text-sm">
              <span className="text-gray-400">Reach me out at:</span>
              <br />
              <a
                href="mailto:hello@example.com"
                className="hover:text-gray-300 underline underline-offset-4 decoration-[0.5px] flex gap-0"
              >
                ritul.patel904@gmail.com <MoveUpRight height={18} />
              </a>
            </div>
          </div>

          {/* Right column: vertical contact actions (Email, Resume) */}
          <div className="">
            <div className="flex flex-col space-y-2 text-sm">
              <a
                className="relative z-10 px-4 py-2 text-center  sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto"
                href="https://rxresu.me/codeonec/ritul-patel-resume"
                target="_blank"
              >
                Resume
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <a
                href="https://github.com/codeonec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 border border-[#333] hover:border-white/50 transition-colors duration-200 bg-zinc-900 p-3 rounded-full"
                aria-label="GitHub"
              >
                <Github strokeWidth={1.5} height={20} width={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ritulspatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 border border-[#333] hover:border-white/50 bg-zinc-900 transition-colors duration-200 p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin strokeWidth={1.5} height={20} width={20} />
              </a>
              <a
                href="https://dribbble.com/codeonec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 border border-[#333] hover:border-white/50 bg-zinc-900 transition-colors duration-200 p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <Dribbble strokeWidth={1.5} height={20} width={20} />
              </a>
              <a
                href="https://x.com/ritulspatel"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900 p-3 border border-[#333] hover:border-white/50 rounded-full"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 21L10.548 13.452M10.548 13.452L3 3H8L13.452 10.548M10.548 13.452L16 21H21L13.452 10.548M21 3L13.452 10.548"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="stroke-gray-400 group-hover:stroke-gray-300 transition-colors duration-200"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: social links + copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Copyright & all...
          </div>
          <div className="inline-flex space-x-4 text-sm">
            <a href="#about" className="text-gray-400 hover:text-gray-300">
              About
            </a>
            <a href="#work" className="text-gray-400 hover:text-gray-300">
              Work
            </a>
            <a href="#hero" className="text-gray-400 hover:text-gray-300">
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
