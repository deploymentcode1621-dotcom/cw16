"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
      <div className="space-y-4">
        <div className="card-surface p-6 flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <p className="text-xs text-ink-soft">{c.phoneTitle}</p>
            <a href={`tel:${siteInfo.phone1}`} className="block font-display font-semibold text-secondary">
              {siteInfo.phone1}
            </a>
            <a href={`tel:${siteInfo.phone2}`} className="block font-display font-semibold text-secondary">
              {siteInfo.phone2}
            </a>
          </div>
        </div>

        <div className="card-surface p-6 flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-ink-soft">{c.emailTitle}</p>
            <a href={`mailto:${siteInfo.email}`} className="block font-display font-semibold text-secondary break-all">
              {siteInfo.email}
            </a>
          </div>
        </div>

        <div className="card-surface p-6 flex items-start gap-4">
          <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center text-primary shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-xs text-ink-soft">{c.addressTitle}</p>
            <p className="font-display font-semibold text-secondary">{siteInfo.address}</p>
          </div>
        </div>

        <div className="rounded-soft overflow-hidden border border-primary/10 h-56">
          <iframe
            title={c.mapTitle}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Vishal+Nagar,+Latur,+Maharashtra+413512&output=embed"
          />
        </div>
      </div>

      <div className="card-surface p-6 md:p-8">
        <h3 className="font-display font-bold text-xl text-secondary mb-5">{c.formTitle}</h3>
        {submitted ? (
          <div className="bg-accent/10 text-primary-dark rounded-xl p-5 text-sm">
            {t.donation.thankYouTitle}! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-ink-soft mb-1.5">{c.formName}</label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-soft mb-1.5">{c.formPhone}</label>
              <input
                required
                type="tel"
                className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-soft mb-1.5">{c.formMessage}</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-primary/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              <Send size={16} />
              {c.formSubmit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
