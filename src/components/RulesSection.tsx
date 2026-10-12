"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function RulesSection() {
  const { t } = useLanguage();

  return (
    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
      {t.rules.items.map((rule, i) => (
        <div key={rule.title} className="card-surface p-5 flex gap-4">
          <div className="h-9 w-9 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center step-badge text-sm">
            {i + 1}
          </div>
          <div>
            <h3 className="font-display font-semibold text-secondary text-[15px]">{rule.title}</h3>
            <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{rule.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
