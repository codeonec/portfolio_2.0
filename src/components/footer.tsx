import { Github, Linkedin, MoveUpRight, Twitter } from "lucide-react";
import React from "react";
import { LinkButton } from "./button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12">
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
              <LinkButton
                href="https://rxresu.me/codeonec/ritul-patel-resume"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                Resume
              </LinkButton>
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 bg-zinc-900 p-3 rounded-full"
                aria-label="GitHub"
              >
                <Github strokeWidth={1.5} height={20} width={20} />
              </a>

              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 bg-zinc-900 p-3 rounded-full"
                aria-label="Twitter"
              >
                <Twitter strokeWidth={1.5} height={20} width={20} />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 bg-zinc-900 p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin strokeWidth={1.5} height={20} width={20} />
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
            <a href="/about" className="text-gray-400 hover:text-gray-300">
              About
            </a>
            <a href="/work" className="text-gray-400 hover:text-gray-300">
              Work
            </a>
            <a href="/contact" className="text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
