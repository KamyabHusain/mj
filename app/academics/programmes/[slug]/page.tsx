import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTAButton from "@/components/ui/CTAButton";
import { PROGRAMMES } from "@/lib/constants";

interface ProgrammePageProps {
  params: Promise<{ slug: string }>;
}

const PROGRAMME_DETAILS: Record<
  string,
  { heading: string; content: string[] }
> = {
  schooling: {
    heading: "Schooling",
    content: [
      "Our schooling programme provides holistic K-12 education fostering lifelong learning and personal growth. From pre-primary to higher secondary, we nurture young minds with a blend of modern pedagogy and traditional values.",
      "The curriculum is designed to develop critical thinking, creativity, and character in students, preparing them for higher education and beyond.",
    ],
  },
  graduation: {
    heading: "Graduation",
    content: [
      "Our undergraduate programmes cultivate critical thinking and drive positive change. With offerings in Arts, Commerce, Science, BCA, and more, students gain deep knowledge in their chosen fields.",
      "Practical exposure through industry visits, seminars, and project-based learning ensures graduates are job-ready and intellectually equipped.",
    ],
  },
  "post-graduation": {
    heading: "Post-Graduation",
    content: [
      "Our expertise-building programmes create impactful industry leaders. The MBA programme and other postgraduate courses provide advanced knowledge and leadership skills.",
      "With research-oriented teaching and industry connections, our postgraduate students emerge as professionals ready to make a difference.",
    ],
  },
  "ongoing-learning": {
    heading: "Ongoing Learning",
    content: [
      "Flexible learning options to make education accessible for everyone. Our ongoing learning programmes include diploma courses, certificate programmes, and short-term skill development courses.",
      "These programmes are designed for working professionals and lifelong learners who wish to upgrade their skills or explore new fields of knowledge.",
    ],
  },
};

export async function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProgrammePageProps): Promise<Metadata> {
  const { slug } = await params;
  const details = PROGRAMME_DETAILS[slug];
  if (!details) return {};
  return {
    title: `${details.heading} | Programmes | Maktabah Jafariyah`,
    description: details.content[0],
  };
}

export default async function ProgrammePage({ params }: ProgrammePageProps) {
  const { slug } = await params;
  const details = PROGRAMME_DETAILS[slug];
  const programme = PROGRAMMES.find((p) => p.slug === slug);

  if (!details || !programme) notFound();

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{details.heading}</h1>
          <Breadcrumb
            items={[
              { label: "Academics", href: "/academics" },
              { label: "Programmes", href: "/academics/programmes" },
              { label: details.heading },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">{details.heading}</h2>
            {details.content.map((para, i) => (
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
