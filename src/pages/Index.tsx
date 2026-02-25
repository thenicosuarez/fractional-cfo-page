
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfitGenieBanner from "@/components/ProfitGenieBanner";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RecommendedTools from "@/components/RecommendedTools";

const Index = () => {
  useEffect(() => {
    // Simple scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-element');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProfitGenieBanner />
      
      <main>
        <div className="animate-on-scroll">
          <Services />
        </div>
        
        <div className="animate-on-scroll">
          <Approach />
        </div>
        
        <div className="animate-on-scroll">
          <Testimonials />
        </div>
        
        <div className="animate-on-scroll">
          <About />
        </div>
        
        <div className="animate-on-scroll">
          <RecommendedTools />
        </div>
        
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
