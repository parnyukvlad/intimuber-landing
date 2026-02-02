import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Image, MessageSquare, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ValueProp = () => {
  const { t } = useLanguage();

  const props = [
    {
      title: t.valueProp.features.createAutopilot.title,
      description: t.valueProp.features.createAutopilot.description,
      icon: UserCircle,
      color: "var(--color-accent-primary)"
    },
    {
      title: t.valueProp.features.mediaLibrary.title,
      description: t.valueProp.features.mediaLibrary.description,
      icon: Image,
      color: "var(--color-accent-secondary)"
    },
    {
      title: t.valueProp.features.smartChatbot.title,
      description: t.valueProp.features.smartChatbot.description,
      icon: MessageSquare,
      color: "#3B82F6"
    },
    {
      title: t.valueProp.features.automatedSelling.title,
      description: t.valueProp.features.automatedSelling.description,
      icon: Zap,
      color: "#F59E0B"
    },
    {
      title: t.valueProp.features.deepAnalytics.title,
      description: t.valueProp.features.deepAnalytics.description,
      icon: BarChart3,
      color: "#10B981"
    },
    {
      title: t.valueProp.features.secureProfitable.title,
      description: t.valueProp.features.secureProfitable.description,
      icon: ShieldCheck,
      color: "#6366F1"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">{t.valueProp.title}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.valueProp.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
               className="liquid-glass relative p-8 flex flex-col items-center text-center group overflow-hidden hover:border-accent-primary/30 transition-colors"
             >
               <div
                 className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 overflow-hidden group"
                 style={{ backgroundColor: `${prop.color}15`, color: prop.color }}
               >
                 <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                 <div className="relative z-10">
                   <prop.icon size={32} />
                 </div>
               </div>
              <h3 className="text-xl font-bold mb-4 text-white">{prop.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
