import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Code2,
  Smartphone,
  Globe,
  Workflow,
  Shield,
  Cloud,
  Database,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeIn, stagger } from "@/components/layout";

const services = [
  {
    icon: Workflow,
    title: "Strategy & Transformation",
    desc: "Align business goals with technology capabilities through agile delivery and high-value outcomes.",
    details: [
      "Digital maturity assessments and roadmapping",
      "Technology strategy alignment with business objectives",
      "Agile transformation and change management",
      "ROI-driven prioritization and execution planning",
    ],
  },
  {
    icon: Brain,
    title: "AI & Advanced Analytics",
    desc: "Embed intelligent tools and automation to optimize performance and extend asset life.",
    details: [
      "Machine learning model development and deployment",
      "Predictive analytics and forecasting",
      "Natural language processing and computer vision",
      "Automated decision support systems",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Resilience",
    desc: "Secure-by-design architectures with continuous monitoring and compliance frameworks.",
    details: [
      "Zero-trust architecture implementation",
      "Vulnerability assessments and penetration testing",
      "Incident response planning and execution",
      "Compliance frameworks (SOC 2, NIST, ISO 27001)",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Hybrid Infrastructure",
    desc: "Scalable, resilient platforms with DevOps methods that accelerate deployment and adaptability.",
    details: [
      "Cloud migration and optimization strategies",
      "Multi-cloud and hybrid environment management",
      "Infrastructure as Code (IaC) implementation",
      "CI/CD pipeline design and automation",
    ],
  },
  {
    icon: Code2,
    title: "Custom Applications & Automation",
    desc: "Streamlined workflows through agile development, iterative prototyping, and user-centered design.",
    details: [
      "Full-stack web and mobile application development",
      "API design and microservices architecture",
      "Process automation and workflow optimization",
      "Legacy system modernization",
    ],
  },
  {
    icon: Database,
    title: "Data Governance & Management",
    desc: "Structured data assets that build trust, improve accessibility, and enable integration.",
    details: [
      "Data quality frameworks and validation",
      "Master data management strategies",
      "Data cataloging and metadata management",
      "Privacy compliance (GDPR, CCPA)",
    ],
  },
  {
    icon: Boxes,
    title: "IoT, Edge & Real-Time Systems",
    desc: "Connected infrastructure that drives operational intelligence and proactive decisions.",
    details: [
      "IoT sensor deployment and edge computing",
      "Real-time data streaming and processing",
      "Industrial IoT (IIoT) solutions",
      "Predictive maintenance systems",
    ],
  },
  {
    icon: Globe,
    title: "Digital Twin & Visualization",
    desc: "Immersive models and simulations that reveal system behavior and support data-driven planning.",
    details: [
      "3D digital twin modeling and simulation",
      "Real-time data visualization dashboards",
      "Asset performance monitoring",
      "Scenario planning and what-if analysis",
    ],
  },
  {
    icon: Smartphone,
    title: "OT/IT Integration",
    desc: "Unified, data-rich environments that enhance control, situational awareness, and enterprise decisions.",
    details: [
      "Operational technology convergence",
      "SCADA and industrial control system integration",
      "Enterprise data platform unification",
      "Cross-domain analytics and reporting",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHeader
        label="Our Capabilities"
        title="Full-Spectrum Technology Consulting"
        description="Avion Tech delivers actionable insights and practical solutions across cloud, AI, cybersecurity, digital twins, and more."
      />

      <section className="border-t border-white/[0.04] py-20 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeIn}>
                <div
                  className="h-full rounded-2xl border border-white/[0.08] bg-[#141419] p-7 hover:border-white/[0.15] transition-colors duration-300"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-[#3B7BFF]" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#3B7BFF] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/40 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] py-20 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]"
            >
              Custom Solutions
            </motion.span>

            <motion.h2
              variants={fadeIn}
              className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3"
            >
              Need Something More Specific?
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="mt-4 text-sm text-white/40 leading-relaxed max-w-2xl mx-auto"
            >
              Our services are modular and adaptable. Let's design the right combination for your organization.
            </motion.p>

            <motion.div variants={fadeIn} className="mt-8">
              <Link href="/contact">
                <Button
                  className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10"
                  data-testid="button-services-contact"
                >
                  Talk to Our Team
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
