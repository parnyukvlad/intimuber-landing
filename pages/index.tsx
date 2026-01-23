import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero/Hero';
import ValueProp from '@/components/Sections/ValueProp';
import HowItWorks from '@/components/Sections/HowItWorks';
import Revenue from '@/components/Sections/Revenue';
import Security from '@/components/Sections/Security';
import CTA from '@/components/Sections/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Intimuber | Scale Your Telegram. Automate Your Income.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-background selection:bg-accent-primary/30 selection:text-white">
        <Navigation />
        
        <main>
          <Hero />
          <ValueProp />
          <HowItWorks />
          <Revenue />
          <Security />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
