"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Wine,
  Pill,
  MessagesSquare,
  BrainCog,
  Users,
  Flower2,
  Sparkles,
  HeartPulse,
  Home,
  ArrowRight,
  BedDouble,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { servicesExtraEn, type ServicesExtra } from "./servicesExtraCopy";

// ASSUMPTIONS: confirm these two routes match your project.
const CONTACT_HREF = "/contact";
const DONATE_HREF = "/donate";

const deaddictionIcons = [Wine, Pill, MessagesSquare, BrainCog, Users, Flower2, Sparkles];
const palliativeIcons = [HeartPulse, Home];

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

/** Reveals once when scrolled into view. No-op under reduced motion. */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function ServicesContent() {
  const { t } = useLanguage();
  const s = t.servicesPage;
  const x: ServicesExtra = (s as { extra?: ServicesExtra }).extra ?? servicesExtraEn;

  const [featuredA, featuredB, ...rest] = s.deaddictionItems;

  return (
    <>
      {/* HERO */}
      <section className="bg-secondary text-white">
        <div className="container-content grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-primary-light">{x.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
              {x.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{x.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#deaddiction"
                onClick={(e) => scrollToId(e, "deaddiction")}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                {x.hero.ctaDeaddiction}
              </a>
              <a
                href="#palliative"
                onClick={(e) => scrollToId(e, "palliative")}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                {x.hero.ctaPalliative}
              </a>
            </div>
          </div>

          {/* Image-free composition: the two divisions as a quiet index */}
          <div className="lg:col-span-5" aria-hidden="true">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15">
              <div className="flex aspect-[4/5] flex-col justify-between bg-secondary p-6">
                <Wine className="text-primary-light" size={28} />
                <p className="font-display text-lg font-semibold leading-snug">{x.divisions.deaddiction.title}</p>
              </div>
              <div className="flex aspect-[4/5] flex-col justify-between bg-primary/25 p-6">
                <HeartPulse className="text-white" size={28} />
                <p className="font-display text-lg font-semibold leading-snug">{x.divisions.palliative.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO DIVISIONS */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-content grid gap-6 lg:grid-cols-2">
          <Reveal>
            <a
              href="#deaddiction"
              onClick={(e) => scrollToId(e, "deaddiction")}
              className={`group flex h-full flex-col justify-between rounded-2xl bg-secondary p-8 text-white md:p-10 ${focusRing}`}
            >
              <div>
                <Wine className="text-primary-light" size={30} />
                <h2 className="mt-6 font-display text-2xl font-bold md:text-3xl">{x.divisions.deaddiction.title}</h2>
                <p className="mt-3 max-w-md leading-relaxed text-white/80">{x.divisions.deaddiction.text}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-light">
                {x.divisions.deaddiction.link}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#palliative"
              onClick={(e) => scrollToId(e, "palliative")}
              className={`group flex h-full flex-col justify-between rounded-2xl border border-primary/25 bg-primary-light p-8 md:p-10 ${focusRing}`}
            >
              <div>
                <HeartPulse className="text-primary" size={30} />
                <h2 className="mt-6 font-display text-2xl font-bold text-secondary md:text-3xl">
                  {x.divisions.palliative.title}
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{x.divisions.palliative.text}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                {x.divisions.palliative.link}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* DE-ADDICTION */}
      <section id="deaddiction" className="scroll-mt-24 bg-white pb-14 md:pb-24">
        <div className="container-content">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold tracking-wide text-primary">{x.deaddiction.eyebrow}</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">
                  {x.deaddiction.title}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{x.deaddiction.intro}</p>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <p className="mb-3 text-sm font-semibold text-secondary">{x.deaddiction.featuredLabel}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[featuredA, featuredB].map((item, i) => {
                  const Icon = deaddictionIcons[i];
                  return (
                    <Reveal key={item.title} delay={i * 100}>
                      <div className="h-full rounded-2xl bg-secondary p-7 text-white">
                        <Icon className="text-primary-light" size={26} />
                        <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{item.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <p className="mb-1 mt-10 text-sm font-semibold text-secondary">{x.deaddiction.moreLabel}</p>
              <ul className="divide-y divide-secondary/10 border-y border-secondary/10">
                {rest.map((item, i) => {
                  const Icon = deaddictionIcons[i + 2];
                  return (
                    <li key={item.title}>
                      <Reveal delay={i * 60}>
                        <div className="flex gap-4 py-5">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                            <Icon size={20} />
                          </span>
                          <div>
                            <h3 className="font-display font-semibold text-secondary">{item.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PALLIATIVE */}
      <section id="palliative" className="scroll-mt-24 bg-primary-light py-14 md:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-semibold tracking-wide text-primary">{x.palliative.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-secondary md:text-4xl">{x.palliative.title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{x.palliative.intro}</p>
            <p className="mt-4 max-w-xl border-l-2 border-primary pl-4 leading-relaxed text-secondary">
              {x.palliative.note}
            </p>
            <h3 className="mt-8 text-sm font-semibold text-secondary">{x.palliative.whoTitle}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {x.palliative.who.map((w) => (
                <li key={w} className="rounded-full border border-primary/30 bg-white px-3 py-1 text-sm text-secondary">
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-6">
            {s.palliativeItems.map((item, i) => {
              const Icon = palliativeIcons[i % palliativeIcons.length];
              return (
                <Reveal key={item.title} delay={i * 120}>
                  <div className="rounded-2xl bg-white p-7 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                        <Icon size={24} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-secondary">{item.title}</h3>
                        <p className="mt-2 leading-relaxed text-ink-soft">{item.desc}</p>
                        {i === 1 && (
                          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{x.palliative.homeNote}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold text-secondary md:text-4xl">{x.journey.title}</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-10 lg:grid-cols-4 lg:gap-8">
            <div aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-px bg-secondary/15 lg:hidden" />
            <div aria-hidden="true" className="absolute left-5 right-5 top-5 hidden h-px bg-secondary/15 lg:block" />
            {x.journey.steps.map((step, i) => (
              <li key={step.title} className="relative pl-16 lg:pl-0 lg:pt-16">
                <Reveal delay={i * 100}>
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-secondary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FACILITIES + FAMILY */}
      <section className="bg-primary-light/50 py-14 md:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">{x.facilities.title}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{x.facilities.text}</p>
            <dl className="mt-8 divide-y divide-secondary/10 border-y border-secondary/10">
              {x.facilities.items.map((f, i) => {
                const Icon = i === 0 ? Building2 : BedDouble;
                return (
                  <div key={f.label} className="flex items-center gap-5 py-5">
                    <Icon className="shrink-0 text-primary" size={26} aria-hidden="true" />
                    <dt className="sr-only">{f.label}</dt>
                    <dd className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-3xl font-bold text-secondary">{f.value}</span>
                      <span className="font-semibold text-secondary">{f.label}</span>
                      <span className="w-full text-sm text-ink-soft">{f.text}</span>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">{x.family.title}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{x.family.text}</p>
            <ul className="mt-8 space-y-3">
              {x.family.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-secondary">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">{x.cta.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{x.cta.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CONTACT_HREF}
                className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                {x.cta.contact}
              </Link>
              <Link
                href={DONATE_HREF}
                className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700 ${focusRing}`}
              >
                {x.cta.donate}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}