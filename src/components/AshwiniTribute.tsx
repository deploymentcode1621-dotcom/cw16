import Image from "next/image";
import Link from "next/link";

export default function AshwiniTribute() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] px-5 py-16 sm:py-20">
      {/* Animations (pure CSS, works in server or client components) */}
      <style>{`
        @keyframes at-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes at-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes at-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes at-glow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50%      { opacity: .7;  transform: scale(1.12); }
        }
        @keyframes at-ripple {
          0%   { transform: scale(.9); opacity: .55; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes at-shimmer {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        @keyframes at-twinkle {
          0%, 100% { opacity: .15; transform: scale(.7); }
          50%      { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes at-beat {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.18); }
        }
        @keyframes at-drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          20%  { opacity: .8; }
          100% { transform: translateY(-120px) translateX(14px); opacity: 0; }
        }
        .at-fade-up   { animation: at-fade-up .9s cubic-bezier(.2,.7,.2,1) both; }
        .at-delay-1   { animation-delay: .1s; }
        .at-delay-2   { animation-delay: .25s; }
        .at-delay-3   { animation-delay: .4s; }
        .at-delay-4   { animation-delay: .55s; }
        .at-float     { animation: at-float 6s ease-in-out infinite; }
        .at-spin      { animation: at-spin 8s linear infinite; }
        .at-glow      { animation: at-glow 4s ease-in-out infinite; }
        .at-ripple    { animation: at-ripple 3.6s ease-out infinite; }
        .at-ripple-2  { animation-delay: 1.8s; }
        .at-shimmer   { animation: at-shimmer 4.5s ease-in-out infinite; }
        .at-twinkle   { animation: at-twinkle 3s ease-in-out infinite; }
        .at-beat      { animation: at-beat 1.8s ease-in-out infinite; }
        .at-drift     { animation: at-drift 7s ease-in infinite; }
        @media (prefers-reduced-motion: reduce) {
          .at-fade-up, .at-float, .at-spin, .at-glow, .at-ripple,
          .at-shimmer, .at-twinkle, .at-beat, .at-drift { animation: none !important; }
        }
      `}</style>

      {/* Soft background blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Text side ---------- */}
        <div className="text-center lg:text-left">
          <p className="at-fade-up mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-px w-8 bg-teal-600/60" />
            A Legacy of Compassion
          </p>

          <h2 className="at-fade-up at-delay-1 text-3xl font-extrabold leading-tight text-[#203f86] sm:text-4xl">
            Remembering Kai. Ashwini Bargale Mam
          </h2>

          <p className="at-fade-up at-delay-2 mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 lg:mx-0">
            Her memory inspires our commitment to compassionate care, dignity
            and hope for individuals and families affected by addiction and
            serious illness. We continue working towards a healthier,
            addiction-free society.
          </p>

          <div className="at-fade-up at-delay-3">
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#203f86] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17336f] hover:shadow-lg"
            >
              Her Vision &amp; Legacy
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ---------- Photo side ---------- */}
        <div className="at-fade-up at-delay-2 flex justify-center">
          <div className="relative flex w-full max-w-[300px] flex-col items-center sm:max-w-[320px]">
            {/* Ripple rings behind the photo */}
            <span className="at-ripple pointer-events-none absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-500/40" />
            <span className="at-ripple at-ripple-2 pointer-events-none absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#203f86]/30" />

            {/* Glow */}
            <div className="at-glow pointer-events-none absolute left-1/2 top-[42%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-200 via-teal-200 to-blue-200 blur-3xl" />

            {/* Floating sparkles */}
            <span className="at-twinkle absolute -left-3 top-6 text-lg text-amber-500">✦</span>
            <span
              className="at-twinkle absolute -right-2 top-20 text-sm text-teal-600"
              style={{ animationDelay: "1s" }}
            >
              ✦
            </span>
            <span
              className="at-twinkle absolute -left-1 top-[55%] text-xs text-[#203f86]"
              style={{ animationDelay: "2s" }}
            >
              ✦
            </span>

            {/* Rising light particles */}
            <span
              className="at-drift absolute bottom-24 left-6 h-1.5 w-1.5 rounded-full bg-amber-400"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="at-drift absolute bottom-20 right-8 h-1 w-1 rounded-full bg-teal-400"
              style={{ animationDelay: "2.5s" }}
            />
            <span
              className="at-drift absolute bottom-28 left-1/2 h-1.5 w-1.5 rounded-full bg-blue-300"
              style={{ animationDelay: "4.5s" }}
            />

            {/* Photo with rotating gradient border, gently floating */}
            <div className="at-float relative w-full">
              <div className="relative overflow-hidden rounded-[1.75rem] p-[3px] shadow-xl">
                {/* spinning gradient ring */}
                <div
                  className="at-spin absolute -inset-[60%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #203f86, #14b8a6, #f59e0b, #203f86)",
                  }}
                />
                <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
                  <Image
                    src="/images/ashwini_ji_image.jpeg"
                    alt="Kai. Ashwini Bargale Mam"
                    width={700}
                    height={850}
                    priority
                    className="aspect-[4/5] w-full object-cover object-top"
                    sizes="(max-width: 640px) 300px, 320px"
                  />
                  {/* soft bottom fade so the badge blends in */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Name badge — centered, overlapping the photo bottom */}
              <div className="absolute inset-x-0 -bottom-8 flex justify-center px-3">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/70 bg-white/95 px-4 py-3.5 text-center shadow-xl backdrop-blur">
                  {/* shimmer sweep */}
                  <span className="at-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/70 to-transparent" />

                  {/* top accent bar */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#203f86] via-teal-500 to-amber-500" />

                  <p className="relative flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">
                    <span className="h-px w-5 bg-teal-600/50" />
                    <span className="at-beat inline-block text-rose-500">♥</span>
                    Forever in Our Hearts
                    <span className="at-beat inline-block text-rose-500" style={{ animationDelay: ".4s" }}>♥</span>
                    <span className="h-px w-5 bg-teal-600/50" />
                  </p>

                  <p className="relative mt-1.5 text-lg font-extrabold leading-tight text-[#203f86]">
                    Kai. Ashwini Bargale Mam
                  </p>

                  <div className="relative mt-2 flex items-center justify-center gap-2">
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
                    <span className="text-xs text-amber-500">✦</span>
                    <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* spacer so the overlapping badge doesn't collide with content below */}
            <div className="h-10" />
          </div>
        </div>
      </div>

      {/* ---------- Quote strip ---------- */}
      <div className="at-fade-up at-delay-4 relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl bg-[#eef7f5] px-6 py-8 text-center">
        <span className="at-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <p className="relative text-lg font-semibold leading-relaxed text-[#203f86] sm:text-2xl">
          A healthier, pain-free society begins with compassion, dignity and
          hope.
        </p>
      </div>
    </section>
  );
}