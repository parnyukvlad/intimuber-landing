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
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">Ready to Scale Your Income?</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join 200+ OnlyFans creators who are already automating their Telegram income with OnlyPPV.
          </p>

          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1 overflow-hidden group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-surface border border-white/10 rounded-full text-white focus:outline-none focus:border-accent-primary transition-colors"
                required
              />
              <div className="absolute inset-0 bg-accent-primary/0 group-focus-within:bg-accent-primary/10 blur-lg transition-all" />
            </div>
             <button className="relative px-8 py-4 bg-gradient-primary rounded-full font-bold text-white shadow-lg shadow-accent-primary/20 hover:scale-105 transition-transform whitespace-nowrap overflow-hidden group">
               <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 blur-xl transition-all" />
               <span className="relative z-10">Get Started</span>
             </button>
          </form>

          <p className="text-sm text-text-secondary italic">
            "Automate the chat. Focus on the content. Maximize the profit."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
