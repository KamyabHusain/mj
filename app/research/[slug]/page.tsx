import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTAButton from "@/components/ui/CTAButton";
import { RESEARCH_DEPARTMENTS } from "@/lib/constants";

interface ResearchDetailProps {
  params: Promise<{ slug: string }>;
}

const RESEARCH_DETAILS: Record<string, { content: string[] }> = {
  "international-journals-of-maktabah-jafariyah": {
    content: [
      "This initiative by Maktabah Jafariyah, through the 'International Journal of Maktabah Jafariyah', showcases our efforts to foster a culture of research and intellectual exploration.",
      "By providing a platform for scholarly discourse and the dissemination of knowledge, we aim to contribute to the advancement of research and development of new perspectives in various fields.",
    ],
  },
  "tibb-research-department": {
    content: [
      "The primary objective of the Tibb Research Department is to understand the wisdom embedded in the ancient medicinal systems and to reframe it within the modern context.",
      "This mission is particularly relevant in an era dominated by scientific reductionism, where healthcare and medical practices often focus on dissecting complex processes into their components. Unani medicine, with its holistic approach, seeks to view the human body as an interconnected system, with health dependent on the balance of bodily humors.",
    ],
  },
  "department-of-agriculture-animal-husbandry": {
    content: [
      "The department works for two of the most traditional occupations and bedrocks of Indian people: farming, and animal husbandry.",
      "The main objective of this department is to improve the outlook towards agriculture and animal husbandry, propagate its importance, develop skills related to animal husbandry among cattle rearers, as well as improve farming practices. It aims to achieve this by giving relevant training to farmers and cattle rearers and equipping them with relevant useful information.",
    ],
  },
};

export async function generateStaticParams() {
  return RESEARCH_DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: ResearchDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const dept = RESEARCH_DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept) return {};
  return {
    title: `${dept.title} | Research | Maktabah Jafariyah`,
    description: RESEARCH_DETAILS[slug]?.content[0] ?? dept.description,
  };
}

export default async function ResearchDetailPage({
  params,
}: ResearchDetailProps) {
  const { slug } = await params;
  const dept = RESEARCH_DEPARTMENTS.find((d) => d.slug === slug);
  const details = RESEARCH_DETAILS[slug];

  if (!dept || !details) notFound();

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{dept.title}</h1>
          <Breadcrumb
            items={[
              { label: "Research", href: "/research" },
              { label: dept.title },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">{dept.title}</h2>
            {details.content.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-text-muted">
                {para}
              </p>
            ))}
            <div className="mt-8">
              <CTAButton href="/research">Back to Research</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
