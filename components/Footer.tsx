import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-black tracking-tighter text-white mb-2">
              ONLY<span className="text-accent-primary">PPV</span>
            </div>
            <p className="text-sm text-text-secondary">
              {t.footer.description}
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-text-secondary">
            <a href="https://www.onlyppv.io/contact" className="hover:text-white transition-colors">{t.footer.links.contact}</a>
            <a href="https://www.onlyppv.io/privacy" className="hover:text-white transition-colors">{t.footer.links.privacy}</a>
            <a href="https://www.onlyppv.io/terms" className="hover:text-white transition-colors">{t.footer.links.terms}</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-text-secondary/60">
              {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
