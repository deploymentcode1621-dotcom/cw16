// Copy for the redesigned Contact page hero and guidance section.
// To localise: add an `extra` object with this shape to `contact` in each language of your
// translations file. ContactContent reads `t.contact.extra` and falls back to this.

export type ContactExtra = {
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaCall: string;
    ctaDirections: string;
    panelTitle: string;
    phoneLabel: string;
    emailLabel: string;
    note: string;
  };
  guide: {
    title: string;
    text: string;
    services: string;
    admission: string;
  };
  form: {
    intro: string;
    nameError: string;
    phoneError: string;
    messageError: string;
    subject: string;
    opened: string;
  };
  location: { title: string; text: string; directions: string };
};

export const contactExtraEn: ContactExtra = {
  hero: {
    eyebrow: "GET IN TOUCH",
    title: "We're here to help you take the next step.",
    text: "Whether you're seeking information about our services or need guidance for a family member, our team can help you understand how to get in touch.",
    ctaCall: "Call the Centre",
    ctaDirections: "Get Directions",
    panelTitle: "Ways to reach us",
    phoneLabel: "Phone",
    emailLabel: "Email",
    note: "Please call or email the centre before travelling.",
  },
  guide: {
    title: "Not sure where to start?",
    text: "Contact our team to ask about available services, admission procedures or the information you may need before visiting.",
    services: "Explore Our Services",
    admission: "View Admission Process",
  },
  form: {
    intro:
      "Tell us how we can help. Sending opens a message in your email app, addressed to the centre, so you can review it before it goes.",
    nameError: "Please enter your name.",
    phoneError: "Please enter a valid phone number.",
    messageError: "Please write a short message.",
    subject: "Website enquiry from",
    opened:
      "Your email app should now be open with your message ready. It is only sent when you send it from your email app. If nothing opened, please call or email the centre directly.",
  },
  location: {
    title: "Find our centre.",
    text: "Visit us at Vishal Nagar East, Latur. Contact the centre before travelling if you need clarification about your visit.",
    directions: "Get Directions",
  },
};