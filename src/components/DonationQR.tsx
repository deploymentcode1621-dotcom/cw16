"use client";

import Image from "next/image";
import { Copy, Check, Landmark, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteInfo } from "@/lib/dictionary";

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available, ignore silently
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-primary/10 last:border-0">
      <div className="min-w-0">
        <p className="text-xs text-ink-soft">{label}</p>
        <p className="font-display font-semibold text-secondary text-sm md:text-base break-all">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function DonationQR() {
  const { t } = useLanguage();
  const d = t.donation;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
      <div className="card-surface p-8 flex flex-col items-center text-center">
        <h3 className="font-display font-bold text-xl text-secondary">{d.scanTitle}</h3>
        <p className="text-sm text-ink-soft mt-2 max-w-xs">{d.scanBody}</p>
        <div className="relative mt-6 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-primary-light">
          <Image src="/images/qr-donate.jpg" alt="Scan to donate via UPI" fill className="object-contain bg-white" />
        </div>
        <p className="mt-4 text-xs text-ink-soft break-all">{siteInfo.bank.upi}</p>
      </div>

      <div className="card-surface p-8">
        <div className="flex items-center gap-2 mb-2">
          <Landmark size={18} className="text-primary" />
          <h3 className="font-display font-bold text-xl text-secondary">{d.bankDetailsTitle}</h3>
        </div>
        <div className="mt-3">
          <CopyRow label={d.bankName} value={siteInfo.bank.name} />
          <CopyRow label={d.accountName} value={siteInfo.org} />
          <CopyRow label={d.accountNumber} value={siteInfo.bank.account} />
          <CopyRow label={d.ifsc} value={siteInfo.bank.ifsc} />
          <CopyRow label={d.upiId} value={siteInfo.bank.upi} />
        </div>
        <div className="mt-5 flex items-start gap-2 text-xs text-ink-soft bg-primary-light/50 rounded-xl p-3">
          <ShieldCheck size={15} className="mt-0.5 shrink-0 text-primary" />
          <span>{d.thankYouBody}</span>
        </div>
      </div>
    </div>
  );
}
