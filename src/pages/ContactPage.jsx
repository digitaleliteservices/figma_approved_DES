import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, MessageSquare, Sparkles, ChevronDown } from 'lucide-react';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How fast can you begin our project?',
      a: 'We usually initiate discovery workshops within 48 to 72 hours following signed project scoping and milestone confirmation.',
    },
    {
      q: 'Do you offer ongoing website maintenance and retainer agreements?',
      a: 'Yes, we provide flexible monthly maintenance, security monitoring, Core Web Vitals optimization, and feature enhancements.',
    },
    {
      q: 'Who owns the intellectual property and code repository?',
      a: 'You do. Upon project completion and handover, 100% of the code, digital assets, designs, and credentials belong entirely to your company.',
    },
    {
      q: 'Can you work with our existing in-house engineering and marketing teams?',
      a: 'Absolutely. We seamlessly integrate into your existing Slack, Jira, GitHub, or Agile sprints to augment velocity.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-8 pb-20">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-4">
            GET IN TOUCH
          </span>
          <h1 className="section-title text-[#0c2340] mb-5">
            Let's Build Something Exceptional Together
          </h1>
          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto">
            Ready to scale your business with modern web solutions and targeted digital strategies? Drop us a line and receive a response within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0c2340] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
              <h3 className="section-title text-white text-2xl mb-6">
                Direct Contact
              </h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Connect with our partnership directors directly or schedule an exploratory video consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Us Directly</div>
                    <a href="mailto:info@digitaleliteservices.com" className="text-sm font-semibold hover:text-[#ffb703] transition-colors">
                      info@digitaleliteservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Call Our Office</div>
                    <a href="tel:+919876543210" className="text-sm font-semibold hover:text-[#ffb703] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Headquarters</div>
                    <div className="text-sm font-semibold">
                      Tech Park Tower, Innovation Square, Bangalore
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Working Hours</div>
                    <div className="text-sm font-semibold">
                      Monday – Friday: 9:00 AM – 6:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <h4 className="service-title text-[#0c2340] text-sm">
                  24-Hour Guaranteed Turnaround
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every project proposal request is reviewed by a Senior Technical Strategist who drafts an initial scope and estimation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="section-title text-[#0c2340] text-2xl mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="body-text text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for reaching out. One of our digital strategy directors will review your project details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="button bg-[#0c2340] text-white px-6 py-2.5 rounded-full text-sm cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="section-title text-[#0c2340] text-2xl mb-1">
                      Request a Project Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Fill out the form below and we will prepare a personalized project breakdown.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                      >
                        <option>Web Development</option>
                        <option>Digital Marketing</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>UI/UX Design</option>
                        <option>Cloud & Automation</option>
                        <option>Full Digital Transformation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                    >
                      <option>&lt; $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $35,000</option>
                      <option>$35,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your target timeline, key objectives, and any existing platforms..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="button w-full inline-flex items-center justify-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] py-4 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer"
                  >
                    <span>Send Project Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#0066ff] uppercase tracking-wider">
            COMMON QUESTIONS
          </span>
          <h2 className="section-title text-[#0c2340] text-2xl sm:text-3xl mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#0c2340]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
