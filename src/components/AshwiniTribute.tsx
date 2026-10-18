
import Image from "next/image";
import Link from "next/link";

export default function AshwiniTribute() {
  return (
    <section className="bg-[#faf9f5] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            A Legacy of Compassion
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#203f86] sm:text-4xl">
            Remembering Kai. Ashwini Bargale Mam
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Her memory inspires our commitment to compassionate care,
            dignity and hope for individuals and families affected by
            addiction and serious illness. We continue working towards
            a healthier, addiction-free society.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#203f86] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17336f]"
          >
            Her Vision &amp; Legacy <span>→</span>
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/ashwini_ji_image.jpeg"
              alt="Kai. Ashwini Bargale Mam"
              width={700}
              height={850}
              className="aspect-[4/5] w-full object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Forever in Our Hearts
              </p>
              <p className="mt-1 font-bold text-[#203f86]">
                Kai. Ashwini Bargale Mam
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl rounded-3xl bg-[#eef7f5] px-6 py-8 text-center">
        <p className="text-lg font-semibold leading-relaxed text-[#203f86] sm:text-2xl">
          A healthier, pain-free society begins with compassion,
          dignity and hope.
        </p>
      </div>
    </section>
  );
}
