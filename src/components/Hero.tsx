"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, HeartHandshake, ShieldCheck, BedDouble, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light via-white to-white">
      <div className="blob-accent bg-primary/30 h-72 w-72 -top-10 -left-16" />
      <div className="blob-accent bg-accent/30 h-80 w-80 top-24 -right-24" />

      <div className="container-content relative z-10 pt-14 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-primary-dark bg-primary-light px-3.5 py-1.5 rounded-full">
            {t.home.heroEyebrow}
          </p>
          <h1 className="mt-5 font-display font-extrabold text-[2.1rem] leading-[1.15] md:text-5xl md:leading-[1.12] text-secondary">
            {t.home.heroTitle}
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink-soft max-w-xl">{t.home.heroSubtitle}</p>
          <p className="mt-3 font-display text-primary-dark text-base md:text-lg font-medium">
            {t.home.heroTagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:8956550539"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
            >
              <Phone size={18} />
              {t.nav.callNow}
            </a>
            <Link
              href="/donation"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-white font-semibold shadow-lg shadow-gold/25 hover:brightness-95 transition-all"
            >
              <HeartHandshake size={18} />
              {t.nav.donateNow}
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <BedDouble size={16} className="text-primary" /> {t.home.trustBadge1}
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" /> {t.home.trustBadge2}
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck size={16} className="text-primary" /> {t.home.trustBadge3}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-soft overflow-hidden shadow-card border border-primary/10 aspect-[4/3]">
            <Image
              src="/images/hero-banner.jpg"
              alt="Bargale Hospital and S.S. De-Addiction & Palliative Care Centre, Latur"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block card-surface px-5 py-4 max-w-[220px]">
            <p className="text-2xl font-display font-bold text-primary">48+10</p>
            <p className="text-xs text-ink-soft mt-1">
              {t.home.trustBadge1}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
