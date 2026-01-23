import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/20 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Scale?</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join the elite group of creators who have automated their Telegram income. Start your free inquiry today.
          </p>

          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-surface border border-white/10 rounded-full text-white focus:outline-none focus:border-accent-primary transition-colors"
              required
            />
            <button className="px-8 py-4 bg-gradient-primary rounded-full font-bold text-white shadow-lg shadow-accent-primary/20 hover:scale-105 transition-transform">
              Inquire Now
            </button>
          </form>

          <p className="text-sm text-text-secondary italic">
            "Join creators who earn while they sleep."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
