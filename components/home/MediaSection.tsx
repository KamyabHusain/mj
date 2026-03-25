import Link from "next/link";
import EventCard from "@/components/ui/EventCard";
import { MEDIA_EVENTS } from "@/lib/constants";

export default function MediaSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-14 sm:py-20">
      {/* Watermark */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-8 select-none sm:top-4"
      >
        <span className="text-[100px] font-bold leading-none text-[#dcdcdc] sm:text-[140px] lg:text-[180px]">
          Media
        </span>
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-baseline sm:gap-8">
          <h2 className="text-3xl font-bold text-[#82c341] sm:text-4xl lg:text-[48px]">
            Media
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#676767] sm:text-base">
            Discover the latest happenings on our campus, including upcoming
            events, exam schedules, and admission deadlines.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-10">
          {MEDIA_EVENTS.slice(0, 6).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        {/* View More button */}
        <div className="mt-10 text-center sm:mt-14">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 border border-[#82c341] px-7 py-3.5 text-sm font-medium text-[#82c341] transition-colors hover:bg-[#82c341] hover:text-white"
          >
            View More
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
