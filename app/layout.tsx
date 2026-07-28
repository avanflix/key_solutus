import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/data/company";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

// Manrope (headings) and Libertinus Math (body) are loaded via the <link> tags
// below rather than next/font/google, so the build never depends on reaching
// fonts.googleapis.com from this environment. Swap in next/font/google
// wherever your deployment target has open network access at build time.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keysolutus.com"),
  title: {
    default: "Keysolutus - Electrical Switchgear Design & Engineering Services",
    template: "%s | Keysolutus",
  },
  description: company.metaDescription,
  keywords: company.keywords,
  authors: [{ name: "Keysolutus" }],
  creator: "Keysolutus",
  publisher: "Keysolutus",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.keysolutus.com" },
  openGraph: {
    title: "Keysolutus - Electrical Switchgear Design & Engineering Services",
    description:
      "Expert electrical switchgear design and engineering solutions for safe, reliable, and efficient power distribution.",
    url: "https://www.keysolutus.com",
    siteName: "Keysolutus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keysolutus - Electrical Switchgear Design & Engineering Services",
    description:
      "Expert electrical switchgear design and engineering solutions for safe, reliable, and efficient power distribution.",
    creator: "@keysolutus",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Keysolutus",
  description: company.metaDescription,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Villa No : 178, Chitrapuri Row House Rd, Chitrapuri Colony",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500104",
    addressCountry: "IN",
  },
  sameAs: [company.social.linkedin, company.social.twitter, company.social.facebook],
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Libertinus+Math&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
