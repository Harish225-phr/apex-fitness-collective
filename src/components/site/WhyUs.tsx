import { Award, Cog, ClipboardList, Salad, Clock, Users } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Trainers", desc: "World-class coaches with decades of combined experience." },
  { icon: Cog, title: "Modern Equipment", desc: "State-of-the-art machines, weights and recovery tools." },
  { icon: ClipboardList, title: "Personalized Plans", desc: "Programs built around your body, lifestyle and goals." },
  { icon: Salad, title: "Nutrition Guidance", desc: "Fuel your transformation with expert meal planning." },
  { icon: Clock, title: "Flexible Timing", desc: "Open early. Open late. Train on your schedule." },
  { icon: Users, title: "Motivating Energy", desc: "A culture of relentless growth and brotherhood." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Why Choose Us</p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
            We Don't Sell <br/> Memberships. <span className="text-gradient-fire">We Build Champions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden glass">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal group relative bg-background/60 p-8 sm:p-10 transition-all duration-500 hover:bg-surface"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-primary via-accent to-lime-energy group-hover:w-full transition-all duration-700" />
                <Icon className="h-8 w-8 text-primary mb-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="font-display text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
