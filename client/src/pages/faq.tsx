import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const generalFAQs = [
  {
    q: "What do you do?",
    a: "We're an AI-driven technology consulting firm that helps organizations modernize, optimize, and transform their operations. We offer full-spectrum technology consulting including strategy, AI & analytics, cybersecurity, cloud infrastructure, custom application development, data governance, IoT solutions, digital twin modeling, and OT/IT integration.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve organizations across all sectors including private enterprise, government & federal agencies, municipal governments, and customer-facing businesses. Our experience spans healthcare, finance, education, retail, manufacturing, logistics, energy, real estate, and more — over 50 industries in total.",
  },
  {
    q: "Where are you located?",
    a: "We're headquartered in Lexington, Kentucky. We serve clients nationally and have experience working with organizations across the United States, including federal agencies and Fortune 500 companies.",
  },
  {
    q: "How long have you been in business?",
    a: "Our team brings over 20 years of combined experience in technology consulting, digital transformation, and enterprise architecture. Our consultants have led hundreds of successful projects across diverse industries.",
  },
];

const serviceFAQs = [
  {
    q: "How do you approach a new project?",
    a: "We follow a structured yet agile methodology. Every engagement begins with a discovery phase where we assess your current state, understand your goals, and identify opportunities. From there, we develop a tailored roadmap, prioritize deliverables by business value, and execute iteratively with regular check-ins and adjustments.",
  },
  {
    q: "Do you offer ongoing support after project delivery?",
    a: "Yes. We provide end-to-end delivery that includes post-launch support, training, documentation, and long-term maintenance options. We believe in building lasting partnerships, not one-time transactions.",
  },
  {
    q: "Can you work with our existing technology stack?",
    a: "Absolutely. We specialize in integrating with existing systems and technology stacks. Whether you're looking to modernize legacy systems, extend current platforms, or build new solutions alongside existing infrastructure, we design for compatibility and minimal disruption.",
  },
  {
    q: "What size projects do you handle?",
    a: "We work on projects of all sizes — from focused consulting engagements and assessments to multi-year digital transformation programs. Our modular service approach means we can scale our involvement to match your needs and budget.",
  },
];

const securityFAQs = [
  {
    q: "How do you handle data security?",
    a: "Security is embedded in everything we do. We follow secure-by-design principles, implement zero-trust architectures, and adhere to industry frameworks including SOC 2, NIST, and ISO 27001. All data is encrypted at rest and in transit using AES-256 encryption.",
  },
  {
    q: "Are you compliant with federal security standards?",
    a: "Yes. We have experience achieving FedRAMP High authorization and full NIST 800-53 compliance for federal clients. Our cybersecurity practice is specifically designed to meet the stringent requirements of government and defense organizations.",
  },
  {
    q: "Do you sign NDAs and data processing agreements?",
    a: "Yes. We execute NDAs, data processing agreements, and other confidentiality documents as standard practice before any engagement begins. We take our clients' intellectual property and data privacy extremely seriously.",
  },
];

const processFAQs = [
  {
    q: "What does a free consultation include?",
    a: "Our free consultation is a 30-60 minute session where we learn about your organization, challenges, and goals. We'll provide initial recommendations and discuss how we can help. There's no obligation, no pressure — just an honest conversation about your technology needs.",
  },
  {
    q: "How do you price your services?",
    a: "We offer flexible pricing models including fixed-price projects, time-and-materials engagements, and retainer agreements. Pricing is always transparent and based on the scope, complexity, and duration of the work. We provide detailed proposals before any commitment.",
  },
  {
    q: "How quickly can you start a new project?",
    a: "For most engagements, we can begin within 2-4 weeks of agreement. For urgent needs, we can often mobilize faster. Our team structure allows us to scale quickly and efficiently to meet your timeline.",
  },
  {
    q: "What makes you different from other consultants?",
    a: "Three things set us apart: First, we're practitioners, not just advisors — our team builds and implements solutions alongside your staff. Second, we prioritize practical, ROI-driven outcomes over theoretical frameworks. Third, our deep expertise across the full technology spectrum means you get one trusted partner instead of managing multiple vendors.",
  },
];

const faqSections = [
  { title: "General", data: generalFAQs, prefix: "general" },
  { title: "Services & Process", data: serviceFAQs, prefix: "service" },
  { title: "Security & Compliance", data: securityFAQs, prefix: "security" },
  { title: "Getting Started", data: processFAQs, prefix: "process" },
];

export default function FAQ() {
  useSEO({
    title: "FAQ - Common Questions About Our Tech Consulting Services",
    description: "Answers to frequently asked questions about Miri Technology's consulting services, engagement process, security practices, pricing, and how to get started.",
  });

  useEffect(() => {
    const allFAQs = [...generalFAQs, ...serviceFAQs, ...securityFAQs, ...processFAQs];
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFAQs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <Layout>
      <PageHeader
        label="Frequently Asked Questions"
        title="Your questions, answered."
        description="Everything you need to know about working with us. Can't find what you're looking for? Get in touch."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10">
          {faqSections.map((section, sIdx) => (
            <div key={section.prefix} className={`py-16 ${sIdx > 0 ? "border-t border-white/[0.06]" : ""}`}>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-8">{section.title}</span>
              <Accordion type="single" collapsible className="space-y-0">
                {section.data.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.prefix}-${i}`}
                    className={`border-b border-white/[0.06] px-0 ${i === 0 ? "border-t" : ""}`}
                    data-testid={`faq-${section.prefix}-${i}`}
                  >
                    <AccordionTrigger className="text-white text-[15px] font-medium hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/50 text-[14px] leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight">
            Still have questions?
          </h2>
          <p className="mt-4 text-[15px] text-white/50 leading-relaxed max-w-lg mx-auto">
            Our team is happy to answer anything. No pressure, just clarity.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90" data-testid="button-faq-contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
