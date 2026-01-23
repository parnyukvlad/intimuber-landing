import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    text: "All data transmission is secured using military-grade encryption standards."
  },
  {
    icon: ShieldCheck,
    title: "No Credential Access",
    text: "Our system operates via API integrations that don't require your password."
  },
  {
    icon: EyeOff,
    title: "Anonymous Storage",
    text: "Your media remains your own. We use temporary, anonymous storage protocols."
  }
];

const Security = () => {
  return (
    <section className="py-24 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Privacy, Protected</h2>
            <p className="text-text-secondary leading-relaxed">
              We take security seriously. In an industry where trust is everything, we've built our platform with a security-first mindset.
            </p>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="p-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent-primary">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-text-secondary text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
