// Copy for the NEW Services sections.
// Existing keys (title, deaddictionItems, palliativeItems, ...) still come from t.servicesPage.
// To localise: add an `extra` object with this same shape to servicesPage in each language
// of your translations file. ServicesContent reads `t.servicesPage.extra` and falls back to this.

export type ServicesExtra = {
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaDeaddiction: string;
    ctaPalliative: string;
  };
  divisions: {
    deaddiction: { title: string; text: string; link: string };
    palliative: { title: string; text: string; link: string };
  };
  deaddiction: { eyebrow: string; title: string; intro: string; featuredLabel: string; moreLabel: string };
  palliative: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    whoTitle: string;
    who: string[];
    homeNote: string;
  };
  journey: { title: string; steps: { title: string; text: string }[] };
  facilities: {
    title: string;
    text: string;
    items: { value: string; label: string; text: string }[];
  };
  family: { title: string; text: string; points: string[] };
  cta: { title: string; text: string; contact: string; donate: string };
};

export const servicesExtraEn: ServicesExtra = {
  hero: {
    eyebrow: "OUR SERVICES",
    title: "Care for recovery. Support for every stage of life.",
    text: "Compassionate de-addiction treatment and palliative care, bringing together medical support, rehabilitation and dignity for individuals and families.",
    ctaDeaddiction: "Explore De-addiction Care",
    ctaPalliative: "Explore Palliative Care",
  },
  divisions: {
    deaddiction: {
      title: "De-addiction and Rehabilitation",
      text: "Support for people affected by substance dependence through medical assessment, treatment, counselling, rehabilitation and ongoing support, where available.",
      link: "See de-addiction services",
    },
    palliative: {
      title: "Palliative Care",
      text: "Relief from pain and distress, comfort and dignity for people living with serious illness, with emotional support for their families.",
      link: "See palliative services",
    },
  },
  deaddiction: {
    eyebrow: "DE-ADDICTION & REHABILITATION",
    title: "A supported path towards recovery.",
    intro:
      "Recovery may involve medical care, emotional support, healthy routines and family participation. Our services are organised around these needs.",
    featuredLabel: "Medical assessment and treatment",
    moreLabel: "Recovery support",
  },
  palliative: {
    eyebrow: "PALLIATIVE CARE & COMFORT",
    title: "Comfort, dignity and compassionate support.",
    intro:
      "Palliative care aims to relieve suffering and improve quality of life, and to support patients and families through serious illness with dignity.",
    note: "Palliative care focuses on comfort and quality of life. It is not a promise of cure.",
    whoTitle: "Supporting people living with",
    who: [
      "Cancer",
      "Heart disease",
      "Kidney disease",
      "Other serious, long-standing illness",
      "Paralysis and coma",
    ],
    homeNote:
      "Where families find it difficult to care for a patient at home, the centre cares for the patient in its hospital.",
  },
  journey: {
    title: "Care that begins with listening.",
    steps: [
      { title: "Initial Contact", text: "Patients or families contact the centre to discuss their needs." },
      { title: "Assessment", text: "The care team assesses the person's situation and appropriate next steps." },
      {
        title: "Care Planning",
        text: "A suitable plan is discussed according to the individual's needs and available services.",
      },
      {
        title: "Ongoing Support",
        text: "Treatment, follow-up and family support are provided as appropriate.",
      },
    ],
  },
  facilities: {
    title: "Facilities supporting compassionate care.",
    text: "Two inpatient areas, one for general hospital care and one dedicated to de-addiction.",
    items: [
      { value: "10+", label: "Hospital beds", text: "For hospital and palliative care patients." },
      { value: "48+", label: "De-addiction beds", text: "For residential de-addiction treatment." },
    ],
  },
  family: {
    title: "Care that includes the people who matter.",
    text: "Addiction and serious illness affect whole families. Care works best when families are informed, involved and treated with respect.",
    points: [
      "Compassionate, honest communication",
      "Appropriate family involvement",
      "Understanding addiction and serious illness",
      "Respect for patient dignity",
      "Support throughout the care journey",
    ],
  },
  cta: {
    title: "Looking for care or guidance?",
    text: "Reach out to our centre to learn more about the available services and discuss the next steps for you or your family.",
    contact: "Contact the Centre",
    donate: "Support Our Mission",
  },
};