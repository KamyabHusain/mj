"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Header border bar */}
      <div className="h-[10px] w-full bg-[#44535b] sm:h-[42px]" />

      {/* Logo + Admission + Hamburger bar */}
      <div className="bg-[#f7f7f7]">
        <div className="mx-auto flex h-[94px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="https://maktabahjafariyah.org/wp-content/themes/maktaba/img/Maktabah_Logo.svg"
              alt="Maktabah Jafariyah Logo"
              width={236}
              height={60}
              priority
              unoptimized
              className="h-auto w-[150px] sm:w-[236px]"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/admission"
              className="flex h-[42px] w-[140px] items-center justify-center bg-[#82c341] text-xs font-medium text-white transition-colors hover:bg-[#74b038] sm:w-[191px] sm:text-lg sm:font-semibold"
            >
              For Admission
            </Link>
            {/* Hamburger (mobile/tablet only) */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center p-1 text-[#44535b] lg:hidden"
              aria-label="Open menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop navbar */}
      <Navbar />

      {/* Mobile drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
