import React from 'react';
import { ArrowLeft, Scale, CheckCircle2 } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
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
              SYS.DOC // TERMS &amp; CONDITIONS
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
            <Scale className="w-4 h-4" />
            <span>LEGAL SPECIFICATION · REF: TERMS-2026-v1</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm font-mono text-zinc-400 dark:text-zinc-400 text-zinc-600">
            Effective Date: October 2026 · Target Domain: anandmore.dev · Author: Anand More
          </p>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-zinc-300 dark:text-zinc-300 text-zinc-700">
          {/* Section 01 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              01 // Agreement to Terms
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              1. Acceptance and Digital Agreement
            </h2>
            <p className="mb-3">
              By accessing, browsing, or utilizing the portfolio website accessible at anandmore.dev (the "Website"), you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions ("Terms"). If you do not agree with any provision set forth herein, you must immediately discontinue use of this Website.
            </p>
            <p>
              These Terms apply to all visitors, recruiters, collaborating engineers, and clients accessing the portfolio and its associated demonstration environments.
            </p>
          </section>

          {/* Section 02 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              02 // Intellectual Property
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              2. Intellectual Property and Open-Source Code
            </h2>
            <p className="mb-4">
              All proprietary editorial design systems, architectural layouts, typographic compositions, branding elements, and written materials on this Website are the exclusive intellectual property of Anand More.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-sans block mb-1">Open-Source Code Repositories:</strong>
                Source code hosted in linked GitHub repositories is governed individually by its respective open-source licensing agreement (such as MIT, Apache 2.0, or specific repository licenses). Refer directly to the LICENSE file inside each individual repository.
              </div>
              <div className="p-3 border border-zinc-800 dark:border-zinc-800 border-zinc-300">
                <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-sans block mb-1">Company-Owned Trademarks &amp; Work:</strong>
                Trademarks, corporate logos, and project references pertaining to previous employers or internship sponsors (such as Celebal Technologies and i2ispecialist) belong to their respective corporate entities and are referenced strictly under fair-use principles to describe factual employment contributions.
              </div>
            </div>
          </section>

          {/* Section 03 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              03 // Permitted Usage
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              3. Permitted and Prohibited Conduct
            </h2>
            <p className="mb-3">
              You are granted a revocable, non-exclusive license to view this Website for evaluating engineering capabilities, reviewing technical case studies, and initiating professional recruitment or contract discussions.
            </p>
            <p className="mb-2"><strong>You shall not:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-xs font-mono">
              <li>Deploy automated scrapers, denial-of-service tools, or bots to overwhelm site infrastructure.</li>
              <li>Misrepresent Anand More's engineering portfolio, authorship, or case studies as your own creation.</li>
              <li>Inject malicious payloads, SQL commands, or script exploits through the contact form.</li>
            </ul>
          </section>

          {/* Section 04 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              04 // Technical Case Studies &amp; Demonstrations
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              4. Accuracy of Engineering Demonstrations
            </h2>
            <p className="mb-3">
              Case studies (including AidMe, Farmax Agro, and predictive dashboards) reflect actual engineering builds, software prototypes, or production internships. While demonstrations are engineered with rigorous diligence, they are presented on an "as is" and "as available" basis without express warranties of commercial continuous uptime.
            </p>
          </section>

          {/* Section 05 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              05 // Limitation of Liability
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              5. Disclaimer of Warranties and Liability Limitation
            </h2>
            <p className="mb-3">
              To the fullest extent permitted under law, Anand More disclaims all liability for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this Website, or any reliance placed upon code snippets or demonstration architectures.
            </p>
          </section>

          {/* Section 06 */}
          <section className="border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 p-6 bg-obsidian-subtle/40 dark:bg-obsidian-subtle/40 bg-zinc-50">
            <div className="font-mono text-xs text-brand tracking-wider uppercase mb-2">
              06 // Jurisdiction &amp; Modifications
            </div>
            <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-3">
              6. Governing Law and Dispute Resolution
            </h2>
            <p className="mb-3">
              These Terms shall be interpreted and governed in accordance with the laws of India. Any legal dispute, controversy, or claim arising from these Terms or the Website shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
            </p>
            <p>
              I reserve the right to revise or amend these Terms at any time without prior individual notification. Continued usage of the Website following modifications constitutes agreement to the updated Terms.
            </p>
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
