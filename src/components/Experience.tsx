import React from "react";
import { Container } from "./ui/Container";
import { ExperienceCard } from "./ui/ExperienceCard";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  logoSrc: string;
  logoFillsFrame?: boolean;
  logoZoom?: boolean;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Squarepoint Capital",
    company: "SDE Intern",
    period: "Jun - Aug 2026",
    logoSrc: "/Squarepoint_Capital_cropped.svg.png",
    description: [
      "Risk Engineering",
      "Developed a distributed integration-testing platform for risk applications.",
      "Supported risk applications through an on-call rotation during trading hours."
    ],
    technologies: ["Python", "CI/CD","q kdb+"]
  },
  {
    title: "Autodesk",
    company: "SDE Intern",
    period: "Sep - Dec 2025",
    logoSrc: "/Autodesk_Logo_2021.svg.png",
    logoZoom: true,
    description: [
      "Flame Application",
      "Developed user-facing features and customizable media naming workflows."
    ],
    technologies: ["C/C++", "Qt", "Python", "Linux", "macOS"]
  },
  {
    title: "Morgan Stanley",
    company: "SDE Intern",
    period: "May – Aug 2025",
    logoSrc: "/morgan_stanley_logo.png",
    logoFillsFrame: true,
    description: [
      "Compliance Technology",
      "Automated large-scale employee data-disposition workflows."
    ],
    technologies: ["Java", "Spring Boot", "SQL"]
  },
  {
    title: "Bell Canada",
    company: "SDE Intern",
    period: "May - Aug 2024",
    logoSrc: "/Bell_logo.svg.png",
    description: [
      "Wireline Network Automation",
      "Built internal full-stack microservice for non-technical managers to automate operations."
    ],
    technologies: ["Vue.js", "JavaScript", "Python", "SQL", "Docker"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="flex items-center justify-center pb-20 pt-12"
    >
      <Container className="flex w-full flex-col gap-12 pb-20">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-8">
          Experience
        </h2>
        
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              logoSrc={exp.logoSrc}
              logoFillsFrame={exp.logoFillsFrame}
              logoZoom={exp.logoZoom}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

