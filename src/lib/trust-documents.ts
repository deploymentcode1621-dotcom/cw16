export type Bilingual = { en: string; mr: string };

export type TrustDocIcon =
  | "BadgeCheck" | "ScrollText" | "CreditCard"
  | "FileCheck2" | "HeartHandshake" | "Landmark" | "BarChart3";

export type TrustFile = {
  /** File name inside public/documents/trust/ */
  file: string;
  /** Shown on the card only when a document has more than one file */
  label?: Bilingual;
};

export type TrustDocument = {
  id: string;
  icon: TrustDocIcon;
  title: Bilingual;
  description: Bilingual;
  files?: TrustFile[];
  issuedBy?: Bilingual;
  issueDate?: string;
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
    files: [{ file: "trust-registration-certificate.pdf" }],
  },
  {
    id: "deed",
    icon: "ScrollText",
    title: { en: "Trust Deed", mr: "ट्रस्ट डीड (विश्वस्त पत्र)" },
    description: {
      en: "The founding document describing the Trust's aims and governance.",
      mr: "ट्रस्टची उद्दिष्टे व कार्यपद्धती नमूद करणारे मूळ दस्तऐवज.",
    },
    // files: [{ file: "trust-deed.pdf" }],  // add once you confirm which PDF is the deed
  },
  {
    id: "pan",
    icon: "CreditCard",
    title: { en: "Trust PAN Card", mr: "ट्रस्ट पॅन कार्ड" },
    description: {
      en: "Permanent Account Number issued to the Trust.",
      mr: "ट्रस्टला देण्यात आलेला कायमस्वरूपी खाते क्रमांक.",
    },
    files: [{ file: "trust-pan-card.pdf" }],
  },
  {
    id: "12a",
    icon: "FileCheck2",
    title: { en: "12A Registration Certificate", mr: "१२ए नोंदणी प्रमाणपत्र" },
    description: {
      en: "Income tax registration certificate under Section 12A.",
      mr: "कलम १२ए अंतर्गत आयकर नोंदणी प्रमाणपत्र.",
    },
    files: [{ file: "12a-certificate.pdf" }],
  },
  {
    id: "80g",
    icon: "HeartHandshake",
    title: { en: "80G Registration Certificate", mr: "८०जी नोंदणी प्रमाणपत्र" },
    description: {
      en: "Income tax registration certificate under Section 80G.",
      mr: "कलम ८०जी अंतर्गत आयकर नोंदणी प्रमाणपत्र.",
    },
    files: [{ file: "80g-certificate.pdf" }],
  },
  {
    id: "other",
    icon: "Landmark",
    title: { en: "Other Government Registrations", mr: "इतर शासकीय नोंदणी व प्रमाणपत्रे" },
    description: {
      en: "Additional government registrations and relevant certificates.",
      mr: "इतर शासकीय नोंदणी व संबंधित प्रमाणपत्रे.",
    },
    files: [
      { file: "csr-1-registration.pdf", label: { en: "CSR-1 Registration", mr: "सीएसआर-१ नोंदणी" } },
      { file: "ngo-darpan-certificate.pdf", label: { en: "NGO Darpan Certificate", mr: "एनजीओ दर्पण प्रमाणपत्र" } },
      { file: "smha-registration.pdf", label: { en: "SMHA Registration", mr: "एसएमएचए नोंदणी" } },
    ],
  },
  {
    id: "reports",
    icon: "BarChart3",
    title: { en: "Annual & Audit Reports", mr: "वार्षिक व लेखापरीक्षण अहवाल" },
    description: {
      en: "Annual reports and audited statements, where available.",
      mr: "उपलब्ध असल्यास वार्षिक अहवाल व लेखापरीक्षण विवरण.",
    },
    files: [
      { file: "audit-report-2025-26.pdf", label: { en: "Audit Report 2025–26", mr: "लेखापरीक्षण अहवाल २०२५–२६" } },
    ],
  },
];