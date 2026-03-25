import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ProgrammeCard from "@/components/ui/ProgrammeCard";
import { PROGRAMMES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Programmes | Maktabah Jafariyah",
  description:
    "Explore diverse academic programmes at Maktabah Jafariyah — from Schooling to Post-Graduation, curated to advance your career.",
};

export default function ProgrammesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Academics</h1>
          <Breadcrumb
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Programmes" },
            ]}
          />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold">Programmes</h2>
            <p className="leading-relaxed text-text-muted">
              At Maktabah Jafariyah, we pride ourselves on offering a
              comprehensive educational journey that spans from the formative
              years of kindergarten through to advanced postgraduate studies.
              Our diverse academic programmes are meticulously designed to
              foster intellectual growth, personal development, and
              professional excellence at every stage of learning.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Guided by our unwavering commitment to nurturing responsible
              citizens of tomorrow, we place a strong emphasis on value-based
              education. Our &ldquo;learning-focused&rdquo; approach is at the
              heart of everything we do.
            </p>
          </div>

          <h3 className="mb-6 text-xl font-bold">
            Explore our wide array of programmes
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMMES.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
