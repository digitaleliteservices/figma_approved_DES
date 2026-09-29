import React from 'react';
import {
  Code2,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Zap,
  Cpu,
  BarChart3,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function WebDevelopmentServicePage({ onStartProject }) {
  const navigate = useNavigate();
  const handleCta = (serviceName) => {
    if (onStartProject) {
      onStartProject(serviceName || 'Web Development & UI/UX Consultation');
    }
  };

  const whyChooseUsCards = [
    {
      title: 'Expertise & Experience',
      description:
        'Our team brings years of experience in UI/UX design and web development, ensuring high-quality outcomes.',
      icon: Award,
    },
    {
      title: 'Tailored Solutions',
      description:
        'We understand that every business is unique, so we create customized solutions that align with your goals.',
      icon: Zap,
    },
    {
      title: 'Latest Technologies',
      description:
        'We stay updated with the latest trends and technologies to deliver modern, future-ready websites.',
      icon: Cpu,
    },
    {
      title: 'Focus on Performance',
      description:
        'Our websites are optimized for speed, SEO, and user experience, helping you rank better and convert more visitors.',
      icon: BarChart3,
    },
  ];

  const designPillars = [
    {
      pillar: 'PILLAR 01',
      title: 'Measurable Results',
      description:
        'Whether you’re a startup or an established company, we provide solutions that deliver measurable results.',
    },
    {
      pillar: 'PILLAR 02',
      title: 'Competitive Edge',
      description:
        'Our expertise ensures that your website stands out in a competitive market.',
    },
    {
      pillar: 'PILLAR 03',
      title: 'Customer Engagement',
      description:
        'Your website is a powerful tool that can drive growth and improve customer engagement.',
    },
    {
      pillar: 'PILLAR 04',
      title: 'Brand Strength',
      description:
        'We are committed to helping you achieve your digital goals and strengthen your brand identity.',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Step 1: Understanding Your Business',
      description:
        'We begin by analyzing your business goals, target audience, and competitors to create a clear strategy.',
      position: 'top',
    },
    {
      step: 2,
      title: 'Step 2: Planning & Design',
      description:
        'Our UI/UX experts create wireframes and prototypes to visualize the structure and user journey.',
      position: 'bottom',
    },
    {
      step: 3,
      title: 'Step 3: Development',
      description:
        'Our developers bring the design to life using advanced technologies and coding standards.',
      position: 'top',
    },
    {
      step: 4,
      title: 'Step 4: Testing & Optimization',
      description:
        'We rigorously test your website for performance, usability, and responsiveness.',
      position: 'bottom',
    },
    {
      step: 5,
      title: 'Step 5: Launch & Support',
      description:
        'After a successful launch, we provide ongoing support and updates to ensure optimal performance.',
      position: 'top',
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
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md">
                <span className="text-amber-500 text-xs">⚡</span>
                <span className="font-extrabold text-[12px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
                  BUILD DIGITAL EXCELLENCE
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.12]">
                Design That Tells Your <br className="hidden sm:inline" />
                Story. <span className="text-[#0066ff]">Builds Your Brand.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                In today's fast-paced digital world, your website is often the first interaction customers have with your brand. A well-designed and high-performing website can significantly influence how users perceive your business. As a trusted UI/UX Design Company in Bangalore and Web Development company in Bangalore, we specialize in creating impactful digital experiences that combine creativity, functionality, and performance. We help businesses establish a strong and lasting online presence.
              </p>

              {/* 3 Checklist Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Data-Driven <span className="font-normal text-slate-500">(Smart strategies)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Proven Growth <span className="font-normal text-slate-500">(Real & measurable)</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-[12px] font-bold text-[#082D72] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>24/7 Support <span className="font-normal text-slate-500">(Always by your side)</span></span>
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

      {/* ================= 3. WHY BUSINESSES CHOOSE DIGITAL ELITE SERVICES? ================= */}
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
            {whyChooseUsCards.map((item, index) => {
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
            {designPillars.map((pillar, idx) => (
              <div
                key={idx}
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. OUR DESIGN PROCESS -> A SIMPLE & EFFECTIVE DESIGN PROCESS ================= */}
      <section className="py-16 sm:py-24 relative z-10 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
              OUR DESIGN PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#082D72] tracking-tight leading-tight">
              A Simple & Effective Design Process
            </h2>
          </div>

          {/* Desktop Horizontal Timeline (Matches UI image: Steps 1, 3, 5 on top, Steps 2, 4 on bottom, connected by continuous gradient bar with squircle badges 1-5) */}
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
                    
                    {/* Top Content Slot (Steps 1, 3, 5) */}
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

                    {/* Centered Squircle Badge 1-5 */}
                    <div className="w-[44px] h-[50px] rounded-[14px] bg-white border-[1.5px] border-[#3b82f6] shadow-[0_4px_14px_rgba(0,102,255,0.14)] flex items-center justify-center text-[17px] font-black text-[#0066ff] z-20 my-2">
                      {step.step}
                    </div>

                    {/* Bottom Content Slot (Steps 2, 4) */}
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
                <div className="w-[42px] h-[48px] rounded-[14px] bg-white border-[1.5px] border-[#3b82f6] shadow-xs flex items-center justify-center text-[16px] font-black text-[#0066ff] shrink-0">
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
              Ready to Elevate Your Brand?
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Let's create stunning designs that leave a lasting impression and drive your business forward.
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
export default WebDevelopmentServicePage;
