import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import teamCollaboratingImg from '../../assets/images/about_team_collaborating_1790337271848.jpg';
import { useNavigate } from 'react-router-dom';

export const AboutSection = ({ onMoreAboutUs }) => {
  const navigate = useNavigate();

  const handleNavigateAbout = () => {
    if (onMoreAboutUs) {
      onMoreAboutUs();
    } else {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 1. EXACT LEFT BACKGROUND CIRCLE                                           */}
      {/* Sweeping large-radius arc with elevated center that starts widest at top  */}
      {/* and gracefully curves down and left along the typography edge.           */}
      {/* ========================================================================= */}
      <div
        className="
          absolute
          -top-[260px] sm:-top-[340px] lg:-top-[420px] xl:-top-[460px]
          -left-[280px] sm:-left-[380px] lg:-left-[480px] xl:-left-[540px]
          w-[580px] sm:w-[760px] lg:w-[940px] xl:w-[1020px]
          h-[580px] sm:h-[760px] lg:h-[940px] xl:h-[1020px]
          rounded-full
          pointer-events-none
          -z-10
        "
        style={{
          backgroundColor: '#ddf0fe',
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow Link: "ABOUT DIGITAL ELITE SERVICES →" */}
            <div
              onClick={handleNavigateAbout}
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.08em] uppercase mb-4 sm:mb-5 cursor-pointer hover:underline w-fit"
            >
              <span>ABOUT DIGITAL ELITE SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#0066ff] stroke-[2.5]" />
            </div>

            {/* Exact Display Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-extrabold text-[#062A78] tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6">
              Empowering businesses <br />
              through digital excellence <br />
              and <span className="text-[#0066ff]">real growth.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#475569] text-sm sm:text-[15px] xl:text-[16px] font-normal leading-[1.65] max-w-[560px] mb-7 sm:mb-9">
              DES (Digital Elite Services) is a premier full-service digital solutions agency. We
              combine strategy, human-centered design, modern engineering, and performance
              marketing to help ambitious businesses get noticed, trusted, and chosen.
            </p>

            {/* Thin Horizontal Divider (Exact to Screenshot) */}
            <div className="pt-6 sm:pt-7 border-t border-slate-200/90 max-w-[560px]">
              
              {/* 4 Stats Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
                
                {/* Stat 1: 150+ */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#062A78] tracking-tight leading-none">
                    150+
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                    Projects Completed
                  </div>
                </div>

                {/* Stat 2: 70+ */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#062A78] tracking-tight leading-none">
                    70+
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                    Happy Clients
                  </div>
                </div>

                {/* Stat 3: 300% */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#062A78] tracking-tight leading-none">
                    300%
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                    Average ROI Increase
                  </div>
                </div>

                {/* Stat 4: 5+ */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#062A78] tracking-tight leading-none">
                    5+
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                    Years of Innovation
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ================= RIGHT PHOTOGRAPHY CARD ================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center">
            
            {/* Wrapper Anchoring Photo Card and Right Background Circle Exactly */}
            <div className="relative w-full max-w-[450px] lg:max-w-[480px]">
              
              {/* ================================================================= */}
              {/* 2. EXACT RIGHT BACKGROUND CIRCLE                                  */}
              {/* Anchored to Photo Card: peaks ~75px above and ~80px to the right, */}
              {/* curving smoothly behind the card exactly matching the UI.         */}
              {/* ================================================================= */}
              <div
                className="
                  absolute
                  -top-16 sm:-top-20 lg:-top-24
                  -right-14 sm:-right-18 lg:-right-24
                  w-[480px] sm:w-[540px] lg:w-[600px]
                  h-[480px] sm:h-[540px] lg:h-[600px]
                  rounded-full
                  pointer-events-none
                  -z-10
                "
                style={{
                  backgroundColor: '#ddf0fe',
                }}
              />

              {/* Rounded Photo Frame (Exact to Screenshot) */}
              <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_24px_50px_-12px_rgba(6,42,120,0.18)] border border-slate-100/80 bg-white aspect-square z-10">
                <img
                  src={teamCollaboratingImg}
                  alt="Digital Elite Services team collaborating around conference table with laptops"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                />
                
                {/* Subtle Bottom Scrim for Badge Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Floating Translucent Pill Badge: "Our Passion" */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-[22px] px-4.5 sm:px-5 py-3.5 sm:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/80 flex items-center justify-between z-20">
                  <div className="pr-2">
                    <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#062A78] leading-tight">
                      Our Passion
                    </h4>
                    <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-tight mt-0.5">
                      Turning ideas into measurable impact
                    </p>
                  </div>

                  {/* Circular Golden Yellow Star Accent Button */}
                  <button
                    type="button"
                    onClick={handleNavigateAbout}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fec006] hover:bg-[#faa307] text-[#062A78] flex items-center justify-center shadow-xs shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                    aria-label="Our Passion & Innovation"
                  >
                    <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#062A78] text-[#062A78]" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
