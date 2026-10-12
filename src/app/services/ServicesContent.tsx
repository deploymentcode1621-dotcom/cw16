"use client";

import {
  Wine,
  Pill,
  MessagesSquare,
  BrainCog,
  Users,
  Flower2,
  Sparkles,
  HeartPulse,
  Home,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";

const deaddictionIcons = [Wine, Pill, MessagesSquare, BrainCog, Users, Flower2, Sparkles];
const palliativeIcons = [HeartPulse, Home];

export default function ServicesContent() {
  const { t } = useLanguage();
  const s = t.servicesPage;

  return (
    <>
      <PageHero title={s.title} subtitle={s.subtitle} />

      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1.5 rounded-full bg-primary" />
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary">
              {s.deaddictionTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.deaddictionItems.map((item, i) => {
              const Icon = deaddictionIcons[i % deaddictionIcons.length];
              return (
                <div key={item.title} className="card-surface p-6">
                  <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-secondary">{item.title}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-accent/5">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-1.5 rounded-full bg-accent" />
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary">
              {s.palliativeTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {s.palliativeItems.map((item, i) => {
              const Icon = palliativeIcons[i % palliativeIcons.length];
              return (
                <div key={item.title} className="card-surface p-6">
                  <div className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-secondary">{item.title}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
