"use client";

import { useLanguage } from "@/context/LanguageContext";
import PageHero from "@/components/PageHero";
import DonationQR from "@/components/DonationQR";

export default function DonationContent() {
  const { t } = useLanguage();
  const d = t.donation;

  return (
    <>
      <PageHero title={d.title} subtitle={d.subtitle} />

      <section className="section-pad bg-white">
        <div className="container-content max-w-4xl">
          <blockquote className="text-center font-display text-lg md:text-xl text-primary-dark italic max-w-2xl mx-auto mb-12">
            {d.quote}
          </blockquote>
          <DonationQR />

          <div className="mt-12 card-surface p-6 md:p-8">
            <h3 className="font-display font-bold text-lg text-secondary mb-5 text-center">{d.regTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
              <div>
                <p className="text-xs text-ink-soft">{d.trustReg}</p>
                <p className="font-display font-semibold text-secondary text-sm mt-1">F-0028970(LTR)</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">{d.darpanId}</p>
                <p className="font-display font-semibold text-secondary text-sm mt-1">MH/2026/1150651</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">{d.csrReg}</p>
                <p className="font-display font-semibold text-secondary text-sm mt-1">CSR00115148</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">{d.taxReg}</p>
                <p className="font-display font-semibold text-secondary text-sm mt-1">AAQAK6260KF20261</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
