
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-md p-1">
              <Avatar className="w-full h-auto aspect-square rounded-lg overflow-hidden">
                <AvatarImage 
                  src="/lovable-uploads/ad1f2806-ed9a-406d-bab7-eed41a1f2c43.png" 
                  alt="Nico, Fractional CFO" 
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="bg-gradient-to-r from-cfo-navy to-cfo-blue text-4xl">
                  NC
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-left">Meet Nico, your 10x Fractional CFO</h2>
            <h3 className="text-2xl font-semibold text-cfo-blue mb-4">
              M&A and Investment Leadership
            </h3>
            
            <div className="space-y-4 text-cfo-slate mb-6">
              <p>
                I began my career investing private capital for a leading insurance company, working on several $100M+ deals and transactions that provided a strong foundation in financial analysis and deal structuring.
              </p>
              <p>
                Later, I joined an early-stage startup as the seventh employee, focusing on acquiring ecommerce businesses in the personal care and health & wellness space. I helped scale the company through its Series C financing to unicorn status while leading over a dozen successful acquisitions.
              </p>
              <p>
                Today, I help entrepreneurs acquire software businesses and work with investors on raising significant capital toward those efforts. I'm particularly passionate about supporting search fund entrepreneurs by providing M&A as a service.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-cfo-navy mb-2">Expertise</h4>
                <ul className="space-y-1 text-sm text-cfo-slate">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>M&A Strategy & Execution</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Search Fund Advisory</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Capital Raising</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-cfo-navy mb-2">Credentials</h4>
                <ul className="space-y-1 text-sm text-cfo-slate">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>B.S. Business Finance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Private Equity Experience</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unicorn Startup Alumnus</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-cfo-navy hover:bg-cfo-blue text-white px-8">
              Download Bio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
