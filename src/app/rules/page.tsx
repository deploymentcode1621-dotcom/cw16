import type { Metadata } from "next";
import RulesContent from "./RulesContent";

export const metadata: Metadata = {
  title: "Rules & Regulations",
  description:
    "Visiting hours, discharge policy and centre rules at S.S. De-Addiction & Palliative Care Centre, Latur.",
};

export default function RulesPage() {
  return <RulesContent />;
}
