import { Phone, Mail, MapPin, Truck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur">
      <div className="hazard-stripe h-2 w-full" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-amber">
              <Truck className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg">AmberTow<span className="text-primary">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Pomoc drogowa 24/7 w całej Polsce i Europie. Holowanie aut osobowych,
            dostawczych i ciężarowych. Wyjeżdżamy w 20 minut – każdego dnia w roku.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-primary">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +48 000 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> pomoc@mail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> ul. Drogowa 7, Warszawa</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-primary">Dyspozytornia</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Pn – Pt</span><span className="text-foreground">24h</span></li>
            <li className="flex justify-between"><span>Sob – Niedz</span><span className="text-foreground">24h</span></li>
            <li className="flex justify-between"><span>Święta</span><span className="text-foreground">24h</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AmberTow Pomoc Drogowa. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
