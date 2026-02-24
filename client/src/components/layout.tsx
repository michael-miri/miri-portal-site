import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo_-2_1771948156481.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Security", href: "/security" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 sm:mx-8 mt-4">
        <div className="max-w-7xl mx-auto rounded-2xl bg-[#0c0c1d]/80 backdrop-blur-2xl border border-white/[0.06] px-5 sm:px-6">
          <div className="flex items-center justify-between gap-4 h-16">
            <Link href="/" className="shrink-0" data-testid="link-logo">
              <img src={logoImage} alt="Avion Tech" className="h-8 sm:h-9 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${location === link.href ? "text-white bg-white/[0.08]" : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"}`} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-5 h-9 text-sm rounded-lg" data-testid="button-nav-cta">
                  Get Started
                </Button>
              </Link>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/70 p-2 rounded-lg hover:bg-white/[0.05]" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} data-testid="button-mobile-menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="lg:hidden mx-4 sm:mx-8 mt-2">
            <div className="max-w-7xl mx-auto rounded-2xl bg-[#0c0c1d]/95 backdrop-blur-2xl border border-white/[0.06] px-5 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={`text-base font-medium py-3 px-4 rounded-lg transition-all ${location === link.href ? "text-white bg-white/[0.08]" : "text-white/50 hover:text-white/80"}`} data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold mt-2 w-full rounded-lg" data-testid="button-mobile-cta">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-[#060612] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-white/30 leading-relaxed">
              Delivering the future today through AI-driven consulting and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/50 mb-5 tracking-widest uppercase">Services</h4>
            <ul className="space-y-3">
              {["Strategy & Transformation", "AI & Analytics", "Cybersecurity", "Cloud Infrastructure", "Custom Applications"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-white/25 hover:text-white/60 transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/50 mb-5 tracking-widest uppercase">Company</h4>
            <ul className="space-y-3">
              {[{ label: "About", href: "/about" }, { label: "Portfolio", href: "/portfolio" }, { label: "Industries", href: "/industries" }, { label: "Security", href: "/security" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/25 hover:text-white/60 transition-colors" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/50 mb-5 tracking-widest uppercase">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/25">
              <li>hello@aviontech.com</li>
              <li>(859) 555-0142</li>
              <li>Lexington, Kentucky</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20" data-testid="text-copyright">&copy; {new Date().getFullYear()} Avion Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20 cursor-pointer hover:text-white/40 transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/20 cursor-pointer hover:text-white/40 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ label, title, highlight, description }: { label: string; title: string; highlight: string; description: string }) {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#08081a]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0645FF]/8 rounded-full blur-[150px]" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0645FF]/25 bg-[#0645FF]/8 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0645FF] animate-pulse" />
            <span className="text-xs font-medium text-[#4B8BFF] tracking-wider uppercase">{label}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-[#0645FF] via-[#4B8BFF] to-[#82b1ff] bg-clip-text text-transparent">{highlight}</span>
          </h1>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0645FF] via-[#0935d0] to-[#0c0c40]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#4B8BFF]/20 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Ready to Build With<br />Avion Tech?
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="mt-5 text-lg text-white/60 max-w-md mx-auto">
            Join hundreds of organizations delivering the future today.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-white/90 text-[#0645FF] font-bold px-8 text-base rounded-xl h-12 group" data-testid="button-cta-bottom">
                Get Started Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white/25 text-white font-semibold px-8 text-base rounded-xl h-12 bg-white/5 hover:bg-white/10" data-testid="button-cta-portfolio">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08081a]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
