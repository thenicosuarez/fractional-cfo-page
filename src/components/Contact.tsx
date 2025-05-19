
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Schedule a consultation to discuss how I can help optimize your financial strategy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cfo-navy mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-cfo-slate">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-cfo-slate">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-cfo-slate">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-cfo-slate">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can I help you?"
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-cfo-navy hover:bg-cfo-blue text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-cfo-navy mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cfo-navy/10 p-2 rounded-md mr-4">
                      <svg className="w-6 h-6 text-cfo-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cfo-navy">Phone Number</h4>
                      <p className="text-cfo-slate">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cfo-navy/10 p-2 rounded-md mr-4">
                      <svg className="w-6 h-6 text-cfo-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cfo-navy">Email</h4>
                      <p className="text-cfo-slate">contact@fractionalcfo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cfo-navy/10 p-2 rounded-md mr-4">
                      <svg className="w-6 h-6 text-cfo-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cfo-navy">Office</h4>
                      <p className="text-cfo-slate">123 Finance Street<br />Business District<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-cfo-navy mb-4">Schedule a Call</h4>
                  <Button className="w-full bg-cfo-accent hover:bg-cfo-accent/90 text-white">
                    Book a Consultation
                  </Button>
                  <p className="text-xs text-center text-cfo-slate mt-2">
                    30-minute free consultation available
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-cfo-navy mb-4">Connect With Me</h4>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="bg-cfo-navy/10 hover:bg-cfo-navy/20 p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-cfo-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-cfo-navy/10 hover:bg-cfo-navy/20 p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-cfo-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-cfo-navy/10 hover:bg-cfo-navy/20 p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-cfo-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                      </svg>
                    </a>
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
