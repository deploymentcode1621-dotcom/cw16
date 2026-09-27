"use client";

import { HeartPulse, Target, HandHeart, UsersRound } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

const icons = [Target, HeartPulse, UsersRound, HandHeart];

export default function PalliativeSection() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-secondary relative overflow-hidden">
      <div className="blob-accent bg-accent/20 h-96 w-96 -bottom-32 -right-20" />
      <div className="container-content relative z-10">
        <SectionHeading title={t.home.palliativeTitle} light />
        <p className="text-white/80 text-center max-w-2xl mx-auto -mt-8 mb-12 text-[15px] leading-relaxed">
          {t.home.palliativeIntro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.home.palliativeCards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={card.title}
                className="bg-white/[0.07] border border-white/15 rounded-soft p-6 backdrop-blur-sm"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/25 flex items-center justify-center text-accent mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-white text-[15px]">{card.title}</h3>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
