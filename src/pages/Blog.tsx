
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-cfo-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Case Studies</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Strategic financial insights, case studies, and lessons learned from real-world experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section - Initially Empty with Placeholder */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* This will be populated with actual blog posts */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-cfo-navy mb-4">Coming Soon</h2>
                  <p className="text-cfo-slate mb-6">
                    We're currently working on case studies and insightful content to share with you.
                    Check back soon for articles on financial strategy, M&A insights, and more.
                  </p>
                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <p className="text-sm text-gray-500">
                      Have a topic you'd like us to cover? Feel free to reach out via the contact form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
