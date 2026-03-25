import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { RESEARCH_DEPARTMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Research Initiatives | Maktabah Jafariyah",
  description:
    "Explore research initiatives at Maktabah Jafariyah — International Journals, Tibb Research Department, and Department of Agriculture & Animal Husbandry.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Research</h1>
          <Breadcrumb items={[{ label: "Research" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {RESEARCH_DEPARTMENTS.map((dept, index) => (
              <article
                key={dept.slug}
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:direction-rtl" : ""}`}
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                    {dept.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-text-muted">
                    {dept.description}
                  </p>
                  <Link
                    href={dept.href}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                  >
                    Know More
                    <svg
                      className="h-4 w-4"
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
                <div
                  className={`aspect-video rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
