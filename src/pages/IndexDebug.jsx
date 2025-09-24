import React, { useState, useEffect } from 'react';

const IndexDebug = () => {
  const [step, setStep] = useState(1);
  const [logs, setLogs] = useState([]);
  
  // Add a log message
  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toISOString().slice(11, 19)}: ${message}`]);
    console.log(`Debug: ${message}`);
  };
  
  // Simulate loading components one by one to find which one breaks
  const loadNextComponent = () => {
    setStep(prev => prev + 1);
  };
  
  useEffect(() => {
    addLog(`Starting debug step ${step}`);
  }, [step]);

  return (
    <div style={{
      padding: '20px', 
      margin: '20px', 
      maxWidth: '800px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h1>Index Component Debug</h1>
      <p>This page helps identify which component is causing the blank page issue.</p>
      
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <button 
          onClick={loadNextComponent}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Load Next Component (Step {step}/6)
        </button>
      </div>
      
      {/* Test each component separately */}
      <div style={{ border: '1px dashed #ccc', padding: '15px', marginBottom: '20px' }}>
        <h2>Component Testing Area:</h2>
        
        {step >= 1 && (
          <div>
            <h3>1. Basic Content ✅</h3>
            <p>If you see this, basic rendering works fine.</p>
          </div>
        )}
        
        {step >= 2 && (() => {
          addLog("Loading Navigation component");
          try {
            // We're not actually importing the component yet, just testing if we can
            return (
              <div>
                <h3>2. Navigation Component ✅</h3>
                <p>Simulating Navigation component</p>
              </div>
            );
          } catch (error) {
            addLog(`Error: ${error.message}`);
            return <div style={{color: 'red'}}>Error loading Navigation component</div>;
          }
        })()}
        
        {step >= 3 && (() => {
          addLog("Loading HeroSection component");
          try {
            return (
              <div>
                <h3>3. HeroSection Component ✅</h3>
                <p>Simulating HeroSection component</p>
              </div>
            );
          } catch (error) {
            addLog(`Error: ${error.message}`);
            return <div style={{color: 'red'}}>Error loading HeroSection component</div>;
          }
        })()}
        
        {step >= 4 && (() => {
          addLog("Loading WhatBringsYouHere component");
          try {
            return (
              <div>
                <h3>4. WhatBringsYouHere Component ✅</h3>
                <p>Simulating WhatBringsYouHere component</p>
              </div>
            );
          } catch (error) {
            addLog(`Error: ${error.message}`);
            return <div style={{color: 'red'}}>Error loading WhatBringsYouHere component</div>;
          }
        })()}
        
        {step >= 5 && (() => {
          addLog("Loading HowItWorks component");
          try {
            return (
              <div>
                <h3>5. HowItWorks Component ✅</h3>
                <p>Simulating HowItWorks component</p>
              </div>
            );
          } catch (error) {
            addLog(`Error: ${error.message}`);
            return <div style={{color: 'red'}}>Error loading HowItWorks component</div>;
          }
        })()}
        
        {step >= 6 && (() => {
          addLog("Loading Footer component");
          try {
            return (
              <div>
                <h3>6. Footer Component ✅</h3>
                <p>Simulating Footer component</p>
              </div>
            );
          } catch (error) {
            addLog(`Error: ${error.message}`);
            return <div style={{color: 'red'}}>Error loading Footer component</div>;
          }
        })()}
      </div>
      
      {/* Log display area */}
      <div style={{ 
        backgroundColor: '#f8f8f8', 
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '10px',
        maxHeight: '200px',
        overflowY: 'auto'
      }}>
        <h3>Debug Logs:</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
          {logs.map((log, index) => (
            <li key={index} style={{ fontFamily: 'monospace', fontSize: '14px' }}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexDebug;