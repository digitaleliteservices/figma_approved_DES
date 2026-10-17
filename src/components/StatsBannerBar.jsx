import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Users, TrendingUp, Star } from 'lucide-react';
import { AnimatedStatNumber } from './AnimatedStatNumber.jsx';

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

function parseStatNumber(str) {
  if (typeof str === 'number') {
    return { target: str, prefix: '', suffix: '' };
  }
  const match = String(str).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || '',
      target: parseFloat(match[2]) || 0,
      suffix: match[3] || '',
    };
  }
  return { target: 0, prefix: '', suffix: str };
}

export const StatsBannerBar = ({ stats = defaultStatsData, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check visibility on mount and during scroll
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < windowHeight - 30 && rect.bottom > 30;
      setIsVisible(inView);
    };

    checkVisibility();

    // IntersectionObserver to detect when scrolled into/out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-[#062A78] py-4 sm:py-6 border-t border-slate-800/50 overflow-hidden ${className}`}
    >
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
          {stats.map((item, index) => {
            const Icon = item.icon;
            const parsed = parseStatNumber(item.number);
            return (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-5 group transition-transform duration-200 hover:-translate-y-0.5 cursor-default"
              >
                <div className="shrink-0 text-[#ffba00] group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                    <AnimatedStatNumber
                      target={parsed.target}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      duration={1800}
                      isVisible={isVisible}
                    />
                  </div>
                  <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBannerBar;
