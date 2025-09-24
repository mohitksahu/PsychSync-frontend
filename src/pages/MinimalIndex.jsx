import React from 'react';

const MinimalIndex = () => {
  console.log('MinimalIndex component rendered');
  
  return (
    <div style={{ padding: '40px', margin: '40px' }}>
      <h1>Minimal Index Page</h1>
      <p>This is a stripped-down version of the Index page with no components.</p>
      <p>If this renders but the main Index doesn't, the issue is in one of the imported components.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Components that might be problematic:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Navigation</li>
          <li>HeroSection</li>
          <li>WhatBringsYouHere (fixed TypeScript issue)</li>
          <li>HowItWorks</li>
          <li>Footer</li>
        </ul>
      </div>
    </div>
  );
};

export default MinimalIndex;