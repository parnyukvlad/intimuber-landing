import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Submit a simple inquiry to see if your account qualifies for our automation."
  },
  {
    number: "02",
    title: "Demo",
    description: "Get a personalized walkthrough of how the AI will manage your traffic."
  },
  {
    number: "03",
    title: "Setup",
    description: "Rapid integration without needing your login credentials. Done in under 24h."
  },
  {
    number: "04",
    title: "Earn",
    description: "Start receiving payouts directly. Focus on content while we scale your income."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">The Path to Freedom</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From inquiry to earnings in four simple steps. We've streamlined the process for maximum efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-accent-primary/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
