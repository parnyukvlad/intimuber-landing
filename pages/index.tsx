import Hero from '../components/Hero/Hero';
import WhatIsIntimuber from '../components/Sections/WhatIsIntimuber';
import HowItWorks from '../components/Sections/HowItWorks';
import Features from '../components/Sections/Features';
import Revenue from '../components/Sections/Revenue';
import Ecosystem from '../components/Sections/Ecosystem';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIsIntimuber />
      <HowItWorks />
      <Features />
      <Revenue />
      <Ecosystem />
      <Footer />
    </main>
  );
}