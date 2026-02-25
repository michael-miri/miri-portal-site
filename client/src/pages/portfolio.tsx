import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

const projects = [
  {
    num: "01",
    title: "MDAH Interactive Tour System",
    client: "Mississippi Department of Archives & History",
    sector: "Government",
    desc: "Designed and proposed a comprehensive digital tour platform integrating IoT sensors, mobile applications, and a centralized content management system to modernize visitor experiences at historic sites.",
    results: ["Scalable architecture for 15+ historic sites", "Real-time visitor analytics dashboard", "Mobile-first progressive web app", "ADA-compliant accessibility standards"],
    tags: ["Digital Twin", "IoT", "Mobile App", "CMS"],
  },
  {
    num: "02",
    title: "Enterprise Cloud Migration",
    client: "Fortune 500 Manufacturer",
    sector: "Private Sector",
    desc: "Led a multi-phase cloud migration strategy transitioning legacy on-premise systems to a hybrid AWS/Azure infrastructure, reducing operational costs and improving deployment velocity.",
    results: ["40% reduction in infrastructure costs", "99.99% uptime SLA achieved", "CI/CD pipeline reducing deploy time by 70%", "Zero-downtime migration of 200+ services"],
    tags: ["Cloud", "DevOps", "Infrastructure", "Migration"],
  },
  {
    num: "03",
    title: "Predictive Maintenance Platform",
    client: "Energy & Utilities Provider",
    sector: "Energy",
    desc: "Built an AI-driven predictive maintenance system that analyzes IoT sensor data from industrial equipment to forecast failures before they occur, extending asset life and reducing downtime.",
    results: ["30% reduction in unplanned downtime", "Predictive models with 94% accuracy", "Real-time monitoring of 10,000+ sensors", "ROI achieved within 6 months"],
    tags: ["AI/ML", "IoT", "Analytics", "Automation"],
  },
  {
    num: "04",
    title: "Federal Cybersecurity Overhaul",
    client: "Federal Government Agency",
    sector: "Government",
    desc: "Implemented a zero-trust security architecture across a federal agency's network, including identity management, endpoint protection, and continuous threat monitoring.",
    results: ["Zero-trust architecture across 5,000 endpoints", "FedRAMP High authorization achieved", "Incident response time reduced by 85%", "100% compliance with NIST 800-53"],
    tags: ["Cybersecurity", "Zero-Trust", "Compliance", "Federal"],
  },
  {
    num: "05",
    title: "Smart City Dashboard",
    client: "Metropolitan Municipality",
    sector: "Municipal",
    desc: "Developed a unified city operations dashboard integrating data from traffic sensors, utility meters, and public safety systems for real-time urban management.",
    results: ["Unified view of 12 city departments", "Real-time traffic and utility monitoring", "Citizen engagement portal with 50K+ users", "15% improvement in emergency response"],
    tags: ["Smart City", "Data Visualization", "IoT", "Public Service"],
  },
  {
    num: "06",
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
        title="Real results. Real projects."
        description="A selection of projects that demonstrate how we help organizations transform through practical, impactful technology solutions."
      />

      <section className="bg-[#050A30] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className={`py-20 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-1">
                  <span className="text-[13px] text-[#C4A882]/50 font-mono">{project.num}</span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-heading text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-[13px] text-white/45">{project.client}</span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#0645FF]/[0.08] border border-[#0645FF]/20 text-[#0645FF]">{project.sector}</span>
                  </div>
                  <p className="mt-6 text-[14px] text-white/50 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882]/80 block mb-6">Key Outcomes</span>
                  <div className="space-y-0">
                    {project.results.map((result, j) => (
                      <div key={result} className={`py-4 ${j > 0 ? "border-t border-white/[0.04]" : ""}`}>
                        <span className="text-[14px] text-white/50 leading-relaxed">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#050A30] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight">
            Have a similar challenge?
          </h2>
          <p className="mt-4 text-[15px] text-white/50 leading-relaxed max-w-lg mx-auto">
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-portfolio-contact">
                Start a Conversation
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
