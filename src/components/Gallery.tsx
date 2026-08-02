"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  // 15 Newly Added Client Work & Project Images
  {
    id: 1,
    title: "High-Rise Balcony Safety Netting",
    image: "/images/IMG-20260727-WA0046.jpg"
  },
  {
    id: 2,
    title: "Pigeon Protection Mesh Installation",
    image: "/images/IMG-20260727-WA0047.jpg"
  },
  {
    id: 3,
    title: "Transparent Balcony Safety Netting",
    image: "/images/IMG-20260727-WA0048.jpg"
  },
  {
    id: 4,
    title: "SS 316 Marine Grade Invisible Grill",
    image: "/images/IMG-20260727-WA0049.jpg"
  },
  {
    id: 5,
    title: "Residential Apartment Safety Net",
    image: "/images/IMG-20260727-WA0050.jpg"
  },
  {
    id: 6,
    title: "Child & Pet Safety Balcony Barrier",
    image: "/images/IMG-20260727-WA0051.jpg"
  },
  {
    id: 7,
    title: "Duct Area Anti-Bird Netting",
    image: "/images/IMG-20260727-WA0052.jpg"
  },
  {
    id: 8,
    title: "Heavy Duty Monkey Safety Net",
    image: "/images/IMG-20260727-WA0053(1).jpg"
  },
  {
    id: 9,
    title: "Terrace Cricket Practice Enclosure",
    image: "/images/IMG-20260727-WA0054(1).jpg"
  },
  {
    id: 10,
    title: "Open Terrace Safety Protection",
    image: "/images/IMG-20260727-WA0055(1).jpg"
  },
  {
    id: 11,
    title: "UV-Stabilized Balcony Net Work",
    image: "/images/IMG-20260727-WA0058.jpg"
  },
  {
    id: 12,
    title: "Panoramic Balcony Invisible Grill",
    image: "/images/IMG-20260802-WA0004.jpg"
  },
  {
    id: 13,
    title: "Toddler Safety Balcony Netting",
    image: "/images/IMG-20260802-WA0005.jpg"
  },
  {
    id: 14,
    title: "Hygienic Pigeon Protection Mesh",
    image: "/images/IMG-20260802-WA0007.jpg"
  },
  {
    id: 15,
    title: "Premium Site Installation Showcase",
    image: "/images/file_00000000c31881fab3fa1469ff92f4ed.png"
  },

  // Existing Gallery Showcase Images
  {
    id: 16,
    title: "Balcony Protection Net",
    image: "/images/clientwork (1).jpg"
  },
  {
    id: 17,
    title: "Invisible Grill Installation",
    image: "/images/clientwork (2).jpg"
  },
  {
    id: 18,
    title: "Apartment Safety Net",
    image: "/images/clientwork (3).jpg"
  },
  {
    id: 19,
    title: "Heavy Duty Monkey Net",
    image: "/images/clientwork (4).jpg"
  },
  {
    id: 20,
    title: "Cricket Practice Net",
    image: "/images/clientwork (5).jpg"
  },
  {
    id: 21,
    title: "Anti-Bird Netting",
    image: "/images/clientwork (6).jpg"
  },
  {
    id: 22,
    title: "Residential Balcony Net",
    image: "/images/clientwork (7).jpg"
  },
  {
    id: 23,
    title: "High-Rise Invisible Grill",
    image: "/images/clientwork (8).jpg"
  },
  {
    id: 24,
    title: "Duct Area Safety Net",
    image: "/images/clientwork (9).jpg"
  },
  {
    id: 25,
    title: "Monkey Protection Mesh",
    image: "/images/clientwork (10).jpg"
  },
  {
    id: 26,
    title: "Sports Arena Netting",
    image: "/images/clientwork (11).jpg"
  },
  {
    id: 27,
    title: "Pigeon Control Net",
    image: "/images/clientwork (12).jpg"
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1));
  };

  const visibleItems = galleryItems.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
            Safety You Can Trust — <br className="hidden sm:inline" />
            <span className="text-[#e63946]">Premium Nets for Every Home.</span>
          </h2>
          <div className="h-1.5 bg-[#e63946] w-24 mx-auto mt-5 rounded-full" />
        </div>

        {/* Clean Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item, index) => {
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
                className="relative group rounded-3xl overflow-hidden aspect-[4/3] w-full bg-slate-900 border border-slate-200 shadow-md cursor-pointer hover:shadow-2xl hover:border-[#e63946]/50 transition-all duration-300 focus:outline-none text-left"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Clean Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <h3 className="text-white font-bold text-base sm:text-lg font-display drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 bg-slate-950/70 p-2.5 rounded-xl text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {visibleCount < galleryItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(galleryItems.length)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold border border-slate-300 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
            >
              View More Photos ({galleryItems.length - visibleCount} More)
            </button>
          </div>
        )}
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md select-none p-4">
            
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#e63946] w-12 h-12 flex items-center justify-center rounded-xl transition-colors z-20 cursor-pointer border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#e63946] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-colors z-20 cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Central Image Wrapper */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] w-full aspect-[4/3] z-10"
            >
              <Image
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                width={1200}
                height={900}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-[#e63946] w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-colors z-20 cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Caption Banner */}
            <div className="absolute bottom-6 left-0 w-full text-center text-white z-20 px-4">
              <h4 className="text-lg sm:text-2xl font-bold font-display">
                {galleryItems[lightboxIndex].title}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
