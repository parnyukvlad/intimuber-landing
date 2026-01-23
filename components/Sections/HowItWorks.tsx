'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function HowItWorks() {
  const steps = [
    { title: 'Connect', desc: 'Secure profile integration' },
    { title: 'Automate', desc: 'AI handles monetization' },
    { title: 'Monetize', desc: 'Automatic earnings flow' },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/5 bg-[#0C0C0E]">
      <div className="container mx-auto">
        <SectionHeading
          title="Visual Flow"
          subtitle="From setup to automated revenue in three steps."
        />

        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/5 z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1">
                <div className="w-24 h-24 rounded-2xl bg-[#141417] border border-white/10 flex items-center justify-center mb-8 shadow-xl">
                  <span className="text-[#E8E8E8] text-2xl font-medium">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-[#E8E8E8] mb-2">{step.title}</h3>
                <p className="text-[#8A8A8A] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
