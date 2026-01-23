'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IPhoneMockup from './IPhoneMockup';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
// Redeploy trigger: ensure a new commit can surface on master for redeploys

// Fallback wrapper in case GlassCard is unavailable at runtime
const GlassCardShim = ({ children, className = '', ...rest }: any) => (
  <div className={`glass-card ${className}`} {...rest}>
    {children}
  </div>
);
const GlassCardActual: any = typeof GlassCard === 'function' ? GlassCard : GlassCardShim;

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient gradients for depth */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-pink-500/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500/40 blur-3xl" />

      <div className="container mx-auto max-w-7xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="text-sm uppercase tracking-wider text-white/60">Intimuber</div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text tracking-tight mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          INTIMUBER
        </motion.h1>
        <div className="h-1 w-60 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="text-2xl md:text-3xl font-semibold text-white mb-3">AI-Powered Revenue.</div>
          <div className="text-xl md:text-2xl text-slate-200 font-light">Zero Effort. Transform your Telegram presence into a revenue machine with 24/7 automation for creators.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-12 mb-8 flex justify-center"
        >
          <IPhoneMockup />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button size="lg" href="mailto:parnyuk.vladislav@gmail.com?subject=Intimuber%20Agency%20Inquiry&body=Hi%20Intimuber%20team%2C%0A%0AI'm%20interested%20in%20your%20AI%20automation%20agency%20for%20models." className="glow-subtle">
            🚀 Start Earning Now
          </Button>
          <Button variant="secondary" size="lg" href="#how-it-works">
            ▶️ Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto"
        >
            {[
              { value: '70%', label: 'Revenue Share', desc: 'You keep 70%', icon: '💰' },
              { value: '24h', label: 'Setup Time', desc: 'Lightning fast', icon: '⚡' },
              { value: '100%', label: 'Onboarding', desc: 'Zero upfront costs', icon: '🎯' },
            ].map((s, idx) => (
              <GlassCardActual key={idx} variant="elevated" className="text-center p-6 h-full">
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="text-3xl font-black gradient-text mb-2">{s.value}</div>
                <div className="text-lg font-semibold mb-2">{s.label}</div>
                <div className="text-slate-300 text-sm">{s.desc}</div>
              </GlassCardActual>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
