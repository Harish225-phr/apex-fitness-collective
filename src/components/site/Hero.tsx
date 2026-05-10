import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20"
        style={{ transform: `translateY(${y * 0.3}px) scale(1.05)` }}
      >
        <img
          src={hero}
          alt="Athlete training in cinematic dark gym"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: `-${(i * 7) % 30}px`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              background: i % 3 === 0 ? "var(--neon-red)" : i % 3 === 1 ? "var(--electric-blue)" : "var(--lime-energy)",
              boxShadow: "0 0 12px currentColor",
              color: i % 3 === 0 ? "#FF3B3B" : i % 3 === 1 ? "#00D4FF" : "#A3FF12",
              animation: `particle ${10 + (i % 8)}s linear ${i * 0.6}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Light streaks */}
      <div className="absolute -top-20 left-1/4 -z-10 h-[120%] w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent rotate-12 pulse-glow" />
      <div className="absolute -top-20 right-1/3 -z-10 h-[120%] w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent -rotate-6 pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 pt-40 pb-24 md:pt-48 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <div className="reveal in max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-energy animate-pulse" />
            Elite Training • Est. 2014
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            Transform Your <span className="text-glow-red text-primary">Body.</span>
            <br />
            Upgrade Your <span className="text-glow-blue text-accent">Life.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground tracking-wide">
            <span className="text-foreground">Strength</span> · <span className="text-foreground">Fitness</span> · <span className="text-foreground">Transformation</span> · <span className="text-foreground">Discipline</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground glow-red hover:scale-105 transition-all"
            >
              Join Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#transform"
              className="group inline-flex items-center gap-3 rounded-full glass-strong px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:border-accent transition-all"
            >
              Start Transformation
            </a>
          </div>

          <div className="mt-16 hidden sm:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-primary" /> 500+ Members
            </div>
            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-accent" /> 1000+ Transformations
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-foreground to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
