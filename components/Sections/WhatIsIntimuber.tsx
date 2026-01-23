'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function WhatIsIntimuber() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Sales Automation',
      description: 'Our AI handles all conversations, negotiations, and sales funnels automatically. No manual work required.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: '🔒',
      title: 'Zero Account Access',
      description: 'We never ask for your Telegram credentials. Complete privacy and security guaranteed.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.2
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'AI-powered conversations in multiple languages for global reach and audience expansion.',
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0.3
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="What is Intimuber?"
          subtitle="The world's first AI-powered automation agency exclusively for independent online models"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: feature.delay,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <GlassCard variant="elevated" className="text-center h-full group">
                {/* Icon with gradient background */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: feature.delay + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay + 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className="text-slate-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay + 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <GlassCard variant="elevated" className="max-w-5xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-6xl mb-6">🚀</div>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-200 mb-6">
                Intimuber leverages the same cutting-edge AI technology powering the FeetGuru ecosystem
                to automate engagement and monetization for independent creators.
              </p>
              <p className="text-lg text-slate-300">
                Simply connect your Telegram profile with our bot, send traffic to your profile,
                and start earning income automatically—while you focus on creating amazing content.
              </p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}