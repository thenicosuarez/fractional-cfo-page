
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Approach = () => {
  return (
    <section id="approach" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Strategic Approach</h2>
          <p className="section-subtitle">
            I provide hands-on financial leadership with a focus on actionable insights and measurable outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-2 bg-cfo-navy"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-cfo-navy/10 w-12 h-12 flex items-center justify-center mb-6">
                <span className="font-bold text-cfo-navy text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-cfo-navy mb-3">Diagnostic Assessment</h3>
              <p className="text-cfo-slate mb-4">
                Deep analysis of your current financial position, identifying strengths, weaknesses, and immediate opportunities for improvement.
              </p>
              <ul className="space-y-2 text-sm text-cfo-slate">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Financial systems review</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cash flow assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Operational efficiency analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-2 bg-cfo-accent"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-cfo-accent/10 w-12 h-12 flex items-center justify-center mb-6">
                <span className="font-bold text-cfo-accent text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-cfo-navy mb-3">Strategic Planning</h3>
              <p className="text-cfo-slate mb-4">
                Development of tailored financial strategies aligned with your business goals and market opportunities.
              </p>
              <ul className="space-y-2 text-sm text-cfo-slate">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Financial modeling and projections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Growth capital planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Risk assessment and mitigation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-2 bg-cfo-blue"></div>
            <CardContent className="p-6 pt-8">
              <div className="rounded-full bg-cfo-blue/10 w-12 h-12 flex items-center justify-center mb-6">
                <span className="font-bold text-cfo-blue text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-cfo-navy mb-3">Implementation & Support</h3>
              <p className="text-cfo-slate mb-4">
                Hands-on execution of strategies with ongoing guidance to ensure successful implementation and measurable results.
              </p>
              <ul className="space-y-2 text-sm text-cfo-slate">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>KPI development and monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular financial reviews</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategy refinement</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg p-8 relative">
            <div className="bg-cfo-navy text-white py-3 px-6 rounded-md inline-block absolute -top-5 left-1/2 transform -translate-x-1/2">
              <h3 className="font-bold">Why a Fractional CFO?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h4 className="font-bold text-cfo-navy mb-3">Cost Effective</h4>
                <p className="text-cfo-slate text-sm">
                  Access C-level financial expertise without the full-time executive cost.
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="font-bold text-cfo-navy mb-3">Specialized Expertise</h4>
                <p className="text-cfo-slate text-sm">
                  Industry-specific knowledge tailored to ecommerce and acquisition strategies.
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="font-bold text-cfo-navy mb-3">Scalable Support</h4>
                <p className="text-cfo-slate text-sm">
                  Flexible engagement models that grow with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
