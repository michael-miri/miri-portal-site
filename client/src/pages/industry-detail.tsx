import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, HeartPulse, Landmark, Factory, Zap, CheckCircle2, GraduationCap, ShoppingCart, Sword } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";

const industryData: Record<string, {
  name: string;
  headline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  relatedServices: string[];
}> = {
  government: {
    name: "Government",
    headline: "Secure, compliant technology for the public sector.",
    description: "We build mission-critical platforms for federal, state, and local government agencies. From citizen-facing portals to classified data systems, our solutions meet the strictest compliance and security requirements while modernizing legacy infrastructure.",
    challenges: [
      "Aging legacy systems that slow down operations and increase costs",
      "Strict compliance requirements (FedRAMP, FISMA, NIST 800-53)",
      "Data silos across departments preventing unified decision-making",
      "Cybersecurity threats targeting government infrastructure",
    ],
    solutions: [
      "FedRAMP-compliant cloud migration and modernization",
      "Zero-trust security architecture implementation",
      "Interoperable data platforms for cross-agency collaboration",
      "Citizen service portals with accessibility compliance",
      "AI-powered analytics for policy decision support",
      "Automated compliance monitoring and reporting",
    ],
    outcomes: [
      "40% reduction in legacy system maintenance costs",
      "Full compliance with federal security frameworks",
      "Real-time data sharing across agencies",
      "Improved citizen satisfaction scores",
    ],
    relatedServices: ["Cybersecurity & Resilience", "Cloud & Hybrid Infrastructure", "Strategy & Transformation", "Data Governance & Management"],
  },
  healthcare: {
    name: "Healthcare",
    headline: "Technology that improves patient outcomes.",
    description: "We help healthcare organizations harness AI, secure patient data, and streamline operations. From hospital systems to telehealth platforms, we build solutions that meet HIPAA requirements while enabling better care delivery.",
    challenges: [
      "HIPAA compliance across all digital touchpoints",
      "Interoperability between EHR systems and third-party platforms",
      "Rising cybersecurity threats targeting patient data",
      "Need for real-time analytics to improve clinical decisions",
    ],
    solutions: [
      "HIPAA-compliant cloud infrastructure and data platforms",
      "AI-powered diagnostic and predictive analytics tools",
      "Secure telehealth and remote patient monitoring systems",
      "EHR integration and interoperability frameworks",
      "IoT-enabled smart hospital infrastructure",
      "Automated compliance and audit trail systems",
    ],
    outcomes: [
      "99.99% uptime for critical healthcare platforms",
      "30% faster clinical decision-making with AI analytics",
      "Full HIPAA compliance across all systems",
      "Reduced administrative burden through automation",
    ],
    relatedServices: ["AI & Advanced Analytics", "Cybersecurity & Resilience", "IoT, Edge & Real-Time Systems", "Custom Applications & Automation"],
  },
  finance: {
    name: "Finance",
    headline: "Resilient infrastructure for financial services.",
    description: "We build secure, high-performance platforms for banks, fintechs, and financial institutions. Our solutions address regulatory compliance, fraud prevention, and real-time transaction processing at scale.",
    challenges: [
      "Regulatory compliance across multiple jurisdictions (SOX, PCI DSS, GDPR)",
      "Real-time fraud detection and prevention at scale",
      "Legacy core banking system modernization",
      "Customer expectations for seamless digital experiences",
    ],
    solutions: [
      "Real-time fraud detection using AI and machine learning",
      "Core banking modernization with microservices architecture",
      "PCI DSS and SOX compliant cloud platforms",
      "API-first open banking integration frameworks",
      "Automated regulatory reporting and compliance monitoring",
      "Digital customer onboarding and KYC automation",
    ],
    outcomes: [
      "60% faster fraud detection with AI-powered systems",
      "Reduced compliance reporting time by 50%",
      "Sub-second transaction processing at scale",
      "Improved customer retention through digital experience",
    ],
    relatedServices: ["AI & Advanced Analytics", "Cybersecurity & Resilience", "Cloud & Hybrid Infrastructure", "Custom Applications & Automation"],
  },
  manufacturing: {
    name: "Manufacturing",
    headline: "Smart factories. Predictive operations.",
    description: "We help manufacturers embrace Industry 4.0 with IoT-connected systems, predictive maintenance, and digital twins. Our solutions optimize production lines, reduce downtime, and enable data-driven supply chain management.",
    challenges: [
      "Unplanned equipment downtime costing millions annually",
      "Disconnected OT and IT systems limiting visibility",
      "Supply chain volatility requiring real-time adaptability",
      "Quality control at speed and scale",
    ],
    solutions: [
      "IoT sensor networks for real-time production monitoring",
      "Predictive maintenance systems powered by machine learning",
      "Digital twin modeling for process optimization",
      "OT/IT convergence for unified operational visibility",
      "AI-driven quality inspection and defect detection",
      "Supply chain analytics and demand forecasting",
    ],
    outcomes: [
      "35% reduction in unplanned downtime",
      "20% improvement in overall equipment effectiveness",
      "Real-time visibility across the entire production floor",
      "Predictive supply chain management capabilities",
    ],
    relatedServices: ["IoT, Edge & Real-Time Systems", "Digital Twin & Visualization", "OT/IT Integration", "AI & Advanced Analytics"],
  },
  energy: {
    name: "Energy",
    headline: "Powering the grid of the future.",
    description: "We build intelligent systems for energy and utility companies managing complex infrastructure. From smart grid analytics to renewable integration, our solutions help optimize asset performance and ensure reliable service delivery.",
    challenges: [
      "Aging infrastructure requiring modernization without service disruption",
      "Integration of renewable energy sources into existing grids",
      "Regulatory compliance across multiple jurisdictions",
      "Real-time monitoring of distributed assets across vast geographies",
    ],
    solutions: [
      "Smart grid monitoring and analytics platforms",
      "Predictive asset maintenance for critical infrastructure",
      "SCADA system modernization and OT/IT integration",
      "Renewable energy integration and load balancing",
      "Real-time outage detection and automated response systems",
      "Regulatory compliance and environmental monitoring dashboards",
    ],
    outcomes: [
      "25% reduction in unplanned outages",
      "Real-time monitoring across distributed infrastructure",
      "Optimized renewable energy utilization",
      "Automated regulatory compliance reporting",
    ],
    relatedServices: ["IoT, Edge & Real-Time Systems", "OT/IT Integration", "Digital Twin & Visualization", "Cloud & Hybrid Infrastructure"],
  },
  education: {
    name: "Education",
    headline: "Technology that transforms learning.",
    description: "We help educational institutions modernize their digital infrastructure, build engaging learning platforms, and leverage data to improve student outcomes. From K-12 to higher education, our solutions support the full learning lifecycle.",
    challenges: [
      "Outdated learning management systems limiting student engagement",
      "Data silos across departments preventing holistic student insights",
      "Cybersecurity threats targeting student and institutional data",
      "Need for accessible, inclusive digital learning experiences",
    ],
    solutions: [
      "Modern learning management system implementation",
      "AI-powered adaptive learning and personalization engines",
      "Unified student data platforms for analytics and reporting",
      "Secure cloud infrastructure with FERPA compliance",
      "Accessible digital content delivery across devices",
      "Virtual and hybrid classroom technology integration",
    ],
    outcomes: [
      "40% increase in student engagement with digital platforms",
      "Unified student data across all institutional systems",
      "Full FERPA compliance across digital infrastructure",
      "Reduced administrative overhead through automation",
    ],
    relatedServices: ["AI & Advanced Analytics", "Cloud & Hybrid Infrastructure", "Custom Applications & Automation", "Data Governance & Management"],
  },
  retail: {
    name: "Retail & E-Commerce",
    headline: "Commerce experiences that convert.",
    description: "We build high-performance e-commerce platforms and retail technology that drive revenue, improve customer experience, and optimize operations. From supply chain analytics to personalized shopping experiences, we help retailers compete in a digital-first world.",
    challenges: [
      "Rising customer expectations for seamless omnichannel experiences",
      "Inventory management across multiple channels and locations",
      "Need for real-time personalization at scale",
      "Securing payment data and customer information (PCI DSS)",
    ],
    solutions: [
      "Headless commerce platform development and integration",
      "AI-driven product recommendation and personalization engines",
      "Real-time inventory and supply chain management systems",
      "Omnichannel customer experience platforms",
      "PCI DSS compliant payment infrastructure",
      "Customer analytics and behavioral insights dashboards",
    ],
    outcomes: [
      "35% increase in online conversion rates",
      "Real-time inventory visibility across all channels",
      "Personalized experiences driving 25% higher average order value",
      "Reduced cart abandonment through optimized checkout flows",
    ],
    relatedServices: ["AI & Advanced Analytics", "Custom Applications & Automation", "Cloud & Hybrid Infrastructure", "Cybersecurity & Resilience"],
  },
  defense: {
    name: "Defense & Intelligence",
    headline: "Mission-critical systems. Zero compromise.",
    description: "We build secure, resilient platforms for defense organizations and intelligence agencies. Our solutions meet the highest security clearance requirements while delivering modern capabilities for mission planning, situational awareness, and operational intelligence.",
    challenges: [
      "Extreme security requirements for classified systems and data",
      "Legacy systems limiting operational effectiveness",
      "Need for real-time situational awareness across domains",
      "Interoperability between allied systems and joint operations",
    ],
    solutions: [
      "Classified and air-gapped network architecture design",
      "Real-time command and control dashboards",
      "AI-powered intelligence analysis and threat assessment",
      "Secure communication and collaboration platforms",
      "Cross-domain solutions for multi-classification environments",
      "Predictive logistics and supply chain optimization",
    ],
    outcomes: [
      "Real-time operational intelligence across all domains",
      "Full compliance with DoD security frameworks",
      "Reduced decision-making time through AI-powered analytics",
      "Seamless interoperability across allied systems",
    ],
    relatedServices: ["Cybersecurity & Resilience", "AI & Advanced Analytics", "Cloud & Hybrid Infrastructure", "OT/IT Integration"],
  },
};

const iconMap: Record<string, JSX.Element> = {
  government: <Shield className="w-6 h-6" />,
  healthcare: <HeartPulse className="w-6 h-6" />,
  finance: <Landmark className="w-6 h-6" />,
  manufacturing: <Factory className="w-6 h-6" />,
  energy: <Zap className="w-6 h-6" />,
  education: <GraduationCap className="w-6 h-6" />,
  retail: <ShoppingCart className="w-6 h-6" />,
  defense: <Sword className="w-6 h-6" />,
};

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industryData[slug] : null;

  if (!industry) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#0A0E1A]">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-white mb-4">Industry not found</h1>
            <Link href="/industries">
              <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-back-industries">
                Back to Industries
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const otherIndustries = Object.entries(industryData).filter(([key]) => key !== slug);

  return (
    <Layout>
      <section className="pt-[160px] pb-24 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/industries">
              <span className="text-[13px] text-white/40 hover:text-white/60 transition-colors" data-testid="link-back-industries">Industries</span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[13px] text-white/60">{industry.name}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#C4A882] flex items-center justify-center text-[#0A0E1A]">
                  {iconMap[slug!]}
                </div>
                <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882]">{industry.name}</span>
              </div>
              <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-industry-title">
                {industry.headline}
              </h1>
            </div>
            <div className="lg:col-span-5 lg:flex lg:items-end">
              <p className="text-[18px] text-white/50 leading-relaxed" data-testid="text-industry-description">
                {industry.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">The Challenge</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-challenges">
                What {industry.name.toLowerCase()} organizations face.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className={`py-8 ${i > 0 ? "border-t border-white/[0.06]" : ""}`} data-testid={`challenge-${i}`}>
                    <span className="text-[13px] text-[#C4A882]/50 font-mono mr-4">0{i + 1}</span>
                    <span className="text-[15px] text-white/60 leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">How We Help</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.08] tracking-tight mb-16" data-testid="heading-solutions">
            Our solutions for {industry.name.toLowerCase()}.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {industry.solutions.map((solution, i) => (
              <div key={i} className="bg-[#0A0E1A] p-8 hover:bg-[#0e0e12] transition-colors group" data-testid={`solution-${i}`}>
                <CheckCircle2 className="w-5 h-5 text-[#C4A882]/40 mb-4 group-hover:text-[#C4A882]/70 transition-colors" />
                <p className="text-[14px] text-white/60 leading-relaxed">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Results</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-outcomes">
                Measurable outcomes.
              </h2>
              <div className="mt-10 space-y-0">
                {industry.outcomes.map((outcome, i) => (
                  <div key={i} className={`py-6 ${i > 0 ? "border-t border-white/[0.06]" : ""}`} data-testid={`outcome-${i}`}>
                    <p className="text-[15px] text-white/60 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Related Services</span>
              <div className="space-y-0">
                {industry.relatedServices.map((service, i) => (
                  <div key={i} className={`py-6 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    <Link href="/services">
                      <span className="text-[15px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group" data-testid={`link-related-service-${i}`}>
                        {service}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Explore More</span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,2.5rem)] font-bold text-white leading-[1.08] tracking-tight mb-12">
            Other industries we serve.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {otherIndustries.map(([key, data]) => (
              <Link key={key} href={`/industries/${key}`}>
                <div className="bg-[#0A0E1A] p-8 hover:bg-[#0e0e12] transition-colors flex flex-col items-center gap-4 cursor-pointer group" data-testid={`link-other-industry-${key}`}>
                  <div className="w-12 h-12 rounded-full bg-[#C4A882] flex items-center justify-center text-[#0A0E1A] transition-transform group-hover:scale-110">
                    {iconMap[key]}
                  </div>
                  <span className="text-[14px] text-white/40 font-medium group-hover:text-white/80 transition-colors">{data.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
