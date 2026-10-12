// Editable content for the Rules & Regulations page.
// RulesContent uses your existing translated rules (t.rules.items) when they match this shape,
// and falls back to the English wording below, copied exactly from the current page.

export type Rule = { n: number; title: string; desc: string };

export const rulesEn: Rule[] = [
  { n: 1, title: "Visiting hours", desc: "Relatives may visit the office between 10:00 AM and 5:00 PM." },
  { n: 2, title: "Discharge hours", desc: "Patient discharge takes place between 10:00 AM and 5:00 PM." },
  { n: 3, title: "No late discharge", desc: "No discharge is given after 3:00 AM under any circumstance." },
  { n: 4, title: "Authorised discharge", desc: "The patient is discharged only to the relative who signed at admission." },
  { n: 5, title: "One visitor at a time", desc: "Only one relative may enter the office at any given time." },
  { n: 6, title: "No intoxication on visits", desc: "Relatives must not visit the centre under the influence of any substance." },
  { n: 7, title: "Night entry restricted", desc: "No outside visitors are allowed at the centre after 6:00 PM." },
  { n: 8, title: "Planned discharge only", desc: "Discharge is not done without prior notice of 5:30 PM." },
  { n: 9, title: "Legal compliance", desc: "Violation of rules may lead to action under healthcare protection law." },
  { n: 10, title: "Initial call restriction", desc: "Patients cannot take calls or meet visitors for the first 21 days." },
];

// Grouping only: each rule keeps its original number and wording.
export const ruleGroups: { id: "visiting" | "discharge" | "communication"; rules: number[] }[] = [
  { id: "visiting", rules: [1, 5, 6, 7] },
  { id: "discharge", rules: [2, 3, 4, 8] },
  { id: "communication", rules: [9, 10] },
];

export type RulesExtra = {
  hero: { eyebrow: string; title: string; text: string };
  notice: string;
  groups: Record<"visiting" | "discharge" | "communication", { title: string; text: string }>;
  cta: { title: string; text: string; contact: string; admission: string };
};

export const rulesExtraEn: RulesExtra = {
  hero: {
    eyebrow: "PATIENT & VISITOR GUIDELINES",
    title: "Rules & Regulations",
    text: "Clear guidelines help us maintain a safe, respectful and supportive environment for patients, families and visitors.",
  },
  notice:
    "These guidelines help our team maintain a safe, orderly and supportive environment for everyone at the centre. Please contact our team if you need clarification about a rule.",
  groups: {
    visiting: { title: "Visiting & visiting hours", text: "When and how relatives may visit the centre." },
    discharge: { title: "Admission & discharge", text: "When, and to whom, patients may be discharged." },
    communication: { title: "Patient communication & compliance", text: "Calls and visits in the first weeks, and following the rules." },
  },
  cta: {
    title: "Need clarification about a rule?",
    text: "Our team can help you understand the centre's visiting and admission procedures.",
    contact: "Contact the Centre",
    admission: "View Admission Process",
  },
};