"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  HeartHandshake,
  BedDouble,
  Building2,
  Stethoscope,
  Leaf,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const statIcons = [BedDouble, Building2, Stethoscope, Leaf];

// Fallback text, used only for keys missing from the translations file.
const defaults = {
  title: "For a Healthier, Pain-Free and Addiction-Free Society...",
  highlight: "Your One Step Matters!",
  subtitle:
    "We work for De-addiction and Palliative Care — two important and sensitive areas — and appeal to all generous donors to support this noble cause.",
  ctaPrimary: "Contact Our Team",
  ctaSecondary: "Know More",
  imageCaption: "From Struggle to Strength",
  stats: [
    { title: "10+", subtitle: "Bedded Hospital", note: "In the heart of Latur" },
    { title: "48+", subtitle: "Bedded De-addiction & Palliative Care Centre", note: "Full capacity operation" },
    { title: "Expert", subtitle: "Medical Team", note: "Doctors, counsellors and support staff" },
    { title: "Holistic Care", subtitle: "", note: "Physical, mental, social and spiritual support" },
  ],
  donate: {
    title: "For a Healthy and Pain-Free Society... Your One Step!",
    text: "We appeal to generous donors to support our work in De-addiction and Palliative Care, two of the most sensitive and important areas in society.",
    cta: "Donate Now",
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const h = { ...defaults, ...(t.home.heroBanner as Partial<typeof defaults>) };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ================= Hero banner ================= */}
      <div className="relative">
        {/* Right photo (desktop: right half, mobile: below text) */}
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/hero-hands.jpg"
            alt={h.imageCaption}
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />
          {/* fade into white on the left so the text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container-content relative z-10 grid items-center lg:min-h-[520px] lg:grid-cols-[1.05fr_1fr]">
          {/* ---------- Left: text ---------- */}
          <div className="py-10 sm:py-14 lg:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[2rem] font-extrabold leading-[1.12] text-secondary sm:text-4xl lg:text-[2.7rem]"
            >
              {h.title}
              <span className="mt-1 block text-[#d62828]">{h.highlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-md text-base leading-relaxed text-primary-dark/90 sm:text-lg"
            >
              {h.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="tel:8956550539"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
              >
                <Phone size={17} />
                {h.ctaPrimary}
              </a>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                {h.ctaSecondary}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile / tablet photo */}
        <div className="relative h-64 sm:h-80 lg:hidden">
          <Image
            src="/images/hero-hands.jpg"
            alt={h.imageCaption}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* Script caption on the photo */}
        <motion.p
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-4 right-4 z-20 max-w-[11rem] text-right font-display text-xl italic leading-tight text-secondary [text-shadow:0_2px_8px_rgba(255,255,255,0.9)] sm:text-2xl lg:bottom-auto lg:right-10 lg:top-12 lg:max-w-[14rem] lg:text-3xl"
        >
          {h.imageCaption}
        </motion.p>
      </div>

      {/* ================= Stat strip ================= */}
      <div className="container-content relative z-20 lg:-mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-surface grid grid-cols-2 gap-x-4 gap-y-6 rounded-3xl px-5 py-6 sm:px-8 lg:grid-cols-4 lg:divide-x lg:divide-primary/10"
        >
          {h.stats.map((item, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div key={item.title} className={`flex items-start gap-3 ${i > 0 ? "lg:pl-6" : ""}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold leading-snug text-secondary">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p className="mt-0.5 text-xs font-semibold text-primary">{item.subtitle}</p>
                  )}
                  <p className="mt-0.5 text-xs text-ink-soft">{item.note}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= Donate banner ================= */}
      <div className="container-content pb-12 pt-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-start gap-3">
            <HeartHandshake className="mt-1 shrink-0 text-gold" size={30} />
            <div>
              <p className="font-display text-base font-bold text-secondary sm:text-lg">
                {h.donate.title}
              </p>
              <p className="text-sm text-[#b4231f]">{h.donate.text}</p>
            </div>
          </div>
          <Link
            href="/donation"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white shadow-md shadow-gold/30 transition-all hover:brightness-95"
          >
            {h.donate.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}