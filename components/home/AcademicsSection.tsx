"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import ProgrammeCard from "@/components/ui/ProgrammeCard";
import { PROGRAMMES } from "@/lib/constants";

const GAP = 20;
const VISIBLE_DESKTOP = 2.5;
const VISIBLE_MOBILE = 1;

export default function AcademicsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const maxOffset = Math.ceil(PROGRAMMES.length - (isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP));

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    const mobile = w < 640;
    setIsMobile(mobile);

    if (mobile) {
      setCardWidth(w);
    } else {
      const visible = VISIBLE_DESKTOP;
      setCardWidth((w - GAP * (visible - 0.5)) / visible);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setOffset((prev) => (prev >= PROGRAMMES.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-14 sm:py-20">
      {/* Watermark */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none"
      >
        <span className="text-[100px] font-bold leading-none text-[#dcdcdc] sm:text-[140px] lg:text-[180px]">
          Academics
        </span>
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Arrow buttons (desktop/tablet only) */}
        <div className="mb-6 hidden justify-end gap-3 sm:flex">
          <button
            type="button"
            onClick={prev}
            disabled={offset === 0}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#82c341] text-[#82c341] transition-colors hover:bg-[#82c341] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={offset >= maxOffset}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#82c341] text-[#82c341] transition-colors hover:bg-[#82c341] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Left: heading */}
          <div className="shrink-0 sm:w-[240px] lg:w-[300px]">
            <h2 className="text-3xl font-bold text-[#44535b] sm:text-4xl lg:text-[48px] lg:leading-tight">
              Academics
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#676767] sm:text-base">
              Explore diverse programmes curated to advance your career with our
              &ldquo;Learning&#8209;focused&rdquo; approach.
            </p>
          </div>

          {/* Right: slider */}
          <div ref={containerRef} className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${offset * (cardWidth + GAP)}px)`,
              }}
            >
              {PROGRAMMES.map((programme) => (
                <div
                  key={programme.slug}
                  className="shrink-0"
                  style={{ width: cardWidth || "100%" }}
                >
                  <ProgrammeCard programme={programme} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
