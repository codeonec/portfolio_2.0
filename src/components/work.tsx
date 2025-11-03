import Component from "./stacking-card";

const projects = [
  {
    title: "Designbase",
    description:
      "A curated collection of helpful websites that were created using Next JS static generation and contain 200+ design resources such as illustrations, fonts, icons, UI Inspirations, Design Systems, Design Guides, and so on. Open Source library built with React JS, Next JS, and a structured JSON database.",
    link: "/images/designbase.png",
    color: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    liveLink: "https://designbase.vercel.app/",
  },
  {
    title: "Stact",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    link: "/images/stact.png",
    color: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    liveLink: "https://stact.vercel.app/",
  },
  {
    title: "Masterpiece",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    link: "/images/masterpiece.png",
    color: "linear-gradient(to right, #403a3e, #be5869)",
    liveLink: "https://codeonec.netlify.app/masterpiece/index.html",
  },
  {
    title: "Prodco",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    link: "/images/prodco.png",
    color: "linear-gradient(to right, #141e30, #243b55)",
    liveLink: "https://codeonec.netlify.app/prodco/index.html",
  },
];

export default function Work() {
  return (
    <div>
      <h2 className="text-center">Work</h2>
      <Component projects={projects} />
    </div>
  );
}
