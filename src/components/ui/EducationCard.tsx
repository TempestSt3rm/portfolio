import React from "react";

interface EducationCardProps {
  title: string;
  company: string;
  period: string;
  technologies?: string[];
}

export const EducationCard: React.FC<EducationCardProps> = ({
  title,
  company,
  period,
  technologies
}) => {
  return (
    <div className="bg-gray-600 bg-opacity-10 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3 className="card-heading text-2xl font-bold">{title}</h3>
          <p className="text-lg text-white/80">{company}</p>
        </div>
        <p className="mt-2 text-base leading-8 text-white/60 sm:mt-0">{period}</p>
      </div>
      
      {technologies && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-thirdColor text-white text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

