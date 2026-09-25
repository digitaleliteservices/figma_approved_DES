import React from 'react';
import { ArrowRight } from 'lucide-react';
import teamMeetingImg from '../../assets/images/cta_team_meeting_clean.png';

export const CtaSection = ({ onStartProject }) => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden select-none bg-gradient-to-r from-[#f6faff] via-[#edf5fd] to-[#e6f1fc] min-h-[420px] lg:min-h-[440px] xl:min-h-[480px] flex items-center border-t border-slate-100"
    >
      {/* ================= BACKGROUND BLUE CIRCLE (EXACT TO REFERENCE) ================= */}
      {/* Soft sky-blue circular accent bridging left typography and right photography */}
      {/* <div
        id="cta-background-circle"
        className="hidden lg:block absolute left-[45%] xl:left-[47%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[520px] h-[520px] xl:w-[600px] xl:h-[600px] rounded-full pointer-events-none z-0"
        style={{
          backgroundColor: '#C2E7FA',
        }}
      /> */}

      {/* Subtle Mobile Glow */}
    <div
  className="
    lg:hidden
    absolute
    -top-12
    -left-32
    w-[420px]
    h-[620px]
    pointer-events-none
    opacity-70
    blur-[1px]
  "
  style={{
    backgroundColor: "#C2E7FA",
    borderRadius: "50% 50% 50% 50% / 35% 35% 35% 35%",
  }}
/>

      {/* Main Container */}
      <div className="w-full max-w-[1440px]  mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center ">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center ">
            {/* Eyebrow: Electric Blue uppercase */}
            <div className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#0878F9] tracking-[0.12em] uppercase mb-4 sm:mb-5">
              <span>LET'S WORK TOGETHER</span>
            </div>

            {/* Headline: "Let's turn it into" / "impact." */}
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[42px] font-bold text-[#082D72] tracking-[-0.03em] leading-[1.08] mb-5 sm:mb-6">
              Let's turn it <span className="text-[#0878F9]">into</span> <br />
              <span className="text-[#0878F9]">impact.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#4A607A] text-sm sm:text-[15px] xl:text-[16px] font-normal leading-[1.65] max-w-[450px] mb-8 sm:mb-10">
              Tell us what you're building, what you're trying to solve, or where you want to grow. We'll
              help you find the right digital solution.
            </p>

            {/* Golden Yellow Full Pill CTA Button */}
            <div>
              <button
                id="cta-start-project-btn"
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 bg-[#FDCE31] hover:bg-[#F8C41A] active:scale-98 text-[#082D72] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_10px_25px_-4px_rgba(253,206,49,0.55)] hover:shadow-[0_14px_32px_-4px_rgba(253,206,49,0.7)] transition-all duration-200 cursor-pointer text-sm sm:text-[15px]"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5 text-[#082D72]" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT BOARDROOM TEAM PHOTO (MOBILE / TABLET VIEW) ================= */}
          <div className="lg:hidden relative w-full rounded-2xl overflow-hidden shadow-lg mt-2">
            <img
              src={teamMeetingImg}
              alt="Digital Elite Services team collaborating around conference table in modern office"
              className="w-full h-[260px] sm:h-[340px] object-cover object-center"
            />
          </div>

        </div>
      </div>

      {/* ================= RIGHT BOARDROOM TEAM PHOTO (DESKTOP FULL BLEED) ================= */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[51%] xl:w-[53%] 2xl:w-[55%] z-0 overflow-hidden pointer-events-none">
        <img
          src={teamMeetingImg}
          alt="Digital Elite Services team collaborating around conference table in modern office"
          className="w-full h-full object-cover object-left"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 24px, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 24px, black 100%)',
          }}
        />
      </div>
    </section>
  );
};

