"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, PhoneCall, Zap } from "lucide-react";

const benefits = [
  { title: "Premium Quality Nets", desc: "We use ISO-standard materials with high load capacities." },
  { title: "UV Resistant Twines", desc: "Long-lasting protection that won't fade or sag in heat." },
  { title: "Strong Installation", desc: "We use rust-proof stainless steel hooks & wall plugs." },
  { title: "Affordable Prices", desc: "Direct manufacturing rates with zero agent commissions." },
  { title: "Same Day Inspection", desc: "We arrive within hours of your call to inspect the site." },
  { title: "Quick Fitting", desc: "Most installations are completed within 2 to 4 hours." },
  { title: "Professional Technicians", desc: "Certified installers with years of high-rise experience." },
  { title: "Warranty Card Provided", desc: "Up to 5 years warranty on all premium product lines." },
  { title: "Free Measurements", desc: "Absolutely no charges for site inspection & sizing visits." },
  { title: "Hassle-Free Booking", desc: "One-click call or WhatsApp to confirm your appointment." }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef4444]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ef4444]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">
              Unmatched Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-white">
              {"Why Sravani Netting Solutions is Chennai's "}
              <span className="text-[#ef4444]">#1 Choice</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {"We don't believe in cheap temporary fixes. At Sravani Netting Solutions, we use industrial-grade high-tensile netting, 100% pure virgin HDPE materials, and heavy double-walled anchor expansions. Your family's safety is our highest priority."}
            </p>

            {/* Graphic Trust Banner */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#333333] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase text-slate-200 tracking-wider">Certified Safety</h3>
                  <p className="text-xs text-slate-400">100% Non-Toxic & Pet-Friendly Materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase text-slate-200 tracking-wider">Same Day Service</h3>
                  <p className="text-xs text-slate-400">Call before 12 PM for same-day completion</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:+918637607910"
                className="inline-flex items-center gap-2 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-3 px-6 rounded-lg text-sm transition-all shadow-md border border-[#ef4444]"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>Call +91 86376 07910</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grid List */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-start space-x-3 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] rounded-xl p-4 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

