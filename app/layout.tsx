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
    default: "VINYAS 2026 | Premier Design & Architecture",
    template: "%s | VINYAS 2026",
  },
  description:
    "VINYAS 2026 is a premium architectural design studio and portfolio, showcasing cutting-edge spatial concepts, sustainable structural innovation, and future design landscapes.",
  keywords: [
    "VINYAS",
    "VINYAS 2026",
    "Vinyas Design",
    "Vinyas Architecture",
    "Design Studio 2026",
    "Architecture India",
    "Sustainable Spatial Design",
    "Modern Architecture Portfolio",
  ],
  authors: [{ name: "VINYAS 2026", url: "https://vinyas2026iiid.com" }],
  creator: "VINYAS 2026",
  publisher: "VINYAS 2026",
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
    title: "VINYAS 2026 | Premier Design & Architecture",
    description:
      "VINYAS 2026 is a premium architectural design studio and portfolio, showcasing cutting-edge spatial concepts and sustainable structural innovation.",
    siteName: "VINYAS 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "VINYAS 2026 | Premier Design & Architecture",
    description:
      "VINYAS 2026 is a premium architectural design studio and portfolio, showcasing cutting-edge spatial concepts and sustainable structural innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VINYAS 2026",
    "url": "https://vinyas2026iiid.com",
    "logo": "https://vinyas2026iiid.com/logo.png",
    "description":
      "VINYAS 2026 is a premier design and architectural agency specializing in sustainable structures, spatial composition, and modern design philosophy.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
