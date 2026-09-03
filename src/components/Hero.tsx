"use client";

import { useState, useEffect } from "react";
import { Phone, Star, CheckCircle, Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/balcony.webp",
    title: "Chennai's #1 Balcony Safety Nets",
    titlePrefix: "Chennai's #1 ",
    titleHighlight: "Balcony Safety Nets",
    titleSuffix: "",
    subtitle: "Protect your loved ones, children, and pets with heavy-duty UV-stabilized balcony safety netting.",
    tagline: "Same Day Installation"
  },
  {
    image: "/images/pigeonsafetynet.webp",
    title: "Chennai's #1 Pigeon Safety Nets",
    titlePrefix: "Chennai's #1 ",
    titleHighlight: "Pigeon Safety Nets",
    titleSuffix: "",
    subtitle: "Keep your balcony clean, hygienic, and pigeon-free with heavy-duty UV-resistant netting.",
    tagline: "Same Day Installation"
  },
  {
    image: "/images/balconygrill.webp",
    title: "Premium Invisible Grills for Modern Apartments",
    titlePrefix: "Premium ",
    titleHighlight: "Invisible Grills",
    titleSuffix: " for Modern Apartments",
    subtitle: "Enjoy unobstructed scenic views of the city skyline with zero compromise on safety.",
    tagline: "High-Tensile Stainless Steel"
  },
  {
    image: "/images/clientwork (1).jpg",
    title: "Heavy-Duty Balcony Child Safety Nets",
    titlePrefix: "Heavy-Duty Balcony ",
    titleHighlight: "Child Safety Nets",
    titleSuffix: "",
    subtitle: "Specifically engineered white safety netting to secure open balconies and keep children safe.",
    tagline: "100% Child Proof"
  },
  {
    image: "/images/clientwork (2).jpg",
    title: "Professional Cricket & Sports Practice Nets",
    titlePrefix: "Professional ",
    titleHighlight: "Cricket & Sports Practice Nets",
    titleSuffix: "",
    subtitle: "Custom-sized heavy-duty outdoor netting systems perfect for terrace cricket pitches and backyards.",
    tagline: "UV-Stabilized Nets"
  },
  {
    image: "/images/clientwork (4).jpg",
    title: "Robust Wire-Reinforced Monkey Safety Nets",
    titlePrefix: "Robust Wire-Reinforced ",
    titleHighlight: "Monkey Safety Nets",
    titleSuffix: "",
    subtitle: "Bite-proof and tear-resistant thick safety nets that block monkeys while maintaining ventilation.",
    tagline: "Bite-Resistant & Sturdy"
  },
  {
    image: "/images/clientwork (9).jpg",
    title: "Building Duct & Open Shaft Bird Protection",
    titlePrefix: "Building Duct & Open Shaft ",
    titleHighlight: "Bird Protection Nets",
    titleSuffix: "",
    subtitle: "Block birds from nesting in vertical duct areas and building voids with industrial-grade netting.",
    tagline: "Industrial-Grade Quality"
  },
  {
    image: "/images/clothhanger.jpg",
    title: "Ceiling-Mounted Space-Saving Cloth Hangers",
    titlePrefix: "Ceiling-Mounted Space-Saving ",
    titleHighlight: "Cloth Hangers",
    titleSuffix: "",
    subtitle: "Premium pulley-operated stainless steel drying rods for efficient balcony space management.",
    tagline: "Heavy-Duty Pulley System"
  },
  {
    image: "/images/petsafetynet.webp",
    title: "100% Reliable Pet & Child Safety Netting",
    titlePrefix: "100% Reliable ",
    titleHighlight: "Pet & Child Safety Nets",
    titleSuffix: "",
    subtitle: "Keep your cats, dogs, and toddlers completely secure on open high-rise apartment balconies.",
    tagline: "Heavy-Duty & Weather-Proof"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Balcony Safety Nets");
  const [message, setMessage] = useState("");

  // Touch Swipe coordinates
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const servicesList = [
    "Balcony Safety Nets",
    "Pigeon Safety Nets",
    "Bird Protection Nets",
    "Monkey Safety Nets",
    "Children Safety Nets",
    "Sports Safety Nets / Cricket Nets",
    "Invisible Grills (Balcony/Window)",
    "Ceiling Cloth Hangers",
    "All Types of Safety Nets"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("form") || target.closest("button") || target.closest("a")) {
      return;
    }
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in Name and Phone.");
      return;
    }
    
    // Trigger Google Ads Conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    setIsSubmitted(true);
    setName("");
    setPhone("");
    setLocation("");
    setMessage("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const whatsappUrl = "https://wa.me/918637607910?text=Hi%20Sravani%20Netting%20Solutions%2C%20I%20want%20to%20book%20a%20free%20inspection%20and%20quote.";

  return (
    <>
      <section
        id="home"
        className="relative min-h-[75vh] lg:min-h-screen flex items-center pt-36 pb-12 sm:pt-40 lg:pt-48 lg:pb-16 overflow-hidden bg-slate-950"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with smooth transitions */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? "opacity-100 z-10 scale-105 transition-transform duration-[6000ms]" : "opacity-0 z-0 scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                fetchPriority={idx === 0 ? "high" : "auto"}
                loading={idx === 0 ? undefined : "lazy"}
                quality={idx === 0 ? 80 : 70}
                className="w-full h-full object-cover object-center"
                style={{ filter: "saturate(1.05) brightness(0.85) contrast(1.02)" }}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/60 to-black/75 pointer-events-none" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="min-h-[36px] sm:min-h-[40px] flex items-center">
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#dc2626] text-white shadow-md whitespace-nowrap"
                >
                  <Shield className="w-4 h-4 text-white" />
                  {slides[currentSlide].tagline}
                </span>
              </div>

              <div className="min-h-[130px] sm:min-h-[160px] lg:min-h-[180px] flex flex-col justify-center text-left">
                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.12] text-white transition-all duration-300"
                  style={{ textShadow: "0px 2px 14px rgba(0,0,0,0.85), 0px 1px 3px rgba(0,0,0,0.9)" }}
                >
                  {slides[currentSlide].titlePrefix}
                  <span className="text-[#ef4444]">
                    {slides[currentSlide].titleHighlight}
                  </span>
                  {slides[currentSlide].titleSuffix}
                </h1>
              </div>

              <div className="min-h-[50px] sm:min-h-[60px]">
                <p
                  className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl transition-opacity duration-300"
                  style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.85)" }}
                >
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Quick Mobile Action Buttons */}
              <div className="flex sm:hidden flex-wrap gap-3 pt-2">
                <a
                  href="tel:+918637607910"
                  className="flex-1 flex items-center justify-center space-x-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-all border border-[#dc2626]"
                  aria-label="Call +91 86376 07910 for instant quote"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-lg active:scale-95 transition-all border border-[#25D366]"
                  aria-label="WhatsApp Sravani Netting Solutions for free estimate"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Ratings & Trust Indicators */}
              <div className="flex flex-wrap gap-y-3 gap-x-5 pt-4 text-sm sm:text-base text-slate-200 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>5.0 / 5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>1000+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>Free Site Inspection</span>
                </div>
              </div>

              {/* Carousel navigation indicators & arrows */}
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex space-x-1.5">
                  <button
                    onClick={prevSlide}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-[#dc2626] text-white border border-white/25 shadow-sm transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-[#dc2626] text-white border border-white/25 shadow-sm transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex space-x-1 items-center">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="w-8 h-8 flex items-center justify-center cursor-pointer group"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index ? "bg-[#dc2626] w-7" : "bg-white/40 w-2 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Right Content - Unified Responsive Enquiry Form */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl relative border border-slate-700/60 text-white">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="text-center pb-0.5">
                      <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                        Book Free Inspection
                      </h2>
                      <p className="text-slate-300 text-xs mt-0.5">
                        Get quote & same-day site visit call back in 15 mins!
                      </p>
                    </div>

                    <div>
                      <label htmlFor="hero-name" className="sr-only">Your Name</label>
                      <input
                        id="hero-name"
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-700 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-[#dc2626] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-700 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-[#dc2626] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="hero-location" className="sr-only">Your Location</label>
                        <input
                          id="hero-location"
                          type="text"
                          placeholder="Your Location in Chennai"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-700 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-[#dc2626] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-service" className="sr-only">Service Needed</label>
                      <select
                        id="hero-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-700 rounded-lg text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-[#dc2626] transition-all"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv} className="bg-slate-950 text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="hero-message" className="sr-only">Message (Optional)</label>
                      <textarea
                        id="hero-message"
                        rows={1}
                        placeholder="Message (e.g. Balcony size, area)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950/80 border border-slate-700 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-[#dc2626] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-[#dc2626]"
                    >
                      <span>Submit Free Inspection Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <a
                        href="tel:+918637607910"
                        className="flex items-center justify-center space-x-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-2.5 rounded-lg text-xs font-semibold border border-[#dc2626] transition-colors"
                        aria-label="Direct Phone Call"
                      >
                        <Phone className="w-3.5 h-3.5 fill-white" />
                        <span>Call Directly</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#1DA851] text-white py-2.5 rounded-lg text-xs font-semibold border border-[#25D366] transition-colors"
                        aria-label="Direct WhatsApp Message"
                      >
                        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                    <h3 className="text-xl font-bold text-white font-display">Thank you!</h3>
                    <p className="text-slate-300 text-xs max-w-xs mx-auto">
                      Your request has been received. Our field team will contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
