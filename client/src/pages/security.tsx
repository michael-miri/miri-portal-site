import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const securityPillars = [
  {
    title: "Zero-Trust Architecture",
    desc: "Every access request is verified regardless of source. No implicit trust — every user, device, and connection is authenticated and authorized continuously.",
    items: ["Identity verification at every access point", "Micro-segmentation of network resources", "Least-privilege access controls", "Continuous authentication and session monitoring"],
  },
  {
    title: "Compliance & Standards",
    desc: "Our practices align with the most rigorous industry standards and regulatory frameworks.",
    items: ["Alignment with leading security frameworks", "Regular policy reviews and updates", "Audit-ready documentation and controls"],
  },
  {
    title: "Data Encryption",
    desc: "Enterprise-grade encryption both at rest and in transit, ensuring sensitive information remains confidential at every stage.",
    items: ["AES-256 encryption at rest", "TLS 1.3 for data in transit", "End-to-end encryption for sensitive communications", "Hardware security module (HSM) key management"],
  },
  {
    title: "24/7 Threat Monitoring",
    desc: "Continuous monitoring, detection, and response to potential threats across all systems and environments.",
    items: ["Real-time security event monitoring", "Automated threat detection and alerting", "Behavioral anomaly detection", "Incident response within minutes"],
  },
  {
    title: "Identity & Access Management",
    desc: "The right people have the right access at the right time, with full audit trails and governance controls.",
    items: ["Multi-factor authentication (MFA)", "Single sign-on (SSO) integration", "Role-based access control (RBAC)", "Privileged access management (PAM)"],
  },
  {
    title: "Network Security",
    desc: "Multi-layered network defense that protects against external threats while maintaining performance.",
    items: ["Next-generation firewall protection", "Intrusion detection and prevention (IDS/IPS)", "DDoS mitigation and traffic analysis", "Secure VPN and remote access"],
  },
];


const securityProcess = [
  { step: "01", title: "Assess", desc: "Comprehensive security audit of current infrastructure, policies, and vulnerabilities." },
  { step: "02", title: "Design", desc: "Architect secure-by-design solutions aligned with your risk profile and compliance needs." },
  { step: "03", title: "Implement", desc: "Deploy security controls, monitoring, and response capabilities across your environment." },
  { step: "04", title: "Monitor", desc: "Continuous 24/7 monitoring with automated detection and rapid incident response." },
  { step: "05", title: "Improve", desc: "Regular assessments, penetration testing, and security posture improvements." },
];

export default function Security() {
  useSEO({
    title: "Security - Enterprise-Grade Cybersecurity & Zero-Trust Architecture",
    description: "Miri Technology's security approach: zero-trust architecture, AES-256 encryption, 24/7 threat monitoring, identity & access management, and network security for enterprise and government.",
  });
  return (
    <Layout>
      <PageHeader
        label="Our Security"
        title="Enterprise-grade security."
        description="Security isn't an afterthought — it's embedded in everything we build. From zero-trust to continuous monitoring, we protect what matters most."
      />

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#0A0E1A] p-8 hover:bg-[#141B2E] transition-colors"
                data-testid={`card-security-pillar-${pillar.title.toLowerCase().replace(/\s/g, '-')}`}
              >
                <h3 className="font-heading text-[17px] font-semibold text-white leading-snug mb-3">{pillar.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed mb-4">{pillar.desc}</p>
                <div className="space-y-2">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#C4A882]/50 mt-1.5 text-[8px]">●</span>
                      <span className="text-[13px] text-white/50 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Process</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                Security lifecycle.
              </h2>
              <p className="mt-6 text-[15px] text-white/50 leading-relaxed max-w-sm">
                A proven five-phase approach that ensures comprehensive protection from assessment through continuous improvement.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {securityProcess.map((phase, i) => (
                  <div key={phase.step} className={`flex gap-8 py-8 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    <span className="text-[13px] text-[#C4A882]/50 font-mono shrink-0 pt-1">{phase.step}</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-1.5">{phase.title}</h3>
                      <p className="text-[13px] text-white/50 leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
