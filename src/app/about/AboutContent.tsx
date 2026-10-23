"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Eye,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Home,
  Phone,
  ShieldCheck,
  Sprout,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* ------------------------------------------------------------------ */
/*  Copy. English fallback; Marathi/English live in the dictionary     */
/*  under `aboutPage` and override these when present.                 */
/* ------------------------------------------------------------------ */

type AboutCopy = {
  hero: { eyebrow: string; title: string; text: string; ctaMission: string; ctaSupport: string; imageAlt: string };
  story: {
    eyebrow: string;
    title: string;
    lead: string;
    imageAlt: string;
    timeline: { label: string; text: string }[];
  };
  identity: { eyebrow: string; title: string; text: string; bargaleCaption: string; ssCaption: string; trustCaption?: string };
  purpose: {
    eyebrow: string;
    title: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    valuesTitle: string;
    values: string[];
  };
  facility: {
    eyebrow: string;
    title: string;
    text: string;
    imageAlt: string;
    stats: { num: number; label: string; note: string; deva?: boolean }[];
    servicesTitle: string;
    services: { title: string; desc: string; cta: string }[];
  };
  board: { eyebrow: string; title: string; subtitle?: string };
  impact: { eyebrow: string; title: string; text: string; imageAlt: string; points: { title: string; desc: string }[] };
  cta: { title: string; text: string; donate: string; contact: string };
};

const defaults: AboutCopy = {
  hero: {
    eyebrow: "About our centre",
    title: "Care that restores dignity. Hope that rebuilds lives.",
    text: "Discover the people, purpose and compassionate care behind our commitment to supporting individuals and families affected by addiction and serious illness.",
    ctaMission: "Explore Our Mission",
    ctaSupport: "Support Our Work",
    imageAlt: "S.S. De-Addiction & Palliative Care Centre, Latur",
  },
  story: {
    eyebrow: "Our story",
    title: "A legacy of compassion. A mission that continues.",
    lead: "Our organisation was founded in loving memory of Kai Ashwini Anand Bargale, so that families facing addiction or serious illness do not have to face it alone.",
    imageAlt: "Bargale Hospital building",
    timeline: [
      { label: "September 2021", text: " Ashwini passed away after a prolonged illness and about three years in a coma." },
      { label: "What the family learned", text: "Proper nursing and palliative care at home was difficult and costly, and out of reach for most families." },
      { label: "The purpose", text: "The organisation was founded in her name to bring relief to poor and needy patients and their families." },
    ],
  },
  identity: {
    eyebrow: "Our identity",
    title: "Working together for better care.",
    text: "Bargale Hospital and the S.S. De-Addiction & Palliative Care Centre are run by Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha, a registered public charitable trust working in healthcare, social and educational fields in and around Latur.",
    bargaleCaption: "Bargale Hospital",
    ssCaption: "S.S. De-Addiction & Palliative Care Centre",
    trustCaption: "Kai. Ashwini Bargale Trust",
  },
  purpose: {
    eyebrow: "Purpose",
    title: "Care guided by purpose.",
    visionTitle: "Our vision",
    visionBody:
      "A healthy, self-reliant society where the underprivileged are brought into the mainstream through education, health and social upliftment, and where every district has access to compassionate palliative care.",
    missionTitle: "Our mission",
    missionBody:
      "To support people affected by addiction and serious illness through compassionate care, appropriate treatment, rehabilitation and family support.",
    valuesTitle: "What we stand for",
    values: [
      "Compassion and dignity",
      "Responsible care",
      "Recovery and rehabilitation",
      "Family involvement",
      "Community service",
    ],
  },
  facility: {
    eyebrow: "Our facility",
    title: "Facilities designed around care.",
    text: "A calm, central and well-equipped setting in Vishal Nagar, Latur, with a hospital and a dedicated de-addiction and palliative care centre working side by side.",
    imageAlt: "Our centre in Vishal Nagar, Latur",
    stats: [
      { num: 10, label: "Hospital beds", note: "Bargale Hospital" },
      { num: 48, label: "De-addiction & palliative beds", note: "Dedicated care centre" },
    ],
    servicesTitle: "Two wings, one purpose",
    services: [
      { title: "De-addiction treatment", desc: "Medical treatment, counselling and rehabilitation to help people move towards a substance-free life.", cta: "View de-addiction services" },
      { title: "Palliative care", desc: "Comfort, pain relief and emotional support for patients with serious illness, and for their families.", cta: "View palliative care" },
    ],
  },
  board: {
    eyebrow: "Management",
    title: "The People Behind Our Mission",
    subtitle: "Meet the dedicated leadership guiding our commitment to care, recovery, and dignity.",
  },
  impact: {
    eyebrow: "Why it matters",
    title: "Every person deserves care, dignity and a chance to recover.",
    text: "Addiction and serious illness affect the whole family, emotionally, physically and financially. Our work is to stand beside patients and their loved ones with respect, appropriate treatment and steady support.",
    imageAlt: "Care and support at our centre",
    points: [
      { title: "Compassionate support", desc: "Listening first, and treating every patient with respect." },
      { title: "Appropriate treatment", desc: "Medical care, counselling and rehabilitation under supervision." },
      { title: "Family involvement", desc: "Families are guided and supported through every step." },
    ],
  },
  cta: {
    title: "Be part of someone's journey back to life.",
    text: "Your support helps strengthen compassionate care for people and families who need it most.",
    donate: "Donate to Support Care",
    contact: "Contact Our Centre",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-white/80" : "text-primary"
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

/** Photo that never leaves a blank box: if the file is missing it shows the S.S. logo on a soft panel. */
function PhotoFrame({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  position = "object-center",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-primary-light ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light to-white">
          <div className="relative h-1/2 w-1/2 max-w-[14rem]">
            <Image src="/images/logo-ss.jpg" alt={alt} fill sizes="240px" className="object-contain" />
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${position}`}
        />
      )}
    </div>
  );
}

const DEVA = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const toDeva = (n: number) => String(n).replace(/\d/g, (d) => DEVA[Number(d)]);

/** Shows the final number immediately; counts up once when scrolled into view (skipped for reduced motion). */
function CountUp({ to, deva = false }: { to: number; deva?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (reduce || !el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setVal(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, reduce]);

  return <span ref={ref}>{deva ? toDeva(val) : val}</span>;
}

/**
 * Trustee photos, in the SAME order as `t.about.boardMembers`
 * (President first, then the six others as listed on the site).
 * If a board member in the dictionary already has a `photo` field, that wins.
 * Edit these 7 paths to match the real filenames inside /public.
 */
const TRUSTEE_PHOTOS = [
  "/images/trustees/madhavi-bargale.jpg", // President
  "/images/trustees/shekhar-kore.jpg", // Vice President
  "/images/trustees/anand-bargale.jpg", // Secretary
  "/images/trustees/pushpa-bargale.jpg", // Treasurer
  "/images/trustees/hemant-lohare.jpg", // Joint Secretary
  "/images/trustees/sankalp-bargale.jpg", // Member
  "/images/trustees/balu-kamble.jpg", // Member
];

/** Portrait that fills its parent. If the file is missing, shows a neutral silhouette (never initials or a stand-in photo). */
function TrusteePhoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light to-white text-primary/40">
        <UserRound className="h-1/3 w-1/3" strokeWidth={1.25} aria-hidden />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover object-top ${className}`}
    />
  );
}

const valueIcons = [HeartHandshake, ShieldCheck, Sprout, Users, HandHeart];
const impactIcons = [HandHeart, HeartPulse, Users];
const serviceIcons = [Sprout, HeartPulse];
const serviceLinks = ["/services#de-addiction", "/services#palliative"];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;
  const reduce = useReducedMotion();

  const c = {
    ...defaults,
    ...((t as unknown as { aboutPage?: Partial<AboutCopy> }).aboutPage ?? {}),
  } as AboutCopy;

  const members = a.boardMembers.map((m, i) => ({
    ...m,
    photo: (m as { photo?: string }).photo ?? TRUSTEE_PHOTOS[i] ?? "",
  }));
  const [president, ...otherMembers] = members;

  const goToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      {/* ============ A. Hero ============ */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
        {/* Hero photo animations (pure CSS) */}
        <style>{`
          @keyframes ab-float {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-10px); }
          }
          @keyframes ab-spin { to { transform: rotate(360deg); } }
          @keyframes ab-glow {
            0%, 100% { opacity: .35; transform: scale(1); }
            50%      { opacity: .7;  transform: scale(1.12); }
          }
          @keyframes ab-ripple {
            0%   { transform: scale(.9); opacity: .55; }
            100% { transform: scale(1.35); opacity: 0; }
          }
          @keyframes ab-shimmer {
            0%   { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
          @keyframes ab-twinkle {
            0%, 100% { opacity: .15; transform: scale(.7); }
            50%      { opacity: 1;   transform: scale(1.15); }
          }
          @keyframes ab-beat {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.18); }
          }
          @keyframes ab-drift {
            0%   { transform: translateY(0) translateX(0); opacity: 0; }
            20%  { opacity: .8; }
            100% { transform: translateY(-120px) translateX(14px); opacity: 0; }
          }
          .ab-float    { animation: ab-float 6s ease-in-out infinite; }
          .ab-spin     { animation: ab-spin 8s linear infinite; }
          .ab-glow     { animation: ab-glow 4s ease-in-out infinite; }
          .ab-ripple   { animation: ab-ripple 3.6s ease-out infinite; }
          .ab-ripple-2 { animation-delay: 1.8s; }
          .ab-shimmer  { animation: ab-shimmer 4.5s ease-in-out infinite; }
          .ab-twinkle  { animation: ab-twinkle 3s ease-in-out infinite; }
          .ab-beat     { animation: ab-beat 1.8s ease-in-out infinite; }
          .ab-drift    { animation: ab-drift 7s ease-in infinite; }
          @media (prefers-reduced-motion: reduce) {
            .ab-float, .ab-spin, .ab-glow, .ab-ripple, .ab-shimmer,
            .ab-twinkle, .ab-beat, .ab-drift { animation: none !important; }
          }
        `}</style>

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-content relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <Reveal>
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] text-secondary sm:text-5xl lg:text-[3.3rem]">
              {c.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{c.hero.text}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={goToMission}
                className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-white shadow-lg shadow-secondary/20 transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {c.hero.ctaMission}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/donation"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-white px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <HeartHandshake size={17} />
                {c.hero.ctaSupport}
              </Link>
            </div>
          </Reveal>

          {/* ---------- Small, animated photo with centered name badge ---------- */}
          <Reveal delay={0.1} className="flex justify-center">
            <div className="relative flex w-full max-w-[300px] flex-col items-center sm:max-w-[320px]">
              {/* Ripple rings */}
              <span className="ab-ripple pointer-events-none absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40" />
              <span className="ab-ripple ab-ripple-2 pointer-events-none absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40" />

              {/* Glow */}
              <div className="ab-glow pointer-events-none absolute left-1/2 top-[42%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200 via-teal-200 to-blue-200 blur-3xl" />

              {/* Sparkles */}
              <span className="ab-twinkle absolute -left-3 top-6 text-lg text-amber-500">✦</span>
              <span className="ab-twinkle absolute -right-2 top-20 text-sm text-teal-600" style={{ animationDelay: "1s" }}>✦</span>
              <span className="ab-twinkle absolute -left-1 top-[55%] text-xs text-secondary" style={{ animationDelay: "2s" }}>✦</span>

              {/* Rising light particles */}
              <span className="ab-drift absolute bottom-24 left-6 h-1.5 w-1.5 rounded-full bg-amber-400" style={{ animationDelay: "0s" }} />
              <span className="ab-drift absolute bottom-20 right-8 h-1 w-1 rounded-full bg-teal-400" style={{ animationDelay: "2.5s" }} />
              <span className="ab-drift absolute bottom-28 left-1/2 h-1.5 w-1.5 rounded-full bg-blue-300" style={{ animationDelay: "4.5s" }} />

              {/* Photo: rotating gradient border, gently floating */}
              <div className="ab-float relative w-full">
                <div className="relative overflow-hidden rounded-[1.75rem] p-[3px] shadow-xl">
                  <div
                    className="ab-spin absolute -inset-[60%]"
                    style={{
                      background: "conic-gradient(from 0deg, #203f86, #14b8a6, #f59e0b, #203f86)",
                    }}
                  />
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
                    <PhotoFrame
                      src="/images/ashwini_ji_image.jpeg"
                      alt="Kai Ashwini Anand Bargale"
                      sizes="(max-width: 640px) 300px, 320px"
                      priority
                      position="object-top"
                      className="aspect-[4/5] w-full"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* Trust logo, small round badge on the top-right corner */}
                <div className="absolute -right-3 -top-3 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white p-1.5 shadow-lg ring-1 ring-primary/10">
                  <div className="relative h-full w-full">
                    <Image src="/images/trust_logo.jpeg" alt={t.meta.siteName} fill sizes="64px" className="object-contain" />
                  </div>
                </div>

                {/* Name badge: centered, overlapping the bottom of the photo */}
                <div className="absolute inset-x-0 -bottom-8 z-10 flex justify-center px-3">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-white/70 bg-white/95 px-4 py-3.5 text-center shadow-xl backdrop-blur">
                    <span className="ab-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/70 to-transparent" />
                    <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-teal-500 to-gold" />

                    <p className="relative flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                      <span className="h-px w-4 bg-primary/50" />
                      <span className="ab-beat inline-block text-rose-500">♥</span>
                      In Loving Memory
                      <span className="ab-beat inline-block text-rose-500" style={{ animationDelay: ".4s" }}>♥</span>
                      <span className="h-px w-4 bg-primary/50" />
                    </p>

                    <p className="relative mt-1.5 font-display text-lg font-extrabold leading-tight text-secondary">
                      Kai. Ashwini Bargale Mam
                    </p>

                    <div className="relative mt-2 flex items-center justify-center gap-2">
                      <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
                      <span className="text-xs text-amber-500">✦</span>
                      <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* spacer so the overlapping badge has room */}
              <div className="h-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ B. Founding story ============ */}
      <section className="bg-white py-16 sm:py-20" id="story">
        <div className="container-content grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{c.story.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              {c.story.title}
            </h2>

            <p className="mt-6 border-l-4 border-gold pl-5 text-lg font-medium leading-relaxed text-secondary">
              {c.story.lead}
            </p>

            <div className="mt-6 space-y-4">
              {a.storyParas.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <PhotoFrame
              src="/images/about-story.jpg"
              alt={c.story.imageAlt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] rounded-3xl"
            />

            <ol className="relative space-y-6 border-l-2 border-primary/20 pl-6">
              {c.story.timeline.map((item) => (
                <li key={item.label} className="relative">
                  <span className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-gold ring-2 ring-gold/30" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ============ C. Identity ============ */}
      <section className="bg-primary-light/50 py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{c.identity.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              {c.identity.title}
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">{c.identity.text}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
              {[
                {
                  src: "/images/trust_logo.jpeg",
                  alt: "Kai. Ashwini Bargale Trust logo",
                  caption: c.identity.trustCaption ?? defaults.identity.trustCaption ?? "",
                },
                { src: "/images/logo-bargale.jpg", alt: "Bargale Hospital logo", caption: c.identity.bargaleCaption },
                { src: "/images/logo-ss.jpg", alt: "S.S. De-Addiction & Palliative Care Centre logo", caption: c.identity.ssCaption },
              ].map((logo) => (
                <figure key={logo.src} className="flex flex-col items-center text-center">
                  <div className="relative h-36 w-36 sm:h-32 sm:w-32 lg:h-40 lg:w-40">
                    <Image src={logo.src} alt={logo.alt} fill sizes="160px" className="object-contain" />
                  </div>
                  <figcaption className="mt-4 text-sm font-semibold text-secondary">{logo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ D. Mission, vision, values ============ */}
      <section className="bg-white py-16 sm:py-20" id="mission">
        <div className="container-content">
          <Reveal className="max-w-2xl">
            <Eyebrow>{c.purpose.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              {c.purpose.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-6">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl bg-secondary p-7 text-white sm:p-9">
                  <Eye className="absolute -right-4 -top-4 h-28 w-28 text-white/5" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Eye size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.purpose.visionTitle}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/85">{c.purpose.visionBody}</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-primary/20 bg-primary-light/50 p-7 sm:p-9">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <Target size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-secondary">{c.purpose.missionTitle}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{c.purpose.missionBody}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl bg-[#faf7f2] p-7 sm:p-9">
                <h3 className="font-display text-xl font-bold text-secondary">{c.purpose.valuesTitle}</h3>
                <ul className="mt-5 divide-y divide-primary/10">
                  {c.purpose.values.map((v, i) => {
                    const Icon = valueIcons[i % valueIcons.length];
                    return (
                      <li key={v} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/15">
                          <Icon size={18} />
                        </span>
                        <span className="font-semibold text-secondary">{v}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ E. Facility and capacity ============ */}
      <section className="bg-secondary py-16 text-white sm:py-20">
        <div className="container-content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <Reveal>
              <Eyebrow light>{c.facility.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                {c.facility.title}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-white/80">{c.facility.text}</p>

              <dl className="mt-8 grid grid-cols-2 gap-6">
                {c.facility.stats.map((s) => (
                  <div key={s.label} className="border-t border-white/20 pt-4">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <p className="font-display text-5xl font-extrabold leading-none sm:text-6xl">
                        <CountUp to={s.num} deva={s.deva} />
                        <span className="text-gold">+</span>
                      </p>
                      <p className="mt-3 text-sm font-semibold">{s.label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{s.note}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <PhotoFrame
                src="/images/about-facility.jpg"
                alt={c.facility.imageAlt}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[16/11] rounded-3xl ring-1 ring-white/10"
              />
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <h3 className="font-display text-xl font-bold">{c.facility.servicesTitle}</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {c.facility.services.map((s, i) => {
                const Icon = serviceIcons[i % serviceIcons.length];
                return (
                  <Link
                    key={s.title}
                    href={serviceLinks[i] ?? "/services"}
                    className="group flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{s.desc}</p>
                      <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                        {s.cta}
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ F. Management board ============ */}
      <section className="bg-[#faf8f4] py-16 sm:py-20">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-gold" />
              {c.board.eyebrow}
              <span className="h-px w-8 bg-gold" />
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary sm:text-4xl">{c.board.title}</h2>
            {c.board.subtitle && (
              <p className="mt-4 leading-relaxed text-ink-soft sm:text-lg">{c.board.subtitle}</p>
            )}
          </Reveal>

          {/* Featured: President */}
          {president && (
            <Reveal delay={0.05} className="mx-auto mt-10 max-w-4xl">
              <article className="group grid overflow-hidden rounded-3xl bg-secondary shadow-xl shadow-secondary/15 md:grid-cols-[minmax(0,320px)_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[400px]">
                  <TrusteePhoto
                    src={president.photo}
                    alt={president.name}
                    sizes="(min-width: 768px) 320px, 100vw"
                    priority
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent md:hidden" />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold">
                    <span className="h-px w-8 bg-gold" />
                    {president.role}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.1rem]">
                    {president.name}
                  </h3>
                  <span className="mt-5 block h-1 w-14 rounded-full bg-gold" />
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{t.meta.siteName}</p>
                </div>
              </article>
            </Reveal>
          )}

          {/* Other trustees */}
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {otherMembers.map((m, i) => (
              <Reveal key={m.name} delay={0.04 * i}>
                <article className="group h-full overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <div className="relative aspect-[4/5] overflow-hidden bg-primary-light">
                    <TrusteePhoto
                      src={m.photo}
                      alt={m.name}
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 48vw"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative px-3 pb-5 pt-5 text-center sm:px-5">
                    <span className="absolute left-1/2 top-0 h-[3px] w-10 -translate-x-1/2 rounded-full bg-gold" />
                    <h3 className="font-display text-[15px] font-bold leading-snug text-secondary sm:text-lg">{m.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">{m.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ G. Community impact ============ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <PhotoFrame
              src="/images/about-community.jpg"
              alt={c.impact.imageAlt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] rounded-3xl"
            />
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>{c.impact.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
              {c.impact.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{c.impact.text}</p>

            <ul className="mt-7 space-y-5">
              {c.impact.points.map((p, i) => {
                const Icon = impactIcons[i % impactIcons.length];
                return (
                  <li key={p.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-secondary">{p.title}</p>
                      <p className="text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ H. Final CTA ============ */}
      <section className="pb-16 sm:pb-24">
        <div className="container-content">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-secondary via-secondary to-primary-dark px-6 py-12 sm:px-12 sm:py-16">
              <Home className="absolute -bottom-6 -right-6 h-48 w-48 text-white/5" />
              <div className="relative z-10 max-w-2xl">
                <Eyebrow light>{t.meta.tagline}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {c.cta.title}
                </h2>
                <p className="mt-4 text-white/80 sm:text-lg">{c.cta.text}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/donation"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white shadow-lg shadow-black/20 transition-all hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  >
                    <HeartHandshake size={17} />
                    {c.cta.donate}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Phone size={17} />
                    {c.cta.contact}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}