export const siteConfig = {
  name: "Black Cardinal",
  tagline: "Lead Without Following",
  headline: "Lead Without Following",
  description:
    "Black Cardinal is a digital marketing agency in Morena, helping businesses grow through influencer campaigns, digital marketing, branding, SEO, social media marketing, and web development. Lead Without Following.",
  email: "blackcardinalbusiness@gmail.com",
  location: "Mahaveer Pura, Morena, Madhya Pradesh, India",
  phones: [
    { display: "+91 88158 06560", href: "tel:+918815806560", whatsapp: "918815806560" },
    { display: "+91 87709 57964", href: "tel:+918770957964", whatsapp: "918770957964" },
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://blackcardinal.in",
  // PIN code intentionally omitted until supplied by the business.
  instagram: "https://www.instagram.com/blackcardinal1",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/#packages" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" }
  ]
};
