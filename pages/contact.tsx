import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | OnlyPPV</title>
        <meta name="description" content="Contact OnlyPPV support team for help and inquiries." />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="liquid-glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-white">Get Support</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Have questions or need help? Our support team is here to assist you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Email</p>
                      <p className="text-white font-medium">onlyppv@proton.me</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Telegram</p>
                      <p className="text-white font-medium">@onlyppv_official</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="liquid-glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-white">Business Inquiries</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Interested in partnerships or media coverage?
                </p>
                  <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Email</p>
                      <p className="text-white font-medium">parnyuk.vladislav@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">Response Time</h2>
              <p className="text-text-secondary leading-relaxed">
                We typically respond to all inquiries within 24-48 hours during business days. For urgent technical issues, please include detailed information about the problem you're experiencing.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
