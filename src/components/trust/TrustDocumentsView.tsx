"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TrustDocumentCard from "./TrustDocumentCard";
import type { TrustDocument } from "@/lib/trust-documents";

export default function TrustDocumentsView({
  documents,
}: {
  documents: (TrustDocument & { available: boolean })[];
}) {
  const { t, locale } = useLanguage();
  const d = t.trustDocs;

  return (
    <main className="bg-slate-50">
      <section className="container-content pb-10 pt-14 sm:pt-20">
        <span className="mb-3 block h-1 w-12 rounded bg-gold" aria-hidden="true" />
        <h1 className="font-display text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          {d.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-ink-soft sm:text-lg">{d.subtitle}</p>
      </section>

      <section className="container-content pb-16" aria-label={d.title}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, i) => (
            <TrustDocumentCard
              key={doc.id}
              doc={doc}
              lang={locale}
              index={i}
              labels={{
                view: d.view,
                download: d.download,
                comingSoon: d.comingSoon,
                issuedBy: d.issuedBy,
                issued: d.issued,
              }}
            />
          ))}
        </div>
      </section>

      <section className="container-content pb-20">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:p-8">
          <ShieldCheck className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h2 className="font-display text-xl font-semibold text-secondary">
              {d.transparencyTitle}
            </h2>
            <p className="mt-2 text-ink-soft">{d.transparencyBody}</p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {d.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}