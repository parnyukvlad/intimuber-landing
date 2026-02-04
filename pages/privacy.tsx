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
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy & GDPR Compliance</h1>
              <p className="text-text-secondary">
                <strong>Last Updated:</strong> February 4, 2026 | <strong>Effective Date:</strong> February 4, 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {/* Introduction */}
              <section className="border-l-4 border-accent-primary pl-6">
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">Introduction</h2>
                <p className="text-text-secondary leading-relaxed">
                  OnlyPPV ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered Telegram autopilot platform.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  By accessing or using OnlyPPV, you acknowledge that you have read and agree to be bound by this Privacy Policy.
                </p>
              </section>

              {/* 1. Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">1. Information We Collect</h2>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Account Information</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Full name and display name</li>
                      <li>Email address</li>
                      <li>Telegram username</li>
                      <li>Country/region</li>
                      <li>Account creation date</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Telegram Business Credentials</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We store encrypted access tokens for your Telegram Business account. Your actual Telegram login credentials are never stored on our servers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Content & Media</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Uploaded photos, videos, and media files</li>
                      <li>Content descriptions and metadata</li>
                      <li>Persona configuration settings</li>
                      <li>AI personality traits and conversation styles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Age Verification & Content Compliance</h3>
                    <div className="bg-background-light rounded-lg p-4 mt-2 border-l-2 border-accent-secondary">
                      <p className="font-semibold text-foreground mb-2">Creator Responsibility:</p>
                      <p className="text-text-secondary text-sm">
                        OnlyPPV does NOT collect, store, or maintain performer identity documents, government-issued IDs, age verification records, or performer consent documentation.
                      </p>
                      <p className="text-text-secondary text-sm mt-2">
                        <strong>What Creators Must Do:</strong> You are legally required to verify all performer ages via government-issued identification, maintain age verification records per applicable law (such as 18 U.S.C. § 2257), keep records for the legally required retention period, and provide records to OnlyPPV immediately upon request.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Payment Information</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Telegram Stars transaction history</li>
                      <li>Revenue and payout records</li>
                      <li>USDT wallet addresses (for crypto payouts)</li>
                      <li>PayPal email (if selected for payouts)</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-2">
                      <strong>Note:</strong> Payment processing is handled through Telegram's infrastructure and third-party payment processors. We do not store full credit card details.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Usage Data</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Chat logs with fans (stored for 90 days)</li>
                      <li>Analytics data (engagement, views, response times)</li>
                      <li>Session data (duration, frequency, timestamps)</li>
                      <li>Device information (browser, OS, IP address)</li>
                      <li>AI conversation patterns and performance metrics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">AI Processing Data</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Messages sent to and from your AI agents</li>
                      <li>Sentiment analysis results</li>
                      <li>Conversation context and history</li>
                      <li>Fan behavioral insights and preferences</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2. Legal Basis for Processing */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">2. Legal Basis for Processing (GDPR)</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We process your data under these legal bases as defined by the General Data Protection Regulation (GDPR):
                </p>

                <div className="space-y-4">
                  <div className="bg-background-light rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">GDPR Article 6(1)(b) - Contract Performance</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Account management and authentication</li>
                      <li>Content delivery and AI-powered autopilot</li>
                      <li>Payment processing and payouts</li>
                      <li>Service provision and support</li>
                    </ul>
                  </div>

                  <div className="bg-background-light rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">GDPR Article 6(1)(c) - Legal Obligation</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Age verification compliance and tracking</li>
                      <li>CSAM detection and prevention (child protection)</li>
                      <li>Tax compliance and record-keeping</li>
                      <li>Law enforcement requests</li>
                      <li>Regulatory compliance requirements</li>
                    </ul>
                  </div>

                  <div className="bg-background-light rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">GDPR Article 6(1)(a) - Your Consent</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>GDPR consent checkbox during signup</li>
                      <li>Marketing communications (if opted in)</li>
                      <li>Optional analytics tracking</li>
                      <li>Non-essential cookies</li>
                    </ul>
                  </div>

                  <div className="bg-background-light rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">GDPR Article 6(1)(f) - Legitimate Interest</h3>
                    <p className="text-text-secondary mb-2">
                      We process certain data based on legitimate interest for platform safety and integrity:
                    </p>
                    <ul className="list-disc list-inside text-text-secondary mb-3">
                      <li>Monitoring for illegal content (CSAM, prohibited activities)</li>
                      <li>Fraud detection and prevention</li>
                      <li>Account security and abuse prevention</li>
                      <li>Service improvement and optimization</li>
                    </ul>
                    <div className="text-sm text-text-secondary border-t border-gray-700 pt-3">
                      <p className="font-semibold mb-1">Balancing Test:</p>
                      <p><strong>Our interest:</strong> Preventing illegal content distribution, protecting users, legal compliance, service quality</p>
                      <p><strong>Your rights:</strong> Privacy, data protection, confidentiality</p>
                      <p className="mt-1"><strong>Safeguards:</strong> Minimal data collection, limited retention (90 days for chat logs), encryption, access controls</p>
                    </div>
                  </div>

                  <div className="bg-background-light rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">GDPR Article 9(2)(g) - Special Category Data (Explicit Content)</h3>
                    <p className="text-text-secondary">
                      We process sexually explicit content based on substantial public interest in preventing child exploitation, including automatic CSAM detection, manual content review when flagged, immediate removal and law enforcement reporting, and platform safety measures.
                    </p>
                    <p className="text-text-secondary text-sm mt-2">
                      <strong>You gave explicit consent during signup by accepting our Terms of Service.</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Your Data */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">3. How We Use Your Data</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Service Provision</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Creating and managing your OnlyPPV account</li>
                      <li>Delivering content to fans through Telegram</li>
                      <li>Processing payments and payouts</li>
                      <li>Providing customer support</li>
                      <li>Enabling AI-powered autopilot conversations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">AI Processing</h3>
                    <p className="text-text-secondary leading-relaxed mb-2">
                      Your content and fan messages are processed by AI models to power the autopilot system. This includes real-time conversation generation, sentiment analysis, intent recognition, and response personalization.
                    </p>
                    <div className="bg-background-light rounded-lg p-4 text-sm">
                      <p className="font-semibold mb-1">What this means:</p>
                      <ul className="list-disc list-inside text-text-secondary space-y-1">
                        <li>Fan messages are sent to AI providers for processing</li>
                        <li>Messages are processed in real-time to generate responses</li>
                        <li>AI analyzes sentiment, intent, and conversation context</li>
                        <li>Data may be retained by AI providers per their own policies</li>
                      </ul>
                      <p className="font-semibold mt-3 mb-1">Your choices:</p>
                      <ul className="list-disc list-inside text-text-secondary space-y-1">
                        <li>Continue using the service with AI processing enabled</li>
                        <li>Object to AI processing (may limit functionality) - email support@onlyppv.com</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Child Protection</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Age verification tracking and compliance</li>
                      <li>CSAM detection via automated scanning</li>
                      <li>Abuse monitoring and reporting</li>
                      <li>Content removal and account bans</li>
                      <li>Law enforcement reporting when required</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Legal & Compliance</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Tax compliance and record-keeping</li>
                      <li>Fraud prevention and detection</li>
                      <li>Platform security and integrity</li>
                      <li>Investigating violations</li>
                      <li>Responding to legal requests</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Platform Improvement</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Analytics and performance monitoring</li>
                      <li>Feature development and testing</li>
                      <li>User experience optimization</li>
                      <li>Service quality improvement</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Who We Share Your Data With */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">4. Who We Share Your Data With</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Essential Service Providers</h3>
                    <div className="bg-background-light rounded-lg p-4">
                      <p className="font-semibold text-foreground mb-2">Telegram</p>
                      <ul className="text-text-secondary text-sm space-y-1">
                        <li><strong>Purpose:</strong> Business API integration, message delivery, payments</li>
                        <li><strong>Location:</strong> Dubai, UAE</li>
                        <li><strong>Data shared:</strong> Business tokens, messages for delivery, transaction data</li>
                        <li><strong>Note:</strong> By using OnlyPPV, you acknowledge that Telegram may not meet full GDPR standards and is headquartered outside the EU.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent-primary/10 border border-accent-primary rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">What We DON'T Do</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>We do NOT sell your data to third parties</li>
                      <li>No marketing partnerships involving your data</li>
                      <li>No data brokers</li>
                      <li>No advertising networks</li>
                      <li>No Google Analytics or similar third-party tracking</li>
                      <li>No Facebook Pixel or cross-site tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Law Enforcement</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We may disclose data if legally required, including CSAM automatically reported to NCMEC (National Center for Missing & Exploited Children) via automated detection, full cooperation with investigations involving child exploitation, terrorism, or serious crimes, court orders, subpoenas, and lawful government requests, and emergency situations involving imminent harm.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Data Retention */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">5. Data Retention</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-700 text-sm">
                    <thead>
                      <tr className="bg-background-light">
                        <th className="border border-gray-700 p-3 text-left text-foreground">Data Type</th>
                        <th className="border border-gray-700 p-3 text-left text-foreground">Retention Period</th>
                        <th className="border border-gray-700 p-3 text-left text-foreground">Why</th>
                        <th className="border border-gray-700 p-3 text-left text-foreground">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 p-3 text-text-secondary">Account information</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Until deletion or 180 days of inactivity</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Service operation</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Contract (Art. 6(1)(b))</td>
                      </tr>
                      <tr className="bg-background-light">
                        <td className="border border-gray-700 p-3 text-text-secondary">Chat logs (creator-fan messages)</td>
                        <td className="border border-gray-700 p-3 text-text-secondary"><strong>90 days rolling</strong></td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Dispute resolution, abuse detection</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Legitimate interest (Art. 6(1)(f))</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 p-3 text-text-secondary">Session analytics</td>
                        <td className="border border-gray-700 p-3 text-text-secondary"><strong>90 days rolling</strong></td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Service improvement, fraud prevention</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Legitimate interest (Art. 6(1)(f))</td>
                      </tr>
                      <tr className="bg-background-light">
                        <td className="border border-gray-700 p-3 text-text-secondary">Payment/transaction data</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">7 years</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Tax compliance (legal requirement)</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Legal obligation (Art. 6(1)(c))</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 p-3 text-text-secondary">Content (uploaded media)</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Until deletion by creator</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Service delivery</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Contract (Art. 6(1)(b))</td>
                      </tr>
                      <tr className="bg-background-light">
                        <td className="border border-gray-700 p-3 text-text-secondary">Agent configurations</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Until deletion by creator</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Service operation</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Contract (Art. 6(1)(b))</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 p-3 text-text-secondary">CSAM reports & logs</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Indefinitely</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Law enforcement cooperation</td>
                        <td className="border border-gray-700 p-3 text-text-secondary">Legal obligation (Art. 6(1)(c))</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 bg-background-light rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Automated Deletion</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li><strong>Chat logs:</strong> Automatically deleted after 90 days</li>
                    <li><strong>Session data:</strong> Anonymized after 90 days (identifiers removed, aggregated statistics retained)</li>
                    <li><strong>Account data:</strong> Deleted within 30 days of account closure (except legally required records)</li>
                  </ul>
                  <p className="text-text-secondary text-sm mt-2">
                    <strong>Why 90 Days for Chat Logs?</strong> This is the industry standard for messaging platforms, allowing reasonable dispute resolution window (most occur within 60 days) while balancing operational needs with GDPR's data minimization principle.
                  </p>
                </div>
              </section>

              {/* 6. Your GDPR Rights */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">6. Your GDPR Rights</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You have the following rights under GDPR:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 15 - Right to Access</h3>
                    <p className="text-text-secondary mb-2"><strong>Request copy of your data:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Available formats: JSON export</li>
                      <li>Timeline: 30 days</li>
                      <li>Cost: Free</li>
                      <li>How: Email support@onlyppv.com with "Data Access Request"</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 16 - Right to Rectification</h3>
                    <p className="text-text-secondary mb-2"><strong>Correct inaccurate data:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Update via account settings (self-service)</li>
                      <li>Or email support@onlyppv.com with corrections</li>
                      <li>Timeline: Immediate via dashboard, 30 days via email</li>
                      <li>Cost: Free</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 17 - Right to Erasure ("Right to be Forgotten")</h3>
                    <p className="text-text-secondary mb-2"><strong>Request account deletion:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Method: Account settings → Delete Account</li>
                      <li>Or email: support@onlyppv.com with "Account Deletion Request"</li>
                      <li>Timeline: All data deleted within 30 days</li>
                      <li><strong>Exception:</strong> Tax records kept 7 years (legal requirement)</li>
                      <li><strong>Exception:</strong> CSAM reports kept indefinitely (legal obligation)</li>
                    </ul>
                    <div className="mt-2 text-sm text-text-secondary">
                      <p><strong>What gets deleted:</strong> Account information, agents and content, chat logs and session data, analytics data, personal identifiers</p>
                      <p className="mt-1"><strong>What is retained:</strong> Financial records (7 years), CSAM detection logs (permanent), anonymized aggregate statistics</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 18 - Right to Restrict Processing</h3>
                    <p className="text-text-secondary mb-2"><strong>Limit how we use data:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Turn off analytics tracking</li>
                      <li>Disable certain data processing</li>
                      <li>Email: support@onlyppv.com with "Restrict Processing Request"</li>
                      <li>Timeline: 30 days</li>
                      <li>Note: May limit service functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 20 - Right to Data Portability</h3>
                    <p className="text-text-secondary mb-2"><strong>Download your data:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Format: JSON (machine-readable, portable)</li>
                      <li>Includes: Account info, agents, content metadata, analytics</li>
                      <li>Timeline: 30 days</li>
                      <li>Cost: Free</li>
                      <li>How: Email support@onlyppv.com with "Data Portability Request"</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 21 - Right to Object</h3>
                    <p className="text-text-secondary mb-2"><strong>Opt out of certain processing:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Marketing emails (unsubscribe link in emails)</li>
                      <li>Analytics tracking</li>
                      <li>AI processing (note: may disable core functionality)</li>
                      <li>Cannot object to contract-necessary processing</li>
                      <li>Email: support@onlyppv.com with "Processing Objection"</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 22 - Automated Decision-Making</h3>
                    <p className="text-text-secondary mb-2"><strong>Your rights:</strong></p>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>We use AI for: Content recommendations, conversation responses, sentiment analysis</li>
                      <li>Request human review of automated decisions</li>
                      <li>Object to automated decision-making</li>
                      <li>Email: support@onlyppv.com</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Article 77 - Right to Lodge Complaint</h3>
                    <p className="text-text-secondary mb-2"><strong>File complaint with data protection authority:</strong></p>
                    <p className="text-text-secondary">You may file with your local data protection authority or contact us at support@onlyppv.com for guidance.</p>
                  </div>
                </div>
              </section>

              {/* 7. International Data Transfers */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">7. International Data Transfers</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your data is stored and processed in multiple locations:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Telegram Infrastructure:</strong> Global, with primary operations in Dubai, UAE</li>
                  <li><strong>AI Processing:</strong> AI providers (various locations, potentially including US)</li>
                </ul>
                <div className="mt-4 bg-background-light rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Transfer Safeguards</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li>Encryption in transit (TLS/SSL) and at rest (AES-256)</li>
                    <li>Minimal data sharing (only what's necessary for service operation)</li>
                    <li>Contractual data protection obligations with service providers</li>
                  </ul>
                  <p className="text-text-secondary text-sm mt-2">
                    <strong>Note:</strong> By using OnlyPPV, you acknowledge that data is processed by Telegram (Dubai) and AI providers (potentially US-based), which may not provide the same level of data protection as EU regulations.
                  </p>
                </div>
              </section>

              {/* 8. Security */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">8. Security</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement industry-standard security measures:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Encryption at rest:</strong> AES-256 for stored data</li>
                  <li><strong>Encryption in transit:</strong> TLS 1.3 for all data transfers</li>
                  <li><strong>Access controls:</strong> Role-based access, principle of least privilege</li>
                  <li><strong>Monitoring:</strong> Security monitoring and logging</li>
                  <li><strong>Backups:</strong> Encrypted backups with retention policies</li>
                  <li><strong>Incident response:</strong> Documented procedures for data breaches</li>
                </ul>
                <div className="mt-4 bg-background-light rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Data Breach Notification</h3>
                  <p className="text-text-secondary">
                    In the event of a data breach affecting personal data, we will notify you within 72 hours (GDPR requirement) and provide details of the breach, affected data, and remediation steps.
                  </p>
                  <p className="text-text-secondary text-sm mt-2">
                    <strong>Contact:</strong> support@onlyppv.com
                  </p>
                </div>
                <p className="text-text-secondary text-sm mt-4">
                  <strong>Limitations:</strong> No security is 100% guaranteed. While we implement industry-standard protections, we cannot guarantee absolute security against all threats.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">9. Children's Privacy</h2>
                <div className="bg-accent-primary/10 border border-accent-primary rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Our Platform is 18+ ONLY:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li>We don't knowingly collect data from minors (under 18)</li>
                    <li>Age confirmation required during signup</li>
                    <li>If we discover a minor, we immediately terminate their account and delete their data</li>
                    <li>We investigate how the minor bypassed age verification</li>
                  </ul>
                  <p className="text-text-secondary mt-3">
                    <strong>If you believe a minor is using our platform:</strong> Email support@onlyppv.com with evidence
                  </p>
                </div>
              </section>

              {/* 10. California Residents (CCPA/CPRA) */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">10. California Residents (CCPA/CPRA)</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you're in California, you have rights under CCPA/CPRA:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 mb-4">
                  <li><strong>Right to know:</strong> What personal information we collect and how we use it</li>
                  <li><strong>Right to delete:</strong> Request deletion of your data</li>
                  <li><strong>Right to opt-out of sale:</strong> We don't sell data, so this doesn't apply</li>
                  <li><strong>Right to correct:</strong> Update inaccurate information</li>
                  <li><strong>Right to limit use:</strong> Restrict processing of sensitive information</li>
                </ul>
                <div className="bg-background-light rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">How to Exercise Your Rights</h3>
                  <p className="text-text-secondary mb-2">
                    Email support@onlyppv.com with "California Privacy Rights" in the subject line.
                  </p>
                  <p className="text-text-secondary mb-2">Include:</p>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li>Your name</li>
                    <li>Account email</li>
                    <li>Specific request (access, delete, correct, etc.)</li>
                    <li>Verification information</li>
                  </ul>
                  <p className="text-text-secondary text-sm mt-3">
                    <strong>Timeline:</strong> 45 days (may extend to 90 days with notice) | <strong>Cost:</strong> Free
                  </p>
                </div>
                <div className="mt-4 bg-accent-primary/10 border border-accent-primary rounded-lg p-4">
                  <p className="font-semibold text-foreground">Do Not Sell My Personal Information</p>
                  <p className="text-text-secondary mt-1">We do NOT sell personal information to third parties. We never have and never will.</p>
                </div>
              </section>

              {/* 11. Cookies & Tracking */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">11. Cookies & Tracking</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Cookies We Use</h3>
                    <div className="bg-background-light rounded-lg p-4">
                      <p className="font-semibold text-foreground mb-2">Essential Cookies (Required):</p>
                      <ul className="list-disc list-inside text-text-secondary">
                        <li>Session cookies (necessary for login)</li>
                        <li>Authentication tokens</li>
                        <li>Security cookies (CSRF protection)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent-primary/10 border border-accent-primary rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">No Third-Party Tracking</h3>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>No Google Analytics</li>
                      <li>No Facebook Pixel</li>
                      <li>No advertising trackers</li>
                      <li>No cross-site tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Your Choices</h3>
                    <ul className="list-disc list-inside text-text-secondary">
                      <li>Manage in browser settings</li>
                      <li>Use private/incognito browsing (will disable functionality)</li>
                    </ul>
                    <p className="text-text-secondary text-sm mt-2">
                      <strong>Note:</strong> Essential cookies remain necessary for service operation.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Policy Changes */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">12. Policy Changes</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may update this policy anytime:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                  <li><strong>Major changes:</strong> Posted on this page with updated date and effective immediately</li>
                  <li><strong>Continued use after notice = acceptance</strong></li>
                </ul>
                <div className="mt-4 bg-background-light rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Version history:</h3>
                  <ul className="text-text-secondary space-y-1">
                    <li>Current: February 4, 2026 (Comprehensive GDPR/CCPA update)</li>
                  </ul>
                </div>
              </section>

              {/* 13. Contact Us */}
              <section className="border-l-4 border-accent-primary pl-6">
                <h2 className="text-2xl font-bold mb-4 text-accent-primary">13. Contact Us</h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">For Privacy Questions:</p>
                    <p className="text-text-secondary">Email: support@onlyppv.com | Response: Within 7 business days</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">For Data Requests (GDPR/CCPA):</p>
                    <p className="text-text-secondary">Email: support@onlyppv.com | Subject: "[GDPR/CCPA] [Request Type]" | Response: Within 30 days</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">For Security Issues:</p>
                    <p className="text-text-secondary">Email: support@onlyppv.com | Response: Within 24 hours for critical issues</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">For Abuse Reports:</p>
                    <p className="text-text-secondary">Email: support@onlyppv.com | Response: Within 24-48 hours</p>
                  </div>
                </div>

                <p className="text-text-secondary mt-6 italic">
                  By using OnlyPPV, you acknowledge that you have read, understood, and agree to this Privacy Policy.
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
