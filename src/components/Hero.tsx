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
import { openDonateModal } from "@/components/DonateModal";

const statIcons = [BedDouble, Building2, Stethoscope, Leaf];

// One shared wrapper for every section of the hero so left/right edges line up.
// To make the navbar line up with it too, use this same class string there.
const wrap = "mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12";

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
        {/* Right photo (desktop: right side, mobile: below text) */}
        <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
          <Image
            src="/images/hero-hands.jpg"
            alt={h.imageCaption}
            fill
            priority
            sizes="62vw"
            className="object-cover object-[65%_center]"
          />
          {/* soft fade into white on the left so the headline stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/75 via-30% to-transparent to-75%" />
          {/* fade out at the bottom so the stat strip sits cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className={`${wrap} relative z-10 grid items-center lg:min-h-[540px] lg:grid-cols-[1.3fr_1fr]`}>
          {/* ---------- Left: text ---------- */}
          <div className="py-10 sm:py-14 lg:py-20 lg:pb-24">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-balance text-[2rem] font-extrabold leading-[1.22] tracking-tight text-secondary sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.05rem]"
            >
              {h.title}
              <span className="mt-3 block text-[#d62828]">{h.highlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-primary-dark/90 sm:text-lg"
            >
              {h.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="tel:8956550539"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
              >
                <Phone size={17} />
                {h.ctaPrimary}
              </a>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/60 bg-white/90 px-7 py-3.5 font-semibold text-primary backdrop-blur transition-colors hover:bg-primary-light"
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
          className="absolute bottom-4 right-4 z-20 max-w-[11rem] text-right font-display text-xl italic leading-tight text-secondary [text-shadow:0_2px_8px_rgba(255,255,255,0.9)] sm:text-2xl lg:bottom-auto lg:right-12 lg:top-10 lg:max-w-[14rem] lg:text-3xl"
        >
          {h.imageCaption}
        </motion.p>
      </div>

      {/* ================= Stat strip ================= */}
      <div className={`${wrap} relative z-20 lg:-mt-10`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-surface grid grid-cols-1 gap-y-6 rounded-3xl px-5 py-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-primary/10 lg:py-7"
        >
          {h.stats.map((item, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 ${i > 0 ? "lg:pl-8" : ""} ${i < h.stats.length - 1 ? "lg:pr-6" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon size={22} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold leading-tight text-secondary">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-primary">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-xs leading-snug text-ink-soft">{item.note}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= Donate banner ================= */}
      {/* extra bottom padding keeps the floating Donate/Call buttons off the banner */}
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <div className="flex flex-col gap-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <HeartHandshake className="text-gold" size={26} />
            </span>
            <div>
              <p className="font-display text-base font-bold leading-snug text-secondary sm:text-lg">
                {h.donate.title}
              </p>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#b4231f]">{h.donate.text}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={openDonateModal}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-white shadow-md shadow-gold/30 transition-all hover:brightness-95"
          >
            {h.donate.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}