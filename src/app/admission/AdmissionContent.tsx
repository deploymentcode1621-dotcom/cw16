"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import AdmissionTimeline from "@/components/AdmissionTimeline";

export default function AdmissionContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.admission.title} subtitle={t.admission.subtitle} />
      <section className="section-pad bg-white">
        <div className="container-content">
          <AdmissionTimeline />
        </div>
      </section>
    </>
  );
}
