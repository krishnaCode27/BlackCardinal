export type InfluencerPortfolioItem = {
  name: string;
  handle: string;
  profileUrl?: string;
  niche: string;
  location?: string;
  bio: string;
  platforms: string[];
  audienceSize?: string;
  image?: string;
  featuredPosts: {
    title: string;
    platform: string;
    url: string;
    image?: string;
  }[];
};

// Add creator profiles here. Use public profile/post URLs and images in /public.
export const influencers: InfluencerPortfolioItem[] = [];
