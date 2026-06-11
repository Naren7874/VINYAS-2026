import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinyas2026iiid.com"),
  title: {
    default: "VINYAS 2026 | IIID Charotar Building Material & Interior Expo",
    template: "%s | VINYAS 2026",
  },
  description:
    "Join VINYAS 2026, the premier Building Material & Interior Products Expo by IIID Charotar Centre (Dec 18-20, 2026). Explore exhibitor guidelines, strategic sponsorship packages, and stall layouts.",
  keywords: [
    "VINYAS",
    "VINYAS 2026",
    "IIID Charotar Showcase",
    "IIID Charotar Centre",
    "Building Material Expo 2026",
    "Interior Products Exhibition",
    "Architects Expo Gujarat",
    "Vinyas IIID",
    "Indian Institute of Interior Designers",
    "Stall Booking Vinyas",
    "Kamal Patel IIID",
    "Maulik Pavagadhi",
  ],
  authors: [{ name: "IIID Charotar Centre", url: "https://vinyas2026iiid.com" }],
  creator: "IIID Charotar Centre",
  publisher: "IIID Charotar Centre",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinyas2026iiid.com",
    title: "VINYAS 2026 | IIID Charotar Building Material & Interior Expo",
    description:
      "Join VINYAS 2026, the premier Building Material & Interior Products Expo by IIID Charotar Centre. Explore exhibitor packages, guidelines, and sponsorships.",
    siteName: "VINYAS 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "VINYAS 2026 | IIID Charotar Building Material & Interior Expo",
    description:
      "Join VINYAS 2026, the premier Building Material & Interior Products Expo by IIID Charotar Centre. Explore exhibitor packages, guidelines, and sponsorships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "VINYAS 2026 | IIID Charotar Building Material & Interior Products Expo",
    "startDate": "2026-12-18T11:00:00+05:30",
    "endDate": "2026-12-20T22:00:00+05:30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "IIID Charotar AC Dome",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Anand",
        "addressRegion": "Gujarat",
        "addressCountry": "IN",
      },
    },
    "image": [
      "https://vinyas2026iiid.com/icon.jpeg"
    ],
    "description":
      "VINYAS 2026 is the landmark Building Material & Interior Products exhibition organized by IIID Charotar Centre from December 18th to 20th, 2026, featuring 25,000+ visitors and key industry leaders.",
    "organizer": {
      "@type": "Organization",
      "name": "IIID Charotar Centre",
      "url": "https://vinyas2026iiid.com",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "195000",
      "highPrice": "225000",
      "offerCount": "2",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
