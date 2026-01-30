import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, ArrowRight } from 'lucide-react';

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

          {/* Two CTAs */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Get Started Card */}
            <div className="liquid-glass relative p-8 text-left overflow-hidden group">
              <div className="absolute inset-0 bg-accent-primary/5 blur-lg group-hover:bg-accent-primary/10 transition-all" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Get Started Now</h3>
                <p className="text-text-secondary mb-6">Ready to automate your sales immediately?</p>

                <a
                  href="https://app.onlyppv.io"
                  className="block w-full relative overflow-hidden px-6 py-4 bg-gradient-primary rounded-full font-bold text-lg text-white shadow-lg shadow-accent-primary/20 hover:scale-105 transition-transform group"
                >
                  <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/20 blur-xl transition-all" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Automate Your Telegram
                    <ArrowRight size={20} />
                  </span>
                </a>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="liquid-glass relative p-8 text-left overflow-hidden group">
              <div className="absolute inset-0 bg-accent-primary/5 blur-lg group-hover:bg-accent-primary/10 transition-all" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Book Free Consultation</h3>
                <p className="text-text-secondary mb-6">Not sure yet? Let's talk about your strategy.</p>

                <div className="space-y-4">
                  {/* Email Input */}
                  <div className="relative flex-1 overflow-hidden group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-surface border border-white/10 rounded-full text-white focus:outline-none focus:border-accent-primary transition-colors"
                    />
                    <div className="absolute inset-0 bg-accent-primary/0 group-focus-within:bg-accent-primary/10 blur-lg transition-all" />
                  </div>

                  {/* Google Calendar Link */}
                  <a
                    href="http://calendly.com/onlyppv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden w-full px-6 py-4 bg-surface border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-accent-primary/30 transition-all group"
                  >
                    <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 blur-lg transition-all" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar size={20} />
                      Book via Google Calendar
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join 200+ OnlyFans creators who are already automating their Telegram income with OnlyPPV.
          </p>
 
          {/* Book Free Consultation Card */}
          <div className="liquid-glass relative p-8 text-left overflow-hidden group">
            <div className="absolute inset-0 bg-accent-primary/5 blur-lg group-hover:bg-accent-primary/10 transition-all" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">Book Free Consultation</h3>
              <p className="text-text-secondary mb-6">Not sure yet? Let's talk about your strategy.</p>
 
              {/* Google Calendar Link */}
              <a
                href="http://calendly.com/onlyppv"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden w-full px-6 py-4 bg-surface border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-accent-primary/30 transition-all group"
              >
                <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/10 blur-lg transition-all" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Book via Google Calendar
                </span>
              </a>
            </div>
          </div>

          <p className="text-sm text-text-secondary italic">
            "Book free consultation. Focus on content. Maximize your profit."
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
