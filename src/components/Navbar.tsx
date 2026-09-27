"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/admission", label: t.nav.admission },
    { href: "/rules", label: t.nav.rules },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="container-content flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image src="/images/logo-ss.jpg" alt="SS Centre logo" fill className="object-cover" />
          </div>
          <div className="leading-tight">
            <p className="font-display font-700 text-[15px] md:text-base text-secondary font-bold">
              S.S. {locale === "mr" ? "व्यसनमुक्ती केंद्र" : "De-Addiction Centre"}
            </p>
            <p className="text-[11px] md:text-xs text-ink-soft">{locale === "mr" ? "लातूर" : "Latur"}</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-primary-light text-primary-dark"
                  : "text-ink-soft hover:text-primary hover:bg-primary-light/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border border-primary/20 text-primary hover:bg-primary-light transition-colors"
          >
            <Languages size={16} />
            {locale === "mr" ? "EN" : "मराठी"}
          </button>
          <a
            href="tel:8956550539"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <Phone size={15} />
            {t.nav.callNow}
          </a>
          <Link
            href="/donation"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-gold text-white hover:brightness-95 transition-all"
          >
            {t.nav.donateNow}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/10 bg-white">
          <nav className="container-content py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  pathname === link.href ? "bg-primary-light text-primary-dark" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-2 px-4">
              <button
                onClick={toggleLocale}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-sm font-medium border border-primary/20 text-primary"
              >
                <Languages size={16} />
                {locale === "mr" ? "English" : "मराठी"}
              </button>
            </div>
            <div className="flex items-center gap-2 px-4 pt-2">
              <a
                href="tel:8956550539"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold bg-primary text-white"
              >
                <Phone size={15} />
                {t.nav.callNow}
              </a>
              <Link
                href="/donation"
                className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold bg-gold text-white"
              >
                {t.nav.donateNow}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
