"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  HeartHandshake,
  ArrowRight,
  PersonStanding,
  Flower2,
  HeartCrack,
  CircleOff,
  UserCheck,
  Users,
  Star,
  BedDouble,
  HeartPulse,
  MessagesSquare,
  ShieldCheck,
  FileCheck2,
  Stethoscope,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const struggleIcons = [PersonStanding, Flower2, HeartCrack, CircleOff];
const hopeIcons = [UserCheck, Flower2, Users, Star];
const statIcons = [BedDouble, Users, HeartPulse, MessagesSquare];
const trustIcons = [ShieldCheck, FileCheck2, Stethoscope, Handshake];

export default function Hero() {
  const { t } = useLanguage();
  const h = t.home.heroBanner;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ================= Photo band ================= */}
      <div className="relative min-h-[600px] sm:min-h-[640px] lg:min-h-[720px] overflow-hidden">
        {/* Two mood photos, side by side */}
        <div className="absolute inset-0 grid grid-cols-2">
          <motion.div
            className="relative h-full w-full"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-struggle.jpg"
                alt={h.leftCaption}
                fill
                priority
                sizes="50vw"
                className="object-cover object-[65%_center] grayscale-[15%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </motion.div>

          <motion.div
            className="relative h-full w-full"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <Image
                src="/images/hero-hope.jpg"
                alt={h.rightCaption}
                fill
                priority
                sizes="50vw"
                className="object-cover object-[35%_center]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-white/5 to-transparent" />
          </motion.div>
        </div>

        {/* Center blend so the headline always reads clearly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 85% at 50% 46%, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.72) 32%, rgba(255,255,255,0.15) 62%, transparent 78%)",
          }}
        />

        {/* Soft base fade so the band sits naturally on white page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />

        {/* ---------- Left: caption + struggle points ---------- */}
        <div className="hidden md:flex absolute left-6 lg:left-12 top-20 lg:top-24 flex-col gap-8 z-10">
          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display italic text-2xl lg:text-[1.7rem] text-white/95 -rotate-2 [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]"
          >
            {h.leftCaption}
          </motion.p>
          <ul className="flex flex-col gap-4">
            {h.strugglePoints.map((label, i) => {
              const Icon = struggleIcons[i % struggleIcons.length];
              return (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/25"
                  >
                    <Icon size={16} />
                  </motion.span>
                  <span className="text-sm text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                    {label}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Right: caption + hope points ---------- */}
        <div className="hidden md:flex absolute right-6 lg:right-12 top-20 lg:top-24 flex-col items-end gap-8 z-10">
          <motion.p
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display italic text-2xl lg:text-[1.7rem] text-secondary rotate-2 text-right [text-shadow:0_2px_10px_rgba(255,255,255,0.6)]"
          >
            {h.rightCaption}
          </motion.p>
          <ul className="flex flex-col items-end gap-4">
            {h.hopePoints.map((label, i) => {
              const Icon = hopeIcons[i % hopeIcons.length];
              return (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-3 flex-row-reverse"
                >
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/90 text-white ring-1 ring-white/40 shadow-md shadow-accent/30"
                  >
                    <Icon size={16} />
                  </motion.span>
                  <span className="text-sm font-medium text-secondary [text-shadow:0_1px_8px_rgba(255,255,255,0.7)]">
                    {label}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Center content ---------- */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-primary-dark"
          >
            {h.kicker}
          </motion.p>

          <h1 className="mt-4 font-display font-extrabold leading-[1.08] text-secondary text-4xl sm:text-5xl lg:text-[3.6rem]">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block"
            >
              {h.titleLine1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mt-1 inline-flex items-baseline gap-3"
            >
              <span>{h.titleLine2Prefix}</span>
              <span className="relative font-serif italic text-gold">
                {h.titleHighlight}
                <motion.svg
                  viewBox="0 0 220 18"
                  className="absolute -bottom-2 left-0 w-full text-gold"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M4 12c40-10 176-10 212 2"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 max-w-md sm:max-w-lg text-base sm:text-lg text-primary-dark/90"
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="tel:8956550539"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
            >
              <Phone size={17} />
              {h.ctaPrimary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/donation"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-white font-semibold shadow-lg shadow-gold/30 hover:brightness-95 transition-all"
            >
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/40 animate-ping [animation-duration:2.4s]" />
              <HeartHandshake size={17} className="relative" />
              <span className="relative">{h.ctaSecondary}</span>
              <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= Floating stat card ================= */}
      <div className="container-content relative z-30 -mt-14 sm:-mt-16 lg:-mt-[4.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="card-surface rounded-[2rem] px-5 py-6 sm:px-8 sm:py-7 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 sm:divide-x sm:divide-primary/10"
        >
          {h.statCards.map((item, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div key={item.title} className={`flex items-start gap-3 ${i > 0 ? "sm:pl-4 lg:pl-6" : ""}`}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-display font-semibold text-secondary text-[13px] sm:text-sm leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-ink-soft mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= Trust row ================= */}
      <div className="container-content relative z-10 pt-10 pb-14 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 lg:divide-x lg:divide-primary/10"
        >
          {h.trustRow.map((item, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <div key={item.title} className={`flex items-start gap-3 ${i > 0 ? "lg:pl-6" : ""}`}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/5 text-secondary">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="font-display font-semibold text-secondary text-[13px] sm:text-sm leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-ink-soft mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
