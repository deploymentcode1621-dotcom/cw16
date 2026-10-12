"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ContactSection, { DIRECTIONS_HREF } from "@/components/ContactSection";
import { siteInfo } from "@/lib/dictionary";
import { contactExtraEn, type ContactExtra } from "./contactExtraCopy";

// Single source of truth: the same siteInfo used by ContactSection and the footer.
const toTel = (n: string) => `tel:${n.replace(/\s/g, "")}`;
const PHONES = [
  { href: toTel(siteInfo.phone1), label: siteInfo.phone1 },
  { href: toTel(siteInfo.phone2), label: siteInfo.phone2 },
];
const EMAIL = siteInfo.email;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function ContactContent() {
  const { t } = useLanguage();
  const x: ContactExtra = (t.contact as { extra?: ContactExtra }).extra ?? contactExtraEn;

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
                href={PHONES[0].href}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                <Phone size={18} aria-hidden="true" />
                {x.hero.ctaCall}
              </a>
              <a
                href={DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                <MapPin size={18} aria-hidden="true" />
                {x.hero.ctaDirections}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Image-free panel: quick ways to reach the centre */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-7">
              <h2 className="font-display text-sm font-semibold text-primary-light">{x.hero.panelTitle}</h2>
              <ul className="mt-4 divide-y divide-white/10">
                <li className="flex items-start gap-4 py-3">
                  <Phone className="mt-1 shrink-0 text-primary-light" size={20} aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/60">{x.hero.phoneLabel}</p>
                    {PHONES.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className={`block rounded py-1 font-display text-lg font-semibold hover:text-primary-light ${focusRing}`}
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <Mail className="mt-1 shrink-0 text-primary-light" size={20} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs text-white/60">{x.hero.emailLabel}</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className={`block break-all rounded py-1 font-display text-lg font-semibold hover:text-primary-light ${focusRing}`}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
              </ul>
              <p className="mt-2 text-sm text-white/70">{x.hero.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING FORM + MAP (unchanged working component) */}
      <section id="contact-form" className="scroll-mt-24 bg-white py-14 md:py-20">
        <div className="container-content">
          <ContactSection />
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="bg-primary-light/50 py-12 md:py-16">
        <div className="container-content grid items-center gap-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">{x.guide.title}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{x.guide.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link
              href="/services"
              className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary/90 ${focusRing}`}
            >
              {x.guide.services}
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
            <Link
              href="/admission"
              className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-secondary/30 px-6 py-3 font-semibold text-secondary transition-colors hover:bg-white ${focusRing}`}
            >
              {x.guide.admission}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}