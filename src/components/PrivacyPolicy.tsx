import React from 'react';
import { ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-obsidian text-zinc-100 dark:bg-obsidian dark:text-zinc-100 bg-paper text-zinc-900 transition-colors duration-150">
      {/* Top Header */}
      <header className="border-b border-obsidian-border dark:border-obsidian-border border-paper-border bg-obsidian-subtle/80 dark:bg-obsidian-subtle/80 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-3 py-1.5 font-mono text-xs uppercase tracking-wider border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-brand text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:text-brand transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Portfolio</span>
            </button>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 hidden sm:inline">
              SYS.DOC // PRIVACY POLICY
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>COMPLIANT STATUS: LIVE</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Title Block */}
        <div className="border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 pb-8 mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-brand tracking-widest uppercase mb-3">
            <Shield className="w-4 h-4" />
            <span>LEGAL SPECIFICATION · REF: PRIV-2026-v1</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-zinc-400 dark:text-zinc-400 text-zinc-600">
            Effective Date: October 2026 · Target Domain: anandmore.dev · Controller: Anand More
          </p>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-zinc-300 dark:text-zinc-300 text-zinc-700">
          {/* Section 01 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              01 // Scope &amp; Data Controller
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              1. Overview and Responsible Entity
            </h2>
            <p className="mb-3">
              This Privacy Policy governs the processing of technical and personal data collected through the digital portfolio website hosted at anandmore.dev (the "Site"), operated by Anand More ("Controller"), a Software Engineer based in Pune, Maharashtra, India.
            </p>
            <p>
              I respect your personal data and adhere strictly to applicable privacy principles, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the Digital Personal Data Protection Act (DPDP Act, India).
            </p>
          </section>

          {/* Section 02 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              02 // Data Collection Categories
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              2. Information Collected
            </h2>
            <p className="mb-4">
              I collect only the minimum information necessary to communicate regarding engineering contracts, employment inquiries, and technical collaboration:
            </p>
            <ul className="space-y-3 font-mono text-xs">
              <li className="flex items-start gap-2">
                <span className="text-brand font-bold">[A]</span>
                <div>
                  <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-sans">Voluntarily Provided Information:</strong> When you submit the inquiry form or initiate an email communication, you provide your name, email address, subject line, and message content.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand font-bold">[B]</span>
                <div>
                  <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-sans">Technical Server Logs:</strong> In standard HTTP server operations, hosting infrastructure providers (such as GitHub Pages or Vercel) log standard network request data, including IP address, user-agent string, and timestamp of request. These logs are maintained purely for infrastructure reliability and DDoS prevention.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand font-bold">[C]</span>
                <div>
                  <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-sans">Local Preference Storage:</strong> The Site stores your theme preference (Light or Dark mode) locally in your browser's localStorage. No tracking cookies, advertising identifiers, or analytics beacons are utilized.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 03 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              03 // Lawful Basis &amp; Purpose
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              3. Purpose of Processing and Lawful Basis
            </h2>
            <p className="mb-3">
              Personal data submitted through the contact channels is processed under the following lawful bases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs">
              <li><strong>Legitimate Interest &amp; Contract Negotiation:</strong> To respond directly to your technical inquiries, project proposals, or professional opportunities.</li>
              <li><strong>Consent:</strong> Explicitly granted by you when transmitting inquiry messages through the contact interface.</li>
              <li><strong>Zero Data Commercialization:</strong> I do not sell, rent, monetize, or lease your personal information to third-party brokers, marketing firms, or data aggregators.</li>
            </ul>
          </section>

          {/* Section 04 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              04 // Storage &amp; Security
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              4. Data Retention and Security Protocols
            </h2>
            <p className="mb-3">
              Inquiry records are retained only for as long as required to resolve the specific inquiry or maintain professional communication history. All communication channels utilize TLS encryption in transit.
            </p>
            <p>
              External links to third-party platforms (including GitHub, LinkedIn, and project repositories) operate under their respective privacy policies. Users are encouraged to review external terms before submitting personal data on third-party sites.
            </p>
          </section>

          {/* Section 05 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              05 // Individual Rights
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              5. Your Legal Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you maintain full legal rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong>Right to Access:</strong> Request a copy of any personal data stored about you.
              </div>
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong>Right to Rectification:</strong> Request correction of inaccurate information.
              </div>
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong>Right to Erasure:</strong> Request permanent removal of your transmission records.
              </div>
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong>Right to Restrict:</strong> Restrict or object to specific processing actions.
              </div>
            </div>
          </section>

          {/* Section 06 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              06 // Contact &amp; Inquiries
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              6. Controller Contact Information
            </h2>
            <p className="mb-3">
              For any privacy inquiries, data deletion requests, or formal communications, contact:
            </p>
            <div className="font-mono text-xs p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white">
              <div>Name: Anand More</div>
              <div>Role: Software Engineer / Controller</div>
              <div>Email: moreanand111011@gmail.com</div>
              <div>Location: Pune, Maharashtra, India</div>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 pt-8 border-t border-zinc-800 dark:border-zinc-800 border-zinc-200 flex justify-between items-center">
          <button
            onClick={onBack}
            className="px-5 py-2.5 font-mono text-xs uppercase tracking-wider bg-brand text-white hover:bg-brand-hover transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600">
            Verified compliant · 2026
          </span>
        </div>
      </main>
    </div>
  );
};
