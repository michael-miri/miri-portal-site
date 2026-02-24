import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/image_1771947163542.png";
import {
  Brain,
  Code2,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Award,
  Clock,
  DollarSign,
  Building2,
  Landmark,
  Users,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  Target,
  Cpu,
  Bot,
  Workflow,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, "Please tell us how we can help"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic AI integration and implementation to transform your business operations with intelligent automation and data-driven insights.",
  },
  {
    icon: Code2,
    title: "Application Development",
    description: "Custom software solutions built with cutting-edge technologies, designed for scalability, performance, and seamless user experiences.",
  },
  {
    icon: Bot,
    title: "Automation Solutions",
    description: "End-to-end process automation that eliminates repetitive tasks, reduces errors, and accelerates your workflow by 10x.",
  },
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description: "High-performance, responsive web platforms that drive engagement, conversions, and deliver exceptional digital experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps with intuitive interfaces, optimized performance, and enterprise-grade security.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description: "Comprehensive modernization strategies that align technology with your business goals for maximum competitive advantage.",
  },
];

const guarantees = [
  { icon: Award, title: "Unmatched Quality", description: "Every project meets the highest standards of excellence, rigorously tested and refined." },
  { icon: DollarSign, title: "Best Affordability", description: "Premium solutions at competitive prices. We guarantee to beat any comparable quote." },
  { icon: Clock, title: "Fastest Delivery", description: "Agile methodologies and expert teams ensure your project launches ahead of schedule." },
];

const industries = [
  { icon: Building2, title: "Private Sector", description: "Enterprise and startup solutions" },
  { icon: Landmark, title: "Government & Federal", description: "Secure, compliant platforms" },
  { icon: Users, title: "Municipal", description: "Community-focused applications" },
  { icon: Target, title: "Customer-Facing", description: "Engaging digital experiences" },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "50+", label: "Industries Served" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a1a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
            <img src={logoImage} alt="Avion Tech" className="h-9 sm:h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-white/70 transition-colors duration-200"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-[#0645FF] text-white font-semibold px-6"
              data-testid="button-nav-cta"
            >
              Book a Meeting
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050a1a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-base font-medium text-white/70 py-2 transition-colors"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="bg-[#0645FF] text-white font-semibold mt-2 w-full"
                data-testid="button-mobile-cta"
              >
                Book a Meeting
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050a1a]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0645FF]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0645FF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0645FF]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-8">
            <Sparkles className="w-4 h-4 text-[#0645FF]" />
            <span className="text-sm font-medium text-[#0645FF] tracking-wide">AI-DRIVEN CONSULTING</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-5xl"
          >
            Delivering the Future{" "}
            <span className="bg-gradient-to-r from-[#0645FF] via-[#4B8BFF] to-[#0645FF] bg-clip-text text-transparent">
              Today
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            We transform businesses with AI-powered solutions, cutting-edge development, 
            and decades of expertise. The best experience in quality, affordability, and speed.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#0645FF] text-white font-semibold px-8 text-base"
              data-testid="button-hero-cta"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/20 text-white font-semibold px-8 text-base bg-white/5 backdrop-blur-sm"
              data-testid="button-hero-services"
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a1a] to-transparent" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-6">
            <Layers className="w-4 h-4 text-[#0645FF]" />
            <span className="text-sm font-medium text-[#0645FF] tracking-wide">WHAT WE DO</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Comprehensive technology solutions powered by innovation, built with the highest security standards and best development practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card className="group relative bg-white/[0.03] border-white/[0.06] p-8 h-full hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-12 h-12 rounded-lg bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050a1a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-6">
            <Cpu className="w-4 h-4 text-[#0645FF]" />
            <span className="text-sm font-medium text-[#0645FF] tracking-wide">WHY CHOOSE US</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            We Guarantee Results
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Decades of experience across industries, innovative technologies, and an unwavering commitment to security and quality.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {guarantees.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <div className="relative group text-center p-8 rounded-md border border-white/[0.06] bg-white/[0.02] hover-elevate" data-testid={`card-guarantee-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-16 h-16 rounded-full bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <item.icon className="w-7 h-7 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
              Built on Innovation,<br />Secured by Standards
            </h3>
            <div className="space-y-5">
              {[
                { text: "Cutting-edge AI and machine learning integration", icon: Brain },
                { text: "Enterprise-grade security and compliance standards", icon: Shield },
                { text: "Best-in-class development practices and code quality", icon: Code2 },
                { text: "Agile methodologies for rapid, iterative delivery", icon: Zap },
                { text: "Scalable architecture built for growth", icon: Layers },
                { text: "Transparent communication and dedicated support", icon: Users },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-md bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-[#0645FF]" />
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="relative p-8 rounded-md border border-white/[0.06] bg-gradient-to-br from-[#0645FF]/5 to-transparent">
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#0645FF]/10 rounded-full blur-[40px]" />
              <blockquote className="relative">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed italic">
                  "We don't just build software — we engineer the future. Every line of code is written with purpose, 
                  every solution crafted to outperform the competition in quality, speed, and value."
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0645FF]/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#0645FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Avion Tech</div>
                    <div className="text-xs text-white/40">Our Promise</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#050a1a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-6">
            <Building2 className="w-4 h-4 text-[#0645FF]" />
            <span className="text-sm font-medium text-[#0645FF] tracking-wide">WHO WE SERVE</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Industries We Empower
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            From private enterprises to government agencies, we deliver tailored solutions that meet the unique demands of every sector.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={fadeInUp}>
              <div className="group relative text-center p-8 rounded-md border border-white/[0.06] bg-white/[0.02] hover-elevate" data-testid={`card-industry-${industry.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-14 h-14 rounded-lg bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <industry.icon className="w-7 h-7 text-[#0645FF]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-white/50 text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-8 py-6 rounded-md border border-white/[0.06] bg-white/[0.02]">
            {["Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Logistics", "Energy", "Real Estate"].map((tag) => (
              <span key={tag} className="text-sm text-white/40 font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (_data: ContactFormValues) => {
    setSubmitted(true);
    toast({
      title: "Message received!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050a1a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0645FF]/30 bg-[#0645FF]/10 mb-6">
            <Mail className="w-4 h-4 text-[#0645FF]" />
            <span className="text-sm font-medium text-[#0645FF] tracking-wide">GET IN TOUCH</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let's Build Something Great
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Ready to transform your business? Book a free consultation and discover how Avion Tech can accelerate your success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="text-center py-16 px-8 rounded-md border border-[#0645FF]/20 bg-[#0645FF]/5">
                <CheckCircle2 className="w-16 h-16 text-[#0645FF] mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Your message has been received. Our team will reach out within 24 hours to schedule your free consultation.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); form.reset(); }}
                  variant="outline"
                  className="mt-8 border-white/20 text-white bg-white/5"
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john@company.com"
                              className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Company"
                              className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70">How Can We Help? *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us about your project, goals, and timeline..."
                            rows={5}
                            className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/30 resize-none"
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0645FF] text-white font-semibold text-base"
                    data-testid="button-submit-contact"
                  >
                    Book Your Free Consultation
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-white/30 text-center">
                    We respond within 24 hours. No spam, no obligations.
                  </p>
                </form>
              </Form>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-6 rounded-md border border-white/[0.06] bg-white/[0.02]">
              <h4 className="font-heading text-lg font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#0645FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Email</div>
                    <div className="text-sm text-white/80">contact@aviontech.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#0645FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Phone</div>
                    <div className="text-sm text-white/80">+1 (555) 234-5678</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0645FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Location</div>
                    <div className="text-sm text-white/80">Nationwide, USA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-md border border-[#0645FF]/20 bg-gradient-to-br from-[#0645FF]/10 to-transparent">
              <h4 className="font-heading text-lg font-semibold text-white mb-3">Why Book With Us?</h4>
              <div className="space-y-3">
                {[
                  "Free initial consultation — no obligations",
                  "Personalized solutions for your industry",
                  "Transparent pricing with no hidden fees",
                  "Dedicated project manager from day one",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0645FF] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-md border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-[#0645FF]" />
                <h4 className="font-heading text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Our team typically responds within 2-4 hours during business days. 
                For urgent inquiries, call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-20 bg-[#050a1a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Outpace the Competition?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
            Join hundreds of organizations that trust Avion Tech to deliver exceptional results. Let's start building your future today.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#0645FF] text-white font-semibold px-10 text-base"
              data-testid="button-cta-bottom"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-10 w-auto" />
            </a>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed">
              Delivering the future today through AI-driven consulting, innovative technology solutions, 
              and decades of industry expertise.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-2.5">
              {["AI Consulting", "App Development", "Automation", "Web Development", "Mobile Apps"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-white/40 transition-colors"
                    data-testid={`link-footer-${item.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Industries", href: "#industries" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-white/40 transition-colors"
                    data-testid={`link-footer-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30" data-testid="text-copyright">&copy; {new Date().getFullYear()} Avion Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30">Privacy Policy</span>
            <span className="text-xs text-white/30">Terms of Service</span>
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
