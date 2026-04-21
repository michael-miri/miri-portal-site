import { ArrowUpRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

type Demo = {
  slug: string;
  name: string;
  company: string;
  description: string;
  url: string;
  tags?: string[];
};

const demos: Demo[] = [
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

export default function Demos() {
  useSEO({
    title: "Demo Applications",
    description:
      "Explore live demo applications built by Miri Technology — interactive previews of custom platforms delivered for our clients.",
  });

  return (
    <Layout>
      <PageHeader
        label="Demos"
        title="Demo Applications"
        description="Interactive previews of platforms we've built. Each demo links to a live, deployed application."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
            {demos.map((demo) => (
              <div
                key={demo.slug}
                className="bg-[#0A0E1A] p-8 flex flex-col gap-5"
                data-testid={`card-demo-${demo.slug}`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[11px] uppercase tracking-[0.18em] text-[#C4A882]"
                    data-testid={`text-demo-company-${demo.slug}`}
                  >
                    {demo.company}
                  </span>
                  <h3
                    className="font-heading text-2xl font-bold text-white tracking-tight"
                    data-testid={`text-demo-name-${demo.slug}`}
                  >
                    {demo.name}
                  </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-relaxed flex-1">
                  {demo.description}
                </p>
                {demo.tags && demo.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 bg-[#0645FF] text-white text-[13px] font-medium rounded-md self-start"
                  data-testid={`link-open-demo-${demo.slug}`}
                >
                  Open Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
            {demos.length % 2 !== 0 && (
              <div className="bg-[#0A0E1A] hidden md:block" />
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
