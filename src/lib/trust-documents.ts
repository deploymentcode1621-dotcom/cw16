export type Bilingual = { en: string; mr: string };

export type TrustDocIcon =
  | "BadgeCheck" | "ScrollText" | "CreditCard"
  | "FileCheck2" | "HeartHandshake" | "Landmark" | "BarChart3";

export type TrustDocument = {
  id: string;
  icon: TrustDocIcon;
  title: Bilingual;
  description: Bilingual;
  /** File name inside public/documents/trust/. Leave undefined if not available yet. */
  file?: string;
  /** Optional, fill only with real information */
  issuedBy?: Bilingual;
  issueDate?: string; // e.g. "2019-04-12"
};

export const trustDocuments: TrustDocument[] = [
  {
    id: "registration",
    icon: "BadgeCheck",
    title: { en: "Trust Registration Certificate", mr: "ट्रस्ट नोंदणी प्रमाणपत्र" },
    description: {
      en: "Official certificate of registration of the Trust.",
      mr: "ट्रस्टचे अधिकृत नोंदणी प्रमाणपत्र.",
    },
    file: "trust-registration-certificate.pdf", // remove this line if you don't have it yet
  },
  {
    id: "deed",
    icon: "ScrollText",
    title: { en: "Trust Deed", mr: "ट्रस्ट डीड (विश्वस्त पत्र)" },
    description: {
      en: "The founding document describing the Trust's aims and governance.",
      mr: "ट्रस्टची उद्दिष्टे व कार्यपद्धती नमूद करणारे मूळ दस्तऐवज.",
    },
    file: "trust-deed.pdf",
  },
  {
    id: "pan",
    icon: "CreditCard",
    title: { en: "Trust PAN Card", mr: "ट्रस्ट पॅन कार्ड" },
    description: {
      en: "Permanent Account Number issued to the Trust.",
      mr: "ट्रस्टला देण्यात आलेला कायमस्वरूपी खाते क्रमांक.",
    },
    file: "trust-pan-card.pdf",
  },
  {
    id: "12a",
    icon: "FileCheck2",
    title: { en: "12A Registration Certificate", mr: "१२ए नोंदणी प्रमाणपत्र" },
    description: {
      en: "Income tax registration certificate under Section 12A.",
      mr: "कलम १२ए अंतर्गत आयकर नोंदणी प्रमाणपत्र.",
    },
    // file: "12a-certificate.pdf",   // add when available
  },
  {
    id: "80g",
    icon: "HeartHandshake",
    title: { en: "80G Registration Certificate", mr: "८०जी नोंदणी प्रमाणपत्र" },
    description: {
      en: "Income tax registration certificate under Section 80G.",
      mr: "कलम ८०जी अंतर्गत आयकर नोंदणी प्रमाणपत्र.",
    },
    // file: "80g-certificate.pdf",
  },
  {
    id: "other",
    icon: "Landmark",
    title: {
      en: "Other Government Registrations",
      mr: "इतर शासकीय नोंदणी व प्रमाणपत्रे",
    },
    description: {
      en: "Additional government registrations and relevant certificates.",
      mr: "इतर शासकीय नोंदणी व संबंधित प्रमाणपत्रे.",
    },
    // file: "other-registrations.pdf",
  },
  {
    id: "reports",
    icon: "BarChart3",
    title: { en: "Annual & Audit Reports", mr: "वार्षिक व लेखापरीक्षण अहवाल" },
    description: {
      en: "Annual reports and audited statements, where available.",
      mr: "उपलब्ध असल्यास वार्षिक अहवाल व लेखापरीक्षण विवरण.",
    },
    // file: "annual-report-2024-25.pdf",
  },
];