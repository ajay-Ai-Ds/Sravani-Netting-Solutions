import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sravani Netting Solutions Chennai",
  description: "Terms and Conditions for Sravani Netting Solutions. Read our service terms, installation warranty guidelines, and payment policies for safety nets in Chennai.",
  alternates: {
    canonical: "https://www.sravaninettingsolutions.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 text-slate-800">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 font-display">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: August 2026 | Sravani Netting Solutions Chennai
          </p>

          <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">1. Introduction</h2>
              <p>
                Welcome to <strong>Sravani Netting Solutions</strong>. By booking our services, requesting an inspection, or utilizing our website (
                <a href="https://www.sravaninettingsolutions.com" className="text-[#e63946] underline">
                  https://www.sravaninettingsolutions.com
                </a>
                ), you agree to comply with and be bound by the following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">2. Services Offered</h2>
              <p>
                Sravani Netting Solutions provides installation services for Balcony Safety Nets, Pigeon & Bird Protection Nets, Children Safety Nets, Invisible Grills, Cricket Practice Nets, and Ceiling Pulley Cloth Drying Hangers across Chennai and neighboring districts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">3. Site Inspections & Quotations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>We provide free site inspection and measurement within Chennai service limits.</li>
                <li>Final pricing depends on square footage measured, material selection (e.g. Garware HDPE nets / Marine Grade 316 Stainless Steel wire), and installation structure complexity.</li>
                <li>Quotations are valid for 15 days from the date of issuance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">4. Warranty & Guarantee Policy</h2>
              <p>
                We offer up to 10-Year Warranty on selected high-density UV-stabilized safety net materials against natural weathering and tensile degradation. Warranty coverage excludes intentional cutting, mechanical damage, fire, or unauthorized alterations by third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">5. Payment & Cancellations</h2>
              <p>
                Payments can be made via cash, UPI, or direct bank transfer upon satisfactory completion of installation. Service appointments may be rescheduled or cancelled with prior notification to our support team.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3 font-display">6. Contact Information</h2>
              <p>For any queries regarding service terms or warranty claims, contact us at:</p>
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
