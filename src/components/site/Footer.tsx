export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-display glow-red">F</span>
          <span className="font-display tracking-widest">FORGE.</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-[0.25em]">
          © 2026 Forge Fitness. Forged in sweat.
        </p>
        <div className="flex gap-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">YouTube</a>
          <a href="#" className="hover:text-foreground transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
