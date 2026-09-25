import React from 'react';
import {
  X,
  Crosshair,
  Palette,
  Code2,
  Send,
  Cog,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ServicesModal = ({
  isOpen,
  onClose,
  onSelectServiceToQuote,
  activeServiceName,
}) => {
  const services = [
    {
      name: 'Strategy',
      icon: Crosshair,
      tagline: 'Market positioning & digital growth roadmaps',
      points: [
        'Business model validation & competitor analysis',
        'Customer journey mapping & persona architecture',
        'Omnichannel acquisition & retention strategy',
      ],
    },
    {
      name: 'Design',
      icon: Palette,
      tagline: 'User-centric UI/UX and visual branding',
      points: [
        'Design systems & high-fidelity interactive prototypes',
        'Conversion-rate optimized product experiences',
        'Brand identities that command market trust',
      ],
    },
    {
      name: 'Technology',
      icon: Code2,
      tagline: 'Modern, high-performance web & mobile systems',
      points: [
        'React, TypeScript, Next.js & cloud infrastructure',
        'Resilient APIs, enterprise architecture & databases',
        'Blazing fast performance & responsive mobile design',
      ],
    },
    {
      name: 'Marketing',
      icon: Send,
      tagline: 'Measurable, data-backed demand generation',
      points: [
        'Search engine optimization (SEO) & search dominance',
        'Performance media & paid advertising scaling',
        'Content engines that attract qualified B2B/B2C leads',
      ],
    },
    {
      name: 'Automation',
      icon: Cog,
      tagline: 'Streamlined operations & intelligent workflows',
      points: [
        'Internal CRM & ERP workflow synchronizations',
        'Automated lead qualification & routing pipelines',
        'Cost-saving process optimizations',
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-8"
        >
          {/* Top Bar */}
          <div className="bg-[#0a1e38] text-white p-6 sm:p-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffb703]">
                Full-Service Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore Our Digital Services
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-lg">
                End-to-end capabilities tailored to propel brands to industry leadership.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
            {services.map((service) => {
              const Icon = service.icon;
              const isHighlight =
                activeServiceName &&
                service.name.toLowerCase() === activeServiceName.toLowerCase();

              return (
                <div
                  key={service.name}
                  className={`p-5 rounded-2xl border transition-all ${
                    isHighlight
                      ? 'border-[#0066ff] bg-blue-50/40 shadow-sm'
                      : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#0066ff] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-[#0a1e38]">
                            {service.name}
                          </h4>
                          {isHighlight && (
                            <span className="text-[10px] bg-[#0066ff] text-white font-bold px-2 py-0.5 rounded-full uppercase">
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm font-medium mt-0.5">
                          {service.tagline}
                        </p>
                        <ul className="mt-2.5 space-y-1.5">
                          {service.points.map((pt, i) => (
                            <li
                              key={i}
                              className="text-xs text-slate-500 flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectServiceToQuote(service.name)}
                      className="self-start sm:self-center shrink-0 inline-flex items-center gap-1.5 bg-[#ffb703] hover:bg-[#faa307] text-slate-900 font-bold px-4 py-2 rounded-full text-xs shadow-xs transition cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Bar */}
          <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Need a custom multi-discipline scope?
            </span>
            <button
              onClick={() => onSelectServiceToQuote('Custom Scope')}
              className="text-xs font-bold text-[#0066ff] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Consult with our architects</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
