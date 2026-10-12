"use client";

import { Phone, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="/donation"
        aria-label={t.nav.donateNow}
        className="hidden sm:flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gold text-white shadow-lg shadow-gold/30 hover:brightness-95 transition-all text-sm font-semibold"
      >
        <HeartHandshake size={18} />
        {t.nav.donateNow}
      </a>
      <a
        href="tel:8956550539"
        aria-label={t.nav.callNow}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary-dark transition-colors"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
