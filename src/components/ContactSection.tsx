"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";
import { contactExtraEn, type ContactExtra } from "@/app/contact/contactExtraCopy";

// Same destination as the embedded map below.
export const DIRECTIONS_HREF = "https://www.google.com/maps?q=Vishal+Nagar,+Latur,+Maharashtra+413512";

const toTel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
const inputCls =
  "w-full min-h-12 rounded-lg border border-secondary/20 bg-white px-4 py-3 text-base text-secondary transition-colors placeholder:text-ink-soft/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 aria-[invalid=true]:border-red-600";

type Field = "name" | "phone" | "message";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;
  const x: ContactExtra = (c as { extra?: ContactExtra }).extra ?? contactExtraEn;
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Partial<Record<Field, string>> = {};
    if (!name) next.name = x.form.nameError;
    if (!/^\+?[\d\s-]{8,15}$/.test(phone)) next.phone = x.form.phoneError;
    if (!message) next.message = x.form.messageError;
    setErrors(next);

    const first = (["name", "phone", "message"] as Field[]).find((k) => next[k]);
    if (first) {
      setOpened(false);
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    // No backend exists in this project, so open the visitor's email app instead of pretending to send.
    const subject = encodeURIComponent(`${x.form.subject} ${name}`);
    const body = encodeURIComponent(`${c.formName}: ${name}\n${c.formPhone}: ${phone}\n\n${message}`);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const err = (k: Field) => errors[k];

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
      {/* FORM */}
      <div className="lg:col-span-7">
        <div className="rounded-2xl bg-primary-light/40 p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">{c.formTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{x.form.intro}</p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-secondary">
                {c.formName}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={!!err("name")}
                aria-describedby={err("name") ? "contact-name-error" : undefined}
                className={inputCls}
              />
              {err("name") && (
                <p id="contact-name-error" role="alert" className="mt-1.5 text-sm text-red-700">
                  {err("name")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-secondary">
                {c.formPhone}
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-invalid={!!err("phone")}
                aria-describedby={err("phone") ? "contact-phone-error" : undefined}
                className={inputCls}
              />
              {err("phone") && (
                <p id="contact-phone-error" role="alert" className="mt-1.5 text-sm text-red-700">
                  {err("phone")}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-secondary">
                {c.formMessage}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                aria-invalid={!!err("message")}
                aria-describedby={err("message") ? "contact-message-error" : undefined}
                className={`${inputCls} resize-y`}
              />
              {err("message") && (
                <p id="contact-message-error" role="alert" className="mt-1.5 text-sm text-red-700">
                  {err("message")}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary-dark ${focusRing}`}
            >
              <Send size={18} aria-hidden="true" />
              {c.formSubmit}
            </button>

            {opened && (
              <p role="status" className="rounded-lg border border-primary/30 bg-white p-4 text-sm leading-relaxed text-secondary">
                {x.form.opened}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* DETAILS + MAP */}
      <div className="lg:col-span-5">
        <h2 className="font-display text-2xl font-bold text-secondary md:text-3xl">{x.location.title}</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">{x.location.text}</p>

        <ul className="mt-6 divide-y divide-secondary/10 border-y border-secondary/10">
          <li className="flex items-start gap-4 py-4">
            <Phone className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
            <div>
              <p className="text-xs text-ink-soft">{c.phoneTitle}</p>
              {[siteInfo.phone1, siteInfo.phone2].map((n) => (
                <a
                  key={n}
                  href={toTel(n)}
                  className={`block rounded py-0.5 font-display font-semibold text-secondary hover:text-primary ${focusRing}`}
                >
                  {n}
                </a>
              ))}
            </div>
          </li>
          <li className="flex items-start gap-4 py-4">
            <Mail className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-xs text-ink-soft">{c.emailTitle}</p>
              <a
                href={`mailto:${siteInfo.email}`}
                className={`block break-all rounded py-0.5 font-display font-semibold text-secondary hover:text-primary ${focusRing}`}
              >
                {siteInfo.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4 py-4">
            <MapPin className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
            <div>
              <p className="text-xs text-ink-soft">{c.addressTitle}</p>
              <p className="font-display font-semibold text-secondary">{siteInfo.address}</p>
            </div>
          </li>
        </ul>

        <a
          href={DIRECTIONS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex min-h-12 items-center gap-2 rounded-lg border border-secondary/30 px-6 py-3 font-semibold text-secondary transition-colors hover:bg-primary-light ${focusRing}`}
        >
          <Navigation size={18} aria-hidden="true" />
          {x.location.directions}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <div className="mt-6 h-72 overflow-hidden rounded-xl border border-secondary/10 md:h-80">
          <iframe
            title={c.mapTitle}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Vishal+Nagar,+Latur,+Maharashtra+413512&output=embed"
          />
        </div>
      </div>
    </div>
  );
}