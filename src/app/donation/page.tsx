import type { Metadata } from "next";
import DonationContent from "./DonationContent";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support S.S. De-Addiction & Palliative Care Centre, Latur. Donate via UPI QR code or bank transfer to Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha. 80G & 12A registered.",
};

export default function DonationPage() {
  return <DonationContent />;
}
