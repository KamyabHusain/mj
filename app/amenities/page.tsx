import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Amenities | Maktabah Jafariyah",
  description:
    "Explore the modern amenities and facilities at Maktabah Jafariyah campus — library, labs, sports, hostel and more.",
};

const AMENITIES = [
  {
    title: "Library",
    description:
      "An extensive collection of books, journals, and digital resources to support learning and research.",
  },
  {
    title: "Computer Labs",
    description:
      "State-of-the-art computer laboratories equipped with latest hardware and software.",
  },
  {
    title: "Science Laboratories",
    description:
      "Well-equipped physics, chemistry, and biology labs for hands-on experimentation.",
  },
  {
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports facilities encouraging physical fitness and team spirit.",
  },
  {
    title: "Hostel",
    description:
      "Comfortable residential facilities for students from out-of-town with nutritious meals.",
  },
  {
    title: "Auditorium",
    description:
      "A spacious auditorium for seminars, conferences, cultural events, and ceremonies.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Amenities</h1>
          <Breadcrumb items={[{ label: "Amenities" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold">Campus Amenities</h2>
            <p className="leading-relaxed text-text-muted">
              Maktabah Jafariyah provides modern amenities and infrastructure
              to ensure a comprehensive and comfortable learning experience for
              all students.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">{amenity.title}</h3>
                <p className="text-sm text-text-muted">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
