import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <>
      {/* Desktop floating side buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
          style={{ background: "#25D366", boxShadow: "0 0 30px rgba(37,211,102,0.5)" }}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:+1234567890"
          aria-label="Call"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground glow-blue hover:scale-110 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2">
        <div className="glass-strong rounded-2xl flex items-center gap-2 p-2">
          <a
            href="tel:+1234567890"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-surface py-3 text-xs uppercase tracking-[0.2em] text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" /> Call
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs uppercase tracking-[0.2em] text-white"
            style={{ background: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" /> Chat
          </a>
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground glow-red"
          >
            Join Now
          </a>
        </div>
      </div>
    </>
  );
}
