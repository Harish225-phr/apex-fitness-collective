import { useEffect, useRef, useState } from "react";
import transform from "@/assets/transform.jpg";

function Counter({ to, suffix = "+", label }: { to: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl sm:text-7xl text-gradient-fire">
        {val}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Transformation() {
  const [pos, setPos] = useState(50);

  return (
    <section id="transform" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">// Real Results</p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
            Your Transformation <br /><span className="text-glow-blue text-accent">Starts Here.</span>
          </h2>
        </div>

        {/* Before/after slider */}
        <div className="reveal mx-auto max-w-5xl">
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl glass-strong select-none"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setPos(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
            }}
            onTouchMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const x = e.touches[0].clientX - r.left;
              setPos(Math.max(0, Math.min(100, (x / r.width) * 100)));
            }}
          >
            <img src={transform} alt="After transformation" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img src={transform} alt="Before transformation" className="h-full w-full object-cover grayscale" loading="lazy" />
              <div className="absolute inset-0 bg-background/30" />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-px bg-foreground"
              style={{ left: `${pos}%`, boxShadow: "0 0 20px oklch(1 0 0 / 0.8)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass-strong border-2 border-foreground flex items-center justify-center">
                <span className="text-xs">⇆</span>
              </div>
            </div>

            <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Before</div>
            <div className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground">After</div>
          </div>
        </div>

        {/* Counters */}
        <div className="reveal mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          <Counter to={500} label="Active Members" />
          <Counter to={1000} label="Transformations" />
          <Counter to={10} label="Elite Trainers" />
        </div>
      </div>
    </section>
  );
}
