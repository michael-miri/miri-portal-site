import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Globe,
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Code2,
  Database,
  Boxes,
  Smartphone,
  Workflow,
  ChevronRight,
  Building2,
  Landmark,
  MapPin,
  Users,
  Lock,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, CTABanner, fadeIn, stagger } from "@/components/layout";

const features = [
  {
    icon: Zap,
    title: "Rapid Deployment. Every Time.",
    desc: "Organizations get solutions in weeks, not months. No more delayed timelines. No more missed deadlines. No more stalled initiatives.",
  },
  {
    icon: Globe,
    title: "Expertise Across Every Domain.",
    desc: "From AI and cybersecurity to cloud and IoT — our consultants bring 20+ years of cross-industry experience to every project.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Compromise.",
    desc: "Automate 80% of routine processes. Free your team to handle complex challenges. That's intelligent scaling.",
  },
];

const services = [
  { icon: Workflow, title: "Strategy & Transformation" },
  { icon: Brain, title: "AI & Advanced Analytics" },
  { icon: Shield, title: "Cybersecurity & Resilience" },
  { icon: Cloud, title: "Cloud Infrastructure" },
  { icon: Code2, title: "Custom Applications" },
  { icon: Database, title: "Data Governance" },
];

const steps = [
  { num: "1", title: "Discover", desc: "We assess your current state, understand your challenges, and identify opportunities for improvement." },
  { num: "2", title: "Design", desc: "Our team builds a tailored roadmap with clear milestones, priorities, and measurable outcomes." },
  { num: "3", title: "Build", desc: "We implement solutions iteratively with agile sprints, regular check-ins, and continuous feedback." },
  { num: "4", title: "Scale", desc: "Post-launch support, training, and optimization ensure your solutions grow with your organization." },
];

function HeroSection() {
  return (
    <section className="pt-28 pb-20 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto pt-8">
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0645FF]" />
            <span className="text-[12px] text-white/50 font-medium">AI-Driven Consulting</span>
            <span className="text-[12px] text-white/30 mx-1">·</span>
            <Link href="/contact" className="text-[12px] text-[#3B7BFF] font-medium hover:text-[#5B9BFF] transition-colors flex items-center gap-0.5">
              Book a Consultation <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          <motion.h1 variants={fadeIn} className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Technology Consulting<br />for a Smarter Future
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-5 text-base sm:text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
            Avion Tech helps organizations modernize, optimize, and transform — with unmatched quality, speed, and decades of expertise.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 flex items-center justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10 group" data-testid="button-hero-cta">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/[0.1] text-white/70 font-medium rounded-full px-6 h-10 bg-transparent hover:bg-white/[0.04]" data-testid="button-hero-services">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }} className="mt-14">
          <div className="relative rounded-2xl border border-white/[0.08] bg-[#141419] overflow-hidden">
            <div className="rounded-2xl bg-[#141419] p-10 sm:p-16 flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
              <div className="relative w-full max-w-lg">
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0645FF]/10 border border-[#0645FF]/20 mb-6">
                    <Brain className="w-9 h-9 text-[#3B7BFF]" />
                  </div>
                  <p className="text-lg font-heading font-semibold text-white">Delivering the Future Today</p>
                  <p className="text-sm text-white/30 mt-2">500+ projects · 50+ industries · 20+ years</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="mt-10 text-center">
          <p className="text-xs text-white/25 mb-4 tracking-wider uppercase">Trusted by organizations across</p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {["Government", "Healthcare", "Finance", "Manufacturing", "Education"].map((name) => (
              <span key={name} className="text-sm font-medium text-white/20">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Why Avion Tech</motion.span>
          <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Never Let Technology Hold<br />Your Organization Back Again
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-base text-white/40 max-w-lg mx-auto">
            Three reasons why leading organizations choose Avion Tech over traditional consulting.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <motion.div key={f.title} variants={fadeIn}>
              <div className="h-full rounded-2xl border border-[#0645FF]/20 bg-[#141419] p-8 hover:border-[#0645FF]/40 transition-colors duration-300" data-testid={`card-feature-${f.title.split('.')[0].toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-12 h-12 rounded-xl bg-[#0645FF]/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-[#3B7BFF]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="text-center mb-14">
          <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">How It Works</motion.span>
          <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Get Started in 4 Simple Steps
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-4 text-base text-white/40 max-w-lg mx-auto">
            From discovery to scale — faster than you think.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {steps.map((step) => (
              <motion.div key={step.num} variants={fadeIn} className="flex gap-5" data-testid={`step-${step.num}`}>
                <div className="shrink-0 text-[13px] font-bold text-[#3B7BFF] pt-0.5 w-4">{step.num}</div>
                <div className="border-l border-white/[0.06] pl-5">
                  <span className="text-xs text-white/25"> — </span>
                  <span className="font-heading text-base font-semibold text-white">{step.title}</span>
                  <p className="text-sm text-white/40 leading-relaxed mt-1.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="hidden lg:block">
            <div className="rounded-2xl border border-white/[0.08] bg-[#141419] p-8 min-h-[340px] flex items-center justify-center">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  {[
                    { val: "500+", label: "Projects" },
                    { val: "99%", label: "Satisfaction" },
                    { val: "20+", label: "Years" },
                    { val: "50+", label: "Industries" },
                  ].map((s) => (
                    <div key={s.label} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]" data-testid={`text-stat-${s.label.toLowerCase()}`}>
                      <div className="font-heading text-2xl font-bold text-white">{s.val}</div>
                      <div className="text-xs text-white/30 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Services</motion.span>
            <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
              Full-Spectrum Capabilities
            </motion.h2>
          </div>
          <motion.div variants={fadeIn}>
            <Link href="/services">
              <Button variant="outline" className="border-white/[0.1] text-white/70 font-medium rounded-full px-5 h-9 text-sm bg-transparent hover:bg-white/[0.04] group" data-testid="button-services-more">
                All 9 Services <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeIn}>
              <Link href="/services">
                <div className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-[#141419] hover:border-white/[0.12] transition-colors cursor-pointer group" data-testid={`card-service-${s.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-4.5 h-4.5 text-[#3B7BFF]" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{s.title}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SecurityCallout() {
  return (
    <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl border border-white/[0.08] bg-[#141419] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="p-8 sm:p-12">
              <motion.span variants={fadeIn} className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Security First</motion.span>
              <motion.h2 variants={fadeIn} className="font-heading text-2xl sm:text-3xl font-bold text-white mt-3 leading-tight">
                Your Data Security<br />Is Our Priority
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-4 text-sm text-white/40 leading-relaxed max-w-md">
                Enterprise-grade security at every level. From SOC 2 compliance to zero-trust architectures, we protect what matters most.
              </motion.p>
              <motion.div variants={fadeIn} className="mt-6">
                <Link href="/security">
                  <Button variant="outline" className="border-white/[0.1] text-white/70 font-medium rounded-full px-5 h-9 text-sm bg-transparent hover:bg-white/[0.04] group" data-testid="button-security-callout">
                    Learn More <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { icon: Lock, title: "Zero-Trust", desc: "Never trust, always verify" },
                  { icon: ShieldCheck, title: "SOC 2", desc: "Audited security controls" },
                  { icon: FileCheck, title: "AES-256", desc: "End-to-end encryption" },
                  { icon: Shield, title: "24/7 Monitoring", desc: "Continuous threat detection" },
                ].map((item) => (
                  <motion.div key={item.title} variants={fadeIn} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]" data-testid={`card-security-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <item.icon className="w-4 h-4 text-[#3B7BFF] mb-2.5" />
                    <div className="text-sm font-semibold text-white/80">{item.title}</div>
                    <div className="text-xs text-white/30 mt-0.5">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhySection />
      <StepsSection />
      <ServicesPreview />
      <SecurityCallout />
      <CTABanner />
    </Layout>
  );
}
