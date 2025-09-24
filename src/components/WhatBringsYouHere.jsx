import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useState } from "react";

const WhatBringsYouHere = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [customText, setCustomText] = useState("");
  
  const options = [
    {
      id: "stressed",
      label: "Feeling stressed",
      icon: "😟",
      description: "Academic pressure, deadlines, or overwhelming feelings"
    },
    {
      id: "confused",
      label: "Confused about myself", 
      icon: "🤔",
      description: "Want to understand my personality and emotional patterns"
    },
    {
      id: "talk",
      label: "Need someone to talk to",
      icon: "💬",
      description: "Looking for support and understanding"
    },
    {
      id: "curious",
      label: "Just curious",
      icon: "✨",
      description: "Interested in learning more about mental health tools"
    }
  ];
  
  const handleStartCheckin = () => {
    console.log("Starting check-in with:", selectedOption || customText);
    // This will later route to the assessment flow
  };
  
  return (
    <section className="py-20 bg-gradient-soft" id="what-brings-you-here">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-up">
            What brings you here today?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in animate-delay-200">
            Choose what resonates with you, or tell us in your own words
          </p>
          
          {/* Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {options.map((option, index) => (
              <Card
                key={option.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-gentle border-2 animate-fade-up animate-delay-${index * 100 + 300} ${
                  selectedOption === option.id
                    ? 'border-primary bg-primary/5 animate-pulse-once'
                    : 'border-secondary/30 hover:border-primary/50'
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl animate-bounce-slow">{option.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      {option.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Custom Text Input */}
          <div className="mb-8 animate-fade-in animate-delay-700">
            <p className="text-sm text-muted-foreground mb-4">
              Or describe in your own words:
            </p>
            <textarea
              className="w-full p-4 border border-secondary rounded-lg resize-none focus-gentle bg-background/50 focus:animate-glow"
              rows={3}
              placeholder="I have been feeling anxious lately..."
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                if (e.target.value) setSelectedOption(null);
              }}
            />
          </div>
          
          {/* Start Button */}
          <Button
            size="lg"
            onClick={handleStartCheckin}
            disabled={!selectedOption && !customText.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-gentle disabled:opacity-50 disabled:cursor-not-allowed animate-fade-up animate-delay-800 hover-glow"
          >
            Start check in
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4 animate-fade-in animate-delay-900">
            This will only take about 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatBringsYouHere;
