import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  logoSrc: string;
  logoFillsFrame?: boolean;
  logoZoom?: boolean;
  description: string[];
  technologies?: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  logoSrc,
  logoFillsFrame = false,
  logoZoom = false,
  description,
  technologies
}) => {
  return (
    <div className="bg-gray-600 bg-opacity-10 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md ${
              logoFillsFrame ? "bg-[#07365b]" : "bg-white p-1.5"
            }`}
          >
            <img
              src={logoSrc}
              alt=""
              className={`h-full w-full ${
                logoFillsFrame
                  ? "translate-x-0.5 scale-125 object-cover object-[60%_center]"
                  : `${logoZoom ? "scale-125" : ""} object-contain`
              }`}
            />
          </div>
          <div>
            <h3 className="card-heading text-2xl font-bold">{title}</h3>
            <p className="text-lg text-white/80">{company}</p>
          </div>
        </div>
        <p className="mt-2 text-base leading-8 text-white/60 sm:mt-0">{period}</p>
      </div>
      
      <div className="space-y-2 text-white/80 mb-4">
        {description.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
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

