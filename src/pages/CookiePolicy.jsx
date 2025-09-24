import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We use minimal cookies to make Psych Sync work properly while respecting your privacy.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: September 7, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* No Tracking Promise */}
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <span>🍪</span>
                  Our Cookie-Light Promise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use the absolute minimum cookies necessary for Psych Sync to function. 
                  No tracking cookies, no advertising cookies, no unnecessary data collection.
                </p>
              </div>
            </Card>

            {/* What Are Cookies */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What Are Cookies?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, which can make your next visit easier and more useful.
                </p>
                <p>
                  At Psych Sync, we believe in minimal data collection, so we only use cookies that are absolutely necessary 
                  for the service to work properly.
                </p>
              </div>
            </Card>

            {/* Types of Cookies */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Cookies We Use
              </h2>
              <div className="space-y-8">
                {/* Essential Cookies */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Essential Cookies (Always Active)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    These cookies are necessary for Psych Sync to function properly. They cannot be disabled.
                  </p>
                  <div className="bg-calm-blue/5 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Session Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Keeps you logged in during your session and remembers your preferences temporarily.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duration: Session only (deleted when you close your browser)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Protects against cross-site request forgery and other security threats.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duration: Session only
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Local Preferences</h4>
                        <p className="text-sm text-muted-foreground">
                          Remembers your theme preferences (light/dark mode) and accessibility settings.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duration: 1 year (or until you clear your browser data)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional Cookies */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gentle-mint rounded-full"></div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Optional Cookies (Opt-In Only)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    These cookies are only used if you explicitly opt in. You can change your preferences at any time.
                  </p>
                  <div className="bg-gentle-mint/5 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Usage Analytics (Opt-In)</h4>
                        <p className="text-sm text-muted-foreground">
                          Helps us understand how the service is used so we can improve it. All data is anonymized.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duration: 2 years (or until you opt out)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Error Reporting (Opt-In)</h4>
                        <p className="text-sm text-muted-foreground">
                          Helps us identify and fix technical issues. No personal data is included.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Duration: 30 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What We Don't Use */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-destructive/30 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-foreground">
                      What We DON'T Use
                    </h3>
                  </div>
                  <div className="bg-destructive/5 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">❌ Advertising Cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          We don't track you for advertising purposes
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">❌ Social Media Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          No Facebook pixels, Twitter tracking, etc.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">❌ Third-Party Analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          No Google Analytics or similar services
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">❌ Behavioral Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          We don't create profiles of your browsing habits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Local Storage */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Local Storage vs. Cookies
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Most of your personal data (like assessment results) is stored in your browser's local storage, 
                  not in cookies. This means:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Your assessment data never leaves your device unless you choose to share it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>We can't access your personal information from our servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>You have complete control over your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Clearing your browser data removes all your personal information</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Managing Cookies */}
            <Card className="p-8 border-secondary/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    In Psych Sync
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    You can manage your cookie preferences in your account settings or by clicking the cookie preferences 
                    link in our footer.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Manage Cookie Preferences
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    In Your Browser
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    You can also control cookies through your browser settings:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-calm-blue/5 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Chrome</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Privacy and Security → Cookies and other site data
                      </p>
                    </div>
                    <div className="bg-calm-blue/5 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Firefox</h4>
                      <p className="text-sm text-muted-foreground">
                        Preferences → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div className="bg-calm-blue/5 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Safari</h4>
                      <p className="text-sm text-muted-foreground">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div className="bg-calm-blue/5 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Edge</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Cookies and site permissions → Manage cookies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-gentle-mint/10 border-gentle-mint/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our use of cookies or this policy, please reach out to us.
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

export default CookiePolicy;
