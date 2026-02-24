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
  Lock,
  ShieldCheck,
  FileCheck,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, CTABanner, fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/components/layout";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#08081a]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[600px] rounded-full" style={{
          background: "radial-gradient(ellipse at center, rgba(6,69,255,0.15) 0%, rgba(80,40,200,0.08) 40%, transparent 70%)"
        }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-10 w-[200px] h-[200px] bg-purple-500/8 rounded-full blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0645FF]/25 bg-[#0645FF]/8 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#4B8BFF]" />
            <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">AI-Driven Technology Consulting</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.08] tracking-tight">
            Innovate <span className="bg-gradient-to-r from-[#0645FF] via-[#4B8BFF] to-[#82b1ff] bg-clip-text text-transparent">Faster</span> With
            <br />Technology That Adapts
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Avion Tech builds AI-powered solutions with unmatched quality, speed, and value. Decades of expertise, one mission — delivering the future today.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-8 text-base rounded-xl h-12 group" data-testid="button-hero-cta">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white/10 text-white font-semibold px-8 text-base rounded-xl h-12 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm" data-testid="button-hero-services">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-20">
          <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.04]">
            {[
              { val: "20+", lab: "Years Experience" },
              { val: "500+", lab: "Projects Delivered" },
              { val: "99%", lab: "Client Satisfaction" },
              { val: "50+", lab: "Industries Served" },
            ].map((s) => (
              <div key={s.lab} className="bg-[#0c0c1d]/80 backdrop-blur-sm p-6 sm:p-8 text-center" data-testid={`text-stat-${s.lab.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/30 mt-1.5">{s.lab}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a1c]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div variants={fadeInUp} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0645FF]/20 bg-[#0645FF]/8 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0645FF]" />
              <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">Services</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              The Technology That{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Powers Growth</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link href="/services">
              <Button variant="outline" className="border-white/10 text-white font-semibold px-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] group" data-testid="button-services-more">
                View All 9 Services
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp} className="group">
              <div className="relative h-full rounded-2xl p-7 bg-[#0e0e22]/80 border border-white/[0.06] hover:border-[#0645FF]/20 transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 border border-[#0645FF]/10 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-[#4B8BFF]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08081a]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0645FF]/20 bg-[#0645FF]/8 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0645FF]" />
              <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">About Us</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              Building Technology,{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Empowering Growth.</span>
            </h2>
            <p className="mt-5 text-white/40 leading-relaxed">
              Avion Tech consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help you optimize performance and adapt to evolving technology landscapes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { title: "Innovation", desc: "We believe in continuous improvement and cutting-edge solutions." },
                { title: "Transparency", desc: "Open communication and honesty are at our core." },
                { title: "Customer-First", desc: "Every solution we build begins with the client's success in mind." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-[#0645FF] mt-2" />
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/30 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-6 rounded-xl group" data-testid="button-about-cta">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/contact">
                <span className="text-sm text-white/40 hover:text-white/60 transition-colors cursor-pointer flex items-center gap-1">
                  Contact Us <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <div className="relative rounded-2xl border border-white/[0.06] bg-[#0e0e22]/60 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0645FF]/10 rounded-full blur-[80px]" />
              <div className="relative grid grid-cols-2 gap-5">
                {[
                  { val: "20+", label: "Years Experience" },
                  { val: "500+", label: "Projects Delivered" },
                  { val: "99%", label: "Client Satisfaction" },
                  { val: "50+", label: "Industries Served" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <div className="font-heading text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs text-white/30 mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#0645FF]/10 to-transparent border border-[#0645FF]/10">
                <div>
                  <div className="text-xs text-[#4B8BFF] font-medium">Growth</div>
                  <div className="text-sm text-white/50 mt-0.5">Helping our clients grow meets growing.</div>
                </div>
                <div className="font-heading text-2xl font-bold text-white">80%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SecurityCallout() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a1c]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="relative rounded-3xl border border-white/[0.06] bg-[#0e0e22]/60 p-10 sm:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0645FF]/8 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[80px]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0645FF]/25 bg-[#0645FF]/8 mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4B8BFF]" />
                  <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">Security First</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                  Your Data Security Is{" "}
                  <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Our Priority</span>
                </h2>
                <p className="mt-4 text-white/40 leading-relaxed">
                  Avion Tech implements enterprise-grade security at every level. From SOC 2 compliance to zero-trust architectures, we protect what matters most.
                </p>
                <div className="mt-8">
                  <Link href="/security">
                    <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-6 rounded-xl group" data-testid="button-security-callout">
                      Learn About Our Security
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: "Zero-Trust", desc: "Never trust, always verify." },
                  { icon: ShieldCheck, title: "SOC 2 Compliant", desc: "Audited security controls." },
                  { icon: FileCheck, title: "AES-256 Encryption", desc: "Data encrypted at rest & transit." },
                  { icon: Shield, title: "24/7 Monitoring", desc: "Continuous threat detection." },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#0645FF]/15 transition-colors" data-testid={`card-security-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <div className="w-9 h-9 rounded-lg bg-[#0645FF]/10 border border-[#0645FF]/10 flex items-center justify-center mb-3">
                      <item.icon className="w-4 h-4 text-[#4B8BFF]" />
                    </div>
                    <h4 className="font-heading text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08081a]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0645FF]/20 bg-[#0645FF]/8 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0645FF]" />
            <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">Industries</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Serving{" "}
            <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Diverse Industries</span>
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector) => (
            <motion.div key={sector.title} variants={fadeInUp}>
              <div className="relative group h-full rounded-2xl p-6 bg-[#0e0e22]/80 border border-white/[0.06] hover:border-[#0645FF]/20 transition-all duration-300 hover:-translate-y-1" data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0645FF]/15 to-[#0645FF]/5 border border-[#0645FF]/10 flex items-center justify-center mb-5">
                  <sector.icon className="w-5 h-5 text-[#4B8BFF]" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-3">{sector.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {sector.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-lg bg-[#0645FF]/8 text-[#4B8BFF]/80 border border-[#0645FF]/10">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-10 text-center">
          <Link href="/industries">
            <Button variant="outline" className="border-white/10 text-white font-semibold px-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] group" data-testid="button-industries-more">
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
