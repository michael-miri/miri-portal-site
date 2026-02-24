import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout, PageHeader, CTABanner, fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/components/layout";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Please tell us how we can help"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <Layout>
      <PageHeader
        label="Contact Avion Tech"
        title="Let's Build"
        highlight="Together"
        description="Book a free consultation. No obligations, no pressure — just an honest conversation about your technology needs."
      />

      <section className="relative py-24 bg-[#08081a]">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#0645FF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="lg:col-span-3">
              <div className="rounded-2xl border border-white/[0.06] bg-[#0e0e22]/60 p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-sm">Name *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John Doe" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus:border-[#0645FF]/40 focus:ring-[#0645FF]/20" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-sm">Email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="john@company.com" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus:border-[#0645FF]/40 focus:ring-[#0645FF]/20" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-sm">Company</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Company name (optional)" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus:border-[#0645FF]/40 focus:ring-[#0645FF]/20" data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-sm">How Can We Help? *</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={5} placeholder="Tell us about your project, goals, or questions..." className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus:border-[#0645FF]/40 focus:ring-[#0645FF]/20 resize-none" data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-semibold px-8 rounded-xl w-full sm:w-auto group" data-testid="button-submit-contact">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-white/[0.06] bg-[#0e0e22]/60 p-8">
                <h3 className="font-heading text-lg font-semibold text-white mb-6">Contact Info</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@aviontech.com" },
                    { icon: Phone, label: "Phone", value: "(859) 555-0142" },
                    { icon: MapPin, label: "Location", value: "Lexington, Kentucky" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3" data-testid={`text-contact-${item.label.toLowerCase()}`}>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0645FF]/20 to-[#0645FF]/5 border border-[#0645FF]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#4B8BFF]" />
                      </div>
                      <div>
                        <div className="text-xs text-white/35">{item.label}</div>
                        <div className="text-sm text-white/70 mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#0e0e22]/60 p-8">
                <h3 className="font-heading text-lg font-semibold text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "Free 30-60 min consultation",
                    "No obligation, no pressure",
                    "Tailored recommendations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0645FF] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/40">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
