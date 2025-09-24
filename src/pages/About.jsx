import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import aboutIllustration from "../assets/about-illustration.jpg";
import statsIllustration from "../assets/stats-illustration.jpg";

const About = () => {
  const values = [
    {
      title: "Empathy-Driven Design",
      description: "Every feature is built to feel safe and human",
      example: "Chat language options, calming microcopy, and gentle user flows that reduce anxiety",
      icon: "💙"
    },
    {
      title: "Privacy First", 
      description: "Data stays in your browser unless explicitly shared",
      example: "Local storage by default, optional sharing flows, and transparent data controls",
      icon: "🔒"
    },
    {
      title: "Scientific Rigor",
      description: "Grounded in validated psychological models",
      example: "MBTI-based assessments, evidence-based interventions, and clinically-aligned guidance",
      icon: "🧬"
    },
    {
      title: "Accessibility",
      description: "Free, intuitive, and inclusive for all students",
      example: "WCAG AA compliance, multiple input methods, and reduced-motion options",
      icon: "♿"
    }
  ];

  const stats = [
    { number: "1 in 3", label: "students experience significant mental health challenges" },
    { number: "60%", label: "of students don't seek help due to stigma or barriers" },
    { number: "2-3 weeks", label: "average wait time for campus counseling services" },
    { number: "24/7", label: "when mental health struggles happen" }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header with illustration */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto mb-8 animate-fade-up-slow">
              <img
                src={aboutIllustration}
                alt="Diverse students in supportive mental health environments, connecting and growing together"
                className="w-full h-64 object-cover rounded-lg shadow-gentle transition-all-smooth hover-float"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animate-delay-300">
              About Psych Sync
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in animate-delay-500">
                We believe mental health support should be accessible, intelligent, and deeply human.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <section className="mb-20 animate-fade-up-slow animate-delay-700">
            <Card className="p-12 bg-gradient-soft border-secondary/30 hover-lift transition-transform">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground animate-fade-in">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-fade-in animate-delay-200">
                  At Psych Sync, we believe mental health support should be accessible, intelligent, and deeply human. 
                  Our mission is to empower students with personalized psychological insights and safe pathways to 
                  healing—through technology that listens, understands, and responds with care.
                </p>
              </div>
            </Card>
          </section>

          {/* Why It Matters */}
          <section className="mb-20">
            <div className="text-center mb-12 animate-fade-up-slow">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why It Matters
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
                The numbers tell a story of urgent need
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="animate-fade-in-left">
                <img
                  src={statsIllustration}
                  alt="Visual representation of student mental health statistics showing the need for support"
                  className="w-full h-64 object-cover rounded-lg shadow-gentle transition-all-smooth hover-float"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 text-center border-secondary/30 hover:shadow-gentle transition-all-smooth hover-lift animate-fade-in animate-delay-${index * 200}`}
                  >
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-primary animate-scale-in-slow">
                        {stat.number}
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight animate-fade-in animate-delay-200">
                        {stat.label}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-20">
            <div className="text-center mb-12 animate-fade-up-slow">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className={`p-8 border-secondary/30 hover:shadow-gentle transition-all-smooth hover-lift animate-fade-up animate-delay-${index * 300}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl animate-pulse-gentle">{value.icon}</span>
                      <h3 className="text-xl font-semibold text-foreground animate-fade-in animate-delay-200">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-300">
                      {value.description}
                    </p>
                    <div className="bg-calm-blue/10 p-4 rounded-lg transition-all-smooth hover:bg-calm-blue/20 animate-fade-in animate-delay-400">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Example: </span>
                        {value.example}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Team */}
          <section>
            <div className="text-center mb-12 animate-fade-up-slow">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
                Technology meets humanity in mental health
              </p>
            </div>

            <Card className="p-8 bg-gentle-mint/5 border-gentle-mint/30 hover-lift transition-all-smooth animate-fade-in animate-delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-left animate-delay-600">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Human-Centered AI
                  </h3>
                  <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
                    Our AI doesn't replace human connection—it enhances it. By combining machine learning 
                    with validated psychological frameworks, we create a bridge between immediate support 
                    and professional care.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 animate-fade-in animate-delay-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-gentle"></div>
                      <span className="text-sm text-foreground">Trained on evidence-based psychology</span>
                    </div>
                    <div className="flex items-center gap-3 animate-fade-in animate-delay-400">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-gentle"></div>
                      <span className="text-sm text-foreground">Designed with student input and feedback</span>
                    </div>
                    <div className="flex items-center gap-3 animate-fade-in animate-delay-500">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-gentle"></div>
                      <span className="text-sm text-foreground">Continuously refined by mental health experts</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background/50 p-8 rounded-lg animate-fade-in-right animate-delay-600">
                  <div className="space-y-4 text-center">
                    <div className="text-4xl mb-4 animate-pulse-gentle">🤝</div>
                    <h4 className="text-lg font-semibold text-foreground animate-fade-in animate-delay-200">
                      Collaboration Over Isolation
                    </h4>
                    <p className="text-sm text-muted-foreground animate-fade-in animate-delay-300">
                      We believe healing happens in connection—with peers, mentors, and professionals. 
                      Our platform facilitates these connections safely and meaningfully.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
