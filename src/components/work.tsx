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
      "Stact is a ReactJS-based multi-purpose front-end template. It has over 15 pages with a mobile-friendly UI that is simple, clean, and easy to navigate.",
    link: "/images/stact.png",
    color: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    liveLink: "https://stact.vercel.app/",
  },
  {
    title: "Masterpiece",
    description:
      "Bootstrap-based static Front End template designed for enterprises, startups, and digital agencies. Available exclusively on Themeforest with 50+ sales.",
    link: "/images/masterpiece.png",
    color: "linear-gradient(to right, #403a3e, #be5869)",
    liveLink: "https://codeonec.netlify.app/masterpiece/index.html",
  },
  {
    title: "Prodco",
    description:
      "ProdCo is a product landing page template with two dark and light mode designs. Sold more than 30 times on Themeforest.",
    link: "/images/prodco.png",
    color: "linear-gradient(to right, #141e30, #243b55)",
    liveLink: "https://codeonec.netlify.app/prodco/index.html",
  },
];

export default function Work() {
  return (
    <div id="work">
      <h2 className="text-center">Selected Work</h2>
      <Component projects={projects} />
    </div>
  );
}
