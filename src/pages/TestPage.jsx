import React from 'react';

const TestPage = () => {
  console.log('TestPage rendered!');
  
  return (
    <div style={{ 
      padding: '40px', 
      margin: '100px auto', 
      maxWidth: '600px',
      backgroundColor: 'white',
      border: '2px solid blue',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: 'blue' }}>Test Page</h1>
      <p>This is a minimal test page to check if React rendering is working.</p>
      <p>If you see this, then the basic rendering pipeline is functional.</p>
      <p style={{ fontWeight: 'bold' }}>The issue must be in one of the components or CSS.</p>
    </div>
  );
};

export default TestPage;