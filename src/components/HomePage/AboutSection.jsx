import React from 'react';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import teamImg from '../../assets/images/team_collaboration_1790002998338.jpg';

export const AboutSection = ({
  onMoreAboutUs,
  onPillarClick,
}) => {
  const pillars = [
    {
      id: 'client-first',
      title: 'Client First Approach',
      icon: Users,
    },
    {
      id: 'result-driven',
      title: 'Result Driven Solutions',
      icon: TrendingUp,
    },
    {
      id: 'creative-thinking',
      title: 'Creative Thinking',
      icon: Lightbulb,
    },
    {
      id: 'long-term',
      title: 'Long Term Partnership',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-16 sm:py-24 bg-white"
    >
      {/* Top-Left Decorative Circle */}
      {/* ================= TOP-LEFT ORGANIC BLUE BACKGROUND ================= */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-[620px]
          h-[620px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[450px]
          lg:h-[450px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{
          background:
            'linear-gradient(135deg, #d8efff 0%, #c6e5ff 45%, #eef8ff 100%)',
        }}
      />
      <div
        className="
          absolute
          -right-28
          w-[270px]
          h-[270px]
          sm:w-[280px]
          sm:h-[280px]
          lg:w-[280px]
          lg:h-[280px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{
          backgroundColor: '#cbefffff',
        }}
      />
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 sm:w-[540px] sm:h-[540px] rounded-full bg-sky-100/60 blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-blue-50/80 blur-2xl -z-10 pointer-events-none" />
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Organic Pebble Shaped Team Photo with Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Floating Decorative Dot (Top Right) */}
              <div className="absolute -top-3 right-6 sm:right-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#93c5fd] shadow-md z-10 animate-pulse" />

              {/* Floating Decorative Accent (Left edge) */}
              <div className="absolute top-1/2 -left-3 sm:-left-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fde047] opacity-80 z-10" />

              {/* Organic Pebble Container with Team Image */}
              <div
                className="relative overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
                }}
              >
                <img
                  src={teamImg}
                  alt="DES professional team collaborating in a modern office"
                  className="w-full h-80 sm:h-96 md:h-[440px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Circular Floating Badge: Plus Jakarta Sans 700 */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0066ff] text-white flex flex-col items-center justify-center text-center shadow-xl z-20 transition-transform duration-300 hover:scale-105 select-none border-2 border-white">
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  People
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  Ideas
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  Growth
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Pillars */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 relative z-10">
            
            {/* Section Eyebrow: Plus Jakarta Sans 700 */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066ff] tracking-wide uppercase">
              <span>ABOUT DES</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Section H2: Plus Jakarta Sans 800 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1e38] tracking-tight leading-[1.12]">
              A team that turns <br />
              ideas into <span className="text-[#0066ff]">impact.</span>
            </h2>

            {/* Body paragraph: Plus Jakarta Sans 500 */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed z-10">
              DES is a digital solutions partner helping businesses transform
              ideas into powerful digital experiences. We combine strategy,
              design, technology and marketing to attract customers, build trust
              and create sustainable growth.
            </p>

            {/* Buttons: Plus Jakarta Sans 700 */}
            <div>
              <button
                id="about-cta-more-about-us"
                onClick={onMoreAboutUs}
                className="group inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] active:scale-98 text-slate-900 font-bold px-7 sm:px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-sm sm:text-[15px]"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 4 Pillars Row: Card headings: Plus Jakarta Sans 700 */}
            <div className="pt-6 sm:pt-8 border-t border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const isNotLast = index < pillars.length - 1;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => onPillarClick?.(pillar.title)}
                      className={`text-center cursor-pointer group px-2 sm:px-3 ${
                        isNotLast
                          ? 'sm:border-r sm:border-slate-200'
                          : ''
                      }`}
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-[#0066ff] flex items-center justify-center mx-auto mb-2.5 sm:mb-3 group-hover:bg-[#0066ff] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 leading-tight group-hover:text-[#0066ff] transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
