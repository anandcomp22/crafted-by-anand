import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, Github, Linkedin, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState<string>('');
  const email = 'moreanand111011@gmail.com';

  // Live real-time clock for authentic telemetry
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-obsidian-border dark:border-obsidian-border border-paper-border structural-grid overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        {/* Top Metadata Header with Precision Corner Crosshairs */}
        <div className="relative border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 bg-obsidian-subtle/60 dark:bg-obsidian-subtle/60 bg-zinc-50/60 px-4 py-3 mb-8 sm:mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          {/* Corner Crosshair Markers */}
          <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>

          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 text-zinc-600">
            <span className="text-brand font-bold tracking-wider">SEC.00</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
            <span>SPECIFICATION &amp; PROFILE</span>
          </div>

          <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 flex items-center gap-3 font-mono text-[11px]">
            <span>COORD: 18.5204° N, 73.8567° E</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">·</span>
            <span className="text-zinc-300 dark:text-zinc-300 text-zinc-700">
              TIME: {timeString ? `${timeString} IST` : '14:24:00 IST'}
            </span>
          </div>
        </div>

        {/* Hero Grid: Typographic Content (Left) + Architectural Portrait (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Terminal Tag with Blinking Cursor */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-zinc-700 dark:border-zinc-700 border-zinc-300 font-mono text-[11px] uppercase tracking-wider text-zinc-300 dark:text-zinc-300 text-zinc-700 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50 relative group">
                <Terminal className="w-3.5 h-3.5 text-brand" />
                <span>SERVER ENGINEER @ CONCENTRIX · DISTRIBUTED SYSTEMS &amp; AI</span>
                <span className="inline-block w-1.5 h-3 bg-brand animate-pulse ml-0.5"></span>
              </div>

              {/* Title with Architectural Entrance Animation */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tightest leading-[1.05] text-zinc-100 dark:text-zinc-100 text-zinc-900 uppercase animate-fade-in-up">
                MISSION-CRITICAL <br />
                INFRASTRUCTURE &amp; <br />
                <span className="text-brand">INTELLIGENT SYSTEMS.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-400 dark:text-zinc-400 text-zinc-600 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                Anand More is a Server Engineer at Concentrix and computer engineering scholar at PCCOER Pune. Architecting enterprise server infrastructure, multi-agent AI systems (upStack), and high-reliability distributed web services with React, Node.js, and Python.
              </p>
            </div>

            {/* Quick Actions (Flush Uniform Heights & Smooth Micro-Interactions) */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="h-11 px-5 font-mono text-xs uppercase tracking-wider bg-brand text-white hover:bg-brand-hover transition-all duration-200 flex items-center gap-2 group shadow-sm hover:shadow-brand/20 active:translate-y-0.5"
              >
                <span>EXPLORE CASE STUDIES</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                onClick={copyEmail}
                className="h-11 px-4 font-mono text-xs uppercase tracking-wider border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-brand text-zinc-200 dark:text-zinc-200 text-zinc-800 bg-obsidian-subtle dark:bg-obsidian-subtle bg-white transition-all duration-200 flex items-center gap-2 hover:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400 animate-pulse" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/anandcomp22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-brand text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:text-white dark:hover:text-white hover:text-zinc-950 transition-all duration-200 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-zinc-800"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anand-more-4b2887256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 border border-zinc-700 dark:border-zinc-700 border-zinc-300 hover:border-brand text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:text-white dark:hover:text-white hover:text-zinc-950 transition-all duration-200 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-zinc-800"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols Architectural Portrait Card with Precision Corner Alignment */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50 p-3 sm:p-4 h-full flex flex-col justify-between group hover:border-zinc-700 transition-colors duration-200">
              {/* Corner Crosshair Markers */}
              <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>

              {/* Card Meta Bar (Cleanly Outside Photo) */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-brand font-semibold">
                  <span className="w-2 h-2 bg-brand"></span>
                  <span>CONCENTRIX SERVER ENGINEER</span>
                </div>
                <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>OPERATIONAL</span>
                </div>
              </div>

              {/* Photo Frame (Unobstructed Portrait) */}
              <div className="relative aspect-[4/5] overflow-hidden border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-zinc-950 flex-1">
                <img
                  src="/assets/pic.jpeg"
                  alt="Anand More - Server Engineer &amp; Full-Stack Developer"
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-300"
                />

                {/* Subtle Architectural Grid Overlay in Corner */}
                <div className="absolute top-2 right-2 font-mono text-[9px] text-zinc-400 dark:text-zinc-400 text-zinc-600 bg-black/70 px-1.5 py-0.5 border border-zinc-800 pointer-events-none">
                  SYS.ID // 00-AM
                </div>

                {/* Bottom Translucent Info Strip */}
                <div className="absolute bottom-3 left-3 right-3 bg-obsidian/95 dark:bg-obsidian/95 bg-white/95 border border-zinc-800 dark:border-zinc-800 border-zinc-200 p-2.5 font-mono text-[11px] backdrop-blur-sm">
                  <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-[9px] tracking-wider uppercase">CURRENT ASSIGNMENT</div>
                  <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 truncate">
                    Server Operations · Concentrix &amp; PCCOER Pune
                  </div>
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[10px]">
                <div className="p-2 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 text-zinc-400 dark:text-zinc-400 text-zinc-600 bg-obsidian/40 dark:bg-obsidian/40 bg-white/40">
                  <div className="text-zinc-400 dark:text-zinc-400 text-zinc-700 text-[9px]">SPECIALIZATION</div>
                  <div className="text-zinc-200 dark:text-zinc-200 text-zinc-800 font-medium">Server Ops / Multi-Agent AI</div>
                </div>
                <div className="p-2 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 text-zinc-400 dark:text-zinc-400 text-zinc-600 bg-obsidian/40 dark:bg-obsidian/40 bg-white/40">
                  <div className="text-zinc-400 dark:text-zinc-400 text-zinc-700 text-[9px]">ENTERPRISE SLA</div>
                  <div className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>99.9% High Availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Spec Bar (Corner Aligned & Responsive Grid) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-800 dark:border-zinc-800 border-zinc-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="relative p-4 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 bg-obsidian-subtle/30 dark:bg-obsidian-subtle/30 bg-zinc-50 hover:border-brand/50 transition-colors duration-200 group">
            <div className="corner-mark corner-mark-neutral-tl"></div>
            <div className="corner-mark corner-mark-neutral-br"></div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-600 block mb-1">01 // SERVER INFRASTRUCTURE</span>
            <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:text-brand transition-colors">Server Engineer @ Concentrix</div>
            <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-[11px] mt-0.5">Enterprise Linux / High Availability</div>
          </div>

          <div className="relative p-4 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 bg-obsidian-subtle/30 dark:bg-obsidian-subtle/30 bg-zinc-50 hover:border-brand/50 transition-colors duration-200 group">
            <div className="corner-mark corner-mark-neutral-tl"></div>
            <div className="corner-mark corner-mark-neutral-br"></div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-600 block mb-1">02 // MULTI-AGENT AI</span>
            <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:text-brand transition-colors">upStack Platform</div>
            <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-[11px] mt-0.5">MCP Tools &amp; Kafka Event Streams</div>
          </div>

          <div className="relative p-4 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 bg-obsidian-subtle/30 dark:bg-obsidian-subtle/30 bg-zinc-50 hover:border-brand/50 transition-colors duration-200 group">
            <div className="corner-mark corner-mark-neutral-tl"></div>
            <div className="corner-mark corner-mark-neutral-br"></div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-600 block mb-1">03 // DISTRIBUTED APIS</span>
            <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:text-brand transition-colors">MERN &amp; Payment Pipelines</div>
            <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-[11px] mt-0.5">Celebal Tech &amp; WebRTC Telemedicine</div>
          </div>

          <div className="relative p-4 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 bg-obsidian-subtle/30 dark:bg-obsidian-subtle/30 bg-zinc-50 hover:border-brand/50 transition-colors duration-200 group">
            <div className="corner-mark corner-mark-neutral-tl"></div>
            <div className="corner-mark corner-mark-neutral-br"></div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-600 block mb-1">04 // PRODUCTION RIGOR</span>
            <div className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:text-brand transition-colors">Zero Template Slop</div>
            <div className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-[11px] mt-0.5">Tested, modular, reproducible</div>
          </div>
        </div>
      </div>
    </section>
  );
};
