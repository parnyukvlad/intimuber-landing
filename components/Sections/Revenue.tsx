'use client';

import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function Revenue() {
  const stats = [
    { value: '70%', label: 'Revenue Share' },
    { value: '21 Days', label: 'Payout Cycle' },
    { value: '$0', label: 'Setup Cost' },
  ];

  const methods = ['Bank Transfer', 'Cryptocurrency', 'Digital Wallets'];

  return (
    <section id="revenue" className="py-24 px-6 border-t border-white/5 bg-[#0C0C0E]">
      <div className="container mx-auto">
        <SectionHeading
          title="Revenue Structure"
          subtitle="Transparent financial model with direct payout support."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center" hover={false}>
                <div className="text-3xl font-medium text-[#E8E8E8] mb-2">{stat.value}</div>
                <div className="text-[#8A8A8A] text-xs uppercase tracking-wider">{stat.label}</div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-10">
            <h3 className="text-xl font-medium text-[#E8E8E8] mb-6">Payout Support</h3>
            <p className="text-[#8A8A8A] mb-8">
              We provide multiple channels for automated revenue withdrawal, ensuring reliability and security.
            </p>
            <div className="space-y-4">
              {methods.map((method, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-[#E8E8E8] text-sm">{method}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
