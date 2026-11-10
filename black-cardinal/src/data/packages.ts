// Edit price, duration, features, bonus, or CTA text here; the homepage cards update from this data.
export type PackagePlan = {
  id: string;
  name: string;
  price: number;
  duration: string;
  tagline: string;
  features: string[];
  bonus: string;
  cta: string;
  highlight?: boolean;
  badge?: string;
};

export const packages: PackagePlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 499,
    duration: "3-4 days",
    tagline: "Get found on Google. A low-risk way to start.",
    features: [
      "Google Business Profile basic setup or verification (category, timing, phone, location)",
      "3 photos uploaded",
      "Instagram or Facebook profile setup (bio, profile picture, link)",
      "1 revision",
    ],
    bonus: "Physical QR Google review stand",
    cta: "Start for ₹499",
  },
  {
    id: "growth",
    name: "Growth",
    price: 1499,
    duration: "7 days",
    tagline: "Look professional and get your first reviews.",
    features: [
      "Everything in Starter",
      "Full Google Business Profile (8-10 photos, services list, description)",
      "5 social media posts with captions",
      "3 branding templates (post, story, offer)",
      "1 revision",
    ],
    bonus: "Physical QR Google review stand",
    cta: "Choose Growth",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "complete",
    name: "Complete",
    price: 4999,
    duration: "30 days",
    tagline: "A full local presence in one month.",
    features: [
      "Everything in Growth",
      "One-page mobile-friendly website (services, photos, map, reviews, WhatsApp and call buttons, basic SEO)",
      "15 social media posts over 30 days",
      "Logo cleanup + 3 branding templates",
      "2 revisions",
      "Final report on day 30 (reviews gained, profile views) with next-step suggestions",
    ],
    bonus: "Physical NFC Google review card (tap to open review page)",
    cta: "Choose Complete",
    badge: "Best Value",
  },
];

export const packagesConfig = {
  slotsNote: "Founding client pricing for our first clients. Prices will increase.",
};
