const items = [
  "Push Beyond Limits",
  "Become Stronger",
  "Discipline Creates Results",
  "No Excuses",
  "Train Hard",
  "Earn Your Body",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <section className="relative border-y border-border/50 bg-surface/40 py-6 overflow-hidden">
      <div className="marquee">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl sm:text-4xl tracking-widest text-foreground/80">
            {t}
            <span className="text-primary text-glow-red">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
