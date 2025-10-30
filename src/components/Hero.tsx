import React from "react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import heroImg from "../assets/jeff.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center"
    >
      <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-32">
        
        <img
          src={heroImg}
          alt="Jeffrey Lim"
          className="w-40 h-40 rounded-full object-cover border-1 border-primary "
        />

        <h1 className="text-6xl text-primary font-extrabold tracking-tight sm:text-5xl">
          <span className="animate-glow-left-right">Jeffrey Lim</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-white/80">
          Software Developer & Student
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a href="https://github.com/TempestSt3rm" target="_blank" rel="noreferrer">
            <Button size="lg" variant="solid">
            View Projects
            </Button>
          </a>
          <a href="./cv.pdf" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
          </a>
          
        </div>
      </Container>
    </section>
  );
};
