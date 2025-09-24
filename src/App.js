import React from 'react';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import MinimalIndex from "./pages/MinimalIndex";
import IndexDebug from "./pages/IndexDebug";
import ComponentDebug from "./pages/ComponentDebug";
import TestPage from "./pages/TestPage";
import SimpleTest from "./pages/SimpleTest";
import Services from "./pages/Services";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Navigation component removed

// Minimal fallback component
const BasicPage = () => (
  <div style={{ padding: '20px', margin: '20px', border: '1px solid #ddd' }}>
    <h1>Basic Fallback Page</h1>
    <p>This is a minimal React component with no dependencies.</p>
    <Link to="/test" style={{ color: 'blue' }}>Go to Test Page</Link>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/minimal" element={<MinimalIndex />} />
            <Route path="/debug" element={<IndexDebug />} />
            <Route path="/components" element={<ComponentDebug />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/basic" element={<BasicPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
