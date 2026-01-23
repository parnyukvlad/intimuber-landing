import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="description" content="Turn your Telegram presence into a revenue machine. AI handles conversations, sells your content, and earns while you sleep. 70% revenue share, 24h setup, 100% free onboarding." />
        <meta name="keywords" content="AI automation, content creator, monetization, Telegram bot, OnlyFans alternative" />
        <meta name="author" content="Intimuber" />
        <meta property="og:title" content="Intimuber - AI-Powered Revenue Automation for Models" />
        <meta property="og:description" content="AI handles conversations, sells your content, and earns while you sleep." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://intimuber.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intimuber - AI-Powered Revenue Automation" />
        <meta name="twitter:description" content="Turn your Telegram into a revenue machine with AI." />
        <title>Intimuber - AI-Powered Revenue Automation for Models</title>
      </Head>
      <body className="font-outfit">
        <div className="animated-bg" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}