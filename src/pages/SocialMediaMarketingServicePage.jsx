import React from 'react';
import {
  Share2,
  Palette,
  MessageCircle,
  Megaphone,
  BarChart3,
  Users,
  Eye,
  Crosshair,
  DollarSign,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function SocialMediaMarketingServicePage({ onStartProject }) {
  const navigate = useNavigate();
  const handleCta = (serviceName) => {
    if (onStartProject) {
      onStartProject(serviceName || 'Social Media Marketing Consultation');
    }
  };

  const coreServices = [
    {
      id: '01',
      title: 'Social Media Strategy',
      description:
        'We create data-driven social media strategies tailored to your business goals, audience behavior, and industry trends.',
      icon: Share2,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '02',
      title: 'Creative Content Creation',
      description:
        'Our team designs high-quality graphics, videos, reels, and engaging captions that capture attention and improve audience interaction.',
      icon: Palette,
      color: 'bg-pink-100 text-pink-600',
    },
    {
      id: '03',
      title: 'Social Media Management',
      description:
        'We manage your social media profiles by handling content scheduling, posting, audience engagement, and customer interactions.',
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: '04',
      title: 'Paid Advertising Campaigns',
      description:
        'Run highly targeted ad campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter to generate leads and boost sales.',
      icon: Megaphone,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: '05',
      title: 'Analytics & Performance Tracking',
      description:
        'Track campaign performance with detailed analytics and reports that provide insights into engagement, reach, and conversions.',
      icon: BarChart3,
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      id: '06',
      title: 'Brand Engagement',
      description:
        'We help businesses build meaningful relationships with customers through interactive campaigns and consistent communication.',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Increase Brand Awareness',
      description:
        'Reach a wider audience and establish a strong online brand presence across major social platforms.',
      icon: Eye,
    },
    {
      title: 'Boost Customer Engagement',
      description:
        'Interact directly with customers and build long-term relationships through meaningful engagement.',
      icon: Users,
    },
    {
      title: 'Generate More Leads',
      description:
        'Targeted campaigns help attract quality leads and increase conversion opportunities.',
      icon: Crosshair,
    },
    {
      title: 'Cost-Effective Marketing',
      description:
        'Social media marketing delivers better ROI compared to many traditional advertising methods.',
      icon: DollarSign,
    },
  ];

  const pillars = [
    {
      pillar: 'PILLAR 01',
      title: 'Customized Strategies',
      description:
        'Every campaign is tailored specifically to your business goals, audience, and industry.',
    },
    {
      pillar: 'PILLAR 02',
      title: 'Creative Excellence',
      description:
        'Our creative team develops visually appealing and engaging content that drives results.',
    },
    {
      pillar: 'PILLAR 03',
      title: 'Transparent Reporting',
      description:
        'Receive regular performance reports with actionable insights and measurable campaign data.',
    },
    {
      pillar: 'PILLAR 04',
      title: 'Result-Oriented Approach',
      description:
        'We focus on increasing engagement, leads, and business growth through proven strategies.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Step 1: Business Analysis',
      description:
        'We understand your business goals, audience, competitors, and industrial landscape.',
    },
    {
      step: '02',
      title: 'Step 2: Strategy Planning',
      description:
        'Our team creates a customized social media roadmap best-aligned with your objectives.',
    },
    {
      step: '03',
      title: 'Step 3: Content Creation',
      description:
        'We design engaging creatives, reels, and campaigns tailored to your target audience.',
    },
    {
      step: '04',
      title: 'Step 4: Campaign Execution',
      description:
        'We manage organic and paid campaigns across multiple social media platforms.',
    },
    {
      step: '05',
      title: 'Step 5: Optimization & Reporting',
      description:
        'We continuously monitor performance, optimize campaigns, and provide detailed reports.',
    },
  ];

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}</style>

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
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md">
                <span className="text-amber-500 text-xs">⚡</span>
                <span className="font-extrabold text-[12px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
                  POWERFUL SOCIAL MEDIA MARKETING SOLUTIONS
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Design That Tells Your <br className="hidden sm:inline" />
                Story. <span className="text-[#0066ff]">Builds Your Brand.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                In today's digital-first world, social media has become one of the most powerful tools for businesses to connect with their audience, build brand awareness, and drive measurable growth. Digital Elite Services provides result-oriented Social Media Marketing services in Bangalore designed to help businesses grow their online presence, engage customers, and generate quality leads through strategic and creative campaigns.
              </p>

              {/* 3 Checklist Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Data-Driven <span className="font-normal text-slate-500">(Smart strategies)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Proven Growth <span className="font-normal text-slate-500">(Results that matter)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>24/7 Support <span className="font-normal text-slate-500">(Always by your side)</span></span>
                </div>
              </div>

              {/* CTA Button & Happy Clients */}
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={()=>navigate("/contact")}
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

            {/* Right Column: Floating "Why Choose DES?" Card */}
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
                      <Sparkles className="w-4 h-4" />
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
                        Driven by data and analytics that generate real revenue growth.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. STATS COUNTER BAR ================= */}
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
              Professional Social Media Marketing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet the diverse needs of businesses across industries.
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
                    <h3 className="text-lg sm:text-[19px] font-black text-[#082D72] tracking-tight leading-snug mb-2.5 group-hover:text-[#0066ff] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#0066ff]">
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. WHY CHOOSE US? (4 VALUE CARDS) ================= */}
      <section className="py-16 sm:py-20 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              WHY CHOOSE US?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              Why Businesses Choose Digital Elite Services?
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex flex-col justify-start"
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
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 5. THE POWER OF GREAT DESIGN (4 PILLARS) ================= */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs sm:text-[18px] font-extrabold text-[#082D72] tracking-[0.16em] uppercase block">
              THE POWER OF GREAT DESIGN
            </span>
          </div>

          {/* 4 Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex flex-col justify-start"
              >
                <div className="inline-block bg-[#052814] text-emerald-400 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-fit">
                  {pillar.pillar}
                </div>
                <h3 className="text-base font-black text-[#082D72] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. OUR DESIGN PROCESS (5-STEP WORKFLOW) ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              OUR DESIGN PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-4">
              A Simple & Effective Design Process
            </h2>
          </div>

          {/* 5 Process Cards Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[1240px] mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[22px] p-5 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#93c5fd] transition-all duration-200 flex flex-col justify-start"
              >
                {/* Orange Circle Step Number */}
                <div className="w-8 h-8 rounded-full bg-[#f97316] text-white font-extrabold text-xs flex items-center justify-center mb-4 shadow-sm">
                  {step.step}
                </div>

                <h3 className="text-sm font-black text-[#082D72] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
export default SocialMediaMarketingServicePage;
