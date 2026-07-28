import React from "react";
import { Container } from "./ui/Container";
import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    title: "ASTRA Telemetry Protocol",
    description:
      "A shared packet format and control protocol connecting the flight computer, radios, and ground-station software.",
    technologies: ["C/C++", "Embedded Systems", "Protocol Design", "LoRa RF"],
    href: "/projects/mcgill-rocket-team-radios"
  },
  {
    title: "Variable Telemetry System",
    description:
      "A configurable telemetry architecture for selecting, serializing, and transmitting flight variables.",
    technologies: ["C/C++", "Telemetry", "Serialization", "Embedded Systems"],
    href: "/projects/variable-telemetry-system"
  }
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center pb-32 pt-12"
    >
      <Container className="flex w-full flex-col gap-12">
        <h2 className="mb-8 text-center text-5xl font-extrabold text-primary">
          Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              href={project.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
