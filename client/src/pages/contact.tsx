import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { Layout, PageHeader, CTABanner } from "@/components/layout";

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
    const subject = encodeURIComponent(`Contact from ${data.name}${data.company ? ` — ${data.company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:richard@miritechnology.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening Email Client",
      description: "Your email app should open with the message ready to send.",
    });
    form.reset();
  };

  return (
    <Layout>
      <PageHeader
        label="Contact Us"
        title="Let's build together."
        description="Book a free consultation. No obligations — just an honest conversation about your technology needs."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.06] bg-transparent p-10">
                <h2 className="font-heading text-2xl font-bold text-white mb-8">Send us a message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Name *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John Doe" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/50 text-[13px]">Email *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="john@company.com" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[13px]">Company</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Company name (optional)" className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg h-11 focus:border-[#0645FF]/50" data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/50 text-[13px]">How can we help? *</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={5} placeholder="Tell us about your project, goals, or questions..." className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-lg focus:border-[#0645FF]/50 resize-none" data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" className="bg-[#0645FF] text-white font-medium rounded-full px-7 h-11 hover:bg-[#0645FF]/90 w-full sm:w-auto" data-testid="button-submit-contact">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-white/[0.06] bg-transparent p-10">
                <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">Contact Info</span>
                <div className="space-y-6">
                  {[
                    { label: "Email", value: "richard@miritechnology.com" },

                    { label: "Location", value: "Lexington, Kentucky" },
                  ].map((item) => (
                    <div key={item.label} data-testid={`text-contact-${item.label.toLowerCase()}`}>
                      <div className="text-[11px] text-white/35 uppercase tracking-wider">{item.label}</div>
                      <div className="text-[15px] text-white/60 mt-1">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-transparent p-10">
                <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-[#C4A882] block mb-6">What to Expect</span>
                <div className="space-y-0">
                  {[
                    "Response within 24 hours",
                    "Free 30-60 min consultation",
                    "No obligation, no pressure",
                    "Tailored recommendations",
                  ].map((item, i) => (
                    <div key={item} className={`py-4 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}>
                      <span className="text-[14px] text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
