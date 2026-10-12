import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "De-addiction treatment for alcohol and drug dependence, counselling, psychiatric support and palliative home care at S.S. De-Addiction & Palliative Care Centre, Latur.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
