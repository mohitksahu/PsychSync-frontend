import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";

const TermsOfService = () => {
  
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clear, fair terms that protect both you and our mission to support student mental health.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 7, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Important Notice */}
            <Card className="p-8 bg-warm-beige/10 border-warm-beige/30">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <span>⚕️</span>
                  Important Medical Disclaimer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Psych Sync is not a substitute for professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of qualified mental health professionals for any questions about your mental health.
                </p>
              </div>
            </Card>

            {/* Acceptance */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using Psych Sync ("we," "our," or "us"), you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you don't agree with any part of these terms, you may not use our service.
                </p>
                <p>
                  These terms apply to all users, whether you create an account or use our service as a guest.
                </p>
              </div>
            </Card>

            {/* Service Description */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                2. Service Description
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Psych Sync provides AI-powered mental health assessment tools, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personality assessments based on validated psychological models</li>
                  <li>Stress level evaluations and personalized insights</li>
                  <li>Risk classification and appropriate resource routing</li>
                  <li>Peer support connections and professional referrals</li>
                  <li>Secure PDF report generation</li>
                </ul>
                <p>
                  Our service is designed specifically for students and is provided free of charge for core features.
                </p>
              </div>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                3. User Responsibilities
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">You agree to:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Provide accurate information during assessments</li>
                  <li>Use the service for its intended purpose of mental health support</li>
                  <li>Respect other users in peer support interactions</li>
                  <li>Not share your account credentials with others</li>
                  <li>Report any technical issues or inappropriate behavior</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6">You agree NOT to:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Use the service to harm yourself or others</li>
                  <li>Share false or misleading information</li>
                  <li>Attempt to reverse-engineer or manipulate our AI systems</li>
                  <li>Use the service for commercial purposes without permission</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </Card>

            {/* Privacy and Data */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                4. Privacy and Data Handling
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is fundamental to our service. All personal data is stored locally in your browser 
                  by default and is never shared without your explicit consent.
                </p>
                <p>
                  For detailed information about how we handle your data, please refer to our Privacy Policy, 
                  which is incorporated into these terms by reference.
                </p>
              </div>
            </Card>

            {/* Limitations */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                5. Service Limitations
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to provide accurate and helpful insights, you understand that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI assessments are tools, not definitive diagnoses</li>
                  <li>The service may not be available 100% of the time</li>
                  <li>We cannot guarantee specific outcomes from using our service</li>
                  <li>Emergency situations require immediate professional help, not our platform</li>
                </ul>
              </div>
            </Card>

            {/* Emergency Situations */}
            <Card className="p-8 bg-destructive/5 border-destructive/20">
              <h2 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
                <span>🚨</span>
                6. Emergency Situations
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you are in immediate danger or having thoughts of self-harm, please contact emergency services 
                  immediately or call one of these resources:
                </p>
                <div className="bg-background/50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-destructive">National Suicide Prevention Lifeline: 988</p>
                  <p className="font-semibold text-destructive">Crisis Text Line: Text HOME to 741741</p>
                  <p className="font-semibold text-destructive">Emergency Services: 911</p>
                </div>
                <p>
                  Psych Sync is not equipped to handle emergency situations and should never be used as a replacement 
                  for immediate professional help.
                </p>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                7. Intellectual Property
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content, software, and materials provided through Psych Sync are owned by us or our licensors 
                  and are protected by intellectual property laws.
                </p>
                <p>
                  You retain ownership of any personal data you provide, and we grant you the right to export and 
                  delete your data at any time.
                </p>
              </div>
            </Card>

            {/* Changes to Terms */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                8. Changes to Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update these terms from time to time to reflect changes in our service or legal requirements. 
                  We'll notify users of significant changes via email or prominent website notice.
                </p>
                <p>
                  Continued use of the service after changes indicates acceptance of the updated terms.
                </p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-calm-blue/5 border-calm-blue/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground mb-6">
                We believe in clear, fair terms. If you have questions about anything in this agreement, 
                please reach out to us.
              </p>
              <p className="text-primary font-medium">
                legal@psychsync.com
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
