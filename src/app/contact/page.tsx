import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact S.S. De-Addiction & Palliative Care Centre, Latur — phone, email, address and location map.",
};

export default function ContactPage() {
  return <ContactContent />;
}
