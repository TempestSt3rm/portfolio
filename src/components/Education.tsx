import React from "react";
import { Container } from "./ui/Container";
import { EducationCard } from "./ui/EducationCard";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="flex items-center justify-center pt-20"
    >
      <Container className="flex w-full flex-col gap-12 pt-20">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-8">
          Education
        </h2>
        
        <div className="flex flex-col gap-8">
          <EducationCard
            title="Bachelor of Computer Engineering"
            company="McGill University · Internship Program"
            period="Aug 2023 – May 2027"
            technologies={["GPA: 3.95 / 4.00"]}
          />
        </div>
      </Container>
    </section>
  );
};

