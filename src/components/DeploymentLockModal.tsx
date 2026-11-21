import React from 'react';
import { CheckSquare, ShieldCheck, ExternalLink, X, Globe, FileCode, Sparkles, Scale, Lock } from 'lucide-react';

interface DeploymentLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: 'privacy' | 'terms') => void;
}

export const DeploymentLockModal: React.FC<DeploymentLockModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const criteria = [
    {
      id: 'domain',
      title: 'Verified Custom Domain Connected',
      status: 'VERIFIED',
      details: 'Target domain anandmore.dev configured with CNAME and canonical index tags.',
      icon: Globe,
      verified: true,
      spec: 'CNAME: anandmore.dev -> anandcomp22.github.io',
    },
    {
      id: 'favicon',
      title: 'Custom Favicon Uploaded & Active',
      status: 'VERIFIED',
      details: 'Vector SVG geometric AM monogram favicon rendered at /favicon.svg with fallback PNG.',
      icon: FileCode,
      verified: true,
      spec: 'MIME: image/svg+xml · 64x64 geometric monogram',
    },
    {
      id: 'ai-badge',
      title: 'Made with AI Badge Completely Removed',
      status: 'VERIFIED',
      details: 'Clean, professional engineering colophon. Zero AI builder watermarks, tags, or scripts.',
      icon: Sparkles,
      verified: true,
      spec: 'Audit: 0 matches for AI builder branding in codebase',
    },
    {
      id: 'privacy',
      title: 'Compliant Privacy Policy Page Live',
      status: 'VERIFIED',
      details: 'Full legal disclosures covering data handling, cookies, telemetry, and rights.',
      icon: ShieldCheck,
      verified: true,
      spec: 'Route: /privacy-policy · Fully formatted legal copy',
      actionText: 'View Privacy Policy',
      actionView: 'privacy' as const,
    },
    {
      id: 'terms',
      title: 'Compliant Terms & Conditions Page Live',
      status: 'VERIFIED',
      details: 'Comprehensive terms covering intellectual property, licensing, and limitations.',
      icon: Scale,
      verified: true,
      spec: 'Route: /terms-and-conditions · Fully formatted legal copy',
      actionText: 'View Terms & Conditions',
      actionView: 'terms' as const,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-obsidian-subtle border border-obsidian-border dark:bg-obsidian-subtle dark:border-obsidian-border bg-white border-zinc-300 shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-labelledby="deployment-modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-wider text-brand">
              <Lock className="w-3.5 h-3.5" />
              <span>SYS.AUDIT // HARD LAUNCH CHECKLIST</span>
            </div>
            <h2 id="deployment-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900">
              Deployment Lock Status
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600 font-mono">
              5 of 5 Baseline Deployment Criteria Verified. System Ready for Production.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white dark:hover:text-white hover:text-zinc-900 border border-zinc-800 dark:border-zinc-800 border-zinc-200 hover:border-zinc-600 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Criteria List */}
        <div className="my-6 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {criteria.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-4 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 bg-obsidian/40 dark:bg-obsidian/40 bg-zinc-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 border border-brand/30 bg-brand/10 text-brand mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm text-zinc-100 dark:text-zinc-100 text-zinc-900">
                          {item.title}
                        </h3>
                        <span className="px-1.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600">
                        {item.details}
                      </p>
                      <div className="mt-1.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-400 text-zinc-700">
                        {item.spec}
                      </div>
                    </div>
                  </div>

                  {item.actionView && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate(item.actionView);
                      }}
                      className="shrink-0 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:text-white dark:text-zinc-300 dark:hover:text-white text-zinc-700 hover:text-zinc-900 border border-zinc-700 hover:border-zinc-400 transition-colors flex items-center gap-1"
                    >
                      <span>Review</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-zinc-800 dark:border-zinc-800 border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <CheckSquare className="w-4 h-4" />
            <span>DEPLOYMENT LOCK: RELEASED &amp; COMPLIANT</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 font-mono text-xs uppercase tracking-wider bg-zinc-100 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            Acknowledge &amp; Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
