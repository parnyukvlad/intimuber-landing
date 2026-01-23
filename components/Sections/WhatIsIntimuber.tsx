'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhatIsIntimuber() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Sales Automation',
      description: 'Our AI handles all conversations, negotiations, and sales funnels automatically.',
    },
    {
      icon: '🔒',
      title: 'Zero Account Access',
      description: 'We never ask for your Telegram credentials. Complete privacy and security.',
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'AI-powered conversations in multiple languages for global reach.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="What is Intimuber?"
          subtitle="The first AI-powered automation agency for independent online models"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <GlassCard key={feature.title} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-6xl mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlassCard className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Intimuber leverages the same AI technology powering the FeetGuru ecosystem to automate
              engagement and monetization for independent creators. Simply connect your Telegram profile
              with our bot, send traffic to your profile, and start earning income automatically.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}