import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Revenue = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.revenue.stats.revenueShare.label, value: t.revenue.stats.revenueShare.value, sub: t.revenue.stats.revenueShare.sub },
    { label: t.revenue.stats.minPayout.label, value: t.revenue.stats.minPayout.value, sub: t.revenue.stats.minPayout.sub },
    { label: t.revenue.stats.payoutCurrency.label, value: t.revenue.stats.payoutCurrency.value, sub: t.revenue.stats.payoutCurrency.sub },
  ];

  return (
    <section id="revenue" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="liquid-glass p-12 lg:p-20 overflow-hidden relative">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight text-white">
                {t.revenue.title} <br />
                <span className="text-gradient">{t.revenue.titleHighlight}</span>
              </h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                {t.revenue.description}
              </p>
              
              <div className="space-y-6">
                <p className="font-semibold text-white">{t.revenue.payoutMethods}</p>
                <div className="flex flex-wrap gap-4">
                  {t.revenue.methods.map((method: string) => (
                    <div key={method} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 bg-white/5 border border-white/5 rounded-3xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-text-secondary">{stat.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-medium text-white italic">
            &ldquo;{t.revenue.quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
