import React from 'react';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";

const TestIndex = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default TestIndex;