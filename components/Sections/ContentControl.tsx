import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, DollarSign, Layout, Image, Star, BarChart3 } from 'lucide-react';

const ContentControl = () => {
  const features = [
    {
      title: "Flexible Pricing",
      description: "Set exact star amounts per photo or video, or create value-packed tiered bundles.",
      icon: DollarSign,
    },
    {
      title: "Intelligent Matching",
      description: "The AI analyzes your uploads to match fan requests with the perfect content in real-time.",
      icon: Image,
    },
    {
      title: "Automatic Conversion",
      description: "Deliver paid content when fans are most likely to pay—no manual sending required.",
      icon: Star,
    },
    {
      title: "Organized Library",
      description: "Easily manage and price your entire media collection from one powerful dashboard.",
      icon: Layout,
    }
  ];

  return (
    <section id="content-control" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white leading-tight">
              Total Control, Maximum Earnings — <br />
              <span className="text-gradient text-2xl lg:text-4xl">Upload Your Content & Set Your Prices</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Our dashboard lets you easily organize and price your entire library so that chatter knows exactly what to send—and when to charge.
            </p>
            
            <div className="space-y-6">
              <p className="font-semibold text-white">You decide everything:</p>
              <ul className="space-y-4">
                {[
                  "Exact star amount per photo/video",
                  "Bundles or tiered pricing",
                  "Intelligent matching to fan requests",
                  "Automated delivery in peak moments"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 className="text-accent-primary shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-accent-primary/5 border border-accent-primary/10 rounded-3xl">
              <p className="text-white font-medium italic">
                "No more manual sending. No more 'forgot to charge' lost sales. Just pure profit."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                 className="liquid-glass relative p-8 flex flex-col overflow-hidden group hover:border-accent-primary/20 transition-colors"
               >
                 <div className="relative w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                   <div className="absolute inset-0 bg-accent-primary/20 blur-lg group-hover:bg-accent-primary/30 transition-all" />
                   <div className="relative z-10">
                     <feature.icon size={24} />
                   </div>
                 </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentControl;
