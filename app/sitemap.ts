import type { MetadataRoute } from "next";
import { PROGRAMMES, SCHOOLS, RESEARCH_DEPARTMENTS } from "@/lib/constants";

const BASE_URL = "https://maktabahjafariyah.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/academics/programmes",
    "/academics/schools-centres",
    "/research",
    "/media",
    "/admission",
    "/student-corner",
    "/people",
    "/amenities",
    "/institutions",
    "/our-responsibility",
  ];

  const programmePages = PROGRAMMES.map((p) => p.href);
  const schoolPages = SCHOOLS.filter((s) =>
    s.href.startsWith("/academics"),
  ).map((s) => s.href);
  const researchPages = RESEARCH_DEPARTMENTS.map((d) => d.href);

  const allPages = [
    ...staticPages,
    ...programmePages,
    ...schoolPages,
    ...researchPages,
  ];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
