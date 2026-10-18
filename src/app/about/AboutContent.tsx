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
  identity: { eyebrow: string; title: string; text: string; bargaleCaption: string; ssCaption: string };
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
  board: { eyebrow: string; title: string };
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
  board: { eyebrow: "Management", title: "The people behind our mission." },
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

// Skips the honorific so the avatar shows the first letter of the actual name.
const HONORIFIC = /^(mrs|mr|ms|dr|sh|smt|shri|सौ|श्रीमती|श्री|डॉ)\.?\s+/i;
const initialOf = (name: string) => Array.from(name.trim().replace(HONORIFIC, ""))[0] ?? "";

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

  const [president, ...otherMembers] = a.boardMembers;

  const goToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      {/* ============ A. Hero ============ */}
      <section className="relative overflow-hidden bg-[#faf7f2]">
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

          <Reveal delay={0.1} className="relative">
            <PhotoFrame
  src="/images/ashwini_ji_image.jpeg"
  alt="Kai Ashwini Anand Bargale"
  sizes="(min-width: 1024px) 45vw, 100vw"
  priority
  position="object-top"
  className="aspect-[4/3] rounded-[2rem] shadow-xl shadow-secondary/10 sm:aspect-[5/4] lg:aspect-[4/5]"
/>

<div className="absolute bottom-20 right-5 z-10 rounded-xl border border-white/40 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-6">
  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
    In Loving Memory
  </p>
  <p className="mt-1 font-display text-sm font-bold text-secondary sm:text-base">
    Kai. Ashwini Bargale Mam
  </p>
</div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-primary/10 sm:left-6">
              <div className="relative h-14 w-14 shrink-0">
                <Image src="/images/trust_logo.jpeg" alt="" fill sizes="56px" className="object-contain" />
              </div>
              <p className="max-w-[10rem] text-xs font-semibold leading-snug text-secondary">{t.meta.siteName}</p>
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { src: "/images/logo-bargale.jpg", alt: "Bargale Hospital logo", caption: c.identity.bargaleCaption },
                { src: "/images/logo-ss.jpg", alt: "S.S. De-Addiction & Palliative Care Centre logo", caption: c.identity.ssCaption },
              ].map((logo) => (
                <figure key={logo.src} className="flex flex-col items-center text-center">
                  <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                    <Image src={logo.src} alt={logo.alt} fill sizes="208px" className="object-contain" />
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
      <section className="bg-[#faf7f2] py-16 sm:py-20">
        <div className="container-content">
          <Reveal className="text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-gold" />
              {c.board.eyebrow}
              <span className="h-px w-8 bg-gold" />
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-secondary sm:text-4xl">{c.board.title}</h2>
          </Reveal>

          {president && (
            <Reveal delay={0.05} className="mx-auto mt-10 max-w-md">
              <div className="rounded-3xl bg-secondary p-8 text-center text-white shadow-xl shadow-secondary/15">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold font-display text-3xl font-bold text-white ring-4 ring-white/15">
                  {initialOf(president.name)}
                </div>
                <p className="mt-5 font-display text-xl font-bold">{president.name}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">{president.role}</p>
              </div>
            </Reveal>
          )}

          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((m, i) => (
              <Reveal key={m.name} delay={0.04 * i}>
                <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-5 transition-colors hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light font-display text-lg font-bold text-secondary">
                    {initialOf(m.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold leading-snug text-secondary">{m.name}</p>
                    <p className="mt-0.5 text-sm text-primary-dark">{m.role}</p>
                  </div>
                </div>
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