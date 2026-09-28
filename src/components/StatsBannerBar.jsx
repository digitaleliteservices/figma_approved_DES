import React from 'react';
import { Trophy, Users, TrendingUp, Star } from 'lucide-react';

export const defaultStatsData = [
  {
    icon: Trophy,
    number: '150+',
    label: 'Projects Delivered',
  },
  {
    icon: Users,
    number: '70+',
    label: 'Happy Clients',
  },
  {
    icon: TrendingUp,
    number: '300%',
    label: 'Average ROI Growth',
  },
  {
    icon: Star,
    number: '5+',
    label: 'Years of Experience',
  },
];

export const StatsBannerBar = ({ stats = defaultStatsData, className = '' }) => {
  return (
    <section
      className={`relative w-full py-8 sm:py-10 bg-[#022468] text-white overflow-hidden select-none shadow-inner ${className}`}
      style={{
        background: 'linear-gradient(90deg, #021e54 0%, #032770 35%, #052f85 70%, #032468 100%)',
      }}
    >
      {/* Background Flowing Wave Graphic (Matching image.png) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        <svg
          className="absolute w-[200%] h-full -left-1/4 top-0"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60 C 240 10, 480 110, 720 50 C 960 -10, 1200 90, 1440 40"
            stroke="#1d5bc7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0 90 C 300 30, 600 120, 900 70 C 1200 20, 1350 100, 1440 80"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M0 35 C 320 85, 640 15, 960 75 C 1280 15, 1380 65, 1440 45"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-between">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 sm:gap-4.5 justify-start sm:justify-center"
              >
                {/* Yellow / Golden Icon */}
                <div className="shrink-0 text-[#FFB703]">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 stroke-[2.2]" />
                </div>

                {/* Text Block: Number on Top, Label on Bottom */}
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-none tracking-tight">
                    {item.number}
                  </span>
                  <span className="text-xs sm:text-[13px] text-blue-100/90 font-medium leading-snug mt-1">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBannerBar;
