import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, DollarSign, Layout, Image, Star, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ContentControl = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.contentControl.cards.flexiblePricing.title,
      description: t.contentControl.cards.flexiblePricing.description,
      icon: DollarSign,
    },
    {
      title: t.contentControl.cards.intelligentMatching.title,
      description: t.contentControl.cards.intelligentMatching.description,
      icon: Image,
    },
    {
      title: t.contentControl.cards.automaticConversion.title,
      description: t.contentControl.cards.automaticConversion.description,
      icon: Star,
    },
    {
      title: t.contentControl.cards.organizedLibrary.title,
      description: t.contentControl.cards.organizedLibrary.description,
      icon: Layout,
    }
  ];

  const listItems = [
    t.contentControl.features.pricing,
    t.contentControl.features.bundles,
    t.contentControl.features.matching,
    t.contentControl.features.delivery
  ];

  return (
    <section id="content-control" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              {t.contentControl.title} <br />
              <span className="text-gradient text-2xl lg:text-4xl">{t.contentControl.titleHighlight}</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              {t.contentControl.description}
            </p>
            
            <div className="space-y-6">
              <p className="font-semibold text-white">{t.contentControl.youDecide}</p>
              <ul className="space-y-4">
                {listItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-accent-primary shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-accent-primary/5 border border-accent-primary/10 rounded-3xl">
              <p className="text-white font-medium italic">
                &ldquo;{t.contentControl.quote}&rdquo;
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                 className="liquid-glass relative p-8 flex flex-col overflow-hidden group hover:border-accent-primary/20 transition-colors"
               >
                 <div className="relative w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                   <div className="absolute inset-0 bg-accent-primary/20 blur-lg group-hover:bg-accent-primary/30 transition-all" />
                   <div className="relative z-10">
                     <feature.icon size={24} />
                   </div>
                 </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentControl;
