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
import { Layout, PageHeader, CTABanner, fadeInUp, stagger } from "@/components/layout";

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
        title="Built for"
        highlight="Every Sector"
        description="Tailored technology solutions for every industry, from private enterprise to public service. Avion Tech adapts to your sector's unique challenges."
      />

      <section className="relative py-24 bg-[#070e24]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
            {sectors.map((sector, idx) => (
              <motion.div key={sector.title} variants={fadeInUp} className="group">
                <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05]" data-testid={`card-industry-full-${sector.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center mb-5">
                        <sector.icon className="w-7 h-7 text-[#0645FF]" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-white mb-3">{sector.title}</h3>
                      <p className="text-white/45 leading-relaxed mb-5">{sector.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {sector.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#0645FF]/10 text-[#4B8BFF] border border-[#0645FF]/15">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Key Solutions</h4>
                      <ul className="space-y-3">
                        {sector.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#0645FF] shrink-0 mt-0.5" />
                            <span className="text-sm text-white/40 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#050a1a]">
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
              We Also Serve
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
              {industryTags.map((tag) => (
                <span key={tag} className="text-sm px-4 py-2 rounded-full border border-white/[0.08] text-white/35 bg-white/[0.02]">{tag}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-industries-contact">
                  Discuss Your Industry
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
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
