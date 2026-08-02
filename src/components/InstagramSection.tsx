"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink, ShieldCheck, Sparkles, Camera, Play, Video } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";

const reelsData = [
  {
    id: "DY4n6Njy1Th",
    title: "Balcony Safety Net & Grill Installation Video",
    location: "Chennai, Tamil Nadu",
    url: "https://www.instagram.com/reel/DY4n6Njy1Th/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DY4n6Njy1Th/embed",
    badge: "Featured Installation Reel 1"
  },
  {
    id: "DIFk-FvSVS7",
    title: "High-Rise Safety Netting Work Live",
    location: "Chennai, Tamil Nadu",
    url: "https://www.instagram.com/reel/DIFk-FvSVS7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DIFk-FvSVS7/embed",
    badge: "Featured Installation Reel 2"
  }
];

const socialPosts = [
  {
    id: 1,
    title: "Balcony Safety Net Installation",
    location: "Velachery, Chennai",
    likes: "342",
    comments: "28",
    image: "/images/balcony.webp",
    tag: "Balcony Safety",
    platform: "instagram",
    description: "100% transparent high-density HDPE balcony net installed for high-rise apartment safety."
  },
  {
    id: 2,
    title: "Marine Grade Invisible Grills",
    location: "Anna Nagar, Chennai",
    likes: "419",
    comments: "35",
    image: "/images/balconygrill.webp",
    tag: "Invisible Grills",
    platform: "facebook",
    description: "Sleek 316 stainless steel cable grills providing security without blocking panoramic views."
  },
  {
    id: 3,
    title: "Pigeon Protection Mesh",
    location: "Guindy, Chennai",
    likes: "285",
    comments: "19",
    image: "/images/pigeonsafetynet.webp",
    tag: "Pigeon Netting",
    platform: "instagram",
    description: "Clean bird proofing solution keeping duct areas and balconies pigeon-free & hygienic."
  },
  {
    id: 4,
    title: "Ceiling Pulley Cloth Hangers",
    location: "Porur, Chennai",
    likes: "198",
    comments: "14",
    image: "/images/clothhanger.jpg",
    tag: "Cloth Hangers",
    platform: "facebook",
    description: "Space-saving heavy-duty ceiling cloth drying hanger installation."
  },
  {
    id: 5,
    title: "Children & Pet Safety Netting",
    location: "ECR, Chennai",
    likes: "512",
    comments: "42",
    image: "/images/petsafetynet.webp",
    tag: "Child Safety",
    platform: "instagram",
    description: "Heavy impact resistant child safety nets for complete peace of mind."
  },
  {
    id: 6,
    title: "Sports & Cricket Practice Nets",
    location: "OMR, Chennai",
    likes: "376",
    comments: "26",
    image: "/images/cricket.jpeg",
    tag: "Sports Nets",
    platform: "facebook",
    description: "Custom outdoor cricket box netting and sports enclosure installation."
  }
];

export default function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/sravani_netting_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100088136656535";

  return (
    <section id="instagram" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-rose-600/20 via-blue-600/20 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>Official Instagram Videos & Reels</span>
            <FacebookIcon className="w-4 h-4 text-blue-400 fill-current" />
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Watch Our Installation Videos <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Live On Instagram & Facebook
            </span>
          </h2>

          <p className="text-slate-300 mt-4 text-base sm:text-lg font-light leading-relaxed">
            Watch real site installation videos, customer feedback, and project transformations directly from our official Instagram profile <span className="font-semibold text-pink-300">@sravani_netting_solutions</span>!
          </p>

          {/* Direct Profile Link Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-pink-900/30 hover:shadow-2xl hover:shadow-pink-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/20"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <InstagramIcon className="w-4 h-4 text-white" />
              </div>
              <span>Follow @sravani_netting_solutions</span>
              <ExternalLink className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/20"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FacebookIcon className="w-4 h-4 text-white fill-white" />
              </div>
              <span>Facebook Page</span>
              <ExternalLink className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* FEATURED INSTAGRAM REELS VIDEO SHOWCASE */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Video className="w-5 h-5 text-rose-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Featured Instagram Installation Reels
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reelsData.map((reel) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800 hover:border-pink-500/50 transition-all duration-300 shadow-2xl flex flex-col items-center"
              >
                {/* Reel Header Pill */}
                <div className="w-full flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200">{reel.badge}</span>
                  </div>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <span>Open Reel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Instagram Embedded Reel Iframe */}
                <div className="w-full relative aspect-[9/16] sm:h-[480px] bg-slate-950 rounded-2xl overflow-hidden shadow-inner border border-slate-800">
                  <iframe
                    src={reel.embedUrl}
                    className="w-full h-full border-0 rounded-2xl"
                    allowFullScreen
                    scrolling="no"
                    loading="lazy"
                    title={reel.title}
                  />
                </div>

                {/* Reel Caption Footer */}
                <div className="w-full pt-4 pb-2 px-2 flex items-center justify-between text-xs text-slate-300 border-t border-slate-800/80 mt-3">
                  <span className="font-semibold text-white truncate max-w-[220px]">
                    {reel.title}
                  </span>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 font-bold transition-colors flex items-center gap-1"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Reel</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {socialPosts.map((post, idx) => {
            const isFb = post.platform === "facebook";
            const targetUrl = isFb ? facebookUrl : instagramUrl;
            
            return (
              <motion.a
                key={post.id}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`group relative bg-slate-900/80 rounded-3xl overflow-hidden border transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col ${
                  isFb 
                    ? "border-slate-800 hover:border-blue-500/50 hover:shadow-blue-950/40" 
                    : "border-slate-800 hover:border-pink-500/50 hover:shadow-pink-950/40"
                }`}
              >
                {/* Card Header */}
                <div className="p-4 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full p-[2px] ${
                      isFb ? "bg-[#1877F2]" : "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600"
                    }`}>
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                        {isFb ? (
                          <FacebookIcon className="w-4 h-4 text-blue-400 fill-blue-400" />
                        ) : (
                          <Camera className="w-4 h-4 text-pink-400" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-100">
                          {isFb ? "Sravani Netting Solutions" : "sravani_netting_solutions"}
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                      </div>
                      <span className="text-[11px] text-slate-400">{post.location}</span>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    isFb ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-pink-500/10 text-pink-400 border-pink-500/20"
                  }`}>
                    {post.tag}
                  </span>
                </div>

                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Hover Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-6 text-white font-bold text-sm bg-slate-900/90 px-5 py-2.5 rounded-full border border-white/20 shadow-2xl">
                      <span className={`flex items-center gap-1.5 ${isFb ? "text-blue-400" : "text-rose-400"}`}>
                        <Heart className="w-4 h-4 fill-current" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <MessageCircle className="w-4 h-4 fill-slate-300" />
                        {post.comments}
                      </span>
                    </div>
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                    <h3 className="font-bold text-sm text-white font-display line-clamp-1 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-3.5 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                  <span className={`font-semibold flex items-center gap-1.5 ${isFb ? "text-blue-400" : "text-pink-400"}`}>
                    {isFb ? <FacebookIcon className="w-3.5 h-3.5 fill-current" /> : <InstagramIcon className="w-3.5 h-3.5" />}
                    View on {isFb ? "Facebook" : "Instagram"}
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    Open Post &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg border-2 border-slate-950">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center shrink-0 shadow-lg border-2 border-slate-950">
                <FacebookIcon className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Connect with Sravani Netting Solutions
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Join our growing community on Instagram & Facebook for safety tips, installation video showcases & exclusive discounts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-md flex items-center gap-1.5"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs sm:text-sm transition-colors shadow-md flex items-center gap-1.5"
            >
              <FacebookIcon className="w-4 h-4 fill-white" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
