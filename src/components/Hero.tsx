
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cfo-navy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cfo-navy/90 to-cfo-blue/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Strategic Financial Leadership for Growing Businesses
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Specialized fractional CFO services for ecommerce entrepreneurs and acquisition-driven investors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="btn-primary bg-cfo-accent hover:bg-cfo-accent/90 text-lg px-8 py-6">
              Explore Services
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
              Schedule a Call
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg min-w-[180px]">
              <p className="text-3xl font-bold text-white mb-1">10+ Years</p>
              <p className="text-white/80">Financial Expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg min-w-[180px]">
              <p className="text-3xl font-bold text-white mb-1">$100M+</p>
              <p className="text-white/80">Capital Raised</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg min-w-[180px]">
              <p className="text-3xl font-bold text-white mb-1">50+</p>
              <p className="text-white/80">Successful M&As</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
