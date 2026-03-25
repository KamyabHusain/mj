import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SCHOOLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Schools & Centres | Maktabah Jafariyah",
  description:
    "Explore the diverse schools and centres at Maktabah Jafariyah offering education across Arts, Commerce, Science, Engineering, Management and more.",
};

export default function SchoolsCentresPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Schools &amp; Centres
          </h1>
          <Breadcrumb
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Schools & Centres" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOOLS.map((school) => (
              <Link
                key={school.slug}
                href={school.href}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {school.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
