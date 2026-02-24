import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Landmark,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeIn, fadeInUp, stagger } from "@/components/layout";

const sectors = [
  {
    icon: Building2,
    title: "Private Sector",
    desc: "Enterprise-grade solutions for organizations ranging from startups to Fortune 500 companies.",
    items: ["Enterprise Resource Planning", "Digital Transformation", "Process Automation", "Data-Driven Decision Making"],
    tags: ["Enterprise", "Startups", "SMBs", "Manufacturing", "Logistics"],
  },
  {
    icon: Landmark,
    title: "Government & Federal",
    desc: "Secure, compliant technology platforms built for federal agencies and defense organizations.",
    items: ["FedRAMP Compliant Solutions", "Secure Communication Platforms", "Compliance Automation", "Citizen Service Portals"],
    tags: ["Defense", "Compliance", "Secure Systems", "Federal IT"],
  },
  {
    icon: MapPin,
    title: "Municipal",
    desc: "Smart city solutions and public service platforms that improve community engagement.",
    items: ["Smart City Infrastructure", "Public Service Dashboards", "Community Engagement Apps", "Asset Management Systems"],
    tags: ["Smart Cities", "Public Services", "Community Apps", "Transportation"],
  },
  {
    icon: Users,
    title: "Customer-Facing",
    desc: "Consumer-ready digital products with exceptional UX and scalable architectures.",
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
        title="Built for Every Sector"
        description="Tailored technology solutions for every industry, from private enterprise to public service. Avion Tech adapts to your sector's unique challenges."
      />

      <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Sectors</motion.span>
            <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">Industries We Specialize In</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <motion.div key={sector.title} variants={fadeIn}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#141419] p-7 hover:border-white/[0.15] transition-colors duration-300" data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center mb-5">
                    <sector.icon className="w-5 h-5 text-[#3B7BFF]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{sector.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">{sector.desc}</p>
                  <ul className="space-y-2.5 mb-5">
                    {sector.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#3B7BFF] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/40 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">More Industries</motion.span>
            <motion.h2 variants={fadeIn} className="font-heading text-2xl sm:text-3xl font-bold text-white mt-3 mb-8">We Also Serve</motion.h2>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-2">
              {industryTags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">{tag}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} className="mt-10">
              <Link href="/contact">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10" data-testid="button-industries-contact">
                  Discuss Your Industry
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
