import React, { useEffect } from 'react';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhatBringsYouHere from "../components/WhatBringsYouHere";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import journeyBackground from "../assets/journey-background.jpg";

const Index = () => {
  // Enhanced debugging
  useEffect(() => {
    console.log('Index component mounted');
    
    // Check if tailwind classes are loaded
    const isTailwindLoaded = document.documentElement.classList.contains('dark') !== undefined;
    console.log('Tailwind loaded check:', isTailwindLoaded);
    
    // Check if fonts are loaded
    document.fonts.ready.then(() => {
      console.log('Fonts loaded:', Array.from(document.fonts).map(font => font.family));
    });
    
    // Check if images are loaded
    const img = new Image();
    img.onload = () => console.log('Journey background loaded');
    img.onerror = () => console.log('Journey background failed to load');
    img.src = journeyBackground;
    
    return () => {
      console.log('Index component unmounted');
    };
  }, []);
  
  console.log('Index component rendering');
  const features = [
    {
      title: "MBTI-Based Emotional Profiling",
      description: "Understand your personality type and emotional patterns through scientifically validated assessments.",
      icon: "🧠"
    },
    {
      title: "LLM-Driven Safety Classification", 
      description: "AI-powered risk assessment ensures you get the appropriate level of support for your needs.",
      icon: "🛡️"
    },
    {
      title: "Risk-Based Routing",
      description: "Automatic connection to peer support for low-risk situations or professional help when needed.",
      icon: "🗺️"
    },
    {
      title: "Secure PDF Reports",
      description: "Download watermarked reports for personal reflection or secure sharing with healthcare providers.",
      icon: "📄"
    }
  ];

  const testimonials = [
    {
      quote: "Psych Sync helped me understand my stress patterns and connected me with a peer who really got what I was going through.",
      author: "Anonymous Student",
      role: "Junior, Psychology Major"
    },
    {
      quote: "The assessment was quick but thorough. I finally felt heard and got practical next steps instead of generic advice.",
      author: "Anonymous Student", 
      role: "Senior, Engineering"
    },
    {
      quote: "Having my results in a PDF I could share with my counselor made the transition to professional help so much smoother.",
      author: "Anonymous Student",
      role: "Sophomore, Liberal Arts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <WhatBringsYouHere />
        <HowItWorks />
        
        {/* Features Section */}
        <section id="what-brings-you-here" className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools designed to support your mental health journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border-secondary/30 hover:shadow-gentle transition-all duration-300 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-calm-blue/20 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Student Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Real experiences from students who found their path to better mental health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-secondary/30 hover:shadow-gentle transition-all duration-300">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-secondary hover:bg-secondary/50">
                Read More Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${journeyBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Ready to start your journey?
              </h2>
              <p className="text-lg font-bold text-foreground">
                Take the first step towards better mental health with our quick, confidential assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-gentle"
                  onClick={() => {
                    const element = document.querySelector('#what-brings-you-here');
                    if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                  }}
                >
                  Start Your Assessment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 hover:bg-white/10 text-foreground px-8 py-4 text-lg font-medium"
                  onClick={() => {
                    const element = document.querySelector('#how-it-works');
                    if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
