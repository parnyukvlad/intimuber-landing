import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold tracking-tighter text-white mb-2">
              INTIMUBER
            </div>
            <p className="text-sm text-text-secondary">
              Premium automation for premium creators.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-text-secondary">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <div className="text-xs text-text-secondary mb-1">
              Part of the <span className="text-accent-primary font-semibold">FeetGuru</span> Ecosystem
            </div>
            <p className="text-xs text-text-secondary/60">
              © {new Date().getFullYear()} Intimuber. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
