import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

const services = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
    num: "07",
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
    num: "08",
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
    num: "09",
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
        title="Full-spectrum technology consulting."
        description="Nine practice areas. One trusted partner. We cover the complete technology lifecycle from strategy through implementation and beyond."
      />

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {services.map((service, i) => (
            <div
              key={service.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="lg:col-span-1">
                <span className="text-[11px] text-white/30 font-mono">{service.num}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-heading text-2xl font-bold text-white leading-tight">{service.title}</h3>
                <p className="mt-3 text-[14px] text-white/50 leading-relaxed">{service.desc}</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span className="text-white/30 mt-1.5 text-[8px]">●</span>
                      <span className="text-[14px] text-white/50 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight">
            Need something more specific?
          </h2>
          <p className="mt-4 text-[15px] text-white/50 leading-relaxed max-w-lg mx-auto">
            Our services are modular and adaptable. Let's design the right combination for your organization.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90"
                data-testid="button-services-contact"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
