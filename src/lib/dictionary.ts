export type Locale = "en" | "mr";

export const locales: Locale[] = ["en", "mr"];

export const siteInfo = {
  phone1: "8956550539",
  phone2: "02382-314045",
  email: "ssdpclatur@gmail.com",
  address: "Plot No. 10 & 11, Vishal Nagar East, Near Kashivishweshwar Mandir, Latur - 413512",
  bank: {
    name: "Ujjivan Small Finance Bank",
    account: "4493110110055389",
    ifsc: "UJVN0004493",
    upi: "UPAY74071857457@Ujjivan",
  },
  org: "Kai Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha",
  regNo: "Latur/0000179/2026",
};

export const dictionary = {
  /* ------------------------------------------------------------------ */
  /*  ENGLISH                                                            */
  /* ------------------------------------------------------------------ */
  en: {
    meta: {
      siteName: "S.S. De-Addiction & Palliative Care Centre, Latur",
      tagline: "A de-addicted society is our dream",
    },

    lang: {
      switchLabel: "मराठी",
      switchAria: "Switch to Marathi",
    },

    header: {
      brandTitle: "Kai. Ashwini Bargale Trust",
      brandSub: "S.S. De-Addiction & Palliative Care Centre, Latur",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },

    floating: {
      donate: "Donate",
      call: "Call the centre",
    },

    nav: {
      home: "Home",
      about: "About Centre",
      services: "Services",
      admission: "Admission Process",
      rules: "Rules & Regulations",
      gallery: "Gallery",
      donation: "Donation",
      contact: "Contact",
      callNow: "Call Now",
      donateNow: "Donate Now",
    },

    home: {
      heroEyebrow: "Bargale Hospital · Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha",
      heroTitle: "S.S. De-Addiction & Palliative Care Centre, Latur",
      heroSubtitle: "Professional de-addiction treatment and compassionate palliative care, in the heart of Latur.",
      heroTagline: "\u201cव्यसनमुक्त समाज हेच आमचे स्वप्न\u201d — A de-addicted society is our dream.",
      trustBadge1: "10-bed hospital + 48-bed centre",
      trustBadge2: "Registered public trust · Reg. No. Latur/0000179/2026",
      trustBadge3: "80G & 12A · CSR Registered",

      hero: {
        title: "For a Healthier, Pain-Free and Addiction-Free Society...",
        highlight: "Your One Step Matters!",
        imageAlt: "From Struggle to Strength",
        imageCaption: "From Struggle to Strength",
        stats: [
          { value: "10+", title: "Bedded Hospital", subtitle: "In the heart of Latur" },
          { value: "48+", title: "Bedded De-addiction & Palliative Care Centre", subtitle: "Full capacity operation" },
          { value: "Expert", title: "Medical Team", subtitle: "Doctors, counsellors and support staff" },
          { value: "Holistic", title: "Care", subtitle: "Physical, mental, social and spiritual support" },
        ],
      },

      donateStrip: {
        title: "For a Healthy and Pain-Free Society... Your One Step!",
        body: "We appeal to generous donors to support our work in De-addiction and Palliative Care, two of the most sensitive and important areas in society.",
        cta: "Donate Now",
      },

      legacy: {
        eyebrow: "A Legacy of Compassion",
        title: "Remembering Kai. Ashwini Bargale Mam",
        body: "Her memory inspires our commitment to compassionate care, dignity and hope for individuals and families affected by addiction and serious illness. We continue working towards a healthier, addiction-free society.",
        cta: "Her Vision & Legacy",
        badge: "Forever in Our Hearts",
        name: "Kai. Ashwini Bargale Mam",
        quote: "A healthier, pain-free society begins with compassion, dignity and hope.",
      },

      mainServices: {
        eyebrow: "Our main services",
        title: "De-addiction and Palliative Care for a Brighter Future",
        deaddiction: {
          title: "De-addiction Centre",
          subtitle: "Helping individuals move towards a healthier, substance-free life.",
          items: [
            { title: "De-addiction Treatment", desc: "For alcohol, tobacco, cannabis and other substances" },
            { title: "Medical Treatment", desc: "Scientific treatment, detoxification and psychiatric support" },
            { title: "Counselling", desc: "Individual and family counselling for patients and their families" },
            { title: "Rehabilitation", desc: "Support to rebuild a dignified and self-reliant life" },
          ],
          cta: "Know More About De-addiction Centre",
        },
        palliative: {
          title: "Palliative Care Centre",
          subtitle: "Compassionate care for patients and families during serious illness.",
          items: [
            { title: "Pain & Symptom Management", desc: "Care for cancer, paralysis and other serious illnesses" },
            { title: "Emotional & Family Support", desc: "Psychological, emotional and medical guidance" },
            { title: "Dignified Living", desc: "Gentle, comfortable and respectful care till the final moments" },
            { title: "Awareness & Support", desc: "Community awareness and counselling programs" },
          ],
          cta: "Know More About Palliative Care Centre",
        },
      },

      contactCard: {
        phoneLabel: "Phone",
        addressLabel: "Address",
        address: "Vishal Nagar East, Near Kashivishweshwar Mandir, Latur",
      },

      facilitiesTitle: "Why families choose us",
      facilitiesSubtitle: "A calm, secure, fully-equipped facility built for real recovery — not just treatment.",
      facilityEyebrow: "Our Facility",
      facilityHeadline: "10-Bedded Hospital & 48-Bedded De-addiction and Palliative Care Centre",
      facilityText:
        "Run by Dr. R. O. Deshmukh and Mrs. Madhavi Anand Bargale (Chairperson), our centre is located in the central area of Latur city and is fully operational.",
      facilityCta: "View Our Facilities",
      facilityImageAlt: "Front view of the S.S. De-Addiction & Palliative Care Centre building in Latur",
      facilityHighlights: [
        { title: "Clean & Safe Rooms", desc: "Comfortable accommodation for patients" },
        { title: "Nutritious Food", desc: "Hygienic and balanced meals" },
        { title: "Counselling & Support", desc: "For patients and families" },
        { title: "Safe Environment", desc: "Secure, peaceful and well-maintained facility" },
      ],

      processEyebrow: "Our Process",
      processTitle: "How Our Services Work",
      processSubtitle: "A simple and supportive process to ensure the right care for every individual.",
      processSteps: [
        { title: "Contact Us", desc: "Call or visit our centre" },
        { title: "Initial Assessment", desc: "Understand the needs and situation" },
        { title: "Personalized Plan", desc: "Treatment and support as per individual needs" },
        { title: "Ongoing Care", desc: "Medical, psychological and family support" },
        { title: "Rehabilitation", desc: "Build a better life" },
        { title: "Follow-up", desc: "Continuous guidance for long-term wellness" },
      ],

      testimonialsEyebrow: "Patient Reviews",
      testimonialsTitle: "What Families Say",
      testimonialsSubtitle: "Real experiences shared by people who trusted us with their care.",
      testimonialsRatingLabel: "5.0 · 3 Google reviews",
      testimonialsLinkLabel: "See all reviews on Google",
      testimonials: [
        {
          quote: "If you have a problem with your ear, then I will make noise for this hospital, which is affordable and has the best service ever.",
          name: "Sammed Magdum",
          source: "Google review · Bargale Hospital",
        },
        {
          quote: "After 12 years of marriage and just 4 months of treatment, we have twin babies. Thank you, sir.",
          name: "Vishvajit Patil",
          source: "Google review · Bargale Hospital",
        },
        {
          quote: "Nice pediatric hospital.",
          name: "Rohit Male",
          source: "Google review · Bargale Hospital",
        },
      ],

      donateBannerTitle: "Your Donation Makes a Difference",
      donateBannerBody:
        "Your small contribution can bring hope, care and a better tomorrow to many needy and underprivileged patients.",
      donateBannerContact: "Contact Our Team",
      donateBannerScript: "Together We Can Make a Better Society",

      palliativeTitle: "Palliative Care, explained simply",
      palliativeIntro:
        "Palliative care brings relief from pain, stress and other symptoms of serious illness, while supporting the whole family — emotionally and practically — through the hardest chapters of life.",
      palliativeCards: [
        {
          title: "Our purpose",
          body: "Not to cure the illness, but to ease the journey — helping people live with as much comfort and dignity as possible.",
        },
        {
          title: "What patients receive",
          body: "Relief from physical pain, help with breathing, better sleep, and steady mental and social support.",
        },
        {
          title: "Who it is for",
          body: "Patients with cancer, heart disease, kidney illness, paralysis, coma, or other serious long-term conditions.",
        },
        {
          title: "Our focus",
          body: "Caring for the whole person — physical, mental, emotional and spiritual needs — to improve quality of life.",
        },
      ],

      ctaTitle: "Ready to take the first step?",
      ctaBody: "Whether it's for yourself or someone you love, our team is here to guide you — with care, not judgement.",
      ctaButton: "Speak to our team",
      ctaEyebrow: "We're here for you",
      ctaWhatsapp: "Chat on WhatsApp",
      ctaCardTitle: "Talk to us, day or night",
      ctaCardNote: "A caring voice is only a phone call away.",

      heroBanner: {
        kicker: "S.S. De-Addiction & Palliative Care Centre, Latur",
        titleLine1: "From Addiction",
        titleLine2Prefix: "to",
        titleHighlight: "Recovery",
        subtitle: "Professional treatment, counselling, family support and rehabilitation.",
        ctaPrimary: "Call Now",
        ctaSecondary: "Get Help Today",
        leftCaption: "From Struggle...",
        rightCaption: "...To a Brighter Future",
        strugglePoints: ["Addiction", "Mental Stress", "Broken Relationships", "Lost Hope"],
        hopePoints: ["Recovery", "Peace of Mind", "Stronger Family", "Better Life"],
        statCards: [
          { title: "10-Bed Hospital", subtitle: "Care & Safety" },
          { title: "48-Bed Rehabilitation Centre", subtitle: "Recovery & Rebuilding" },
          { title: "Palliative Care", subtitle: "Compassionate Support" },
          { title: "Family Counselling", subtitle: "Together We Heal" },
        ],
        trustRow: [
          { title: "Registered Trust", subtitle: "Reg. No. Latur/0000179/2026" },
          { title: "80G & 12A Certified", subtitle: "Tax Benefits Available" },
          { title: "Qualified Medical Team", subtitle: "Experienced & Caring" },
          { title: "Family Support Programs", subtitle: "Because You're Not Alone" },
        ],
      },
    },

    aboutTrust: {
      eyebrow: "About our trust",
      title: "A Social Initiative with a Deeper Meaning",
      p1: "Health is the greatest wealth. But when a person falls into the trap of addiction or is fighting a serious, incurable illness (such as cancer or paralysis), not only the individual but the entire family faces emotional, physical and financial challenges.",
      p2: "Kai Ashwini Anand Bargale Multipurpose Social Welfare Trust, Latur is working with full commitment in the field of healthcare and social service to address these issues.",
      cta: "Know More About Our Trust",
      caption: "A Better Tomorrow is Possible...",
      values: ["Humanity", "Service", "Seva", "Dignity"],
    },

    facilities: [
      { title: "Well-constructed building", desc: "A purpose-built, calm space designed for recovery." },
      { title: "Central location", desc: "Easy to reach from anywhere in Latur." },
      { title: "Effective treatment", desc: "Structured, medically-guided treatment protocols." },
      { title: "Proper guidance", desc: "Step-by-step direction for patients and families alike." },
      { title: "Counselling", desc: "One-on-one and family counselling throughout the stay." },
      { title: "Psychiatric consultation", desc: "Regular consultation with psychiatric specialists." },
      { title: "Nutritious food", desc: "Home-style, balanced meals every day." },
      { title: "Clean drinking water", desc: "Safe, clean water available at all times." },
      { title: "Yoga & Pranayama", desc: "Daily yoga and breathing practice for body and mind." },
      { title: "Library", desc: "A quiet reading space to support recovery of the mind." },
      { title: "Healthy environment", desc: "A clean, sympathetic, family-like atmosphere." },
      { title: "CCTV monitoring", desc: "The entire building is under CCTV supervision." },
      { title: "Fire safety", desc: "Fire alarm and fire-safety systems in place." },
    ],

    about: {
      title: "About the Centre",
      subtitle: "Born from personal loss, built for the community.",
      storyTitle: "Our story",
      storyParas: [
        "Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha, Latur was founded in loving memory of Late Ashwini, wife of Dr. Anand Bargale, who passed away in September 2021 after a prolonged illness and three years in a coma.",
        "During her illness, the family experienced first-hand how difficult and expensive it is to arrange proper nursing and palliative care at home — and realised that most families cannot afford this level of care on their own.",
        "Keeping this realisation in mind, the organisation was founded in her name, with the goal of bringing relief to poor and needy patients and their families through palliative care and de-addiction treatment.",
      ],
      visionTitle: "Our vision",
      visionBody:
        "A healthy, self-reliant society where the underprivileged are brought into the mainstream through education, health and social upliftment — and where every district has access to compassionate palliative care.",
      orgTitle: "The organisation",
      orgBody:
        "Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha is a registered public charitable trust (Reg. No. Latur/0000179/2026) working across healthcare, social and educational sectors in and around Latur.",
      capacityTitle: "Our facility today",
      capacityItems: [
        { label: "Hospital beds", value: "10" },
        { label: "De-addiction & Palliative beds", value: "48" },
        { label: "Location", value: "Vishal Nagar, Latur" },
      ],
      boardTitle: "Management Board",
      boardMembers: [
        { role: "President", name: "Mrs. Madhavi Anand Bargale" },
        { role: "Vice President", name: "Mr. Shekhar M. Kore" },
        { role: "Secretary", name: "Dr. Anand N. Bargale" },
        { role: "Treasurer", name: "Mrs. Pushpa N. Bargale" },
        { role: "Joint Secretary", name: "Mr. Hemant Lohare" },
        { role: "Member", name: "Dr. Sankalp S. Bargale" },
        { role: "Member", name: "Mr. Balu Kamble" },
      ],

      hero: {
        eyebrow: "About our centre",
        title: "Care that restores dignity. Hope that rebuilds lives.",
        body: "Discover the people, purpose and compassionate care behind our commitment to supporting individuals and families affected by addiction and serious illness.",
        ctaPrimary: "Explore Our Mission",
        ctaSecondary: "Support Our Work",
        memoryBadge: "In loving memory",
        memoryName: "Kai. Ashwini Bargale Mam",
      },
      story: {
        eyebrow: "Our story",
        title: "A legacy of compassion. A mission that continues.",
        pullQuote:
          "Our organisation was founded in loving memory of Kai. Ashwini Anand Bargale, so that families facing addiction or serious illness do not face it alone.",
        timeline: [
          { label: "September 2021", text: "Ashwini passed away after a prolonged illness and three years in a coma." },
          { label: "What the family learned", text: "Proper nursing and palliative care at home was difficult and costly, and out of reach for most families." },
          { label: "The purpose", text: "The organisation was founded in her name to bring relief to poor and needy patients and their families." },
        ],
      },
      identity: {
        eyebrow: "Our identity",
        title: "Working together for better care.",
        body: "Bargale Hospital and the S.S. De-Addiction & Palliative Care Centre are run by Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha, a registered charitable trust working in healthcare, social and educational fields in and around Latur.",
        hospitalCaption: "Bargale Hospital",
        centreCaption: "S.S. De-Addiction & Palliative Care Centre",
      },
      purpose: {
        eyebrow: "Purpose",
        title: "Care guided by purpose.",
        missionTitle: "Our mission",
        missionBody:
          "To support people affected by addiction and serious illness through compassionate care, appropriate treatment, rehabilitation and family support.",
        standTitle: "What we stand for",
        standItems: [
          "Compassion and dignity",
          "Responsible care",
          "Recovery and rehabilitation",
          "Family involvement",
          "Community service",
        ],
      },
      facility: {
        eyebrow: "Our facility",
        title: "Facilities designed around care.",
        body: "A calm, central and well-equipped setting in Vishal Nagar, Latur, with a hospital and a dedicated de-addiction and palliative care centre working side by side.",
        stats: [
          { value: "10+", label: "Hospital beds", note: "Inpatient hospital care" },
          { value: "48+", label: "De-addiction & palliative beds", note: "Dedicated care centre" },
        ],
        wingsTitle: "Two wings, one purpose",
        deaddictionTitle: "De-addiction treatment",
        deaddictionBody: "Medical treatment, counselling and rehabilitation to help people move towards a healthier life.",
        deaddictionLink: "View de-addiction services",
        palliativeTitle: "Palliative care",
        palliativeBody: "Comfort, pain relief and emotional support for patients with serious illness, and for their families.",
        palliativeLink: "View palliative care",
      },
      management: {
        eyebrow: "Management",
        title: "The people behind our mission.",
      },
      why: {
        eyebrow: "Why it matters",
        title: "Every person deserves care, dignity and a chance to recover.",
        body: "Addiction and serious illness affect the whole family, emotionally, physically and financially. Our work is to stand beside patients and their loved ones with respect, appropriate treatment and steady support.",
        items: [
          { title: "Compassionate support", desc: "Listening first, and treating every patient with respect." },
          { title: "Appropriate treatment", desc: "Medical care, counselling and rehabilitation under supervision." },
          { title: "Family involvement", desc: "Families are guided and supported through every step." },
        ],
      },
      cta: {
        kicker: "A de-addicted society is our dream",
        title: "Be part of someone's journey back to life.",
        body: "Your support helps strengthen compassionate care for people and families who need it most.",
        donate: "Donate to Support Care",
        contact: "Contact Our Centre",
      },
    },

    servicesPage: {
      title: "Our Services",
      subtitle: "Two dedicated wings, working together — de-addiction and palliative care — under one roof.",
      deaddictionTitle: "De-Addiction Treatment",
      deaddictionItems: [
        { title: "Alcohol addiction", desc: "Structured detox and recovery programme for alcohol dependence." },
        { title: "Drug addiction", desc: "Medical detoxification and rehabilitation for substance dependence." },
        { title: "Counselling", desc: "Individual and group counselling to rebuild motivation and habits." },
        { title: "Psychiatric support", desc: "Ongoing psychiatric care for co-occurring mental health needs." },
        { title: "Family therapy", desc: "Helping families heal and support recovery together." },
        { title: "Yoga", desc: "Guided daily yoga sessions to restore physical strength." },
        { title: "Meditation", desc: "Meditation practice for calm, focus and emotional balance." },
      ],
      palliativeTitle: "Palliative Care",
      palliativeItems: [
        { title: "Palliative care", desc: "Pain management and comfort care for serious, long-term illness." },
        { title: "Home care support", desc: "Guidance and support extended to the patient's own home." },
      ],

      hero: {
        eyebrow: "Our services",
        title: "Care for recovery. Support for every stage of life.",
        body: "Compassionate de-addiction treatment and palliative care, bringing together medical support, rehabilitation and dignity for individuals and families.",
        ctaDeaddiction: "Explore De-addiction Care",
        ctaPalliative: "Explore Palliative Care",
        tileDeaddiction: "De-addiction and Rehabilitation",
        tilePalliative: "Palliative Care",
      },
      overview: {
        deaddiction: {
          title: "De-addiction and Rehabilitation",
          body: "Support for people affected by substance dependence through medical assessment, treatment, counselling, rehabilitation and ongoing support, where available.",
          link: "See de-addiction services",
        },
        palliative: {
          title: "Palliative Care",
          body: "Relief from pain and distress, with comfort and dignity for people living with serious illness, and emotional support for their families.",
          link: "See palliative services",
        },
      },
      deaddictionSection: {
        eyebrow: "De-addiction & rehabilitation",
        title: "A supported path towards recovery.",
        body: "Recovery may involve medical care, emotional support, healthy routines and family participation. Our services are organised around these needs.",
        groupMedical: "Medical assessment and treatment",
        groupRecovery: "Recovery support",
      },
      palliativeSection: {
        eyebrow: "Palliative care & comfort",
        title: "Comfort, dignity and compassionate support.",
        body: "Palliative care aims to relieve suffering and improve quality of life, and to support patients and families through serious illness with dignity.",
        note: "Palliative care focuses on comfort and quality of life. It is not a promise of cure.",
        supportingTitle: "Supporting people living with",
        conditions: ["Cancer", "Heart disease", "Kidney disease", "Other serious, long-standing illness", "Paralysis and coma"],
        homeCareNote: "Where families find it difficult to care for a patient at home, the centre cares for the patient in its hospital.",
      },
      journey: {
        title: "Care that begins with listening.",
        steps: [
          { title: "Initial Contact", desc: "Patients or families contact the centre to discuss their needs." },
          { title: "Assessment", desc: "The care team assesses the person's situation and appropriate next steps." },
          { title: "Planning", desc: "A suitable plan is discussed according to the individual's needs and available services." },
          { title: "Ongoing Support", desc: "Treatment, follow-up and family support are provided as appropriate." },
        ],
      },
      facilitiesSection: {
        title: "Facilities supporting compassionate care.",
        body: "Two inpatient areas, one for general hospital care and one dedicated to de-addiction.",
        items: [
          { value: "10+", label: "Hospital beds", note: "For hospital and palliative care patients." },
          { value: "48+", label: "De-addiction beds", note: "For residential de-addiction treatment." },
        ],
      },
      family: {
        title: "Care that includes the people who matter.",
        body: "Addiction and serious illness affect whole families. Care works best when families are informed, involved and treated with respect.",
        items: [
          "Compassionate, honest communication",
          "Appropriate family involvement",
          "Understanding addiction and serious illness",
          "Respect for patient dignity",
          "Support throughout the care journey",
        ],
      },
      cta: {
        title: "Looking for care or guidance?",
        body: "Reach out to our centre to learn more about the available services and discuss the next steps for you or your family.",
        contact: "Contact the Centre",
        donate: "Support Our Mission",
      },
    },

    admission: {
      title: "Admission Process",
      subtitle: "A clear, family-friendly path from first call to the start of treatment.",
      steps: [
        { title: "Relative requests admission", desc: "A family member reaches out to us to begin the process." },
        { title: "Patient counselling", desc: "Our counsellors speak with the patient to understand their situation." },
        { title: "Pickup service, if needed", desc: "We can arrange safe pickup when the patient is unable to travel." },
        { title: "Admission form", desc: "Basic details are recorded on the admission form." },
        { title: "Consent signatures", desc: "The patient and family sign the required consent forms." },
        { title: "Deposit belongings", desc: "Valuables and personal items are safely deposited and recorded." },
        { title: "Start treatment", desc: "Treatment begins under medical and counselling supervision." },
      ],

      hero: {
        eyebrow: "Admission process",
        title: "Taking the first step towards care, together.",
        body: "Understand the admission journey, prepare for the next steps and connect with our team for guidance and support.",
        ctaPrimary: "Speak to Our Team",
        ctaSecondary: "View Admission Steps",
        panelTitle: "The journey in seven steps",
      },
      intro: {
        title: "A clear process. Careful guidance at every step.",
        body: "Every admission begins with a conversation. Our team can help patients and families understand the process, discuss their needs and clarify the next steps before proceeding.",
        points: [
          { title: "Guidance for families", desc: "Questions are welcome before any decision is made." },
          { title: "Respectful patient care", desc: "Privacy and dignity are part of every step." },
          { title: "Clear admission information", desc: "Know what to expect before you travel." },
        ],
      },
      journeyTitle: "Your admission journey, step by step.",
      journey: [
        { title: "Initial Contact and Admission Request", desc: "A patient or family member contacts the centre to discuss the situation and understand the admission process." },
        { title: "Patient Counselling and Initial Discussion", desc: "The team discusses the patient's circumstances and explains the available next steps." },
        { title: "Transport Arrangements, If Needed", desc: "Contact the centre to discuss whether transport assistance can be arranged when the patient cannot travel independently." },
        { title: "Admission Documentation", desc: "Relevant patient details are recorded using the centre's admission documentation." },
        { title: "Consent and Necessary Signatures", desc: "The appropriate consent and documentation requirements are explained to the patient or authorised representative." },
        { title: "Belongings and Personal Items", desc: "Personal belongings are handled and recorded according to the centre's applicable procedures." },
        { title: "Commencement of Care", desc: "Care begins following the appropriate assessment, admission formalities and clinical guidance." },
      ],
      prepare: {
        title: "Before you arrive.",
        body: "Contact our team before travelling to confirm the information and arrangements relevant to your situation.",
        items: [
          "Patient identification and relevant personal details",
          "Available medical records and current prescriptions",
          "Emergency contact information",
          "Any relevant treatment history",
          "Questions or concerns you would like to discuss",
        ],
        panelTitle: "Worth discussing with the centre",
        panelBody: "Please contact the centre to confirm the applicable documentation and admission requirements before travelling.",
        panelCta: "Call the Centre",
      },
      reassurance: {
        title: "You're not expected to figure everything out alone.",
        body: "Patients and families can contact the centre to clarify the admission process, ask questions and understand the next steps. Clear communication helps everyone approach care with greater confidence.",
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            q: "How do I begin the admission process?",
            a: "Call or email the centre. Our team will listen to the situation, explain the process and guide you on the next steps.",
          },
          {
            q: "Can a family member contact the centre on behalf of a patient?",
            a: "Yes. A patient or a family member can make the first contact and discuss the situation with our team.",
          },
          {
            q: "Can transport assistance be arranged?",
            a: "Please contact the centre to discuss whether transport assistance can be arranged when the patient cannot travel independently.",
          },
          {
            q: "How can we confirm the current admission requirements?",
            a: "Please contact the centre before travelling so the team can confirm the documentation and requirements that apply to your situation.",
          },
          {
            q: "How can we contact the centre for further guidance?",
            a: "Use the contact page, call the centre or send an email — the details are in the footer of every page.",
          },
        ],
      },
      cta: {
        title: "Have questions about admission?",
        body: "Speak with our team to discuss the process, clarify requirements and understand the next steps for your family.",
        call: "Call the Centre",
        contact: "Contact Us",
      },
    },

    rules: {
      title: "Rules & Regulations",
      subtitle: "Clear guidelines that keep the centre calm, safe and effective for every patient.",
      items: [
        { title: "Visiting hours", desc: "Relatives may visit the office between 10:00 AM and 5:00 PM." },
        { title: "Discharge hours", desc: "Patient discharge takes place between 10:00 AM and 5:00 PM." },
        { title: "No late discharge", desc: "No discharge is given after 3:00 AM under any circumstance." },
        { title: "Authorised discharge", desc: "The patient is discharged only to the relative who signed at admission." },
        { title: "One visitor at a time", desc: "Only one relative may enter the office at any given time." },
        { title: "No intoxication on visits", desc: "Relatives must not visit the centre under the influence of any substance." },
        { title: "Night entry restricted", desc: "No outside visitors are allowed at the centre after 6:00 PM." },
        { title: "Planned discharge only", desc: "Discharge is not done without prior notice or after 5:30 PM." },
        { title: "Legal compliance", desc: "Violation of rules may lead to action under healthcare protection law." },
        { title: "Initial call restriction", desc: "Patients cannot take calls or meet visitors for the first 21 days." },
      ],

      eyebrow: "Patient & visitor guidelines",
      intro: "Clear guidelines help us maintain a safe, respectful and supportive environment for patients, families and visitors.",
      notice: "These guidelines help our team maintain a safe, orderly and supportive environment for everyone at the centre. Please contact our team if you need clarification about a rule.",
      // `items` are 0-based indexes into rules.items above. The visible number badge is index + 1.
      groups: [
        { title: "Visits & visiting hours", desc: "When and how relatives may visit the centre.", items: [0, 4, 5, 6] },
        { title: "Admission & discharge", desc: "When, and to whom, patients may be discharged.", items: [1, 2, 3, 7] },
        { title: "Patient communication & compliance", desc: "Calls and visits in the first weeks, and following the rules.", items: [8, 9] },
      ],
      cta: {
        title: "Need clarification about a rule?",
        body: "Our team can help you understand the centre's visiting and admission procedures.",
        contact: "Contact the Centre",
        admission: "View Admission Process",
      },
    },

    donation: {
      title: "Support Our Mission",
      subtitle: "Your contribution gives dignity, treatment and hope to those who cannot afford it themselves.",
      quote:
        "\u201cTo save a home from ruin, and to bring two moments of smiles to the faces of patients battling serious illness...\u201d",
      scanTitle: "Scan & Donate",
      scanBody: "Use any UPI app — Google Pay, PhonePe, Paytm or BHIM — to scan and donate instantly.",
      bankDetailsTitle: "Bank Transfer Details",
      bankName: "Bank Name",
      accountName: "Account Name",
      accountNumber: "Account Number",
      ifsc: "IFSC Code",
      upiId: "UPI ID",
      thankYouTitle: "Thank you",
      thankYouBody:
        "Every donation, big or small, directly funds free and subsidised treatment for underprivileged patients. All donors receive an official receipt.",
      regTitle: "Registration & Tax Details",
      trustReg: "Trust Reg. No.",
      darpanId: "NGO Darpan ID",
      csrReg: "CSR Reg. No.",
      taxReg: "80G & 12A Reg. No.",
    },

    contact: {
      title: "Contact Us",
      subtitle: "We're here to answer your questions — day or night.",
      phoneTitle: "Phone",
      emailTitle: "Email",
      addressTitle: "Address",
      formTitle: "Send us a message",
      formName: "Your name",
      formPhone: "Phone number",
      formMessage: "Message",
      formSubmit: "Send message",
      mapTitle: "Find us on the map",

      hero: {
        eyebrow: "Get in touch",
        title: "We're here to help you take the next step.",
        body: "Whether you're seeking information about our services or need guidance for a family member, our team can help you understand how to get in touch.",
        callBtn: "Call the Centre",
        directionsBtn: "Get Directions",
      },
      reach: {
        title: "Ways to reach us",
        phone: "Phone",
        email: "Email",
        note: "Please call or email the centre before travelling.",
      },
      formIntro: "Tell us how we can help. Sending opens a message in your email app, addressed to the centre, so you can review it before it goes.",
      mailSubject: "Website enquiry – S.S. De-Addiction & Palliative Care Centre",
      find: {
        title: "Find our centre.",
        body: "Visit us at Vishal Nagar East, Latur. Contact the centre before travelling if you need clarification about your visit.",
      },
      cta: {
        title: "Not sure where to start?",
        body: "Contact our team to ask about available services, admission procedures or the information you may need before visiting.",
        services: "Explore Our Services",
        admission: "View Admission Process",
      },
    },

    gallery: {
      title: "Gallery",
      subtitle: "A glimpse into our centre, our facilities and our work.",
    },

    footer: {
      about:
        "S.S. De-Addiction & Palliative Care Centre, Latur is run by Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha — dedicated to healthcare and social service in Marathwada.",
      quickLinks: "Quick Links",
      getInTouch: "Get in Touch",
      rights: "All rights reserved.",
      orgName: "Kai Ashwini Anand Bargale Trust, Latur",
      legacy: "\u201cA Legacy of Humanity, A Commitment to Selfless Service\u201d",
      shortAbout:
        "Working for de-addiction and palliative care, committed to healthcare and social service in Latur, Maharashtra.",
      followUs: "Follow Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      regLabel: "Reg. No.",
      copyrightOrg: "Kai Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha",
    },

    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has moved.",
      cta: "Back to home",
    },

    loading: "Loading...",
  },

  /* ------------------------------------------------------------------ */
  /*  MARATHI                                                            */
  /* ------------------------------------------------------------------ */
  mr: {
    meta: {
      siteName: "एस.एस. व्यसनमुक्ती आणि उपशामक उपचार केंद्र, लातूर",
      tagline: "व्यसनमुक्त समाज हेच आमचे स्वप्न",
    },

    lang: {
      switchLabel: "EN",
      switchAria: "इंग्रजीमध्ये पहा",
    },

    header: {
      brandTitle: "कै. अश्विनी बरगाले ट्रस्ट",
      brandSub: "एस. एस. व्यसनमुक्ती व पॅलिएटिव्ह केअर सेंटर, लातूर",
      menuOpen: "मेनू उघडा",
      menuClose: "मेनू बंद करा",
    },

    floating: {
      donate: "देणगी द्या",
      call: "केंद्राला कॉल करा",
    },

    nav: {
      home: "मुख्यपृष्ठ",
      about: "केंद्राविषयी",
      services: "सेवा",
      admission: "प्रवेश प्रक्रिया",
      rules: "नियम व अटी",
      gallery: "छायाचित्रे",
      donation: "देणगी",
      contact: "संपर्क",
      callNow: "कॉल करा",
      donateNow: "देणगी द्या",
    },

    home: {
      heroEyebrow: "बरगाले हॉस्पिटल · कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था",
      heroTitle: "एस.एस. व्यसनमुक्ती आणि उपशामक उपचार केंद्र, लातूर",
      heroSubtitle: "लातूर शहराच्या मध्यवर्ती भागात, व्यावसायिक व्यसनमुक्ती उपचार आणि सहानुभूतीपूर्ण उपशामक काळजी.",
      heroTagline: "\u201cव्यसनमुक्त समाज हेच आमचे स्वप्न\u201d",
      trustBadge1: "१० खाटांचे रुग्णालय + ४८ खाटांचे केंद्र",
      trustBadge2: "नोंदणीकृत सार्वजनिक विश्वस्त संस्था · नोंदणी क्र. Latur/0000179/2026",
      trustBadge3: "80G व 12A प्रमाणित · CSR नोंदणीकृत",

      hero: {
        title: "निरोगी, वेदनामुक्त आणि व्यसनमुक्त समाजासाठी...",
        highlight: "तुमचे एक पाऊल महत्त्वाचे आहे!",
        imageAlt: "संघर्षातून सामर्थ्याकडे",
        imageCaption: "संघर्षातून सामर्थ्याकडे",
        stats: [
          { value: "१०+", title: "खाटांचे रुग्णालय", subtitle: "लातूरच्या मध्यभागी" },
          { value: "४८+", title: "खाटांचे व्यसनमुक्ती व पॅलिएटिव्ह केअर केंद्र", subtitle: "पूर्ण क्षमतेने कार्यरत" },
          { value: "तज्ज्ञ", title: "वैद्यकीय टीम", subtitle: "डॉक्टर, समुपदेशक आणि सहाय्यक कर्मचारी" },
          { value: "सर्वांगीण", title: "काळजी", subtitle: "शारीरिक, मानसिक, सामाजिक आणि आध्यात्मिक आधार" },
        ],
      },

      donateStrip: {
        title: "निरोगी आणि वेदनामुक्त समाजासाठी... तुमचे एक पाऊल!",
        body: "व्यसनमुक्ती आणि पॅलिएटिव्ह केअर या समाजातील दोन अत्यंत संवेदनशील व महत्त्वाच्या क्षेत्रांतील आमच्या कार्यास सहकार्य करण्याचे आम्ही उदार दात्यांना आवाहन करतो.",
        cta: "देणगी द्या",
      },

      legacy: {
        eyebrow: "सहानुभूतीचा वारसा",
        title: "कै. अश्विनी बरगाले मॅडम यांचे स्मरण",
        body: "त्यांची स्मृती व्यसन आणि गंभीर आजारांनी बाधित व्यक्ती व कुटुंबांसाठी सहानुभूतीपूर्ण काळजी, सन्मान आणि आशा देण्याच्या आमच्या बांधिलकीला प्रेरणा देते. अधिक निरोगी, व्यसनमुक्त समाजासाठी आमचे कार्य सुरू आहे.",
        cta: "त्यांचे ध्येय आणि वारसा",
        badge: "सदैव आमच्या हृदयात",
        name: "कै. अश्विनी बरगाले मॅडम",
        quote: "अधिक निरोगी, वेदनामुक्त समाजाची सुरुवात सहानुभूती, सन्मान आणि आशेने होते.",
      },

      mainServices: {
        eyebrow: "आमच्या मुख्य सेवा",
        title: "उज्ज्वल भविष्यासाठी व्यसनमुक्ती आणि पॅलिएटिव्ह केअर",
        deaddiction: {
          title: "व्यसनमुक्ती केंद्र",
          subtitle: "व्यक्तींना निरोगी, व्यसनमुक्त जीवनाकडे वाटचाल करण्यास मदत.",
          items: [
            { title: "व्यसनमुक्ती उपचार", desc: "मद्य, तंबाखू, गांजा आणि इतर व्यसनांसाठी" },
            { title: "वैद्यकीय उपचार", desc: "शास्त्रोक्त उपचार, डिटॉक्सिफिकेशन आणि मानसोपचार सहाय्य" },
            { title: "समुपदेशन", desc: "रुग्ण व त्यांच्या कुटुंबीयांसाठी वैयक्तिक व कौटुंबिक समुपदेशन" },
            { title: "पुनर्वसन", desc: "सन्मानपूर्वक व स्वावलंबी जीवन पुन्हा उभारण्यासाठी सहाय्य" },
          ],
          cta: "व्यसनमुक्ती केंद्राविषयी अधिक जाणून घ्या",
        },
        palliative: {
          title: "पॅलिएटिव्ह केअर केंद्र",
          subtitle: "गंभीर आजाराच्या काळात रुग्ण व कुटुंबीयांसाठी सहानुभूतीपूर्ण काळजी.",
          items: [
            { title: "वेदना व लक्षण व्यवस्थापन", desc: "कर्करोग, पक्षाघात व इतर गंभीर आजारांसाठी काळजी" },
            { title: "भावनिक व कौटुंबिक आधार", desc: "मानसिक, भावनिक आणि वैद्यकीय मार्गदर्शन" },
            { title: "सन्मानपूर्वक जीवन", desc: "अखेरच्या क्षणांपर्यंत सौम्य, आरामदायी आणि आदरपूर्ण काळजी" },
            { title: "जनजागृती व आधार", desc: "समाजात जनजागृती व समुपदेशन कार्यक्रम" },
          ],
          cta: "पॅलिएटिव्ह केअर केंद्राविषयी अधिक जाणून घ्या",
        },
      },

      contactCard: {
        phoneLabel: "फोन",
        addressLabel: "पत्ता",
        address: "विशाल नगर पूर्व, काशिविश्वेश्वर मंदिराजवळ, लातूर",
      },

      facilitiesTitle: "कुटुंबे आमची निवड का करतात",
      facilitiesSubtitle: "केवळ उपचार नव्हे, तर खऱ्या पुनर्वसनासाठी उभारलेली शांत, सुरक्षित व सुसज्ज सुविधा.",
      facilityEyebrow: "आमची सुविधा",
      facilityHeadline: "१० खाटांचे रुग्णालय आणि ४८ खाटांचे व्यसनमुक्ती व पॅलिएटिव्ह केअर केंद्र",
      facilityText:
        "डॉ. आर. ओ. देशमुख आणि सौ. माधवी आनंद बरगाले (अध्यक्षा) यांच्या मार्गदर्शनाखाली चालणारे आमचे केंद्र लातूर शहराच्या मध्यवर्ती भागात असून पूर्णपणे कार्यरत आहे.",
      facilityCta: "आमच्या सुविधा पहा",
      facilityImageAlt: "लातूर येथील एस.एस. व्यसनमुक्ती आणि उपशामक उपचार केंद्राच्या इमारतीचे दर्शनी दृश्य",
      facilityHighlights: [
        { title: "स्वच्छ व सुरक्षित खोल्या", desc: "रुग्णांसाठी आरामदायी निवास व्यवस्था" },
        { title: "पौष्टिक आहार", desc: "स्वच्छ व समतोल जेवण" },
        { title: "समुपदेशन व आधार", desc: "रुग्ण व कुटुंबीयांसाठी" },
        { title: "सुरक्षित वातावरण", desc: "सुरक्षित, शांत व सुस्थितीत ठेवलेली सुविधा" },
      ],

      processEyebrow: "आमची प्रक्रिया",
      processTitle: "आमच्या सेवा कशा कार्य करतात",
      processSubtitle: "प्रत्येक रुग्णाला योग्य काळजी मिळावी यासाठी एक सोपी आणि आधार देणारी प्रक्रिया.",
      processSteps: [
        { title: "संपर्क करा", desc: "आमच्या केंद्राला कॉल करा किंवा भेट द्या" },
        { title: "प्राथमिक तपासणी", desc: "रुग्णाच्या गरजा व परिस्थिती समजून घेतली जाते" },
        { title: "वैयक्तिक उपचार योजना", desc: "प्रत्येकाच्या गरजेनुसार उपचार व आधार" },
        { title: "सातत्यपूर्ण काळजी", desc: "वैद्यकीय, मानसिक व कौटुंबिक आधार" },
        { title: "पुनर्वसन", desc: "उत्तम जीवन घडवण्यासाठी मदत" },
        { title: "पाठपुरावा", desc: "दीर्घकालीन आरोग्यासाठी सतत मार्गदर्शन" },
      ],

      testimonialsEyebrow: "रुग्णांचे अभिप्राय",
      testimonialsTitle: "कुटुंबीय काय म्हणतात",
      testimonialsSubtitle: "ज्यांनी आमच्यावर विश्वास ठेवला, त्यांचे प्रत्यक्ष अनुभव.",
      testimonialsRatingLabel: "५.० · ३ Google रिव्ह्यू",
      testimonialsLinkLabel: "Google वरील सर्व रिव्ह्यू पहा",
      testimonials: [
        {
          quote: "कानाचा त्रास असेल तर मी या रुग्णालयाचे नाव मोठ्याने सांगेन — परवडणारे आणि आजवरची सर्वोत्तम सेवा.",
          name: "Sammed Magdum",
          source: "Google रिव्ह्यू · बरगाले हॉस्पिटल",
        },
        {
          quote: "लग्नाच्या 12 वर्षानंतर आणि फक्त 4 महिन्याच्या उपचारामध्ये आम्हाला जुळे बाळ राहिले आहे धन्यवाद सर",
          name: "Vishvajit Patil",
          source: "Google रिव्ह्यू · बरगाले हॉस्पिटल",
        },
        {
          quote: "उत्तम बालरुग्णालय.",
          name: "Rohit Male",
          source: "Google रिव्ह्यू · बरगाले हॉस्पिटल",
        },
      ],

      donateBannerTitle: "आपले दान घडवते बदल",
      donateBannerBody:
        "आपले छोटेसे योगदान अनेक गरजू आणि वंचित रुग्णांना आशा, काळजी आणि उज्ज्वल उद्याची साथ देऊ शकते.",
      donateBannerContact: "आमच्या टीमशी संपर्क साधा",
      donateBannerScript: "एकत्र मिळून घडवूया उत्तम समाज",

      palliativeTitle: "पॅलिएटिव्ह केअर म्हणजे काय",
      palliativeIntro:
        "पॅलिएटिव्ह म्हणजेच उपशामक काळजी — गंभीर आजारांनी त्रस्त असलेल्या रुग्णांना वेदना, ताण व इतर लक्षणांपासून आराम देऊन, त्यांच्या व त्यांच्या कुटुंबाला भावनिक व मानसिक आधार देणारी सेवा.",
      palliativeCards: [
        {
          title: "आमचा उद्देश",
          body: "आजार बरा करणे हा नसून, रुग्णाला आजाराच्या काळात शक्य तितका आराम व सन्मानाने जगण्याची संधी देणे.",
        },
        {
          title: "रुग्णाला काय मिळते",
          body: "शारीरिक वेदना कमी होणे, श्वास घेण्यास मदत, झोप चांगली लागणे आणि मानसिक-सामाजिक आधार.",
        },
        {
          title: "कोणासाठी",
          body: "कर्करोग, हृदयविकार, किडनीचे आजार, पॅरालिसिस, कोमा किंवा इतर गंभीर व जुनाट आजार असलेल्या रुग्णांसाठी.",
        },
        {
          title: "आमचा फोकस",
          body: "रुग्णाच्या शारीरिक, मानसिक, भावनिक आणि आत्मिक गरजा पूर्ण करून जीवनाचा दर्जा सुधारणे.",
        },
      ],

      ctaTitle: "पहिले पाऊल उचलण्यास तयार आहात?",
      ctaBody: "स्वतःसाठी असो किंवा आपल्या प्रिय व्यक्तीसाठी — आमची टीम कोणत्याही न्यायनिवाड्याशिवाय, काळजीने मार्गदर्शन करण्यास सज्ज आहे.",
      ctaButton: "आमच्याशी बोला",
      ctaEyebrow: "आम्ही आपल्या सोबत आहोत",
      ctaWhatsapp: "व्हॉट्सअ‍ॅपवर संपर्क करा",
      ctaCardTitle: "दिवसरात्र आमच्याशी बोला",
      ctaCardNote: "एका फोन कॉलवर आमची काळजीवाहू टीम.",

      heroBanner: {
        kicker: "एस.एस. व्यसनमुक्ती आणि उपशामक उपचार केंद्र, लातूर",
        titleLine1: "व्यसनापासून",
        titleLine2Prefix: "ते",
        titleHighlight: "पुनर्वसनाकडे",
        subtitle: "व्यावसायिक उपचार, समुपदेशन, कौटुंबिक आधार आणि पुनर्वसन.",
        ctaPrimary: "कॉल करा",
        ctaSecondary: "आजच मदत घ्या",
        leftCaption: "संघर्षापासून...",
        rightCaption: "...उज्वल भविष्याकडे",
        strugglePoints: ["व्यसन", "मानसिक ताण", "तुटलेली नाती", "हरवलेली आशा"],
        hopePoints: ["पुनर्वसन", "मनःशांती", "मजबूत कुटुंब", "उत्तम जीवन"],
        statCards: [
          { title: "१० खाटांचे रुग्णालय", subtitle: "काळजी व सुरक्षितता" },
          { title: "४८ खाटांचे पुनर्वसन केंद्र", subtitle: "पुनर्वसन व नवनिर्माण" },
          { title: "पॅलिएटिव्ह केअर", subtitle: "सहानुभूतीपूर्ण आधार" },
          { title: "कौटुंबिक समुपदेशन", subtitle: "एकत्र बरे होऊया" },
        ],
        trustRow: [
          { title: "नोंदणीकृत विश्वस्त संस्था", subtitle: "नोंदणी क्र. Latur/0000179/2026" },
          { title: "80G व 12A प्रमाणित", subtitle: "कर सवलत उपलब्ध" },
          { title: "अनुभवी वैद्यकीय टीम", subtitle: "अनुभवी व काळजीवाहू" },
          { title: "कौटुंबिक आधार कार्यक्रम", subtitle: "तुम्ही एकटे नाही आहात" },
        ],
      },
    },

    aboutTrust: {
      eyebrow: "आमच्या संस्थेविषयी",
      title: "सखोल अर्थ असलेला एक सामाजिक उपक्रम",
      p1: "आरोग्य हीच सर्वात मोठी संपत्ती आहे. परंतु जेव्हा एखादी व्यक्ती व्यसनाच्या विळख्यात अडकते किंवा गंभीर, असाध्य आजाराशी (जसे की कर्करोग किंवा पक्षाघात) झुंज देत असते, तेव्हा केवळ ती व्यक्तीच नाही तर संपूर्ण कुटुंब भावनिक, शारीरिक आणि आर्थिक आव्हानांना सामोरे जाते.",
      p2: "कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था, लातूर ही या समस्यांवर उपाय करण्यासाठी आरोग्य आणि सामाजिक सेवेच्या क्षेत्रात पूर्ण निष्ठेने कार्यरत आहे.",
      cta: "आमच्या संस्थेविषयी अधिक जाणून घ्या",
      caption: "उज्ज्वल उद्याची आशा आहे...",
      values: ["माणुसकी", "सेवा", "समर्पण", "सन्मान"],
    },

    facilities: [
      { title: "सुसज्ज इमारत", desc: "पुनर्वसनासाठी खास तयार केलेली शांत जागा." },
      { title: "मध्यवर्ती भागात केंद्र", desc: "लातूर शहरातून कुठूनही सहज पोहोचता येईल असे स्थान." },
      { title: "प्रभावी उपचार", desc: "वैद्यकीय मार्गदर्शनाखाली सुनियोजित उपचार पद्धती." },
      { title: "योग्य मार्गदर्शन", desc: "रुग्ण व कुटुंबीयांना टप्प्याटप्प्याने मार्गदर्शन." },
      { title: "समुपदेशन", desc: "मुक्कामादरम्यान वैयक्तिक व कौटुंबिक समुपदेशन." },
      { title: "मानसोपचार तज्ज्ञ सल्ला", desc: "मानसोपचार तज्ज्ञांचा नियमित सल्ला." },
      { title: "पौष्टिक आहार", desc: "दररोज घरगुती पद्धतीचा समतोल आहार." },
      { title: "स्वच्छ पिण्याचे पाणी", desc: "सदैव उपलब्ध सुरक्षित व स्वच्छ पाणी." },
      { title: "योग व प्राणायाम", desc: "शरीर व मनासाठी दररोजचा योग व प्राणायाम सराव." },
      { title: "ग्रंथालय", desc: "मनःशांतीसाठी शांत वाचन कक्ष." },
      { title: "आरोग्यपूर्ण वातावरण", desc: "स्वच्छ, सहानुभूतीपूर्ण व कौटुंबिक वातावरण." },
      { title: "सीसीटीव्ही निगराणी", desc: "संपूर्ण इमारत सीसीटीव्हीच्या निगराणीखाली." },
      { title: "अग्निशमन सुरक्षा", desc: "अग्निशमन यंत्रणा व सुरक्षा व्यवस्था कार्यान्वित." },
    ],

    about: {
      title: "केंद्राविषयी",
      subtitle: "वैयक्तिक दुःखातून जन्मलेली, समाजासाठी उभारलेली संस्था.",
      storyTitle: "आमची कहाणी",
      storyParas: [
        "कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था, लातूर ही डॉ. आनंद बरगाले यांच्या कैलासवासी पत्नी कै. अश्विनी यांच्या स्मरणार्थ स्थापन करण्यात आली. त्यांचे सप्टेंबर २०२१ मध्ये प्रदीर्घ आजाराने व सुमारे तीन वर्षे कोमामध्ये राहिल्यानंतर निधन झाले.",
        "त्यांच्या आजारपणात कुटुंबाला घरी योग्य नर्सिंग व उपशामक काळजी मिळवण्यासाठी येणारा खर्च व अडचणी प्रत्यक्ष अनुभवायला मिळाल्या — आणि हे लक्षात आले की बहुतांश कुटुंबांना अशी काळजी परवडणे शक्य नसते.",
        "हीच सामाजिक जाणीव ठेवून, गरीब व गरजू रुग्णांना व त्यांच्या कुटुंबांना पॅलिएटिव्ह केअर व व्यसनमुक्ती उपचारांच्या माध्यमातून दिलासा देण्याच्या उद्देशाने ही संस्था स्थापन करण्यात आली.",
      ],
      visionTitle: "आमचे ध्येय",
      visionBody:
        "शिक्षण, आरोग्य व सामाजिक समृद्धीच्या माध्यमातून वंचित घटकांना मुख्य प्रवाहात आणणारा सक्षम, स्वावलंबी समाज घडवणे — आणि प्रत्येक जिल्ह्यात सहानुभूतीपूर्ण पॅलिएटिव्ह केअर उपलब्ध करून देणे.",
      orgTitle: "संस्थेविषयी",
      orgBody:
        "कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था ही लातूर परिसरात आरोग्य, सामाजिक व शैक्षणिक क्षेत्रात कार्यरत असलेली नोंदणीकृत सार्वजनिक विश्वस्त संस्था आहे (नोंदणी क्र. Latur/0000179/2026).",
      capacityTitle: "आजची आमची सुविधा",
      capacityItems: [
        { label: "रुग्णालय खाटा", value: "१०" },
        { label: "व्यसनमुक्ती व पॅलिएटिव्ह खाटा", value: "४८" },
        { label: "स्थान", value: "विशाल नगर, लातूर" },
      ],
      boardTitle: "कार्यकारी मंडळ",
      boardMembers: [
        { role: "अध्यक्ष", name: "सौ. माधवी आनंद बरगाले" },
        { role: "उपाध्यक्ष", name: "श्री. शेखर म. कोरे" },
        { role: "सचिव", name: "डॉ. आनंद न. बरगाले" },
        { role: "कोषाध्यक्ष", name: "श्रीमती पुष्पा न. बरगाले" },
        { role: "सहसचिव", name: "श्री. हेमंत लोहारे" },
        { role: "सदस्य", name: "डॉ. संकल्प सं. बरगाले" },
        { role: "सदस्य", name: "श्री. बाळू कांबळे" },
      ],

      hero: {
        eyebrow: "आमच्या केंद्राविषयी",
        title: "सन्मान परत देणारी काळजी. जीवन पुन्हा उभारणारी आशा.",
        body: "व्यसन आणि गंभीर आजारांनी बाधित व्यक्ती व कुटुंबांना आधार देण्याच्या आमच्या बांधिलकीमागील माणसे, उद्देश आणि सहानुभूतीपूर्ण काळजी जाणून घ्या.",
        ctaPrimary: "आमचे ध्येय पहा",
        ctaSecondary: "आमच्या कार्यास सहकार्य करा",
        memoryBadge: "स्मरणार्थ",
        memoryName: "कै. अश्विनी बरगाले मॅडम",
      },
      story: {
        eyebrow: "आमची कहाणी",
        title: "सहानुभूतीचा वारसा. सुरू असलेले ध्येय.",
        pullQuote:
          "व्यसन किंवा गंभीर आजाराचा सामना करणाऱ्या कुटुंबांना एकटे पडावे लागू नये, म्हणून आमची संस्था कै. अश्विनी आनंद बरगाले यांच्या स्मरणार्थ स्थापन झाली.",
        timeline: [
          { label: "सप्टेंबर २०२१", text: "प्रदीर्घ आजारपणानंतर आणि तीन वर्षे कोमामध्ये राहिल्यानंतर अश्विनी यांचे निधन झाले." },
          { label: "कुटुंबाला काय समजले", text: "घरी योग्य नर्सिंग व उपशामक काळजी मिळवणे अवघड व खर्चिक होते आणि बहुतांश कुटुंबांच्या आवाक्याबाहेर होते." },
          { label: "उद्देश", text: "गरीब व गरजू रुग्णांना आणि त्यांच्या कुटुंबांना दिलासा देण्यासाठी त्यांच्या नावाने संस्था स्थापन करण्यात आली." },
        ],
      },
      identity: {
        eyebrow: "आमची ओळख",
        title: "उत्तम काळजीसाठी एकत्र कार्य.",
        body: "बरगाले हॉस्पिटल आणि एस.एस. व्यसनमुक्ती व उपशामक उपचार केंद्र हे कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्थेद्वारे चालवले जातात. ही लातूर व परिसरात आरोग्य, सामाजिक आणि शैक्षणिक क्षेत्रात कार्यरत असलेली नोंदणीकृत धर्मादाय संस्था आहे.",
        hospitalCaption: "बरगाले हॉस्पिटल",
        centreCaption: "एस.एस. व्यसनमुक्ती व उपशामक उपचार केंद्र",
      },
      purpose: {
        eyebrow: "उद्देश",
        title: "उद्देशाने दिशा दिलेली काळजी.",
        missionTitle: "आमचे उद्दिष्ट",
        missionBody:
          "सहानुभूतीपूर्ण काळजी, योग्य उपचार, पुनर्वसन आणि कौटुंबिक आधाराच्या माध्यमातून व्यसन व गंभीर आजारांनी बाधित लोकांना साहाय्य करणे.",
        standTitle: "आम्ही कशासाठी उभे आहोत",
        standItems: [
          "सहानुभूती व सन्मान",
          "जबाबदार काळजी",
          "पुनर्वसन व पुनःस्थापना",
          "कुटुंबाचा सहभाग",
          "समाजसेवा",
        ],
      },
      facility: {
        eyebrow: "आमची सुविधा",
        title: "काळजीभोवती उभारलेल्या सुविधा.",
        body: "लातूरमधील विशाल नगर येथील शांत, मध्यवर्ती आणि सुसज्ज परिसर — जिथे रुग्णालय आणि स्वतंत्र व्यसनमुक्ती व उपशामक काळजी केंद्र एकमेकांच्या साथीने कार्यरत आहेत.",
        stats: [
          { value: "१०+", label: "रुग्णालय खाटा", note: "आंतररुग्ण रुग्णालयीन काळजी" },
          { value: "४८+", label: "व्यसनमुक्ती व पॅलिएटिव्ह खाटा", note: "समर्पित काळजी केंद्र" },
        ],
        wingsTitle: "दोन विभाग, एक उद्देश",
        deaddictionTitle: "व्यसनमुक्ती उपचार",
        deaddictionBody: "लोकांना निरोगी जीवनाकडे नेण्यासाठी वैद्यकीय उपचार, समुपदेशन आणि पुनर्वसन.",
        deaddictionLink: "व्यसनमुक्ती सेवा पहा",
        palliativeTitle: "पॅलिएटिव्ह केअर",
        palliativeBody: "गंभीर आजार असलेल्या रुग्णांना आणि त्यांच्या कुटुंबीयांना आराम, वेदनाशमन आणि भावनिक आधार.",
        palliativeLink: "पॅलिएटिव्ह केअर पहा",
      },
      management: {
        eyebrow: "व्यवस्थापन",
        title: "आमच्या कार्यामागील माणसे.",
      },
      why: {
        eyebrow: "हे का महत्त्वाचे",
        title: "प्रत्येक व्यक्तीला काळजी, सन्मान आणि बरे होण्याची संधी मिळायला हवी.",
        body: "व्यसन आणि गंभीर आजार संपूर्ण कुटुंबावर भावनिक, शारीरिक व आर्थिकदृष्ट्या परिणाम करतात. आदर, योग्य उपचार आणि सातत्यपूर्ण आधारासह रुग्ण व त्यांच्या प्रियजनांच्या पाठीशी उभे राहणे हे आमचे कार्य आहे.",
        items: [
          { title: "सहानुभूतीपूर्ण आधार", desc: "आधी ऐकून घेणे आणि प्रत्येक रुग्णाशी आदराने वागणे." },
          { title: "योग्य उपचार", desc: "देखरेखीखाली वैद्यकीय काळजी, समुपदेशन आणि पुनर्वसन." },
          { title: "कुटुंबाचा सहभाग", desc: "प्रत्येक टप्प्यावर कुटुंबांना मार्गदर्शन व आधार." },
        ],
      },
      cta: {
        kicker: "व्यसनमुक्त समाज हेच आमचे स्वप्न",
        title: "एखाद्याच्या जीवनाकडे परतण्याच्या प्रवासाचा भाग व्हा.",
        body: "ज्यांना सर्वाधिक गरज आहे अशा व्यक्ती व कुटुंबांसाठी सहानुभूतीपूर्ण काळजी बळकट करण्यास आपले सहकार्य मदत करते.",
        donate: "काळजीसाठी देणगी द्या",
        contact: "आमच्या केंद्राशी संपर्क साधा",
      },
    },

    servicesPage: {
      title: "आमच्या सेवा",
      subtitle: "एकाच छताखाली कार्यरत दोन समर्पित विभाग — व्यसनमुक्ती व उपशामक काळजी.",
      deaddictionTitle: "व्यसनमुक्ती उपचार",
      deaddictionItems: [
        { title: "मद्यव्यसन", desc: "मद्यव्यसनासाठी सुनियोजित डिटॉक्स व पुनर्वसन कार्यक्रम." },
        { title: "अमली पदार्थ व्यसन", desc: "व्यसनांसाठी वैद्यकीय डिटॉक्सिफिकेशन व पुनर्वसन." },
        { title: "समुपदेशन", desc: "प्रेरणा व सवयी पुन्हा घडवण्यासाठी वैयक्तिक व सामूहिक समुपदेशन." },
        { title: "मानसोपचार सहाय्य", desc: "सहविकारांसाठी सातत्यपूर्ण मानसोपचार काळजी." },
        { title: "कौटुंबिक उपचार", desc: "कुटुंबाला एकत्रितपणे बरे होण्यास व आधार देण्यास मदत." },
        { title: "योग", desc: "शारीरिक शक्ती पुन्हा मिळवण्यासाठी दैनंदिन योग सत्रे." },
        { title: "मेडिटेशन", desc: "शांतता, एकाग्रता व भावनिक संतुलनासाठी ध्यानसाधना." },
      ],
      palliativeTitle: "उपशामक काळजी (पॅलिएटिव्ह केअर)",
      palliativeItems: [
        { title: "पॅलिएटिव्ह केअर", desc: "गंभीर व जुनाट आजारांसाठी वेदनाशमन व आरामदायी काळजी." },
        { title: "होम केअर सहाय्य", desc: "रुग्णाच्या स्वतःच्या घरी मार्गदर्शन व सहाय्य पुरवणे." },
      ],

      hero: {
        eyebrow: "आमच्या सेवा",
        title: "बरे होण्यासाठी काळजी. जीवनाच्या प्रत्येक टप्प्यावर आधार.",
        body: "व्यक्ती व कुटुंबांसाठी वैद्यकीय आधार, पुनर्वसन आणि सन्मान यांची सांगड घालणारे सहानुभूतीपूर्ण व्यसनमुक्ती उपचार आणि पॅलिएटिव्ह केअर.",
        ctaDeaddiction: "व्यसनमुक्ती सेवा पहा",
        ctaPalliative: "पॅलिएटिव्ह केअर पहा",
        tileDeaddiction: "व्यसनमुक्ती व पुनर्वसन",
        tilePalliative: "पॅलिएटिव्ह केअर",
      },
      overview: {
        deaddiction: {
          title: "व्यसनमुक्ती व पुनर्वसन",
          body: "वैद्यकीय तपासणी, उपचार, समुपदेशन, पुनर्वसन आणि सातत्यपूर्ण आधाराच्या माध्यमातून व्यसनाधीनतेने बाधित लोकांना साहाय्य, जेथे उपलब्ध असेल तेथे.",
          link: "व्यसनमुक्ती सेवा पहा",
        },
        palliative: {
          title: "पॅलिएटिव्ह केअर",
          body: "गंभीर आजाराने जगणाऱ्या लोकांना वेदना व त्रासापासून आराम, सुख आणि सन्मान, तसेच त्यांच्या कुटुंबीयांना भावनिक आधार.",
          link: "उपशामक सेवा पहा",
        },
      },
      deaddictionSection: {
        eyebrow: "व्यसनमुक्ती व पुनर्वसन",
        title: "बरे होण्याच्या दिशेने आधार देणारी वाट.",
        body: "बरे होण्यामध्ये वैद्यकीय काळजी, भावनिक आधार, आरोग्यदायी दिनचर्या आणि कुटुंबाचा सहभाग यांचा समावेश असू शकतो. आमच्या सेवा या गरजांभोवती रचलेल्या आहेत.",
        groupMedical: "वैद्यकीय तपासणी व उपचार",
        groupRecovery: "पुनर्वसन आधार",
      },
      palliativeSection: {
        eyebrow: "पॅलिएटिव्ह केअर व आराम",
        title: "आराम, सन्मान आणि सहानुभूतीपूर्ण आधार.",
        body: "पॅलिएटिव्ह केअरचा उद्देश त्रास कमी करणे, जीवनाचा दर्जा सुधारणे आणि गंभीर आजाराच्या काळात रुग्ण व कुटुंबांना सन्मानाने आधार देणे हा आहे.",
        note: "पॅलिएटिव्ह केअर आराम आणि जीवनाच्या दर्जावर लक्ष केंद्रित करते. ते आजार बरा होण्याचे आश्वासन नाही.",
        supportingTitle: "यांना आधार देण्यासाठी",
        conditions: ["कर्करोग", "हृदयविकार", "किडनीचे आजार", "इतर गंभीर, दीर्घकालीन आजार", "पक्षाघात व कोमा"],
        homeCareNote: "घरी रुग्णाची काळजी घेणे कुटुंबांना कठीण वाटत असल्यास, केंद्र रुग्णाची काळजी आपल्या रुग्णालयात घेते.",
      },
      journey: {
        title: "ऐकून घेण्यापासून सुरू होणारी काळजी.",
        steps: [
          { title: "प्राथमिक संपर्क", desc: "रुग्ण किंवा कुटुंबीय आपल्या गरजांविषयी चर्चा करण्यासाठी केंद्राशी संपर्क साधतात." },
          { title: "मूल्यांकन", desc: "काळजी घेणारी टीम व्यक्तीची परिस्थिती आणि योग्य पुढील पावले तपासते." },
          { title: "नियोजन", desc: "व्यक्तीच्या गरजा आणि उपलब्ध सेवांनुसार योग्य योजनेवर चर्चा केली जाते." },
          { title: "सातत्यपूर्ण आधार", desc: "उपचार, पाठपुरावा आणि कौटुंबिक आधार योग्य त्या प्रमाणात दिला जातो." },
        ],
      },
      facilitiesSection: {
        title: "सहानुभूतीपूर्ण काळजीला साथ देणाऱ्या सुविधा.",
        body: "दोन आंतररुग्ण विभाग — एक सामान्य रुग्णालयीन काळजीसाठी आणि एक व्यसनमुक्तीसाठी समर्पित.",
        items: [
          { value: "१०+", label: "रुग्णालय खाटा", note: "रुग्णालयीन व पॅलिएटिव्ह केअर रुग्णांसाठी." },
          { value: "४८+", label: "व्यसनमुक्ती खाटा", note: "निवासी व्यसनमुक्ती उपचारांसाठी." },
        ],
      },
      family: {
        title: "महत्त्वाच्या माणसांचा समावेश करणारी काळजी.",
        body: "व्यसन आणि गंभीर आजार संपूर्ण कुटुंबांवर परिणाम करतात. कुटुंबांना माहिती दिली, सहभागी करून घेतले आणि आदराने वागवले तर काळजी अधिक प्रभावी ठरते.",
        items: [
          "सहानुभूतीपूर्ण, प्रामाणिक संवाद",
          "कुटुंबाचा योग्य सहभाग",
          "व्यसन आणि गंभीर आजार समजून घेणे",
          "रुग्णाच्या सन्मानाचा आदर",
          "संपूर्ण काळजीच्या प्रवासात आधार",
        ],
      },
      cta: {
        title: "काळजी किंवा मार्गदर्शन हवे आहे?",
        body: "उपलब्ध सेवांविषयी अधिक जाणून घेण्यासाठी आणि आपल्या किंवा आपल्या कुटुंबासाठी पुढील पावलांविषयी चर्चा करण्यासाठी आमच्या केंद्राशी संपर्क साधा.",
        contact: "केंद्राशी संपर्क साधा",
        donate: "आमच्या कार्यास सहकार्य करा",
      },
    },

    admission: {
      title: "प्रवेश प्रक्रिया",
      subtitle: "पहिल्या फोन कॉलपासून उपचार सुरू होईपर्यंतचा स्पष्ट, कुटुंबस्नेही मार्ग.",
      steps: [
        { title: "नातेवाईकांकडून विनंती", desc: "कुटुंबातील सदस्य प्रवेशासाठी आमच्याशी संपर्क साधतात." },
        { title: "रुग्ण समुपदेशन", desc: "आमचे समुपदेशक रुग्णाशी बोलून परिस्थिती समजून घेतात." },
        { title: "आवश्यकतेनुसार पिकअप सेवा", desc: "रुग्ण येऊ शकत नसल्यास सुरक्षित पिकअपची व्यवस्था केली जाते." },
        { title: "प्रवेश फॉर्म", desc: "आवश्यक माहिती प्रवेश फॉर्मवर नोंदवली जाते." },
        { title: "संमती स्वाक्षरी", desc: "रुग्ण व नातेवाईक संमती पत्रावर स्वाक्षरी करतात." },
        { title: "साहित्य जमा", desc: "मौल्यवान वस्तू व साहित्य सुरक्षितपणे जमा करून नोंद घेतली जाते." },
        { title: "उपचार सुरू", desc: "वैद्यकीय व समुपदेशन निगराणीखाली उपचार सुरू होतात." },
      ],

      hero: {
        eyebrow: "प्रवेश प्रक्रिया",
        title: "काळजीच्या दिशेने पहिले पाऊल, एकत्र.",
        body: "प्रवेश प्रक्रिया समजून घ्या, पुढील पावलांसाठी तयार व्हा आणि मार्गदर्शन व आधारासाठी आमच्या टीमशी संपर्क साधा.",
        ctaPrimary: "आमच्या टीमशी बोला",
        ctaSecondary: "प्रवेशाचे टप्पे पहा",
        panelTitle: "सात टप्प्यांतील प्रवास",
      },
      intro: {
        title: "स्पष्ट प्रक्रिया. प्रत्येक टप्प्यावर काळजीपूर्वक मार्गदर्शन.",
        body: "प्रत्येक प्रवेशाची सुरुवात संवादाने होते. रुग्ण व कुटुंबीयांना प्रक्रिया समजून घेण्यास, त्यांच्या गरजांविषयी चर्चा करण्यास आणि पुढे जाण्यापूर्वी पुढील पावले स्पष्ट करून घेण्यास आमची टीम मदत करू शकते.",
        points: [
          { title: "कुटुंबांसाठी मार्गदर्शन", desc: "निर्णय घेण्यापूर्वी प्रश्न विचारण्याचे स्वागत आहे." },
          { title: "रुग्णाची आदरपूर्वक काळजी", desc: "गोपनीयता आणि सन्मान प्रत्येक टप्प्याचा भाग आहेत." },
          { title: "प्रवेशाची स्पष्ट माहिती", desc: "प्रवासापूर्वीच काय अपेक्षित आहे ते जाणून घ्या." },
        ],
      },
      journeyTitle: "तुमचा प्रवेश प्रवास, टप्प्याटप्प्याने.",
      journey: [
        { title: "प्राथमिक संपर्क व प्रवेशाची विनंती", desc: "रुग्ण किंवा कुटुंबातील सदस्य परिस्थितीविषयी चर्चा करण्यासाठी आणि प्रवेश प्रक्रिया समजून घेण्यासाठी केंद्राशी संपर्क साधतात." },
        { title: "रुग्ण समुपदेशन व प्राथमिक चर्चा", desc: "टीम रुग्णाच्या परिस्थितीवर चर्चा करते आणि उपलब्ध पुढील पावले समजावून सांगते." },
        { title: "आवश्यकतेनुसार वाहतूक व्यवस्था", desc: "रुग्ण स्वतः प्रवास करू शकत नसल्यास वाहतूक सहाय्याची व्यवस्था करता येईल का, यासाठी केंद्राशी संपर्क साधा." },
        { title: "प्रवेश कागदपत्रे", desc: "केंद्राच्या प्रवेश कागदपत्रांमध्ये रुग्णाचे आवश्यक तपशील नोंदवले जातात." },
        { title: "संमती व आवश्यक स्वाक्षऱ्या", desc: "योग्य संमती व कागदपत्रांच्या आवश्यकता रुग्णाला किंवा अधिकृत प्रतिनिधीला समजावून सांगितल्या जातात." },
        { title: "साहित्य व वैयक्तिक वस्तू", desc: "वैयक्तिक साहित्य केंद्राच्या लागू प्रक्रियेनुसार हाताळले व नोंदवले जाते." },
        { title: "उपचारांची सुरुवात", desc: "योग्य तपासणी, प्रवेशाच्या औपचारिकता आणि वैद्यकीय मार्गदर्शनानंतर काळजीला सुरुवात होते." },
      ],
      prepare: {
        title: "येण्यापूर्वी.",
        body: "आपल्या परिस्थितीशी संबंधित माहिती व व्यवस्थांची खात्री करण्यासाठी प्रवासापूर्वी आमच्या टीमशी संपर्क साधा.",
        items: [
          "रुग्णाची ओळख व आवश्यक वैयक्तिक तपशील",
          "उपलब्ध वैद्यकीय कागदपत्रे व सध्याची औषधे",
          "आपत्कालीन संपर्क माहिती",
          "यापूर्वीच्या उपचारांचा संबंधित इतिहास",
          "चर्चा करायचे प्रश्न किंवा शंका",
        ],
        panelTitle: "केंद्राशी चर्चा करण्यासारखे",
        panelBody: "लागू असलेली कागदपत्रे व प्रवेशाच्या आवश्यकता प्रवासापूर्वी निश्चित करण्यासाठी कृपया केंद्राशी संपर्क साधा.",
        panelCta: "केंद्राला कॉल करा",
      },
      reassurance: {
        title: "सर्व काही तुम्हीच एकट्याने शोधावे अशी अपेक्षा नाही.",
        body: "प्रवेश प्रक्रिया स्पष्ट करून घेण्यासाठी, प्रश्न विचारण्यासाठी आणि पुढील पावले समजून घेण्यासाठी रुग्ण व कुटुंबीय केंद्राशी संपर्क साधू शकतात. स्पष्ट संवादामुळे सर्वांना अधिक आत्मविश्वासाने काळजीकडे पाहता येते.",
      },
      faq: {
        title: "वारंवार विचारले जाणारे प्रश्न",
        items: [
          {
            q: "प्रवेश प्रक्रिया कशी सुरू करावी?",
            a: "केंद्राला कॉल करा किंवा ईमेल करा. आमची टीम परिस्थिती ऐकून घेईल, प्रक्रिया समजावून सांगेल आणि पुढील पावलांविषयी मार्गदर्शन करेल.",
          },
          {
            q: "रुग्णाच्या वतीने कुटुंबातील सदस्य केंद्राशी संपर्क साधू शकतो का?",
            a: "होय. रुग्ण किंवा कुटुंबातील सदस्य पहिला संपर्क करून आमच्या टीमशी परिस्थितीविषयी चर्चा करू शकतात.",
          },
          {
            q: "वाहतुकीची मदत उपलब्ध करता येते का?",
            a: "रुग्ण स्वतः प्रवास करू शकत नसल्यास वाहतूक सहाय्याची व्यवस्था करता येईल का, यासाठी कृपया केंद्राशी संपर्क साधा.",
          },
          {
            q: "सध्याच्या प्रवेश आवश्यकतांची खात्री कशी करावी?",
            a: "आपल्या परिस्थितीला लागू असलेली कागदपत्रे व आवश्यकता टीमकडून निश्चित करून घेण्यासाठी कृपया प्रवासापूर्वी केंद्राशी संपर्क साधा.",
          },
          {
            q: "अधिक मार्गदर्शनासाठी केंद्राशी कसा संपर्क साधावा?",
            a: "संपर्क पृष्ठाचा वापर करा, केंद्राला कॉल करा किंवा ईमेल पाठवा — तपशील प्रत्येक पृष्ठाच्या तळाशी दिलेले आहेत.",
          },
        ],
      },
      cta: {
        title: "प्रवेशाविषयी प्रश्न आहेत?",
        body: "प्रक्रियेविषयी चर्चा करण्यासाठी, आवश्यकता स्पष्ट करून घेण्यासाठी आणि आपल्या कुटुंबासाठी पुढील पावले समजून घेण्यासाठी आमच्या टीमशी बोला.",
        call: "केंद्राला कॉल करा",
        contact: "संपर्क साधा",
      },
    },

    rules: {
      title: "नियम व अटी",
      subtitle: "प्रत्येक रुग्णासाठी केंद्र शांत, सुरक्षित व प्रभावी ठेवणारे स्पष्ट नियम.",
      items: [
        { title: "भेटीची वेळ", desc: "नातेवाईक सकाळी १०.०० ते सायं. ५.०० या वेळेत ऑफिसला भेट देऊ शकतात." },
        { title: "डिस्चार्जची वेळ", desc: "रुग्ण डिस्चार्ज सकाळी १०.०० ते सायं. ५.०० या वेळेतच दिला जातो." },
        { title: "उशिरा डिस्चार्ज नाही", desc: "रात्री ३ नंतर कोणत्याही परिस्थितीत डिस्चार्ज दिला जाणार नाही." },
        { title: "अधिकृत डिस्चार्ज", desc: "ज्या नातेवाईकाच्या स्वाक्षरीने रुग्ण भरती झाला, त्याच्याच स्वाक्षरीने डिस्चार्ज दिला जाईल." },
        { title: "एकावेळी एकच भेट", desc: "एकावेळी एकच नातेवाईक ऑफिसमध्ये येऊ शकतो." },
        { title: "व्यसन करून येण्यास मनाई", desc: "नातेवाईकांनी कोणतेही व्यसन करून केंद्रावर येऊ नये." },
        { title: "रात्रीच्या वेळी प्रवेश बंद", desc: "रात्री ६ नंतर इतर व्यक्तींना व नातेवाईकांना केंद्रात येण्यास सक्त मनाई आहे." },
        { title: "पूर्वसूचनेशिवाय डिस्चार्ज नाही", desc: "पूर्वकल्पनेशिवाय किंवा रात्री ५.३० नंतर डिस्चार्ज केला जाणार नाही." },
        { title: "कायदेशीर कारवाई", desc: "नियमांचे उल्लंघन केल्यास आरोग्य सेवा संरक्षण कायद्यानुसार कारवाई होईल." },
        { title: "सुरुवातीचे २१ दिवस", desc: "पहिले २१ दिवस रुग्णांना फोनवर बोलता किंवा समोरासमोर भेटता येणार नाही." },
      ],

      eyebrow: "रुग्ण व अभ्यागतांसाठी मार्गदर्शक सूचना",
      intro: "रुग्ण, कुटुंबीय आणि अभ्यागतांसाठी सुरक्षित, आदरपूर्ण आणि आधार देणारे वातावरण राखण्यास स्पष्ट मार्गदर्शक सूचना आम्हाला मदत करतात.",
      notice: "केंद्रातील प्रत्येकासाठी सुरक्षित, शिस्तबद्ध आणि आधार देणारे वातावरण राखण्यास या सूचना आमच्या टीमला मदत करतात. एखाद्या नियमाबद्दल स्पष्टीकरण हवे असल्यास कृपया आमच्या टीमशी संपर्क साधा.",
      // `items` are 0-based indexes into rules.items above. The visible number badge is index + 1.
      groups: [
        { title: "भेटी व भेटीच्या वेळा", desc: "नातेवाईक केंद्राला केव्हा व कशी भेट देऊ शकतात.", items: [0, 4, 5, 6] },
        { title: "प्रवेश व डिस्चार्ज", desc: "रुग्णांना केव्हा आणि कोणासोबत डिस्चार्ज दिला जाऊ शकतो.", items: [1, 2, 3, 7] },
        { title: "रुग्ण संपर्क व नियमपालन", desc: "सुरुवातीच्या आठवड्यांतील कॉल व भेटी, आणि नियमांचे पालन.", items: [8, 9] },
      ],
      cta: {
        title: "एखाद्या नियमाबद्दल स्पष्टीकरण हवे आहे?",
        body: "केंद्राच्या भेटीच्या व प्रवेशाच्या प्रक्रिया समजून घेण्यास आमची टीम मदत करू शकते.",
        contact: "केंद्राशी संपर्क साधा",
        admission: "प्रवेश प्रक्रिया पहा",
      },
    },

    donation: {
      title: "आमच्या कार्यास सहकार्य करा",
      subtitle: "आपली देणगी गरजू रुग्णांना सन्मान, उपचार आणि आशा देते.",
      quote: "\u201cकोणाचे तरी उद्ध्वस्त होणारे घर वाचवण्यासाठी आणि गंभीर आजाराने त्रस्त रुग्णांच्या चेहऱ्यावर दोन क्षणांचे हास्य फुलवण्यासाठी...\u201d",
      scanTitle: "स्कॅन करून देणगी द्या",
      scanBody: "GPay, PhonePe, Paytm किंवा BHIM UPI यापैकी कोणतेही अ‍ॅप वापरून त्वरित स्कॅन करा व देणगी द्या.",
      bankDetailsTitle: "बँक ट्रान्सफर तपशील",
      bankName: "बँकेचे नाव",
      accountName: "खातेदाराचे नाव",
      accountNumber: "खाते क्रमांक",
      ifsc: "IFSC कोड",
      upiId: "UPI आयडी",
      thankYouTitle: "धन्यवाद",
      thankYouBody:
        "आपली प्रत्येक लहानशी देणगीसुद्धा गरजू रुग्णांना मोफत व सवलतीच्या दरात उपचार देण्यासाठी थेट वापरली जाते. सर्व देणगीदारांना अधिकृत पावती दिली जाईल.",
      regTitle: "नोंदणी व कर सवलत माहिती",
      trustReg: "Trust Reg. No.",
      darpanId: "NGO Darpan ID",
      csrReg: "CSR Reg. No.",
      taxReg: "80G व 12A Reg. No.",
    },

    contact: {
      title: "संपर्क साधा",
      subtitle: "आम्ही दिवसरात्र आपल्या प्रश्नांची उत्तरे देण्यास उपलब्ध आहोत.",
      phoneTitle: "फोन",
      emailTitle: "ईमेल",
      addressTitle: "पत्ता",
      formTitle: "आम्हाला संदेश पाठवा",
      formName: "आपले नाव",
      formPhone: "फोन नंबर",
      formMessage: "संदेश",
      formSubmit: "संदेश पाठवा",
      mapTitle: "नकाशावर आमचे स्थान पहा",

      hero: {
        eyebrow: "संपर्क साधा",
        title: "पुढचे पाऊल उचलण्यास मदत करण्यासाठी आम्ही येथे आहोत.",
        body: "आमच्या सेवांविषयी माहिती हवी असो किंवा कुटुंबातील सदस्यासाठी मार्गदर्शन — संपर्क कसा साधायचा हे समजून घेण्यास आमची टीम मदत करू शकते.",
        callBtn: "केंद्राला कॉल करा",
        directionsBtn: "मार्ग पहा",
      },
      reach: {
        title: "आमच्याशी संपर्काचे मार्ग",
        phone: "फोन",
        email: "ईमेल",
        note: "कृपया प्रवासापूर्वी केंद्राला कॉल करा किंवा ईमेल करा.",
      },
      formIntro: "आम्ही कशी मदत करू शकतो ते सांगा. 'संदेश पाठवा' दाबल्यावर आपल्या ईमेल अ‍ॅपमध्ये केंद्राच्या पत्त्यावर संदेश उघडेल, जेणेकरून तो पाठवण्यापूर्वी आपण तपासू शकता.",
      mailSubject: "वेबसाइटवरील चौकशी – एस.एस. व्यसनमुक्ती व उपशामक उपचार केंद्र",
      find: {
        title: "आमचे केंद्र शोधा.",
        body: "विशाल नगर पूर्व, लातूर येथे आम्हाला भेट द्या. भेटीबाबत स्पष्टीकरण हवे असल्यास प्रवासापूर्वी केंद्राशी संपर्क साधा.",
      },
      cta: {
        title: "कुठून सुरुवात करावी हे समजत नाही?",
        body: "उपलब्ध सेवा, प्रवेश प्रक्रिया किंवा भेटीपूर्वी आवश्यक माहितीबाबत विचारण्यासाठी आमच्या टीमशी संपर्क साधा.",
        services: "आमच्या सेवा पहा",
        admission: "प्रवेश प्रक्रिया पहा",
      },
    },

    gallery: {
      title: "छायाचित्रे",
      subtitle: "आमचे केंद्र, सुविधा आणि कार्याची झलक.",
    },

    footer: {
      about:
        "एस.एस. व्यसनमुक्ती आणि उपशामक उपचार केंद्र, लातूर हे कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्थेद्वारे चालवले जाते — मराठवाड्यातील आरोग्य व सामाजिक सेवेसाठी समर्पित.",
      quickLinks: "द्रुत दुवे",
      getInTouch: "संपर्कात रहा",
      rights: "सर्व हक्क राखीव.",
      orgName: "कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था, लातूर",
      legacy: "\u201cमाणुसकीचा वारसा, निःस्वार्थ सेवेची बांधिलकी\u201d",
      shortAbout:
        "व्यसनमुक्ती आणि उपशामक काळजीसाठी कार्यरत, लातूर (महाराष्ट्र) येथे आरोग्य व सामाजिक सेवेसाठी समर्पित.",
      followUs: "आम्हाला फॉलो करा",
      privacy: "गोपनीयता धोरण",
      terms: "अटी व शर्ती",
      regLabel: "नोंदणी क्र.",
      copyrightOrg: "कै. अश्विनी आनंद बरगाले बहुउद्देशीय सेवाभावी संस्था",
    },

    notFound: {
      title: "पृष्ठ सापडले नाही",
      body: "आपण शोधत असलेले पृष्ठ अस्तित्वात नाही किंवा हलवण्यात आले आहे.",
      cta: "मुख्यपृष्ठावर परत जा",
    },

    loading: "लोड होत आहे...",
  },
} as const;

// Widen the literal types produced by `as const` so both locales
// (which have different literal text) can share a single Dictionary type.
// Numbers are widened too, so `rules.groups[].items` can differ in length.
type Widen<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : T extends object
  ? { [K in keyof T]: Widen<T[K]> }
  : T;

export type Dictionary = Widen<typeof dictionary.en>;