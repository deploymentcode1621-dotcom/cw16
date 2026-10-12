"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Utensils, HeartHandshake, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const highlightIcons = [BedDouble, Utensils, HeartHandshake, ShieldCheck];

export default function FacilitySection() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        {/* Top: text + image */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {h.facilityEyebrow}
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
              {h.facilityHeadline}
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-base">
              {h.facilityText}
            </p>

            <Link
              href="/facilities"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {h.facilityCta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[3px] border-primary/30 shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/facility-building.jpg"
                alt={h.facilityImageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom: highlight strip */}
        <div className="mt-10 rounded-2xl border border-primary/10 bg-primary-light/60 p-4 md:mt-14 md:p-6">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-primary/15">
            {h.facilityHighlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <li key={item.title} className="flex items-start gap-3 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold leading-snug text-secondary">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-snug text-ink-soft">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}