
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-cfo-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Real results from business leaders who transformed their financial operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cfo-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-cfo-accent text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Nico was instrumental throughout our entire diligence and capital raising process. From pre-close preparation through post-close integration, he made sure everything went smoothly at every stage. There's no way this deal gets done without him.",
    name: "Cameron",
    position: "CEO, SaaS Company · Eight-Figure Acquisition"
  },
  {
    quote: "Nico helped us truly understand our business model and built a financial framework that was both rigorous and intuitive. His analytical thinking and ability to present data clearly were invaluable as we evaluated our retail launch — he saved us countless hours and dollars we didn't know we were leaving on the table.",
    name: "Patrick",
    position: "CEO, E-Commerce Skincare Brand · Financial Modeling & Retail Launch"
  },
  {
    quote: "As a first-time buyer, I didn't know what I didn't know. Nico coached me through the entire negotiation and diligence process with clarity and confidence — he taught me how to see around corners. Without him, I'm not sure the deal would have happened.",
    name: "DJ",
    position: "First-Time Business Buyer · Acquisition Advisory & Negotiation"
  }
];

export default Testimonials;
