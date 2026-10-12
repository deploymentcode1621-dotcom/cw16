"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Users,
  HeartHandshake,
  FileText,
  User,
  ClipboardList,
  Phone,
  HelpCircle,
  Check,
  ChevronDown,
  Info,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { admissionExtraEn, type AdmissionExtra } from "./admissionExtraCopy";

// Contact details as shown in the site footer.
const CONTACT_HREF = "/contact";
const PHONE_PRIMARY = { href: "tel:+918956550539", label: "+91 8956550539" };
const PHONE_LANDLINE = { href: "tel:02382314045", label: "+91 02382-314045" };

const principleIcons = [Users, HeartHandshake, FileText];
const prepareIcons = [User, FileText, Phone, ClipboardList, HelpCircle];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

/** Reveals once when scrolled into view. Shows immediately under reduced motion. */
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

export default function AdmissionContent() {
  const { t } = useLanguage();
  const x: AdmissionExtra = (t.admission as { extra?: AdmissionExtra }).extra ?? admissionExtraEn;

  return (
    <>
      {/* HERO */}
      <section className="bg-secondary text-white">
        <div className="container-content grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-primary-light">{x.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">{x.hero.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{x.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_PRIMARY.href}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                <Phone size={18} aria-hidden="true" />
                {x.hero.ctaCall}
              </a>
              <a
                href="#steps"
                onClick={(e) => scrollToId(e, "steps")}
                className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                {x.hero.ctaSteps}
              </a>
            </div>
          </div>

          {/* Image-free visual: the journey at a glance */}
          <div className="lg:col-span-5" aria-hidden="true">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7">
              <p className="font-display text-sm font-semibold text-primary-light">{x.hero.previewTitle}</p>
              <ol className="mt-4 space-y-2.5">
                {x.journey.steps.map((s, i) => (
                  <li key={s.title} className="flex items-baseline gap-3 text-sm text-white/85">
                    <span className="w-4 shrink-0 font-display font-semibold text-primary-light">{i + 1}</span>
                    <span className="truncate">{s.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + PRINCIPLES */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-secondary md:text-4xl">{x.intro.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{x.intro.text}</p>
          </Reveal>
          <ul className="mt-10 grid divide-y divide-secondary/10 border-y border-secondary/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {x.intro.principles.map((p, i) => {
              const Icon = principleIcons[i % principleIcons.length];
              return (
                <li key={p.title} className="flex gap-4 py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                  <Icon className="mt-0.5 shrink-0 text-primary" size={24} aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-semibold text-secondary">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="steps" className="scroll-mt-24 bg-primary-light/50 py-14 md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-secondary md:text-4xl">{x.journey.title}</h2>
          </Reveal>
          <ol className="relative mt-12">
            <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-primary/40 md:left-1/2" />
            {x.journey.steps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative pb-10 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0"
                >
                  <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-white ring-4 ring-primary-light md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </span>
                  <Reveal className={left ? "md:col-start-1 md:text-right" : "md:col-start-2"}>
                    <h3 className="font-display text-lg font-semibold text-secondary">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PREPARE */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">{x.prepare.title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{x.prepare.text}</p>
            </Reveal>
            <ul className="mt-8 divide-y divide-secondary/10 border-y border-secondary/10">
              {x.prepare.items.map((item, i) => {
                const Icon = prepareIcons[i % prepareIcons.length];
                return (
                  <li key={item} className="flex items-center gap-4 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="text-secondary">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-secondary p-7 text-white md:p-8 lg:sticky lg:top-28">
              <Info className="text-primary-light" size={26} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">{x.prepare.panelTitle}</h3>
              <p className="mt-3 leading-relaxed text-white/80">{x.prepare.note}</p>
              <a
                href={PHONE_PRIMARY.href}
                className={`mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                <Phone size={18} aria-hidden="true" />
                {x.prepare.call}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="bg-primary-light/50 py-14 md:py-20">
        <div className="container-content grid gap-6 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl">{x.reassure.title}</h2>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <p className="border-l-2 border-primary pl-5 text-lg leading-relaxed text-ink-soft">{x.reassure.text}</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-content grid gap-8 lg:grid-cols-12 lg:gap-14">
          <h2 className="font-display text-3xl font-bold text-secondary md:text-4xl lg:col-span-4">{x.faq.title}</h2>
          <div className="divide-y divide-secondary/10 border-y border-secondary/10 lg:col-span-8">
            {x.faq.items.map((f) => (
              <details key={f.q} className="group py-1">
                <summary
                  className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded py-3 font-display font-semibold text-secondary [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {f.q}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <div className="pb-4 pr-8 leading-relaxed text-ink-soft">
                  <p>{f.a}</p>
                  {f.link && (
                    <Link href={f.link.href} className={`mt-2 inline-block rounded font-semibold text-primary underline ${focusRing}`}>
                      {f.link.label}
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="container-content">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">{x.cta.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{x.cta.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_PRIMARY.href}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                <Phone size={18} aria-hidden="true" />
                {x.cta.call}
              </a>
              <Link
                href={CONTACT_HREF}
                className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                {x.cta.contact}
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/70">
              <a href={PHONE_PRIMARY.href} className="underline">
                {PHONE_PRIMARY.label}
              </a>
              <span className="mx-3" aria-hidden="true">
                |
              </span>
              <a href={PHONE_LANDLINE.href} className="underline">
                {PHONE_LANDLINE.label}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}