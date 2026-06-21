import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <div className="relative min-h-screen bg-overlay">
      <Hero />
      <Education />
      <Experience />
    </div>
  );
}
