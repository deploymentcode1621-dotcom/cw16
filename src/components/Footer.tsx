"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";

/* ---------- Social links ----------
   Paste your real page URLs. Icons with an empty href are hidden. */
const SOCIALS: { name: string; href: string; bg: string; icon: ReactNode }[] = [
  {
    name: "Facebook",
    href: "",
    bg: "bg-[#1877F2]",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: "Instagram",
    href: "",
    bg: "bg-gradient-to-tr from-[#f9a825] via-[#e1306c] to-[#833ab4]",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "",
    bg: "bg-[#FF0000]",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "",
    bg: "bg-[#0A66C2]",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/admission", label: t.nav.admission },
    { href: "/rules", label: t.nav.rules },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  const socials = SOCIALS.filter((s) => s.href);

  const headingClass =
    "font-display text-base font-semibold text-white after:mt-2 after:block after:h-0.5 after:w-8 after:rounded-full after:bg-gold after:content-['']";

  return (
    <footer className="bg-gradient-to-b from-secondary to-[#0a2a5e] text-white">
      <div className="container-content grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.3fr_0.9fr] lg:gap-12">
        {/* Column 1: trust identity */}
        <div className="lg:border-r lg:border-white/15 lg:pr-10">
          <div className="flex items-start gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white/40">
              <Image src="/images/logo-ss.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <p className="font-display text-base font-bold leading-snug">{f.orgName}</p>
          </div>

          <p className="mt-4 text-sm italic leading-relaxed text-white/90">{f.legacy}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{f.shortAbout}</p>

          <p className="mt-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70">
            Reg. No. {siteInfo.regNo}
          </p>
        </div>

        {/* Column 2: quick links */}
        <div>
          <p className={headingClass}>{f.quickLinks}</p>
          <ul className="mt-5 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block text-sm text-white/75 transition-all hover:translate-x-1 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: get in touch */}
        <div>
          <p className={headingClass}>{f.getInTouch}</p>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-white" />
              <span className="leading-relaxed">
                <a href={`tel:${siteInfo.phone1}`} className="hover:text-white hover:underline">
                  +91 {siteInfo.phone1}
                </a>
                <br />
                <a href={`tel:${siteInfo.phone2}`} className="hover:text-white hover:underline">
                  +91 {siteInfo.phone2}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-white" />
              <a href={`mailto:${siteInfo.email}`} className="break-all hover:text-white hover:underline">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-white" />
              <span className="leading-relaxed">{siteInfo.address}</span>
            </li>
          </ul>
        </div>

        {/* Column 4: follow + donate */}
        <div>
          <p className={headingClass}>{f.followUs}</p>

          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg ${s.bg}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="19"
                      height="19"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <Link
            href="/donation"
            className={`${socials.length > 0 ? "mt-6" : "mt-5"} inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl`}
          >
            <Heart size={16} />
            {t.nav.donateNow}
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteInfo.org}. {f.rights}
          </p>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white">
              {f.privacy}
            </Link>
            <span className="h-3 w-px bg-white/25" aria-hidden="true" />
            <Link href="/terms" className="hover:text-white">
              {f.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}