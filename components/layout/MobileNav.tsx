"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer - slides in from right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:max-w-[420px] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header: logo + close */}
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" onClick={onClose}>
            <Image
              src="https://maktabahjafariyah.org/wp-content/themes/maktaba/img/Maktabah_Logo.svg"
              alt="Maktabah Jafariyah Logo"
              width={200}
              height={50}
              unoptimized
              className="h-auto w-[180px]"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#44535b]"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="px-5 pb-8">
          {/* Home link */}
          <Link
            href="/"
            onClick={onClose}
            className="block py-3.5 text-base font-semibold text-[#44535b]"
          >
            Home
          </Link>

          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-[#44535b]"
                  >
                    {item.label}
                    <svg
                      className={`h-5 w-5 text-[#676767] transition-transform ${expandedItem === item.label ? "rotate-180" : ""}`}
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
                  </button>
                  {expandedItem === item.label && (
                    <div className="pb-3 pl-4">
                      {item.children.map((group) => (
                        <div key={group.title} className="mb-3">
                          <Link
                            href={group.href}
                            onClick={onClose}
                            className="mb-2 block text-sm font-semibold text-[#82c341]"
                          >
                            {group.title}
                          </Link>
                          <ul>
                            {group.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="block py-2 pl-4 text-sm text-[#44535b] hover:text-[#82c341]"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3.5 text-base font-semibold text-[#44535b]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
