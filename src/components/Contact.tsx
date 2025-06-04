
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    console.log(`Input changed: ${id} = ${value}`);
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to insert into Supabase...');
      
      // Insert the message into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            company: formData.company || null,
            message: formData.message
          }
        ])
        .select();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Error saving message:', error);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Message saved successfully:', data);
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      console.log('Success toast shown, resetting form...');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      console.log('Form reset complete');
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission complete, isSubmitting set to false');
    }
  };

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
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-cfo-slate">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-cfo-slate">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className="w-full"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-cfo-slate">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-cfo-slate">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      rows={4}
                      className="w-full"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cfo-navy hover:bg-cfo-blue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
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
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-cfo-navy/10 hover:bg-cfo-navy/20 p-2 rounded-full transition-colors">
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
