import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

const team = [
  {
    name: "Richard Hake",
    initials: "RH",
    role: "Project Manager",
    location: "Lexington, Kentucky",
    bio: "Richard brings over 15 years of experience in management consulting, business transformation, and program leadership. He specializes in guiding digital modernization initiatives, integrating technology solutions, and aligning project delivery with organizational goals.",
    skills: ["Stakeholder Engagement", "Strategic Planning", "Cross-Functional Leadership", "Digital Modernization", "Program Management", "Risk Mitigation"],
  },
  {
    name: "Michael Colliver",
    initials: "MC",
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
        title="Innovation meets experience."
        description="Over 20 years of combined expertise in technology consulting, digital transformation, and enterprise architecture."
      />

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-32">
            <div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Mission</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight">
                Delivering the<br />future today.
              </h2>
              <p className="mt-8 text-[15px] text-white/50 leading-[1.8] max-w-md">
                Avion Tech consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help organizations optimize performance and adapt to evolving technology landscapes.
              </p>
              <p className="mt-4 text-[15px] text-white/50 leading-[1.8] max-w-md">
                We believe technology should serve people, not the other way around. Every solution we design starts with understanding your unique challenges and ends with measurable outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
              {[
                { val: "20+", label: "Years\nExperience" },
                { val: "500+", label: "Projects\nDelivered" },
                { val: "99%", label: "Client\nSatisfaction" },
                { val: "50+", label: "Industries\nServed" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#09090b] p-8 flex flex-col justify-center" data-testid={`card-stat-${stat.label.split('\n')[0].toLowerCase()}`}>
                  <div className="font-heading text-[2.5rem] font-bold text-white leading-none">{stat.val}</div>
                  <div className="text-[12px] text-white/40 mt-3 whitespace-pre-line leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Values</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                What drives us.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                {values.map((item, i) => (
                  <div key={item.title} className="bg-[#09090b] p-8" data-testid={`card-value-${i + 1}`}>
                    <span className="text-[11px] text-[#C4A882]/50 font-mono block mb-4">0{i + 1}</span>
                    <h3 className="text-[17px] font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-32">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Leadership</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight mb-20">
            Meet the team.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden max-w-4xl">
            {team.map((member) => (
              <div key={member.name} className="bg-[#09090b] p-10" data-testid={`card-team-${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-16 h-16 rounded-full bg-[#0645FF]/[0.08] border border-[#0645FF]/20 flex items-center justify-center mb-8">
                  <span className="font-heading text-[15px] font-bold text-[#0645FF]">{member.initials}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white">{member.name}</h3>
                <p className="text-[13px] text-[#0645FF]/80 mt-1">{member.role}</p>
                <p className="text-[12px] text-white/35 mt-1">{member.location}</p>

                <p className="text-[13px] text-white/50 leading-relaxed mt-6">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#09090b] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Journey</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                Key milestones.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {milestones.map((m, idx) => (
                  <div key={m.year} className={`flex gap-8 py-8 ${idx > 0 ? "border-t border-white/[0.06]" : ""}`} data-testid={`milestone-${idx + 1}`}>
                    <span className="font-heading text-2xl font-bold text-white/25 shrink-0 w-20">{m.year}</span>
                    <p className="text-[14px] text-white/50 leading-relaxed pt-2">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
