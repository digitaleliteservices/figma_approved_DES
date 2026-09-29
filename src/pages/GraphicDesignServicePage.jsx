import React from 'react';
import {
  Palette,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Clock,
  DollarSign,
  Package,
  Layers,
  FileText,
  CreditCard,
  Monitor,
  Eye,
  ArrowRight,
  Phone,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function GraphicDesignServicePage({ onStartProject }) {
  const handleCta = (serviceName) => {
    if (onStartProject) {
      onStartProject(serviceName || 'Graphic Design Consultation');
    }
  };

  const coreServices = [
    {
      id: '01',
      title: 'Logo Design & Brand Identity',
      description:
        'Your logo is the face of your brand. We design unique and memorable logos that reflect your business values and create a lasting impression. Our brand identity solutions include color palettes, typography, and brand guidelines to ensure consistency across all platforms.',
      icon: Palette,
      color: 'bg-blue-100 text-[#0066ff]',
    },
    {
      id: '02',
      title: 'Social Media Creatives',
      description:
        'In the age of social media, eye-catching visuals are essential. We design engaging social media posts, banners, and ad creatives that help you connect with your audience and boost engagement.',
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      id: '03',
      title: 'Brochure & Flyer Design',
      description:
        'We create professional brochures, flyers, and marketing materials that effectively showcase your products and services. Our designs are crafted to capture attention and deliver your message clearly.',
      icon: FileText,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '04',
      title: 'Website Graphics & UI Elements',
      description:
        'A visually appealing website enhances user experience. Our team designs stunning website graphics, banners, icons, and UI elements that align with your brand identity and improve usability.',
      icon: Monitor,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: '05',
      title: 'Packaging Design',
      description:
        'Make your product stand out on the shelf with creative packaging design. We focus on both aesthetics and functionality to ensure your product grabs attention instantly.',
      icon: Package,
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      id: '06',
      title: 'Business Cards & Stationery Design',
      description:
        'We design elegant business cards, letterheads, and other stationery that reflect professionalism and strengthen your brand image.',
      icon: CreditCard,
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Creative Excellence',
      description:
        'Our team of experienced designers brings fresh ideas and innovative concepts to every project.',
      icon: Lightbulb,
    },
    {
      title: 'Customized Solutions',
      description:
        'We understand your design solutions that match your specific goals and requirements.',
      icon: Layers,
    },
    {
      title: 'Affordable Pricing',
      description:
        'We provide cost-effective graphic designing services in Bangalore without compromising on quality.',
      icon: DollarSign,
    },
    {
      title: 'Quick Turnaround Time',
      description:
        'We ensure timely delivery of all projects while maintaining high standards of design.',
      icon: Clock,
    },
    {
      title: 'Client-Centric Approach',
      description:
        'We work closely with you throughout the design process to ensure the final output meets your expectations.',
      icon: HeartHandshake,
    },
  ];

  const businessGrowthPillars = [
    {
      title: 'Builds Strong Brand Identity',
      description:
        'Consistent and well-designed visuals help establish a strong brand identity.',
      icon: ShieldCheck,
    },
    {
      title: 'Enhances Credibility',
      description:
        'Professional designs build trust and credibility among your audience.',
      icon: Award,
    },
    {
      title: 'Improves Engagement',
      description:
        'Visually appealing content attracts more attention and keeps your audience engaged.',
      icon: Eye,
    },
    {
      title: 'Boosts Marketing Efforts',
      description:
        'Effective design enhances your marketing campaigns and delivers better results.',
      icon: TrendingUp,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirements',
      description:
        'We begin by understanding your business, target audience, and design preferences.',
    },
    {
      step: '02',
      title: 'Research & Concept',
      description:
        'Our team conducts market research and creates initial design concepts that align with your brand.',
    },
    {
      step: '03',
      title: 'Design Creation',
      description:
        'We develop creative visual design concepts that align with your brand identity.',
    },
    {
      step: '04',
      title: 'Feedback & Revisions',
      description:
        'Your feedback is important. We refine the design based on your needs.',
    },
    {
      step: '05',
      title: 'Final Delivery',
      description:
        'Once approved, we deliver high-resolution, production-ready files ready for use across all platforms.',
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
                  PROFESSIONAL GRAPHIC DESIGNING SERVICES IN BANGALORE
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Design That Tells Your <br className="hidden sm:inline" />
                Story. <br />
                <span className="text-[#0066ff]">Builds Your Brand.</span>
              </h1>

              {/* Description */}
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                <p>
                  Visual identity plays a crucial role in shaping how your brand is perceived. At Digital Elite Services, we take pride in being a leading graphic designing company in Bangalore, delivering innovative and impactful design solutions that help businesses stand out.
                </p>
                <p>
                  Whether you are a startup looking to build your brand from scratch or an established company wishing to refresh your visual presence, our expert team of designers is here to bring your ideas to life with creativity and precision.
                </p>
              </div>

              {/* 2 Checklist Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Data-Driven <span className="font-normal text-slate-500">(Smart strategies)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Proven Growth <span className="font-normal text-slate-500">(Real & measurable)</span></span>
                </div>
              </div>

              {/* CTA Button & Social Proof */}
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => handleCta('Graphic Design - Get Started Today')}
                  className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(255,183,3,0.35)] transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Get Started Today</span>
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

      {/* ================= 2. STATS COUNTER BAR ================= */}
      <StatsBannerBar />

      {/* ================= 3. OUR CORE SERVICES (6 NUMBERED CARDS) ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>OUR CORE SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight mb-4">
              Professional Graphic Design Services
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
                  onClick={() => handleCta(service.title)}
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
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. WHY CHOOSE US? (5 CARDS GRID) ================= */}
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

          {/* 5 Cards Grid: 3 in row 1, 2 in row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mb-6">
            {whyChooseUs.slice(0, 3).map((item, index) => {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[820px] mx-auto">
            {whyChooseUs.slice(3, 5).map((item, index) => {
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

      {/* ================= 5. THE POWER OF GREAT DESIGN -> DESIGN THAT DRIVES BUSINESS GROWTH ================= */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase block mb-3">
              THE POWER OF GREAT DESIGN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              Design That Drives <br className="hidden sm:inline" />
              <span className="text-[#0066ff]">Business Growth.</span>
            </h2>
          </div>

          {/* 4 White Cards with Blue Icons and Outlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
            {businessGrowthPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#93c5fd] transition-all duration-200 flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066ff] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-[#082D72] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 6. OUR DESIGN PROCESS -> A SIMPLE & EFFECTIVE DESIGN PROCESS ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              OUR DESIGN PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              A Simple & Effective <br className="hidden sm:inline" />
              <span className="text-[#0066ff]">Design Process.</span>
            </h2>
          </div>

          {/* 5 Step Cards Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[1240px] mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[22px] p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#93c5fd] transition-all duration-200 flex flex-col justify-start"
              >
                {/* Blue Step Number */}
                <div className="text-2xl font-black text-[#0066ff] mb-3 leading-none">
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

      {/* ================= 7. BOTTOM GRADIENT CTA BANNER ================= */}
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
              Ready to Elevate <br className="hidden sm:inline" />
              <span className="text-[#FFB703]">Your Brand?</span>
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Let's create stunning designs that leave a lasting impression and drive your business forward.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleCta('Graphic Design Consultation')}
                className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 text-[#082D72]" />
              </button>

              <a
                href="tel:+916366930178"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold text-sm px-7 py-3.5 rounded-full transition cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FFB703]" />
                <span>Talk to Our Expert: +91 6366930178</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default GraphicDesignServicePage;
