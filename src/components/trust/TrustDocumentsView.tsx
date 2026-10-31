"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TrustDocumentCard from "./TrustDocumentCard";
import type { TrustDocument } from "@/lib/trust-documents";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function TrustDocumentsView({
  documents,
}: {
  documents: (TrustDocument & { available: boolean })[];
}) {
  const { t, locale } = useLanguage();
  const d = t.trustDocs;

  // Documents that are ready to open come first; "coming soon" cards go last.
  // Array.prototype.sort is stable, so the original order is kept within each group.
  const ordered = [...documents].sort((a, b) => Number(b.available) - Number(a.available));

  const labels = {
    view: d.view,
    download: d.download,
    comingSoon: d.comingSoon,
    issuedBy: d.issuedBy,
    issued: d.issued,
  };

  return (
    <>
      {/* HERO: same dark style as the Rules, Admission and Contact pages */}
      <section className="bg-secondary text-white">
        <div className="container-content py-12 md:py-16">
          <div className="border-l-2 border-gold pl-5 md:pl-7">
            <p className="text-sm font-semibold tracking-wide text-primary-light">
              {t.nav.trustDocuments}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              {d.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {d.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENT CARDS */}
      <section className="bg-slate-50 py-12 md:py-16" aria-label={d.title}>
        <div className="container-content">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.map((doc, i) => (
              <li key={doc.id} className="flex">
                <TrustDocumentCard doc={doc} lang={locale} index={i} labels={labels} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-content">
          <div className="flex flex-col gap-6 rounded-2xl border border-primary/15 bg-primary-light/40 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/15">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-secondary">
                  {d.transparencyTitle}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                  {d.transparencyBody}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className={`group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark ${focusRing}`}
            >
              {d.contactUs}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}