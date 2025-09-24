import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Accessibility Statement
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mental health support should be accessible to everyone. Here's how we ensure Psych Sync works for all users.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 7, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Commitment */}
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <span>♿</span>
                  Our Accessibility Commitment
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to ensuring that Psych Sync is accessible to all users, regardless of their abilities, 
                  disabilities, or assistive technologies they may use.
                </p>
              </div>
            </Card>

            {/* Standards */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Accessibility Standards
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    WCAG 2.1 AA Compliance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Perceivable</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• High contrast color schemes</li>
                        <li>• Alt text for all images</li>
                        <li>• Resizable text up to 200%</li>
                        <li>• No information conveyed by color alone</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Operable</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full keyboard navigation</li>
                        <li>• No seizure-inducing content</li>
                        <li>• Sufficient time limits</li>
                        <li>• Skip navigation links</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Understandable</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Clear, simple language</li>
                        <li>• Consistent navigation</li>
                        <li>• Input assistance and error prevention</li>
                        <li>• Predictable functionality</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Robust</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Compatible with assistive technologies</li>
                        <li>• Valid, semantic HTML</li>
                        <li>• Proper ARIA labels</li>
                        <li>• Cross-browser compatibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Features */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Accessibility Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Visual Accessibility
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>High contrast mode with adjustable color schemes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Scalable text from 100% to 200% without horizontal scrolling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Focus indicators visible on all interactive elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Alternative text for all meaningful images</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Motor Accessibility
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Full keyboard navigation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Large click targets (minimum 44px)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>No time-sensitive interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Voice input compatibility</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Cognitive Accessibility
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Clear, simple language throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Consistent navigation and layout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Progress indicators for multi-step processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Error prevention and clear error messages</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Screen Reader Support
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Semantic HTML structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Proper heading hierarchy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>ARIA labels and descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Skip navigation links</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Assistive Technology */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Supported Assistive Technologies
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Psych Sync has been tested with and supports:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-calm-blue/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Screen Readers</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• NVDA</li>
                      <li>• JAWS</li>
                      <li>• VoiceOver (macOS/iOS)</li>
                      <li>• TalkBack (Android)</li>
                    </ul>
                  </div>
                  <div className="bg-calm-blue/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Voice Control</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dragon NaturallySpeaking</li>
                      <li>• Windows Speech Recognition</li>
                      <li>• Voice Control (macOS)</li>
                      <li>• Voice Access (Android)</li>
                    </ul>
                  </div>
                  <div className="bg-calm-blue/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Other Tools</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Switch navigation devices</li>
                      <li>• Head pointer devices</li>
                      <li>• Eye tracking systems</li>
                      <li>• Magnification software</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ongoing Work */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Ongoing Accessibility Work
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Accessibility is an ongoing process, not a destination. We continuously work to improve:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Regular accessibility audits and testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>User feedback integration and testing with disabled users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Staff training on accessibility best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Keeping up with evolving accessibility standards</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Feedback */}
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Accessibility Feedback
              </h2>
              <p className="text-muted-foreground mb-6">
                We welcome your feedback on the accessibility of Psych Sync. If you encounter any barriers 
                or have suggestions for improvement, please let us know.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Report Accessibility Issue
                  </Button>
                  <Button variant="outline">
                    General Feedback
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Email: accessibility@psychsync.com<br />
                  We aim to respond to accessibility inquiries within 2 business days.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccessibilityStatement;
