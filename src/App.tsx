import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="relative min-h-screen bg-overlay">
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
