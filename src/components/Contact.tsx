
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const email = "thenicosuarez@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "My email address has been copied to your clipboard.",
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy the email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Schedule a consultation or reach out directly to discuss how I can help optimize your financial strategy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cfo-navy mb-6">Email Me Directly</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-cfo-slate mb-4">
                      Send me an email directly with your questions or project details:
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono text-cfo-navy">{email}</span>
                        <Button
                          onClick={copyToClipboard}
                          variant="outline"
                          size="sm"
                          className="ml-2"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copied ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-cfo-slate mt-3">
                      Click the copy button above to copy my email address to your clipboard.
                    </p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-cfo-navy mb-3">What to include in your email:</h4>
                    <ul className="text-sm text-cfo-slate space-y-2">
                      <li>• Your name and company</li>
                      <li>• Brief description of your business</li>
                      <li>• Specific financial challenges you're facing</li>
                      <li>• What type of engagement you're looking for</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cfo-navy mb-6">Schedule a Call</h3>
                
                <div className="space-y-8">
                  <div className="border p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-cfo-navy mb-2">Free 15-Minute Consultation</h4>
                    <p className="text-cfo-slate mb-4">Quick overview of your financial needs and how I can help.</p>
                    <Button 
                      className="w-full bg-cfo-accent hover:bg-cfo-accent/90 text-white"
                      asChild
                    >
                      <a href="https://calendly.com/thenicosuarez/15min" target="_blank" rel="noopener noreferrer">
                        Book Free Consultation
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-cfo-navy mb-2">Deep Dive Consultation</h4>
                    <p className="text-cfo-slate mb-4">60-minute in-depth session to address your specific financial challenges.</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-cfo-navy">$99</span>
                    </div>
                    <Button 
                      className="w-full bg-cfo-navy hover:bg-cfo-blue text-white"
                      asChild
                    >
                      <a href="https://calendly.com/thenicosuarez/new-meeting" target="_blank" rel="noopener noreferrer">
                        Book 60-Minute Consultation
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-4">
                      <a href="https://www.linkedin.com/in/thenicosuarez/" target="_blank" rel="noopener noreferrer" className="bg-cfo-navy/10 hover:bg-cfo-navy/20 p-2 rounded-full transition-colors">
                        <svg className="w-6 h-6 text-cfo-navy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
