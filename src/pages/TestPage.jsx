import React from 'react';
import { useTranslation } from 'react-i18next';

const TestPage = () => {
  const { t } = useTranslation();
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
      <h1 style={{ color: 'blue' }}>{t('test_page.title')}</h1>
      <p>{t('test_page.desc1')}</p>
      <p>{t('test_page.desc2')}</p>
      <p style={{ fontWeight: 'bold' }}>{t('test_page.desc3')}</p>
    </div>
  );
};

export default TestPage;