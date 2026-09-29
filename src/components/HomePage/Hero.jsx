import React from 'react';
import { ArrowRight, Code2, Send, Settings } from 'lucide-react';
import heroOfficeImg from '../../assets/images/hero_office_exact_1790003422960.jpg';

export const Hero = ({
  onStartProject,
  onExploreServices,
  onSelectService,
}) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white min-h-[420px] lg:min-h-[450px] xl:min-h-[500px] flex items-center"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative h-full">
          <div className="relative w-full lg:max-w-[540px] xl:max-w-[620px] pt-6 sm:pt-10 lg:pt-12">
            <div
              className="absolute -top-28 sm:-top-32 lg:-top-36 -left-28 sm:-left-36 lg:-left-44 w-[330px] h-[330px] sm:w-[370px] sm:h-[370px] lg:w-[410px] lg:h-[410px] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(196, 226, 254, 0.95) 0%, rgba(206, 233, 255, 0.82) 30%, rgba(216, 238, 255, 0.5) 50%, rgba(228, 244, 255, 0.18) 68%, rgba(255, 255, 255, 0) 82%)',
                filter: 'blur(16px)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] xl:w-[58%] z-0 select-none pointer-events-auto">
        <img
          src={heroOfficeImg}
          alt="Modern bright corner office overlooking city skyline with laptop, notebook and ergonomic chair"
          className="w-full h-full object-cover object-left-top xl:object-center"
        />

        <div className="absolute inset-y-0 left-0 w-44 xl:w-60 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
        
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />

        <div className="absolute top-6 xl:top-8 right-8 xl:right-14 bg-white/95 backdrop-blur-md rounded-[26px] p-4 sm:p-5 shadow-[0_18px_40px_rgba(0,0,0,0.09),0_2px_6px_rgba(0,0,0,0.04)] border border-slate-100/90 w-48 sm:w-52 z-20 transition-transform duration-300 hover:scale-[1.02]">
          <div className="space-y-3 sm:space-y-3.5">
            <button
              onClick={() => onSelectService?.('Strategy')}
              className="w-full flex items-center gap-3 px-1.5 py-1 rounded-xl hover:bg-sky-50/80 transition-colors text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0c2340] group-hover:text-[#0066ff] transition-colors">
                Strategy
              </span>
            </button>

            <button
              onClick={() => onSelectService?.('Design')}
              className="w-full flex items-center gap-3 px-1.5 py-1 rounded-xl hover:bg-sky-50/80 transition-colors text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0c2340] group-hover:text-[#0066ff] transition-colors">
                Design
              </span>
            </button>

            <button
              onClick={() => onSelectService?.('Technology')}
              className="w-full flex items-center gap-3 px-1.5 py-1 rounded-xl hover:bg-sky-50/80 transition-colors text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0c2340] group-hover:text-[#0066ff] transition-colors">
                Technology
              </span>
            </button>

            <button
              onClick={() => onSelectService?.('Marketing')}
              className="w-full flex items-center gap-3 px-1.5 py-1 rounded-xl hover:bg-sky-50/80 transition-colors text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <Send className="w-3.5 h-3.5 -rotate-12" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0c2340] group-hover:text-[#0066ff] transition-colors">
                Marketing
              </span>
            </button>

            <button
              onClick={() => onSelectService?.('Automation')}
              className="w-full flex items-center gap-3 px-1.5 py-1 rounded-xl hover:bg-sky-50/80 transition-colors text-left group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#0c2340] group-hover:text-[#0066ff] transition-colors">
                Automation
              </span>
            </button>
          </div>
        </div>

        <div
          id="hero-growth-partner-badge"
          onClick={onStartProject}
          className="absolute bottom-0 right-0 bg-[#133a6cff] hover:bg-[#0c2445] text-white rounded-tl-2xl px-6 py-4 shadow-2xl border-t border-l border-slate-700/40 z-20 select-none cursor-pointer transition-colors group"
        >
          <div className="text-[11px] text-slate-300 font-semibold">
            Your
          </div>
          <div className="text-[14px] font-bold text-white tracking-tight leading-snug">
            Digital Growth
          </div>
          <div className="text-[13px] font-bold text-[#ffb703] group-hover:text-amber-300 flex items-center gap-1.5 mt-0.5 transition-colors">
            <span>Partner</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:max-w-[540px] xl:max-w-[620px] pt-6 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
          
          <div className="inline-flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs md:text-[13px] font-bold text-[#062A78] tracking-[0.18em] uppercase mb-4 sm:mb-6">
            <span>IDEAS</span>
            <span className="text-[#0088ff] font-extrabold text-sm leading-none">×</span>
            <span>STRATEGY</span>
            <span className="text-[#0088ff] font-extrabold text-sm leading-none">×</span>
            <span>TECHNOLOGY</span>
            <span className="text-[#0088ff] font-extrabold text-sm leading-none">×</span>
            <span>GROWTH</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-[38px] xl:text-[46px] font-bold text-[#062A78] tracking-[-0.035em] mb-5 sm:mb-6" style={{ lineHeight: '1.1' }}>
            Digital <br />
            Solutions for <br />
            <span className="text-[#0066ff]">Real Growth.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-[17px] font-medium leading-relaxed max-w-[480px] mb-8 sm:mb-9">
            We design, build and grow digital experiences that help businesses
            get noticed, trusted and chosen.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-9 sm:mb-11">
            <button
              id="hero-cta-start-project"
              onClick={onStartProject}
              className="group inline-flex items-center gap-2.5 bg-[#ffb703] hover:bg-[#faa307] active:scale-98 text-[#0c2340] font-bold px-7 sm:px-8 py-3.5 rounded-full shadow-[0_4px_18px_rgba(255,183,3,0.38)] hover:shadow-[0_6px_24px_rgba(255,183,3,0.52)] transition-all duration-200 cursor-pointer text-sm sm:text-[15px]"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#0c2340]" />
            </button>

            <button
              id="hero-cta-explore-services"
              onClick={onExploreServices}
              className="group inline-flex items-center gap-2.5 border-[1.5px] border-[#062A78] bg-transparent hover:bg-[#062A78] hover:text-white active:scale-98 text-[#062A78] font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer text-xs sm:text-[13px]"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 " />
            </button>
          </div>

          <div className="w-full max-w-[490px] h-[1px] bg-slate-200/90 mb-7 sm:mb-9" />

          <div className="relative max-w-[500px]">
            <div className="absolute -left-12 -bottom-10 w-48 h-48 rounded-full bg-sky-100/60 blur-2xl z-0 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-4 gap-3 sm:gap-6 items-start">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#062A78] tracking-tight">
                  50+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 leading-snug">
                  Businesses
                  <br />
                  Supported
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#062A78] tracking-tight">
                  30+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 leading-snug">
                  Happy
                  <br />
                  Clients
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#062A78] tracking-tight">
                  7
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 leading-snug">
                  Digital
                  <br />
                  Services
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#062A78] tracking-tight">
                  24/7
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1 leading-snug">
                  Support
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="block lg:hidden w-full px-4 pb-12">
        <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
          <img
            src={heroOfficeImg}
            alt="Modern bright corner office overlooking city skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 right-0 bg-[#091e3a] text-white rounded-tl-xl px-4 py-2.5 shadow-lg">
            <div className="text-[10px] text-slate-300">Your</div>
            <div className="text-xs font-bold text-white">Digital Growth</div>
            <div className="text-xs font-bold text-[#ffb703] flex items-center gap-1">
              <span>Partner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
