"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Mail, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Safety Nets", href: "#services" },
  { name: "Invisible Grills", href: "#invisible-grills" },
  { name: "Cloth Hangers", href: "#cloth-hangers" },
  { name: "Blog", href: "/blog" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState<"nets" | "grills" | "hangers">("nets");

  // Scroll listener to toggle compact/shadow mode
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to tab change events from Services component
  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<"nets" | "grills" | "hangers">;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("change-services-tab", handleTabChange);
    return () => window.removeEventListener("change-services-tab", handleTabChange);
  }, []);

  // Scroll spy to highlight active nav items
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus area in center of screen
      threshold: 0.05,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["home", "services", "why-choose-us", "gallery", "reviews", "faq", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      // Direct URL navigation like /blog
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    let targetId = href;
    if (href === "#invisible-grills" || href === "#cloth-hangers") {
      targetId = "#services";
      const tabName = href === "#invisible-grills" ? "grills" : "hangers";
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("change-services-tab", { detail: tabName }));
      }
    } else if (href === "#services") {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("change-services-tab", { detail: "nets" }));
      }
    }

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Banner (Announcement bar) - Slides up on scroll */}
      <div 
        className={`bg-[#e63946] text-white text-xs transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-[40px] opacity-100 flex items-center border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left: Phone */}
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+918637607910" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-white/90 transition-colors tracking-wide"
              aria-label="Call +91 86376 07910"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>Call: +91 86376 07910</span>
            </a>
          </div>

          {/* Center: Serving All Chennai */}
          <div className="hidden md:flex items-center gap-1.5 text-white/90 font-medium">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>Serving All Chennai</span>
          </div>

          {/* Right: Email + Badge */}
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:sravaninettingsolutions@gmail.com" 
              className="hover:text-white/90 transition-colors hidden sm:flex items-center gap-1 text-white/90"
              aria-label="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span className="hidden lg:inline">sravaninettingsolutions@gmail.com</span>
              <span className="inline lg:hidden">Email Us</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5 text-white font-bold bg-black/15 px-2.5 py-0.5 rounded-full border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Same Day Installation
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar wrapper (WHITE/LIGHT BACKGROUND) */}
      <div className={`transition-all duration-300 w-full bg-white text-[#000000] border-b border-[#e5e5e5] ${isScrolled ? "shadow-md py-2" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[50px]">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center group cursor-pointer"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <Logo
                height={48}
                isScrolled={false}
                theme="dark"
                className="hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
              {navItems.map((item) => {
                // Determine if this item is active
                const isActive = (() => {
                  const hash = item.href.slice(1);
                  if (hash === "services") return activeSection === "services" && activeTab === "nets";
                  if (hash === "invisible-grills") return activeSection === "services" && activeTab === "grills";
                  if (hash === "cloth-hangers") return activeSection === "services" && activeTab === "hangers";
                  return activeSection === hash;
                })();

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xs xl:text-sm font-bold transition-all duration-200 relative py-2 px-2 xl:px-2.5 rounded-lg cursor-pointer whitespace-nowrap ${
                      isActive 
                        ? "text-[#e63946]" 
                        : "text-[#000000] hover:text-[#e63946]"
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-2 right-2 h-0.5 bg-[#e63946] transition-all duration-200 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`} 
                    />
                  </a>
                );
              })}
            </nav>

            {/* Call Now & WhatsApp CTAs */}
            <div className="flex items-center space-x-2.5">
              <a
                href="tel:+918637607910"
                className="hidden sm:flex items-center space-x-1.5 bg-[#e63946] hover:bg-[#dc2626] text-white px-4 py-2.5 rounded-xl text-xs xl:text-sm font-extrabold shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 border border-[#e63946] whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/918637607910?text=Hi%20Sravani%20Netting%20Solutions%2C%20I%20am%20interested%20in%20a%20free%20inspection%20and%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center space-x-1.5 bg-[#25D366] hover:bg-[#1DA851] text-white px-3.5 py-2.5 rounded-xl text-xs font-extrabold shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 border border-[#25D366] whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button (RED Icon) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl transition-colors border border-[#e5e5e5] bg-[#f9f9f9] text-[#e63946] hover:bg-[#e63946] hover:text-white cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#e63946]" /> : <Menu className="w-6 h-6 text-[#e63946]" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (WHITE BACKGROUND) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden w-[calc(100%-2rem)] max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-white border border-[#e5e5e5] shadow-2xl rounded-2xl overflow-hidden p-5 space-y-4 text-[#000000]">
              {/* ISO Certified Header in Mobile Menu */}
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#e63946] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    ISO Certified
                  </span>
                  <span className="text-xs font-bold text-[#000000]">Safety Nets</span>
                </div>
                <span className="text-[11px] font-semibold text-[#e63946]">All Chennai</span>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item, index) => {
                  const isActive = (() => {
                    const hash = item.href.slice(1);
                    if (hash === "services") return activeSection === "services" && activeTab === "nets";
                    if (hash === "invisible-grills") return activeSection === "services" && activeTab === "grills";
                    if (hash === "cloth-hangers") return activeSection === "services" && activeTab === "hangers";
                    return activeSection === hash;
                  })();

                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                        isActive 
                          ? "text-[#e63946] bg-[#f9f9f9] border-l-4 border-[#e63946] pl-3" 
                          : "text-[#000000] hover:text-[#e63946] hover:bg-[#f9f9f9]"
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#e5e5e5]">
                <a
                  href="tel:+918637607910"
                  className="flex items-center justify-center space-x-2 bg-[#e63946] hover:bg-[#dc2626] text-white py-3.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-98 border border-[#e63946]"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918637607910?text=Hi%20Sravani%20Netting%20Solutions%2C%20I%20am%20interested%20in%20a%20free%20inspection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-98 border border-[#25D366]"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
