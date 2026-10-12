"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Flower2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const valueIcons = [Heart, Users, Flower2, ShieldCheck];

// Fallback text, used only for keys missing from the translations file.
const defaults = {
  eyebrow: "About our trust",
  title: "A Social Initiative with a Deeper Meaning",
  p1: "Health is the greatest wealth. But when a person falls into the trap of addiction or is fighting a serious, incurable illness (such as cancer or paralysis), not only the individual but the entire family faces emotional, physical and financial challenges.",
  p2: "Late Ashwini Anand Bargale Multipurpose Social Welfare Trust, Latur is working with full commitment in the field of healthcare and social service to address these issues.",
  cta: "Know More About Our Trust",
  caption: "A Better Tomorrow is Possible...",
  values: ["Humanity", "Service", "Seva", "Dignity"],
};

export default function AboutTrust() {
  const { t } = useLanguage();
  const a = {
    ...defaults,
    ...((t.home as { aboutTrust?: Partial<typeof defaults> }).aboutTrust ?? {}),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-light/40 py-14 sm:py-20">
      <div className="container-content grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* ---------- Left: text ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {a.eyebrow}
          </p>

          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
            {a.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-[1.05rem]">
            {a.p1}
          </p>
          <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-secondary sm:text-[1.05rem]">
            {a.p2}
          </p>

          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
          >
            {a.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* ---------- Right: photo + values ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/10"
        >
          <div className="relative h-64 sm:h-80 lg:h-[22rem]">
            <Image
              src="/images/about-trust.jpg"
              alt={a.caption}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <p className="absolute bottom-4 right-5 max-w-[14rem] -rotate-3 text-right font-display text-xl italic leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)] sm:text-2xl">
              {a.caption}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-y-4 px-4 py-5 sm:grid-cols-4 sm:divide-x sm:divide-primary/10">
            {a.values.map((label, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <li key={label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-secondary">{label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}