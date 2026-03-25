"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "https://maktabahjafariyah.org/wp-content/uploads/2024/10/home-banner-img.png",
    alt: "Maktabah Jafariyah Home Banner",
  },
  {
    src: "https://maktabahjafariyah.org/wp-content/uploads/2026/03/Conference-Postpone-Banner-scaled.png",
    alt: "Conference Banner",
  },
];

const AUTOPLAY_MS = 3000;
const TRANSITION_MS = 1500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [current, isTransitioning],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: `transform ${TRANSITION_MS}ms ease-in-out`,
        }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.src} className="w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={630}
              priority
              unoptimized
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === current
                ? "scale-110 bg-[#82c341]"
                : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
