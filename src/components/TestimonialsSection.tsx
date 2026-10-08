"use client";

import { Quote, Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Paste your Google Maps reviews link here (optional). Leave empty to hide the link.
const GOOGLE_REVIEWS_URL = "";

// All three reviews are 5-star (listing average is 5.0).
const RATING = 5;

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${RATING} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < RATING ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const h = t.home;
  const items = h.testimonials ?? [];

  return (
    <section className="section-pad bg-gradient-to-b from-white to-primary-light/40">
      <div className="container-content">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {h.testimonialsEyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
            {h.testimonialsTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
            {h.testimonialsSubtitle}
          </p>

          {/* Rating summary */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white px-4 py-2 shadow-sm">
            <Stars />
            <span className="text-sm font-semibold text-secondary">{h.testimonialsRatingLabel}</span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {items.map((item) => (
            <figure
              key={item.name}
              className="card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <Quote size={22} className="text-primary/25" fill="currentColor" strokeWidth={0} />
              </div>

              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light font-display text-base font-bold text-primary">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold text-secondary">
                    {item.name}
                  </span>
                  <span className="block text-xs text-ink-soft">{item.source}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {GOOGLE_REVIEWS_URL && (
          <div className="mt-8 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              {h.testimonialsLinkLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}