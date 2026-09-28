import React, { useState } from 'react';
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
} from 'lucide-react';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function WorkPage({ onStartProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'brand', label: 'Brand Strategy' },
    { id: 'engineering', label: 'Custom Engineering' },
  ];

  // 8 Main Client Case Studies matching reference image cards
  const caseStudies = [
    {
      id: 1,
      category: 'web',
      tagBadge: 'ECOMMERCE & RETAIL',
      subtitle: 'FRONTEND & HEADLESS',
      title: 'Return to Headless Platform',
      summary: 'Migrated an omnichannel luxury retailer from legacy monolith to a headless React storefront, eliminating cart friction and boosting mobile conversions by 180%.',
      tags: ['Next.js', 'Shopify API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 2,
      category: 'engineering',
      tagBadge: 'FINTECH & ANALYTICS',
      subtitle: 'PREDICTIVE DATA & AI ENGINE',
      title: 'Predictive Growth Engine',
      summary: 'Built real-time financial dashboards handling thousands of live concurrent telemetry events with zero client-side latency and automated forecasting.',
      tags: ['React', 'TypeScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 3,
      category: 'brand',
      tagBadge: 'LUXURY REAL ESTATE',
      subtitle: 'LUXURY REAL ESTATE BRAND',
      title: 'Real Estate Poster Design',
      summary: 'Architectural branding and high-converting promotional campaign for a multi-million luxury residential development project.',
      tags: ['Figma', 'Branding', '3D Render', 'Print'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 4,
      category: 'web',
      tagBadge: 'PROPTECH & LANDING',
      subtitle: 'B2B BRANDING & LANDING PAGE',
      title: 'TaskCrate Landing Page',
      summary: 'Redesigned core conversion funnels for a high-growth PropTech startup, resulting in 4.2x increase in demo bookings within 30 days.',
      tags: ['Next.js', 'Tailwind', 'Framer', 'SEO'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 5,
      category: 'engineering',
      tagBadge: 'SAAS & GROWTH',
      subtitle: 'OMNICHANNEL GROWTH',
      title: 'Omni-Channel Growth Strategy',
      summary: 'Multi-channel acquisition pipeline and analytics architecture integrated across digital ad platforms and custom web portals.',
      tags: ['Analytics', 'Growth', 'Google Ads', 'HubSpot'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 6,
      category: 'web',
      tagBadge: 'CORPORATE & ENTERPRISE',
      subtitle: 'HIGH-PERFORMANCE REAL ESTATE',
      title: 'High-Performance Real Estate Website',
      summary: 'Built an ultra-fast corporate web portal featuring interactive property searching, virtual tours, and CRM integration.',
      tags: ['React', 'Node.js', 'GraphQL', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      actionType: 'info',
    },
    {
      id: 7,
      category: 'brand',
      tagBadge: 'BRAND & CREATIVE',
      subtitle: 'PROMOTIONAL CAMPAIGN',
      title: 'Promotional Poster Design & Branding',
      summary: 'Comprehensive brand identity overhaul, workshop collateral, and physical-to-digital promotional campaign for global tech summits.',
      tags: ['Poster', 'Branding', 'Typography', 'Print'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      actionType: 'plus',
    },
    {
      id: 8,
      category: 'engineering',
      tagBadge: 'CLEANTECH & DATA',
      subtitle: 'CLEANTECH & DATA',
      title: 'Sustainability Data Story & Campaign',
      summary: 'Interactive data storytelling dashboard and sustainability report portal showcasing real-time renewable energy metrics.',
      tags: ['Campaign', 'Data Viz', 'React', 'Interactive'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      actionType: 'plus',
    },
  ];

  // 12 Visual Showcase Items matching lower 4x3 grid in reference image
  const showcaseItems = [
    {
      id: 'sc-1',
      category: 'web',
      badge: 'WEB DEVELOPMENT',
      title: 'Headless Storefront — E-Commerce',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-2',
      category: 'engineering',
      badge: 'DATA & AI ENGINE',
      title: 'Predictive Growth & Analytics Pipeline',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-3',
      category: 'brand',
      badge: 'LUXURY REAL ESTATE',
      title: 'Architectural Real Estate Showcase',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-4',
      category: 'web',
      badge: 'PROPTECH SAAS',
      title: 'PropTech SaaS Landing Page — TaskCrate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-5',
      category: 'engineering',
      badge: 'SAAS DASHBOARD',
      title: 'SaaS Dashboard & Analytics Platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-6',
      category: 'web',
      badge: 'CORPORATE REAL ESTATE',
      title: 'High-Performance Real Estate Portal',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-7',
      category: 'brand',
      badge: 'BRANDING WORKSHOP',
      title: 'Promotional Poster & Workshop Branding',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-8',
      category: 'engineering',
      badge: 'CLEANTECH DATA',
      title: 'Sustainability Data Story & Campaign',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-9',
      category: 'brand',
      badge: 'DTC BRANDING',
      title: 'PetCare Direct-to-Consumer Apparel',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-10',
      category: 'brand',
      badge: 'EXECUTIVE BRAND',
      title: 'Executive Leadership & Brand Identity',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-11',
      category: 'engineering',
      badge: 'AGRITECH DATA',
      title: 'AgriTech & Environmental Analytics',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sc-12',
      category: 'web',
      badge: 'SOFTWARE TEAM',
      title: 'Agile Software Engineering Delivery',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // 8 Partner Badges
  const partnerLogos = [
    { name: 'Apex Global Architecture', icon: '⚡' },
    { name: 'Pulse Analytics', icon: '🌐' },
    { name: 'Verve Studio', icon: '🏢' },
    { name: 'EcoVolt Energy', icon: '🔷' },
    { name: 'Lumina Cloud', icon: '🛡️' },
    { name: 'NextGen SaaS', icon: '📈' },
    { name: 'ZenTech Labs', icon: '🌿' },
    { name: 'TaskCrate App', icon: '🚀' },
  ];

  const filteredCaseStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

  const filteredShowcase = activeFilter === 'all'
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeFilter);

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Import Plus Jakarta Sans font to match ContactPage and HomePage design system */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}</style>

      {/* ------------------------------------------------------------- */}
      {/* EXACT RADIAL GRADIENT ORB BACKGROUND SHAPES (MATCHING CONTACTPAGE) */}
      {/* ------------------------------------------------------------- */}
      <div
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
      />

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION & PROVEN TACTICS CARD                          */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/90 border border-[#D5E6FE] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#10B981] shrink-0" />
                <Sparkles className="w-4 h-4 text-[#0878F9]" />
                <span className="font-extrabold text-[12px] leading-[16px] tracking-[0.65px] uppercase text-[#0878F9]">
                  CASE STUDIES & SUCCESS STORIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-[38px] xl:text-[46px] font-bold text-[#062A78] tracking-[-0.035em] mb-5 sm:mb-6">
                Architects of <span className="text-[#0878F9]">Digital Distinction</span> — Case Studies
              </h1>

              {/* Subtitle */}
              <p className="text-[16px] leading-[26px] font-medium text-[#1E3B68] max-w-2xl">
                Transforming ambitious visions into high-impact digital products through design excellence, performance engineering, and scalable growth strategies for fast-growing enterprise & high-growth brands.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
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
              <div className="pt-4 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => onStartProject?.('Case Studies Consultation')}
                  className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#FAA307] text-[#082D72] px-7 py-3.5 rounded-full font-extrabold text-sm shadow-[0px_4px_14px_rgba(255,183,3,0.3)] transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Social Proof Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Client avatar"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Client avatar"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
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
            </div>

            {/* Right Floating Tactics Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/90 backdrop-blur-[12px] rounded-[24px] p-6 sm:p-7 border border-[#E2EDF8] shadow-[0px_8px_32px_rgba(8,45,114,0.06)] relative">
                <div className="flex items-center justify-between border-b border-[#EEF6FF] pb-4 mb-5">
                  <h3 className="font-extrabold text-[#082D72] text-base sm:text-lg">
                    Proven Tactics
                  </h3>
                  <button
                    onClick={() => onStartProject?.('Proven Tactics Report')}
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
            </div>

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

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="bg-[#EEF6FF] border border-[#D5EBFF] text-[#0878F9] text-[12px] font-black px-3.5 py-[6px] rounded-full inline-block mb-2 uppercase tracking-[1.2px]">
              PORTFOLIO & WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082D72]">
              Client Case Studies
            </h2>
            <p className="text-[#587BA5] text-sm font-medium max-w-xl mt-2">
              Explore our latest client work across custom Web Apps, SaaS platforms, Brand Identity, and Growth Engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${activeFilter === filter.id
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white/90 backdrop-blur-[12px] rounded-[24px] overflow-hidden border border-[#E2EDF8] shadow-[0px_6px_24px_rgba(8,45,114,0.06)] hover:shadow-[0px_16px_40px_rgba(8,45,114,0.12)] transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={study.image}
                  alt={study.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Left Tag Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-[6px] border border-[#D5E6FE] px-3 py-1 rounded-full text-[10px] font-black text-[#082D72] tracking-wider uppercase">
                  {study.tagBadge}
                </div>

                {/* Bottom Right Banner Action */}
                <button
                  onClick={() => onStartProject?.(study.title)}
                  className="absolute bottom-3 right-3 bg-[#082D72] text-white px-3.5 py-1.5 rounded-full text-[11px] font-extrabold flex items-center gap-1.5 hover:bg-[#0878F9] transition-colors cursor-pointer shadow-md"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  {/* Category Subtitle */}
                  <span className="text-[11px] font-black text-[#0878F9] tracking-[0.8px] uppercase block mb-1">
                    {study.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#082D72] mb-2 group-hover:text-[#0878F9] transition-colors">
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
                    onClick={() => onStartProject?.(study.title)}
                    className="inline-flex items-center gap-1.5 text-[#082D72] hover:text-[#0878F9] transition cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    {study.actionType === 'plus' ? (
                      <span className="w-4 h-4 rounded-full bg-[#EEF6FF] text-[#0878F9] flex items-center justify-center font-bold text-xs">
                        +
                      </span>
                    ) : (
                      <Info className="w-3.5 h-3.5 text-[#0878F9]" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. VISUAL SHOWCASE SECTION (4x3 Grid of 12 Projects)          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 my-8">

        {/* Background Radial Orbs for Visual Showcase */}
        <div
          className="absolute -top-10 -left-28 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full pointer-events-none -z-10 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />
        <div
          className="absolute -bottom-10 -right-28 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none -z-10 opacity-85"
          style={{ background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)' }}
        />

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

        {/* 12 Grid Items (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredShowcase.map((item) => (
            <div
              key={item.id}
              onClick={() => onStartProject?.(item.title)}
              className="bg-white rounded-[18px] overflow-hidden border border-[#E2EDF8] shadow-[0px_4px_16px_rgba(8,45,114,0.05)] hover:shadow-[0px_12px_28px_rgba(8,45,114,0.12)] transition-all duration-300 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-[6px] border border-[#D5E6FE] px-2.5 py-0.5 rounded-full text-[9px] font-black text-[#082D72] uppercase tracking-wider">
                  {item.badge}
                </div>
              </div>

              {/* Title Content */}
              <div className="p-4 bg-white">
                <h4 className="text-xs font-extrabold text-[#082D72] group-hover:text-[#0878F9] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#0878F9] font-bold mt-1 flex items-center gap-1">
                  <span>Explore Project</span>
                  <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. TRUSTED BY OUR PARTNERS (Client Logo Pills)                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="text-xs font-black text-[#587BA5] uppercase tracking-[1.5px]">
            TRUSTED BY OUR PARTNERS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partnerLogos.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-[12px] rounded-[16px] p-4 border border-[#E2EDF8] shadow-[0px_4px_16px_rgba(8,45,114,0.04)] hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-center"
            >
              <span className="text-lg">{partner.icon}</span>
              <span className="text-xs font-extrabold text-[#082D72]">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER (Initiate Your Growth Partnership)       */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="rounded-[32px] p-10 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #031535 0%, #062D73 50%, #0878F9 100%)' }}
        >
          {/* Ambient background shapes matching ContactPage */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/20 rounded-full filter blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="bg-white/10 border border-white/20 text-[#FFC400] text-[12px] font-black px-4 py-1.5 rounded-full inline-block uppercase tracking-[1.2px]">
              SCHEDULE A STRATEGY CALL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[48px] font-black text-white tracking-[-1.2px] max-w-3xl">
              Initiate Your Growth Partnership With Digital Elite Services.
            </h2>

            <p className="text-[#E2E8F0] max-w-2xl text-[16px] leading-[24px] font-medium">
              We are ready to design, engineer, and scale your next major web application, brand identity, or growth marketing campaign.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <button
                onClick={() => onStartProject?.('Growth Partnership CTA')}
                className="bg-[#FFC400] hover:bg-[#faa307] text-[#082D72] font-black text-[16px] leading-[24px] px-9 py-4 rounded-full shadow-[0px_8px_25px_rgba(255,196,0,0.45)] transition cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Free Call</span>
                <ArrowRight className="w-4 h-4 text-[#082D72]" />
              </button>

              <a
                href="tel:+919876543210"
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-[6px] text-white font-bold text-[16px] leading-[24px] px-7 py-4 rounded-full transition cursor-pointer flex items-center gap-2"
              >
                <span>Call Us: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
