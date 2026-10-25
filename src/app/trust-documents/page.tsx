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

export default function TrustDocumentsPage() {
  const baseDir = path.join(process.cwd(), "public", "documents", "trust");

  // A document counts as "available" only if the PDF really exists on disk.
  const documents = trustDocuments.map((doc) => ({
    ...doc,
    available: Boolean(doc.file) && fs.existsSync(path.join(baseDir, doc.file!)),
  }));

  return <TrustDocumentsView documents={documents} />;
}