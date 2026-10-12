"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Caveat } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";

// Handwritten font for the tagline. If your site already has a script font
// (the one used for "From Struggle to Strength"), swap it in here.
const script = Caveat({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });

// Put these two images in /public/images/ (see notes). If a file is missing,
// that side simply shows the colour gradient, so the banner never looks broken.
const HEART_IMG = "/images/donation-heart.jpg"; // hands holding the red heart
const PLANT_IMG = "/images/donation-plant.jpg"; // green plant / sapling

const fadeRight = "linear-gradient(to right, #000 50%, transparent 100%)";
const fadeLeft = "linear-gradient(to left, #000 50%, transparent 100%)";

export default function DonationBanner() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        // blue in the middle, soft light-green on the far right (behind the tagline)
        background:
          "linear-gradient(90deg, #0b4a8f 0%, #0a3a7a 30%, #0a3a7a 62%, #bfe3d2 100%)",
      }}
    >
      {/* Left photo: hands + heart */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-3/5 bg-cover bg-center opacity-40 lg:w-[36%] lg:opacity-100"
        style={{
          backgroundImage: `url(${HEART_IMG})`,
          WebkitMaskImage: fadeRight,
          maskImage: fadeRight,
        }}
      />

      {/* Right photo: plant (desktop only) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[36%] bg-cover bg-center lg:block"
        style={{
          backgroundImage: `url(${PLANT_IMG})`,
          WebkitMaskImage: fadeLeft,
          maskImage: fadeLeft,
        }}
      />

      {/* Mobile/tablet readability overlay */}
      <div className="absolute inset-0 bg-secondary/55 lg:hidden" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[320px] max-w-[1600px] items-center lg:grid-cols-12">
        <div className="hidden lg:col-span-3 lg:block" />

        {/* Centre: message + buttons */}
        <div className="px-6 py-12 text-center sm:px-10 lg:col-span-6 lg:px-0 lg:py-14 lg:text-left">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            {h.donateBannerTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/90 md:text-lg lg:mx-0">
            {h.donateBannerBody}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="/donation"
              className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-base"
            >
              {t.nav.donateNow}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-secondary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-base"
            >
              <Phone size={18} />
              {h.donateBannerContact}
            </Link>
          </div>
        </div>

        {/* Right: slanted handwritten tagline + golden swoosh (desktop only) */}
        <div className="hidden items-center justify-center lg:col-span-3 lg:flex">
          <div className="-rotate-[8deg]">
            <p
              className={`${script.className} max-w-[260px] text-4xl font-bold leading-[1.05] text-secondary xl:text-5xl`}
            >
              {h.donateBannerScript}
            </p>
            <svg
              viewBox="0 0 220 24"
              aria-hidden="true"
              className="mt-1 w-48 text-amber-500 xl:w-56"
            >
              <path
                d="M4 18 C 60 4, 140 2, 216 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}