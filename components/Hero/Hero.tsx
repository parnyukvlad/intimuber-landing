'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import Button from '../ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl text-center relative z-10">
        {/* Enhanced Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black gradient-text tracking-tighter leading-none mb-4">
            INTIMUBER
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered Revenue.
            <span className="block gradient-text">Zero Effort.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your Telegram presence into a revenue machine. Our AI handles conversations,
            sells your content, and earns while you sleep—24/7 automation for creators.
          </p>
        </motion.div>

        {/* Enhanced iPhone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <IPhoneMockup />
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Button
            size="lg"
            href="mailto:parnyuk.vladislav@gmail.com?subject=Intimuber%20Agency%20Inquiry&body=Hi%20Intimuber%20team,%0A%0AI'm%20interested%20in%20your%20AI%20automation%20agency%20for%20models.%20Please%20tell%20me%20more%20about%20the%20onboarding%20process.%0A%0ABest%20regards,"
            className="text-lg px-8 py-4 font-semibold glow-subtle"
          >
            🚀 Start Earning Now
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#how-it-works"
            className="text-lg px-8 py-4 font-medium"
          >
            ▶️ Watch Demo
          </Button>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: '70%', label: 'Revenue Share', icon: '💰', desc: 'You keep 70%' },
            { value: '24h', label: 'Setup Time', icon: '⚡', desc: 'Lightning fast' },
            { value: '100%', label: 'Free Onboarding', icon: '🎯', desc: 'Zero upfront costs' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "easeOut" }}
              className="glass-card p-8 rounded-2xl text-center group"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}