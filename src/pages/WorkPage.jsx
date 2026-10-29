import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  Palette,
  Info,
  ChevronRight,
  Building2,
  ShieldCheck,
  Trophy,
  Users,
  TrendingUp,
  Star,
  User,
  Phone,
  Mail,
  Loader2,
  AlertCircle,
  PhoneCall,
  X,
  Maximize2,
} from 'lucide-react';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';
import { ClientsSection } from '../components/ClientsSection.jsx';
import { motion } from 'motion/react';
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_CASE_STUDIES,
  PORTFOLIO_SHOWCASE_ITEMS,
} from '../data/portfolioData.js';

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const navigate = useNavigate();

  // Portfolio Page Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const cleanedPhone = formData.phone.replace(/\D/g, '').slice(-10);
    if (cleanedPhone.length !== 10) {
      setSubmitError('Phone number must be exactly 10 digits.');
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phone: cleanedPhone,
      email: formData.email.trim(),
      service: 'Portfolio Page Lead',
      company: 'Portfolio Page Lead',
      source: 'Portfolio Page Lead',
      website: 'Portfolio Page Lead',
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
        });
      } else {
        setSubmitError(data?.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting portfolio lead:', error);
      setSubmitError('Unable to send inquiry. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filters = PORTFOLIO_FILTERS;
  const caseStudies = PORTFOLIO_CASE_STUDIES;
  const showcaseItems = PORTFOLIO_SHOWCASE_ITEMS;

  const filteredCaseStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(activeFilter)
          : item.category === activeFilter
      );

  const filteredShowcase = activeFilter === 'all'
    ? showcaseItems
    : showcaseItems.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(activeFilter)
          : item.category === activeFilter
      );

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* ------------------------------------------------------------- */}
      {/* EXACT RADIAL GRADIENT ORB BACKGROUND SHAPES (MATCHING CONTACTPAGE) */}
      {/* ------------------------------------------------------------- */}
      {/* <div
        className="absolute -top-10 -left-28 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-[182.5px_182.5px_0px_182.5px] pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      />
      <div
        className="absolute top-12 -right-24 w-[340px] sm:w-[460px] h-[360px] sm:h-[431px] rounded-[182.5px_182.5px_0px_182.5px] pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      />
      <div
        className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      />
      <div
        className="absolute top-[1100px] -right-28 w-[400px] sm:w-[540px] h-[400px] sm:h-[540px] rounded-full pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      />
      <div
        className="absolute top-[2000px] -left-24 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      />
      <div
        className="absolute bottom-20 -right-24 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none z-0 opacity-85"
        style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
      /> */}

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION & PROVEN TACTICS CARD                          */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Top Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-[6px] rounded-full bg-white/90 border border-[#D5E6FE] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px] max-w-full">
                <span className="w-[8px] h-[8px] rounded-full bg-[#10B981] shrink-0" />
                <Sparkles className="w-4 h-4 text-[#0878F9] shrink-0" />
                <span className="font-extrabold text-[11px] sm:text-[12px] leading-tight tracking-[0.4px] sm:tracking-[0.65px] uppercase text-[#0878F9]">
                  CASE STUDIES & SUCCESS STORIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] xl:text-[46px] font-bold text-[#062A78] tracking-[-0.035em] mb-5 sm:mb-6">
                Architects of <span className="text-[#0878F9]">Digital Distinction</span> — Case Studies
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-[16px] leading-relaxed sm:leading-[26px] font-medium text-[#1E3B68] max-w-2xl">
                Transforming ambitious visions into high-impact digital products through design excellence, performance engineering, and scalable growth strategies for fast-growing enterprise & high-growth brands.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#082D72]">
                  <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                  <span>Custom Architected & Scalable Solutions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#082D72]">
                  <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                  <span>Measured Performance & Growth Metrics</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#082D72] sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0878F9] shrink-0" />
                  <span>100% Dedicated In-House Development Team</span>
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFB703] hover:bg-[#FAA307] text-[#082D72] px-7 py-3.5 rounded-full font-extrabold text-sm shadow-[0px_4px_14px_rgba(255,183,3,0.3)] transition-all transform hover:scale-[1.02] cursor-pointer text-center"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Social Proof Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Client avatar"
                    />
                    <img
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Client avatar"
                    />
                    <img
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                      alt="Client avatar"
                    />
                  </div>
                  <div className="text-xs font-semibold text-[#587BA5]">
                    <span className="block font-extrabold text-[#082D72]">Trusted by 100+</span>
                    Enterprise Brands
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Floating Tactics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-white/90 backdrop-blur-[12px] rounded-[24px] p-6 sm:p-7 border border-[#E2EDF8] shadow-[0px_8px_32px_rgba(8,45,114,0.06)] relative">
                <div className="flex items-center justify-between border-b border-[#EEF6FF] pb-4 mb-5">
                  <h3 className="font-extrabold text-[#082D72] text-base sm:text-lg">
                    Proven Tactics
                  </h3>
                  <button
                    onClick={() => navigate("/contact")}
                    className="text-xs font-black text-[#0878F9] hover:underline transition flex items-center gap-1 cursor-pointer uppercase tracking-wider"
                  >
                    <span>VIEW REPORT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Tactic 1 */}
                <div className="flex items-start gap-4 mb-5 group cursor-pointer" onClick={() => onStartProject?.('Web Design & Dev')}>
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center group-hover:bg-[#0878F9] group-hover:text-white transition-colors shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#082D72] group-hover:text-[#0878F9] transition-colors">
                      Web Design & Development
                    </h4>
                    <p className="text-xs font-medium text-[#587BA5] mt-1 leading-relaxed">
                      Beautiful, high-converting digital interfaces engineered for speed, responsiveness, and conversion.
                    </p>
                  </div>
                </div>

                {/* Tactic 2 */}
                <div className="flex items-start gap-4 mb-5 group cursor-pointer" onClick={() => onStartProject?.('Custom SaaS Architecture')}>
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center group-hover:bg-[#0878F9] group-hover:text-white transition-colors shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#082D72] group-hover:text-[#0878F9] transition-colors">
                      Custom SaaS & Product Architecture
                    </h4>
                    <p className="text-xs font-medium text-[#587BA5] mt-1 leading-relaxed">
                      Bespoke web applications built with scalable cloud architecture and low-latency APIs.
                    </p>
                  </div>
                </div>

                {/* Tactic 3 */}
                <div className="flex items-start gap-4 group cursor-pointer" onClick={() => onStartProject?.('Brand & Strategy')}>
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] flex items-center justify-center group-hover:bg-[#0878F9] group-hover:text-white transition-colors shrink-0">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#082D72] group-hover:text-[#0878F9] transition-colors">
                      Brand Strategy & Identity
                    </h4>
                    <p className="text-xs font-medium text-[#587BA5] mt-1 leading-relaxed">
                      Iconic visual design and design systems that leave a lasting market footprint.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. STATS BANNER BAR (Full Width)                              */}
      {/* ------------------------------------------------------------- */}
      <StatsBannerBar
        stats={[
          {
            icon: Trophy,
            number: '500+',
            label: 'Successful Projects Delivered',
          },
          {
            icon: Users,
            number: '98%',
            label: 'Client Retention Rate',
          },
          {
            icon: TrendingUp,
            number: '₹3.8 Cr+',
            label: 'Revenue Generated for Clients',
          },
          {
            icon: Star,
            number: '100%',
            label: 'On-Time Delivery Rate',
          },
        ]}
      />

      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] text-[12px] font-black px-3.5 py-[6px] rounded-full inline-block mb-2 uppercase tracking-[1.2px]">
              PORTFOLIO & WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082D72]">
              Client Case Studies
            </h2>
            <p className="text-[#587BA5] text-xs sm:text-sm font-medium max-w-xl mt-2">
              Explore our latest client work across custom Web Apps, SaaS platforms, Brand Identity, and Growth Engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${activeFilter === filter.id
                    ? 'bg-[#0878F9] text-white shadow-[0px_4px_14px_rgba(8,120,249,0.3)]'
                    : 'bg-white/90 border border-[#D5E6FE] text-[#082D72] hover:bg-[#EEF6FF]'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Case Study Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCaseStudies.map((study, index) => {
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-[12px] rounded-[24px] overflow-hidden border border-[#E2EDF8] shadow-[0px_6px_24px_rgba(8,45,114,0.06)] hover:shadow-[0px_16px_40px_rgba(8,45,114,0.12)] transition-shadow duration-300 flex flex-col group"
              >
                {/* Card Image Container */}
                <div
                  onClick={() => setSelectedArtwork(study)}
                  className="relative h-60 overflow-hidden bg-slate-100 cursor-pointer group/img"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                  />

                  {/* Top Left Tag Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-[6px] border border-[#D5E6FE] px-3 py-1 rounded-full text-[10px] font-black text-[#082D72] tracking-wider uppercase shadow-xs">
                    {study.tagBadge}
                  </div>

                  {/* Hover Overlay with Preview */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-[#082D72] px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#0878F9]" />
                      <span>Preview Artwork</span>
                    </span>
                  </div>

                  {/* Bottom Right Banner Action */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArtwork(study);
                    }}
                    className="absolute bottom-3 right-3 bg-[#082D72] text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold flex items-center gap-1.5 hover:bg-[#0878F9] transition-colors cursor-pointer shadow-md z-10"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    {/* Category & Client Subtitle */}
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <span className="text-[11px] font-black text-[#0878F9] tracking-[0.8px] uppercase">
                        {study.subtitle}
                      </span>
                      {study.client && (
                        <span className="text-[10px] font-bold text-slate-500 truncate max-w-[130px]">
                          {study.client}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setSelectedArtwork(study)}
                      className="text-lg font-black text-[#082D72] mb-2 group-hover:text-[#0878F9] transition-colors cursor-pointer"
                    >
                      {study.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs font-medium text-[#587BA5] leading-relaxed mb-4 line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold bg-[#EEF6FF] text-[#0878F9] px-2.5 py-1 rounded-md border border-[#D5EBFF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Link */}
                  <div className="pt-4 border-t border-[#EEF6FF] flex items-center justify-between text-xs font-bold text-[#082D72]">
                    <button
                      onClick={() => setSelectedArtwork(study)}
                      className="inline-flex items-center gap-1.5 text-[#082D72] hover:text-[#0878F9] transition cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <Info className="w-3.5 h-3.5 text-[#0878F9]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. VISUAL SHOWCASE SECTION (4x3 Grid of 12 Projects)          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative z-10 my-6 sm:my-8">

        {/* Background Radial Orbs for Visual Showcase */}
        {/* <div
          className="absolute -top-10 -left-28 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full pointer-events-none -z-10 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute -bottom-10 -right-28 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none -z-10 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        /> */}

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] text-[12px] font-black px-3.5 py-[6px] rounded-full inline-block mb-1 uppercase tracking-[1.2px]">
              EXPERT SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#082D72]">
              Visual Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#587BA5] font-medium mt-1">
              A quick visual snapshot of our recent work across web design, mobile apps, branding campaigns, and custom software.
            </p>
          </div>

          <span className="text-xs font-bold text-[#587BA5] self-start sm:self-auto">
            Showing {filteredShowcase.length} of {showcaseItems.length} Projects
          </span>
        </div>

        {/* Visual Showcase Grid Items (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredShowcase.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArtwork(item)}
              className="bg-white rounded-[22px] overflow-hidden border border-[#E2EDF8] shadow-[0px_4px_16px_rgba(8,45,114,0.05)] hover:shadow-[0px_14px_32px_rgba(8,45,114,0.12)] transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Container with portrait poster aspect ratio */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-[6px] border border-[#D5E6FE] px-2.5 py-0.5 rounded-full text-[9px] font-black text-[#082D72] uppercase tracking-wider shadow-xs">
                  {item.badge}
                </div>
                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031535]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00d2ff]" />
                    <span>View Full Creative</span>
                  </span>
                </div>
              </div>

              {/* Title Content */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  {item.client && (
                    <span className="text-[10px] font-extrabold text-[#587BA5] block mb-1 uppercase tracking-wider truncate">
                      {item.client}
                    </span>
                  )}
                  <h4 className="text-xs sm:text-[13px] font-extrabold text-[#082D72] group-hover:text-[#0878F9] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] text-[#0878F9] font-bold mt-2.5 flex items-center gap-1">
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. OUR CLIENTS (Opposing Continuous Logo Marquees)             */}
      {/* ------------------------------------------------------------- */}
      <ClientsSection />

      {/* 6. PORTFOLIO PAGE LEAD SECTION */}
      <section id="portfolio-lead" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 relative z-10">
        <div
          className="rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
        >
          {/* Ambient background shapes matching theme */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading and info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xs text-[#FFC400] text-[11px] sm:text-[12px] font-black uppercase tracking-[1.2px]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC400]" />
                <span>PORTFOLIO PAGE LEAD</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] lg:leading-[48px] font-black text-white tracking-tight sm:tracking-[-1.2px]">
                Loved Our Portfolio? Let's Build Yours.
              </h2>

              <p className="text-[#E2E8F0] text-xs sm:text-[15px] leading-relaxed sm:leading-[24px] font-medium">
                Submit your inquiry below. Our strategy and engineering experts will analyze your requirements and get back to you within 2 business hours.
              </p>

              {/* Trust highlights */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                  <span>Free Initial Strategy Audit & Quote</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                  <span>2-Hour Guaranteed Response Time</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                  <span>End-to-End Design & Technical Execution</span>
                </div>
              </div>

              {/* Direct Reach */}
              <div className="pt-4 border-t border-white/15 w-full flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-slate-300">
                <a
                  href="tel:+916366930178"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FFC400]" />
                  <span>+91 6366930178</span>
                </a>
                <span>•</span>
                <a
                  href="mailto:info@digitaleliteservices.in"
                  className="hover:text-white transition flex items-center gap-1.5 break-all xs:break-normal"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FFC400]" />
                  <span>info@digitaleliteservices.in</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Lead Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="bg-white/95 backdrop-blur-[20px] rounded-[20px] sm:rounded-[28px] p-5 sm:p-7 md:p-9 border border-[#E2EDF8] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] text-[#0c2340]">
                
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#082D72] mb-2">
                      Portfolio Lead Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you{lastSubmittedData?.name ? `, ${lastSubmittedData.name}` : ''}! We've received your project inquiry. Our team will review your requirements and get back to you within 2 business hours{lastSubmittedData?.email ? ` at ${lastSubmittedData.email}` : ''}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setSubmitError(null);
                      }}
                      className="bg-[#0878F9] hover:bg-[#0066ff] text-white px-6 py-2.5 rounded-full text-xs font-bold cursor-pointer transition shadow-md inline-flex items-center gap-2"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-[11px] font-black text-[#0878F9] uppercase tracking-[0.6px] block mb-1">
                        GET A PROPOSAL
                      </span>
                      <h3 className="text-2xl font-black text-[#082D72]">
                        Start Your Project
                      </h3>
                      <p className="text-xs font-medium text-[#587BA5] mt-1">
                        Fill in your details below and we'll connect with you right away.
                      </p>
                    </div>

                    {submitError && (
                      <div className="mb-5 p-3.5 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold">Submission Failed</div>
                          <div className="text-red-600 text-xs mt-0.5">{submitError}</div>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* FULL NAME */}
                      <div>
                        <label className="block text-[11px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#0878F9]" />
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Verma"
                          className="w-full px-4 py-3 rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                        />
                      </div>

                      {/* 2-COL ROW: PHONE & EMAIL */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#0878F9]" />
                            PHONE NUMBER *
                          </label>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '');
                              setFormData({ ...formData, phone: val });
                            }}
                            placeholder="10-digit number (e.g. 9876543210)"
                            className="w-full px-4 py-3 rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-extrabold text-[#082D72] uppercase tracking-[0.6px] mb-1 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#0878F9]" />
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rahul@company.com"
                            className="w-full px-4 py-3 rounded-[12px] bg-[#FBFDFF] border border-[#D5EBFF] text-sm text-slate-800 placeholder-[#9CA3AF] focus:outline-none focus:border-[#0878F9] transition"
                          />
                        </div>
                      </div>

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full hover:opacity-95 text-white font-black text-[14px] leading-[20px] py-3.5 rounded-[12px] shadow-[0px_6px_20px_rgba(8,120,249,0.3)] transition cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(90deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 fill-white" />
                            <span>Send Project Inquiry</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE ARTWORK LIGHTBOX MODAL                            */}
      {/* ------------------------------------------------------------- */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-[#031535]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Left: High-Res Image Container */}
            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-3 sm:p-5 max-h-[36vh] sm:max-h-[46vh] md:max-h-[85vh] shrink-0 overflow-hidden">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="max-h-[34vh] sm:max-h-[42vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Info and Inquire Action */}
            <div className="md:w-2/5 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-white overflow-y-auto max-h-[56vh] md:max-h-[85vh]">
              <div>
                <span className="text-[10px] font-extrabold text-[#0878F9] tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">
                  {selectedArtwork.tagBadge || selectedArtwork.badge || 'CLIENT WORK'}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-[#082D72] leading-snug mb-2">
                  {selectedArtwork.title}
                </h3>

                {selectedArtwork.client && (
                  <p className="text-xs font-bold text-slate-500 mb-4">
                    Client: <span className="text-[#0878F9]">{selectedArtwork.client}</span>
                  </p>
                )}

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedArtwork.summary || 'Custom creative campaign designed, art-directed, and deployed by Digital Elite Services for brand positioning, local acquisition, and high-performance lead generation.'}
                </p>

                {selectedArtwork.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedArtwork.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold bg-[#EEF6FF] text-[#0878F9] px-2.5 py-1 rounded-md border border-[#D5EBFF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setSelectedArtwork(null);
                    navigate('/contact');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB703] hover:bg-[#FAA307] text-[#082D72] font-black text-sm py-3.5 rounded-full shadow-[0px_4px_14px_rgba(255,183,3,0.3)] transition cursor-pointer"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="w-full text-center text-xs font-bold text-slate-400 hover:text-slate-600 py-1 transition cursor-pointer"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
