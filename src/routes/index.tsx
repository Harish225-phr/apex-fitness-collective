import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Programs } from "@/components/site/Programs";
import { Transformation } from "@/components/site/Transformation";
import { Experience } from "@/components/site/Experience";
import { WhyUs } from "@/components/site/WhyUs";
import { Reels } from "@/components/site/Reels";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Forge Fitness — Transform Your Body. Upgrade Your Life." },
      { name: "description", content: "Premium gym & elite training. Strength, fat loss, muscle building and personal coaching in a cinematic, high-energy space." },
      { property: "og:title", content: "Forge Fitness — Transform Your Body. Upgrade Your Life." },
      { property: "og:description", content: "Premium gym & elite training. Strength, fat loss, muscle building and personal coaching." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Programs />
      <Transformation />
      <Experience />
      <WhyUs />
      <Reels />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
