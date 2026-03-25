import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdmissionForm from "@/components/forms/AdmissionForm";

export const metadata: Metadata = {
  title: "Admission | Maktabah Jafariyah",
  description:
    "Apply for admission to Maktabah Jafariyah — Knowledge & Research Academy. Programmes available from Schooling to Post-Graduation.",
};

export default function AdmissionPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Admission</h1>
          <Breadcrumb items={[{ label: "Admission" }]} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">Admission Form</h2>
          <AdmissionForm />
        </div>
      </section>
    </>
  );
}
