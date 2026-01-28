import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Your Revenue Share", value: "70%", sub: "The highest split in the industry" },
  { label: "Minimum Payout", value: "2000", sub: "Withdrawals in Telegram Stars" },
  { label: "Payout Currency", value: "USDT", sub: "Instant crypto payouts on demand" },
];

const Revenue = () => {
  return (
    <section id="revenue" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="liquid-glass p-12 lg:p-20 overflow-hidden relative">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight text-white">
                Premium Earnings. <br />
                <span className="text-gradient">Professional Payouts.</span>
              </h2>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                We believe in total transparency. Our 70/30 split ensures you keep the lion's share of your hard-earned revenue while we handle the 24/7 sales operations.
              </p>
              
              <div className="space-y-6">
                <p className="font-semibold text-white">Supported Payout Methods:</p>
                <div className="flex flex-wrap gap-4">
                  {['USDT (TRC20)', 'USDT (ERC20)', 'Telegram Stars'].map((method) => (
                    <div key={method} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white/5 border border-white/5 rounded-3xl"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-text-secondary">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-medium text-white italic">
            "Focus on creating. We handle the rest."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
