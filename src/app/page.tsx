import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Defer below-the-fold components to minimize initial JavaScript bundle & TBT on mobile
const Trust = dynamic(() => import("@/components/Trust"));
const Services = dynamic(() => import("@/components/Services"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Process = dynamic(() => import("@/components/Process"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const InstagramSection = dynamic(() => import("@/components/InstagramSection"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingCTAs = dynamic(() => import("@/components/FloatingCTAs"));
const Popups = dynamic(() => import("@/components/Popups"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Trust />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <Reviews />
        <InstagramSection />
        <FAQ />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
      <Popups />
    </>
  );
}
