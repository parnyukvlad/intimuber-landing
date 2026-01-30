import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | OnlyPPV</title>
        <meta name="description" content="OnlyPPV Terms of Service - Rules and conditions for using our platform." />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Acceptance of Terms</h2>
                <p className="text-text-secondary leading-relaxed">
                  By accessing and using OnlyPPV, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Eligibility</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV is intended for adult content creators 18 years of age or older. By using our service, you represent and warrant that you meet this age requirement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Revenue Split</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV retains a 30% platform fee from all earnings. You receive 70% of all revenue generated through your Telegram business account via our autopilot system.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Payouts</h2>
                <p className="text-text-secondary leading-relaxed">
                  Payouts are processed once you reach the minimum threshold of 2000 Telegram Stars. Available payout methods include USDT crypto, PayPal, and direct Telegram Stars transfer. Payout requests are processed within 48 hours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Content Policy</h2>
                <p className="text-text-secondary leading-relaxed">
                  Users are responsible for ensuring all content uploaded complies with applicable laws and Telegram's Terms of Service. OnlyPPV reserves the right to remove content that violates these policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Service Availability</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV strives to maintain 24/7 service availability but does not guarantee uninterrupted access. We are not liable for any damages resulting from service interruptions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Termination</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV reserves the right to suspend or terminate accounts that violate these Terms of Service or engage in fraudulent activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed">
                  To the maximum extent permitted by law, OnlyPPV shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
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
