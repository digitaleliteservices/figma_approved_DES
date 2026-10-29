import React from 'react';
import groupImg1 from '../../assets/images/group-img-1.webp';
import groupImg2 from '../../assets/images/group-img-2.webp';
import groupImg3 from '../../assets/images/group-img-3.webp';

import { motion } from 'motion/react';

/**
 * ShowcaseSection
 * 
 * "Showcasing Our Work"
 * Fully aligned with the DES brand design system:
 * - Brand Deep Navy #062A78 heading with Electric Blue #0066ff accent
 * - Brand Electric Blue eyebrow with consistent tracking & typography
 * - Clean white background with smooth white gradient edge masks
 * - Seamless continuous marquee flowing loop
 */
export const ShowcaseSection = () => {
  // Duplicated image sequence for seamless continuous marquee loop (0% to -50% translateX)
  const images = [groupImg1, groupImg2, groupImg3];

  return (
    <section 
      id="showcase" 
      className="relative z-10 bg-white border-b border-slate-100 py-10 sm:py-16 lg:py-20 overflow-hidden select-none"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[520px] h-[300px] sm:h-[400px] bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 lg:mb-12">
        {/* Section Header with smooth entrance motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow: Matches SelectedWork / Services / About */}
          <div className="inline-flex items-center justify-center text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.08em] uppercase mb-2.5 sm:mb-3.5">
            <span>CREATIVE EXCELLENCE & DELIVERABLES</span>
          </div>

          {/* Main Title: Title-case with #062A78 Brand Navy & #0066ff Electric Blue Accent */}
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#062A78] tracking-[-0.03em] leading-tight">
            Showcasing our <span className="text-[#0066ff]">work.</span>
          </h2>

          {/* Subtitle: Consistent slate-600 typography */}
          <p className="text-xs sm:text-base text-slate-600 sm:text-slate-700 font-normal mt-2.5 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
            A glimpse of client campaign deliverables, high-converting landing pages, creative ads, 
            and marketing assets engineered for real business scale.
          </p>
        </motion.div>
      </div>

      {/* Continuous Marquee Strip */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden pointer-events-none select-none">
          <div 
            className="animate-marquee-left flex items-center w-max pointer-events-none select-none"
            style={{ animationDuration: '45s', animationPlayState: 'running' }}
          >
            {/* Primary Track */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-6 pr-3 sm:pr-6">
              {images.map((src, index) => (
                <img
                  key={`track-1-${index}`}
                  src={src}
                  alt={`Showcasing Deliverables ${index + 1}`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="h-48 xs:h-56 sm:h-72 md:h-88 lg:h-[430px] w-auto max-w-none shrink-0 object-contain select-none pointer-events-none"
                />
              ))}
            </div>

            {/* Seamless Duplicate Track for Infinite Loop */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-6 pr-3 sm:pr-6" aria-hidden="true">
              {images.map((src, index) => (
                <img
                  key={`track-2-${index}`}
                  src={src}
                  alt={`Showcasing Deliverables ${index + 1}`}
                  loading="lazy"
                  className="h-48 xs:h-56 sm:h-72 md:h-88 lg:h-[430px] w-auto max-w-none shrink-0 object-contain select-none pointer-events-none"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;
