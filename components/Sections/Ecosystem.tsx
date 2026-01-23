'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function Ecosystem() {
  const ecosystem = [
    {
      name: 'FeetGuru Game',
      description: 'High-fidelity gamified Telegram Mini App with tactile massage mechanics and premium content rewards.',
      features: ['Haptic feedback', 'Premium content', 'Level progression'],
      color: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      name: 'AI Companion Chat',
      description: 'Persistent AI conversations with our digital models. Automated monetization and relationship building.',
      features: ['Persistent memory', 'Auto-sales', 'Multi-language'],
      color: 'from-pink-500 to-purple-500',
      link: 'https://telegram.me/Kim_Jang_Official',
    },
    {
      name: 'Intimuber Agency',
      description: 'Turn-key automation for independent models. Same AI tech, now available as a white-label service.',
      features: ['70% revenue share', '24h setup', 'Full automation'],
      color: 'from-purple-500 to-pink-500',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Part of the FeetGuru Ecosystem"
          subtitle="Three interconnected products working together to revolutionize digital intimacy"
        />

        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {ecosystem.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={product.highlight ? 'lg:scale-105' : ''}
            >
              <GlassCard className={`h-full ${product.highlight ? 'ring-2 ring-pink-500/50 shadow-xl shadow-pink-500/20' : ''}`}>
                <div className={`w-full h-2 bg-gradient-to-r ${product.color} rounded-t-xl mb-6`} />

                <h3 className={`text-2xl font-bold mb-4 ${product.highlight ? 'gradient-text' : 'text-white'}`}>
                  {product.name}
                  {product.highlight && <span className="text-sm font-normal text-pink-400 ml-2">(You are here)</span>}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {product.link && (
                  <Button
                    variant={product.highlight ? 'primary' : 'secondary'}
                    size="sm"
                    href={product.link}
                    className="w-full"
                  >
                    {product.highlight ? 'Get Started' : 'Learn More'}
                  </Button>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}