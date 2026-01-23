import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

const props = [
  {
    title: "Zero Account Access",
    description: "Your security is our priority. We never ask for your Telegram credentials or personal login information.",
    icon: Shield,
    color: "var(--color-accent-primary)"
  },
  {
    title: "AI That Sells",
    description: "Our proprietary AI models handle conversations that convert, maximizing your revenue while you sleep.",
    icon: Zap,
    color: "var(--color-accent-secondary)"
  },
  {
    title: "Global Reach",
    description: "Multi-language support allows you to reach an international audience without lifting a finger.",
    icon: Globe,
    color: "#3B82F6"
  }
];

const ValueProp = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Intimuber?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Experience the future of creator automation with our cutting-edge technology and secure infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="liquid-glass p-8 flex flex-col items-center text-center group hover:border-white/20 transition-colors"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${prop.color}15`, color: prop.color }}
              >
                <prop.icon size={32} />
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
