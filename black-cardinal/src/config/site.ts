export const siteConfig = {
  name: "Black Cardinal",
  tagline: "Make Your Brand Impossible to Ignore.",
  headline: "Make Your Brand Impossible to Ignore.",
  description:
    "Black Cardinal is a digital marketing agency in Morena. SEO, social media, website development, branding & Google Business Profile to get you more leads.",
  email: "blackcardinal004@gmail.com",
  location: "Mahaveer Pura, Morena, Madhya Pradesh, India",
  phones: [
    { display: "+91 70674 92239", href: "tel:+917067492239", whatsapp: "917067492239" },
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
    { label: "Our Work", href: "/#work" },
    { label: "Contact", href: "/contact" }
  ]
};
