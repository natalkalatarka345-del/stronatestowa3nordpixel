import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Truck } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Usługi", href: "#uslugi" },
  { label: "O nas", href: "#o-nas" },
  { label: "Cennik", href: "#cennik" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-amber">
            <Truck className="h-5 w-5 text-primary-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent animate-strobe" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">AmberTow<span className="text-primary">.</span></div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pomoc Drogowa 24/7</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <a href="tel:+48000000000" className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-amber hover:scale-105 transition-transform">
          <Phone className="h-4 w-4" />
          +48 000 000 000
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-up">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-3 text-base rounded-md hover:bg-secondary transition-colors">
                {n.label}
              </a>
            ))}
            <a href="tel:+48000000000" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-amber">
              <Phone className="h-4 w-4" />
              Zadzwoń teraz
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
