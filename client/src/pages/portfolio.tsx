import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeIn, fadeInUp, stagger } from "@/components/layout";

const projects = [
  {
    icon: Globe,
    title: "MDAH Interactive Tour System",
    client: "Mississippi Department of Archives & History",
    sector: "Government",
    desc: "Designed and proposed a comprehensive digital tour platform integrating IoT sensors, mobile applications, and a centralized content management system to modernize visitor experiences at historic sites.",
    results: ["Scalable architecture for 15+ historic sites", "Real-time visitor analytics dashboard", "Mobile-first progressive web app", "ADA-compliant accessibility standards"],
    tags: ["Digital Twin", "IoT", "Mobile App", "CMS"],
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud Migration",
    client: "Fortune 500 Manufacturer",
    sector: "Private Sector",
    desc: "Led a multi-phase cloud migration strategy transitioning legacy on-premise systems to a hybrid AWS/Azure infrastructure, reducing operational costs and improving deployment velocity.",
    results: ["40% reduction in infrastructure costs", "99.99% uptime SLA achieved", "CI/CD pipeline reducing deploy time by 70%", "Zero-downtime migration of 200+ services"],
    tags: ["Cloud", "DevOps", "Infrastructure", "Migration"],
  },
  {
    icon: Brain,
    title: "Predictive Maintenance Platform",
    client: "Energy & Utilities Provider",
    sector: "Energy",
    desc: "Built an AI-driven predictive maintenance system that analyzes IoT sensor data from industrial equipment to forecast failures before they occur, extending asset life and reducing downtime.",
    results: ["30% reduction in unplanned downtime", "Predictive models with 94% accuracy", "Real-time monitoring of 10,000+ sensors", "ROI achieved within 6 months"],
    tags: ["AI/ML", "IoT", "Analytics", "Automation"],
  },
  {
    icon: Shield,
    title: "Federal Cybersecurity Overhaul",
    client: "Federal Government Agency",
    sector: "Government",
    desc: "Implemented a zero-trust security architecture across a federal agency's network, including identity management, endpoint protection, and continuous threat monitoring.",
    results: ["Zero-trust architecture across 5,000 endpoints", "FedRAMP High authorization achieved", "Incident response time reduced by 85%", "100% compliance with NIST 800-53"],
    tags: ["Cybersecurity", "Zero-Trust", "Compliance", "Federal"],
  },
  {
    icon: Smartphone,
    title: "Smart City Dashboard",
    client: "Metropolitan Municipality",
    sector: "Municipal",
    desc: "Developed a unified city operations dashboard integrating data from traffic sensors, utility meters, and public safety systems for real-time urban management.",
    results: ["Unified view of 12 city departments", "Real-time traffic and utility monitoring", "Citizen engagement portal with 50K+ users", "15% improvement in emergency response"],
    tags: ["Smart City", "Data Visualization", "IoT", "Public Service"],
  },
  {
    icon: Boxes,
    title: "OT/IT Convergence Platform",
    client: "Industrial Manufacturing Company",
    sector: "Manufacturing",
    desc: "Unified operational technology (OT) systems with enterprise IT platforms, creating a seamless data flow from factory floor to executive dashboards.",
    results: ["Real-time production visibility enterprise-wide", "35% increase in operational efficiency", "Integrated SCADA and ERP systems", "Automated compliance reporting"],
    tags: ["OT/IT", "SCADA", "Integration", "Manufacturing"],
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHeader
        label="Our Work"
        title="Project Portfolio"
        description="Real-world examples of how Avion Tech helps organizations transform through practical, impactful technology solutions."
      />

      <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Case Studies</motion.span>
            <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">Featured Projects</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeIn}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#141419] p-7 sm:p-8 hover:border-white/[0.15] transition-colors duration-300" data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center shrink-0">
                          <project.icon className="w-5 h-5 text-[#3B7BFF]" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-white">{project.title}</h3>
                          <div className="flex items-center gap-3 mt-1 flex-wrap">
                            <span className="text-sm text-white/40">{project.client}</span>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">{project.sector}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed mb-5">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF] mb-4">Key Outcomes</h4>
                      <ul className="space-y-2.5">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#3B7BFF] shrink-0 mt-0.5" />
                            <span className="text-sm text-white/40 leading-relaxed">{result}</span>
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

      <section className="py-20 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white">Have a Similar Challenge?</motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
              Let's discuss how Avion Tech can deliver similar results for your organization.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8">
              <Link href="/contact">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10" data-testid="button-portfolio-contact">
                  Start a Conversation
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
