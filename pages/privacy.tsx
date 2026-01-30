import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | OnlyPPV</title>
        <meta name="description" content="OnlyPPV Privacy Policy - Learn how we protect your data and privacy." />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Data Collection</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV collects only the information necessary to provide our services. This includes your Telegram business account credentials, persona configuration data, media library content, and transaction history.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Data Usage</h2>
                <p className="text-text-secondary leading-relaxed">
                  Your data is used solely for operating the autopilot system, managing your content library, processing payments, and providing analytics. We never share your personal information with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Data Storage & Security</h2>
                <p className="text-text-secondary leading-relaxed">
                  All data is stored securely using industry-standard encryption. Your media files, persona configurations, and transaction records are protected against unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Your Rights</h2>
                <p className="text-text-secondary leading-relaxed">
                  You have the right to access, modify, or delete your account data at any time. Contact us for any privacy-related requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Telegram Data</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV operates through Telegram's Business API. Your Telegram business account data is handled according to Telegram's privacy policies.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
