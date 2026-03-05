import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileCheck, ClipboardCheck, Shield, DollarSign, BarChart3 } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const coreModules = [
  {
    title: "Tenant Management",
    desc: "Comprehensive tenant lifecycle management from intake through move-out, including household composition tracking and communication logs.",
    icon: Users,
  },
  {
    title: "Voucher Administration",
    desc: "End-to-end HCV voucher management with automated eligibility screening, issuance tracking, and portability processing.",
    icon: FileCheck,
  },
  {
    title: "Inspections (NSPIRE)",
    desc: "Full NSPIRE inspection workflow with deficiency tracking, scheduling, pass/fail scoring, and compliance reporting.",
    icon: ClipboardCheck,
  },
  {
    title: "Certifications (HUD-50058)",
    desc: "Automated 50058 form generation with built-in validation, submission tracking, and error correction workflows.",
    icon: Shield,
  },
  {
    title: "Financial Management",
    desc: "HAP payment processing, rent calculation, landlord disbursements, and full financial reconciliation tools.",
    icon: DollarSign,
  },
  {
    title: "Reporting (SEMAP)",
    desc: "SEMAP indicator tracking and scoring, VMS reporting, and customizable dashboards for real-time program oversight.",
    icon: BarChart3,
  },
];

const allModules = [
  "Tenant Management",
  "Waitlist",
  "Properties",
  "Voucher Administration",
  "Certifications",
  "Inspections",
  "Work Orders",
  "Financials",
  "Accounts Payable",
  "Tenant Accounting",
  "Reports",
  "Documents",
  "Admin",
  "Client Portal",
  "Landlord Portal",
  "Rent Calculation",
  "Payroll",
];

const complianceItems = [
  {
    title: "HCV Voucher Management",
    desc: "Complete Housing Choice Voucher lifecycle management from application intake through annual recertification.",
  },
  {
    title: "HAP Payment Processing",
    desc: "Automated Housing Assistance Payment calculations with landlord disbursement tracking and reconciliation.",
  },
  {
    title: "NSPIRE Inspections",
    desc: "Aligned with HUD's National Standards for the Physical Inspection of Real Estate protocol for consistent, compliant inspections.",
  },
  {
    title: "50058 Generation",
    desc: "Automated HUD-50058 form generation with built-in validation rules to minimize errors and rejection rates.",
  },
  {
    title: "SEMAP Scoring",
    desc: "Real-time Section Eight Management Assessment Program indicator tracking to maintain High Performer status.",
  },
];

export default function MiriHousing() {
  useSEO({
    title: "miri|housing - Enterprise Housing Management Platform",
    description: "Production-grade PHA management software for Housing Choice Voucher programs. Tenant management, HUD compliance, NSPIRE inspections, HAP processing, and SEMAP reporting.",
  });

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-product">Product</span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl" data-testid="text-hero-title">
            miri | housing<span className="text-[#C4A882]">&trade;</span>
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/70 font-heading font-medium max-w-2xl" data-testid="text-hero-tagline">
            Enterprise Housing Management Platform
          </p>
          <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed" data-testid="text-hero-subtitle">
            Production-grade software built for Public Housing Authorities managing Housing Choice Voucher programs. From tenant intake to HAP disbursement, every workflow is covered.
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
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Core Modules</span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight max-w-2xl">
            Everything a PHA needs, in one platform.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden mt-14">
            {coreModules.map((mod) => (
              <div key={mod.title} className="bg-[#0A0E1A] p-8" data-testid={`card-module-${mod.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <mod.icon className="w-6 h-6 text-[#C4A882]/70 mb-5" />
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{mod.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Full Platform</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                17 integrated modules.
              </h2>
              <p className="mt-6 text-[15px] text-white/50 leading-relaxed max-w-sm">
                Every aspect of housing authority operations covered in a single, unified platform — from waitlist management to payroll.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" data-testid="module-tags">
              {allModules.map((mod) => (
                <span key={mod} className="text-[13px] px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50" data-testid={`tag-module-${mod.toLowerCase().replace(/\s+/g, '-')}`}>
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">HUD Compliance</span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight max-w-2xl mb-14">
            Built for federal compliance from day one.
          </h2>
          <div className="space-y-0">
            {complianceItems.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
                data-testid={`card-compliance-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="lg:col-span-1">
                  <span className="text-[32px] font-bold text-[#C4A882]/50 font-mono leading-none">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="border-t border-white/[0.06] pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-9">
                <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Get Started</span>
                <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight">
                  See miri | housing in action.
                </h2>
                <p className="mt-6 text-[15px] text-white/50 leading-relaxed max-w-lg">
                  Schedule a personalized demo and discover how miri | housing can streamline your PHA operations and improve HUD compliance.
                </p>
              </div>
              <div className="lg:col-span-3 lg:flex lg:justify-end">
                <Link href="/contact">
                  <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-cta-demo">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
