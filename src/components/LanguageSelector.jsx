import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe, Languages } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [isTranslating, setIsTranslating] = useState(false);

  // Regional languages requested by the user. Language codes are the
  // canonical codes commonly used by translation services (Google Translate).
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'brx', name: 'Bodo', nativeName: 'बर' },
    { code: 'doi', name: 'Dogri', nativeName: 'डोगरी' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ks', name: 'Kashmiri', nativeName: 'कश्मीरी' },
    { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी' },
    { code: 'mai', name: 'Maithili', nativeName: 'मैथिली' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'mni', name: 'Manipuri (Meitei)', nativeName: 'মৈতেই' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृत' },
    { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ' },
    { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' }
  ];

  const translatePage = async (targetLanguage) => {
    setIsTranslating(true);
    try {
      await i18n.changeLanguage(targetLanguage);
      setCurrentLanguage(targetLanguage);
    } catch (error) {
      alert('Unable to change language.');
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