export const siteConfig = {
  name: "Black Cardinal",
  tagline: "Lead Without Following.",
  headline: "Make Your Brand Impossible to Ignore.",
  description:
    "Black Cardinal helps ambitious businesses build stronger brands, sharper digital experiences and more meaningful customer connections.",
  email: "blackcardinal004@gmail.com",
  location: "India",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ]
};
