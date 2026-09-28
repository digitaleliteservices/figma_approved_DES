import React from 'react';
import { Search, Compass, Rocket, BarChart3 } from 'lucide-react';

export const StrategicProcessSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Research & Analysis',
      description:
        'We analyze your business, competitors, and target audience to formulate effective strategies.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Planning & Strategy',
      description:
        'Our experts build customized digital marketing plans aligned with your goals.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Execution',
      description:
        'We launch optimized campaigns across relevant channels to maximize performance.',
      icon: Rocket,
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description:
        'Continuous monitoring and improvements to ensure sustained engagement and ROI.',
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative isolate w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none">
      {/* Background Decorative Soft Sky-Blue Circle */}
      <div
        className="
          absolute
          top-1/3
          right-[-100px] sm:right-[-140px]
          w-[360px] sm:w-[360px]
          h-[360px] sm:h-[360px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />
      <div
        className="
          absolute
          -top-10
          left-[-100px] sm:left-[-50px]
          w-[340px] sm:w-[300px]
          h-[340px] sm:h-[300px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.14em] uppercase mb-3">
            STRATEGIC PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-bold text-[#062A78] tracking-[-0.03em] leading-tight mb-4">
            Simple Solutions!
          </h2>
          <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            We understand that no technical issues are alike. That's why we take the time to audit,
            define, and personalize your creative workflows.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-[26px] p-7 sm:p-8 border border-slate-100 shadow-[0_12px_36px_rgba(6,42,120,0.04)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.08)] transition-all duration-300 flex flex-col justify-start group"
              >
                {/* Top Row: Blue Icon on Left, Orange Step Number Badge on Right */}
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-[16px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#ff5722] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    {item.step}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-[19px] font-bold text-[#062A78] tracking-tight leading-snug mb-3 group-hover:text-[#0066ff] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#475569] sm:text-[#334155] text-xs sm:text-[13px] leading-[1.68] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
