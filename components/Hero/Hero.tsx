import React from 'react';
import { motion } from 'framer-motion';
import IPhoneMockup from './IPhoneMockup';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Scale Your Telegram. <br />
                <span className="text-gradient">Automate Your Income.</span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                AI-powered automation for independent creators. Keep 70% of everything you earn while our system handles the conversations.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-primary rounded-full font-bold text-lg text-white shadow-xl shadow-accent-primary/30 hover:scale-105 transition-transform">
                  Start Free Inquiry
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-surface border border-white/10 rounded-full font-bold text-lg text-white hover:bg-white/5 transition-colors">
                  See How It Works
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-secondary">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-surface flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-gradient-primary opacity-80" />
                    </div>
                  ))}
                </div>
                <p>Joined by 200+ creators this month</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
