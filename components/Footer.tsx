import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-black tracking-tighter text-white mb-2">
              ONLY<span className="text-accent-primary">PPV</span>
            </div>
            <p className="text-sm text-text-secondary">
              The ultimate AI automation for OnlyFans creators.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-text-secondary">
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-text-secondary/60">
              © {new Date().getFullYear()} OnlyPPV. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
