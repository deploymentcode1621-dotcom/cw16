"use client";

import {
  Building2,
  MapPinned,
  Stethoscope,
  Compass,
  MessagesSquare,
  BrainCircuit,
  Salad,
  Droplets,
  Wind,
  BookOpen,
  Sparkles,
  Camera,
  FlameKindling,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

const icons = [
  Building2,
  MapPinned,
  Stethoscope,
  Compass,
  MessagesSquare,
  BrainCircuit,
  Salad,
  Droplets,
  Wind,
  BookOpen,
  Sparkles,
  Camera,
  FlameKindling,
];

export default function FacilityCards() {
  const { t } = useLanguage();

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <SectionHeading title={t.home.facilitiesTitle} subtitle={t.home.facilitiesSubtitle} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {t.facilities.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={f.title}
                className="card-surface p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-secondary leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
