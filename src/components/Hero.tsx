
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
            From Chaos to Cash Flow
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Specialized fractional CFO services that turn growing pains into growing profits for ecommerce and acquisition-minded investors, operators, and entrepreneurs
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              className="btn-primary bg-cfo-accent hover:bg-cfo-accent/90 text-lg px-8 py-6"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="bg-white/20 text-lg px-6 py-6 text-white border-white hover:bg-white/30"
                asChild
              >
                <a href="https://calendly.com/thenicosuarez/15min" target="_blank" rel="noopener noreferrer">
                  Free 15min Call
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 text-lg px-6 py-6 text-white border-white hover:bg-white/30"
                asChild
              >
                <a href="https://calendly.com/thenicosuarez/60-min-paid-deep-dive" target="_blank" rel="noopener noreferrer">
                  $199 Deep Dive
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg min-w-[200px]">
              <p className="text-3xl font-bold text-white mb-1">10 Years</p>
              <p className="text-white/80">Financial Expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg min-w-[200px]">
              <p className="text-3xl font-bold text-white mb-1">$3B+</p>
              <p className="text-white/80">In Transactions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg min-w-[200px]">
              <p className="text-3xl font-bold text-white mb-1">15+</p>
              <p className="text-white/80">M&A Deals</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator - Better mobile centering */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce w-full flex justify-center">
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
