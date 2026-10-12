"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Flower2,
  ShieldPlus,
  Stethoscope,
  MessagesSquare,
  Sprout,
  HeartPulse,
  Users,
  Home,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Item = { title: string; desc: string };
type Wing = { title: string; subtitle: string; items: Item[]; cta: string };

// Fallback text, used only for keys missing from the translations file.
const defaults: { eyebrow: string; title: string; deaddiction: Wing; palliative: Wing } = {
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
};

type Theme = {
  card: string;
  headFade: string;
  badge: string;
  iconBg: string;
  button: string;
  ring: string;
};

const blueTheme: Theme = {
  card: "bg-sky-50/70 border-sky-200",
  headFade: "from-sky-50 via-sky-50/80",
  badge: "bg-primary text-white",
  iconBg: "bg-white text-primary ring-1 ring-primary/15",
  button: "bg-primary hover:bg-primary-dark shadow-primary/25",
  ring: "text-primary",
};

const greenTheme: Theme = {
  card: "bg-emerald-50/70 border-emerald-200",
  headFade: "from-emerald-50 via-emerald-50/80",
  badge: "bg-emerald-600 text-white",
  iconBg: "bg-white text-emerald-700 ring-1 ring-emerald-600/15",
  button: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25",
  ring: "text-emerald-700",
};

function WingCard({
  wing,
  theme,
  HeadIcon,
  itemIcons,
  image,
  href,
  delay,
}: {
  wing: Wing;
  theme: Theme;
  HeadIcon: LucideIcon;
  itemIcons: LucideIcon[];
  image: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col overflow-hidden rounded-3xl border ${theme.card}`}
    >
      {/* Header with photo on the right */}
      <div className="relative min-h-[8.5rem]">
        <div className="absolute inset-y-0 right-0 w-1/2 sm:w-2/5">
          <Image src={image} alt="" fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.headFade} to-transparent`} />
        </div>
        <div className="relative z-10 flex items-start gap-4 p-5 sm:p-6">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${theme.badge}`}>
            <HeadIcon size={22} />
          </span>
          <div className="max-w-[58%] sm:max-w-[55%]">
            <h3 className="font-display text-xl font-bold leading-tight text-secondary">{wing.title}</h3>
            <p className="mt-1 text-sm leading-snug text-ink-soft">{wing.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Items */}
      <ul className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-2 sm:px-6">
        {wing.items.map((item, i) => {
          const Icon = itemIcons[i % itemIcons.length];
          return (
            <li key={item.title} className="flex items-start gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.iconBg}`}>
                <Icon size={17} />
              </span>
              <div>
                <p className="text-sm font-bold text-secondary">{item.title}</p>
                <p className="text-[13px] leading-snug text-ink-soft">{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <Link
          href={href}
          className={`group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors ${theme.button}`}
        >
          {wing.cta}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesOverview() {
  const { t } = useLanguage();
  const s = {
    ...defaults,
    ...((t.home as { servicesOverview?: Partial<typeof defaults> }).servicesOverview ?? {}),
  };

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
            {s.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <WingCard
            wing={s.deaddiction}
            theme={blueTheme}
            HeadIcon={HeartHandshake}
            itemIcons={[ShieldPlus, Stethoscope, MessagesSquare, Sprout]}
            image="/images/service-deaddiction.jpg"
            href="/services#de-addiction"
            delay={0}
          />
          <WingCard
            wing={s.palliative}
            theme={greenTheme}
            HeadIcon={Flower2}
            itemIcons={[HeartPulse, Users, Home, Megaphone]}
            image="/images/service-palliative.jpg"
            href="/services#palliative"
            delay={0.12}
          />
        </div>
      </div>
    </section>
  );
}