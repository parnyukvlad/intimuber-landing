import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { en } from '../translations/en';
import { ru } from '../translations/ru';
import { es } from '../translations/es';

export type Language = 'en' | 'ru' | 'es';

const translations = {
  en,
  ru,
  es,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
  getLocalizedHref: (href: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['en', 'ru', 'es'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  // Save to localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Helper to add language param to href
  const getLocalizedHref = (href: string) => {
    // During SSR, always return href without lang param to avoid hydration mismatch
    if (!isClient) return href;

    if (language === 'en') return href;

    // Handle hash URLs properly - query params must come BEFORE hash
    const hashIndex = href.indexOf('#');
    const baseUrl = hashIndex >= 0 ? href.substring(0, hashIndex) : href;
    const hash = hashIndex >= 0 ? href.substring(hashIndex) : '';

    // Check if base URL already has query params
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}lang=${language}${hash}`;
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
    getLocalizedHref,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
