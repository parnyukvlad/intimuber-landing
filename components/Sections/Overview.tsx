import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, DollarSign, LayoutDashboard, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Overview = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.overview.features.dashboard.title,
      description: t.overview.features.dashboard.description,
      icon: LayoutDashboard,
      image: "/dashboard_screenshot.png"
    },
    {
      title: t.overview.features.analytics.title,
      description: t.overview.features.analytics.description,
      icon: BarChart3,
      image: "/deep_analytics.png"
    },
    {
      title: t.overview.features.finance.title,
      description: t.overview.features.finance.description,
      icon: DollarSign,
      image: "/finance_hub.png"
    }
  ];

  return (
    <section id="overview" className="py-24 bg-background relative">
      {/* Purple glow background */}
      <div className="absolute inset-0 bg-accent-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-bold mb-6 text-white"
          >
            {t.overview.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            {t.overview.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="liquid-glass relative p-6 rounded-2xl overflow-hidden group hover:border-accent-primary/30 transition-all duration-300"
            >
              {/* Icon with purple glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent-primary/20 blur-xl group-hover:bg-accent-primary/30 transition-all" />
                <div className="relative w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white">
                  <feature.icon size={28} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>

              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Screenshot with glow */}
              <div className="relative rounded-xl overflow-hidden bg-surface/50 border border-white/10 group">
                <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative w-full h-auto rounded-xl object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
