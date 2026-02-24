import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

const sectors = [
  {
    title: "Private Sector",
    desc: "Enterprise-grade solutions for organizations ranging from startups to Fortune 500 companies.",
    items: ["Enterprise Resource Planning", "Digital Transformation", "Process Automation", "Data-Driven Decision Making"],
    tags: ["Enterprise", "Startups", "SMBs", "Manufacturing", "Logistics"],
  },
  {
    title: "Government & Federal",
    desc: "Secure, compliant technology platforms built for federal agencies and defense organizations.",
    items: ["FedRAMP Compliant Solutions", "Secure Communication Platforms", "Compliance Automation", "Citizen Service Portals"],
    tags: ["Defense", "Compliance", "Secure Systems", "Federal IT"],
  },
  {
    title: "Municipal",
    desc: "Smart city solutions and public service platforms that improve community engagement and operational efficiency.",
    items: ["Smart City Infrastructure", "Public Service Dashboards", "Community Engagement Apps", "Asset Management Systems"],
    tags: ["Smart Cities", "Public Services", "Community Apps", "Transportation"],
  },
  {
    title: "Customer-Facing",
    desc: "Consumer-ready digital products with exceptional user experience and scalable architectures.",
    items: ["E-Commerce Platforms", "SaaS Product Development", "Mobile Applications", "Customer Analytics"],
    tags: ["E-Commerce", "SaaS", "Consumer Apps", "FinTech"],
  },
];

const industryTags = ["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Logistics", "Energy", "Real Estate", "Telecommunications", "Agriculture", "Tourism", "Non-Profit"];

export default function Industries() {
  return (
    <Layout>
      <PageHeader
        label="Industries We Serve"
        title="Built for every sector."
        description="Tailored technology solutions for every industry, from private enterprise to public service. We adapt to your sector's unique challenges."
      />

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {sectors.map((sector, i) => (
            <div
              key={sector.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="lg:col-span-5">
                <span className="text-[11px] text-white/30 font-mono block mb-4">0{i + 1}</span>
                <h3 className="font-heading text-3xl font-bold text-white leading-tight">{sector.title}</h3>
                <p className="mt-4 text-[14px] text-white/50 leading-relaxed max-w-sm">{sector.desc}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {sector.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
                  {sector.items.map((item) => (
                    <div key={item} className="bg-[#09090b] p-6 hover:bg-[#0e0e12] transition-colors">
                      <span className="text-[14px] text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 block mb-6">More Industries</span>
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
                <span key={tag} className="text-[13px] px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/45">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
