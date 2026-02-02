import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Security = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      icon: Lock,
      title: t.security.features.auth.title,
      text: t.security.features.auth.description
    },
    {
      icon: ShieldCheck,
      title: t.security.features.privacy.title,
      text: t.security.features.privacy.description
    },
    {
      icon: EyeOff,
      title: t.security.features.discreet.title,
      text: t.security.features.discreet.description
    }
  ];

  return (
    <section className="py-24 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">{t.security.title}</h2>
            <p className="text-text-secondary leading-relaxed">
              {t.security.description}
            </p>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="relative p-6 overflow-hidden group">
                <div className="absolute inset-0 bg-accent-primary/10 blur-lg group-hover:bg-accent-primary/20 transition-all" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent-primary">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
