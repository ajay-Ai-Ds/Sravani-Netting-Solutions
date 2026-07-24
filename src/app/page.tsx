import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";

// Defer non-critical below-the-fold components
const Gallery = dynamic(() => import("@/components/Gallery"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
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
