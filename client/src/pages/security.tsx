import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

const securityPillars = [
  {
    title: "Zero-Trust Architecture",
    desc: "Every access request is verified regardless of source. No implicit trust — every user, device, and connection is authenticated and authorized continuously.",
    items: ["Identity verification at every access point", "Micro-segmentation of network resources", "Least-privilege access controls", "Continuous authentication and session monitoring"],
  },
  {
    title: "Compliance & Standards",
    desc: "Our practices align with the most rigorous industry standards and regulatory frameworks.",
    items: ["NIST 800-53 compliant", "ISO 27001 aligned", "FedRAMP High authorization experience"],
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

const certifications = [
  { name: "NIST 800-53", desc: "Federal information security standards" },
  { name: "ISO 27001", desc: "International information security management" },
  { name: "FedRAMP", desc: "Federal cloud security authorization" },
  { name: "GDPR", desc: "European data protection regulation" },
  { name: "CCPA", desc: "California consumer privacy act" },
];

const securityProcess = [
  { step: "01", title: "Assess", desc: "Comprehensive security audit of current infrastructure, policies, and vulnerabilities." },
  { step: "02", title: "Design", desc: "Architect secure-by-design solutions aligned with your risk profile and compliance needs." },
  { step: "03", title: "Implement", desc: "Deploy security controls, monitoring, and response capabilities across your environment." },
  { step: "04", title: "Monitor", desc: "Continuous 24/7 monitoring with automated detection and rapid incident response." },
  { step: "05", title: "Improve", desc: "Regular assessments, penetration testing, and security posture improvements." },
];

export default function Security() {
  return (
    <Layout>
      <PageHeader
        label="Our Security"
        title="Enterprise-grade security."
        description="Security isn't an afterthought — it's embedded in everything we build. From zero-trust to continuous monitoring, we protect what matters most."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {securityPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              data-testid={`card-security-pillar-${pillar.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="lg:col-span-1">
                <span className="text-[13px] text-[#C4A882]/50 font-mono">0{i + 1}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl font-bold text-white leading-tight">{pillar.title}</h3>
                <p className="mt-3 text-[14px] text-white/50 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-[#C4A882]/50 mt-1.5 text-[8px]">●</span>
                      <span className="text-[14px] text-white/50 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Compliance</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                Certifications &<br />standards.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-[#0A0E1A] p-6 hover:bg-[#141B2E] transition-colors" data-testid={`card-cert-${cert.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <h4 className="text-[15px] font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-[12px] text-white/40 leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight">
            Need a security assessment?
          </h2>
          <p className="mt-4 text-[15px] text-white/50 leading-relaxed max-w-lg mx-auto">
            Our cybersecurity experts can evaluate your current posture and recommend improvements.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-security-contact">
                Request an Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-white/[0.1] text-white/60 font-medium rounded-full px-7 h-11 bg-transparent hover:bg-white/[0.03] hover:text-white/80" data-testid="button-security-faq">
                Security FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
