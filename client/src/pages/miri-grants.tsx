import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Building2, BarChart3, FileSearch, ShieldCheck, Lock } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const coreFeatures = [
  {
    title: "Full Grant Lifecycle Management",
    desc: "End-to-end management from application through award, post-award, and closeout — including budgets, milestones, drawdowns, and compliance tracking.",
    icon: RefreshCw,
  },
  {
    title: "Multi-Entity Support",
    desc: "Manage grants across multiple entities with role-based access controls and a global entity filter for streamlined cross-organization oversight.",
    icon: Building2,
  },
  {
    title: "Comprehensive Reporting & Analytics",
    desc: "Seven report views including Portfolio, Financial, Budget Utilization, Milestones, Drawdowns, Compliance/Audit, and Entity Comparison — all with CSV export.",
    icon: BarChart3,
  },
  {
    title: "Complete Audit Trail",
    desc: "Full attribution with before/after values on every change, designed for 2 CFR Part 200 compliance and audit-readiness.",
    icon: FileSearch,
  },
  {
    title: "Role-Based Access Control",
    desc: "Administrator, Manager, and Viewer roles with scoped access to ensure the right people see and manage the right information.",
    icon: Lock,
  },
  {
    title: "Built for Compliance",
    desc: "Designed around 2 CFR Part 200 requirements with built-in budget tracking, milestone documentation, drawdown management, and audit-ready reporting.",
    icon: ShieldCheck,
  },
];

export default function MiriGrants() {
  useSEO({
    title: "miri|grants - Integrated Grants Management for Public Agencies",
    description: "End-to-end grants management system for port authorities and public-sector organizations. Full lifecycle management from application through closeout with compliance, reporting, and audit trail.",
  });

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-product">Product</span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl" data-testid="text-hero-title">
            miri | grants<span className="text-[#C4A882]">&trade;</span>
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/70 font-heading font-medium max-w-2xl" data-testid="text-hero-tagline">
            Integrated Grants Management for Public Agencies
          </p>
          <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed" data-testid="text-hero-subtitle">
            End-to-end lifecycle management from application through closeout for port authorities and public-sector organizations managing federal, state, and local grant portfolios.
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
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Core Features</span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight max-w-2xl">
            Everything you need to manage grants, in one platform.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden mt-14">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-[#0A0E1A] p-8" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <feature.icon className="w-6 h-6 text-[#C4A882]/70 mb-5" />
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{feature.desc}</p>
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
                  See miri | grants in action.
                </h2>
                <p className="mt-6 text-[15px] text-white/50 leading-relaxed max-w-lg">
                  Schedule a personalized demo and discover how miri | grants can streamline your grant portfolio management and ensure compliance.
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
