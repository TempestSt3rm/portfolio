import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(52,253,223,0.18)_0%,rgba(4,6,10,0.85)_50%,#04060a_100%)]" />
      <Hero />
    </div>
  );
}
