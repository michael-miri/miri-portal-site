import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Zap, Clock, Shield, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";

const demoFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const valueProps = [
  {
    icon: Zap,
    title: "Custom Demo, Built for You",
    desc: "No templates. No guesswork. We'll build a real preview of how your business could run smarter — completely free.",
  },
  {
    icon: Clock,
    title: "Transform in as Little as 2 Weeks",
    desc: "Our rapid delivery model means you see real results fast. Custom software and AI integrations that automate your operations.",
  },
  {
    icon: Shield,
    title: "No Risk, No Pressure",
    desc: "If you don't see clear value, you don't move forward. It's that simple. Free consultation with zero obligation.",
  },
];

const checklist = [
  "Custom software tailored to your workflows",
  "AI integrations that automate operations",
  "Cut costs and eliminate disconnected tools",
  "Scale faster with modern technology",
  "Free demo buildout — no strings attached",
  "Response within 24 hours",
];

export default function Demo() {
  useSEO({
    title: "Get Your Free Demo - Custom Software & AI Solutions | Miri Technology",
    description: "Sign up for a free consultation and custom demo buildout. We'll build a real preview tailored to your workflows — no templates, no obligation. Transform your business in as little as 2 weeks.",
  });

  const { toast } = useToast();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", company: "", phone: "", message: "" },
  });

  const onSubmit = async (data: DemoFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "demo" }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast({
        title: "Request Received!",
        description: "We'll reach out within 24 hours to schedule your consultation.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at contact@miritechnology.com",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <section className="pt-[140px] pb-20 bg-[#0A0E1A]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 lg:sticky lg:top-32">
                <h2 className="font-heading text-2xl font-bold text-white mb-2" data-testid="text-form-title">Get Your Free Demo</h2>
                <p className="text-[14px] text-white/50 mb-8">Fill out the form below and we'll reach out within 24 hours to schedule your consultation.</p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Name *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John Doe" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-demo-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Work Email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="john@company.com" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-demo-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Company *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Company name" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-demo-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Phone</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" placeholder="(555) 123-4567" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-demo-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[13px]">Tell us about your business</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} placeholder="What tools are you currently using? What processes would you like to automate?" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40 rounded-lg focus:border-[#0645FF]/50 resize-none" data-testid="input-demo-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={!form.formState.isValid} className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-12 hover:bg-[#0645FF]/90 w-full text-[15px] disabled:opacity-40 disabled:cursor-not-allowed" data-testid="button-submit-demo">
                      Get My Free Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="text-[12px] text-white/30 text-center">No spam. No obligation. We'll reach out within 24 hours.</p>
                  </form>
                </Form>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6" data-testid="label-demo">Free Consultation & Demo</span>
              <h1 className="font-heading text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold text-white leading-[1.08] tracking-tight" data-testid="text-hero-title">
                Still running your business on spreadsheets?
              </h1>
              <p className="mt-6 text-[17px] text-white/50 leading-relaxed max-w-lg" data-testid="text-hero-subtitle">
                We build custom software and AI integrations that automate your operations, cut costs, and help you scale — fast. Sign up for a free consultation and we'll build you a custom demo tailored to your workflows.
              </p>

              <div className="mt-12 space-y-8">
                {valueProps.map((prop) => (
                  <div key={prop.title} className="flex gap-5" data-testid={`card-value-${prop.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 border border-[#0645FF]/20 flex items-center justify-center shrink-0">
                      <prop.icon className="w-5 h-5 text-[#0645FF]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">{prop.title}</h3>
                      <p className="text-[14px] text-white/50 leading-relaxed mt-1">{prop.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/[0.06]">
                <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">What You Get</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {checklist.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#0645FF] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
