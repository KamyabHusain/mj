import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeInit } from "@/.flowbite-react/init";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maktabah Jafariyah - Knowledge & Research Academy",
  description:
    "Maktabah Jafariyah is a research-driven knowledge academy providing modern education with traditional values, creating employment opportunities and inculcating good character.",
  metadataBase: new URL("https://maktabahjafariyah.org"),
  openGraph: {
    title: "Maktabah Jafariyah - Knowledge & Research Academy",
    description:
      "A research-driven knowledge academy providing modern education with traditional values.",
    url: "https://maktabahjafariyah.org",
    siteName: "Maktabah Jafariyah",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeInit />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
