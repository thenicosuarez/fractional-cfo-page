
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, PiggyBank, Briefcase, FileText } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Specialized CFO Services</h2>
          <p className="section-subtitle">
            Tailored financial guidance for ecommerce entrepreneurs and investors seeking acquisition opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cfo-navy mb-6 text-center md:text-left">
              For Ecommerce Entrepreneurs
            </h3>
            
            <Card className="border-l-4 border-l-cfo-accent shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cfo-accent/10 p-2 rounded-md">
                    <ChartBar className="h-6 w-6 text-cfo-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cfo-navy">Strategic Financial Planning</h4>
                    <p className="text-cfo-slate">
                      Develop comprehensive financial strategies to maximize growth, improve cash flow, and increase profitability for your ecommerce business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-cfo-accent shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cfo-accent/10 p-2 rounded-md">
                    <PiggyBank className="h-6 w-6 text-cfo-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cfo-navy">Cash Flow Optimization</h4>
                    <p className="text-cfo-slate">
                      Implement systems to improve working capital efficiency, optimize inventory management, and enhance overall financial operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cfo-navy mb-6 text-center md:text-left">
              For ETA / Search Funders
            </h3>
            
            <Card className="border-l-4 border-l-cfo-blue shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cfo-blue/10 p-2 rounded-md">
                    <Briefcase className="h-6 w-6 text-cfo-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cfo-navy">M&A Due Diligence</h4>
                    <p className="text-cfo-slate">
                      Comprehensive financial analysis and due diligence for potential acquisitions, identifying risks and uncovering hidden value opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-cfo-blue shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cfo-blue/10 p-2 rounded-md">
                    <FileText className="h-6 w-6 text-cfo-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-cfo-navy">Deal Structuring & Financing</h4>
                    <p className="text-cfo-slate">
                      Expert guidance on deal structuring, financing options, and negotiation support to secure optimal terms for your business acquisition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#approach" 
            className="inline-flex items-center text-cfo-blue hover:text-cfo-accent transition-colors font-semibold"
          >
            Learn more about my approach
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
