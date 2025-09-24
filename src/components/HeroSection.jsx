import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import heroBackground from "../assets/hero-background.jpg";

const HeroSection = () => {
  const quotes = [
    "You are not alone. We listen, we understand, we help.",
    "A little insight goes a long way.",
    "Your mental health matters. Start your journey today."
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 animate-scale-in-slow"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] animate-fade-in" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in animate-delay-300">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Rotating Quote */}
          <div className="h-16 flex items-center justify-center">
            <p 
              key={currentQuote}
              className="text-lg md:text-xl text-foreground italic font-light animate-fade-in"
            >
              "{quotes[currentQuote]}"
            </p>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-great-vibes text-foreground leading-tight animate-fade-up">
              Psych Sync
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground animate-fade-up animate-delay-200">
              Personalized mental health support for students
            </h2>
          </div>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-400">
            Quick assessments. Trusted guidance. Clear next steps.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-up animate-delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-gentle hover-glow"
              onClick={() => {
                const element = document.querySelector('#what-brings-you-here');
                if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
              }}
            >
              Get started with a quick check in
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary hover:bg-secondary/50 text-foreground px-8 py-4 text-lg font-medium hover-lift"
              onClick={() => {
                const element = document.querySelector('#how-it-works');
                if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
              }}
            >
              Learn how it works
            </Button>
          </div>
          
          {/* AI Assistant Note */}
          <div className="flex items-center justify-center gap-2 pt-4 animate-fade-in animate-delay-700">
            <div className="w-6 h-6 bg-gentle-mint rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-xs">🤖</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered insights available 24/7
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
