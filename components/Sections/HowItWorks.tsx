import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link your Telegram Business account in under 60 seconds."
  },
  {
    number: "02",
    title: "Create Persona",
    description: "Build your unique AI character with custom personality traits and backstory."
  },
  {
    number: "03",
    title: "Upload Content",
    description: "Add your PPV media library and set your pricing in Telegram Stars."
  },
  {
    number: "04",
    title: "Start Earning",
    description: "Send traffic to your Telegram business account. Our autopilot sells your content 24/7."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">Your Path to 24/7 Income</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Get up and running with OnlyPPV in minutes. We've automated the hard part so you can focus on creating.
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
                 <div className="relative w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-accent-primary/20 overflow-hidden group">
                   <div className="absolute inset-0 bg-accent-primary blur-xl opacity-50 group-hover:opacity-100 transition-all" />
                   <span className="relative z-10">{step.number}</span>
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
