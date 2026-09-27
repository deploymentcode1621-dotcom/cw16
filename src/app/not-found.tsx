"use client";

import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[65vh] flex items-center justify-center container-content">
      <div className="text-center max-w-md">
        <div className="h-16 w-16 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto mb-6">
          <HeartPulse size={30} />
        </div>
        <p className="font-display font-extrabold text-6xl text-primary mb-2">404</p>
        <h1 className="font-display font-bold text-2xl text-secondary">{t.notFound.title}</h1>
        <p className="text-ink-soft mt-3">{t.notFound.body}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
        >
          {t.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
