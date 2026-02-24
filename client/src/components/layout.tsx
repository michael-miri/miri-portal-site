import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "@assets/Black_and_White_Initial_A_Tech_Business_Logo_-4_1771955022816.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="shrink-0" data-testid="link-logo">
            <img src={logoImage} alt="Avion Tech" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors duration-200 ${
                  location === link.href
                    ? "text-white"
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
                className="bg-[#0645FF] text-white text-[13px] font-medium rounded-full px-5 h-9 hover:bg-[#0645FF]/90"
                data-testid="button-nav-cta"
              >
                Start a Project
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
            className="lg:hidden border-t border-white/[0.06] bg-[#09090b]/95 backdrop-blur-xl"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm py-3 px-3 rounded-lg transition-colors ${
                    location === link.href ? "text-white bg-white/[0.04]" : "text-white/50"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="bg-[#0645FF] text-white text-sm font-medium mt-4 w-full rounded-full" data-testid="button-mobile-cta">
                  Start a Project
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
    <footer className="border-t border-white/[0.06] bg-[#09090b] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6" data-testid="link-footer-logo">
              <img src={logoImage} alt="Avion Tech" className="h-7 w-auto" />
            </Link>
            <p className="text-[15px] text-white/50 leading-relaxed max-w-sm">
              AI-driven technology consulting for organizations ready to move faster, think bigger, and build smarter.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0645FF]/70 mb-5">Services</h4>
            <ul className="space-y-3">
              {["Strategy", "AI & Analytics", "Cybersecurity", "Cloud", "Custom Apps"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-[14px] text-white/40 hover:text-white/60 transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0645FF]/70 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Industries", href: "/industries" },
                { label: "Security", href: "/security" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[14px] text-white/40 hover:text-white/60 transition-colors" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0645FF]/70 mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-[14px] text-white/40">
              <li data-testid="contact-email">hello@aviontech.com</li>
              <li data-testid="contact-phone">(859) 555-0142</li>
              <li data-testid="contact-location">Lexington, Kentucky</li>
            </ul>
            <div className="mt-8">
              <Link href="/contact">
                <span className="text-[13px] text-[#0645FF]/70 hover:text-[#0645FF] transition-colors inline-flex items-center gap-1.5" data-testid="link-footer-contact-cta">
                  Start a conversation <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25" data-testid="text-copyright">&copy; {new Date().getFullYear()} Avion Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[12px] text-white/25 hover:text-white/40 transition-colors cursor-pointer" data-testid="link-footer-privacy">Privacy</span>
            <span className="text-[12px] text-white/25 hover:text-white/40 transition-colors cursor-pointer" data-testid="link-footer-terms">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="pt-[140px] pb-20 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0645FF]/70 block mb-6">{label}</span>
        <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl">{title}</h1>
        <p className="mt-6 text-[17px] text-white/50 max-w-xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="py-32 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="border-t border-white/[0.06] pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0645FF]/70 block mb-6">Next Step</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight">
                Ready to move<br />forward?
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-md lg:ml-auto">
                Book a free consultation. No obligations — just an honest conversation about where technology can take your organization.
              </p>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact">
                  <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90 group" data-testid="button-cta-bottom">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-white/[0.1] text-white/60 font-medium rounded-full px-7 h-11 bg-transparent hover:bg-white/[0.03] hover:text-white/80" data-testid="button-cta-portfolio">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
