import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./constants";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title = overrides.title
    ? `${overrides.title} | ${SITE_NAME}`
    : `${SITE_NAME} - ${SITE_TAGLINE}`;

  return {
    title,
    description:
      overrides.description ??
      "Maktabah Jafariyah is a research-driven knowledge academy providing modern education with traditional values.",
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description:
        (overrides.description as string) ??
        "Maktabah Jafariyah is a research-driven knowledge academy providing modern education with traditional values.",
      url: SITE_URL,
      siteName: SITE_NAME,
      type: "website",
      ...(overrides.openGraph ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        (overrides.description as string) ??
        "Maktabah Jafariyah is a research-driven knowledge academy providing modern education with traditional values.",
      ...(overrides.twitter ?? {}),
    },
    ...overrides,
  };
}
