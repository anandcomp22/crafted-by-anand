import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Terminal, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'moreanand111011@gmail.com';
  const phone = '+91 9552111011';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // Direct mailto formulation for zero-failure client dispatch
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-obsidian-border dark:border-obsidian-border border-paper-border relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header with Corner Guides */}
        <div className="relative pb-8 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
          <div className="corner-mark corner-mark-tl"></div>
          <div className="corner-mark corner-mark-tr"></div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
            <span className="text-brand font-bold tracking-wider">SEC.05</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
            <span>DIRECT INQUIRY &amp; TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest uppercase text-zinc-100 dark:text-zinc-100 text-zinc-900">
            Initiate Contact
          </h2>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600 max-w-2xl font-mono">
            Open for software engineering opportunities, distributed backend systems development, and technical collaboration.
          </p>
        </div>

        {/* Contact Grid: Direct Info (Left) + Terminal Form (Right) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coordinates & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="relative p-6 border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 hover:border-zinc-700 transition-colors group">
              <div className="absolute -top-1 -left-1 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -top-1 -right-1 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1 -left-1 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1 -right-1 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 pb-3 mb-3 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200">
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand" />
                  <span>DIRECT EMAIL</span>
                </span>
                <span>PRIMARY</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 break-all mb-4">
                {email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-2 font-mono text-xs uppercase tracking-wider border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-400 text-zinc-200 dark:text-zinc-200 text-zinc-800 bg-obsidian dark:bg-obsidian bg-white transition-colors flex items-center justify-center gap-2"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'ADDRESS COPIED' : 'COPY EMAIL ADDRESS'}</span>
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 pb-3 mb-3 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200">
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand" />
                  <span>VOICE &amp; TELECOMMUNICATION</span>
                </span>
                <span>INDIA</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-4">
                {phone}
              </div>
              <button
                onClick={handleCopyPhone}
                className="w-full py-2 font-mono text-xs uppercase tracking-wider border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-400 text-zinc-200 dark:text-zinc-200 text-zinc-800 bg-obsidian dark:bg-obsidian bg-white transition-colors flex items-center justify-center gap-2"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'NUMBER COPIED' : 'COPY PHONE NUMBER'}</span>
              </button>
            </div>

            {/* Location & Network */}
            <div className="p-6 border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
                <MapPin className="w-3.5 h-3.5 text-brand" />
                <span>GEOGRAPHIC BASE</span>
              </div>
              <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-4">
                Pune, Maharashtra, India (Available for Remote &amp; On-Site)
              </div>

              <div className="pt-4 border-t border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 flex items-center gap-3">
                <a
                  href="https://github.com/anandcomp22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-400 text-zinc-200 dark:text-zinc-200 text-zinc-800 hover:text-white dark:hover:text-white hover:text-zinc-950 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anand-more-4b2887256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-zinc-400 text-zinc-200 dark:text-zinc-200 text-zinc-800 hover:text-white dark:hover:text-white hover:text-zinc-950 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Transmission Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 p-6 sm:p-8">
              {/* Terminal Form Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300 dark:text-zinc-300 text-zinc-700 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-brand" />
                  <span>TRANSMISSION TERMINAL</span>
                </div>
                <span className="text-zinc-400 dark:text-zinc-400 text-zinc-600">INPUT PROTOCOL</span>
              </div>

              {status === 'success' ? (
                <div className="p-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>INQUIRY DISPATCHED SUCCESSFULLY</span>
                  </div>
                  <p className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-sans text-xs">
                    Your inquiry has been formulated. If your mail client did not automatically trigger, send your message directly to <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900">{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 font-mono text-xs border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-100 dark:text-zinc-100 text-zinc-900 focus:border-brand focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. elena@company.com"
                        className="w-full px-3.5 py-2.5 font-mono text-xs border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-100 dark:text-zinc-100 text-zinc-900 focus:border-brand focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Engineering Role / Technical Collaboration"
                      className="w-full px-3.5 py-2.5 font-mono text-xs border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-100 dark:text-zinc-100 text-zinc-900 focus:border-brand focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-1.5">
                      Message Specifications *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your engineering requirements, project scope, or opportunity..."
                      className="w-full px-3.5 py-2.5 font-mono text-xs border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-100 dark:text-zinc-100 text-zinc-900 focus:border-brand focus:outline-none transition-colors resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 font-mono text-xs uppercase tracking-wider bg-brand text-white hover:bg-brand-hover transition-colors flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-400 text-zinc-600 text-center">
                    Data processed strictly per the compliant Privacy Policy. Zero marketing trackers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
