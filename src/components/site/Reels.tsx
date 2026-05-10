import { Play, Heart } from "lucide-react";
import reel1 from "@/assets/reel1.jpg";
import reel2 from "@/assets/reel2.jpg";
import reel3 from "@/assets/reel3.jpg";
import reel4 from "@/assets/gym2.jpg";

const reels = [
  { src: reel1, title: "Boxing • Day 14", views: "128K" },
  { src: reel2, title: "Pull Day Pump", views: "94K" },
  { src: reel3, title: "Sprint Protocol", views: "212K" },
  { src: reel4, title: "Functional Flow", views: "76K" },
];

export function Reels() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">// On The 'Gram</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
              Watch The <span className="text-glow-blue text-accent">Grind.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Real members. Real reps. Real transformations — straight from the floor.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reels.map((r, i) => (
            <div
              key={i}
              className="reveal group relative aspect-[9/16] overflow-hidden rounded-2xl glass neon-border cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img src={r.src} alt={r.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-16 w-16 rounded-full glass-strong flex items-center justify-center glow-red">
                  <Play className="h-6 w-6 text-foreground fill-foreground" />
                </div>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[10px] text-foreground">
                <Heart className="h-3 w-3 text-primary fill-primary" /> {r.views}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
