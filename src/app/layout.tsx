import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Noise from "@/components/layout/Noise";
import Aurora from "@/components/layout/Aurora";
import CustomCursor from "@/components/ui/CustomCursor";
import VelocityScroll from "@/components/layout/VelocityScroll";
import ParticleField from "@/components/layout/ParticleField";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const baseUrl = "https://amaanansari.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Amaan Ansari | Full Stack Developer & AI/ML Specialist",
    template: "%s | Amaan Ansari"
  },
  description: "Senior Full Stack Developer specializing in React, Node.js, AI/ML, and Cloud solutions. Building high-performance scalable web systems.",
  keywords: ["Amaan Ansari", "Full Stack Developer", "AI Engineer", "React Developer", "Next.js", "Node.js", "Uttarakhand Developer", "System Architect"],
  authors: [{ name: "Amaan Ansari" }],
  creator: "Amaan Ansari",
  publisher: "Amaan Ansari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://amaanansari.in/",
  },
  openGraph: {
    title: "Amaan Ansari | Full Stack Developer",
    description: "Senior Full Stack Developer specializing in React, Node.js, AI/ML, and Cloud solutions.",
    url: baseUrl,
    siteName: "Amaan Ansari Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amaan Ansari | Full Stack Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaan Ansari | Full Stack Developer",
    description: "Senior Full Stack Developer specializing in React, Node.js, AI/ML, and Cloud solutions.",
    creator: "@Amaanansari313",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "VpIgTucUWa4y8zblwMiLTvCHrKAitFX8Doamulm6pvI",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amaan Ansari",
    "url": baseUrl,
    "jobTitle": "Full Stack Developer",
    "knowsAbout": [
      "React", "Next.js", "Node.js", "Python", "FastAPI", "TensorFlow",
      "AI/ML", "AWS", "Docker", "PostgreSQL", "Tailwind CSS", "System Design"
    ],
    "description": "Senior Full Stack Developer specializing in React, Node.js, and AI solutions. Expert in building high-performance scalable systems."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amaan Ansari Portfolio",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Amaan Ansari Engineering",
    "image": `${baseUrl}/amaan.jpg`,
    "url": baseUrl,
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.3165,
      "longitude": 78.0322
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Noise />
          <Aurora />
          <ParticleField />
          <CustomCursor />
          <Header />
          <main className="flex-1 flex flex-col pt-16">
            <VelocityScroll>
              {children}
            </VelocityScroll>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
