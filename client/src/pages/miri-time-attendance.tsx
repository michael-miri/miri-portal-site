import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, BarChart3, ShieldCheck, Users, Settings } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const coreFeatures = [
  {
    title: "Real-Time Clock-In & Clock-Out",
    desc: "Browser-based and mobile-responsive time tracking with real-time attendance recording. Employees can securely clock in and out from any device — in-office, remote, or in the field.",
    icon: Clock,
  },
  {
    title: "GPS & IP Location Verification",
    desc: "Configurable location rules with GPS-based verification on mobile and IP-based verification via browser. Administrators manage approved worksites with geo-fencing and manual location fallback.",
    icon: MapPin,
  },
  {
    title: "Configurable Reporting & Dashboards",
    desc: "Administrative dashboards for monitoring workforce attendance in real-time. Configurable reporting tools with export to CSV, Excel, and PDF for operational planning and compliance.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access Control",
    desc: "Scoped permissions for HR Administrators, IT Administrators, Managers, and Staff. Each role has appropriate access to attendance records, configuration, reporting, and approval workflows.",
    icon: Users,
  },
  {
    title: "Enterprise SSO & Security",
    desc: "Enterprise Single Sign-On integration with existing identity management systems. TLS encryption in transit, AES-256 encryption at rest, MFA support, and comprehensive audit logging.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Configurability",
    desc: "Tailor workflows, reporting structures, location verification rules, and user permissions without redevelopment. Low administrative overhead with centralized management tools.",
    icon: Settings,
  },
];

const capabilities = [
  "Real-time clock-in and clock-out",
  "Browser-based and mobile-responsive access",
  "GPS-based location verification",
  "IP-based location verification via browser",
  "Manual worksite selection from approved locations",
  "Configurable approval workflows",
  "Administrative dashboards and monitoring",
  "Bulk user account management",
  "Historical data archival and retrieval",
  "Data export in CSV, Excel, and PDF",
  "Enterprise SSO authentication",
  "Role-based access control with scoped permissions",
];

export default function MiriTimeAttendance() {
  useSEO({
    title: "miri|time & attendance - Cloud-Based Workforce Time Tracking",
    description: "Modern, cloud-based time and attendance platform for distributed workforces. Real-time clock-in/out, GPS and IP location verification, configurable workflows, and enterprise-grade security.",
  });

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-product">Product</span>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl" data-testid="text-hero-title">
            miri | time & attendance<span className="text-[#C4A882]">&trade;</span>
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.5vw,1.75rem)] text-white/70 font-heading font-medium max-w-2xl" data-testid="text-hero-tagline">
            Cloud-Based Workforce Time Tracking
          </p>
          <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed" data-testid="text-hero-subtitle">
            A modern, cloud-based time and attendance platform designed for distributed workforces. Accurately track employee attendance and location while supporting operational planning, reporting, and workforce visibility across your organization.
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
            Everything you need to manage workforce attendance.
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

      <section className="py-24 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Platform Capabilities</span>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight max-w-2xl mb-14">
            Built for distributed and mobile workforces.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
            {capabilities.map((cap) => (
              <div key={cap} className="bg-[#0A0E1A] px-8 py-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/50 mt-2 shrink-0" />
                <span className="text-[14px] text-white/60 leading-relaxed">{cap}</span>
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
                  See miri | time & attendance in action.
                </h2>
                <p className="mt-6 text-[15px] text-white/50 leading-relaxed max-w-lg">
                  Schedule a personalized demo and discover how miri | time & attendance can modernize your workforce management with real-time tracking, location verification, and configurable workflows.
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
