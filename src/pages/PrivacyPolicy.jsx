import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import privacyIllustration from "../assets/privacy-illustration.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header with illustration */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto mb-8">
              <img
                src={privacyIllustration}
                alt="Privacy and security illustration showing data protection concepts"
                className="w-full h-48 object-cover rounded-lg shadow-gentle"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is fundamental to everything we do. Here's exactly how we protect your data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 7, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Core Promise */}
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <span>🔐</span>
                  Our Core Privacy Promise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your data stays in your browser by default. We never collect, store, or share your personal 
                  information without your explicit consent. You are always in complete control.
                </p>
              </div>
            </Card>

            {/* Data Collection */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What Data We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Assessment Data (Local Storage Only)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Your personality assessments, stress evaluations, and AI-generated insights are stored 
                    locally in your browser. This data never leaves your device unless you choose to share it.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Personality test responses (MBTI-based)</li>
                    <li>Stress level indicators</li>
                    <li>AI-generated insights and recommendations</li>
                    <li>Risk classification results</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Optional Account Information
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    If you choose to create an account, we collect minimal information:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Email address (for account recovery only)</li>
                    <li>Encrypted password</li>
                    <li>Account creation date</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Technical Data
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    We collect minimal technical data to ensure the service works properly:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Error logs (to fix technical issues)</li>
                    <li>Anonymous usage statistics (opt-in only)</li>
                    <li>Browser type and version (for compatibility)</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Protect Data */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                How We Protect Your Data
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Local-First Storage
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All personal data is stored locally in your browser using encrypted local storage. 
                    We can't access this data even if we wanted to.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Encryption in Transit
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Any data you choose to share is encrypted using industry-standard TLS 1.3 
                    protocols during transmission.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    AI Processing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    When you use AI features, your data is processed securely and never stored 
                    by our AI providers. It's analyzed and immediately discarded.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    No Third-Party Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We don't use cookies for tracking, don't share data with advertisers, 
                    and don't sell your information to anyone.
                  </p>
                </div>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Your Privacy Rights
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Complete Control</h3>
                    <p className="text-sm text-muted-foreground">
                      You can delete all your data at any time from your browser settings or account dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Data Export</h3>
                    <p className="text-sm text-muted-foreground">
                      Download all your data in standard formats (PDF, JSON) whenever you want.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Opt-Out Anytime</h3>
                    <p className="text-sm text-muted-foreground">
                      Change your privacy preferences or opt out of any data collection at any time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">Data Portability</h3>
                    <p className="text-sm text-muted-foreground">
                      Your data is yours. Take it with you if you ever decide to leave.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Updates */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We'll notify you of any material changes to this privacy policy via email (if you've provided one) 
                or through a prominent notice on our website. Your continued use of the service after changes 
                indicates acceptance of the updated policy.
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-calm-blue/5 border-calm-blue/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're committed to transparency. If you have any questions about how we handle your data, 
                please don't hesitate to reach out.
              </p>
              <p className="text-primary font-medium">
                privacy@psychsync.com
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
