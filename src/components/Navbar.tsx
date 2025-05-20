
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={`font-playfair text-2xl font-bold ${isScrolled ? 'text-cfo-navy' : 'text-white'}`}>
                CFO Services
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <NavLinks isScrolled={isScrolled} />
          </div>
          
          <div className="hidden md:block">
            <Button 
              className={`${isScrolled ? 'bg-cfo-navy text-white' : 'bg-cfo-accent text-white'} hover:bg-cfo-accent/90`}
              asChild
            >
              <a href="https://calendly.com/thenicosuarez/15min" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-cfo-navy' : 'text-white'} p-2`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <NavLinksMobile setMobileMenuOpen={setMobileMenuOpen} />
            <div className="pt-2">
              <Button 
                className="w-full bg-cfo-navy text-white hover:bg-cfo-accent"
                asChild
              >
                <a href="https://calendly.com/thenicosuarez/15min" target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const linkClass = isScrolled ? 'text-cfo-slate hover:text-cfo-navy' : 'text-white hover:text-gray-300';
  
  return (
    <>
      <a href="#services" className={`${linkClass} font-medium`}>Services</a>
      <a href="#approach" className={`${linkClass} font-medium`}>Approach</a>
      <a href="#testimonials" className={`${linkClass} font-medium`}>Testimonials</a>
      <a href="#about" className={`${linkClass} font-medium`}>About</a>
      <a href="#contact" className={`${linkClass} font-medium`}>Contact</a>
    </>
  );
};

const NavLinksMobile = ({ setMobileMenuOpen }: { setMobileMenuOpen: (open: boolean) => void }) => {
  const linkClass = "block px-3 py-2 text-cfo-slate hover:text-cfo-navy font-medium";
  
  const handleClick = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      <a href="#services" className={linkClass} onClick={handleClick}>Services</a>
      <a href="#approach" className={linkClass} onClick={handleClick}>Approach</a>
      <a href="#testimonials" className={linkClass} onClick={handleClick}>Testimonials</a>
      <a href="#about" className={linkClass} onClick={handleClick}>About</a>
      <a href="#contact" className={linkClass} onClick={handleClick}>Contact</a>
    </>
  );
};

export default Navbar;
