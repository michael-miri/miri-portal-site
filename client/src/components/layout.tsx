import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo__1771947651217.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050a1a]/70 backdrop-blur-2xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <Link href="/" className="shrink-0" data-testid="link-logo">
            <img src={logoImage} alt="Avion Tech" className="h-9 sm:h-11 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={`text-sm font-medium transition-colors duration-200 ${location === link.href ? "text-white" : "text-white/60"}`} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-[#0645FF] text-white font-semibold px-6" data-testid="button-nav-cta">
                Get Started
              </Button>
            </Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} data-testid="button-mobile-menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#050a1a]/95 backdrop-blur-2xl border-t border-white/5">
            <div className="px-5 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={`text-left text-base font-medium py-2.5 ${location === link.href ? "text-white" : "text-white/60"}`} data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="bg-[#0645FF] text-white font-semibold mt-2 w-full" data-testid="button-mobile-cta">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative py-12 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-white/35 max-w-xs leading-relaxed">
              Delivering the future today through AI-driven consulting and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/60 mb-4 tracking-widest uppercase">Services</h4>
            <ul className="space-y-2">
              {["Strategy & Transformation", "AI & Analytics", "Cybersecurity", "Cloud Infrastructure", "Custom Applications"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-white/30 transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold text-white/60 mb-4 tracking-widest uppercase">Company</h4>
            <ul className="space-y-2">
              {[{ label: "About", href: "/about" }, { label: "Portfolio", href: "/portfolio" }, { label: "Industries", href: "/industries" }, { label: "Security", href: "/security" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/30 transition-colors" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>
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

export function PageHeader({ label, title, highlight, description }: { label: string; title: string; highlight: string; description: string }) {
  return (
    <section className="relative pt-32 pb-20 bg-[#050a1a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(6,69,255,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(6,69,255,0.08) 0%, transparent 40%)`
        }} />
        <div className="absolute top-20 right-20 w-[200px] h-[200px] border border-[#0645FF]/[0.05] rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">{label}</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">{highlight}</span>
          </h1>
          <p className="mt-5 text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 30C1200 60 900 10 600 40C300 70 100 20 0 40L0 80Z" fill="#070e24" />
        </svg>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0645FF] via-[#0645FF] to-[#0835c0] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Build With<br />Avion Tech?
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="mt-4 text-lg text-white/70 max-w-md mx-auto">
            Join hundreds of organizations delivering the future today with Avion Tech.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0645FF] font-bold px-10 text-base" data-testid="button-cta-bottom">
                Get Started Now
              </Button>
            </Link>
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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050a1a]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
