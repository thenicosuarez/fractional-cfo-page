
import React from 'react';

const Tools: React.FC = () => {
  const toolCategories = [
    {
      category: "Financial Management",
      tools: [
        {
          name: "Gusto",
          description: "All-in-one payroll, benefits, and HR platform for small businesses",
          link: "https://gusto.com/d/nicolas66182308"
        },
        {
          name: "Riverbend / Amazon Services",
          description: "Specialized services for Amazon sellers",
          link: "https://riverbendconsulting.referralrock.com/l/NICOLASSUA05/"
        },
        {
          name: "Mercury",
          description: "Banking built for startups and e-commerce businesses",
          link: "https://mercury.com/r/tns-practices-llc"
        },
        {
          name: "Marcus",
          description: "High-yield online savings account with bonus opportunities",
          link: "https://www.marcus.com/share/NIC-M6F-8RBZ"
        }
      ]
    },
    {
      category: "Business Tools",
      tools: [
        {
          name: "Doola",
          description: "Form your business and handle compliance (10% discount for referrals)",
          link: "https://doola.com/?via=2sNo9UKXFEXDmCukUa0eFZUvNyd"
        },
        {
          name: "Otter AI",
          description: "AI meeting notes and transcription service",
          link: "https://otter.ai/referrals/M19IGIBK"
        },
        {
          name: "Replit",
          description: "AI-powered software development platform — build and deploy apps fast",
          link: "https://replit.com/refer/thenicosuarez"
        },
        {
          name: "Lovable",
          description: "AI-first web app builder — go from idea to production in minutes",
          link: "https://lovable.dev/invite/XX8I9YH"
        },
        {
          name: "Bolt",
          description: "No-code platform for building web applications",
          link: "https://bolt.new/?rid=ez85zl"
        }
      ]
    },
    {
      category: "Funding Solutions",
      tools: [
        {
          name: "WeFunder",
          description: "Equity crowdfunding platform for startups",
          link: "https://wefunder.com/nicolassuarez/raise"
        },
        {
          name: "Republic",
          description: "Equity crowdfunding platform for startups",
          link: "https://republic.com/raise/i/tk7ncq"
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

        <div className="space-y-12 max-w-4xl mx-auto">
          {toolCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-cfo-navy mb-6 text-center">
                {category.category}
              </h3>

              <div className="border border-border rounded-lg overflow-hidden">
                <div className="hidden md:grid md:grid-cols-[1fr_2fr_auto] bg-muted/50 px-6 py-3 text-sm font-semibold text-cfo-navy border-b border-border">
                  <span>Name</span>
                  <span>Description</span>
                  <span>Link</span>
                </div>
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className={`grid md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-4 px-6 py-4 items-center ${
                      toolIndex < category.tools.length - 1 ? 'border-b border-border' : ''
                    } hover:bg-muted/30 transition-colors`}
                  >
                    <span className="font-semibold text-cfo-navy">{tool.name}</span>
                    <span className="text-cfo-slate text-sm">{tool.description}</span>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cfo-accent hover:text-cfo-blue transition-colors font-medium text-sm whitespace-nowrap"
                    >
                      Learn more
                      <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
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
