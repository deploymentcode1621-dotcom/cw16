import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha and the story behind S.S. De-Addiction & Palliative Care Centre, Latur.",
};

export default function AboutPage() {
  return <AboutContent />;
}
