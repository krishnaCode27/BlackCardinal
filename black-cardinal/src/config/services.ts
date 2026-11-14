export type Service = {
  slug: string;
  title: string;
  short: string;
  example: string;
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
    short: "Plan online ads and content so more of the right people find your business.",
    example: "For example, promote a new product on Instagram and track how many people ask about it.",
    intro: "We help you choose where to reach customers online, what to say, and how to tell whether your marketing is working.",
    outcomes: ["A clear marketing plan", "More consistent messages", "A simple view of clicks and enquiries"],
    offerings: ["A practical online marketing plan", "Planning and running campaigns", "Research on customers and competitors", "Tracking clicks, calls and enquiries"],
    process: ["Talk about your goals and customers", "Choose the right channels and messages", "Create and launch the campaign", "Review the results and improve the plan"],
    faqs: [
      { question: "Can you guarantee more sales?", answer: "No. Results depend on your market, budget and offer. We agree what to measure, track the work and make improvements based on what we learn." },
      { question: "Can you work with our current team?", answer: "Yes. We can work alongside your team or other suppliers, or help manage the agreed work for you." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Plan posts that help people notice, understand and follow your business.",
    example: "For example, create a week of Instagram posts showing a new product, how it is made, and how to order it.",
    intro: "We help you decide what to post, create clear captions and visuals, and keep your social pages active and on-brand.",
    outcomes: ["A steady plan for posts", "A consistent look and voice", "A clearer view of what people respond to"],
    offerings: ["A simple social media plan", "Post calendars and captions", "Post and story designs", "Help reviewing comments and results"],
    process: ["Review your pages and audience", "Choose topics and a posting schedule", "Write and design the posts", "Review responses and adjust the plan"],
    faqs: [
      { question: "Which social media pages can you help with?", answer: "We can help with Instagram, Facebook, LinkedIn and other pages your customers use. We will choose based on your audience and goals." },
      { question: "Do you make the posts too?", answer: "Yes. Depending on what we agree, we can plan topics, write captions and create post designs." },
    ],
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    short: "Connect your brand with creators whose audience and content fit your goals.",
    example: "For example, plan a creator campaign for a new product, with agreed posts and a clear way to track enquiries.",
    intro: "We help you find suitable creators, shape a campaign that feels natural to their audience, and coordinate the content from first brief to final results.",
    outcomes: ["Creators matched to your audience", "Clear campaign briefs and deliverables", "A record of published content and results"],
    offerings: ["Creator research and shortlisting", "Campaign concepts and creator briefs", "Coordination of posts, reels and stories", "Campaign tracking and post-campaign reporting"],
    process: ["Agree on your audience, goals and budget", "Review creators and select a shortlist", "Confirm deliverables and prepare the brief", "Coordinate publishing and review results"],
    faqs: [
      { question: "Can you guarantee reach or sales?", answer: "No. Results depend on the creator, audience, offer and platform. We agree on suitable measures and report the campaign transparently." },
      { question: "Can I see the creators you work with?", answer: "Yes. Visit our influencer portfolio to explore creator profiles and featured work as it is added." },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Help your website show up when people search online for what you offer.",
    example: "For example, help a bakery appear when someone searches for “fresh cakes in Indore.”",
    intro: "We check your website, improve its pages and make it easier for search engines and people to understand what you offer. SEO takes time, so we track progress and keep improving.",
    outcomes: ["A healthier, easier-to-use website", "Pages that answer customer questions", "A clearer view of search visits and enquiries"],
    offerings: ["A check of website health and speed", "Research into what customers search for", "Clearer page titles and content", "Suggestions for local search pages"],
    process: ["Check your website and search presence", "Find the most useful improvements", "Make or guide the agreed changes", "Track search visits and refine the work"],
    faqs: [
      { question: "How long does SEO take?", answer: "It usually takes months, not days. The timeline depends on your website, your competitors and the amount of work needed." },
      { question: "Can you promise the first spot on Google?", answer: "No. Google decides search positions, so nobody can honestly promise a specific ranking." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Build a fast, easy-to-use website that works well on phones and computers.",
    example: "For example, make a booking website where visitors can see your services, choose a time and send a request.",
    intro: "We plan and build websites that explain what you do and make the next step clear, such as calling, booking or asking for a quote.",
    outcomes: ["Pages that are easy to follow", "A site that adapts to mobile screens", "Simple ways for visitors to contact you"],
    offerings: ["Planning the pages and menu", "Designing and building the website", "Landing pages for products or campaigns", "Making the site faster and easier to use"],
    process: ["Learn about your business and visitors", "Plan the pages and what they should do", "Design and build the website", "Check it on phones and computers before launch"],
    faqs: [
      { question: "Can you improve my current website?", answer: "Yes. We can review what you have and plan updates or a full redesign." },
      { question: "Will the website work on phones?", answer: "Yes. We design and check the site on phone, tablet and desktop screen sizes." },
    ],
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    short: "Give your business a clear look that people can recognize and remember.",
    example: "For example, create a logo, colors and social media templates that all feel like the same brand.",
    intro: "We help shape how your business looks, from its logo and colors to the designs people see on social media and in marketing.",
    outcomes: ["A look people can recognize", "Matching designs across your channels", "Reusable files for future marketing"],
    offerings: ["Choosing your brand look and colors", "Creating or improving a logo", "Designing social posts and ads", "Preparing print and digital materials"],
    process: ["Learn what your business stands for", "Explore a few visual directions", "Choose and refine a direction", "Prepare the finished files for use"],
    faqs: [
      { question: "Can you work with my current logo?", answer: "Yes. We can keep your logo and create matching colors, layouts and templates around it." },
      { question: "Will I get files I can use later?", answer: "Yes. We agree on the file types you need and prepare the final files for those uses." },
    ],
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    short: "Keep your business details clear and up to date on Google Search and Maps.",
    example: "For example, update a salon’s opening hours, phone number, location, photos and list of services.",
    intro: "We help customers find the right information about your business on Google, including where you are, when you are open and what you offer.",
    outcomes: ["Correct contact and opening details", "A more complete Google listing", "Useful photos and service information"],
    offerings: ["Setting up or checking your profile", "Updating hours, address and phone number", "Adding services, photos and updates", "Guidance for replying to reviews"],
    process: ["Check your current Google listing", "Find details that are missing or out of date", "Make the approved changes", "Review the listing and keep it current"],
    faqs: [
      { question: "Do you need access to my Google account?", answer: "Only if you want us to make changes. You can grant access through Google’s official account settings." },
      { question: "Can you promise my business will appear first on Maps?", answer: "No. Google chooses map results using many factors, and no one can guarantee a position." },
    ],
  },
  {
    slug: "nfc-google-review-solutions",
    title: "NFC Google Review Solutions",
    short: "Let customers tap a card with their phone to open your Google review page.",
    example: "For example, place a tap-to-review card at checkout so a customer can open your review link on their phone.",
    intro: "We help set up a simple tap-to-open link for customers who choose to leave an honest review. We can help plan the link, card design and how your team uses it.",
    outcomes: ["A quick way to open your review page", "A branded card or counter stand", "Clear instructions for your team"],
    offerings: ["Finding the right Google review link", "Planning an NFC card or stand", "Preparing the card design", "Showing your team how to use it"],
    process: ["Confirm your business review link", "Choose a card or stand", "Prepare and check the design", "Test it with a phone before use"],
    faqs: [
      { question: "Will this guarantee more or better reviews?", answer: "No. It only makes your review page easier to open. Reviews should be honest and must not be paid for or filtered." },
      { question: "Do customers need an app?", answer: "Most newer phones can open the link when tapped. Older phones may need their camera or NFC setting enabled." },
    ],
  },
];
