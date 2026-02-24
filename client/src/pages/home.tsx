import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo__1771947651217.png";
import {
  Brain,
  Code2,
  Smartphone,
  Globe,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  Bot,
  Workflow,
  ChevronRight,
  Building2,
  Landmark,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Please tell us how we can help"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Brain, title: "AI Consulting", desc: "Smart automation and data-driven insights that transform operations." },
  { icon: Code2, title: "App Development", desc: "Scalable, high-performance applications built for the future." },
  { icon: Bot, title: "Automation", desc: "Eliminate repetitive tasks and accelerate your workflow 10x." },
  { icon: Globe, title: "Web Platforms", desc: "Responsive, conversion-driven websites and web applications." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps with flawless UX." },
  { icon: Workflow, title: "Digital Transformation", desc: "End-to-end modernization aligned with your goals." },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a1a]/70 backdrop-blur-2xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a href="#" className="shrink-0" data-testid="link-logo">
            <img src={logoImage} alt="Avion Tech" className="h-9 sm:h-11 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollTo(link.href)} className="text-sm font-medium text-white/60 transition-colors duration-200" data-testid={`link-nav-${link.label.toLowerCase()}`}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <Button onClick={() => scrollTo("#contact")} className="bg-[#0645FF] text-white font-semibold px-6" data-testid="button-nav-cta">
              Get Started
            </Button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} data-testid="button-mobile-menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#050a1a]/95 backdrop-blur-2xl border-t border-white/5">
            <div className="px-5 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => scrollTo(link.href)} className="text-left text-base font-medium text-white/60 py-2.5" data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</button>
              ))}
              <Button onClick={() => scrollTo("#contact")} className="bg-[#0645FF] text-white font-semibold mt-2 w-full" data-testid="button-mobile-cta">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

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
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-[#0645FF]/30 rounded-full" />
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-[#0645FF]/20 rounded-full" />
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-[#4B8BFF]/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-32">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#0645FF]" />
            <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">AI-Driven Consulting</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Delivering<br />the Future{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#0645FF] via-[#4B8BFF] to-[#82b1ff] bg-clip-text text-transparent">Today</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0645FF] to-transparent rounded-full" />
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg text-white/50 max-w-lg leading-relaxed">
            We build AI-powered solutions with unmatched quality, speed, and value. Decades of expertise, one mission.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#0645FF] text-white font-semibold px-8 text-base group" data-testid="button-hero-cta">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="border-white/15 text-white font-semibold px-8 text-base bg-white/5 backdrop-blur-sm" data-testid="button-hero-services">
              Our Services
            </Button>
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

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#070e24]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0645FF]/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-16">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">What We Do</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Solutions That{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Move You Forward</span>
            </h2>
            <p className="mt-5 text-white/45 max-w-md leading-relaxed">
              From concept to deployment, we bring innovative technology to every challenge with security, speed, and precision.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp} className="relative group bg-[#070e24] p-8 hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#0645FF]/5 to-transparent rounded-bl-3xl" />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </div>

              {i < services.length - 1 && (
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#0645FF]/10 rounded-br-2xl opacity-30" />
              )}
            </motion.div>
          ))}
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

function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050a1a] overflow-hidden">
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
              We Guarantee to{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Beat the Competition</span>
            </h2>
            <p className="mt-5 text-white/45 leading-relaxed">
              Decades of hands-on expertise, innovative technologies, and an unwavering commitment to delivering the best experience.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { title: "Unmatched Quality", desc: "Rigorous standards, enterprise-grade security, best-in-class practices." },
                { title: "Most Affordable", desc: "Premium results at competitive prices. We'll beat any comparable quote." },
                { title: "Fastest Delivery", desc: "Agile teams and proven processes get you to market ahead of schedule." },
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

            <div className="mt-10">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#0645FF] text-white font-semibold px-8 group" data-testid="button-about-cta">
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 30C1100 0 800 60 500 20C200 -10 100 50 0 30L0 80Z" fill="#0645FF" fillOpacity="0.06" />
          <path d="M0 80L1440 80L1440 50C1200 70 900 30 600 60C300 90 100 40 0 50L0 80Z" fill="#070e24" />
        </svg>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const sectors = [
    { icon: Building2, title: "Private Sector", items: ["Enterprise", "Startups", "SMBs"] },
    { icon: Landmark, title: "Government & Federal", items: ["Defense", "Compliance", "Secure Systems"] },
    { icon: MapPin, title: "Municipal", items: ["Smart Cities", "Public Services", "Community Apps"] },
    { icon: Users, title: "Customer-Facing", items: ["E-Commerce", "SaaS", "Consumer Apps"] },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#070e24] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Who We Serve</motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Every Sector</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-white/45 max-w-lg mx-auto">
            Tailored solutions for every industry, from private enterprise to public service.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <motion.div key={sector.title} variants={fadeInUp}>
              <div className="relative group h-full rounded-2xl p-6 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] hover-elevate" data-testid={`card-industry-${sector.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0645FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Logistics", "Energy", "Real Estate"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/[0.06] text-white/30 bg-white/[0.02]">{tag}</span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 100L1440 100L1440 60C1100 20 800 80 500 40C200 0 100 70 0 40L0 100Z" fill="#050a1a" />
        </svg>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = (_data: ContactFormValues) => {
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll be in touch within 24 hours." });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050a1a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0645FF]/5 rounded-full blur-[130px]" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#0645FF]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Get Started</motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-white/45 max-w-lg mx-auto">
            Book a free consultation. No obligations, no pressure.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0645FF]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#0645FF]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/50 mb-8">We'll reach out within 24 hours.</p>
                  <Button onClick={() => { setSubmitted(false); form.reset(); }} variant="outline" className="border-white/15 text-white bg-white/5" data-testid="button-send-another">
                    Send Another
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Name *</FormLabel>
                          <FormControl><Input {...field} placeholder="John Doe" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 rounded-xl" data-testid="input-name" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Email *</FormLabel>
                          <FormControl><Input {...field} type="email" placeholder="john@company.com" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 rounded-xl" data-testid="input-email" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Company</FormLabel>
                        <FormControl><Input {...field} placeholder="Your Company" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 rounded-xl" data-testid="input-company" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs uppercase tracking-wider">Message *</FormLabel>
                        <FormControl><Textarea {...field} placeholder="Tell us about your project..." rows={4} className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 resize-none rounded-xl" data-testid="input-message" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full bg-[#0645FF] text-white font-semibold text-base rounded-xl" data-testid="button-submit-contact">
                      Send Message
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0645FF]/10 to-transparent p-6">
              <h4 className="font-heading text-base font-semibold text-white mb-4">Why Choose Us?</h4>
              {["Free consultation, no strings attached", "Transparent pricing, no hidden fees", "Dedicated team from day one", "Proven results across 50+ industries"].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0645FF] shrink-0" />
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4">
              {[
                { icon: Mail, label: "contact@aviontech.com" },
                { icon: Phone, label: "+1 (555) 234-5678" },
                { icon: MapPin, label: "Nationwide, USA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0645FF]/15 to-[#0645FF]/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#0645FF]" />
                  </div>
                  <span className="text-sm text-white/50">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0645FF] via-[#0645FF] to-[#0835c0] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />
      </div>

      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 0L1440 0L1440 20C1200 60 900 10 600 40C300 70 100 20 0 40L0 0Z" fill="#050a1a" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Outpace<br />the Competition?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/70 max-w-md mx-auto">
            Join hundreds of organizations building the future with Avion Tech.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="bg-white text-[#0645FF] font-bold px-10 text-base group" data-testid="button-cta-bottom">
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 40C1200 0 900 50 600 20C300 -10 100 40 0 20L0 60Z" fill="#030712" />
        </svg>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-10 w-auto" />
            </a>
            <p className="text-sm text-white/35 max-w-xs leading-relaxed">
              Delivering the future today through AI-driven consulting and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/60 mb-4 tracking-widest uppercase">Services</h4>
            <ul className="space-y-2">
              {["AI Consulting", "App Development", "Automation", "Web Platforms", "Mobile Apps"].map((item) => (
                <li key={item}>
                  <button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-white/30 transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/60 mb-4 tracking-widest uppercase">Company</h4>
            <ul className="space-y-2">
              {[{ label: "Why Us", href: "#about" }, { label: "Industries", href: "#industries" }, { label: "Contact", href: "#contact" }].map((item) => (
                <li key={item.label}>
                  <button onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-white/30 transition-colors" data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, '-')}`}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25" data-testid="text-copyright">&copy; {new Date().getFullYear()} Avion Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/25">Privacy Policy</span>
            <span className="text-xs text-white/25">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050a1a]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <ContactSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
