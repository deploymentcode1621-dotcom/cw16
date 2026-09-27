import type { Metadata } from "next";
import AdmissionContent from "./AdmissionContent";

export const metadata: Metadata = {
  title: "Admission Process",
  description:
    "Step-by-step admission process at S.S. De-Addiction & Palliative Care Centre, Latur — from the first call to the start of treatment.",
};

export default function AdmissionPage() {
  return <AdmissionContent />;
}
