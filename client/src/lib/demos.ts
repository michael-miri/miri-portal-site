export type Demo = {
  slug: string;
  name: string;
  company: string;
  description: string;
  url: string;
  tags?: string[];
};

export const demos: Demo[] = [
  {
    slug: "accuromm-usa",
    name: "Accuromm USA Production Optimizer",
    company: "Accuromm USA",
    description:
      "Manufacturing production optimizer demo with dashboard, orders, plant floor, analytics, ERP, and operations views.",
    url: "https://accuromm-usa.replit.app/",
    tags: ["Manufacturing", "Analytics", "ERP"],
  },
];

export function getDemoBySlug(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}
