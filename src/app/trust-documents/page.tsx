import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { trustDocuments } from "@/lib/trust-documents";
import TrustDocumentsView from "@/components/trust/TrustDocumentsView";

export const metadata: Metadata = {
  title: "Official Trust Documents | Kai. Ashwini Bargale Trust",
  description:
    "Access important registration records and official documentation of Kai. Ashwini Bargale Trust, Latur.",
  alternates: { canonical: "/trust-documents" },
};

const DOCS_DIR = path.join(process.cwd(), "public", "documents", "trust");

function fileExists(name: string) {
  try {
    return fs.statSync(path.join(DOCS_DIR, name)).isFile();
  } catch {
    return false;
  }
}

export default function TrustDocumentsPage() {
  const missing: string[] = [];

  // Keep only files that really exist on disk, so no card ever links to a broken PDF.
  const documents = trustDocuments.map((doc) => {
    const files = (doc.files ?? []).filter((f) => {
      const ok = fileExists(f.file);
      if (!ok) missing.push(f.file);
      return ok;
    });
    return { ...doc, files, available: files.length > 0 };
  });

  if (process.env.NODE_ENV === "development" && missing.length > 0) {
    console.warn(
      `[trust-documents] Listed in src/lib/trust-documents.ts but not found in public/documents/trust/:\n  - ${missing.join("\n  - ")}`
    );
  }

  return <TrustDocumentsView documents={documents} />;
}