import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout, PageHeader, CTABanner, fadeIn, fadeInUp, stagger } from "@/components/layout";

const generalFAQs = [
  {
    q: "What does Avion Tech do?",
    a: "Avion Tech is an AI-driven technology consulting firm that helps organizations modernize, optimize, and transform their operations. We offer full-spectrum technology consulting including strategy, AI & analytics, cybersecurity, cloud infrastructure, custom application development, data governance, IoT solutions, digital twin modeling, and OT/IT integration.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve organizations across all sectors including private enterprise, government & federal agencies, municipal governments, and customer-facing businesses. Our experience spans healthcare, finance, education, retail, manufacturing, logistics, energy, real estate, and more — over 50 industries in total.",
  },
  {
    q: "Where is Avion Tech located?",
    a: "Avion Tech is headquartered in Lexington, Kentucky. We serve clients nationally and have experience working with organizations across the United States, including federal agencies and Fortune 500 companies.",
  },
  {
    q: "How long has Avion Tech been in business?",
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
    a: "Our free consultation is a 30-60 minute session where we learn about your organization, challenges, and goals. We'll provide initial recommendations and discuss how Avion Tech can help. There's no obligation, no pressure — just an honest conversation about your technology needs.",
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
    q: "What makes Avion Tech different from other consultants?",
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
  return (
    <Layout>
      <PageHeader
        label="Frequently Asked Questions"
        title="Your Questions, Answered"
        description="Everything you need to know about working with Avion Tech. Can't find what you're looking for? Get in touch with our team."
      />

      <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-16">
            {faqSections.map((section) => (
              <motion.div key={section.prefix} variants={fadeIn}>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF] mb-5 block">{section.title}</span>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.data.map((faq, i) => (
                    <AccordionItem key={i} value={`${section.prefix}-${i}`} className="rounded-xl border border-white/[0.08] bg-[#141419] px-6" data-testid={`faq-${section.prefix}-${i}`}>
                      <AccordionTrigger className="text-white text-sm font-medium hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/40 text-sm leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="font-heading text-3xl sm:text-4xl font-bold text-white">Still Have Questions?</motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
              Our team is happy to answer any additional questions you might have.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8">
              <Link href="/contact">
                <Button className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10" data-testid="button-faq-contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
