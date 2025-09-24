import React from 'react';

const SimpleTest = () => {
  console.log('SimpleTest component rendered');
  
  return (
    <div style={{ 
      margin: '20px', 
      padding: '20px', 
      border: '1px solid #ccc',
      borderRadius: '4px',
      maxWidth: '600px'
    }}>
      <h1 style={{ color: '#333' }}>Simple Test Page</h1>
      <p>This is a very simple component with no dependencies.</p>
      <p>If you can see this, basic React rendering is working.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Debug Info:</h2>
        <ul>
          <li>Window dimensions: {window.innerWidth}x{window.innerHeight}</li>
          <li>User Agent: {navigator.userAgent}</li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleTest;