'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function Features() {
  const features = [
    {
      icon: '🧠',
      title: 'Intelligent AI Conversations',
      description: 'Powered by dual-model AI architecture with persistent memory. Models remember interactions and maintain coherent relationships.',
    },
    {
      icon: '💬',
      title: 'Automated Sales Funnel',
      description: 'Seamlessly transitions from casual conversation to monetization, handling PPV offers without manual intervention.',
    },
    {
      icon: '🎭',
      title: 'Personality Adaptation',
      description: 'Each model maintains consistent, unique persona that dynamically reacts to user tone and engagement level.',
    },
    {
      icon: '🌐',
      title: 'Multi-Language Support',
      description: 'Native support for multiple languages, allowing global users to interact in their preferred tongue.',
    },
    {
      icon: '📊',
      title: 'Performance Analytics',
      description: 'Real-time dashboard with earnings, transaction history, and detailed performance metrics for complete transparency.',
    },
    {
      icon: '🔐',
      title: 'End-to-End Encryption',
      description: 'All media stored with end-to-end encryption. Only decrypted for end-users upon successful purchase.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Advanced AI Features"
          subtitle="Everything you need to automate your content monetization"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <GlassCard>
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}