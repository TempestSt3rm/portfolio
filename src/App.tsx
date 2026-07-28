import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { ProjectArticle } from "./components/ProjectArticle";

export default function App() {
  if (window.location.pathname === "/projects/mcgill-rocket-team-radios") {
    return <ProjectArticle project="radios-firmware" />;
  }

  if (window.location.pathname === "/projects/variable-telemetry-system") {
    return <ProjectArticle project="variable-telemetry" />;
  }

  return (
    <div className="relative min-h-screen bg-overlay">
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
