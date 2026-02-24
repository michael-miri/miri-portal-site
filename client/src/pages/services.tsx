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
import { Layout, PageHeader, CTABanner, fadeInUp, stagger } from "@/components/layout";

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
        label="Avion Tech Capabilities"
        title="Full-Spectrum"
        highlight="Technology Consulting"
        description="Avion Tech delivers actionable insights and practical solutions across cloud, AI, cybersecurity, digital twins, and more."
      />

      <section className="relative py-24 bg-[#08081a]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.05] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp} className="group">
                <div 
                  className="relative h-full rounded-2xl p-7 bg-[#0e0e22]/80 border border-white/[0.06] hover:border-[#0645FF]/20 transition-all duration-300 hover:-translate-y-1 hover-elevate"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 border border-[#0645FF]/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-[#4B8BFF]" />
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                        <span className="text-sm text-white/30 leading-relaxed">
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

      <section className="relative py-20 bg-[#0a0a1c]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
          >
            <motion.h2 
              variants={fadeInUp} 
              className="font-heading text-3xl sm:text-4xl font-bold text-white"
            >
              Need a <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Custom Solution?</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} 
              className="mt-4 text-white/40 max-w-lg mx-auto"
            >
              Our services are modular and adaptable. Let's design the right combination for your organization.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mt-8">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-8 rounded-xl group"
                  data-testid="button-services-contact"
                >
                  Talk to Our Team
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
