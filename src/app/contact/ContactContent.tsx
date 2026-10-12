"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.contact.title} subtitle={t.contact.subtitle} />
      <section className="section-pad bg-white">
        <div className="container-content">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
