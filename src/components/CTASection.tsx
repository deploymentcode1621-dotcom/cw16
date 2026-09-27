"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-soft bg-gradient-to-br from-primary to-primary-dark px-8 py-14 md:px-16 md:py-16 text-center">
          <div className="blob-accent bg-accent/40 h-64 w-64 -top-16 -left-10" />
          <div className="blob-accent bg-gold/30 h-64 w-64 -bottom-20 -right-10" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white max-w-xl mx-auto">
              {t.home.ctaTitle}
            </h2>
            <p className="text-white/85 mt-4 max-w-lg mx-auto">{t.home.ctaBody}</p>
            <a
              href="tel:8956550539"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-dark font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone size={18} />
              {t.home.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
