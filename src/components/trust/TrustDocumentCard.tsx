"use client";

import type { ElementType } from "react";
import {
  BadgeCheck, ScrollText, CreditCard, FileCheck2,
  HeartHandshake, Landmark, BarChart3, Eye, Download, Clock,
} from "lucide-react";
import type { TrustDocument, TrustDocIcon } from "@/lib/trust-documents";

const icons: Record<TrustDocIcon, ElementType> = {
  BadgeCheck, ScrollText, CreditCard, FileCheck2, HeartHandshake, Landmark, BarChart3,
};

type Props = {
  doc: TrustDocument & { available: boolean };
  lang: "en" | "mr";
  index: number;
  labels: {
    view: string;
    download: string;
    comingSoon: string;
    issuedBy: string;
    issued: string;
  };
};

export default function TrustDocumentCard({ doc, lang, labels, index }: Props) {
  const Icon = icons[doc.icon];
  const title = doc.title[lang];
  const href = doc.file ? `/documents/trust/${encodeURIComponent(doc.file)}` : "#";

  return (
    <article
      className="trust-fade-up flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="font-display text-lg font-semibold text-secondary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{doc.description[lang]}</p>

      {(doc.issuedBy || doc.issueDate) && (
        <dl className="mt-3 space-y-1 text-xs text-ink-soft">
          {doc.issuedBy && (
            <div>
              <dt className="inline font-medium">{labels.issuedBy}: </dt>
              <dd className="inline">{doc.issuedBy[lang]}</dd>
            </div>
          )}
          {doc.issueDate && (
            <div>
              <dt className="inline font-medium">{labels.issued}: </dt>
              <dd className="inline">{doc.issueDate}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {doc.available ? (
          <>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.view}: ${title}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Eye className="h-4 w-4" aria-hidden="true" /> {labels.view}
            </a>
            <a
              href={href}
              download
              aria-label={`${labels.download}: ${title}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {labels.download}
            </a>
          </>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-2 text-sm text-ink-soft">
            <Clock className="h-4 w-4" aria-hidden="true" /> {labels.comingSoon}
          </span>
        )}
      </div>
    </article>
  );
}