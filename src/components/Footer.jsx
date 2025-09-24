import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-trust rounded-lg flex items-center justify-center hover:animate-pulse">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="text-xl font-semibold text-foreground font-great-vibes">Psych Sync</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
              Personalized mental health support for students. Empathy-driven, privacy-first, scientifically rigorous.
            </p>
            <p className="text-xs text-muted-foreground animate-fade-in animate-delay-300">
              🔒 Your data stays in your browser unless explicitly shared
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in animate-delay-100">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Home
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Services
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                About
              </Link>
              <Link to="/stories" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Stories
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4 animate-fade-in animate-delay-200">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Terms of Service  
              </Link>
              <Link to="/accessibility" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Accessibility Statement
              </Link>
              <Link to="/cookies" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 animate-fade-in animate-delay-300">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@psychsync.com" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                hello@psychsync.com
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                @PsychSync on Twitter
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                LinkedIn
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors hover-lift">
                Monthly Newsletter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in animate-delay-500">
          <p className="text-sm text-muted-foreground">
            © 2025 Psych Sync. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or text HOME to 741741 (Crisis Text Line)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
