import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ChevronDown,
  ArrowRight,
  User,
  Tag,
  ExternalLink,
  Building2,
  Zap,
  ShieldCheck,
  Globe,
  Loader2,
  AlertCircle,
} from 'lucide-react';

const SERVICES_LIST = [
  'Digital Marketing',
  'Social Media Marketing',
  'Web Development',
  'Graphic Design',
  'Lead Generation',
  'SEO Optimization',
  'Other / Custom Solution',
];

export function ContactPage({ onStartProject }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialService = location.state?.service || searchParams.get('service') || '';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    website: '',
    service: initialService,
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How quickly will the Digital Elite Services team respond to my message?',
      a: 'We respond to all inquiries within 2 business hours. For urgent project inquiries, you can also reach us directly via WhatsApp or our phone hotline.',
    },
    {
      q: 'Do you offer free campaign or website strategy consultations?',
      a: 'Yes! We offer a 100% free, no-obligation 30-minute discovery session and initial digital strategy audit for all potential clients.',
    },
    {
      q: 'Can we schedule an in-person meeting in Bangalore?',
      a: 'Absolutely. We welcome in-person meetings at our Bangalore Headquarters in Enterprise Tower, or we can meet at your office location anywhere within Bangalore.',
    },
    {
      q: 'Do you serve clients outside of Bangalore and internationally?',
      a: 'Yes, over 60% of our clients are based across North America, Europe, the Middle East, and Asia-Pacific. We operate with seamless remote collaboration and flexible time zone support.',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const cleanedPhone = formData.phone.replace(/\D/g, '').slice(-10);
    const payload = {
      name: formData.name.trim(),
      phone: cleanedPhone || formData.phone.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      website: formData.website.trim(),
      service: formData.service,
    };

    try {
       const response = await fetch('https://server.plumeriaresort.in/digitaleliteservice/sendMail', {
      //const response = await fetch('http://localhost:5000/digitaleliteservice/sendMail', {
       method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== false) {
        setLastSubmittedData(payload);
        setFormSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          website: '',
          service: '',
        });
      } else {
        setSubmitError(data?.message || 'Failed to send your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('Unable to send inquiry. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#0c2340] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-transparent z-10">
        {/* Section Decorative Background Shapes */}
        <div
          className="absolute -top-10 -left-28 w-[320px] sm:w-[365px] h-[320px] sm:h-[365px] rounded-[182.5px_182.5px_0px_182.5px] pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute top-12 -right-24 w-[320px] sm:w-[365px] h-[360px] sm:h-[431px] rounded-[182.5px_182.5px_0px_182.5px] pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute top-44 sm:top-[220px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-[20px]">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/90 border border-[#D5E6FE] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#10B981] shrink-0" />
            <Sparkles className="w-4 h-4 text-[#0878F9]" />
            <span className="font-extrabold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#0878F9]">
              GET IN TOUCH WITH US • 2-HOUR RESPONSE GUARANTEE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="flex flex-wrap justify-center items-center gap-x-2.5 text-3xl sm:text-5xl lg:text-[56px] font-black leading-tight lg:leading-[56px] tracking-[-1.8px] text-center">
            <span className="text-[#082D72]">Contact</span>
            <span className="text-[#0878F9]">Digital Elite</span>
            <span className="text-[#082D72]">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-[672px] mx-auto text-[17px] leading-[27px] font-medium text-[#1E3B68] text-center">
            Have a question or want to discuss a new project? Drop us a message below or connect directly with our Bangalore team.
          </p>

          {/* 3 Feature Badges (Stacked 2-row layout matching Image 1) */}
          <div className="flex flex-col items-center gap-3">
            {/* Row 1: Badges 1 & 2 */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <div className="bg-white/90 backdrop-blur-[6px] px-4 py-2 rounded-full border border-[#D5EBFF] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0878F9]" />
                <span className="font-bold text-[12px] leading-[16px] text-[#082D72]">2-Hour SLA</span>
                <span className="font-medium text-[12px] leading-[16px] text-[#587BA5]">(Quick Response)</span>
              </div>
              <div className="bg-white/90 backdrop-blur-[6px] px-4 py-2 rounded-full border border-[#D5EBFF] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0878F9]" />
                <span className="font-bold text-[12px] leading-[16px] text-[#082D72]">Free Consultation</span>
                <span className="font-medium text-[12px] leading-[16px] text-[#587BA5]">(No Obligation)</span>
              </div>
            </div>

            {/* Row 2: Badge 3 (Centered below) */}
            <div className="bg-white/90 backdrop-blur-[6px] px-4 py-2 rounded-full border border-[#D5EBFF] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0878F9]" />
              <span className="font-bold text-[12px] leading-[16px] text-[#082D72]">Bangalore HQ</span>
              <span className="font-medium text-[12px] leading-[16px] text-[#587BA5]">(In-Person Meetings)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION (DIRECT CONTACT INFO & FORM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        {/* Section Background Shapes */}
        <div
          className="absolute top-1/4 -left-24 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute bottom-6 -right-20 w-[300px] sm:w-[387px] h-[300px] sm:h-[374px] rounded-full pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
          
          {/* LEFT COLUMN: DIRECT CONTACT INFO */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] text-[12px] font-black px-3.5 py-[6px] rounded-full inline-block mb-3 uppercase tracking-[1.2px]">
                DIRECT CONTACT INFO
              </span>
              <h2 className="text-[30px] leading-[36px] font-black text-[#082D72] tracking-tight mb-2">
                Reach Us Directly
              </h2>
              <p className="text-[12px] leading-[20px] font-medium text-[#587BA5]">
                Connect with our team through phone, WhatsApp, email, or visit our headquarters in Bangalore.
              </p>
            </div>

            {/* CARD 1: PHONE / HOTLINE */}
            <div className="bg-white/90 backdrop-blur-[12px] rounded-[16px] p-6 border border-[#E2EDF8] shadow-[0px_8px_24px_rgba(8,45,114,0.06)] flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[12px] font-black text-[#082D72] tracking-[0.6px] uppercase">
                      PHONE / HOTLINE
                    </span>
                    <span className="bg-[#D1FAE5] text-[#059669] text-[10px] font-bold px-2 py-[2px] rounded-full">
                      Mon - Sat (9am - 7pm)
                    </span>
                  </div>
                  <a href="tel:+916366930178" className="text-[20px] leading-[28px] font-black text-[#0878F9] hover:underline block mb-0.5">
                    +91 6366930178
                  </a>
                  <div className="text-[12px] leading-[16px] font-bold text-[#475569]">+91 63669 30178</div>
                </div>
              </div>
            </div>

            {/* CARD 2: EMAIL ADDRESS */}
            <div className="bg-white/90 backdrop-blur-[12px] rounded-[16px] p-6 border border-[#E2EDF8] shadow-[0px_8px_24px_rgba(8,45,114,0.06)] flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[12px] font-black text-[#082D72] tracking-[0.6px] uppercase">
                      EMAIL ADDRESS
                    </span>
                    <button
                      onClick={() => navigator.clipboard?.writeText('info@digitaleliteservices.in')}
                      className="bg-[#EFF6FF] text-[#0878F9] text-[10px] font-bold px-2.5 py-[2px] rounded-full cursor-pointer hover:bg-blue-100 transition"
                    >
                      Copy
                    </button>
                  </div>
                  <a href="mailto:info@digitaleliteservices.in" className="text-[14px] leading-[20px] font-black text-[#0878F9] hover:underline block mb-0.5">
                    info@digitaleliteservices.in
                  </a>
                  {/* <div className="text-[12px] leading-[16px] font-bold text-[#475569]">contact@digitaleliteservices.in</div> */}
                </div>
              </div>
            </div>

            {/* CARD 3: INSTANT WHATSAPP (GRADIENT CARD) */}
            <div
              className="rounded-[16px] p-6 text-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] relative overflow-hidden"
              style={{ background: 'linear-gradient(90deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-extrabold tracking-[0.6px] text-[#FFC400] uppercase flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FFC400] fill-[#FFC400]" /> INSTANT WHATSAPP
                </span>
                <span className="flex items-center gap-1.5 text-[12px] font-bold text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" /> Online
                </span>
              </div>
              <h3 className="text-[18px] leading-[25px] font-black text-white mb-1">
                Need a quick response?
              </h3>
              <p className="text-[12px] leading-[16px] font-medium text-[#E2E8F0] mb-5">
                Chat directly with our team on WhatsApp for instant assistance.
              </p>
              <a
                href="https://wa.me/916366930178"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-[12px] py-[11px] px-5 rounded-full inline-flex items-center gap-2 transition shadow-md cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CARD 4: BANGALORE HEADQUARTERS */}
            <div className="bg-white/90 backdrop-blur-[12px] rounded-[16px] p-6 border border-[#E2EDF8] flex items-start gap-4">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[12px] font-extrabold text-[#082D72] tracking-[0.6px] uppercase mb-1">
                  BANGALORE HEADQUARTERS
                </div>
                <div className="text-[12px] leading-[20px] font-medium text-[#587BA5]">
                  1ˢᵗ Floor, Sathya Heritage, 2574, 8ᵗʰ Cross, 13ᵗʰ Main, E Block, Sahakarnagar, Bengaluru, Karnataka 560092.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SEND A MESSAGE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-[20px] rounded-[32px] p-8 sm:p-10 border border-[#E2EDF8] shadow-[0px_25px_60px_rgba(8,120,249,0.12)] relative">
              <span className="text-[12px] font-black text-[#0878F9] uppercase tracking-[0.6px] block mb-1">
                SEND A MESSAGE
              </span>
              <h2 className="text-[30px] leading-[36px] font-black text-[#082D72] mb-1">
                Get in Touch
              </h2>
              <p className="text-[12px] leading-[16px] font-medium text-[#587BA5] mb-8">
                Fill out the basic details below and we will get back to you within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#082D72] mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you{lastSubmittedData?.name ? `, ${lastSubmittedData.name}` : ''}! We have received your request
                    {lastSubmittedData?.service ? (
                      <> for <strong className="text-[#082D72] font-bold">{lastSubmittedData.service}</strong></>
                    ) : ''}. Our team will review your inquiry and get back to you within 2 business hours{lastSubmittedData?.email ? ` at ${lastSubmittedData.email}` : ''}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="bg-[#0878F9] hover:bg-[#0066ff] text-white px-6 py-2.5 rounded-full text-xs font-bold cursor-pointer transition shadow-md inline-flex items-center gap-2"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <div className="p-4 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Submission Failed</div>
                        <div className="text-red-600 mt-0.5">{submitError}</div>
                      </div>
                    </div>
                  )}

                  {/* FULL NAME */}
                  <div>
                    <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0878F9]" />
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Verma"
                      className="w-full px-4 py-[15px] rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                    />
                  </div>

                  {/* 2-COL ROW: EMAIL & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#0878F9]" />
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-[15px] rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#0878F9]" />
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 63669 30178"
                        className="w-full px-4 py-[15px] rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                      />
                    </div>
                  </div>

                  {/* 2-COL ROW: COMPANY & WEBSITE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#0878F9]" />
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corporation"
                        className="w-full px-4 py-[15px] rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#0878F9]" />
                        WEBSITE
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="e.g. https://yourcompany.com"
                        className="w-full px-4 py-[15px] rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                      />
                    </div>
                  </div>

                  {/* SERVICES DROPDOWN */}
                  <div>
                    <label className="block text-[12px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0878F9]" />
                      SELECT SERVICE *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-[15px] pr-10 rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm focus:outline-none focus:border-[#0878F9] transition appearance-none cursor-pointer ${
                          formData.service ? 'text-slate-800 font-medium' : 'text-[#9CA3AF]'
                        }`}
                      >
                        <option value="" disabled className="text-slate-400">
                          Select a service...
                        </option>
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv} value={srv} className="text-slate-800 py-1 font-normal">
                            {srv}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0878F9]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hover:opacity-95 text-white font-black text-[14px] leading-[20px] py-4 rounded-[12px] shadow-[0px_6px_20px_rgba(8,120,249,0.3)] transition cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(90deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-white" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION: LOCAL BANGALORE PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Section Background Shape */}
        <div
          className="absolute -top-12 -left-20 w-[300px] sm:w-[387px] h-[300px] sm:h-[374px] rounded-full pointer-events-none z-0 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />

        <div className="bg-white/95 backdrop-blur-[12px] rounded-[28px] p-8 lg:p-12 border border-[#E2EDF8] shadow-[0px_12px_36px_rgba(8,45,114,0.06)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] text-[12px] font-black px-3.5 py-1 rounded-full inline-block mb-4 uppercase tracking-[1.2px]">
                LOCAL BANGALORE PRESENCE
              </span>
              <h2 className="text-[24px] leading-[32px] font-black text-[#082D72] mb-3 tracking-tight">
                Based in India's Premier Tech Hub
              </h2>
              <p className="text-[12px] leading-[20px] font-medium text-[#587BA5] mb-6 max-w-xl">
                Our core team operates right out of Bangalore, Karnataka. We frequently meet with founders and enterprise brands across Indiranagar, HSR Layout, Koramangala, & Whitefield.
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-2">
                {['Indiranagar', 'HSR Layout', 'Whitefield', 'Koramangala'].map((loc) => (
                  <span key={loc} className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#082D72] font-bold text-[12px] px-3 py-1 rounded-[8px]">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card: Dark Hub Card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-[16px] p-7 text-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-extrabold text-white uppercase tracking-[0.7px] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#FFC400]" />
                    ENTERPRISE HUB SUITE 402
                  </span>
                  <span className="bg-[rgba(16,185,129,0.2)] border border-[rgba(52,211,153,0.3)] text-[#6EE7B7] text-[12px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" /> Open Today
                  </span>
                </div>

                <div className="space-y-1 mb-6">
                  <div className="text-[12px] font-semibold text-white">
                    Digital Elite Services Headquarters
                  </div>
                  <div className="text-[12px] font-normal text-[#E2E8F0]">
                    Enterprise Tower, Business Hub, Suite 402, Bangalore, India - 560001
                  </div>
                  <div className="text-[12px] font-normal text-[#CBD5E1] pt-1">
                    Phone: +91 6366930178 | Email: info@digitaleliteservices.in
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[12px]">
                  <span className="font-bold text-[#CBD5E1]">
                    Visiting Hours: Mon - Sat (9am - 7pm)
                  </span>
                  <a
                    href="https://maps.google.com/?q=Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FFC400] hover:underline flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFC400]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        {/* Section Background Shapes */}
        <div
          className="absolute top-0 -left-24 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full pointer-events-none z-0 opacity-75"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] rounded-full pointer-events-none z-0 opacity-75"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />

        <div className="text-center mb-10 relative z-10">
          <span className="bg-white border border-[#D5EBFF] text-[#0878F9] text-[12px] font-extrabold px-3.5 py-1 rounded-full inline-block mb-3 uppercase tracking-[1.2px]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-[30px] leading-[36px] font-black text-[#082D72] tracking-tight">
            Got Questions Before Contacting Us?
          </h2>
        </div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-[6px] rounded-[16px] border border-[#E2EDF8] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-extrabold text-[16px] leading-[24px] text-[#082D72] hover:text-[#0878F9] transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EEF6FF] flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-[#0878F9] text-white rotate-180' : 'text-[#0878F9]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 bg-white/50 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SECTION: INITIATE YOUR GROWTH PARTNERSHIP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-[#0878F9] rounded-[32px] p-10 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
         style={{ background: 'linear-gradient(90deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
        >
          {/* Ambient shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/20 rounded-full filter blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="bg-white/10 border border-white/20 text-[#FFC400] text-[12px] font-black px-4 py-1.5 rounded-full inline-block uppercase tracking-[1.2px]">
              READY TO SCALE REVENUE?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[48px] font-black text-white tracking-[-1.2px] max-w-3xl">
              Initiate Your Growth Partnership With Digital Elite Services.
            </h2>

            <p className="text-[#E2E8F0] max-w-2xl text-[16px] leading-[24px] font-medium">
              Contact Digital Elite Services today for a free custom audit and strategy roadmap tailored to your business goals.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <button
                onClick={() => onStartProject?.()}
                className="bg-[#FFC400] hover:bg-[#faa307] text-[#082D72] font-black text-[16px] leading-[24px] px-9 py-4 rounded-full shadow-[0px_8px_25px_rgba(255,196,0,0.45)] transition cursor-pointer flex items-center gap-2"
              >
                <span>Call Us Now: +91 6366930178</span>
                <ArrowRight className="w-4 h-4 text-[#082D72]" />
              </button>

              <a
                href="mailto:info@digitaleliteservices.in"
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-[6px] text-white font-bold text-[16px] leading-[24px] px-7 py-4 rounded-full transition cursor-pointer"
              >
                Email: info@digitaleliteservices.in
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}