"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export default function GalleryContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.gallery.title} subtitle={t.gallery.subtitle} />
      <section className="section-pad bg-white">
        <div className="container-content">
          <Gallery />
        </div>
      </section>
    </>
  );
}
