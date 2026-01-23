'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Initial Inquiry',
      description: 'Submit a brief overview of your persona and social media presence through our inquiry form.',
      icon: '📝',
    },
    {
      step: '02',
      title: 'Personalized Demo',
      description: 'Within 24 hours, receive a tailored demonstration of AI automation specific to your brand.',
      icon: '🎬',
    },
    {
      step: '03',
      title: 'Setup & Deployment',
      description: 'Provide personality traits and media. Full setup completed within hours, including bot installation.',
      icon: '⚙️',
    },
    {
      step: '04',
      title: 'Start Earning',
      description: 'AI begins handling conversations and sales automatically. Monitor earnings through your dashboard.',
      icon: '💰',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto">
        <SectionHeading
          title="How It Works"
          subtitle="Get started in under 24 hours with our streamlined onboarding process"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-30" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>

                <GlassCard className="mt-8 md:mt-12 text-center group">
                  <motion.div
                    className="text-5xl mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}