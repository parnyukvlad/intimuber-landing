'use client';

import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Features() {
  const features = [
    {
      title: 'Conversational AI',
      description: 'Advanced NLP models for consistent and high-converting interactions.',
    },
    {
      title: 'Monetization Engine',
      description: 'Automated sales funnels designed for maximum retention.',
    },
    {
      title: 'Identity Protection',
      description: 'End-to-end encryption for all media and sensitive communications.',
    },
    {
      title: 'Global Optimization',
      description: 'Automated localization for different timezones and languages.',
    },
    {
      title: 'Real-time Analytics',
      description: 'Granular data on conversions, retention, and revenue performance.',
    },
    {
      title: 'Secure Payouts',
      description: 'Regular and transparent payment cycles via preferred methods.',
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5" id="features">
      <div className="container mx-auto">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Everything required for professional automation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <GlassCard key={index} className="p-8">
              <div className="w-8 h-8 rounded bg-white/5 border border-white/10 mb-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <h3 className="text-lg font-medium text-[#E8E8E8] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
