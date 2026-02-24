import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo_-2_1771948156481.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Security", href: "/security" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0f]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0" data-testid="link-logo">
            <img src={logoImage} alt="Avion Tech" className="h-7 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] rounded-full px-1.5 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                  location === link.href
                    ? "bg-white/[0.1] text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-[#0645FF] hover:bg-[#0535DD] text-white text-[13px] font-medium rounded-full px-5"
                data-testid="button-nav-cta"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/60 p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/[0.06] bg-[#0b0b0f]/95 backdrop-blur-xl"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    location === link.href ? "text-white bg-white/[0.06]" : "text-white/50"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white text-sm font-medium mt-2 w-full rounded-lg" data-testid="button-mobile-cta">
                  Get Started
                </Button>
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
    <footer className="border-t border-white/[0.06] bg-[#0b0b0f] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="inline-block mb-4" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Delivering the future today through AI-driven technology consulting.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white/70 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Strategy", "AI & Analytics", "Cybersecurity", "Cloud", "Custom Apps"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-white/30 hover:text-white/60 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white/70 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Industries", href: "/industries" },
                { label: "Security", href: "/security" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/30 hover:text-white/60 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-white/70 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/30">
              <li>hello@aviontech.com</li>
              <li>(859) 555-0142</li>
              <li>Lexington, Kentucky</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20" data-testid="text-copyright">&copy; {new Date().getFullYear()} Avion Tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-white/20 hover:text-white/40 transition-colors cursor-pointer">Privacy</span>
            <span className="text-xs text-white/20 hover:text-white/40 transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="pt-32 pb-16 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
          <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF] mb-4">{label}</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">{title}</h1>
          <p className="mt-4 text-base text-white/40 max-w-xl mx-auto leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="py-24 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#141419] overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
          <div className="relative">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to simplify your<br />technology strategy?
            </h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto">
              Book a free consultation. No obligations — just an honest conversation about your needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10 group" data-testid="button-cta-bottom">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-white/[0.1] text-white/70 font-medium rounded-full px-6 h-10 bg-transparent hover:bg-white/[0.04]" data-testid="button-cta-portfolio">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeInUp = fadeIn;

export const fadeInLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
