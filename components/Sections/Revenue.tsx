'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Revenue() {
  const revenueStats = [
    {
      value: 70,
      suffix: '%',
      label: 'Your Revenue Share',
      description: 'You keep 70%, we take 30%',
    },
    {
      value: 21,
      suffix: ' days',
      label: 'Payout Frequency',
      description: 'Payments every 21 days',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Free Setup',
      description: 'Zero upfront costs',
    },
  ];

  const payoutMethods = [
    { name: 'Bank Account', icon: '🏦' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Crypto Wallet', icon: '₿' },
  ];

  return (
    <section id="revenue" className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto">
        <SectionHeading
          title="Revenue & Payouts"
          subtitle="Transparent earnings with competitive splits and flexible payout options"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {revenueStats.map((stat, index) => (
              <GlassCard key={stat.label} className="text-center">
                <motion.div
                  className="text-5xl md:text-6xl font-black gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                >
                  <AnimatedCounter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={1500}
                  />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </GlassCard>
            ))}
          </motion.div>

          {/* Payout Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Flexible Payout Options
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Get paid your way. We support multiple payout methods with competitive rates
                and fast processing times.
              </p>

              <div className="space-y-4">
                {payoutMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-3xl">{method.icon}</span>
                    <span className="text-white font-medium">{method.name}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
