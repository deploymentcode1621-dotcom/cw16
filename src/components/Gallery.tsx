"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/hero-banner.jpg", alt: "Bargale Hospital & S.S. Centre signage" },
  { src: "/images/banner-info.jpg", alt: "Centre information banner" },
  { src: "/images/gallery-1.jpg", alt: "Facility highlights" },
  { src: "/images/gallery-2.jpg", alt: "Palliative care information" },
  { src: "/images/gallery-3.jpg", alt: "Centre rules and timings" },
  { src: "/images/gallery-4.jpg", alt: "Daily routine schedule" },
  { src: "/images/gallery-5.jpg", alt: "Admission procedure" },
  { src: "/images/gallery-6.jpg", alt: "Centre overview and contact" },
  { src: "/images/logo-bargale.jpg", alt: "Bargale Hospital logo" },
  { src: "/images/logo-ss.jpg", alt: "S.S. De-Addiction & Palliative Care Centre logo" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setActiveIndex(i)}
            className="mb-4 block w-full break-inside-avoid rounded-soft overflow-hidden border border-primary/10 shadow-card hover:opacity-90 transition-opacity"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={close}
          >
            <X size={30} />
          </button>
          <button
            aria-label="Previous image"
            className="absolute left-3 md:left-8 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative max-w-3xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            aria-label="Next image"
            className="absolute right-3 md:right-8 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
