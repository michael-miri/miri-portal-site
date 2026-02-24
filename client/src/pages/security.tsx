import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Lock,
  ShieldCheck,
  FileCheck,
  Eye,
  Key,
  Server,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/components/layout";

const securityPillars = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    desc: "We implement a zero-trust model where every access request is verified regardless of source. No implicit trust — every user, device, and connection is authenticated and authorized continuously.",
    items: ["Identity verification at every access point", "Micro-segmentation of network resources", "Least-privilege access controls", "Continuous authentication and session monitoring"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Standards",
    desc: "Our security practices align with the most rigorous industry standards and regulatory frameworks, ensuring your organization meets its compliance obligations.",
    items: ["SOC 2 Type II certified", "NIST 800-53 compliant", "ISO 27001 aligned", "FedRAMP High authorization experience"],
  },
  {
    icon: FileCheck,
    title: "Data Encryption",
    desc: "All data is protected with enterprise-grade encryption both at rest and in transit, ensuring your sensitive information remains confidential at every stage.",
    items: ["AES-256 encryption at rest", "TLS 1.3 for data in transit", "End-to-end encryption for sensitive communications", "Hardware security module (HSM) key management"],
  },
  {
    icon: Eye,
    title: "24/7 Threat Monitoring",
    desc: "Our security operations center provides continuous monitoring, detection, and response to potential threats across all systems and environments.",
    items: ["Real-time security event monitoring", "Automated threat detection and alerting", "Behavioral anomaly detection", "Incident response within minutes"],
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    desc: "Robust identity management ensures the right people have the right access at the right time, with full audit trails and governance controls.",
    items: ["Multi-factor authentication (MFA)", "Single sign-on (SSO) integration", "Role-based access control (RBAC)", "Privileged access management (PAM)"],
  },
  {
    icon: Network,
    title: "Network Security",
    desc: "Multi-layered network defense protects against external threats while maintaining performance and availability for authorized users.",
    items: ["Next-generation firewall protection", "Intrusion detection and prevention (IDS/IPS)", "DDoS mitigation and traffic analysis", "Secure VPN and remote access"],
  },
];

const certifications = [
  { name: "SOC 2 Type II", desc: "Audited security controls for service organizations" },
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
        label="Security at Avion Tech"
        title="Enterprise-Grade"
        highlight="Security"
        description="Security isn't an afterthought — it's embedded in everything we build. From zero-trust architectures to continuous monitoring, we protect what matters most."
      />

      <section className="relative py-24 bg-[#070e24]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Security Pillars</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
              How We Protect{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Your Data</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp} className="group">
                <div className="relative h-full rounded-2xl p-7 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] hover-elevate" data-testid={`card-security-pillar-${pillar.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center mb-5">
                    <pillar.icon className="w-6 h-6 text-[#0645FF]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-5">{pillar.desc}</p>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0645FF] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/35 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#050a1a] overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-[#0645FF]/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Our Process</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
                Security{" "}
                <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Lifecycle</span>
              </h2>
              <p className="mt-4 text-white/45 max-w-lg mx-auto">
                Our proven five-phase approach ensures comprehensive protection from assessment through continuous improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {securityProcess.map((phase) => (
                <motion.div key={phase.step} variants={fadeInUp} className="relative text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="font-heading text-3xl font-bold text-[#0645FF]/30 mb-3">{phase.step}</div>
                  <h4 className="font-heading text-base font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#070e24]">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Compliance</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
                Certifications &{" "}
                <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Standards</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert) => (
                <motion.div key={cert.name} variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05]" data-testid={`card-cert-${cert.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <ShieldCheck className="w-6 h-6 text-[#0645FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white">{cert.name}</h4>
                    <p className="text-sm text-white/35 mt-1">{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-[#050a1a]">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Need a Security Assessment?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-white/45 max-w-lg mx-auto">
              Our cybersecurity experts can evaluate your current posture and recommend improvements.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-security-contact">
                  Request an Assessment
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="border-white/15 text-white font-semibold px-8 bg-white/5" data-testid="button-security-faq">
                  Security FAQ
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
