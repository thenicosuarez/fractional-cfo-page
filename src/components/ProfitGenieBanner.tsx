
import React from 'react';
import { Button } from "@/components/ui/button";

const ProfitGenieBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-700 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20">
            ✨ New Product
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-playfair">
            The Profit Dashboard Built for Operators Who Actually Care About Margins
          </h2>

          <p className="text-lg md:text-xl text-white/85 mb-4 max-w-3xl mx-auto leading-relaxed">
            Most e-commerce analytics tools show you revenue. <strong className="text-white">Profit Genie shows you the truth</strong> — real contribution margin, true CAC payback, and the unit economics your bank account actually feels.
          </p>

          <p className="text-base text-white/70 mb-10 max-w-2xl mx-auto">
            Purpose-built for e-commerce operators who need CFO-grade insight.
          </p>

          <Button
            className="bg-white text-emerald-900 hover:bg-white/90 text-lg px-10 py-7 font-bold rounded-lg shadow-lg shadow-black/20 transition-all hover:scale-105"
            asChild
          >
            <a href="https://profitgenie.ai" target="_blank" rel="noopener noreferrer">
              Try Profit Genie →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfitGenieBanner;
