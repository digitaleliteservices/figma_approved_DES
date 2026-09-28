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
    <div className="relative w-full bg-[#062A78] py-4 sm:py-6 border-t border-slate-800/50 overflow-hidden">
            
            {/* Subtle Wave Line Art: Left Side */}
            <div className="absolute inset-y-0 left-0 w-64 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
                <path
                  d="M 0 70 Q 60 45, 120 70 T 240 65"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 0 85 Q 70 60, 140 85 T 240 80"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 0 55 Q 80 35, 160 55 T 240 50"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>
    
            {/* Subtle Wave Line Art: Right Side */}
            <div className="absolute inset-y-0 right-0 w-64 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
                <path
                  d="M 240 70 Q 180 45, 120 70 T 0 65"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 240 85 Q 170 60, 100 85 T 0 80"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 240 55 Q 160 35, 80 55 T 0 50"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>
    
            {/* 4 Statistics Metrics */}
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center">
    
                {/* Metric 1: 150+ Projects Delivered */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="shrink-0 text-[#ffba00]">
                    <Trophy className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                      150+
                    </div>
                    <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium  leading-snug">
                      Projects Delivered
                    </div>
                  </div>
                </div>
    
                {/* Metric 2: 70+ Happy Clients */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="shrink-0 text-[#ffba00]">
                    <Users className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                      70+
                    </div>
                    <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                      Happy Clients
                    </div>
                  </div>
                </div>
    
                {/* Metric 3: 300% Average ROI Growth */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="shrink-0 text-[#ffba00]">
                    <TrendingUp className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                      300%
                    </div>
                    <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                      Average ROI Growth
                    </div>
                  </div>
                </div>
    
                {/* Metric 4: 5+ Years of Experience */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="shrink-0 text-[#ffba00]">
                    <Star className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                      5+
                    </div>
                    <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                      Years of Experience
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
    
          </div>
  );
};

export default StatsBannerBar;
