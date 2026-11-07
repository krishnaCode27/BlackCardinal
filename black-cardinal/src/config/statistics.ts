export interface BusinessStatistic {
  id: string;
  order: string;
  value: number;
  label: string;
  description: string;
}

/**
 * Official Black Cardinal Business Statistics
 * Centralized configuration with exact, authentic numbers.
 * STRICT RULES:
 * - Exactly 1, 2, and 1.
 * - No plus signs (+).
 * - No fabricated or exaggerated numbers.
 * - Exact labels: Client Served, Team Members, Order Delivered.
 */
export const statisticsConfig = {
  eyebrow: "BUSINESS METRICS",
  heading: "Built on Ideas. Driven by Impact.",
  description:
    "Every project starts with a vision. We bring the people, creativity and execution together to move it forward.",
  items: [
    {
      id: "client-served",
      order: "01",
      value: 1,
      label: "Client Served",
      description: "A business that trusted us with its digital journey.",
    },
    {
      id: "team-members",
      order: "02",
      value: 2,
      label: "Team Members",
      description: "Two co-founders building Black Cardinal together.",
    },
    {
      id: "order-delivered",
      order: "03",
      value: 1,
      label: "Order Delivered",
      description: "One completed order delivered.",
    },
  ] as BusinessStatistic[],
};

