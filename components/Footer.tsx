'use client';

import Button from '@/components/ui/Button';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#0C0C0E]">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-medium text-[#E8E8E8] mb-6">
            Begin Automation
          </h2>
          <p className="text-[#8A8A8A] mb-10">
            Submit an inquiry to receive a detailed breakdown of our AI services and onboarding process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              size="lg"
              href="mailto:parnyuk.vladislav@gmail.com"
            >
              Contact Agency
            </Button>
            <Button variant="ghost" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </Button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#8A8A8A] text-xs uppercase tracking-widest">
            © 2026 INTIMUBER
          </div>

          <div className="flex space-x-8 text-xs text-[#8A8A8A]">
            <a href="#" className="hover:text-[#E8E8E8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E8E8E8] transition-colors">Terms</a>
            <a href="mailto:parnyuk.vladislav@gmail.com" className="hover:text-[#E8E8E8] transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
