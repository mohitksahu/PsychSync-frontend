import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhatBringsYouHere from "../components/WhatBringsYouHere";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
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
  
  const { t } = useTranslation();
  console.log('Index component rendering');
  const features = [
    {
      title: t('home.features.mental_health_assessments.title'),
      description: t('home.features.mental_health_assessments.description'),
      icon: "📊"
    },
    {
      title: t('home.features.ai_therapist.title'),
      description: t('home.features.ai_therapist.description'),
      icon: "🤖"
    },
    {
      title: t('home.features.peer_support.title'),
      description: t('home.features.peer_support.description'),
      icon: "🧑‍🤝‍🧑"
    },
    {
      title: t('home.features.professional_psychiatrists.title'),
      description: t('home.features.professional_psychiatrists.description'),
      icon: "🧑‍⚕️"
    },
    {
      title: t('home.features.personalized_reports.title'),
      description: t('home.features.personalized_reports.description'),
      icon: "📄"
    },
    {
      title: t('home.features.multi_language_support.title'),
      description: t('home.features.multi_language_support.description'),
      icon: "🌍"
    }
  ];

  const testimonials = [
    {
      quote: t('home.testimonials.0.quote'),
      author: t('home.testimonials.0.author'),
      role: t('home.testimonials.0.role')
    },
    {
      quote: t('home.testimonials.1.quote'),
      author: t('home.testimonials.1.author'),
      role: t('home.testimonials.1.role')
    },
    {
      quote: t('home.testimonials.2.quote'),
      author: t('home.testimonials.2.author'),
      role: t('home.testimonials.2.role')
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
                {t('home.powerful_features')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('home.comprehensive_tools')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {t('home.student_stories')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('home.real_experiences')}
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
                {t('home.read_more_stories')}
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
                {t('home.ready_to_start')}
              </h2>
              <p className="text-lg font-bold text-foreground">
                {t('home.take_first_step')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessments">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-gentle"
                  >
                    {t('home.start_assessment')}
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 hover:bg-white/10 text-foreground px-8 py-4 text-lg font-medium"
                  >
                    {t('home.try_ai_therapist')}
                  </Button>
                </Link>
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
