import React from 'react';
import {
  Zap,
  Search,
  Globe,
  CheckCircle2,
  ArrowRight,
  Award,
  Phone,
  FileText,
  Sparkles,
  Link,
  TrendingUp,
  Users,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';
import { motion } from 'motion/react';

export function DigitalMarketingServicePage({ onStartProject }) {
  const navigate = useNavigate();

  const coreServices = [
    {
      id: '01',
      title: 'Keyword Research & Strategy',
      description:
        'We identify high-impact keywords, including "SEO services in Bangalore," to ensure your website targets the right audience.',
      icon: Search,
      color: 'bg-blue-100 text-[#0066ff]',
    },
    {
      id: '02',
      title: 'On-Page SEO Optimization',
      description:
        "Our on-page SEO services focus on optimizing your website's structure and content, including meta tags, header structuring, internal linking, and image SEO.",
      icon: FileText,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      id: '03',
      title: 'Technical SEO',
      description:
        "We enhance your website's backend performance to improve search engine crawling and indexing, focusing on speed, mobile responsiveness, and XML sitemaps.",
      icon: Zap,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '04',
      title: 'Content Marketing',
      description:
        'Content is a key driver of SEO success. Our team creates engaging, keyword-rich content that attracts and retains users while improving rankings.',
      icon: Sparkles,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: '05',
      title: 'Link Building',
      description:
        'We build high-quality backlinks from authoritative websites to boost your domain authority and search engine rankings.',
      icon: Link,
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      id: '06',
      title: 'Local SEO',
      description:
        'As a business targeting Bangalore customers, local SEO is crucial. We optimize your Google Business Profile and location-based keywords to increase local visibility.',
      icon: Globe,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const whyChooseUsCards = [
    {
      title: 'Increase Visibility',
      description:
        'Ensure your website ranks higher on search engines like Google, making it easier for potential customers to find you.',
      icon: TrendingUp,
    },
    {
      title: 'High-Quality Traffic',
      description:
        'Drive organic, high-intent traffic directly to your products and services.',
      icon: Users,
    },
    {
      title: 'Brand Credibility',
      description:
        'Improve brand credibility and trust by appearing at the top of search results.',
      icon: ShieldCheck,
    },
    {
      title: 'Consistent Leads',
      description:
        'Generate consistent leads and sales while staying ahead of your competitors.',
      icon: Target,
    },
  ];

  const growthPillars = [
    {
      pillar: 'PILLAR 01',
      title: '1. Data-Driven Approach',
      description:
        'We rely on in-depth research, analytics, and performance tracking to guide our SEO strategies.',
    },
    {
      pillar: 'PILLAR 02',
      title: '2. Experienced Professionals',
      description:
        'Our skilled experts stay updated with the latest algorithm changes and industry trends.',
    },
    {
      pillar: 'PILLAR 03',
      title: '3. Transparent Reporting',
      description:
        "You'll receive regular reports detailing keyword rankings, traffic growth, and campaign performance.",
    },
    {
      pillar: 'PILLAR 04',
      title: '4. Ethical SEO Practices',
      description:
        'We follow white-hat SEO techniques that ensure long-term success without risking penalties.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Step 1: Website Audit',
      description:
        'We conduct a comprehensive audit to identify strengths, weaknesses, and opportunities.',
      position: 'top',
    },
    {
      step: '02',
      title: 'Step 2: Strategy Development',
      description:
        'Based on insights, we create a tailored SEO strategy aligned with your business objectives.',
      position: 'bottom',
    },
    {
      step: '03',
      title: 'Step 3: Implementation',
      description:
        'Our team executes on-page, technical, and off-page SEO techniques.',
      position: 'top',
    },
    {
      step: '04',
      title: 'Step 4: Optimization',
      description:
        'We continuously track performance and optimize campaigns for better results.',
      position: 'bottom',
    },
    {
      step: '05',
      title: 'Step 5: Reporting',
      description:
        'You receive detailed reports and insights to understand progress and ROI.',
      position: 'top',
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md">
                <span className="text-amber-500 text-xs">⚡</span>
                <span className="font-extrabold text-[12px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
                  DOMINATE SEARCH RANKINGS
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Design That <br />
                Tells Your Story. <br className="hidden sm:inline" />
                <span className="text-[#0066ff]">Builds Your Brand.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                In today's competitive digital landscape, having a strong online presence is no longer optional—it's essential. Businesses across industries are competing to capture attention, generate leads, and convert customers online. This is where Digital Elite Services steps in as a trusted partner, offering professional SEO services in Bangalore designed to help your business grow organically and sustainably.
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
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,183,3,0.35)] transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 text-[#082D72]" />
                </button>

                {/* Social Proof */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/95 border border-slate-200/80 rounded-full shadow-xs">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="client"
                    />
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="client"
                    />
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                      alt="client"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#082D72]">500+ Happy Clients</span>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Floating Live Performance SEO Revenue Accelerator Card */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
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
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= STATS BANNER BAR ================= */}
      <StatsBannerBar />

      {/* ================= 2. OUR CORE SERVICES (6 NUMBERED CARDS) ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              <Search className="w-3.5 h-3.5" />
              <span>OUR CORE SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-4">
              Professional Digital Marketing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet the diverse needs of businesses across industries.
            </p>
          </div>

          {/* 6 Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1240px] mx-auto">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => navigate('/contact')}
                  className="bg-white rounded-[26px] p-7 border border-slate-200/80 shadow-[0_8px_30px_rgba(8,45,114,0.04)] hover:shadow-[0_16px_40px_rgba(8,45,114,0.08)] hover:border-[#93c5fd] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Row: Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-xs`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-[11px] font-extrabold text-[#0066ff] bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {service.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-[19px] font-black text-[#082D72] tracking-tight leading-snug mb-3 group-hover:text-[#0066ff] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom subtle link */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066ff] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. WHY BUSINESSES CHOOSE DIGITAL ELITE SERVICES? ================= */}
      <section className="py-16 sm:py-20 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              WHY CHOOSE US?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              Why Businesses Choose <br className="hidden sm:inline" />
              <span className="text-[#0066ff]">Digital Elite Services?</span>
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {whyChooseUsCards.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#082D72] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. THE POWER OF GREAT DESIGN -> DESIGN THAT DRIVES BUSINESS GROWTH ================= */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase block mb-3">
              THE POWER OF GREAT DESIGN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              Design That Drives Business Growth
            </h2>
          </div>

          {/* 4 Dark Green/Navy Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {growthPillars.map((pillar, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#05281B] text-white rounded-[24px] p-7 border border-emerald-900/40 shadow-lg flex flex-col justify-start"
                >
                  <div className="inline-block bg-[#0B3D2A] text-amber-400 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-fit">
                    {pillar.pillar}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 5. GROWTH • OUR DESIGN PROCESS -> A SIMPLE & EFFECTIVE DESIGN PROCESS ================= */}
      <section className="py-16 sm:py-24 relative z-10 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              <span>GROWTH</span>
              <span className="text-slate-300">•</span>
              <span>OUR DESIGN PROCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              A Simple & Effective Design Process
            </h2>
          </div>

          {/* Desktop Horizontal Timeline (Steps 1, 3, 5 on top, Steps 2, 4 on bottom, connected by continuous gradient bar with squircle badges 01-05) */}
          <div className="hidden lg:block relative max-w-[1100px] mx-auto py-8">
            
            {/* Continuous Multi-stop Horizontal Gradient Timeline Track */}
            <div
              className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[5px] rounded-full pointer-events-none z-0"
              style={{
                background:
                  'linear-gradient(90deg, #0066ff 0%, #3b82f6 25%, #6366f1 50%, #8b5cf6 75%, #f59e0b 100%)',
              }}
            />

            {/* 5 Process Columns Grid */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {processSteps.map((step) => {
                const isTop = step.position === 'top';
                return (
                  <div key={step.step} className="flex flex-col items-center justify-between min-h-[290px]">
                    
                    {/* Top Content Slot (Steps 01, 03, 05) */}
                    <div className="h-[110px] flex flex-col justify-end text-center px-1">
                      {isTop && (
                        <div>
                          <h3 className="text-xs font-black text-[#082D72] mb-1.5 leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Centered Squircle Badge 01-05 */}
                    <div className="w-[48px] h-[50px] rounded-[14px] bg-white border-[1.5px] border-[#3b82f6] shadow-[0_4px_14px_rgba(0,102,255,0.14)] flex items-center justify-center text-[15px] font-black text-[#0066ff] z-20 my-2">
                      {step.step}
                    </div>

                    {/* Bottom Content Slot (Steps 02, 04) */}
                    <div className="h-[110px] flex flex-col justify-start text-center px-1">
                      {!isTop && (
                        <div>
                          <h3 className="text-xs font-black text-[#082D72] mb-1.5 leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Mobile / Tablet Process Cards Stack */}
          <div className="block lg:hidden space-y-4 max-w-md mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[20px] p-5 border border-slate-200/80 shadow-xs flex items-start gap-4"
              >
                <div className="w-[44px] h-[48px] rounded-[14px] bg-white border-[1.5px] border-[#3b82f6] shadow-xs flex items-center justify-center text-[15px] font-black text-[#0066ff] shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#082D72] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. BOTTOM GRADIENT CTA BANNER ================= */}
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
              Book a free consultation and receive a complimentary website performance audit report.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-[#001f54] hover:bg-[#002b75] border border-blue-400/40 text-white font-black text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="tel:+916366930178"
                className="inline-flex items-center gap-2 bg-white text-[#082D72] hover:bg-slate-100 font-extrabold text-sm px-7 py-3.5 rounded-full shadow-md transition cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0066ff]" />
                <span>Talk to Our Expert: +91 6366930178</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default DigitalMarketingServicePage;
