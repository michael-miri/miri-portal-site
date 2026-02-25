import { Layout, PageHeader } from "@/components/layout";

export default function Legal() {
  return (
    <Layout>
      <PageHeader
        label="Legal"
        title="Privacy & Terms."
        description="Our commitment to protecting your data and the terms governing our services."
      />

      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="py-20" id="privacy" data-testid="section-privacy">
            <h2 className="font-heading text-3xl font-bold text-white mb-10" data-testid="heading-privacy">Privacy Policy</h2>
            <div className="space-y-10 max-w-3xl">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Information We Collect</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  We collect information you provide directly, such as your name, email address, phone number, and company name when you submit a contact form or request a consultation. We also collect technical data such as browser type, IP address, and pages visited through standard web analytics.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">How We Use Your Information</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  Your information is used to respond to inquiries, provide requested services, improve our website experience, and communicate relevant updates about our services. We do not sell, rent, or trade your personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Data Protection</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  We implement industry-standard security measures including encryption, access controls, and secure data storage to protect your personal information. All data is transmitted over encrypted connections using TLS 1.3 and stored with AES-256 encryption at rest.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Cookies & Tracking</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  Our website uses essential cookies to ensure proper functionality and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. We do not use cookies for targeted advertising.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Third-Party Services</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  We may use third-party services for analytics, hosting, and communication. These providers are contractually obligated to protect your data and may only use it to perform services on our behalf.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Your Rights</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at richard@miritechnology.com. We will respond to all requests within 30 business days.
                </p>
              </div>
            </div>
          </div>

          <div className="py-20 border-t border-white/[0.06]" id="terms" data-testid="section-terms">
            <h2 className="font-heading text-3xl font-bold text-white mb-10" data-testid="heading-terms">Terms of Service</h2>
            <div className="space-y-10 max-w-3xl">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Agreement to Terms</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  By accessing or using the Miri website and services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not access our website or use our services.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Services</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  Miri provides technology consulting services including but not limited to strategy and transformation, AI and analytics, cybersecurity, cloud infrastructure, custom application development, data governance, UX design, managed services, and training. All services are delivered under separate engagement agreements that outline specific scope, deliverables, and terms.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Intellectual Property</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  All content on this website — including text, graphics, logos, and design elements — is the property of Miri and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Client Deliverables</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  Unless otherwise specified in an engagement agreement, all custom work product created for clients becomes the client's property upon full payment. We retain the right to use anonymized, non-confidential aspects of our work for portfolio and marketing purposes unless otherwise agreed.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Limitation of Liability</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  Miri shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability for any claim shall not exceed the fees paid for the specific services giving rise to the claim.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Confidentiality</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  We treat all client information as confidential. We will not disclose any proprietary or sensitive information shared during consultations or engagements without explicit consent, except as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Changes to Terms</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  We reserve the right to update these terms at any time. Changes take effect immediately upon posting to this page. Continued use of our website after changes constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">Contact</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  For questions about these terms or our privacy practices, contact us at richard@miritechnology.com or call (859) 229-9831.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
