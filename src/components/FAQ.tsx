"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How much do safety nets cost in Chennai?",
    a: "The price of safety nets in Chennai starts from ₹12 to ₹35 per square foot. The exact rate depends on the mesh thickness, brand (like Garware), UV stabilization levels, and warranty period chosen (ranging from 1 to 5 years)."
  },
  {
    q: "Are invisible grills safe for high-rise apartment balconies?",
    a: "Yes, invisible grills are extremely safe. Made of high-tensile 316 Marine Grade Stainless Steel cables coated in nylon, they can easily withstand loads up to 400kg. They are widely recommended for high-rise balcony and window installations."
  },
  {
    q: "How can I permanently stop pigeons from entering my balcony?",
    a: "The only permanent and guaranteed way to stop pigeons from entering your balcony is by installing high-density, UV-stabilized anti-bird nets with a 30mm to 50mm square mesh size. Unlike temporary fixes, full balcony netting completely blocks flight paths while allowing 100% ventilation."
  },
  {
    q: "Can monkeys tear or damage your safety nets?",
    a: "Monkeys cannot easily damage our heavy-duty monkey safety nets. We use 2.5mm to 4.0mm thick braided nylon twines or tight grid HDPE nets specifically built for high impact resistance to prevent monkey intrusions."
  },
  {
    q: "Do you offer a free site inspection and measurements?",
    a: "Yes, Sravani Netting Solutions offers a 100% free site inspection, measurement check, and cost estimation anywhere in Chennai. There are no hidden call-out fees or charges if you choose not to proceed."
  },
  {
    q: "Is same-day installation available in Chennai?",
    a: "Yes, we offer same-day inspection and installation services across Chennai. If you book an inspection before 12 PM, we can complete the installation on the same day."
  },
  {
    q: "Which safety nets are best for toddlers in high-rise flats?",
    a: "For high-rise apartments with toddlers, 2.5mm thick braided nylon nets or premium HDPE mesh with a 40mm grid size are the safest options. These specific materials can withstand severe impact forces up to 150kg, effectively preventing accidental falls."
  },
  {
    q: "What is the difference between Nylon and HDPE safety nets?",
    a: "Nylon nets are highly flexible, elastic, and offer good impact absorption. HDPE (High Density Polyethylene) nets are stiffer, highly resistant to UV rays, chemically inert, and absorb zero moisture, making them extremely durable outdoors."
  },
  {
    q: "Can bird nets block light and air in the balcony?",
    a: "No, our transparent nylon and light-colored HDPE bird nets have a high open-area grid (typically 30mm to 50mm) which allows 98% of natural light and airflow to pass through easily, keeping your balcony bright and ventilated."
  },
  {
    q: "What areas in Chennai do you service?",
    a: "We service all locations across Chennai, including Anna Nagar, Velachery, T. Nagar, Adyar, OMR, Porur, Guindy, Tambaram, Mylapore, Besant Nagar, Kilpauk, Nungambakkam, and surrounding suburbs."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Generate FAQ JSON-LD Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Got Questions? We Have Answers
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Read through our top 10 detailed FAQs to learn everything about installation, durability, and cost in Chennai.
          </p>
          <div className="h-1 bg-secondary w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Accordion Trigger */}
              <button
                id={`faq-trigger-${index}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 text-left text-slate-800 hover:text-primary font-bold text-sm sm:text-base font-display transition-colors duration-200 cursor-pointer"
              >
                <span className="flex items-center space-x-3 pr-4">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-185 text-primary" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pl-13">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm">
            Still have an unanswered question? Call us directly for immediate support!
          </p>
          <a
            href="tel:+918637607910"
            className="inline-flex items-center space-x-1.5 text-primary hover:text-primary-light font-bold text-sm sm:text-base mt-2"
          >
            <span>Call Customer Support:</span>
            <span className="underline">+91 86376 07910</span>
          </a>
        </div>

      </div>
    </section>
  );
}
