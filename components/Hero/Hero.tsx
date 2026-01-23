'use client';

import { motion } from 'framer-motion';
import IPhoneMockup from './IPhoneMockup';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#E8E8E8] mb-6">
          AI automation for Telegram creators
        </h1>
        <p className="text-lg md:text-xl text-[#8A8A8A] mb-10 max-w-2xl mx-auto">
          Private. Automated. Profitable. Our AI handles your monetization while you focus on content.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            href="mailto:parnyuk.vladislav@gmail.com"
          >
            Start Inquiry
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            href="#how-it-works"
          >
            View Process
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-[320px] mx-auto"
      >
        <IPhoneMockup />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-5xl w-full border-t border-white/5 pt-12">
        {[
          { label: 'Revenue Share', value: '70%', desc: 'Creators keep the majority' },
          { label: 'Deployment', value: '24h', desc: 'Fast onboarding process' },
          { label: 'Setup', value: '$0', desc: 'Zero upfront investment' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-[#8A8A8A] text-sm uppercase tracking-wider mb-2">{stat.label}</div>
            <div className="text-3xl font-medium text-[#E8E8E8] mb-1">{stat.value}</div>
            <div className="text-[#8A8A8A] text-sm">{stat.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
