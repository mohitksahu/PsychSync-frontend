import { Card } from "../components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share your concern",
      description: "Tell us what's on your mind via text or audio. We create a safe, judgment-free space.",
      icon: "💭",
      color: "bg-calm-blue/20"
    },
    {
      number: "02", 
      title: "Take a short assessment",
      description: "Complete our MBTI-based personality and stress evaluation. Quick but comprehensive.",
      icon: "📝",
      color: "bg-gentle-mint/20"
    },
    {
      number: "03",
      title: "Get your risk score",
      description: "Receive personalized insights and a safety classification tailored to your needs.",
      icon: "🎯", 
      color: "bg-warm-beige/40"
    },
    {
      number: "04",
      title: "Connect to support",
      description: "Get matched with peer support or professional help based on your results.",
      icon: "🤝",
      color: "bg-calm-blue/30"
    }
  ];
  
  return (
    <section className="py-20 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Four simple steps to get the mental health support you deserve
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className={`relative animate-fade-up animate-delay-${index * 200}`}>
              <Card className="p-8 h-full border-secondary/30 hover:shadow-gentle transition-all duration-300 hover-lift">
                <div className="text-center space-y-4">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4 animate-fade-in animate-delay-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} animate-bounce-slow`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground animate-fade-in animate-delay-400">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-500">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary transform -translate-y-1/2 z-10 animate-grow-line">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Trust Message */}
        <div className="text-center mt-16 animate-fade-in animate-delay-1000">
          <div className="bg-gentle-mint/20 rounded-lg p-6 max-w-2xl mx-auto hover-lift transition-transform">
            <p className="text-foreground font-medium mb-2">
              🔒 Your privacy is our priority
            </p>
            <p className="text-sm text-muted-foreground">
              All data stays in your browser unless you explicitly choose to share with a counselor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
