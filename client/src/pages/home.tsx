import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, HeartPulse, Landmark, Factory, Zap, Shield, GraduationCap, ShoppingCart, Sword, Check, Rocket, CircleCheckBig, DollarSign } from "lucide-react";
import { Layout, CTABanner } from "@/components/layout";
import heroBg from "@assets/AdobeStock_206661841_1772042502289.jpeg";

const capabilities = [
  { num: "01", title: "Strategy &\nTransformation", desc: "Align business goals with technology through agile delivery and high-value outcomes." },
  { num: "02", title: "AI & Advanced\nAnalytics", desc: "Embed intelligent tools and automation to optimize performance and extend asset life." },
  { num: "03", title: "Cybersecurity\n& Resilience", desc: "Secure-by-design architectures with continuous monitoring and compliance frameworks." },
  { num: "04", title: "Cloud & Hybrid\nInfrastructure", desc: "Scalable, resilient platforms with DevOps methods that accelerate deployment." },
  { num: "05", title: "Custom Apps\n& Automation", desc: "Streamlined workflows through agile development and user-centered design." },
  { num: "06", title: "Data Governance\n& Management", desc: "Structured data assets that build trust, improve accessibility, and enable integration." },
  { num: "07", title: "UX Design\n& Research", desc: "Human-centered design, usability testing, and design systems that make complex technology intuitive." },
  { num: "08", title: "Managed Services\n& Support", desc: "24/7 monitoring, SLA-backed operations, and ongoing optimization so your systems never skip a beat." },
  { num: "09", title: "Training & Change\nManagement", desc: "Adoption programs, technical training, and organizational change support that ensure your investment delivers." },
];

const stats = [
  { value: "500+", label: "Projects delivered across government, enterprise, and startups" },
  { value: "30+", label: "Years of combined expertise in technology consulting" },
  { value: "99%", label: "Client satisfaction rate across all engagements" },
  { value: "50+", label: "Industries served — from healthcare to defense" },
];

const industries = [
  { name: "Government & Federal", slug: "government", icon: <Shield className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Healthcare", slug: "healthcare", icon: <HeartPulse className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Finance & Banking", slug: "finance", icon: <Landmark className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Manufacturing", slug: "manufacturing", icon: <Factory className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Energy & Utilities", slug: "energy", icon: <Zap className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Education", slug: "education", icon: <GraduationCap className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Retail & E-Commerce", slug: "retail", icon: <ShoppingCart className="w-5 h-5 text-[#0A0E1A]" /> },
  { name: "Defense & Intelligence", slug: "defense", icon: <Sword className="w-5 h-5 text-[#0A0E1A]" /> },
];

export default function Home() {
  return (
    <Layout>
      <section className="pt-[160px] pb-32 bg-[#0A0E1A] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/30 via-[#0A0E1A]/30 to-[#0A0E1A]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
            <div className="lg:col-span-7">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] inline-flex items-center gap-2 mb-8"><Sparkles className="w-4 h-4" /> AI-Driven Technology Consulting</span>
              <h1 className="font-heading text-[clamp(3rem,6.5vw,5.5rem)] font-bold text-white leading-[1.02] tracking-[-0.02em]">
                Build<br />
                smarter.<br />
                <span className="text-[#0645FF]">Move faster.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-end">
              <p className="text-[24px] text-white/50 leading-relaxed max-w-md mb-6">
                We help organizations modernize operations, harness AI, and scale infrastructure.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90 group" data-testid="button-hero-cta">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Promise</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-selfware-section">
                Vendor software<br />is dead.<br />
                <span className="text-white/40">Welcome to selfware.</span>
              </h2>
              <p className="mt-8 text-[18px] text-white/50 leading-relaxed max-w-md">
                We guarantee to be faster, better, and cheaper. We've built a proven AI methodology that delivers tangible outcomes — leveraging the power of tomorrow, today. Software shouldn't be one-size-fits-all. Selfware is software built for you.
              </p>
            </div>

            <div className="lg:col-span-7 lg:flex lg:items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden w-full">
                {[
                  { title: "Faster", desc: "AI-accelerated delivery that cuts timelines in half.", icon: <Rocket className="w-5 h-5" /> },
                  { title: "Better", desc: "Purpose-built solutions, not bloated vendor packages.", icon: <CircleCheckBig className="w-5 h-5" /> },
                  { title: "Cheaper", desc: "AI-driven efficiency means lower costs without cutting corners.", icon: <DollarSign className="w-5 h-5" /> },
                ].map((item) => (
                  <div key={item.title} className="bg-[#0A0E1A] p-8" data-testid={`card-selfware-${item.title.toLowerCase()}`}>
                    <div className="w-10 h-10 rounded-full bg-[#C4A882] flex items-center justify-center text-[#0A0E1A] mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="mb-16">
            <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">What We Do</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-capabilities-section">
                  Unlimited capabilities.<br />
                  <span className="text-white/40">One partner.</span>
                </h2>
                <p className="mt-6 text-[18px] text-white/50 leading-relaxed max-w-sm">
                  From strategy through implementation — we cover the full technology spectrum so you don't have to manage multiple vendors.
                </p>
              </div>
              <Link href="/services" data-testid="link-capabilities-more">
                <span className="text-[13px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  View all services <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {capabilities.map((cap) => (
              <Link key={cap.num} href={`/services#service-${cap.num}`} className="block h-full">
                <div className="bg-[#0A0E1A] p-8 h-full group hover:bg-[#141B2E] transition-colors cursor-pointer" data-testid={`card-capability-${cap.num}`}>
                  <span className="text-[48px] leading-none font-bold text-[#C4A882]/30 font-mono block mb-2 transition-colors group-hover:text-[#C4A882]/50">{cap.num}</span>
                  <h3 className="font-heading text-[17px] font-semibold text-white leading-snug whitespace-pre-line mb-3">{cap.title}</h3>
                  <p className="text-[15px] text-white/50 leading-relaxed">{cap.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Why Us</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-why-section">
                We don't just<br />advise. We build.
              </h2>
              <p className="mt-8 text-[18px] text-white/50 leading-relaxed max-w-md">
                Most consultants hand you a strategy deck and walk away. We roll up our sleeves and implement alongside your team — from architecture to deployment to ongoing support.
              </p>
            </div>

            <div className="lg:flex lg:flex-col lg:justify-center">
              <div className="space-y-6 lg:mt-0">
                {[
                  { title: "Practitioners, not theorists", desc: "We build and ship — not just advise." },
                  { title: "ROI in months, not years", desc: "We prioritize high-impact work first." },
                  { title: "One partner, full spectrum", desc: "AI, cloud, security, data, UX, managed services, and more." },
                ].map((item, i) => (
                  <div key={i} className="border-t border-white/[0.06] pt-6 flex items-start gap-4" data-testid={`why-item-${i}`}>
                    <div className="w-6 h-6 rounded-full bg-[#C4A882] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#0A0E1A]" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-white mb-1.5">{item.title}</h3>
                      <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">How We Work</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-howwework-section">
                Four phases.<br />
                <span className="text-white/40">Zero surprises.</span>
              </h2>
              <p className="mt-6 text-[18px] text-white/50 leading-relaxed max-w-sm">
                Every engagement follows a proven methodology designed for clarity, speed, and measurable outcomes.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                {[
                  { num: "01", title: "Discover", desc: "We assess your current state, understand challenges, and map opportunities. No assumptions — just evidence-based insight." },
                  { num: "02", title: "Design", desc: "We build a tailored roadmap with clear milestones, priorities, and measurable outcomes. You'll know exactly what's coming." },
                  { num: "03", title: "Build", desc: "We implement iteratively with agile sprints, regular check-ins, and continuous feedback. No black boxes." },
                  { num: "04", title: "Scale", desc: "Post-launch support, training, and optimization ensure your solutions grow as your organization grows." },
                ].map((step, i) => (
                  <div key={step.num} className={`flex gap-8 py-10 ${i > 0 ? "border-t border-white/[0.06]" : ""}`} data-testid={`step-${step.num}`}>
                    <span className="text-[32px] leading-none font-bold text-[#C4A882]/30 font-mono shrink-0">{step.num}</span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-[16px] text-white/50 leading-relaxed max-w-lg">{step.desc}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Industries</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-industries-section">
                Built for every<br />sector.
              </h2>
            </div>
            <div className="lg:text-right">
              <Link href="/industries" data-testid="link-industries-more">
                <span className="text-[13px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  Explore all industries <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {industries.map((item) => (
              <div key={item.name} className="bg-[#0A0E1A] p-8 h-full flex items-center gap-4" data-testid={`industry-tag-${item.name.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-10 h-10 rounded-full bg-[#C4A882] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-[14px] text-white/50 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="mb-16">
            <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Security</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="heading-security-section">
                  Security isn't a feature. It's the <span className="text-white/40">foundation.</span>
                </h2>
                <p className="mt-6 text-[18px] text-white/50 leading-relaxed max-w-lg">
                  Every system we build starts with security. Zero-trust architectures, AES-256 encryption, and 24/7 monitoring — embedded from day one.
                </p>
              </div>
              <Link href="/security" data-testid="link-security-more">
                <span className="text-[13px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  Our security approach <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {[
              { title: "Zero-Trust", desc: "Every access request verified regardless of source" },
              { title: "AES-256", desc: "Enterprise-grade encryption at rest and in transit" },
              { title: "24/7 Monitoring", desc: "Continuous threat detection and rapid response" },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0E1A] p-8" data-testid={`card-security-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                <h3 className="text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
