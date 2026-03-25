import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Responsibility | Maktabah Jafariyah",
  description:
    "Learn about Maktabah Jafariyah's commitment to social responsibility, community development, and empowering the underprivileged through education.",
};

const INITIATIVES = [
  {
    title: "Free Education",
    description:
      "Providing quality education to underprivileged students free of cost, ensuring no child is left behind due to financial constraints.",
  },
  {
    title: "Skill Development",
    description:
      "Training programmes designed to equip youth with employable skills, fostering self-reliance and entrepreneurship.",
  },
  {
    title: "Community Health",
    description:
      "Health awareness campaigns and medical camps conducted through our Tibb Research Department for community welfare.",
  },
  {
    title: "Agricultural Support",
    description:
      "Training farmers and cattle rearers with relevant information and modern practices to improve their livelihoods.",
  },
  {
    title: "Women Empowerment",
    description:
      "Special programmes focused on empowering women through education, skill training, and self-help initiatives.",
  },
  {
    title: "Environmental Conservation",
    description:
      "Green campus initiatives and awareness programmes promoting environmental consciousness among students and community.",
  },
];

export default function OurResponsibilityPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Our Responsibility
          </h1>
          <Breadcrumb items={[{ label: "Our Responsibility" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold">Social Responsibility</h2>
            <p className="leading-relaxed text-text-muted">
              At Maktabah Jafariyah, we believe education is a powerful tool
              for social transformation. Our commitment extends beyond the
              classroom to create meaningful impact in the communities we
              serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INITIATIVES.map((initiative) => (
              <div
                key={initiative.title}
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold">{initiative.title}</h3>
                <p className="text-sm text-text-muted">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
