import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import EventCard from "@/components/ui/EventCard";
import { MEDIA_EVENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Media Centre: News & Events | Maktabah Jafariyah",
  description:
    "Discover the latest happenings at Maktabah Jafariyah, including upcoming events, exam schedules, and admission deadlines.",
};

export default function MediaPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Media</h1>
          <Breadcrumb items={[{ label: "Media" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">
            News, Events &amp; Announcements
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_EVENTS.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
