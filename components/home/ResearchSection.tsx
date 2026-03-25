import Link from "next/link";
import ResearchCard from "@/components/ui/ResearchCard";
import { RESEARCH_DEPARTMENTS } from "@/lib/constants";

export default function ResearchSection() {
  return (
    <section className="bg-[#82c341] py-10 sm:py-14 lg:py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-baseline sm:gap-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[48px]">
              Research
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white sm:text-base">
              Driving discoveries that shape our world, advance our health, and
              enrich intellectual life.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {RESEARCH_DEPARTMENTS.map((dept) => (
              <ResearchCard key={dept.slug} department={dept} />
            ))}
          </div>

          {/* Know More button */}
          <div className="mt-10 text-center sm:mt-14">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 border border-white px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#82c341]"
            >
              Know More
              <svg
                className="h-4 w-4 -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
      </div>
    </section>
  );
}
