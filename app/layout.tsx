import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
});

export const metadata = {
  title: 'Intimuber - AI-Powered Revenue Automation for Models',
  description: 'Turn your Telegram presence into a revenue machine. AI handles conversations, sells your content, and earns while you sleep. 70% revenue share, 24h setup, 100% free onboarding.',
  keywords: ['AI automation', 'content creator', 'monetization', 'Telegram bot', 'OnlyFans alternative'],
  authors: [{ name: 'Intimuber' }],
  openGraph: {
    title: 'Intimuber - AI-Powered Revenue Automation for Models',
    description: 'AI handles conversations, sells your content, and earns while you sleep.',
    type: 'website',
    url: 'https://intimuber.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intimuber - AI-Powered Revenue Automation',
    description: 'Turn your Telegram into a revenue machine with AI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-outfit">
        <div className="animated-bg" />
        {children}
      </body>
    </html>
  );
}