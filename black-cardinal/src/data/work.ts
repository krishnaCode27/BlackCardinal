export type WorkItem = {
  type: "image" | "video" | "product";
  src: string;
  title: string;
  description?: string;
  result?: string;
  poster?: string;
};

// Drop the file in /public/work/, then add one entry here.
export const workItems: WorkItem[] = [
  // { type: "image", src: "/work/campaign-dashboard.png", title: "Campaign dashboard screenshot", description: "A short project description.", result: "A verified result, if available." },
  // { type: "video", src: "/work/product-walkthrough.mp4", title: "Product walkthrough", description: "A short video description.", poster: "/work/product-walkthrough-poster.jpg" },
  // { type: "product", src: "/work/review-card.jpg", title: "NFC review card", description: "A short product description." },
];
