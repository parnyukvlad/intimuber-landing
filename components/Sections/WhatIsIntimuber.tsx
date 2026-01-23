'use client';

import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function WhatIsIntimuber() {
  const features = [
    {
      title: 'Sales Automation',
      description: 'Proprietary AI handles all conversations and monetization funnels with precision.',
    },
    {
      title: 'Privacy First',
      description: 'Secure connection without requiring your Telegram credentials or personal data.',
    },
    {
      title: 'Global Reach',
      description: 'Native support for multiple languages to engage audiences worldwide.',
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto text-center">
        <SectionHeading
          title="The Platform"
          subtitle="AI-driven monetization agency for independent Telegram creators."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <GlassCard key={index} className="p-8 text-left">
              <h3 className="text-xl font-medium text-[#E8E8E8] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#8A8A8A]">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <p className="text-lg text-[#8A8A8A] leading-relaxed">
            Intimuber utilizes advanced AI technology to automate engagement and revenue generation. 
            Creators connect their profile, drive traffic, and monitor earnings while the system 
            handles all interactions.
          </p>
        </div>
      </div>
    </section>
  );
}
