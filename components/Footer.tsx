'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join the Intimuber agency and let AI handle your monetization.
            Zero effort, maximum revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              href="mailto:parnyuk.vladislav@gmail.com?subject=Intimuber%20Agency%20Inquiry&body=Hi%20Intimuber%20team,%0A%0AI'm%20interested%20in%20your%20AI%20automation%20agency%20for%20models.%20Please%20tell%20me%20more%20about%20the%20onboarding%20process.%0A%0ABest%20regards,"
            >
              Start Your Free Inquiry
            </Button>

            <Button variant="ghost" size="lg" href="#hero">
              Back to Top ↑
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2026 Intimuber Agency. Part of the FeetGuru Ecosystem.
            </div>

            <div className="flex space-x-6 text-sm text-white/60">
              <a href="mailto:parnyuk.vladislav@gmail.com" className="hover:text-white transition-colors">
                Contact
              </a>
              <span>•</span>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}