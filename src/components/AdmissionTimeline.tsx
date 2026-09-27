"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionTimeline() {
  const { t } = useLanguage();
  const steps = t.admission.steps;

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-5 md:left-1/2 top-2 bottom-2 w-0.5 timeline-line md:-translate-x-1/2" />
      <ol className="space-y-8">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          const card = (
            <div className="card-surface p-5 inline-block text-left max-w-sm">
              <h3 className="font-display font-semibold text-secondary">{step.title}</h3>
              <p className="text-sm text-ink-soft mt-1.5">{step.desc}</p>
            </div>
          );
          return (
            <li key={step.title} className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center step-badge shadow-lg shadow-primary/30 z-10">
                {i + 1}
              </div>

              <div className="pl-16 md:hidden">{card}</div>

              <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                <div className={isEven ? "text-right" : ""}>{isEven && card}</div>
                <div className={!isEven ? "text-left" : ""}>{!isEven && card}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
