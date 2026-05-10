import gym1 from "@/assets/gym1.jpg";
import gym2 from "@/assets/gym2.jpg";
import gym3 from "@/assets/gym3.jpg";
import gym4 from "@/assets/gym4.jpg";

const slides = [
  { src: gym1, title: "Premium Equipment", tag: "Floor 01" },
  { src: gym2, title: "Functional Zone", tag: "Floor 02" },
  { src: gym3, title: "Group Training", tag: "Floor 03" },
  { src: gym4, title: "Strength Lab", tag: "Floor 04" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-lime-energy mb-4">// The Experience</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
              Inside The <span className="text-glow-lime" style={{ color: "#A3FF12" }}>Forge.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Step inside a space engineered for performance. Premium equipment, electric atmosphere.
          </p>
        </div>
      </div>

      <div className="reveal relative">
        <div className="flex gap-5 overflow-x-auto px-6 sm:px-8 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {slides.map((s, i) => (
            <div
              key={i}
              className="group relative flex-none w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] aspect-[3/4] snap-center overflow-hidden rounded-3xl glass"
            >
              <img
                src={s.src}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-5 left-5 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.tag}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl sm:text-3xl">{s.title}</h3>
                <div className="mt-3 h-px w-12 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
