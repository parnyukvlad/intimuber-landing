import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Image, MessageSquare, Zap, BarChart3, ShieldCheck } from 'lucide-react';

const props = [
   {
     title: "Create Your Autopilot",
     description: "Build a custom sales automation with flirty, playful, or dominant behavioral tones and a natural texting style.",
     icon: UserCircle,
     color: "var(--color-accent-primary)"
   },
  {
    title: "Media Library",
    description: "Upload photos & videos, set prices in Telegram Stars, and organize into premium NSFW photo packs.",
    icon: Image,
    color: "var(--color-accent-secondary)"
  },
     {
     title: "Smart Chatbot",
     description: "24/7 context-aware conversations with human-like delays and multi-language support.",
     icon: MessageSquare,
     color: "#3B82F6"
   },
   {
     title: "Automated Selling",
     description: "Disappearing free photos create urgency while our autopilot teases and converts fans into payers.",
     icon: Zap,
     color: "#F59E0B"
   },
  {
    title: "Deep Analytics",
    description: "Track engagement, retention, and earnings with detailed charts and conversion analysis.",
    icon: BarChart3,
    color: "#10B981"
  },
  {
    title: "Secure & Profitable",
    description: "Keep 70% of your earnings with secure USDT crypto payouts and protected data.",
    icon: ShieldCheck,
    color: "#6366F1"
  }
];

const ValueProp = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">The OnlyPPV Advantage</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to automate your Telegram business and scale your OnlyFans revenue on autopilot.
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
