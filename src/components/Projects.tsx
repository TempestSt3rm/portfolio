import React from "react";
import { Container } from "./ui/Container";
import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    title: "McGill Rocket Team Radios Firmware",
    description:
      "Embedded radio and telemetry systems for long-range communication between a rocket and its ground station.",
    technologies: ["C/C++", "Embedded Systems", "LoRa RF", "MQTT"]
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
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
