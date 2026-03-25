import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "People | Maktabah Jafariyah",
  description:
    "Meet the dedicated team of faculty, staff, and leadership driving excellence at Maktabah Jafariyah.",
};

const LEADERSHIP = [
  {
    name: "Founder",
    title:
      "Hazrat Alhaj Pir Syed Mohammad MujahidHusain Jafri (ra.)",
    description:
      "The visionary founder who laid the foundation stone on Thursday 22nd November 2007.",
  },
];

export default function PeoplePage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">People</h1>
          <Breadcrumb items={[{ label: "People" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold">Our Leadership</h2>
            <p className="leading-relaxed text-text-muted">
              Maktabah Jafariyah is led by a team of dedicated individuals
              committed to providing quality education and fostering research
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">
                    {person.name[0]}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold">{person.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  {person.name}
                </p>
                <p className="text-sm text-text-muted">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
