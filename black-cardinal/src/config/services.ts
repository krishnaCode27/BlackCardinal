export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  outcomes: string[];
  offerings: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "A connected strategy that brings your brand, channels and growth goals together.",
    intro: "Build a clearer digital presence with coordinated campaigns, useful content and performance-led decisions. We start with your audience and business goals, then shape a plan around the channels that make sense.",
    outcomes: ["A more consistent brand presence", "Clearer campaign measurement", "Better alignment between marketing activity and business goals"],
    offerings: ["Digital strategy and channel planning", "Campaign planning and execution", "Audience and competitor research", "Analytics and performance reporting"],
    process: ["Discover your goals and audience", "Build a focused channel strategy", "Launch, measure and learn", "Refine activity using real performance data"],
    faqs: [{ question: "Do you guarantee leads or sales?", answer: "No responsible agency can guarantee a specific result. We agree on measurable objectives, track performance and improve the work based on evidence." }, { question: "Can you work with our existing team?", answer: "Yes. We can collaborate with your internal team, existing vendors or work as an external marketing partner." }]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Turn social channels into a consistent, recognizable part of your brand.",
    intro: "Create a social presence with a clear point of view. We help plan content, shape creative direction, manage publishing and learn from audience response.",
    outcomes: ["Consistent publishing and visual direction", "Content built around your audience", "Actionable channel insights"],
    offerings: ["Social media strategy", "Content calendars and copywriting", "Creative direction and post design", "Community and performance reporting"],
    process: ["Audit channels and audience", "Define content pillars and voice", "Plan and publish content", "Review insights and optimize"],
    faqs: [{ question: "Which platforms do you manage?", answer: "Platform selection depends on your audience and goals. We can plan for Instagram, Facebook, LinkedIn and other relevant channels." }, { question: "Do you create the content?", answer: "We can support content planning, copy and creative production based on the agreed scope." }]
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Make it easier for the right people to discover your business through search.",
    intro: "Improve your website's search foundations through technical checks, useful content and clear site structure. SEO is a long-term process built on relevance, quality and consistency.",
    outcomes: ["A healthier technical foundation", "More useful search-focused content", "Better visibility into organic performance"],
    offerings: ["Technical SEO audit", "Keyword and search intent research", "On-page optimization", "Content and local SEO recommendations"],
    process: ["Audit the current website", "Prioritize technical and content opportunities", "Implement agreed improvements", "Monitor visibility and refine"],
    faqs: [{ question: "How long does SEO take?", answer: "SEO timelines vary by competition, website condition and scope. Meaningful progress typically takes months rather than days." }, { question: "Can you promise the number one ranking?", answer: "No. Search rankings are controlled by search engines, so guaranteed positions would be misleading." }]
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, responsive websites designed to make your next step obvious.",
    intro: "Your website should explain what you do, build confidence and help visitors take action. We focus on thoughtful structure, responsive layouts, accessibility and maintainable implementation.",
    outcomes: ["A clear user journey", "Responsive experiences across devices", "A maintainable technical foundation"],
    offerings: ["Website strategy and information architecture", "UI design and development", "Landing pages and conversion paths", "Performance and technical SEO foundations"],
    process: ["Understand the audience and requirements", "Plan pages and user journeys", "Design and develop", "Test, launch and support"],
    faqs: [{ question: "Can you redesign an existing website?", answer: "Yes. We can review the existing site and plan a redesign that preserves useful content and improves the experience." }, { question: "Will the website work on mobile?", answer: "Responsive behavior is part of the development and testing process." }]
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    short: "Build a recognizable identity with a consistent visual language.",
    intro: "Strong branding helps people recognize and understand your business. We develop practical visual systems that can work across digital channels and everyday brand touchpoints.",
    outcomes: ["A more coherent visual identity", "Reusable brand assets", "Consistent creative across channels"],
    offerings: ["Brand direction and visual identity", "Logo refinement and brand assets", "Social media and campaign creatives", "Marketing collateral design"],
    process: ["Discover positioning and audience", "Explore visual directions", "Develop and refine the identity", "Prepare usable brand assets"],
    faqs: [{ question: "Can you work with an existing logo?", answer: "Yes. We can build supporting design elements and templates around an existing identity." }, { question: "Do you provide source files?", answer: "Deliverables and editable source files are agreed as part of the project scope." }]
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    short: "Help local customers find accurate, useful information about your business.",
    intro: "A well-maintained Google Business Profile supports local discovery and customer confidence. We help organize profile information and improve its completeness and consistency.",
    outcomes: ["More complete business information", "Consistent local presence", "A clearer process for profile updates"],
    offerings: ["Profile setup or audit", "Business information optimization", "Category and service review", "Posts, photos and review response guidance"],
    process: ["Review profile and business details", "Identify missing or inconsistent information", "Implement approved updates", "Monitor profile health and insights"],
    faqs: [{ question: "Do you need access to our Google account?", answer: "Authorized profile access is needed for direct management. Access should be granted through Google's official permissions." }, { question: "Can you guarantee a map ranking?", answer: "No. Local rankings depend on several factors and cannot be guaranteed." }]
  },
  {
    slug: "nfc-google-review-solutions",
    title: "NFC Google Review Solutions",
    short: "Make it simpler for customers to reach your review destination.",
    intro: "NFC-enabled review touchpoints can reduce friction when a customer wants to leave feedback. We help businesses plan the customer journey and coordinate suitable NFC review products with an authorized supplier.",
    outcomes: ["A simpler review handoff", "Consistent branded touchpoints", "A clearer customer feedback process"],
    offerings: ["Review journey planning", "NFC card and stand coordination", "Branded artwork guidance", "Staff usage and review-request guidance"],
    process: ["Confirm the correct business review destination", "Choose a suitable NFC format", "Prepare branding and instructions", "Test the customer journey before use"],
    faqs: [{ question: "Can NFC guarantee more positive reviews?", answer: "No. NFC only makes the review destination easier to access. Reviews must reflect genuine customer experiences and must never be incentivized or filtered." }, { question: "Do customers need a special app?", answer: "Most modern NFC-enabled phones can open a web link without a separate app, but compatibility varies by device and settings." }]
  }
];
