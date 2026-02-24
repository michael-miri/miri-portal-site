import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Code2,
  Smartphone,
  Globe,
  Workflow,
  Shield,
  Cloud,
  Database,
  Boxes,
  Building2,
  Landmark,
  MapPin,
  Users,
  CheckCircle2,
  Lock,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, CTABanner, fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/components/layout";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo__1771947651217.png";

const services = [
  { icon: Workflow, title: "Strategy & Transformation", desc: "Align business goals with technology capabilities through agile delivery." },
  { icon: Brain, title: "AI & Advanced Analytics", desc: "Embed intelligent tools and automation to optimize performance." },
  { icon: Shield, title: "Cybersecurity & Resilience", desc: "Secure-by-design architectures with continuous monitoring." },
  { icon: Cloud, title: "Cloud & Hybrid Infrastructure", desc: "Scalable, resilient platforms with DevOps methods." },
  { icon: Code2, title: "Custom Applications", desc: "Streamlined workflows through agile development." },
  { icon: Database, title: "Data Governance", desc: "Structured data assets that build trust and integration." },
];

const sectors = [
  { icon: Building2, title: "Private Sector", items: ["Enterprise", "Startups", "SMBs"] },
  { icon: Landmark, title: "Government & Federal", items: ["Defense", "Compliance", "Secure Systems"] },
  { icon: MapPin, title: "Municipal", items: ["Smart Cities", "Public Services"] },
  { icon: Users, title: "Customer-Facing", items: ["E-Commerce", "SaaS", "Consumer Apps"] },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050a1a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6,69,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6,69,255,0.1) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(6,69,255,0.08) 0%, transparent 45%)`
        }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0645FF]/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#0645FF]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute top-20 right-20 w-[300px] h-[300px] border border-[#0645FF]/[0.06] rounded-full" />
        <div className="absolute top-32 right-32 w-[200px] h-[200px] border border-[#0645FF]/[0.04] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-32">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#0645FF]" />
            <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Avion Tech &mdash; AI-Driven Consulting</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Delivering<br />the Future{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#0645FF] via-[#4B8BFF] to-[#82b1ff] bg-clip-text text-transparent">Today</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0645FF] to-transparent rounded-full" />
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg text-white/50 max-w-lg leading-relaxed">
            <span className="text-white/70 font-medium">Avion Tech</span> builds AI-powered solutions with unmatched quality, speed, and value. Decades of expertise, one mission.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0645FF] text-white font-semibold px-8 text-base group" data-testid="button-hero-cta">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/15 text-white font-semibold px-8 text-base bg-white/5 backdrop-blur-sm" data-testid="button-hero-services">
                Our Services
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-10">
            {[{ val: "20+", lab: "Years Experience" }, { val: "500+", lab: "Projects" }, { val: "99%", lab: "Satisfaction" }].map((s) => (
              <div key={s.lab}>
                <div className="font-heading text-2xl font-bold text-white" data-testid={`text-stat-${s.lab.toLowerCase().replace(/\s/g, '-')}`}>{s.val}</div>
                <div className="text-xs text-white/35 mt-0.5">{s.lab}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 120L1440 120L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 120Z" fill="#070e24" />
        </svg>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#070e24]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-16">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Avion Tech Capabilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Technology Consulting</span>
            </h2>
            <p className="mt-5 text-white/45 max-w-md leading-relaxed">
              Avion Tech delivers actionable insights across cloud, AI, cybersecurity, digital twins, and more.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp} className="relative group bg-[#070e24] p-7 hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-1.5">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-10 text-center">
          <Link href="/services">
            <Button variant="outline" className="border-white/15 text-white font-semibold px-8 bg-white/5 group" data-testid="button-services-more">
              View All 9 Services
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 100L1440 100L1440 0C1200 60 960 20 720 50C480 80 240 10 0 60L0 100Z" fill="#050a1a" />
        </svg>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050a1a] overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0645FF]/[0.04] to-transparent" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-[#0645FF]/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "20+", label: "Years Experience", gradient: "from-[#0645FF]/15 to-[#0645FF]/5" },
                { val: "500+", label: "Projects Delivered", gradient: "from-[#4B8BFF]/15 to-[#4B8BFF]/5" },
                { val: "99%", label: "Client Satisfaction", gradient: "from-[#0645FF]/20 to-[#0645FF]/5" },
                { val: "50+", label: "Industries Served", gradient: "from-[#4B8BFF]/15 to-[#0645FF]/5" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl bg-gradient-to-br ${stat.gradient} border border-white/[0.05] p-6 text-center`}>
                  <div className="font-heading text-3xl font-bold text-white">{stat.val}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Why Avion Tech</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Avion Tech</span>
            </h2>
            <p className="mt-5 text-white/45 leading-relaxed">
              Avion Tech consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help you optimize performance.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { title: "Scalable & Secure", desc: "Solutions aligned with organizational goals, built on secure-by-design architectures." },
                { title: "Actionable Insights", desc: "Industry-leading tools and methodologies that drive efficiency and measurable results." },
                { title: "End-to-End Delivery", desc: "From assessment and strategy through implementation and long-term support." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="relative shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center">
                      <span className="font-heading text-sm font-bold text-[#0645FF]">0{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about">
                <Button className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-about-cta">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 50C1200 70 900 30 600 60C300 90 100 40 0 50L0 80Z" fill="#070e24" />
        </svg>
      </div>
    </section>
  );
}

function SecurityCallout() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#070e24] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="relative rounded-3xl border border-[#0645FF]/20 bg-gradient-to-br from-[#0645FF]/10 via-[#050a1a] to-[#050a1a] p-10 sm:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0645FF]/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0645FF]/5 rounded-full blur-[60px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeInLeft}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0645FF]" />
                  <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Security First</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Your Data Security Is{" "}
                  <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Our Priority</span>
                </h2>
                <p className="mt-4 text-white/45 leading-relaxed max-w-lg">
                  Avion Tech implements enterprise-grade security at every level. From SOC 2 compliance to zero-trust architectures, we protect what matters most.
                </p>
                <div className="mt-8">
                  <Link href="/security">
                    <Button className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-security-callout">
                      Learn About Our Security
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: "Zero-Trust Architecture", desc: "Never trust, always verify across all systems." },
                  { icon: ShieldCheck, title: "SOC 2 Compliant", desc: "Audited security controls and processes." },
                  { icon: FileCheck, title: "Data Encryption", desc: "AES-256 encryption at rest and in transit." },
                  { icon: Shield, title: "24/7 Monitoring", desc: "Continuous threat detection and response." },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]" data-testid={`card-security-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <item.icon className="w-5 h-5 text-[#0645FF] mb-3" />
                    <h4 className="font-heading text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 30C1200 60 900 10 600 40C300 70 100 20 0 40L0 80Z" fill="#050a1a" />
        </svg>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050a1a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Avion Tech Industries</motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Every Sector</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <motion.div key={sector.title} variants={fadeInUp}>
              <div className="relative group h-full rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] hover-elevate" data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center mb-4">
                  <sector.icon className="w-5 h-5 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-3">{sector.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {sector.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-[#0645FF]/10 text-[#4B8BFF] border border-[#0645FF]/15">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-10 text-center">
          <Link href="/industries">
            <Button variant="outline" className="border-white/15 text-white font-semibold px-8 bg-white/5 group" data-testid="button-industries-more">
              Explore All Industries
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <SecurityCallout />
      <IndustriesPreview />
      <CTABanner />
    </Layout>
  );
}
