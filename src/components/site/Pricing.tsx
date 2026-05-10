import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "29",
    desc: "Get started with full gym access.",
    features: ["Full gym access", "Locker & showers", "Open gym hours", "Community events"],
    cta: "Get Started",
    accent: false,
  },
  {
    name: "Premium",
    price: "59",
    desc: "Everything you need to level up.",
    features: ["Everything in Basic", "All group classes", "Sauna & recovery zone", "Nutrition starter kit", "Guest passes (2/mo)"],
    cta: "Most Popular",
    accent: true,
  },
  {
    name: "Personal",
    price: "149",
    desc: "1-on-1 coaching with elite trainers.",
    features: ["Everything in Premium", "8 PT sessions / month", "Custom training plan", "Custom meal plan", "Body composition tracking"],
    cta: "Go Elite",
    accent: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Membership</p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
            Choose Your <span className="text-gradient-fire">Path.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 ${
                p.accent ? "glass-strong neon-border glow-red md:scale-105" : "glass neon-border"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground">
                  Most Popular
                </div>
              )}
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{p.name}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-6xl">${p.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 flex-none ${p.accent ? "text-primary" : "text-accent"}`} />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all hover:scale-[1.02] ${
                  p.accent
                    ? "bg-primary text-primary-foreground glow-red"
                    : "glass-strong text-foreground border border-border"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
