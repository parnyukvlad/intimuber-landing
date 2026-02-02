import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, Zap, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ChattingStyle = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Zap, text: t.chattingStyle.features.noRobotic },
    { icon: Shield, text: t.chattingStyle.features.realProfile },
    { icon: MessageSquare, text: t.chattingStyle.features.perfectReplication },
    { icon: Sparkles, text: t.chattingStyle.features.humanLike }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="liquid-glass p-8 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-semibold uppercase tracking-wider">{t.chattingStyle.badge}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                {t.chattingStyle.title} <br />
                <span className="text-gradient">{t.chattingStyle.titleHighlight}</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                <p>
                  {t.chattingStyle.description1} <br />
                  <span className="text-white font-semibold">{t.chattingStyle.description1Highlight}</span>
                </p>
                <p>{t.chattingStyle.description2}</p>
                <p>{t.chattingStyle.description3}</p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <item.icon className="text-accent-secondary" size={20} />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:ml-auto"
            >
              <div className="relative z-10 space-y-4">
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">{t.chattingStyle.cards.noNewAccounts.title}</h4>
                    <p className="text-text-secondary text-sm">{t.chattingStyle.cards.noNewAccounts.description}</p>
                  </div>
                </div>
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform overflow-hidden group translate-x-4 lg:translate-x-8">
                  <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">{t.chattingStyle.cards.noLostFollowers.title}</h4>
                    <p className="text-text-secondary text-sm">{t.chattingStyle.cards.noLostFollowers.description}</p>
                  </div>
                </div>
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2 text-gradient">{t.chattingStyle.cards.noRobotic.title}</h4>
                    <p className="text-text-secondary text-sm">{t.chattingStyle.cards.noRobotic.description}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-secondary/20 blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-primary/20 blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChattingStyle;
