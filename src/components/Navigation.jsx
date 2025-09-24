import React from 'react';
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/psych-sync-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/20 animate-slide-in-top">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 h-8 rounded-full overflow-hidden animate-spin-slow hover:animate-pulse">
              <img 
                src={logo} 
                alt="Psych Sync Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-foreground animate-fade-in">Psych Sync</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary hover-lift animate-fade-in animate-delay-100 ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary hover-lift animate-fade-in animate-delay-200 ${
                isActive('/services') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary hover-lift animate-fade-in animate-delay-300 ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/stories" 
              className={`text-sm font-medium transition-colors hover:text-primary hover-lift animate-fade-in animate-delay-400 ${
                isActive('/stories') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Stories
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary hover-lift animate-fade-in animate-delay-500 ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 animate-pulse-slow hover:animate-none hover-glow">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
