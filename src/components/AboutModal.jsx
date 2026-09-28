import React from 'react';
import { X, Award, Clock, Users2, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const AboutModal = ({
  isOpen,
  onClose,
  onStartProject,
  highlightedPillar,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleGoToAboutPage = () => {
    onClose();
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-8"
        >
          {/* Header */}
          <div className="bg-[#0a1e38] text-white p-6 sm:p-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffb703]">
                Our DNA & Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                More About DES
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Turning bold ideas into tangible, profitable market impact.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-[#0a1e38]">
                Built for Ambitious Businesses
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Digital Elite Services, we believe that modern digital solutions should not be mere decorative storefronts. Every line of code, strategic model, and design layout we construct exists to generate demonstrable enterprise value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Craftsmanship</h5>
                <p className="text-xs text-slate-600 mt-1">
                  Meticulous attention to typography, latency, conversion, and user delight.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <div className="w-8 h-8 rounded-lg bg-[#ffb703] text-slate-950 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Velocity & Trust</h5>
                <p className="text-xs text-slate-600 mt-1">
                  Predictable sprints, transparent communication, and rapid turnaround.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#0a1e38] text-white flex items-center justify-center mb-2">
                  <Users2 className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-slate-900 text-sm">Long-term Focus</h5>
                <p className="text-xs text-slate-600 mt-1">
                  Partnerships that last beyond launch with ongoing optimization and support.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white text-center">
              <p className="text-sm italic text-slate-200">
                "We don't just deliver projects; we build digital growth engines for our clients."
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleGoToAboutPage}
              className="text-sm font-semibold text-[#0066ff] hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full About Us Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-slate-900 font-bold px-6 py-2.5 rounded-full text-sm shadow-xs transition cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
