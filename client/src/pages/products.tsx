import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const products = [
  {
    name: "miri | housing™",
    description: "Enterprise Housing Management Platform — production-grade software for Public Housing Authorities managing HCV vouchers, inspections, certifications, and financial operations.",
    tags: ["PHA", "HUD", "HCV"],
    href: "/miri-housing",
  },
  {
    name: "miri | portal™",
    description: "Company Operations Portal — centralize employee resources, scheduling, client management, and internal communications in a single unified platform.",
    tags: ["Enterprise", "SaaS", "Collaboration"],
    href: "/miri-portal",
  },
  {
    name: "miri | ehr™",
    description: "Electronic Health Records System — secure, compliant health record management with clinical documentation, scheduling, billing, and lab integration.",
    tags: ["Healthcare", "HIPAA", "Clinical"],
    href: "/miri-ehr",
  },
  {
    name: "miri | grants™",
    description: "Integrated Grants Management for Public Agencies — end-to-end lifecycle management from application through closeout for port authorities and public-sector organizations.",
    tags: ["Government", "Grants", "Compliance"],
    href: "/miri-grants",
  },
  {
    name: "miri | time & attendance™",
    description: "Cloud-Based Workforce Time Tracking — modern time and attendance platform for distributed workforces with real-time clock-in/out, GPS and IP location verification, and configurable workflows.",
    tags: ["Workforce", "Cloud", "Government"],
    href: "/miri-time-attendance",
  },
];

export default function Products() {
  useSEO({
    title: "Products - Enterprise Software Platforms",
    description: "Explore Miri Technology's enterprise product suite: miri|housing, miri|portal, miri|ehr, miri|grants, and miri|time & attendance — purpose-built platforms for government, healthcare, and enterprise organizations.",
  });

  return (
    <Layout>
      <PageHeader
        label="Products"
        title="Purpose-built platforms."
        description="Enterprise software products designed for specific industries — built from the ground up with compliance, scalability, and user experience at their core."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0A0E1A] border border-white/[0.06] rounded-xl overflow-hidden">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="bg-[#0A0E1A] p-8 flex flex-col gap-5"
                data-testid={`card-product-${product.name.replace(/[|™&]/g, '').trim().toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                  {product.name}
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] text-white/60 font-medium inline-flex items-center gap-1.5 mt-2" data-testid={`link-product-learn-more-${product.name.replace(/[|™&]/g, '').trim().toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
