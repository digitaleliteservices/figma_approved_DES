import React from 'react';
import { ArrowRight, Megaphone, Search, Share2, Code2, Palette, Filter } from 'lucide-react';

export const TailoredServicesSection = ({ onSelectService }) => {
  const serviceCards = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description:
        'Boost your visibility and rank higher on Google search results with our data-driven digital marketing and SEO strategies.',
      color: '#10b981', // Emerald Green
      badgeBg: 'bg-[#10b981]',
      badgeBorder: 'border-[#10b981]/20',
      btnBg: 'bg-[#10b981] hover:bg-[#059669]',
      btnShadow: 'shadow-[0_8px_20px_rgba(16,185,129,0.25)]',
      icon: Megaphone,
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description:
        'Rank your website higher on Google searches with our data-driven digital marketing and SEO strategies.',
      color: '#0066ff', // Electric Blue
      badgeBg: 'bg-[#0066ff]',
      badgeBorder: 'border-[#0066ff]/20',
      btnBg: 'bg-[#0066ff] hover:bg-[#0052cc]',
      btnShadow: 'shadow-[0_8px_20px_rgba(0,102,255,0.25)]',
      icon: Search,
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      description:
        'Boost your visibility and viral reach on social platforms with our hyper-targeted content and paid strategies.',
      color: '#8b5cf6', // Violet Purple
      badgeBg: 'bg-[#8b5cf6]',
      badgeBorder: 'border-[#8b5cf6]/20',
      btnBg: 'bg-[#8b5cf6] hover:bg-[#7c3aed]',
      btnShadow: 'shadow-[0_8px_20px_rgba(139,92,246,0.25)]',
      icon: Share2,
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        'High-performance, responsive websites built with the latest technologies to convert visitors into customers.',
      color: '#ec4899', // Pink / Magenta
      badgeBg: 'bg-[#ec4899]',
      badgeBorder: 'border-[#ec4899]/20',
      btnBg: 'bg-[#ec4899] hover:bg-[#db2777]',
      btnShadow: 'shadow-[0_8px_20px_rgba(236,72,153,0.25)]',
      icon: Code2,
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description:
        'Creative visual solutions that capture attention and communicate your brand message effectively.',
      color: '#f97316', // Orange
      badgeBg: 'bg-[#f97316]',
      badgeBorder: 'border-[#f97316]/20',
      btnBg: 'bg-[#f97316] hover:bg-[#ea580c]',
      btnShadow: 'shadow-[0_8px_20px_rgba(249,115,22,0.25)]',
      icon: Palette,
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description:
        'Strategic PPC and email campaigns designed to fill your sales pipeline with qualified prospects.',
      color: '#14b8a6', // Teal
      badgeBg: 'bg-[#14b8a6]',
      badgeBorder: 'border-[#14b8a6]/20',
      btnBg: 'bg-[#14b8a6] hover:bg-[#0d9488]',
      btnShadow: 'shadow-[0_8px_20px_rgba(20,184,166,0.25)]',
      icon: Filter,
    },
  ];

  return (
    <section
      id="services-offerings"
      className="relative isolate w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none"
    >
      {/* ================= EXACT BACKGROUND CIRCLES (MATCHING UI) ================= */}
      {/* 1. Top-Left Floating Circle */}
      <div
        className="
          absolute
          top-4 sm:top-6 lg:top-8
          left-6 sm:left-10 lg:left-14 xl:left-20
          w-[120px] sm:w-[140px] lg:w-[160px]
          h-[120px] sm:h-[140px] lg:h-[160px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 2. Middle-Left Soft Blurred Dot */}
      <div
        className="
          absolute
          top-28 sm:top-32 lg:top-36
          left-20 sm:left-28 lg:left-36 xl:left-44
          w-12 sm:w-14 lg:w-16
          h-12 sm:h-14 lg:h-16
          rounded-full
          pointer-events-none
          opacity-80
          blur-[2px]
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 3. Giant Right Sweeping Circle */}
      <div
        className="
          absolute
          top-1 sm:top-1 lg:top-2
          -right-28 sm:-right-40 lg:-right-52 xl:-right-11
          w-[560px] sm:w-[660px] lg:w-[740px] xl:w-[250px]
          h-[560px] sm:h-[660px] lg:h-[740px] xl:h-[250px]
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
            WHAT WE OFFER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-extrabold text-[#062A78] tracking-[-0.03em] leading-tight mb-4">
            Tailored Services Built For Scale
          </h2>
          <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Explore our core digital service offerings, engineered to transform your online presence and
            accelerate business performance.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1240px] mx-auto">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-[26px] sm:rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-[0_12px_36px_rgba(6,42,120,0.04)] hover:shadow-[0_20px_45px_rgba(6,42,120,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Color Pill Accent / Badge with Icon */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`h-2 sm:h-2.5 w-16 sm:w-20 rounded-full ${service.badgeBg} flex items-center justify-center`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#062A78] tracking-tight leading-snug mb-3 group-hover:text-[#0066ff] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#475569] sm:text-[#334155] text-xs sm:text-[13.5px] leading-[1.68] font-normal mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Color Button: "Learn More →" */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectService?.(service.title)}
                    className={`inline-flex items-center gap-2 ${service.btnBg} ${service.btnShadow} text-white font-bold text-xs sm:text-[13px] px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer active:scale-95`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
