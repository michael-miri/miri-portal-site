import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Stethoscope, CalendarCheck, CreditCard, Pill, FlaskConical, Shield, Lock, ClipboardList, UserCheck } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const coreFeatures = [
  {
    icon: FileText,
    title: "Patient Records",
    desc: "Comprehensive digital patient records with structured data capture, history tracking, and instant retrieval across departments.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Documentation",
    desc: "Streamlined clinical note-taking with customizable templates, voice-to-text support, and automated coding suggestions.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduling & Appointments",
    desc: "Intelligent scheduling with automated reminders, waitlist management, and multi-provider calendar coordination.",
  },
  {
    icon: CreditCard,
    title: "Billing & Claims",
    desc: "End-to-end revenue cycle management with automated claims submission, denial tracking, and payer reconciliation.",
  },
  {
    icon: Pill,
    title: "Prescriptions",
    desc: "Electronic prescribing with drug interaction checks, formulary verification, and pharmacy network integration.",
  },
  {
    icon: FlaskConical,
    title: "Lab Integration",
    desc: "Seamless lab order management with real-time result delivery, abnormal value alerts, and trend analysis.",
  },
];

const complianceItems = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    desc: "Full compliance with HIPAA Privacy and Security Rules, including administrative, physical, and technical safeguards for protected health information.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    desc: "AES-256 encryption at rest and TLS 1.3 in transit. All patient data is encrypted end-to-end across every system touchpoint.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trails",
    desc: "Comprehensive, immutable audit logs tracking every access, modification, and export of patient records for regulatory accountability.",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    desc: "Granular permission controls ensuring staff access only the data relevant to their role, with multi-factor authentication enforcement.",
  },
];

export default function MiriEHR() {
  useSEO({
    title: "miri|ehr - Electronic Health Records System",
    description: "miri|ehr is a secure, HIPAA-compliant electronic health records system featuring patient records, clinical documentation, scheduling, billing, prescriptions, and lab integration.",
  });

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-product">Product</span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl" data-testid="heading-product-name">
            miri|ehr<span className="text-[#C4A882]">&trade;</span>
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/70 font-heading font-semibold max-w-2xl" data-testid="text-product-tagline">
            Electronic Health Records System
          </p>
          <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed" data-testid="text-product-subtitle">
            Secure, compliant health record management built for modern clinical workflows. Streamline patient care with an integrated platform that connects records, scheduling, billing, and clinical documentation in one unified system.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-hero-demo">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-4" data-testid="label-features">Core Features</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.08] tracking-tight mb-16" data-testid="heading-features">
            Everything your practice needs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-md overflow-hidden">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0A0E1A] p-8"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
              >
                <feature.icon className="w-6 h-6 text-[#C4A882]/70 mb-5" />
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-4" data-testid="label-compliance">Security & Compliance</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.08] tracking-tight mb-6" data-testid="heading-compliance">
            Built for compliance from day one.
          </h2>
          <p className="text-[17px] text-white/50 max-w-xl leading-relaxed mb-16" data-testid="text-compliance-desc">
            Patient data security is non-negotiable. miri|ehr is designed with enterprise-grade security controls and full regulatory compliance at every layer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {complianceItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5"
                data-testid={`card-compliance-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="shrink-0 w-10 h-10 rounded-md bg-white/[0.04] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#C4A882]/70" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
