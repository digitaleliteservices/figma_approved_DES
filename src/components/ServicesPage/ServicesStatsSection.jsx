import React from 'react';

export const ServicesStatsSection = () => {
  const stats = [
    {
      value: '500+',
      label: 'Projects Delivered',
      isItalic: false,
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      isItalic: false,
    },
    {
      value: '50+',
      label: 'Expert Team Members',
      isItalic: false,
    },
    {
      value: '24/7',
      label: 'Premium Support',
      isItalic: true,
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center px-4 sm:px-6 relative ${
                idx !== stats.length - 1 ? 'md:border-r md:border-blue-100' : ''
              }`}
            >
              {/* Stat Number: Bold Dark Navy */}
              <div
                className={`text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#062A78] tracking-tight leading-none mb-2.5 ${
                  stat.isItalic ? 'italic' : ''
                }`}
              >
                {stat.value}
              </div>

              {/* Stat Label: Vibrant Electric Blue */}
              <div className="text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-tight leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
