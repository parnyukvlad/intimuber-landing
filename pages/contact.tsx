import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Contact Us | OnlyPPV</title>
        <meta name="description" content="Contact OnlyPPV support team for help and inquiries." />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="py-24 px-6">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>

            <div className="liquid-glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">{t.contact.support.title}</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {t.contact.support.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t.contact.support.email}</p>
                    <p className="text-white font-medium">onlyppv@proton.me</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t.contact.support.telegram}</p>
                    <p className="text-white font-medium">@onlyppv_official</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">{t.contact.responseTime.title}</h2>
              <p className="text-text-secondary leading-relaxed">
                {t.contact.responseTime.description}
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
