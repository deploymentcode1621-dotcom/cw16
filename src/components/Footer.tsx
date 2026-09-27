"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";

export default function Footer() {
  const { t, locale } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/admission", label: t.nav.admission },
    { href: "/rules", label: t.nav.rules },
    { href: "/donation", label: t.nav.donation },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="container-content py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.2fr] gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/30 shrink-0">
              <Image src="/images/logo-ss.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <p className="font-display font-bold text-lg leading-tight">
              {locale === "mr" ? "एस.एस. व्यसनमुक्ती व उपशामक केंद्र" : "S.S. De-Addiction & Palliative Care"}
            </p>
          </div>
          <p className="text-sm text-white/75 leading-relaxed max-w-md">{t.footer.about}</p>
        </div>

        <div>
          <p className="font-display font-semibold mb-4 text-accent">{t.footer.quickLinks}</p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/75 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-semibold mb-4 text-accent">{t.footer.getInTouch}</p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>
                <a href={`tel:${siteInfo.phone1}`} className="hover:text-white">
                  {siteInfo.phone1}
                </a>
                {" · "}
                <a href={`tel:${siteInfo.phone2}`} className="hover:text-white">
                  {siteInfo.phone2}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${siteInfo.email}`} className="hover:text-white break-all">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{siteInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {siteInfo.org}. {t.footer.rights}
          </p>
          <p>Reg. No. {siteInfo.regNo}</p>
        </div>
      </div>
    </footer>
  );
}
