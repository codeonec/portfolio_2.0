import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Navbar } from "./components/navigation";
import Timeline from "./components/timeline";
import Work from "./components/work";

// TODOs:
// 1. Animate about poster
// ALMOST DONE - 2. Add timeline glow on scroll
// DONE - 3. Create what I work with section
// 4. Add design showcase
// 5. Integrate analytics

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Work />
      <Footer />
    </>
  );
}

export default App;
