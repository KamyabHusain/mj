"use client";

import { useState } from "react";
import Image from "next/image";

const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/E0YQHevIqeU?autoplay=1&rel=0&loop=1&playlist=E0YQHevIqeU";
const POSTER =
  "https://maktabahjafariyah.org/wp-content/themes/maktaba/img/video-poster.jpeg";

export default function VideoTourSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full">
        {/* Poster image */}
        <Image
          src={POSTER}
          alt="Video Tour of Maktabah Jafariyah"
          width={1920}
          height={700}
          unoptimized
          className="h-[350px] w-full object-cover sm:h-[500px] lg:h-[700px]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#17232c]/70" />

        {/* Play button + title */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
          {/* Animated rings */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative flex items-center justify-center"
            aria-label="Play video tour"
          >
            {/* Outer pulsing ring */}
            <span className="absolute h-[76px] w-[76px] animate-[wave_2s_infinite_linear] rounded-full bg-white/40" />
            {/* Inner ring */}
            <span className="absolute h-[62px] w-[62px] rounded-full bg-white/40" />
            {/* Play icon circle */}
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <svg
                className="h-6 w-6 text-[##82c341]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>

          <h4 className="text-center text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
            Video Tour of Maktabah Jafariyah
          </h4>
        </div>
      </section>

      {/* YouTube modal */}
      {open && (
        <div
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative h-[60vh] w-[90vw] max-w-[900px] overflow-hidden rounded-xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-1 right-4 z-10 text-5xl leading-none text-white hover:text-gray-300"
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              src={YOUTUBE_EMBED}
              className="h-full w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Tour of Maktabah Jafariyah"
            />
          </div>
        </div>
      )}
    </>
  );
}
