"use client";

import type { ElementType } from "react";
import {
  BadgeCheck,
  ScrollText,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  Landmark,
  BarChart3,
  Eye,
  Download,
  Clock,
} from "lucide-react";
import type { TrustDocument, TrustDocIcon } from "@/lib/trust-documents";

const icons: Record<TrustDocIcon, ElementType> = {
  BadgeCheck,
  ScrollText,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  Landmark,
  BarChart3,
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

const ring =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const viewBtn = `inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark ${ring}`;
const downloadBtn = `inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-light ${ring}`;
const iconView = `flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark ${ring}`;
const iconDownload = `flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary-light ${ring}`;

// Builds a safe link to a PDF inside public/documents/trust/.
const hrefOf = (file: string) => `/documents/trust/${encodeURIComponent(file)}`;

export default function TrustDocumentCard({ doc, lang, labels, index }: Props) {
  const Icon = icons[doc.icon];
  const title = doc.title[lang];
  const files = doc.files ?? [];

  return (
    <article
      className="trust-fade-up flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
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

      <div className="mt-5">
        {!doc.available || files.length === 0 ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-2 text-sm text-ink-soft">
            <Clock className="h-4 w-4" aria-hidden="true" /> {labels.comingSoon}
          </span>
        ) : files.length === 1 ? (
          // One file: two clear buttons.
          <div className="flex flex-wrap gap-3">
            <a
              href={hrefOf(files[0].file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.view}: ${title}`}
              className={viewBtn}
            >
              <Eye className="h-4 w-4" aria-hidden="true" /> {labels.view}
            </a>
            <a
              href={hrefOf(files[0].file)}
              download
              aria-label={`${labels.download}: ${title}`}
              className={downloadBtn}
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {labels.download}
            </a>
          </div>
        ) : (
          // Several files: one row per file with compact icon buttons.
          <ul className="divide-y divide-slate-100 border-y border-slate-100">
            {files.map((f) => {
              const name = f.label ? f.label[lang] : title;
              return (
                <li key={f.file} className="flex items-center justify-between gap-3 py-3">
                  <span className="text-sm font-medium text-secondary">{name}</span>
                  <span className="flex shrink-0 gap-2">
                    <a
                      href={hrefOf(f.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${labels.view}: ${name}`}
                      title={labels.view}
                      className={iconView}
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href={hrefOf(f.file)}
                      download
                      aria-label={`${labels.download}: ${name}`}
                      title={labels.download}
                      className={iconDownload}
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
}