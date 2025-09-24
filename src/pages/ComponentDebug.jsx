import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhatBringsYouHere from "../components/WhatBringsYouHere";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const ComponentDebug = () => {
  const [activeComponents, setActiveComponents] = useState({
    navigation: false,
    heroSection: false,
    whatBringsYouHere: false,
    howItWorks: false,
    footer: false
  });

  const toggleComponent = (component) => {
    setActiveComponents(prev => ({
      ...prev,
      [component]: !prev[component]
    }));
  };

  return (
    <div style={{ padding: '20px', margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Component Debug Tool</h1>
      <p>Toggle individual components to see which one causes rendering issues</p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '20px 0' }}>
        <button
          onClick={() => toggleComponent('navigation')}
          style={{
            backgroundColor: activeComponents.navigation ? '#4CAF50' : '#f1f1f1',
            color: activeComponents.navigation ? 'white' : 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {activeComponents.navigation ? 'Hide' : 'Show'} Navigation
        </button>

        <button
          onClick={() => toggleComponent('heroSection')}
          style={{
            backgroundColor: activeComponents.heroSection ? '#4CAF50' : '#f1f1f1',
            color: activeComponents.heroSection ? 'white' : 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {activeComponents.heroSection ? 'Hide' : 'Show'} Hero Section
        </button>

        <button
          onClick={() => toggleComponent('whatBringsYouHere')}
          style={{
            backgroundColor: activeComponents.whatBringsYouHere ? '#4CAF50' : '#f1f1f1',
            color: activeComponents.whatBringsYouHere ? 'white' : 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {activeComponents.whatBringsYouHere ? 'Hide' : 'Show'} What Brings You Here
        </button>

        <button
          onClick={() => toggleComponent('howItWorks')}
          style={{
            backgroundColor: activeComponents.howItWorks ? '#4CAF50' : '#f1f1f1',
            color: activeComponents.howItWorks ? 'white' : 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {activeComponents.howItWorks ? 'Hide' : 'Show'} How It Works
        </button>

        <button
          onClick={() => toggleComponent('footer')}
          style={{
            backgroundColor: activeComponents.footer ? '#4CAF50' : '#f1f1f1',
            color: activeComponents.footer ? 'white' : 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {activeComponents.footer ? 'Hide' : 'Show'} Footer
        </button>
      </div>

      <div style={{ border: '1px dashed #ccc', padding: '20px', margin: '20px 0' }}>
        <h2>Component Preview Area:</h2>
        
        <div className="min-h-screen bg-background">
          {activeComponents.navigation && (
            <div style={{ border: '2px solid blue', margin: '10px 0', padding: '10px' }}>
              <h3>Navigation Component:</h3>
              <Navigation />
            </div>
          )}
          
          <main>
            {activeComponents.heroSection && (
              <div style={{ border: '2px solid green', margin: '10px 0', padding: '10px' }}>
                <h3>Hero Section Component:</h3>
                <HeroSection />
              </div>
            )}
            
            {activeComponents.whatBringsYouHere && (
              <div style={{ border: '2px solid purple', margin: '10px 0', padding: '10px' }}>
                <h3>What Brings You Here Component:</h3>
                <WhatBringsYouHere />
              </div>
            )}
            
            {activeComponents.howItWorks && (
              <div style={{ border: '2px solid orange', margin: '10px 0', padding: '10px' }}>
                <h3>How It Works Component:</h3>
                <HowItWorks />
              </div>
            )}
          </main>
          
          {activeComponents.footer && (
            <div style={{ border: '2px solid red', margin: '10px 0', padding: '10px' }}>
              <h3>Footer Component:</h3>
              <Footer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentDebug;