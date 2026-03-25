import Link from "next/link";
import type { MediaEvent } from "@/lib/types";

interface EventCardProps {
  event: MediaEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={event.href} className="group block">
      {/* Category + Date pills */}
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-[#82c341] px-4 py-1 text-xs font-medium text-white">
          {event.category}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#44535b] px-4 py-1 text-xs font-medium text-white">
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          {event.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-1.5 text-base font-bold leading-snug text-[#44535b] transition-colors group-hover:text-[#82c341] sm:text-lg">
        {event.title}
      </h3>

      {/* Department */}
      <p className="text-xs leading-relaxed text-[#838383] sm:text-sm">
        {event.department}
      </p>
    </Link>
  );
}
