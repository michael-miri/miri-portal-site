import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/components/layout";

const team = [
  {
    name: "Richard Hake",
    role: "Project Manager",
    location: "Lexington, Kentucky",
    bio: "Richard brings over 15 years of experience in management consulting, business transformation, and program leadership. He specializes in guiding digital modernization initiatives, integrating technology solutions, and aligning project delivery with organizational goals.",
    skills: ["Stakeholder Engagement", "Strategic Planning", "Cross-Functional Leadership", "Digital Modernization", "Program Management", "Risk Mitigation"],
  },
  {
    name: "Michael Colliver",
    role: "Technology Solution Architect",
    location: "Lexington, Kentucky",
    bio: "Michael is a senior technology consultant with 14 years of experience in software development, digital transformation, and user experience. He has led cross-functional teams through complex lifecycles, integrating business strategy with technical execution.",
    skills: ["Solution Architecture", "Software Development", "UI/UX Design", "Business Analysis", "Agile Leadership", "Technical Strategy"],
  },
];

const values = [
  {
    title: "Scalable & Secure",
    desc: "Solutions aligned with organizational goals, built on secure-by-design architectures that grow with your business.",
  },
  {
    title: "Actionable Insights",
    desc: "Industry-leading tools and methodologies that drive efficiency and measurable results across every engagement.",
  },
  {
    title: "End-to-End Delivery",
    desc: "From assessment and strategy through implementation, training, and long-term support — we're with you every step.",
  },
  {
    title: "Client-First Approach",
    desc: "We prioritize transparency, honest communication, and collaborative partnerships that build lasting trust.",
  },
];

const milestones = [
  { year: "2005", event: "Founded with a mission to bridge technology and business strategy" },
  { year: "2010", event: "Expanded services to include AI and cloud infrastructure consulting" },
  { year: "2015", event: "Launched cybersecurity practice and achieved SOC 2 compliance" },
  { year: "2020", event: "Pioneered digital twin and IoT solutions for enterprise clients" },
  { year: "2024", event: "Surpassed 500+ successful project deliveries across 50+ industries" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        label="About Avion Tech"
        title="Innovation Meets"
        highlight="Experience"
        description="With over 20 years of combined expertise, Avion Tech helps organizations modernize, optimize, and transform through practical technology solutions."
      />

      <section className="relative py-24 bg-[#070e24]">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0645FF]/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Our Mission</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4 leading-tight">
                Delivering the Future{" "}
                <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Today</span>
              </h2>
              <p className="mt-5 text-white/45 leading-relaxed">
                Avion Tech consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help organizations optimize performance and adapt to evolving technology landscapes.
              </p>
              <p className="mt-4 text-white/45 leading-relaxed">
                We believe technology should serve people, not the other way around. Every solution we design starts with understanding your unique challenges and ends with measurable outcomes that move your organization forward.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "20+", label: "Years Experience" },
                  { val: "500+", label: "Projects Delivered" },
                  { val: "99%", label: "Client Satisfaction" },
                  { val: "50+", label: "Industries Served" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-[#0645FF]/15 to-[#0645FF]/5 border border-white/[0.05] p-6 text-center">
                    <div className="font-heading text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#050a1a]">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Our Values</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
              What Drives{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Avion Tech</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((item, i) => (
              <motion.div key={item.title} variants={fadeInUp} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 flex items-center justify-center">
                  <span className="font-heading text-sm font-bold text-[#0645FF]">0{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-white/40 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#070e24] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Avion Tech Leadership</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Team</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-white/45 max-w-lg mx-auto">
              Experienced leaders committed to collaboration, innovation, and delivering results.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <div className="relative group h-full rounded-2xl p-8 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] hover-elevate" data-testid={`card-team-${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0645FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0645FF]/25 to-[#0645FF]/10 flex items-center justify-center mb-5">
                    <span className="font-heading text-xl font-bold text-[#0645FF]">{member.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white">{member.name}</h3>
                  <div className="flex items-center gap-4 mt-1.5 mb-4">
                    <span className="flex items-center gap-1.5 text-sm text-[#4B8BFF]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {member.role}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/30">
                      <MapPin className="w-3 h-3" />
                      {member.location}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-5">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-[#0645FF]/10 text-[#4B8BFF] border border-[#0645FF]/15">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 bg-[#050a1a]">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="text-xs font-semibold text-[#0645FF] tracking-widest uppercase">Our Journey</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
              Key{" "}
              <span className="bg-gradient-to-r from-[#0645FF] to-[#4B8BFF] bg-clip-text text-transparent">Milestones</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#0645FF]/30 via-[#0645FF]/10 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <motion.div key={m.year} variants={fadeInUp} className="flex items-start gap-6 pl-2">
                  <div className="shrink-0 relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0645FF]/30 to-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0645FF]" />
                    </div>
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-[#0645FF]">{m.year}</span>
                    <p className="text-white/45 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
