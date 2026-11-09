import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/config/site";
import { ServiceWorkerRegistration } from "@/components/pwa/ServiceWorkerRegistration";
import { services } from "@/config/services";
import { faqs } from "@/config/faqs";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/images/cardinal-bird.png`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phones.map(({ display }) => display),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mahaveer Pura",
      addressLocality: "Morena",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Morena", "Gwalior", "Chambal region", "India"],
    founder: [
      { "@type": "Person", name: "Krishna Gupta" },
      { "@type": "Person", name: "Prem Gupta" },
    ],
    sameAs: [siteConfig.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.short,
          areaServed: ["Morena", "Gwalior", "Chambal region", "India"],
          provider: { "@type": "ProfessionalService", name: siteConfig.name },
        },
      })),
    },
    // TODO: Add verified business opening hours when provided.
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    url: `${siteConfig.url}/`,
    logo: `${siteConfig.url}/images/cardinal-bird.png`,
    founder: ["Krishna Gupta", "Prem Gupta"],
    sameAs: [siteConfig.instagram],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: "en-IN",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://blackcardinal.in"),
  manifest: "/site.webmanifest",
  title: {
    default: "Black Cardinal - Digital Marketing Agency Morena",
    template: "%s | Black Cardinal",
  },
  description: siteConfig.description,
  applicationName: "Black Cardinal",
  keywords: [
    "Black Cardinal",
    "Digital Marketing Agency Morena",
    "Digital Marketing Morena",
    "SEO Agency Morena",
    "Social Media Marketing Morena",
    "Website Development Morena",
    "Branding Agency Morena",
  ],
  robots: { index: true, follow: true },
  other: { "google-site-verification": "TODO_REPLACE_WITH_SEARCH_CONSOLE_TOKEN" },
  openGraph: {
    title: "Black Cardinal - Digital Marketing Agency Morena",
    description: "Lead Without Following. Digital marketing, branding, SEO and web development by Black Cardinal.",
    url: "https://blackcardinal.in",
    siteName: "Black Cardinal",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Black Cardinal — digital marketing agency in Morena" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Cardinal - Digital Marketing Agency Morena",
    description: "Lead Without Following. We build brands and drive digital growth.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap"
        />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Morena" />
      </head>
      <body>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
          />
        ))}
        <ServiceWorkerRegistration />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
