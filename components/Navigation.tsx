import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/context/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t, getLocalizedHref } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const languageLabels: Record<Language, string> = {
    en: 'EN',
    ru: 'RU',
    es: 'ES',
  };

  const navLinks = [
    { name: t.nav.howItWorks, href: '/#how-it-works' },
    { name: t.nav.features, href: '/#features' },
    { name: t.nav.revenue, href: '/#revenue' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: OnlyPPV logo */}
        <div>
          <a href="https://www.onlyppv.io/" className="hover:opacity-80 transition-opacity">
            <img src="/No background.png" alt="OnlyPPV" className="h-40 w-auto" />
          </a>
        </div>

        {/* Center: Empty for spacing */}
        <div className="flex-1" />

        {/* Right: Nav links + Language + Telegram */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getLocalizedHref(link.href)}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/10 transition-all"
            >
              <Globe size={16} />
              <span>{languageLabels[language]}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 py-2 bg-surface border border-white/10 rounded-xl shadow-xl min-w-[120px]"
                >
                  {(Object.keys(languageLabels) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        language === lang
                          ? 'text-accent-primary bg-accent-primary/10'
                          : 'text-text-secondary hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {t.language[lang]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Telegram Icon */}
          <a
            href="https://telegram.me/onlyppv_official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0088cc]/20 border border-[#0088cc]/30 text-[#0088cc] hover:bg-[#0088cc]/30 hover:scale-110 transition-all"
            title="Contact us on Telegram"
          >
            <Send size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Telegram Icon Mobile */}
          <a
            href="https://telegram.me/onlyppv_official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0088cc]/20 border border-[#0088cc]/30 text-[#0088cc]"
          >
            <Send size={18} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/5 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getLocalizedHref(link.href)}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-text-secondary hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Language Selector Mobile */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-text-secondary mb-3">{t.language.title}</p>
            <div className="flex gap-2">
              {(Object.keys(languageLabels) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === lang
                      ? 'bg-accent-primary text-white'
                      : 'bg-white/5 text-text-secondary hover:bg-white/10'
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>

          <a
            href="https://app.onlyppv.io"
            className="block w-full px-6 py-3 bg-gradient-primary rounded-full text-base font-semibold text-white shadow-lg shadow-accent-primary/20"
          >
            {t.nav.bookConsultation}
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
