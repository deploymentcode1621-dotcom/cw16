"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import RulesSection from "@/components/RulesSection";

export default function RulesContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.rules.title} subtitle={t.rules.subtitle} />
      <section className="section-pad bg-white">
        <div className="container-content max-w-4xl">
          <RulesSection />
        </div>
      </section>
    </>
  );
}
