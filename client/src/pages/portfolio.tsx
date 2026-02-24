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
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeInUp, stagger } from "@/components/layout";

const projects = [
  {
    icon: Globe,
    title: "MDAH Interactive Tour System",
    client: "Mississippi Department of Archives & History",
    sector: "Government",
    desc: "Designed and proposed a comprehensive digital tour platform integrating IoT sensors, mobile applications, and a centralized content management system to modernize visitor experiences at historic sites.",
    results: ["Scalable architecture for 15+ historic sites", "Real-time visitor analytics dashboard", "Mobile-first progressive web app", "ADA-compliant accessibility standards"],
    tags: ["Digital Twin", "IoT", "Mobile App", "CMS"],
    color: "from-[#0645FF] to-[#4B8BFF]",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud Migration",
    client: "Fortune 500 Manufacturer",
    sector: "Private Sector",
    desc: "Led a multi-phase cloud migration strategy transitioning legacy on-premise systems to a hybrid AWS/Azure infrastructure, reducing operational costs and improving deployment velocity.",
    results: ["40% reduction in infrastructure costs", "99.99% uptime SLA achieved", "CI/CD pipeline reducing deploy time by 70%", "Zero-downtime migration of 200+ services"],
    tags: ["Cloud", "DevOps", "Infrastructure", "Migration"],
    color: "from-[#4B8BFF] to-[#82b1ff]",
  },
  {
    icon: Brain,
    title: "Predictive Maintenance Platform",
    client: "Energy & Utilities Provider",
    sector: "Energy",
    desc: "Built an AI-driven predictive maintenance system that analyzes IoT sensor data from industrial equipment to forecast failures before they occur, extending asset life and reducing downtime.",
    results: ["30% reduction in unplanned downtime", "Predictive models with 94% accuracy", "Real-time monitoring of 10,000+ sensors", "ROI achieved within 6 months"],
    tags: ["AI/ML", "IoT", "Analytics", "Automation"],
    color: "from-[#0645FF] to-[#4B8BFF]",
  },
  {
    icon: Shield,
    title: "Federal Cybersecurity Overhaul",
    client: "Federal Government Agency",
    sector: "Government",
    desc: "Implemented a zero-trust security architecture across a federal agency's network, including identity management, endpoint protection, and continuous threat monitoring.",
    results: ["Zero-trust architecture across 5,000 endpoints", "FedRAMP High authorization achieved", "Incident response time reduced by 85%", "100% compliance with NIST 800-53"],
    tags: ["Cybersecurity", "Zero-Trust", "Compliance", "Federal"],
    color: "from-[#4B8BFF] to-[#82b1ff]",
  },
  {
    icon: Smartphone,
    title: "Smart City Dashboard",
    client: "Metropolitan Municipality",
    sector: "Municipal",
    desc: "Developed a unified city operations dashboard integrating data from traffic sensors, utility meters, and public safety systems for real-time urban management.",
    results: ["Unified view of 12 city departments", "Real-time traffic and utility monitoring", "Citizen engagement portal with 50K+ users", "15% improvement in emergency response"],
    tags: ["Smart City", "Data Visualization", "IoT", "Public Service"],
    color: "from-[#0645FF] to-[#4B8BFF]",
  },
  {
    icon: Boxes,
    title: "OT/IT Convergence Platform",
    client: "Industrial Manufacturing Company",
    sector: "Manufacturing",
    desc: "Unified operational technology (OT) systems with enterprise IT platforms, creating a seamless data flow from factory floor to executive dashboards.",
    results: ["Real-time production visibility enterprise-wide", "35% increase in operational efficiency", "Integrated SCADA and ERP systems", "Automated compliance reporting"],
    tags: ["OT/IT", "SCADA", "Integration", "Manufacturing"],
    color: "from-[#4B8BFF] to-[#82b1ff]",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHeader
        label="Our Work"
        title="Project"
        highlight="Portfolio"
        description="Real-world examples of how Avion Tech helps organizations transform through practical, impactful technology solutions."
      />

      <section className="relative py-24 bg-[#070e24]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">
            {projects.map((project, idx) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <div className="relative group rounded-2xl border border-white/[0.05] overflow-hidden" data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

                  <div className="p-8 sm:p-10 bg-gradient-to-b from-white/[0.04] to-transparent">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      <div className="lg:col-span-3">
                        <div className="flex items-start gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center shrink-0">
                            <project.icon className="w-6 h-6 text-[#0645FF]" />
                          </div>
                          <div>
                            <h3 className="font-heading text-xl font-semibold text-white">{project.title}</h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-sm text-[#4B8BFF]">{project.client}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-[#0645FF]/10 text-[#4B8BFF] border border-[#0645FF]/15">{project.sector}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-white/45 leading-relaxed mb-5">{project.desc}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/[0.06] text-white/30 bg-white/[0.02]">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="font-heading text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Key Outcomes</h4>
                        <ul className="space-y-3">
                          {project.results.map((result) => (
                            <li key={result} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#0645FF] shrink-0 mt-0.5" />
                              <span className="text-sm text-white/40 leading-relaxed">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#050a1a]">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Have a Similar Challenge?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-white/45 max-w-lg mx-auto">
              Let's discuss how Avion Tech can deliver similar results for your organization.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-portfolio-contact">
                  Start a Conversation
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
