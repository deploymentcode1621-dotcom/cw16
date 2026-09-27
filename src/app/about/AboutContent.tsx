"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero title={a.title} subtitle={a.subtitle} />

      <section className="section-pad bg-white">
        <div className="container-content grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-6">{a.storyTitle}</h2>
            <div className="space-y-4">
              {a.storyParas.map((p, i) => (
                <p key={i} className="text-ink-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="card-surface p-6">
                <h3 className="font-display font-semibold text-secondary mb-2">{a.visionTitle}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{a.visionBody}</p>
              </div>
              <div className="card-surface p-6">
                <h3 className="font-display font-semibold text-secondary mb-2">{a.orgTitle}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{a.orgBody}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-soft overflow-hidden shadow-card aspect-[4/3]">
              <Image src="/images/logo-bargale.jpg" alt="Bargale Hospital" fill className="object-cover" />
            </div>
            <div className="card-surface p-6">
              <h3 className="font-display font-semibold text-secondary mb-4">{a.capacityTitle}</h3>
              <ul className="space-y-3">
                {a.capacityItems.map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm border-b border-primary/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-ink-soft">{item.label}</span>
                    <span className="font-display font-semibold text-primary-dark">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-light/50">
        <div className="container-content">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-8 text-center">
            {a.boardTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {a.boardMembers.map((m) => (
              <div key={m.name} className="card-surface p-5 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-3 font-display font-semibold">
                  {m.name.trim().slice(0, 1)}
                </div>
                <p className="font-display font-semibold text-sm text-secondary">{m.name}</p>
                <p className="text-xs text-primary-dark mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
