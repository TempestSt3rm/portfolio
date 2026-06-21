import React from "react";
import { Container } from "./ui/Container";
import heroImg from "../assets/jeff.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center "
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
      </Container>
    </section>
  );
};
