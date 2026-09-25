import React from 'react';
import { ArrowRight } from 'lucide-react';
import boardroomImg from '../../assets/images/cta_boardroom_team_1790061940817.jpg';

export const CtaSection = ({ onStartProject }) => {
  return (
    <section
      id="contact"
      className="relative w-full bg-white overflow-hidden select-none py-16 sm:py-20 lg:py-24 border-t border-slate-100"
    >
      {/* ================= BACKGROUND BLUE CIRCLE (EXACT TO REFERENCE) ================= */}
      {/* Large Sky-Blue Circle bridging the left content and the right boardroom photo */}
      <div
        id="cta-background-circle"
        className="absolute left-[36%] sm:left-[40%] lg:left-[44%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[460px] sm:w-[580px] lg:w-[680px] xl:w-[740px] h-[460px] sm:h-[580px] lg:h-[680px] xl:h-[740px] rounded-full pointer-events-none z-0"
        style={{
          backgroundColor: '#daf0ff', // Soft sky blue matching reference
        }}
      />

      {/* Main Container */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center pr-0 lg:pr-4">
            {/* Eyebrow: Electric Blue, uppercase tracking */}
            <div className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.09em] uppercase mb-4 sm:mb-5">
              <span>LET'S WORK TOGETHER</span>
            </div>

            {/* 2-Line Display Heading: "Let's turn it into / impact." */}
            <h2 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-[#0a1e38] tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6">
              Let's turn it <span className="text-[#0066ff]">into</span> <br />
              <span className="text-[#0066ff]">impact.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-600 sm:text-slate-700 text-sm sm:text-[15px] xl:text-[16px] font-medium leading-[1.65] max-w-[440px] mb-8 sm:mb-10">
              Tell us what you're building, what you're trying to solve, or where you want to grow. We'll
              help you find the right digital solution.
            </p>

            {/* Golden Yellow CTA Button */}
            <div>
              <button
                id="cta-start-project-btn"
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 bg-[#ffba00] hover:bg-[#faa307] active:scale-98 text-[#0a1e38] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-[14px] shadow-[0_10px_25px_rgba(255,186,0,0.45)] hover:shadow-[0_14px_32px_rgba(255,186,0,0.58)] transition-all duration-200 cursor-pointer text-sm sm:text-[15px]"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#0a1e38]" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT BOARDROOM TEAM IMAGE ================= */}
          <div className="lg:col-span-6 xl:col-span-7 relative w-full flex items-center justify-end">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.07)]">
              {/* Photo */}
              <img
                src={boardroomImg}
                alt="Diverse team of creative and technology professionals collaborating in modern glass boardroom"
                className="w-full h-full object-cover object-center"
              />

              {/* Seamless Soft Left Feather/Gradient Blend (Fades smoothly into white background on desktop) */}
              <div
                className="hidden lg:block absolute inset-y-0 left-0 w-28 xl:w-36 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
