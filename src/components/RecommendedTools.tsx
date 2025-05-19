
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const RecommendedTools = () => {
  const toolCategories = [
    {
      category: "Financial Management",
      tools: [
        {
          name: "Quickbooks Online",
          description: "Cloud-based accounting software for small businesses",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "Fathom",
          description: "Financial reporting and analytics platform",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "Bench",
          description: "Bookkeeping services with dedicated bookkeepers",
          link: "#",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "E-commerce Operations",
      tools: [
        {
          name: "Inventory Planner",
          description: "Inventory forecasting and planning solution",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "Easyship",
          description: "All-in-one shipping platform for global e-commerce",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "SureDone",
          description: "Multi-channel inventory and listing management",
          link: "#",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Startup Essentials",
      tools: [
        {
          name: "DocSend",
          description: "Secure document sharing with engagement analytics",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "Carta",
          description: "Equity management and valuation platform",
          link: "#",
          image: "/placeholder.svg"
        },
        {
          name: "AngelList",
          description: "Platform for startups, angel investors, and job-seekers",
          link: "#",
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  return (
    <section id="tools" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Recommended Tools</h2>
          <p className="section-subtitle">
            These are services and products I use and highly recommend to my clients
          </p>
          <div className="text-sm text-cfo-slate mt-2">
            <em>Disclosure: Some links below may be affiliate links that provide a small commission at no additional cost to you.</em>
          </div>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-cfo-navy mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.tools.map((tool, toolIndex) => (
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:no-underline"
                    key={toolIndex}
                  >
                    <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-cfo-accent">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-4 bg-gray-100 rounded-md p-4 flex items-center justify-center">
                            <img 
                              src={tool.image} 
                              alt={tool.name} 
                              className="h-12 object-contain" 
                            />
                          </div>
                          <h4 className="text-xl font-semibold mb-2 text-cfo-navy">{tool.name}</h4>
                          <p className="text-cfo-slate flex-grow">{tool.description}</p>
                          <div className="mt-4">
                            <span className="inline-flex items-center text-cfo-accent hover:text-cfo-blue transition-colors font-medium text-sm">
                              Learn more
                              <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedTools;
