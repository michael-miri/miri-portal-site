import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";
import missionImage from "@assets/AdobeStock_194728217_1772041997096.jpeg";

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


export default function About() {
  return (
    <Layout>
      <PageHeader
        label="About Us"
        title="Innovation meets experience."
        description="Over 30 years of combined expertise in technology consulting, digital transformation, and enterprise architecture."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-32">
            <div>
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Mission</span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.08] tracking-tight">
                Delivering the<br />future today.
              </h2>
              <p className="mt-8 text-[15px] text-white/50 leading-[1.8] max-w-md">
                Our consultants combine deep expertise in data analytics, enterprise architecture, and digital strategy to help organizations optimize performance and adapt to evolving technology landscapes.
              </p>
              <p className="mt-4 text-[15px] text-white/50 leading-[1.8] max-w-md">
                We believe technology should serve people, not the other way around. Every solution we design starts with understanding your unique challenges and ends with measurable outcomes.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
              <img src={missionImage} alt="Modern architecture" className="w-full h-full object-cover" data-testid="img-mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Story</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                The end of<br />one-size-fits-all.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <p className="text-[15px] text-white/50 leading-[1.8]">
                  We started with a simple frustration: why does enterprise software make everything harder? Bloated vendor platforms full of features nobody asked for, buried behind interfaces nobody can navigate, sold at prices nobody can justify. We watched organizations spend millions adapting their workflows to fit their tools — instead of the other way around.
                </p>
                <p className="text-[15px] text-white/50 leading-[1.8]">
                  That frustration became a conviction: there has to be a better way. Not another off-the-shelf product with a fresh coat of paint, but something fundamentally different — software that is built around you, your team, and the way you actually work. We call it selfware.
                </p>
                <p className="text-[15px] text-white/50 leading-[1.8]">
                  Selfware is our answer to vendor lock-in, ballooning costs, and technology that creates more problems than it solves. By harnessing AI-driven development, we build purpose-fit solutions faster, better, and cheaper than traditional approaches. No wasted features. No six-figure licensing fees. No twelve-month implementation timelines. Just clean, intuitive tools that do exactly what you need — and nothing you don't.
                </p>
                <p className="text-[15px] text-white/50 leading-[1.8]">
                  Our north star is seamlessness. Technology should feel invisible — it should remove friction, not add it. When a system works the way your mind already thinks, you stop noticing the software and start focusing on the work that matters. That's the experience we obsess over in every project we take on.
                </p>
                <p className="text-[15px] text-white/50 leading-[1.8]">
                  We're not here to sell you a product. We're here to build something that's yours — affordable, intuitive, and designed to make your life genuinely easier. That's the promise behind selfware, and it's the reason we come to work every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Our Values</span>
              <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-[1.08] tracking-tight">
                What drives us.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                {values.map((item, i) => (
                  <div key={item.title} className="bg-[#0A0E1A] p-8" data-testid={`card-value-${i + 1}`}>
                    <span className="text-[13px] text-[#C4A882]/50 font-mono block mb-4">0{i + 1}</span>
                    <h3 className="text-[17px] font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
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
