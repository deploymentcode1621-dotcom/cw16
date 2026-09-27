import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of S.S. De-Addiction & Palliative Care Centre, Latur — our facility and work.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
