import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const sectors = [
  {
    title: "Private Sector",
    desc: "Enterprise-grade solutions for organizations ranging from startups to Fortune 500 companies.",
    items: [
      { name: "Enterprise Resource Planning" },
      { name: "Digital Transformation" },
      { name: "Process Automation" },
      { name: "Data-Driven Decision Making" },
    ],
    tags: ["Enterprise", "Startups", "SMBs", "Manufacturing", "Logistics"],
  },
  {
    title: "Government & Federal",
    desc: "Purpose-built platforms for federal agencies, state governments, and public-sector organizations — from compliance and permitting to citizen services.",
    items: [
      { name: "Compliance" },
      { name: "Permitting" },
      { name: "Inspections" },
      { name: "Asset & Facility Management" },
      { name: "Housing & Human Services" },
      { name: "Citizen Service Portals" },
    ],
    tags: ["Federal Agencies", "State Government", "Public Sector", "Municipal"],
  },
  {
    title: "Municipal",
    desc: "Smart city solutions and public service platforms that improve community engagement and operational efficiency.",
    items: [
      { name: "Smart City Infrastructure" },
      { name: "Public Service Dashboards" },
      { name: "Community Engagement Apps" },
      { name: "Asset Management Systems" },
    ],
    tags: ["Smart Cities", "Public Services", "Community Apps", "Transportation"],
  },
  {
    title: "Customer-Facing",
    desc: "Consumer-ready digital products with exceptional user experience and scalable architectures.",
    items: [
      { name: "E-Commerce Platforms" },
      { name: "SaaS Product Development" },
      { name: "Mobile Applications" },
      { name: "Customer Analytics" },
    ],
    tags: ["E-Commerce", "SaaS", "Consumer Apps", "FinTech"],
  },
];

const industryTags = ["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Logistics", "Energy", "Real Estate", "Telecommunications", "Agriculture", "Tourism", "Non-Profit"];

export default function Industries() {
  useSEO({
    title: "Industries We Serve - Government, Enterprise, Healthcare & More",
    description: "Miri Technology provides tailored technology solutions for government, healthcare, finance, manufacturing, defense, education, retail, and energy sectors.",
  });
  return (
    <Layout>
      <PageHeader
        label="Industries We Serve"
        title="Built for every sector."
        description="Tailored technology solutions for every industry, from private enterprise to public service. We adapt to your sector's unique challenges."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {sectors.map((sector, i) => (
            <div
              key={sector.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="lg:col-span-5">

                <h3 className="font-heading text-3xl font-bold text-white leading-tight">{sector.title}</h3>
                <p className="mt-4 text-[14px] text-white/50 leading-relaxed max-w-sm">{sector.desc}</p>
                {sector.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {sector.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
                  {sector.items.map((item) => (
                    <div key={item.name} className="bg-[#0A0E1A] p-6">
                      <span className="text-[14px] font-medium text-white">{item.name}</span>
                      {item.detail && (
                        <p className="text-[13px] text-white/50 leading-relaxed mt-2">{item.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">More Industries</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                We also serve.
              </h2>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-industries-contact">
                    Discuss Your Industry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {industryTags.map((tag) => (
                <span key={tag} className="text-[13px] px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
