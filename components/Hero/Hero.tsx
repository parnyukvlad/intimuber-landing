import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import IPhoneMockup from './IPhoneMockup';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t, getLocalizedHref } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Demo Bot Badge */}
              <motion.a
                href="http://telegram.me/Kimsteria"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#0088cc] hover:bg-[#0088cc]/20 transition-all group"
              >
                <Send size={16} />
                <span className="text-sm font-medium">{t.hero.demoBot}</span>
                <span className="text-xs bg-[#0088cc]/20 px-2 py-0.5 rounded-full">@Kimsteria</span>
              </motion.a>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                {t.hero.title} <br />
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.description}
              </p>

               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                   <a
                     href="https://app.onlyppv.io/register"
                     className="relative w-full sm:w-auto px-8 py-4 bg-gradient-primary rounded-full font-bold text-lg text-white shadow-xl shadow-accent-primary/30 hover:scale-105 transition-transform overflow-hidden group"
                   >
                     <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 blur-xl transition-all" />
                     <span className="relative z-10">{t.hero.ctaPrimary}</span>
                   </a>
                   <a href={getLocalizedHref('/#overview')} className="relative w-full sm:w-auto px-8 py-4 bg-gradient-primary rounded-full font-bold text-lg text-white shadow-xl shadow-accent-primary/30 hover:scale-105 transition-transform overflow-hidden group">
                     <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 blur-xl transition-all" />
                     <span className="relative z-10">{t.hero.ctaSecondary}</span>
                   </a>
                   <a href={getLocalizedHref('/#cta')} className="relative w-full sm:w-auto px-8 py-4 bg-gradient-primary rounded-full font-bold text-lg text-white shadow-xl shadow-accent-primary/30 hover:scale-105 transition-transform overflow-hidden group">
                     <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 blur-xl transition-all" />
                     <span className="relative z-10">{t.hero.ctaConsultation}</span>
                   </a>
                </div>


            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
