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
import { Layout, PageHeader, CTABanner, fadeIn, fadeInLeft, fadeInRight, stagger } from "@/components/layout";

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
        title="Let's Build Together"
        description="Book a free consultation. No obligations, no pressure — just an honest conversation about your technology needs."
      />

      <section className="py-24 bg-[#0b0b0f] border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="lg:col-span-3">
              <div className="rounded-2xl border border-white/[0.08] bg-[#141419] p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-sm">Name *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John Doe" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg focus:border-[#0645FF]/40" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/60 text-sm">Email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="john@company.com" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg focus:border-[#0645FF]/40" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-sm">Company</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Company name (optional)" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg focus:border-[#0645FF]/40" data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-sm">How Can We Help? *</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={5} placeholder="Tell us about your project, goals, or questions..." className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg focus:border-[#0645FF]/40 resize-none" data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="bg-[#0645FF] hover:bg-[#0535DD] text-white font-medium rounded-full px-6 h-10 w-full sm:w-auto" data-testid="button-submit-contact">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#141419] p-7">
                <h3 className="font-heading text-lg font-semibold text-white mb-6">Contact Info</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "hello@aviontech.com" },
                    { icon: Phone, label: "Phone", value: "(859) 555-0142" },
                    { icon: MapPin, label: "Location", value: "Lexington, Kentucky" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3" data-testid={`text-contact-${item.label.toLowerCase()}`}>
                      <div className="w-10 h-10 rounded-lg bg-[#0645FF]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#3B7BFF]" />
                      </div>
                      <div>
                        <div className="text-xs text-white/40">{item.label}</div>
                        <div className="text-sm text-white/70 mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#141419] p-7">
                <h3 className="font-heading text-lg font-semibold text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 24 hours",
                    "Free 30-60 min consultation",
                    "No obligation, no pressure",
                    "Tailored recommendations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3B7BFF] shrink-0 mt-0.5" />
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
