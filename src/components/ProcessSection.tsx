"use client";

import {
  ArrowRight,
  Phone,
  ClipboardList,
  FileText,
  HeartPulse,
  Sprout,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepIcons = [Phone, ClipboardList, FileText, HeartPulse, Sprout, UserCheck];

export default function ProcessSection() {
  const { t } = useLanguage();
  const h = t.home;
  const steps = h.processSteps ?? [];

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {h.processEyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
            {h.processTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
            {h.processSubtitle}
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            const isLast = i === steps.length - 1;

            return (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary ring-4 ring-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:h-[72px] md:w-[72px]">
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-white shadow">
                    {i + 1}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-secondary">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[190px] text-sm leading-snug text-ink-soft">
                  {step.desc}
                </p>

                {/* Arrow to next step (desktop only) */}
                {!isLast && (
                  <ArrowRight
                    aria-hidden="true"
                    size={20}
                    className="absolute -right-5 top-6 hidden text-primary/40 lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}