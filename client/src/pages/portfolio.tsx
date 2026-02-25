import { Layout, PageHeader, CTABanner } from "@/components/layout";

const projects = [
  {
    num: "01",
    title: "Company Operations Portal",
    client: "Wellness Creative",
    sector: "Health & Wellness",
    desc: "Built a comprehensive company portal for a wellness brand, centralizing employee resources, scheduling, client management, and internal communications into a single intuitive platform.",
    results: ["Unified portal replacing multiple separate tools", "Streamlined employee onboarding process", "Integrated scheduling and client management", "Mobile-responsive design for on-the-go access"],
    tags: ["Portal", "UX Design", "Custom App", "Wellness"],
  },
  {
    num: "02",
    title: "AI-Powered Property Review App",
    client: "NA Isaac",
    sector: "Real Estate",
    desc: "Developed an AI-driven application that automates property reviews, analyzing listing data, market comparables, and neighborhood insights to deliver comprehensive assessments in seconds.",
    results: ["Review time reduced from hours to minutes", "AI-generated property assessments with key insights", "Automated market comparable analysis", "Intuitive dashboard for review management"],
    tags: ["AI", "Real Estate", "Automation", "Analytics"],
  },
  {
    num: "03",
    title: "Cleaning Service Booking App",
    client: "Neat Enterprise",
    sector: "Service Industry",
    desc: "Designed and built a booking platform for a cleaning services company, enabling customers to schedule, manage, and pay for services with a seamless self-service experience.",
    results: ["Online booking replacing manual phone scheduling", "Automated reminders reducing no-shows", "Integrated payment processing", "Real-time availability and instant confirmation"],
    tags: ["Booking", "Payments", "Mobile App", "Automation"],
  },
  {
    num: "04",
    title: "Housing Management App",
    client: "",
    sector: "Real Estate",
    desc: "Created a housing management application that simplifies tenant communication, maintenance requests, lease tracking, and rent collection into one streamlined platform for property managers and residents.",
    results: ["Centralized tenant and lease management", "Digital maintenance request workflow", "Automated rent reminders and payment tracking", "Tenant self-service portal with 24/7 access"],
    tags: ["Property Management", "Custom App", "UX Design", "Automation"],
  },
  {
    num: "05",
    title: "Accessible Tour System App",
    client: "",
    sector: "Government & Culture",
    desc: "Developed an accessible digital tour application that brings historic sites to life through interactive content, audio guides, and real-time navigation — designed from the ground up for ADA compliance and inclusivity.",
    results: ["ADA-compliant accessible design throughout", "Audio-guided tours with multilingual support", "Interactive maps with real-time wayfinding", "Mobile-first progressive web app"],
    tags: ["Accessibility", "Mobile App", "IoT", "Public Service"],
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHeader
        label="Our Work"
        title="Real results. Real projects."
        description="A selection of projects that demonstrate how we help organizations transform through practical, impactful technology solutions."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {projects.map((project, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={project.num}
                className={`py-20 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${!imageRight ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`${!imageRight ? "lg:[direction:ltr]" : ""}`}>
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-3 mt-3">
                      {project.client && <span className="text-[13px] text-white/50">{project.client}</span>}
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#C4A882]/[0.1] border border-[#C4A882]/20 text-[#C4A882]">{project.sector}</span>
                    </div>
                    <p className="mt-6 text-[14px] text-white/50 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-8">
                      <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882]/80 block mb-4">Key Outcomes</span>
                      <div className="space-y-0">
                        {project.results.map((result, j) => (
                          <div key={result} className={`py-3 ${j > 0 ? "border-t border-white/[0.04]" : ""}`}>
                            <span className="text-[14px] text-white/50 leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`${!imageRight ? "lg:[direction:ltr]" : ""}`}>
                    <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#141B2E] aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-white/[0.05] flex items-center justify-center mx-auto mb-4">
                          <span className="text-[24px] font-bold text-white/20 font-mono">{project.num}</span>
                        </div>
                        <span className="text-[13px] text-white/20">Project Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
