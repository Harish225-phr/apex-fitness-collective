import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg -z-10 opacity-40" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
              Your Journey <br/> <span className="text-gradient-fire">Begins Today.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-lg">
              Tell us your goal. We'll build the plan. No pressure. No fluff. Just results.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center text-primary"><MapPin className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Location</p>
                  <p className="text-foreground">221 Forge Street, Downtown</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center text-accent"><Phone className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Call Us</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-accent transition-colors">+1 (234) 567 890</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center" style={{ color: "#A3FF12" }}><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                  <a href="mailto:hello@forgegym.com" className="text-foreground hover:text-foreground/80 transition-colors">hello@forgegym.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass-strong rounded-3xl p-7 sm:p-9 space-y-5"
            >
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (234) 567 890"
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Fitness Goal</label>
                <select
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3.5 text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option value="" disabled>Select your goal</option>
                  <option>Fat Loss</option>
                  <option>Build Muscle</option>
                  <option>Get Stronger</option>
                  <option>General Fitness</option>
                  <option>Personal Training</option>
                </select>
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground glow-red hover:scale-[1.02] transition-transform"
              >
                {submitted ? "✓ We'll be in touch" : "Start Your Journey →"}
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                By submitting, you agree to our terms. We'll never spam you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
