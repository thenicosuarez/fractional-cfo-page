
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Tools: React.FC = () => {
  const toolCategories = [
    {
      category: "Financial Management",
      tools: [
        {
          name: "Riverbend / Amazon Services",
          description: "Specialized services for Amazon sellers",
          link: "https://riverbendconsulting.referralrock.com/l/NICOLASSUA05/",
          image: "/placeholder.svg"
        },
        {
          name: "Mercury",
          description: "Banking built for startups and e-commerce businesses",
          link: "https://mercury.com/r/tns-practices-llc",
          image: "/placeholder.svg"
        },
        {
          name: "Marcus",
          description: "High-yield online savings account with bonus opportunities",
          link: "https://www.marcus.com/share/NIC-M6F-8RBZ",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Business Tools",
      tools: [
        {
          name: "Doola",
          description: "Form your business and handle compliance (10% discount for referrals)",
          link: "https://doola.com/?via=2sNo9UKXFEXDmCukUa0eFZUvNyd",
          image: "/placeholder.svg"
        },
        {
          name: "Otter AI",
          description: "AI meeting notes and transcription service",
          link: "https://otter.ai/referrals/M19IGIBK",
          image: "/placeholder.svg"
        },
        {
          name: "Bolt (no code)",
          description: "No-code platform for building web applications",
          link: "https://bolt.new/?rid=ez85zl",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Funding Solutions",
      tools: [
        {
          name: "WeFunder",
          description: "Equity crowdfunding platform for startups",
          link: "https://wefunder.com/nicolassuarez/raise",
          image: "/placeholder.svg"
        },
        {
          name: "Republic",
          description: "Equity crowdfunding platform for startups",
          link: "https://republic.com/raise/i/tk7ncq",
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cfo-navy mb-2">Recommended Tools</h1>
        <p className="text-xl text-center text-cfo-slate mb-8 max-w-3xl mx-auto">
          These are services and products I use and highly recommend to my clients
        </p>
        <div className="text-sm text-center text-cfo-slate mb-16">
          <em>Disclosure: Some links below may be affiliate links that provide a small commission at no additional cost to you.</em>
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
    </div>
  );
};

export default Tools;
