import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import servicesFlow from "../assets/services-flow.jpg";

const Services = () => {
  const services = [
    {
      title: "AI Personality & Stress Assessments",
      description: "Comprehensive evaluation using validated psychological models to understand your unique personality traits and stress patterns.",
      duration: "5-7 minutes",
      privacy: "Data stays in your browser",
      features: ["MBTI-based profiling", "Stress level analysis", "Personalized insights"],
      icon: "🧠"
    },
    {
      title: "MBTI-Based Emotional Profiling", 
      description: "Discover your emotional patterns and coping mechanisms through scientifically-backed personality assessment.",
      duration: "3-5 minutes",
      privacy: "Optional sharing only",
      features: ["16 personality types", "Emotional intelligence insights", "Coping strategies"],
      icon: "🎭"
    },
    {
      title: "Safety Classification & Risk Routing",
      description: "AI-powered safety assessment that ensures you get the right level of support based on your current needs.",
      duration: "Instant",
      privacy: "Confidential processing",
      features: ["Risk level assessment", "Automatic routing", "Emergency resources"],
      icon: "🛡️"
    },
    {
      title: "Peer Support Matching",
      description: "Connect with vetted student peers who understand your experiences and can provide mutual support.",
      duration: "Ongoing",
      privacy: "Anonymous options available",
      features: ["Safe peer connections", "Moderated groups", "Shared experiences"],
      icon: "🤝"
    },
    {
      title: "Counselor Referral & Scheduling",
      description: "Direct connection to qualified mental health professionals when you need expert support.",
      duration: "Varies",
      privacy: "HIPAA compliant",
      features: ["Licensed professionals", "Campus resources", "Crisis intervention"],
      icon: "👨‍⚕️"
    },
    {
      title: "Secure PDF Reports",
      description: "Downloadable, watermarked reports of your assessments for personal reflection or sharing with healthcare providers.",
      duration: "Instant download",
      privacy: "Client-side generation",
      features: ["Watermarked security", "Password protection", "Export controls"],
      icon: "📄"
    }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up-slow">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              Comprehensive mental health support tools designed specifically for students. 
              Each service prioritizes your privacy and empowers you with actionable insights.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 border-secondary/30 hover:shadow-gentle transition-all-smooth hover-float h-full animate-fade-up animate-delay-${index * 200}`}>
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-calm-blue/20 rounded-full flex items-center justify-center animate-pulse-gentle">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground animate-fade-in animate-delay-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-300">
                    {service.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 animate-fade-in animate-delay-400">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gentle-mint animate-pulse-gentle">⏱️</span>
                      <span className="text-muted-foreground">Duration: {service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gentle-mint animate-pulse-gentle">🔒</span>
                      <span className="text-muted-foreground">{service.privacy}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 animate-fade-in animate-delay-500">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={`text-sm text-muted-foreground flex items-center gap-2 animate-fade-in animate-delay-${(idx + 6) * 100}`}>
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-gentle"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 animate-fade-in animate-delay-800">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift transition-transform"
                      variant="default"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* How Our Services Work Together */}
          <section className="mb-16">
            <Card className="p-12 bg-gradient-soft border-secondary/30 animate-fade-up-slow animate-delay-300">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
                  How Our Services Work Together
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-200">
                  Each component of Psych Sync is designed to work seamlessly with the others, 
                  creating a comprehensive support system tailored to your unique needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-left animate-delay-400">
                  <img
                    src={servicesFlow}
                    alt="Diagram showing how AI assessment, peer support, counselor connections, and PDF reports work together seamlessly"
                    className="w-full h-80 object-cover rounded-lg shadow-gentle transition-all-smooth hover-float"
                  />
                </div>
                <div className="space-y-6 animate-fade-in-right animate-delay-400">
                  <div className="flex gap-4 animate-fade-in animate-delay-500">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse-gentle">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Start with Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Your personality and stress assessment creates the foundation for all other services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 animate-fade-in animate-delay-600">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse-gentle">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI Risk Classification</h3>
                      <p className="text-sm text-muted-foreground">
                        Your results are automatically classified to determine the most appropriate level of support.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 animate-fade-in animate-delay-700">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse-gentle">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Personalized Routing</h3>
                      <p className="text-sm text-muted-foreground">
                        Based on your risk level, you're connected to peer support, professional help, or both.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 animate-fade-in animate-delay-800">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-pulse-gentle">
                      <span className="text-sm font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Secure Documentation</h3>
                      <p className="text-sm text-muted-foreground">
                        Download your comprehensive report to share with healthcare providers or keep for personal growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Privacy Notice */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30 max-w-4xl mx-auto animate-fade-up-slow animate-delay-1000 hover-float transition-all-smooth">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2 animate-fade-in">
                  <span className="animate-pulse-gentle">🔐</span>
                  Your Privacy, Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
                  All assessments and data remain in your browser by default. You have complete control over 
                  what information you share and with whom. Our AI processing happens securely, and we never 
                  store personal data without your explicit consent.
                </p>
                <Button variant="outline" className="mt-4 hover-lift transition-transform animate-fade-in animate-delay-400">
                  Read Privacy Policy
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
