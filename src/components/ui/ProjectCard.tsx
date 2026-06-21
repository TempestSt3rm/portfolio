import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  href
}) => {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="card-heading text-2xl font-bold">{title}</h3>
        <span className="shrink-0 text-xl text-white/50" aria-hidden="true">
          →
        </span>
      </div>

      <p className="mt-3 text-white/80">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-thirdColor px-3 py-1 text-xs text-white"
          >
            {technology}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "block rounded-lg border border-primary/20 bg-gray-600 bg-opacity-10 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-opacity-15";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
};
