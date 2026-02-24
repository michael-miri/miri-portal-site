import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
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
        title="Innovation Meets Experience"
        description="With over 20 years of combined expertise, Avion Tech helps organizations modernize, optimize, and transform through practical technology solutions."
      />

      {/* Mission Section */}
      <section className="border-t border-white/[0.04] py-24 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Our Mission</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Delivering the Future Today
              </h2>
              <p className="mt-6 text-sm text-white/40 leading-relaxed">
                Avion Tech consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help organizations optimize performance and adapt to evolving technology landscapes.
              </p>
              <p className="mt-4 text-sm text-white/40 leading-relaxed">
                We believe technology should serve people, not the other way around. Every solution we design starts with understanding your unique challenges and ends with measurable outcomes that move your organization forward.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "20+", label: "Years Experience" },
                  { val: "500+", label: "Projects Delivered" },
                  { val: "99%", label: "Client Satisfaction" },
                  { val: "50+", label: "Industries Served" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-[#141419] hover:border-white/[0.15] transition-colors duration-300 p-7 text-center" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                    <div className="font-heading text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs text-white/40 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-white/[0.04] py-24 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeInUp}>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Our Values</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                What Drives Avion Tech
              </h2>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((item, i) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#141419] hover:border-white/[0.15] transition-colors duration-300 p-7 h-full flex flex-col" data-testid={`card-value-${i + 1}`}>
                  <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center mb-4">
                    <span className="font-heading text-sm font-bold text-[#3B7BFF]">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-white/[0.04] py-24 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeInUp}>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Avion Tech Leadership</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Meet the Team
              </h2>
              <p className="mt-4 text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
                Experienced leaders committed to collaboration, innovation, and delivering results.
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#141419] hover:border-white/[0.15] transition-colors duration-300 p-7 h-full flex flex-col" data-testid={`card-team-${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="w-14 h-14 rounded-full bg-[#0645FF]/10 flex items-center justify-center mb-6">
                    <span className="font-heading text-sm font-bold text-[#3B7BFF]">{member.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-white">{member.name}</h3>
                  <div className="flex flex-col gap-2 mt-2 mb-5">
                    <span className="flex items-center gap-1.5 text-sm text-[#3B7BFF]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {member.role}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-white/40">
                      <MapPin className="w-3 h-3" />
                      {member.location}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-6">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="border-t border-white/[0.04] py-24 bg-[#0b0b0f]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeInUp}>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B7BFF]">Our Journey</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Key Milestones
              </h2>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.08]" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <motion.div key={m.year} variants={fadeInUp} className="flex items-start gap-6 pl-2" data-testid={`milestone-${idx + 1}`}>
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 rounded-full border border-white/[0.08] bg-[#141419] flex items-center justify-center">
                      <span className="font-heading text-sm font-bold text-[#3B7BFF]">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="font-heading text-sm font-bold text-white">{m.year}</span>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">{m.event}</p>
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
