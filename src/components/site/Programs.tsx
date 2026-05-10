import { Dumbbell, Flame, Heart, Target, Timer, Zap } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build raw strength with progressive lifting protocols.", color: "primary" },
  { icon: Flame, title: "Fat Loss Program", desc: "High-intensity protocols engineered for rapid results.", color: "accent" },
  { icon: Zap, title: "Muscle Building", desc: "Hypertrophy programming for sculpted, dense muscle.", color: "lime" },
  { icon: Target, title: "Personal Training", desc: "1-on-1 coaching tailored to your unique goals.", color: "primary" },
  { icon: Heart, title: "Cardio Sessions", desc: "Endurance work that elevates your conditioning.", color: "accent" },
  { icon: Timer, title: "Functional Fitness", desc: "Move better. Perform better. Live longer.", color: "lime" },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg -z-10 opacity-50" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Training Programs</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
              Built For <span className="text-gradient-fire">Every Goal.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Pick your battle. Six elite programs designed to forge a stronger version of you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const colorClass =
              p.color === "primary" ? "text-primary" : p.color === "accent" ? "text-accent" : "text-lime-energy";
            const glowClass =
              p.color === "primary" ? "group-hover:shadow-[0_0_60px_-10px_oklch(0.65_0.27_25/0.7)]" :
              p.color === "accent" ? "group-hover:shadow-[0_0_60px_-10px_oklch(0.78_0.18_220/0.7)]" :
              "group-hover:shadow-[0_0_60px_-10px_oklch(0.92_0.22_130/0.6)]";
            return (
              <div
                key={p.title}
                className={`reveal group relative overflow-hidden rounded-2xl glass neon-border p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 ${glowClass}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface ${colorClass}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground transition-colors">
                  Explore
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
