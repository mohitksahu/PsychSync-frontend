import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: "",
    allowFollowUp: false
  });

  const emergencyResources = [
    {
      title: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "Free and confidential emotional support 24/7"
    },
    {
      title: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message"
    },
    {
      title: "National Sexual Assault Hotline",
      phone: "1-800-656-4673",
      description: "Free, confidential support for survivors"
    },
    {
      title: "Trans Lifeline",
      phone: "877-565-8860",
      description: "Support for transgender people in crisis"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Emergency Resources - Prominent at top */}
          <section className="mb-16">
            <Card className="p-8 bg-destructive/5 border-destructive/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-destructive mb-2">
                  🚨 Need Immediate Help?
                </h2>
                <p className="text-muted-foreground">
                  If you are in immediate danger or having thoughts of self-harm, please reach out now
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyResources.map((resource, index) => (
                  <div key={index} className="bg-background/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-lg font-bold text-destructive mb-2">
                      {resource.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about Psych Sync? We're here to help. Reach out with any 
              questions, concerns, or feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section>
              <Card className="p-8 border-secondary/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Name (optional)
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="focus-gentle"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email (optional)
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="focus-gentle"
                    />
                    <p className="text-xs text-muted-foreground">
                      Only needed if you want a response
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="focus-gentle resize-none"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="followUp"
                      checked={formData.allowFollowUp}
                      onCheckedChange={(checked) => handleInputChange('allowFollowUp', !!checked)}
                    />
                    <label htmlFor="followUp" className="text-sm text-muted-foreground">
                      I consent to being contacted for follow-up if I provided my email
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    disabled={!formData.message.trim()}
                  >
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-secondary/30">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-gentle-mint">🔒</span> Your privacy matters to us. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </div>
              </Card>
            </section>

            {/* Contact Info & FAQ */}
            <section className="space-y-8">
              {/* Contact Info */}
              <Card className="p-8 border-secondary/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Other ways to reach us
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      General Inquiries
                    </h3>
                    <p className="text-muted-foreground">
                      hello@psychsync.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Privacy & Data Questions
                    </h3>
                    <p className="text-muted-foreground">
                      privacy@psychsync.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Partnership Opportunities
                    </h3>
                    <p className="text-muted-foreground">
                      partnerships@psychsync.com
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick FAQ */}
              <Card className="p-8 border-secondary/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Quick Answers
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Is Psych Sync really free?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes! All core features are completely free for students.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      How is my data protected?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your data stays in your browser unless you explicitly choose to share it.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Can I use this if I'm not a student?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Currently, our tools are optimized specifically for student experiences.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Social Links */}
              <Card className="p-8 border-secondary/30 bg-gentle-mint/5">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Follow our journey
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay updated on new features and mental health resources
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    📱 @PsychSync on Twitter
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📘 Psych Sync on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📧 Monthly Newsletter
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
