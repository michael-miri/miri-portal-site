import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Briefcase, MessageSquare, UserPlus, Smartphone } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const coreFeatures = [
  {
    icon: Users,
    title: "Employee Resources",
    desc: "Centralized hub for company policies, documents, benefits information, and team directories accessible from anywhere.",
  },
  {
    icon: Calendar,
    title: "Scheduling & Calendar",
    desc: "Integrated scheduling with shift management, PTO tracking, and shared team calendars for seamless coordination.",
  },
  {
    icon: Briefcase,
    title: "Client Management",
    desc: "Track client interactions, manage projects, and maintain detailed records with a streamlined CRM experience.",
  },
  {
    icon: MessageSquare,
    title: "Internal Communications",
    desc: "Company-wide announcements, team messaging, and discussion threads to keep everyone aligned and informed.",
  },
  {
    icon: UserPlus,
    title: "Onboarding",
    desc: "Automated onboarding workflows with task checklists, document collection, and training module assignments for new hires.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    desc: "Fully responsive design with native-like mobile experience so teams stay connected on the go.",
  },
];

const keyBenefits = [
  {
    title: "Unified Portal",
    desc: "Replace multiple disconnected tools with a single, cohesive platform that centralizes employee resources, scheduling, and communications.",
  },
  {
    title: "Streamlined Onboarding",
    desc: "Reduce time-to-productivity with automated onboarding workflows that guide new employees through every step from day one.",
  },
  {
    title: "Integrated Scheduling",
    desc: "Eliminate scheduling conflicts and manual coordination with smart calendar management that syncs across teams and departments.",
  },
  {
    title: "Mobile-Responsive",
    desc: "Access the full portal experience from any device, enabling remote and field teams to stay connected and productive.",
  },
];

export default function MiriPortal() {
  useSEO({
    title: "miri|portal - Company Operations Portal",
    description: "miri|portal is a company operations portal that centralizes employee resources, scheduling, client management, and internal communications in one unified platform.",
  });

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-product">Product</span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl" data-testid="heading-product-name">
            miri | portal<span className="text-[#C4A882]">&trade;</span>
          </h1>
          <p className="mt-4 text-[22px] text-white/70 font-heading max-w-2xl" data-testid="text-product-tagline">
            Company Operations Portal
          </p>
          <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed" data-testid="text-product-subtitle">
            Centralize employee resources, scheduling, client management, and internal communications in one unified platform — replacing scattered tools with a single source of truth for your organization.
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
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-4">Capabilities</span>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.1] tracking-tight mb-16" data-testid="heading-core-features">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#0A0E1A] p-8"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <feature.icon className="w-6 h-6 text-[#C4A882] mb-5" />
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-4">Why miri | portal</span>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.1] tracking-tight mb-16" data-testid="heading-key-benefits">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {keyBenefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`lg:col-span-6 ${i > 1 ? "lg:mt-0" : ""}`}
                data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="border border-white/[0.06] rounded-md p-8">
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-[15px] text-white/50 leading-relaxed">{benefit.desc}</p>
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
