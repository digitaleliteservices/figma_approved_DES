import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectModal = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const servicesList = [
    'Strategy & Consulting',
    'UI/UX Design',
    'Full-Stack Technology',
    'Digital Marketing',
    'Workflow Automation',
  ];

  const budgetTiers = [
    '< $10,000',
    '$10k - $25,000',
    '$25k - $50,000',
    '$50k+',
  ];

  const [selectedService, setSelectedService] = useState(
    defaultService || 'Strategy & Consulting'
  );
  const [selectedBudget, setSelectedBudget] = useState('$10k - $25,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      // reset after a bit
    }, 4000);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
        >
          {/* Header Banner */}
          <div className="bg-[#0a1e38] text-white p-6 sm:p-7 relative">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb703] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Great</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start Your Project
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Tell us about your digital goals. We'll respond with a roadmap in 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-10 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Thank you, {name}!
              </h4>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                We've received your request for <strong>{selectedService}</strong>. Our lead strategist will reach out to <strong>{email}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="bg-[#ffb703] hover:bg-[#faa307] text-slate-900 font-bold px-8 py-3 rounded-full text-sm transition shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What service do you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition cursor-pointer ${
                        selectedService === service
                          ? 'bg-[#0066ff] text-white border-[#0066ff] shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Approximate Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedBudget(tier)}
                      className={`text-xs font-semibold py-2 px-2 text-center rounded-lg border transition cursor-pointer ${
                        selectedBudget === tier
                          ? 'bg-[#ffb703] text-slate-950 border-[#ffb703] font-bold shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tell us about your project
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Goals, timeline, or current challenges you're facing..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#ffb703] hover:bg-[#faa307] active:scale-99 text-slate-900 font-bold py-3.5 rounded-full shadow-md transition text-sm cursor-pointer"
              >
                <span>Submit Project Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
