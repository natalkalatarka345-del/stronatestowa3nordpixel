import { Phone, MessageCircle } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40 rounded-2xl border border-primary/30 bg-background/90 backdrop-blur-xl shadow-amber p-2 flex gap-2 animate-fade-up">
      <a href="tel:+48000000000" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
        <Phone className="h-4 w-4" /> Zadzwoń 24/7
      </a>
      <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold">
        <MessageCircle className="h-4 w-4" />
      </a>
    </div>
  );
}
