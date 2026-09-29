import React, { useState } from 'react';
import {
  Zap,
  Search,
  Globe,
  Layers,
  Megaphone,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Award,
  ChevronDown,
} from 'lucide-react';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function DigitalMarketingServicePage({ onStartProject }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    {
      id: 'on-page-seo',
      title: 'On-Page SEO Optimization',
      description:
        'Structure your site content, headers, meta tags, and internal link architecture to match precise user intent and Google search algorithm guidelines.',
      metric: '+280% Keyword Rankings',
      icon: Search,
      iconBg: 'bg-[#0066ff]',
    },
    {
      id: 'local-seo',
      title: 'Local SEO (Bangalore & Global)',
      description:
        'Dominate Google Map Packs and local geo-targeted searches to convert nearby high-intent prospects into paying clients for your business.',
      metric: 'Top 3 Map Pack Guarantee',
      icon: Globe,
      iconBg: 'bg-[#10b981]',
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO & Speed',
      description:
        'Eliminate crawl errors, fix broken links, optimize Core Web Vitals, and build lightning-fast mobile performance that search engines love.',
      metric: 'Sub-1.2s Load Times',
      icon: Zap,
      iconBg: 'bg-[#f97316]',
    },
    {
      id: 'backlinks',
      title: 'High-Authority Backlinks',
      description:
        'Earn high-DA contextual backlinks and digital PR coverage from top industry publications to build domain authority that ranks for competitive keywords.',
      metric: '100% White-Hat Outreach',
      icon: Layers,
      iconBg: 'bg-[#8b5cf6]',
    },
    {
      id: 'ppc-ads',
      title: 'Performance PPC & Ads',
      description:
        'Maximize ROI with precision Google Ads, Bing Ads, and Meta paid media campaigns crafted to generate ready-to-buy sales leads.',
      metric: '3.8x Avg ROAS Growth',
      icon: Megaphone,
      iconBg: 'bg-[#06b6d4]',
    },
    {
      id: 'cro',
      title: 'Conversion Rate Optimization',
      description:
        'Turn organic traffic into revenue with optimized landing page funnels, persuasive copywriting, clear calls-to-action, and user behavior analytics.',
      metric: '2.4x Lead Conversion',
      icon: PieChart,
      iconBg: 'bg-[#ec4899]',
    },
  ];

  const faqs = [
    {
      q: 'How long does it take to see real results from SEO?',
      a: 'Typically, initial keyword momentum and organic impressions begin showing within 60 to 90 days. Significant revenue acceleration, Page 1 rankings, and inbound qualified lead volume typically peak within 4 to 6 months of systematic optimization.',
    },
    {
      q: 'Why is Local SEO critical for businesses in Bangalore?',
      a: 'Over 78% of local mobile searches result in an offline or direct inquiry within 24 hours. Local SEO ensures your business dominates Google Maps, Local 3-Pack, and geo-targeted keywords like "best in Bangalore" or "near me" across Indiranagar, Koramangala, Whitefield, and HSR Layout.',
    },
    {
      q: 'What is the difference between SEO and PPC advertising?',
      a: 'SEO focuses on earning sustainable, organic search placement that continues delivering traffic without per-click fees over the long term. PPC (Google Ads) generates instant visibility and immediate lead flow by paying per click. We frequently combine both for maximum ROI.',
    },
    {
      q: 'How do you guarantee white-hat SEO practices?',
      a: 'We strictly adhere to Google Search Essentials and Webmaster Guidelines. We never use automated link farms, hidden text, or manipulative PBNs. All optimization relies on authoritative content, technical hygiene, and genuine contextual outreach.',
    },
    {
      q: 'What analytics and reports will I receive?',
      a: 'You receive automated bi-weekly performance dashboards tracking Google Search Console rankings, GA4 organic traffic, keyword positions, conversion events, and a transparent breakdown of pipeline revenue generated.',
    },
  ];

  const handleAuditClick = () => {
    if (onStartProject) {
      onStartProject('Free SEO & Digital Marketing Audit');
    }
  };

  const handleCapabilitiesClick = () => {
    const el = document.getElementById('seo-capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* ================= BACKGROUND GRADIENT ORBS (MATCHING SCREENSHOT) ================= */}
      <div
        className="absolute -top-10 -left-28 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-10 -right-24 w-[340px] sm:w-[460px] h-[360px] sm:h-[440px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[480px] -left-32 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1050px] -right-28 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1500px] -left-28 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute bottom-28 -right-24 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md">
                <span className="text-amber-500 text-xs">⚡</span>
                <span className="font-extrabold text-[12px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
                  SEO & DIGITAL MARKETING SERVICES IN BANGALORE
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Rank #1 On Google & Scale Your <br className="hidden sm:inline" />
                <span className="text-[#0066ff]">Organic Revenue</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We combine technical SEO precision, high-intent keyword strategies, and data-backed performance marketing to dominate search results and turn digital traffic into long-term profit.
              </p>

              {/* 3 Checklist Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% White-Hat SEO</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>+340% Avg Organic Traffic</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bangalore & Global Outreach</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleAuditClick}
                  className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,183,3,0.35)] transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Get Free SEO Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#082D72]" />
                </button>

                <button
                  type="button"
                  onClick={handleCapabilitiesClick}
                  className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-slate-200 text-[#082D72] font-bold text-sm px-6 py-3.5 rounded-full transition cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                </button>
              </div>

            </div>

            {/* Right Column: Floating Live Performance SEO Revenue Accelerator Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-[28px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_20px_50px_rgba(8,45,114,0.08)] relative">
                
                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-[0.14em] text-slate-400 uppercase block mb-0.5">
                      LIVE PERFORMANCE
                    </span>
                    <h3 className="text-lg font-black text-[#082D72]">
                      SEO Revenue Accelerator
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* 2 Stat Tiles Grid */}
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  {/* Organic Impressions */}
                  <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">
                      Organic Impressions
                    </span>
                    <div className="text-2xl sm:text-[26px] font-black text-[#082D72] leading-none mb-1.5">
                      1.4M+
                    </div>
                    <div className="text-[10.5px] font-bold text-emerald-600 flex items-center gap-1">
                      <span>+142% this quarter</span>
                    </div>
                  </div>

                  {/* Top 3 Keywords */}
                  <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-4">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">
                      Top 3 Keywords
                    </span>
                    <div className="text-2xl sm:text-[26px] font-black text-[#082D72] leading-none mb-1.5">
                      480+
                    </div>
                    <div className="text-[10.5px] font-bold text-emerald-600 flex items-center gap-1">
                      <span>#1 Rank in Bangalore</span>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-4 mb-6">
                  {/* Technical Health Score */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-[#082D72]">Technical Health Score</span>
                      <span className="font-black text-[#0066ff]">98 / 100</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0066ff] rounded-full w-[98%]" />
                    </div>
                  </div>

                  {/* Local Map Pack Visibility */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-[#082D72]">Local Map Pack Visibility</span>
                      <span className="font-black text-emerald-600">95 / 100</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full w-[95%]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Callout Banner */}
                <div className="bg-[#052319] rounded-2xl p-3.5 flex items-center gap-3 border border-emerald-900/40">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white block">
                      Proven Track Record:
                    </span>
                    <span className="text-[11px] text-emerald-300 font-medium">
                      Ranked over 120+ Bangalore clients on Google Page 1.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS BANNER BAR ================= */}
      <StatsBannerBar />

      {/* ================= 2. FULL-SPECTRUM DIGITAL MARKETING & SEO (6 CAPABILITY CARDS) ================= */}
      <section id="seo-capabilities" className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              WHAT WE DELIVER
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-4">
              Full-Spectrum Digital Marketing & SEO
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Every business requires a customized growth blend. Here are our core search engine optimization and digital marketing disciplines designed for real revenue growth.
            </p>
          </div>

          {/* 6 Capability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1240px] mx-auto">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onClick={() => onStartProject?.(cap.title)}
                  className="bg-white rounded-[26px] p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(8,45,114,0.04)] hover:shadow-[0_16px_40px_rgba(8,45,114,0.08)] hover:border-[#93c5fd] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Icon Square */}
                    <div
                      className={`w-11 h-11 rounded-2xl ${cap.iconBg} flex items-center justify-center mb-5 text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg sm:text-[19px] font-black text-[#082D72] tracking-tight leading-snug mb-2.5 group-hover:text-[#0066ff] transition-colors">
                      {cap.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {cap.description}
                    </p>
                  </div>

                  {/* Bottom Metric & Arrow */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0066ff]">
                      {cap.metric}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0066ff] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. FREQUENTLY ASKED QUESTIONS (ACCORDION) ================= */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase block mb-3">
            GOT QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black text-[#082D72] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our digital marketing and SEO services in Bangalore.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white/95 rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/70 transition cursor-pointer"
                >
                  <span className="font-extrabold text-sm sm:text-[15px] text-[#082D72] pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0066ff] text-white' : 'text-[#0066ff]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* ================= 4. BOTTOM CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 mb-8">
        <div
          className="rounded-[32px] p-10 sm:p-14 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
          }}
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/30 rounded-full filter blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-black text-white tracking-[-0.03em] leading-tight">
              Ready to Dominate Search Rankings?
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Book a free 30-minute SEO consultation and receive a complimentary website performance audit report.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleAuditClick}
                className="inline-flex items-center gap-2 bg-[#001f54] hover:bg-[#002b75] border border-blue-400/40 text-white font-black text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Schedule Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default DigitalMarketingServicePage;
