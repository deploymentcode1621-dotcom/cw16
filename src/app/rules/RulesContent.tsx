"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Clock, ClipboardList, ShieldCheck, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ruleGroups, rulesExtraEn, type Rule, type RulesExtra } from "./rulesData";

const groupIcons = { visiting: Clock, discharge: ClipboardList, communication: ShieldCheck } as const;
const groupBg = ["bg-white", "bg-primary-light/40", "bg-white"];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/** Bolds clock times (e.g. 10:00 AM) so hours are easy to scan. Text is otherwise unchanged. */
function emphasise(text: string) {
  return text.split(/(\d{1,2}:\d{2}\s?(?:AM|PM))/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-secondary">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function RulesContent() {
  const { t } = useLanguage();
  const x: RulesExtra = (t.rules as { extra?: RulesExtra }).extra ?? rulesExtraEn;
  const title = t.rules.title;
  // Rule numbers come from the order of t.rules.items, as in the old RulesSection.
  const rules: Rule[] = t.rules.items.map((r, i) => ({ n: i + 1, title: r.title, desc: r.desc }));
  const byNumber = (n: number) => rules.find((r) => r.n === n)!;

  return (
    <>
      {/* HERO */}
      <section className="bg-secondary text-white">
        <div className="container-content py-12 md:py-16">
          <div className="border-l-2 border-primary pl-5 md:pl-7">
            <p className="text-sm font-semibold tracking-wide text-primary-light">{x.hero.eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{x.hero.text}</p>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="bg-white pt-10 md:pt-14">
        <div className="container-content">
          <div className="flex gap-3 rounded-lg border border-primary/25 bg-primary-light/50 p-4 md:p-5">
            <Info className="mt-0.5 shrink-0 text-primary" size={20} aria-hidden="true" />
            <p className="max-w-3xl text-sm leading-relaxed text-secondary md:text-base">{x.notice}</p>
          </div>
        </div>
      </section>

      {/* GROUPED RULES */}
      {ruleGroups.map((group, gi) => {
        const Icon = groupIcons[group.id];
        const copy = x.groups[group.id];
        return (
          <section
            key={group.id}
            aria-labelledby={`rules-${group.id}`}
            className={`${groupBg[gi]} ${gi === 0 ? "mt-10 md:mt-14" : ""} py-10 md:py-14`}
          >
            <div className="container-content">
              <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <Icon className="text-primary" size={26} aria-hidden="true" />
                    <h2 id={`rules-${group.id}`} className="mt-3 font-display text-2xl font-bold text-secondary">
                      {copy.title}
                    </h2>
                    <p className="mt-2 max-w-xs leading-relaxed text-ink-soft">{copy.text}</p>
                  </div>
                </div>

                <ol className="divide-y divide-secondary/10 border-y border-secondary/10 lg:col-span-8">
                  {group.rules.map((n) => {
                    const r = byNumber(n);
                    return (
                      <li key={n} value={n} className="flex gap-4 py-5 md:gap-5">
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-semibold text-white"
                        >
                          {n}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-secondary">
                            <span className="sr-only">Rule {n}: </span>
                            {r.title}
                          </h3>
                          <p className="mt-1 leading-relaxed text-ink-soft">{emphasise(r.desc)}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-white pb-20 pt-6 md:pb-24 md:pt-10">
        <div className="container-content">
          <div className="flex flex-col gap-6 rounded-2xl bg-secondary p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold md:text-3xl">{x.cta.title}</h2>
              <p className="mt-3 leading-relaxed text-white/80">{x.cta.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 ${focusRing}`}
              >
                {x.cta.contact}
              </Link>
              <Link
                href="/admission"
                className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                {x.cta.admission}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}