"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { X, Heart, ArrowLeft, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";

/* ------------------------------------------------------------------
   Any "Donate Now" button on the site calls openDonateModal().
   The single <DonateModal /> (mounted in FloatingActions) listens
   for that event and opens the form.
------------------------------------------------------------------- */
const OPEN_EVENT = "open-donate-modal";

export function openDonateModal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const PAYEE_NAME = "S.S. De-Addiction Centre";
const QUICK_AMOUNTS = [500, 1000, 2000, 5000];
const MAX_AMOUNT = 100000; // UPI per-transaction limit for most apps

const LABELS = {
  en: {
    title: "Donate Now",
    subtitle: "Your contribution gives dignity, treatment and hope to those in need.",
    name: "Your name",
    phone: "Mobile number",
    amount: "Amount (₹)",
    pay: "Pay with UPI",
    close: "Close",
    errName: "Please enter your name.",
    errPhone: "Enter a valid 10-digit mobile number.",
    errAmount: "Enter an amount between ₹1 and ₹1,00,000.",
    scanTitle: "Scan to pay",
    scanBody: "Open any UPI app (PhonePe, Google Pay, Paytm, BHIM) and scan this QR code.",
    payingFor: "Amount",
    upiId: "UPI ID",
    copy: "Copy",
    copied: "Copied",
    back: "Change details",
    openingTitle: "Opening PhonePe…",
    openingBody: "If PhonePe did not open, tap the button below to choose any UPI app.",
    otherApp: "Pay with another UPI app",
    bankLink: "Prefer bank transfer? View bank details",
    note: "All donors receive an official receipt.",
  },
  mr: {
    title: "देणगी द्या",
    subtitle: "आपली देणगी गरजू रुग्णांना सन्मान, उपचार आणि आशा देते.",
    name: "आपले नाव",
    phone: "मोबाईल नंबर",
    amount: "रक्कम (₹)",
    pay: "UPI ने पैसे द्या",
    close: "बंद करा",
    errName: "कृपया आपले नाव लिहा.",
    errPhone: "कृपया १० अंकी मोबाईल नंबर लिहा.",
    errAmount: "₹१ ते ₹१,००,००० दरम्यान रक्कम लिहा.",
    scanTitle: "स्कॅन करून पैसे द्या",
    scanBody: "कोणतेही UPI अ‍ॅप (PhonePe, Google Pay, Paytm, BHIM) उघडा आणि हा QR कोड स्कॅन करा.",
    payingFor: "रक्कम",
    upiId: "UPI आयडी",
    copy: "कॉपी",
    copied: "कॉपी झाले",
    back: "माहिती बदला",
    openingTitle: "PhonePe उघडत आहे…",
    openingBody: "PhonePe उघडले नाही तर खालील बटण दाबून कोणतेही UPI अ‍ॅप निवडा.",
    otherApp: "दुसऱ्या UPI अ‍ॅपने पैसे द्या",
    bankLink: "बँक ट्रान्सफर करायचे आहे? बँक तपशील पहा",
    note: "सर्व देणगीदारांना अधिकृत पावती दिली जाईल.",
  },
} as const;

function upiQuery(amount: number, name: string) {
  const params: Record<string, string> = {
    pa: siteInfo.bank.upi,
    pn: PAYEE_NAME,
    am: amount.toFixed(2),
    cu: "INR",
    tn: `Donation by ${name}`.slice(0, 50),
  };
  // encodeURIComponent (not URLSearchParams) so spaces become %20, not "+"
  return Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v).replace(/%40/g, "@")}`)
    .join("&");
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iPadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
  return /Android|iPhone|iPad|iPod/i.test(ua) || iPadOS;
}

type Step = "form" | "qr" | "app";

export default function DonateModal() {
  const { locale } = useLanguage();
  const L = LABELS[locale];

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Listen for "open" events from any Donate button
  useEffect(() => {
    const onOpen = () => {
      setStep("form");
      setError("");
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  // Escape to close + lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const amountNum = Number(amount);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 2) return setError(L.errName);
    if (!/^[6-9]\d{9}$/.test(phone)) return setError(L.errPhone);
    if (!Number.isFinite(amountNum) || amountNum < 1 || amountNum > MAX_AMOUNT) {
      return setError(L.errAmount);
    }
    setError("");

    /* TODO (optional): save the donor here so your team can send receipts, e.g.
       fetch("/api/donations", { method: "POST", body: JSON.stringify({ name, phone, amount: amountNum }) });
    */

    if (isMobileDevice()) {
      setStep("app");
      // Opens PhonePe directly with amount + UPI ID filled in
      window.location.href = `phonepe://pay?${upiQuery(amountNum, name.trim())}`;
    } else {
      setStep("qr");
    }
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(siteInfo.bank.upi);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const upiLink = `upi://pay?${upiQuery(amountNum || 0, name.trim())}`;

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={L.title}
    >
      <div
        className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={L.close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        {/* ---------------- STEP 1: FORM ---------------- */}
        {step === "form" && (
          <form onSubmit={handlePay} noValidate>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Heart size={22} />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-secondary">{L.title}</h2>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-ink-soft">{L.subtitle}</p>

            <label className="mb-1 block text-xs font-medium text-ink-soft">{L.name}</label>
            <input
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />

            <label className="mb-1 mt-4 block text-xs font-medium text-ink-soft">{L.phone}</label>
            <input
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="9876543210"
            />

            <label className="mb-1 mt-4 block text-xs font-medium text-ink-soft">{L.amount}</label>
            <input
              className={inputClass}
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/\D/g, "").slice(0, 6))}
              inputMode="numeric"
              placeholder="1000"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {QUICK_AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(String(a))}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    amountNum === a
                      ? "border-primary bg-primary text-white"
                      : "border-primary/25 text-primary hover:bg-primary-light"
                  }`}
                >
                  ₹{a.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              <Heart size={16} />
              {L.pay}
            </button>

            <p className="mt-4 text-center text-xs text-ink-soft">{L.note}</p>
            <p className="mt-2 text-center text-xs">
              <Link
                href="/donation"
                onClick={() => setOpen(false)}
                className="text-primary underline-offset-2 hover:underline"
              >
                {L.bankLink}
              </Link>
            </p>
          </form>
        )}

        {/* ---------------- STEP 2a: LAPTOP QR ---------------- */}
        {step === "qr" && (
          <div className="text-center">
            <h2 className="font-display text-xl font-bold text-secondary">{L.scanTitle}</h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{L.scanBody}</p>

            <div className="mx-auto mt-5 inline-block rounded-2xl border-2 border-primary/15 bg-white p-4">
              <QRCodeSVG value={upiLink} size={220} level="M" marginSize={1} />
            </div>

            <p className="mt-4 text-sm text-ink-soft">
              {L.payingFor}:{" "}
              <span className="font-display text-lg font-bold text-secondary">
                ₹{amountNum.toLocaleString("en-IN")}
              </span>
            </p>

            <div className="mx-auto mt-3 flex max-w-xs items-center justify-between gap-2 rounded-xl bg-primary-light/50 px-4 py-2.5 text-left">
              <div className="min-w-0">
                <p className="text-[11px] text-ink-soft">{L.upiId}</p>
                <p className="truncate text-sm font-semibold text-secondary">{siteInfo.bank.upi}</p>
              </div>
              <button
                type="button"
                onClick={copyUpi}
                className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? L.copied : L.copy}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setStep("form")}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft size={15} />
              {L.back}
            </button>
          </div>
        )}

        {/* ---------------- STEP 2b: PHONE (PhonePe opening) ---------------- */}
        {step === "app" && (
          <div className="text-center">
            <h2 className="font-display text-xl font-bold text-secondary">{L.openingTitle}</h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{L.openingBody}</p>

            <p className="mt-5 text-sm text-ink-soft">
              {L.payingFor}:{" "}
              <span className="font-display text-lg font-bold text-secondary">
                ₹{amountNum.toLocaleString("en-IN")}
              </span>
            </p>

            <a
              href={upiLink}
              className="mt-5 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark"
            >
              {L.otherApp}
            </a>

            <div className="mx-auto mt-4 flex max-w-xs items-center justify-between gap-2 rounded-xl bg-primary-light/50 px-4 py-2.5 text-left">
              <div className="min-w-0">
                <p className="text-[11px] text-ink-soft">{L.upiId}</p>
                <p className="truncate text-sm font-semibold text-secondary">{siteInfo.bank.upi}</p>
              </div>
              <button
                type="button"
                onClick={copyUpi}
                className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? L.copied : L.copy}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setStep("form")}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft size={15} />
              {L.back}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}