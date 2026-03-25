"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="hidden bg-[#f7f7f7] lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Desktop nav links */}
        <ul className="flex items-center gap-0">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label} className="relative">
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  className="group relative flex items-center gap-1 px-4 py-4 text-lg font-medium text-[#676767] transition-colors hover:text-[#82c341]"
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#82c341] transition-transform group-hover:scale-x-100" />
                </button>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative block px-4 py-4 text-lg font-medium text-[#676767] transition-colors hover:text-[#82c341]"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#82c341] transition-transform group-hover:scale-x-100" />
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Search icon (desktop) */}
        <button
          type="button"
          className="rounded-md p-2 text-[#676767] hover:text-[#82c341]"
          aria-label="Search"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      {/* Mega menu dropdown */}
      {megaMenuOpen && (
        <div ref={megaMenuRef}>
          <MegaMenu onClose={() => setMegaMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}
