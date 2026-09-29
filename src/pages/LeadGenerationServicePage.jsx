import React, { useState } from 'react';
import {
  Search,
  Share2,
  Eye,
  Sliders,
  BarChart3,
  Users,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
  Filter,
  Layers,
  Database,
  ArrowRight,
  Phone,
  ChevronDown,
  Building,
  Target,
  GraduationCap,
  ShoppingBag,
  Laptop,
} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function LeadGenerationServicePage({ onStartProject }) {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCta = (serviceName) => {
    if (onStartProject) {
      onStartProject(serviceName || 'Lead Generation Audit & Consultation');
    }
  };

  const coreServices = [
    {
      id: '01',
      title: 'Paid Search (Google Ads & Bing Ads)',
      description:
        'Capture demand when buyers search for your products or services. We manage everything from keyword research and ad copywriting to negative keywords and bid management, ensuring maximum ROI on your ad spend.',
      icon: Search,
      color: 'bg-blue-100 text-[#0066ff]',
    },
    {
      id: '02',
      title: 'Social Media Advertising',
      description:
        'Reach buyers where they spend their time. We run hyper-targeted campaigns across Facebook, Instagram, LinkedIn, and YouTube with custom audience segmentation and high-converting creative ad formats.',
      icon: Share2,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: '03',
      title: 'Display & Remarketing Campaigns',
      description:
        'Re-engage prospects who previously visited your website or app. Our remarketing campaigns serve timely, relevant ads to keep your brand top-of-mind and bring warm leads back to convert.',
      icon: Eye,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: '04',
      title: 'Conversion Rate Optimization (CRO)',
      description:
        'We optimize every element of your landing pages—from headlines and form fields to CTAs and trust badges—ensuring maximum visitor-to-lead conversion rates.',
      icon: Sliders,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '05',
      title: 'Analytics, Attribution & Lead Tracking',
      description:
        'Track leads in real-time with integrated CRM tracking and GA4 analytics. We attribute lead sources with 100% transparency for continuous optimization.',
      icon: BarChart3,
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      id: '06',
      title: 'CRM & Automated Lead Nurturing',
      description:
        'Seamlessly connect leads to your CRM and set up automated email and SMS follow-up sequences that warm up prospects and accelerate sales cycles.',
      icon: Users,
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  const whyChooseUsCards = [
    {
      title: 'Data-Driven Strategies',
      description:
        'Every campaign decision is backed by live data, search intent volume, and competitor intelligence, eliminating guesswork.',
      icon: Database,
    },
    {
      title: 'Customized Lead Funnels',
      description:
        'We build custom landing pages and multi-step forms tailored to your audience for 3x higher conversion rates.',
      icon: Filter,
    },
    {
      title: 'Certified PPC Experts',
      description:
        'Our team is Google Partner and Meta Blueprint certified, bringing deep expertise across all major ad networks.',
      icon: Award,
    },
    {
      title: 'Transparent ROI Reporting',
      description:
        'Real-time analytics dashboards with full cost-per-lead (CPL) and return-on-ad-spend (ROAS) tracking.',
      icon: BarChart3,
    },
    {
      title: 'Strict Focus on Lead Quality',
      description:
        'We don’t chase vanity metrics like impressions; our focus is 100% on delivering qualified, phone-verified sales leads.',
      icon: ShieldCheck,
    },
  ];

  const industryVerticals = [
    {
      title: 'Real Estate & Healthcare',
      badge: 'HIGH INTENT',
      icon: Building,
      description:
        'High-ticket buyer acquisition funnels for developers, property agents, and premium medical clinics.',
    },
    {
      title: 'E-commerce & Retail',
      badge: 'HIGH VOLUME',
      icon: ShoppingBag,
      description:
        'D2C growth campaigns, catalog ads, and retention funnels engineered to drive rapid sales volume.',
    },
    {
      title: 'Technology & B2B SaaS',
      badge: 'ENTERPRISE B2B',
      icon: Laptop,
      description:
        'Targeted account-based marketing (ABM) and demo-booking funnels for enterprise software and SaaS.',
    },
    {
      title: 'Education & Professional Services',
      badge: 'STUDENT/CLIENT',
      icon: GraduationCap,
      description:
        'Student enrollment funnels and consultation booking for higher education, coaching academies, and legal/financial firms.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Step 1: Discovery & Strategy',
      description:
        'We analyze your historical ad performance, define ideal customer profiles (ICPs), and identify low-CPA keywords and competitor gaps.',
    },
    {
      step: '02',
      title: 'Step 2: Campaign & Funnel Architecture',
      description:
        'We design high-converting custom landing pages, write persuasive ad copy, set up conversion tracking, and integrate your CRM.',
    },
    {
      step: '03',
      title: 'Step 3: Ad Setup & Multi-Channel Launch',
      description:
        'We launch Google Search, Meta Ads, and LinkedIn campaigns with strict budget caps and precision targeting.',
    },
    {
      step: '04',
      title: 'Step 4: Continuous Optimization & A/B Testing',
      description:
        'Daily bid management, negative keyword pruning, ad copy split-testing, and landing page optimization.',
    },
    {
      step: '05',
      title: 'Step 5: Reporting & Aggressive Scaling',
      description:
        'Bi-weekly live performance reviews, pipeline attribution reporting, and strategic scaling of top-performing ad sets.',
    },
  ];

  const faqs = [
    {
      q: 'Why is Digital Elite Services considered the #1 lead generation company in Bangalore?',
      a: 'We combine rigorous keyword-intent targeting, custom-designed landing pages, and multi-channel PPC campaigns with end-to-end CRM attribution. Our focus is 100% on phone-verified, revenue-generating buyer inquiries rather than vanity impressions.',
    },
    {
      q: 'How quickly can we expect qualified leads after campaign launch?',
      a: 'Once campaigns are approved and launch (usually within 48 to 72 hours of onboarding), leads typically begin flowing within 24 to 48 hours of initial activation.',
    },
    {
      q: 'How do you filter out low-quality leads?',
      a: 'We implement OTP verification, multi-step qualification questions, reCAPTCHA v3 spam blocking, and negative keyword pruning to eliminate junk inquiries before they ever reach your sales team.',
    },
    {
      q: 'What platforms do you recommend for B2B vs B2C lead generation?',
      a: 'For B2B and SaaS, we focus heavily on LinkedIn Ads, Google Search intent ads, and Account-Based Marketing (ABM). For B2C, real estate, and healthcare, Google Local Search, Meta Lead Ads (Instagram & Facebook), and YouTube ads deliver the highest ROI.',
    },
    {
      q: 'Do you create custom landing pages for our campaigns?',
      a: 'Yes, 100%! We build bespoke, lightning-fast landing pages with persuasive copywriting, clean conversion forms, and instant CRM webhooks specifically tailored for each campaign.',
    },
  ];

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
        className="absolute top-[520px] -left-32 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1250px] -right-28 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1850px] -left-28 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute bottom-16 -right-24 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full pointer-events-none z-0 opacity-85"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md">
                <span className="text-amber-500 text-xs">⚡</span>
                <span className="font-extrabold text-[12px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
                  BANGALORE'S #1 LEAD GENERATION AGENCY
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Best Lead Generation <br />
                Companies in <span className="text-[#0066ff]">Bangalore</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                In today's competitive digital market, standard clicks aren't enough—your business needs ready-to-buy inquiries. At Digital Elite Services, we engineer targeted PPC search campaigns, high-converting social media lead ads, and automated sales funnels that attract high-intent buyers and maximize your ROI predictably.
              </p>

              {/* 3 Checklist Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Data-Driven <span className="font-normal text-slate-500">(Tailored strategies)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Verified Leads <span className="font-normal text-slate-500">(Zero fake inquiries)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>24/7 Support <span className="font-normal text-slate-500">(PPC Specialists)</span></span>
                </div>
              </div>

              {/* CTA Button & Social Proof */}
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,183,3,0.35)] transition-all transform hover:scale-[1.02] cursor-pointer"
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

            </div>

            {/* Right Floating "Why Choose DES?" Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-[0_20px_50px_rgba(8,45,114,0.08)] relative">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <h3 className="text-lg font-black text-[#082D72]">
                    Why Choose DES?
                  </h3>
                  <span className="bg-blue-50 border border-blue-200/60 text-[#0066ff] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    OUR PROMISE
                  </span>
                </div>

                {/* 4 Feature Rows */}
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#082D72]">
                        Customized Solutions
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed mt-0.5">
                        Tailored strategies built specifically for your unique business needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#082D72]">
                        Expert Team
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed mt-0.5">
                        Passionate industry experts dedicated to accelerating your growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#082D72]">
                        Transparent Process
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed mt-0.5">
                        Daily clarity, open communication, and complete transparency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-[#082D72]">
                        Measurable Results
                      </h4>
                      <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed mt-0.5">
                        Empirical data and analytics that generate real revenue growth.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. STATS BANNER BAR ================= */}
      <StatsBannerBar />

      {/* ================= 3. OUR CORE SERVICES (6 NUMBERED CARDS) ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              OUR CORE SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-4">
              Professional Lead Generation Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Comprehensive paid media marketing and PPC solutions tailored to meet the revenue growth goals of businesses across Bangalore and global markets.
            </p>
          </div>

          {/* 6 Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1240px] mx-auto">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => navigate("/contact")}
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
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066ff]">
                    <span>Explore Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. WHY PARTNER WITH DES? (LEFT INTRO + RIGHT 5 CARDS) ================= */}
      <section className="py-16 sm:py-20 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-[1240px] mx-auto">
            
            {/* Left Column: Heading, description, and callout */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase block">
                WHY PARTNER WITH DES?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
                Why Top Companies <br />
                Choose Digital Elite Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We combine deep analytical rigor with high-converting creative ad copy to build automated lead generation machines that scale continuously.
              </p>

              {/* Callout Card */}
              <div className="bg-white rounded-[22px] p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#082D72] mb-1">
                    Bangalore's Leading PPC Agency
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Trusted by real estate developers, health clinics, SaaS platforms, and B2B enterprises to deliver verified buyer inquiries month after month.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 5 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-[22px] p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start ${
                      idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#082D72] mb-1.5 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. INDUSTRY VERTICALS (4 DARK NAVY CARDS) ================= */}
      <section className="py-16 sm:py-24 relative z-10 bg-[#031535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs sm:text-[13px] font-bold text-[#FFB703] tracking-[0.16em] uppercase block mb-3">
              INDUSTRY VERTICALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-white tracking-tight leading-tight mb-4">
              Lead Generation Tailored to Your Industry
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Tailored campaign strategies and custom form funnels engineered to match high-volume buyer intent in your segment.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {industryVerticals.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate(`/contact`)}
                  className="bg-[#062456] rounded-[24px] p-6 border border-blue-800/60 shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#0066ff] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-[10px] font-extrabold text-[#FFB703] bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white mb-2 leading-snug">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-blue-200/80 leading-relaxed font-normal mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-blue-900/60 flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-[#FFB703] transition-colors">
                    <span>View Case Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 6. A PROVEN, DATA-DRIVEN LEAD PROCESS (5 STACKED CARDS) ================= */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase block mb-3">
              OUR 5-STEP METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-3">
              A Proven, Data-Driven Lead Process
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
              How we systematically turn digital ad spend into predictable pipeline growth.
            </p>
          </div>

          {/* 5 Stacked Process Cards */}
          <div className="space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[22px] p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#93c5fd] transition-all duration-200 flex items-start gap-4 sm:gap-6"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0066ff] text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#082D72] mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) ================= */}
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
            Everything you need to know about our lead generation and PPC services in Bangalore.
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

      {/* ================= 8. BOTTOM GRADIENT CTA BANNER ================= */}
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
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-black text-white tracking-[-0.03em] leading-tight" style={{lineHeight:'1.22'}}>
              Ready to Supercharge Your Sales Pipeline?
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Partner with Bangalore's leading lead generation agency to attract high-intent leads and maximize your marketing ROI.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Free Lead Audit Now</span>
                <ArrowRight className="w-4 h-4 text-[#082D72]" />
              </button>

              <a
                href="tel:+916366930178"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold text-sm px-7 py-3.5 rounded-full transition cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <span>Call Us: +91 6366930178</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default LeadGenerationServicePage;
