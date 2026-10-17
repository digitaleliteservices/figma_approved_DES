import React from 'react';

/**
 * HeroMarqueeBar
 * Continuous right-to-left moving ticker bar at the bottom of the Hero section.
 * Displays enterprise consulting statement with seamless infinite loop.
 */
const MARQUEE_TEXT = "Not Just a Digital Marketer – Enterprise-Grade Consulting for Brand, Marketing, Design Psychology & Growth Strategy";

export const HeroMarqueeBar = ({ className = '', duration = 80 }) => {
  // 6 repetitions per track ensures seamless coverage even on 4K/ultrawide displays
  const items = Array.from({ length: 6 }, () => MARQUEE_TEXT);

  return (
    <div
      className={`relative w-full bg-[#1e2024] py-2.5 sm:py-3 border-y border-white/10 overflow-hidden select-none z-20 ${className}`}
      aria-label="DES Agency Consulting Ticker"
    >
      {/* Edge gradient vignettes for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#1e2024] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#1e2024] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track moving right-to-left slowly */}
      <div
        className="flex w-max animate-marquee-left hover:[animation-play-state:paused] cursor-default items-center"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Track Copy 1 */}
        <div className="flex shrink-0 items-center">
          {items.map((text, i) => (
            <div key={`track-1-${i}`} className="inline-flex items-center shrink-0">
              <span className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] font-semibold text-white tracking-wide">
                {text}
              </span>
              <span className="mx-6 sm:mx-8 text-[#ffb703] text-xs font-bold select-none opacity-85">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Track Copy 2 (Identical duplicate for 100% seamless infinite loop) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((text, i) => (
            <div key={`track-2-${i}`} className="inline-flex items-center shrink-0">
              <span className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] font-semibold text-white tracking-wide">
                {text}
              </span>
              <span className="mx-6 sm:mx-8 text-[#ffb703] text-xs font-bold select-none opacity-85">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMarqueeBar;
