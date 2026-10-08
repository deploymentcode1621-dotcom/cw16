"use client";

import { ArrowRight, HeartHandshake, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Contact details shown in the card. You can import these from your
// dictionary's siteInfo instead if you prefer a single source of truth.
const PHONE_MOBILE = { label: "8956550539", href: "tel:8956550539" };
const PHONE_LANDLINE = { label: "02382-314045", href: "tel:02382314045" };
const WHATSAPP_URL = "https://wa.me/918956550539";
const ADDRESS_SHORT = "Vishal Nagar East, Near Kashivishweshwar Mandir, Latur";

export default function CTASection() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <div className="relative isolate overflow-hidden rounded-soft bg-gradient-to-br from-primary to-primary-dark px-6 py-12 shadow-2xl sm:px-10 md:px-14 md:py-16">
          {/* Decorative background */}
          <div className="blob-accent bg-accent/40 h-72 w-72 -top-20 -left-16" />
          <div className="blob-accent bg-gold/30 h-72 w-72 -bottom-24 -right-12" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            {/* Left: message + buttons */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {h.ctaEyebrow}
              </span>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl xl:text-5xl">
                {h.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:mx-0">
                {h.ctaBody}
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                <a
                  href={PHONE_MOBILE.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-primary-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Phone size={18} />
                  {h.ctaButton}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <MessageCircle size={18} />
                  {h.ctaWhatsapp}
                </a>
              </div>
            </div>

            {/* Right: glass contact card */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-md">
                  <HeartHandshake size={24} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-snug text-white">
                    {h.ctaCardTitle}
                  </p>
                  <p className="text-sm text-white/75">{h.ctaCardNote}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4 border-t border-white/15 pt-6">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Phone size={17} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {t.contact.phoneTitle}
                    </p>
                    <p className="mt-0.5 text-white">
                      <a href={PHONE_MOBILE.href} className="font-semibold hover:underline">
                        {PHONE_MOBILE.label}
                      </a>
                      <span className="mx-2 text-white/40">·</span>
                      <a href={PHONE_LANDLINE.href} className="font-semibold hover:underline">
                        {PHONE_LANDLINE.label}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {t.contact.addressTitle}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-white">{ADDRESS_SHORT}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}