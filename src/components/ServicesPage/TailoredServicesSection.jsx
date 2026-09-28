import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2, TrendingUp, Users, Code, PenTool, Filter, ArrowRight } from 'lucide-react';

export const TailoredServicesSection = ({ onSelectService }) => {
  const navigate = useNavigate();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardClick = (service) => {
    if (service.id === 'digital-marketing') {
      navigate('/services/digital-marketing');
    } else if (service.id === 'seo-optimization') {
      navigate('/services/seo-optimization');
    } else if (service.id === 'social-media-marketing') {
      navigate('/services/social-media-marketing');
    } else if (service.id === 'web-development') {
      navigate('/services/web-development');
    } else if (service.id === 'graphic-design') {
      navigate('/services/graphic-design');
    } else if (service.id === 'lead-generation') {
      navigate('/services/lead-generation');
    } else if (onSelectService) {
      onSelectService(service.title);
    }
  };

  const serviceCards = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description:
        'Boost your visibility and rank higher on Google search results with our data-driven digital marketing and SEO strategies.',
      pillBg: 'bg-[#22c55e]',
      btnBg: 'bg-[#22c55e] hover:bg-[#16a34a]',
      icon: Volume2,
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description:
        'Boost your visibility and rank higher on Google search results with our data-driven digital marketing and SEO strategies.',
      pillBg: 'bg-[#0066ff]',
      btnBg: 'bg-[#0066ff] hover:bg-[#0052cc]',
      icon: TrendingUp,
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      description:
        'Boost your visibility and rank higher on Google search results with our data-driven digital marketing and SEO strategies.',
      pillBg: 'bg-[#8b5cf6]',
      btnBg: 'bg-[#8b5cf6] hover:bg-[#7c3aed]',
      icon: Users,
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        'High-performance, responsive websites built with the latest technologies to convert visitors into customers.',
      pillBg: 'bg-[#e11d48]',
      btnBg: 'bg-[#e11d48] hover:bg-[#be123c]',
      icon: Code,
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description:
        'Creative visual solutions that capture attention and communicate your brand message effectively.',
      pillBg: 'bg-[#ea580c]',
      btnBg: 'bg-[#ea580c] hover:bg-[#c2410c]',
      icon: PenTool,
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description:
        'Strategic PPC and email campaigns designed to fill your sales pipeline with qualified prospects.',
      pillBg: 'bg-[#059669]',
      btnBg: 'bg-[#059669] hover:bg-[#047857]',
      icon: Filter,
    },
  ];

  return (
    <section
      id="services-offerings"
      className="relative isolate w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none"
    >
      {/* ================= EXACT BACKGROUND CIRCLES ================= */}
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
          -top-12 sm:-top-16 lg:-top-20
          -right-28 sm:-right-40 lg:-right-52 xl:-right-60
          w-[560px] sm:w-[660px] lg:w-[740px] xl:w-[800px]
          h-[560px] sm:h-[660px] lg:h-[740px] xl:h-[800px]
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
            const isHovered = hoveredCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => handleCardClick(service)}
                className={`bg-white rounded-[28px] sm:rounded-[30px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative group cursor-pointer border-2 ${
                  isHovered
                    ? 'border-[#3b82f6] shadow-[0_16px_36px_rgba(0,102,255,0.08)]'
                    : 'border-slate-100 hover:border-[#3b82f6] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.08)]'
                }`}
              >
                <div>
                  {/* Top Colored Pill Capsule with Centered White Icon */}
                  <div
                    className={`w-full h-[26px] sm:h-[28px] rounded-full ${service.pillBg} flex items-center justify-center mb-6 shadow-xs`}
                  >
                    <Icon className="w-4 h-4 text-white stroke-[2.2]" />
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl sm:text-[23px] font-black tracking-tight leading-snug mb-3.5 transition-colors duration-200 ${
                      isHovered ? 'text-[#0066ff]' : 'text-[#062A78] group-hover:text-[#0066ff]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#334155] text-xs sm:text-[13.5px] leading-[1.65] font-normal min-h-[58px]">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Subtle Horizontal Divider Line */}
                  <div className="w-full h-[1px] bg-slate-100 my-6" />

                  {/* Bottom "Learn more →" Pill Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(service);
                    }}
                    className={`inline-flex items-center gap-1.5 ${service.btnBg} text-white font-bold text-xs sm:text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-xs`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
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
