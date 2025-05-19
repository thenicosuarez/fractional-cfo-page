
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg shadow-md p-1">
              <div className="bg-gradient-to-r from-cfo-navy to-cfo-blue rounded-lg aspect-square"></div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title text-left">Meet Your Fractional CFO</h2>
            <h3 className="text-2xl font-semibold text-cfo-blue mb-4">
              Strategic Financial Leadership
            </h3>
            
            <div className="space-y-4 text-cfo-slate mb-6">
              <p>
                With over 15 years of experience in strategic finance, I've helped businesses across the ecommerce and acquisition space optimize their financial operations and achieve sustainable growth.
              </p>
              <p>
                As a Certified Public Accountant (CPA) with an MBA in Finance, I bring both technical expertise and strategic vision to help businesses navigate financial challenges and capitalize on opportunities.
              </p>
              <p>
                My approach combines hands-on financial leadership with clear communication, ensuring you not only receive expert guidance but also understand the strategic reasoning behind recommendations.
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
                    <span>Financial Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>M&A Advisory</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cash Flow Optimization</span>
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
                    <span>Certified Public Accountant</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>MBA, Finance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-cfo-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategic Finance Certification</span>
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
