// Copy for the redesigned Admission page.
// To localise (e.g. Marathi): add an `extra` object with this shape to `admission` in each
// language of your translations file. AdmissionContent reads `t.admission.extra` and falls back to this.

export type AdmissionExtra = {
  hero: { eyebrow: string; title: string; text: string; ctaCall: string; ctaSteps: string; previewTitle: string };
  intro: { title: string; text: string; principles: { title: string; text: string }[] };
  journey: { title: string; steps: { title: string; text: string }[] };
  prepare: { title: string; text: string; items: string[]; panelTitle: string; note: string; call: string };
  reassure: { title: string; text: string };
  faq: {
    title: string;
    items: { q: string; a: string; link?: { href: string; label: string } }[];
  };
  cta: { title: string; text: string; call: string; contact: string };
};

export const admissionExtraEn: AdmissionExtra = {
  hero: {
    eyebrow: "ADMISSION PROCESS",
    title: "Taking the first step towards care, together.",
    text: "Understand the admission journey, prepare for the next steps and connect with our team for guidance and support.",
    ctaCall: "Speak to Our Team",
    ctaSteps: "View Admission Steps",
    previewTitle: "The journey in seven steps",
  },
  intro: {
    title: "A clear process. Careful guidance at every step.",
    text: "Every admission begins with a conversation. Our team can help patients and families understand the process, discuss their needs and clarify the next steps before proceeding.",
    principles: [
      { title: "Guidance for families", text: "Questions are welcome before any decision is made." },
      { title: "Respectful patient care", text: "Privacy and dignity are part of every step." },
      { title: "Clear admission information", text: "Know what to expect before you travel." },
    ],
  },
  journey: {
    title: "Your admission journey, step by step.",
    steps: [
      {
        title: "Initial Contact and Admission Request",
        text: "A patient or family member contacts the centre to discuss the situation and understand the admission process.",
      },
      {
        title: "Patient Counselling and Initial Discussion",
        text: "The team discusses the patient's circumstances and explains the available next steps.",
      },
      {
        title: "Transport Arrangements, If Needed",
        text: "Contact the centre to discuss whether transport assistance can be arranged when the patient cannot travel independently.",
      },
      {
        title: "Admission Documentation",
        text: "Relevant patient details are recorded using the centre's admission documentation.",
      },
      {
        title: "Consent and Necessary Signatures",
        text: "The appropriate consent and documentation requirements are explained to the patient or authorised representative.",
      },
      {
        title: "Belongings and Personal Items",
        text: "Personal belongings are handled and recorded according to the centre's applicable procedures.",
      },
      {
        title: "Commencement of Care",
        text: "Care begins following the appropriate assessment, admission formalities and clinical guidance.",
      },
    ],
  },
  prepare: {
    title: "Before you arrive.",
    text: "Contact our team before travelling to confirm the information and arrangements relevant to your situation.",
    items: [
      "Patient identification and relevant personal details",
      "Available medical records and current prescriptions",
      "Emergency contact information",
      "Any relevant treatment history",
      "Questions or concerns you would like to discuss",
    ],
    panelTitle: "Worth discussing with the centre",
    note: "Please contact the centre to confirm the applicable documentation and admission requirements before travelling.",
    call: "Call the Centre",
  },
  reassure: {
    title: "You're not expected to figure everything out alone.",
    text: "Patients and families can contact the centre to clarify the admission process, ask questions and understand the next steps. Clear communication helps everyone approach care with greater confidence.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How do I begin the admission process?",
        a: "Contact the centre by phone or email to discuss the situation. The team will explain the next steps.",
      },
      {
        q: "Can a family member contact the centre on behalf of a patient?",
        a: "Yes. Admission usually begins when a family member reaches out to the centre. The patient is then spoken with as part of the counselling step.",
      },
      {
        q: "Can transport assistance be arranged?",
        a: "The centre can discuss whether transport assistance is possible when a patient is unable to travel. Please contact the centre to confirm for your situation.",
      },
      {
        q: "What information should we prepare before admission?",
        a: "It helps to have the patient's identification and personal details, available medical records and prescriptions, emergency contacts and any treatment history. These are suggestions to discuss, not a confirmed list of requirements.",
      },
      {
        q: "How can we confirm the current admission requirements?",
        a: "Contact the centre before travelling. You can also read the centre's rules and regulations.",
        link: { href: "/rules", label: "Rules & Regulations" },
      },
      {
        q: "How can we contact the centre for further guidance?",
        a: "Call +91 8956550539 or +91 02382-314045, email ssdpclatur@gmail.com, or use the contact page.",
        link: { href: "/contact", label: "Contact page" },
      },
    ],
  },
  cta: {
    title: "Have questions about admission?",
    text: "Speak with our team to discuss the process, clarify requirements and understand the next steps for your family.",
    call: "Call the Centre",
    contact: "Contact Us",
  },
};