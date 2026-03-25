import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTAButton from "@/components/ui/CTAButton";
import { SCHOOLS } from "@/lib/constants";

interface SchoolPageProps {
  params: Promise<{ slug: string }>;
}

const SCHOOL_DETAILS: Record<string, { description: string[] }> = {
  "school-of-arts": {
    description: [
      "The School of Arts at Maktabah Jafariyah offers programmes in English, Gujarati, Home Science, Psychology, Economics, Urdu, Arabic, and Persian.",
      "Our arts programmes are designed to develop analytical thinking, communication skills, and cultural awareness.",
    ],
  },
  "school-of-commerce": {
    description: [
      "The School of Commerce provides a strong foundation in accounting, finance, and business studies.",
      "Students gain practical knowledge through case studies, industry interactions, and hands-on projects.",
    ],
  },
  "school-of-science": {
    description: [
      "The School of Science offers programmes in Mathematics, Physics, Chemistry, Botany, Microbiology, and Microtechnology.",
      "With well-equipped laboratories and experienced faculty, students are prepared for careers in research and industry.",
    ],
  },
  "school-of-computer-science": {
    description: [
      "The School of Computer Science equips students with cutting-edge technology skills through programmes like BCA.",
      "Students learn programming, software development, database management, and emerging technologies.",
    ],
  },
  "school-of-engineering-technology": {
    description: [
      "The School of Engineering & Technology offers programmes that combine theoretical knowledge with practical application.",
      "Students gain hands-on experience in modern labs and workshops, preparing them for careers in engineering and technology.",
    ],
  },
  "school-of-management": {
    description: [
      "The School of Management offers MBA and other management programmes designed to create industry-ready leaders.",
      "With a focus on entrepreneurship, business strategy, and innovation, graduates are equipped to lead in the modern business world.",
    ],
  },
  "industrial-technical-institute": {
    description: [
      "The Industrial Technical Institute offers ITI courses in Electrician, Welder, Fitter, and COPA trades.",
      "These programmes provide skilled technical education that opens doors to immediate employment opportunities.",
    ],
  },
};

export async function generateStaticParams() {
  return SCHOOLS.filter((s) => SCHOOL_DETAILS[s.slug]).map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: SchoolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const school = SCHOOLS.find((s) => s.slug === slug);
  if (!school) return {};
  return {
    title: `${school.title} | Maktabah Jafariyah`,
    description: SCHOOL_DETAILS[slug]?.description[0] ?? "",
  };
}

export default async function SchoolPage({ params }: SchoolPageProps) {
  const { slug } = await params;
  const school = SCHOOLS.find((s) => s.slug === slug);
  const details = SCHOOL_DETAILS[slug];

  if (!school || !details) notFound();

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{school.title}</h1>
          <Breadcrumb
            items={[
              { label: "Academics", href: "/academics" },
              {
                label: "Schools & Centres",
                href: "/academics/schools-centres",
              },
              { label: school.title },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">{school.title}</h2>
            {details.description.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-text-muted">
                {para}
              </p>
            ))}
            <div className="mt-8">
              <CTAButton href="/admission">Apply Now</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
