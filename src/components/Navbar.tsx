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
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /*
   * Desktop labels are intentionally shorter
   * so the navbar stays clean and single-line.
   *
   * Mobile can still use the complete translated labels.
   */
  const desktopLinks = [
    {
      href: "/",
      label: t.nav.home,
    },
    {
      href: "/about",
      label: locale === "mr" ? "आमच्याबद्दल" : "About",
    },
    {
      href: "/services",
      label: t.nav.services,
    },
    {
      href: "/admission",
      label: locale === "mr" ? "प्रवेश" : "Admission",
    },
    {
      href: "/rules",
      label: locale === "mr" ? "नियम" : "Rules",
    },
    {
      href: "/gallery",
      label: t.nav.gallery,
    },
    {
      href: "/contact",
      label: t.nav.contact,
    },
  ];

  const mobileLinks = [
    {
      href: "/",
      label: t.nav.home,
    },
    {
      href: "/about",
      label: t.nav.about,
    },
    {
      href: "/services",
      label: t.nav.services,
    },
    {
      href: "/admission",
      label: t.nav.admission,
    },
    {
      href: "/rules",
      label: t.nav.rules,
    },
    {
      href: "/gallery",
      label: t.nav.gallery,
    },
    {
      href: "/contact",
      label: t.nav.contact,
    },
  ];

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-white/95 backdrop-blur-md
        border-b border-slate-100
        transition-all duration-300
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      <div className="container-content">
        <div className="flex h-[82px] items-center justify-between gap-4">
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/20">
              <Image
                src="/images/logo-ss.jpg"
                alt="S.S. De-Addiction Centre"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="whitespace-nowrap font-display text-[15px] font-bold text-secondary xl:text-base">
                S.S.{" "}
                {locale === "mr"
                  ? "व्यसनमुक्ती केंद्र"
                  : "De-Addiction Centre"}
              </p>

              <p className="mt-0.5 text-xs text-ink-soft">
                {locale === "mr" ? "लातूर" : "Latur"}
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden xl:flex flex-1 items-center justify-center gap-1">
            {desktopLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-3
                    py-2
                    text-[13px]
                    font-medium
                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-primary-light text-primary-dark"
                        : "text-ink-soft hover:bg-primary-light/60 hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="hidden xl:flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="
                flex
                h-10
                items-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                border
                border-primary/20
                px-3
                text-[13px]
                font-medium
                text-primary
                transition-colors
                hover:bg-primary-light
              "
            >
              <Languages size={16} />

              <span>
                {locale === "mr" ? "EN" : "मराठी"}
              </span>
            </button>

            <a
              href="tel:8956550539"
              className="
                flex
                h-10
                items-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                bg-primary
                px-4
                text-[13px]
                font-semibold
                text-white
                transition-colors
                hover:bg-primary-dark
              "
            >
              <Phone size={15} />

              <span>
                {locale === "mr" ? "कॉल करा" : "Call Now"}
              </span>
            </a>

            <Link
              href="/donation"
              className="
                flex
                h-10
                items-center
                whitespace-nowrap
                rounded-full
                bg-gold
                px-4
                text-[13px]
                font-semibold
                text-white
                transition-all
                hover:brightness-95
              "
            >
              {locale === "mr" ? "देणगी" : "Donate"}
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-secondary
              transition-colors
              hover:bg-primary-light
              xl:hidden
            "
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {open && (
        <div className="border-t border-primary/10 bg-white xl:hidden">
          <nav className="container-content py-4">
            <div className="flex flex-col gap-1">
              {mobileLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-colors

                      ${
                        active
                          ? "bg-primary-light text-primary-dark"
                          : "text-ink-soft hover:bg-primary-light/50 hover:text-primary"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-primary/20
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-primary
                  "
                >
                  <Languages size={16} />

                  {locale === "mr" ? "English" : "मराठी"}
                </button>

                <a
                  href="tel:8956550539"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  <Phone size={15} />

                  {locale === "mr" ? "कॉल करा" : "Call Now"}
                </a>

                <Link
                  href="/donation"
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gold
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {locale === "mr" ? "देणगी द्या" : "Donate Now"}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}