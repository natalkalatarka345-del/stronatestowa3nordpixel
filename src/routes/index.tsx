import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Truck, Wrench, Battery, Fuel, KeyRound,
  ShieldCheck, Timer, Globe2, ChevronDown, Star, ArrowRight, CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero-tow.jpg";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";
import s3 from "@/assets/service-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AmberTow — Pomoc Drogowa 24/7 | Holowanie aut w całej Polsce" },
      { name: "description", content: "Profesjonalna pomoc drogowa 24/7. Holowanie, odpalanie, wymiana koła, transport aut Polska i Europa. Dojazd w 20 minut. Zadzwoń: +48 000 000 000." },
      { property: "og:title", content: "AmberTow — Pomoc Drogowa 24/7" },
      { property: "og:description", content: "Dyspozytornia 24h. Holowanie aut osobowych, dostawczych i ciężarowych. Polska i Europa." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Truck, title: "Holowanie aut", desc: "Auta osobowe, dostawcze i SUV-y. Bezpieczny transport na lawecie z najazdem hydraulicznym.", img: s1 },
  { icon: Wrench, title: "Naprawa na miejscu", desc: "Drobne usterki naprawiamy od ręki – bez konieczności holowania pojazdu do warsztatu.", img: s2 },
  { icon: Globe2, title: "Transport Europa", desc: "Holowanie i transport pojazdów po całej Europie. Indywidualna wycena, szybka realizacja.", img: s3 },
  { icon: Battery, title: "Odpalanie auta", desc: "Rozładowany akumulator? Przyjedziemy i odpalimy auto, niezależnie od pogody i pory.", img: null },
  { icon: KeyRound, title: "Otwieranie aut", desc: "Zatrzaśnięte kluczyki w środku? Otworzymy pojazd bez uszkodzeń zamka i lakieru.", img: null },
  { icon: Fuel, title: "Dowóz paliwa", desc: "Zabrakło paliwa w trasie? Dowieziemy benzynę lub olej napędowy bezpośrednio do auta.", img: null },
];

const stats = [
  { value: "20", suffix: "min", label: "Średni czas dojazdu" },
  { value: "24/7", suffix: "", label: "Dyspozytornia" },
  { value: "12K+", suffix: "", label: "Zrealizowanych zleceń" },
  { value: "4.9", suffix: "★", label: "Ocena klientów" },
];

const pricing = [
  { name: "Miasto", price: "od 199", desc: "Holowanie w obrębie miasta do 15 km", features: ["Dojazd do 20 min", "Auta do 3.5 t", "Bezpieczne mocowanie", "Faktura VAT"] },
  { name: "Trasa", price: "od 4,90", suffix: "/km", desc: "Holowanie na dalsze odległości w Polsce", features: ["Wycena z góry", "Brak ukrytych opłat", "Ubezpieczenie ładunku", "GPS tracking"], featured: true },
  { name: "Europa", price: "wycena", desc: "Indywidualna oferta transportu poza granice", features: ["Cała UE i UK", "Dokumentacja CMR", "Auta zabytkowe", "Ekspresowa realizacja"] },
];

const faqs = [
  { q: "Jak szybko dojedziecie?", a: "W obrębie miasta średni czas dojazdu wynosi około 20 minut. Po przyjęciu zgłoszenia otrzymasz SMS z numerem kierowcy i jego lokalizacją." },
  { q: "Czy działacie w nocy i w święta?", a: "Tak, nasza dyspozytornia oraz lawety pracują 24 godziny na dobę, 365 dni w roku – również w święta i weekendy, bez dodatkowych opłat." },
  { q: "Jakie pojazdy holujecie?", a: "Holujemy auta osobowe, dostawcze, motocykle, SUV-y oraz pojazdy do 3,5 t. Na życzenie podstawiamy lawety ciężarowe do 12 t." },
  { q: "Ile kosztuje pomoc drogowa?", a: "Holowanie miejskie zaczyna się od 199 zł, kilometr na trasie od 4,90 zł. Każde zlecenie wyceniamy z góry – bez ukrytych kosztów." },
  { q: "Czy mogę zapłacić kartą?", a: "Tak, przyjmujemy płatności gotówką, kartą, BLIK-iem oraz przelewem. Wystawiamy fakturę VAT na firmę lub osobę prywatną." },
  { q: "Czy holujecie auta z assistance?", a: "Tak, współpracujemy z większością ubezpieczycieli i firm assistance. Rozliczymy zlecenie bezpośrednio z Twoim ubezpieczycielem." },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <About />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-strobe" />
            Dyspozytornia online — odpowiadamy w 30 sekund
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Pomoc drogowa <br />
            <span className="text-gradient">w 20 minut.</span><br />
            Przez 24 godziny.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Holujemy, odpalamy, otwieramy i transportujemy pojazdy po całej Polsce
            i Europie. Bez ukrytych opłat. Bez czekania. Każdego dnia w roku.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+48000000000" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-amber hover:scale-[1.03] transition-transform animate-pulse-glow">
              <Phone className="h-5 w-5" />
              Zadzwoń: +48 000 000 000
            </a>
            <a href="#uslugi" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-4 text-base font-semibold hover:bg-secondary transition-colors">
              Zobacz usługi <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Licencja transportowa</span>
            <span className="flex items-center gap-2"><Timer className="h-4 w-4 text-primary" /> Średnio 20 min dojazdu</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 4.9 / 5 (1.2k opinii)</span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
            <img src={heroImg} alt="Żółta laweta AmberTow z włączonymi światłami ostrzegawczymi" width={1600} height={1000} className="w-full h-auto object-cover" />
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <div className="rounded-lg bg-background/80 backdrop-blur px-3 py-2 text-xs">
                <div className="text-muted-foreground">Status floty</div>
                <div className="font-semibold flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-400 animate-strobe" /> 8 lawet w trasie</div>
              </div>
              <div className="rounded-lg bg-background/80 backdrop-blur px-3 py-2 text-xs">
                <div className="text-muted-foreground">Najbliższa</div>
                <div className="font-semibold">~ 3.2 km</div>
              </div>
            </div>
          </div>
          <div className="hazard-stripe absolute -bottom-2 left-8 right-8 h-3 rounded-b-lg opacity-80" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Holowanie 24/7", "Polska & Europa", "Auta do 3.5 t", "Naprawa na miejscu", "Bez ukrytych opłat", "Faktura VAT", "Płatność BLIK / Karta", "Współpraca z assistance"];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border/60 bg-card/30 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {doubled.map((t, i) => (
          <span key={i} className="mx-8 text-sm uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-8">
            {t}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="group relative rounded-2xl border border-border bg-card p-6 lg:p-8 overflow-hidden hover:border-primary/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="font-display text-4xl lg:text-5xl font-bold text-gradient">
              {s.value}<span className="text-muted-foreground text-2xl">{s.suffix}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-2xl mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Usługi</div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Wszystko, czego potrzebujesz <span className="text-gradient">na drodze</span></h2>
        <p className="text-muted-foreground">Od rozładowanego akumulatora po holowanie ciężkiej awarii za granicę. Jeden numer, jeden zespół, jedna odpowiedzialność.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-amber duration-300">
              {s.img && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nas" className="relative overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">O nas</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">15 lat na drogach. <span className="text-gradient">Zero kompromisów.</span></h2>
          <p className="text-muted-foreground mb-4">
            AmberTow to rodzinna firma założona w 2010 roku przez pasjonatów motoryzacji.
            Dziś dysponujemy flotą 12 nowoczesnych lawet i zespołem 24 doświadczonych
            kierowców-mechaników gotowych do działania o każdej porze.
          </p>
          <p className="text-muted-foreground mb-8">
            Pomagamy kierowcom indywidualnym, firmom logistycznym, warsztatom oraz
            największym ubezpieczycielom w Polsce. Każde zlecenie traktujemy tak,
            jakbyśmy ratowali własne auto.
          </p>
          <ul className="space-y-3">
            {[
              "Nowoczesna flota — lawety nie starsze niż 5 lat",
              "Pełna polisa OC przewoźnika do 500 000 zł",
              "Certyfikowani kierowcy z kursem ADR",
              "Realny GPS-tracking zlecenia w SMS",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-4xl font-bold text-gradient">12</div>
              <div className="text-sm text-muted-foreground mt-1">Lawet w flocie</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 mt-8">
              <div className="text-4xl font-bold text-gradient">24</div>
              <div className="text-sm text-muted-foreground mt-1">Kierowców</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 -mt-4">
              <div className="text-4xl font-bold text-gradient">15</div>
              <div className="text-sm text-muted-foreground mt-1">Lat doświadczenia</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 mt-4">
              <div className="text-4xl font-bold text-gradient">27</div>
              <div className="text-sm text-muted-foreground mt-1">Krajów obsługi</div>
            </div>
          </div>
          {/* Animated road with truck */}
          <div className="mt-8 relative h-16 rounded-xl bg-secondary overflow-hidden border border-border">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex gap-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="h-1 w-10 bg-primary/40 rounded" />
              ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 animate-truck">
              <Truck className="h-10 w-10 text-primary drop-shadow-[0_0_10px_oklch(0.82_0.18_85)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="cennik" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-2xl mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Cennik</div>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Uczciwe ceny. <span className="text-gradient">Bez gwiazdek.</span></h2>
        <p className="text-muted-foreground">Każde zlecenie wyceniamy z góry przez telefon. Cena, którą usłyszysz, jest ceną, którą zapłacisz.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
        {pricing.map((p, i) => (
          <div key={i} className={`relative rounded-2xl border p-8 ${p.featured ? "border-primary bg-gradient-to-b from-primary/10 to-card shadow-amber" : "border-border bg-card"}`}>
            {p.featured && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">Najczęściej wybierane</span>
            )}
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-4xl font-bold">{p.price}</span>
              <span className="text-muted-foreground mb-1.5">{p.suffix || " zł"}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-2 mb-8">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="tel:+48000000000" className={`block text-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${p.featured ? "bg-gradient-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-secondary"}`}>
              Zamów teraz
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">FAQ</div>
        <h2 className="text-3xl lg:text-5xl font-bold">Najczęstsze <span className="text-gradient">pytania</span></h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-semibold pr-4">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="relative scroll-mt-20">
      <div className="hazard-stripe h-2" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Kontakt</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Złapałeś gumę? <span className="text-gradient">Dzwoń.</span></h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Najszybszą drogą zgłoszenia jest telefon do dyspozytorni. Odbieramy
            24 godziny na dobę – również w święta.
          </p>

          <a href="tel:+48000000000" className="block rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 to-card p-6 hover:scale-[1.02] transition-transform shadow-amber mb-4">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary animate-pulse-glow">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Dyspozytornia 24/7</div>
                <div className="text-2xl font-bold">+48 000 000 000</div>
              </div>
            </div>
          </a>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href="mailto:pomoc@mail.com" className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
              <Mail className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
              <div className="font-semibold text-sm break-all">pomoc@mail.com</div>
            </a>
            <div className="rounded-xl border border-border bg-card p-5">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Baza</div>
              <div className="font-semibold text-sm">ul. Drogowa 7<br />00-001 Warszawa</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 sm:col-span-2">
              <Clock className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Godziny pracy</div>
              <div className="font-semibold text-sm">24 godziny / 7 dni w tygodniu / 365 dni w roku</div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Dziękujemy! Oddzwonimy w ciągu 5 minut."); }} className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-card h-fit">
          <h3 className="text-xl font-semibold mb-1">Zamów oddzwonienie</h3>
          <p className="text-sm text-muted-foreground mb-6">Wypełnij formularz – oddzwonimy w ciągu 5 minut.</p>
          <div className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Imię</label>
              <input required className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Jan Kowalski" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</label>
              <input required type="tel" className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+48 ___ ___ ___" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Lokalizacja / opis</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Np. A2, 32 km od Warszawy, auto nie odpala" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-amber hover:scale-[1.02] transition-transform">
              Wyślij zgłoszenie <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">Lub zadzwoń od razu: <a href="tel:+48000000000" className="text-primary font-semibold">+48 000 000 000</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}
