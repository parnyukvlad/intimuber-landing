'use client';

import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function Ecosystem() {
  const ecosystem = [
    {
      name: 'FeetGuru Game',
      description: 'Interactive Telegram application with integrated monetization.',
    },
    {
      name: 'AI Companion',
      description: 'Persistent conversational models for long-term engagement.',
    },
    {
      name: 'Intimuber Agency',
      description: 'Turn-key automation infrastructure for independent creators.',
      current: true,
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5" id="ecosystem">
      <div className="container mx-auto">
        <SectionHeading
          title="Ecosystem"
          subtitle="A suite of interconnected tools for digital creators."
        />

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ecosystem.map((product, index) => (
            <GlassCard key={index} className={`p-10 ${product.current ? 'border-white/20' : ''}`}>
              <h3 className="text-xl font-medium text-[#E8E8E8] mb-4">
                {product.name}
                {product.current && <span className="text-xs text-[#8A8A8A] ml-2">(Active)</span>}
              </h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-8">
                {product.description}
              </p>
              {!product.current && (
                <Button variant="secondary" size="sm" className="w-full">
                  Learn More
                </Button>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
