import React, { useState } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe, Languages } from 'lucide-react';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' }
  ];

  const translatePage = async (targetLanguage) => {
    if (targetLanguage === 'en') {
      // Reset to original English
      window.location.reload();
      return;
    }

    setIsTranslating(true);
    
    try {
      // In a real implementation, this would call Google Translate API
      // For now, we'll simulate the translation process
      
      // Get all text elements on the page
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, button, label, a');
      
      // Simulate translation delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock translation - in reality, you'd call Google Translate API
      const mockTranslations = {
        'es': {
          'Mental Health Assessment': 'Evaluación de Salud Mental',
          'AI Therapist': 'Terapeuta IA',
          'Peer Support': 'Apoyo de Pares',
          'Psychiatrists': 'Psiquiatras',
          'Stories': 'Historias',
          'About': 'Acerca de',
          'Sign In': 'Iniciar Sesión',
          'Home': 'Inicio',
          'Take Assessment': 'Tomar Evaluación',
          'Start Chat': 'Iniciar Chat',
          'Find Support': 'Buscar Apoyo',
          'Book Appointment': 'Reservar Cita'
        },
        'fr': {
          'Mental Health Assessment': 'Évaluation de la Santé Mentale',
          'AI Therapist': 'Thérapeute IA',
          'Peer Support': 'Soutien par les Pairs',
          'Psychiatrists': 'Psychiatres',
          'Stories': 'Histoires',
          'About': 'À Propos',
          'Sign In': 'Se Connecter',
          'Home': 'Accueil',
          'Take Assessment': 'Passer l\'Évaluation',
          'Start Chat': 'Commencer le Chat',
          'Find Support': 'Trouver du Soutien',
          'Book Appointment': 'Prendre Rendez-vous'
        },
        'hi': {
          'Mental Health Assessment': 'मानसिक स्वास्थ्य मूल्यांकन',
          'AI Therapist': 'एआई चिकित्सक',
          'Peer Support': 'साथी सहायता',
          'Psychiatrists': 'मनोचिकित्सक',
          'Stories': 'कहानियां',
          'About': 'के बारे में',
          'Sign In': 'साइन इन करें',
          'Home': 'होम',
          'Take Assessment': 'मूल्यांकन लें',
          'Start Chat': 'चैट शुरू करें',
          'Find Support': 'सहायता खोजें',
          'Book Appointment': 'अपॉइंटमेंट बुक करें'
        }
      };

      const translations = mockTranslations[targetLanguage];
      
      if (translations) {
        textElements.forEach(element => {
          const originalText = element.textContent.trim();
          if (translations[originalText]) {
            element.textContent = translations[originalText];
          }
        });
      }
      
      setCurrentLanguage(targetLanguage);
      
      // Show success message
      const notification = document.createElement('div');
      notification.className = 'fixed top-20 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50';
      notification.textContent = `Page translated to ${languages.find(l => l.code === targetLanguage)?.name}`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
      
    } catch (error) {
      console.error('Translation failed:', error);
      
      // Show error message
      const notification = document.createElement('div');
      notification.className = 'fixed top-20 right-4 bg-red-500 text-white p-3 rounded-lg shadow-lg z-50';
      notification.textContent = 'Translation failed. Please try again.';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleLanguageChange = (languageCode) => {
    translatePage(languageCode);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={handleLanguageChange} disabled={isTranslating}>
        <SelectTrigger className="w-36">
          <SelectValue>
            {isTranslating ? (
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4 animate-spin" />
                <span>Translating...</span>
              </div>
            ) : (
              languages.find(l => l.code === currentLanguage)?.nativeName
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="flex items-center justify-between w-full">
                <span>{language.nativeName}</span>
                <span className="text-muted-foreground text-xs ml-2">{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;