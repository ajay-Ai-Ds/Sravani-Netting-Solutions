import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Sravani Netting Solutions Chennai",
  description: "Privacy Policy for Sravani Netting Solutions. Read how we collect, use, and protect your personal information when requesting safety net installation services in Chennai.",
  alternates: {
    canonical: "https://www.sravaninettingsolutions.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 text-slate-800">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 font-display">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: August 2026 | Sravani Netting Solutions Chennai
          </p>

          <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">1. Overview</h2>
              <p>
                At <strong>Sravani Netting Solutions</strong>, accessible from{" "}
                <a href="https://www.sravaninettingsolutions.com" className="text-[#e63946] underline">
                  https://www.sravaninettingsolutions.com
                </a>
                , protecting your privacy is our utmost priority. This Privacy Policy document outlines the types of information collected and recorded by Sravani Netting Solutions and how we utilize it when you request safety net installation, invisible grill services, or cloth hanger installation in Chennai.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">2. Information We Collect</h2>
              <p>
                When you contact us via telephone (+91 86376 07910), WhatsApp, or fill out our enquiry forms, we may collect personal details including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Full Name</li>
                <li>Phone Number / WhatsApp Contact Details</li>
                <li>Email Address</li>
                <li>Installation Address / Location in Chennai</li>
                <li>Service Requirements (e.g. Balcony Nets, Pigeon Nets, Invisible Grills)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Schedule free on-site inspections and measurements in Chennai.</li>
                <li>Provide accurate price quotes and estimates for netting and grill installations.</li>
                <li>Deliver customer support and communicate order updates.</li>
                <li>Improve our website performance, service delivery, and marketing communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">4. Data Sharing & Security</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Your contact information is solely used by Sravani Netting Solutions staff for fulfilling service inquiries. We implement appropriate technical security measures to safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">5. Third-Party Services & Tracking</h2>
              <p>
                Our site uses Google Analytics and Google Ads conversion tags to measure website visits and ad performance. These services may collect non-personally identifiable browser data via cookies. You can manage cookie settings in your browser at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">6. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion, please contact us:
              </p>
              <div className="mt-3 bg-slate-100 p-4 rounded-xl text-sm">
                <p><strong>Sravani Netting Solutions</strong></p>
                <p>Chennai, Tamil Nadu, India</p>
                <p>Phone: +91 86376 07910 / +91 90429 06652</p>
                <p>Email: sravaninettingsolutions@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
