import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">{t.cta.title}</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          {/* Book Free Consultation Card */}
          <div className="liquid-glass relative p-8 text-left overflow-hidden group max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent-primary/5 blur-lg group-hover:bg-accent-primary/10 transition-all" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">{t.cta.cardTitle}</h3>
              <p className="text-text-secondary mb-6">{t.cta.cardDescription}</p>

              {/* Google Calendar Link */}
              <a
                href="http://calendly.com/onlyppv"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden w-full px-6 py-4 bg-surface border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-accent-primary/30 transition-all group"
              >
                <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 blur-lg transition-all" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  {t.cta.bookButton}
                </span>
              </a>
            </div>
          </div>

          <p className="text-sm text-text-secondary italic">
            &ldquo;{t.cta.quote}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
