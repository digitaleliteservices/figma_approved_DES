import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ServicesSection = ({
  onSelectService,
  onViewAllServices,
}) => {
  const navigate = useNavigate();
  
  const serviceCards = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'High-performance websites and web applications.',
      iconBg: 'bg-[#0066ff]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to reach your audience.',
      iconBg: 'bg-[#7c3aed]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ),
    },
    {
      id: 'seo-optimization',
      title: 'SEO',
      description: 'Improve visibility and attract high-intent traffic.',
      iconBg: 'bg-[#0096c7]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="20" x2="6" y2="13" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="18" y1="20" x2="18" y2="9" />
          <polyline points="9 7 12 4 15 7" />
        </svg>
      ),
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement across platforms.',
      iconBg: 'bg-[#2563eb]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Creative designs that make your brand stand out.',
      iconBg: 'bg-[#0284c7]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description: 'Turn digital traffic into qualified opportunities.',
      iconBg: 'bg-[#f97316]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
    },
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Automation',
      description: 'Automate conversations and follow-ups.',
      iconBg: 'bg-[#22c55e]',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative w-full py-4 sm:py-5 lg:py-6 bg-white overflow-hidden select-none">
      {/* ================= BACKGROUND DECORATIVE ELEMENTS ================= */}
      
      {/* 1. Top Right Subtle Radial Glow */}
      <div className="absolute top-0 right-0 w-[520px] h-[460px] bg-gradient-to-bl from-sky-100/70 via-blue-50/40 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 2. Large Light-Blue Circle in Bottom-Right Corner (Exact match to reference) */}
      <div
        className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-32 md:-bottom-36 md:-right-36 lg:-bottom-44 lg:-right-44 w-[380px] sm:w-[460px] lg:w-[540px] h-[380px] sm:h-[460px] lg:h-[540px] rounded-full pointer-events-none -z-10"
        style={{
          backgroundColor: '#badcff',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10 mb-12 sm:mb-16">
          
          {/* Left Column: Eyebrow + 3-line Headline */}
          <div className="max-w-xl xl:max-w-2xl">
            {/* Eyebrows / Labels: Plus Jakarta Sans 700 */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.06em] uppercase mb-3.5 sm:mb-4">
              <span>OUR SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Section H2: Plus Jakarta Sans 800 */}
            <h2 className="text-4xl sm:text-5xl lg:text-[40px] font-bold text-[#062A78] tracking-[-0.03em] leading-[1.08]">
              Everything your <br />
              business <br />
              needs in <span className="text-[#0066ff]">one place.</span>
            </h2>
          </div>

          {/* Right Column: Left-aligned Description & Link Button */}
          <div className="lg:max-w-[440px] xl:max-w-[480px] lg:pt-6 flex flex-col items-start text-left">
            {/* Body paragraphs: Plus Jakarta Sans 500 */}
            <p className="text-[15px] sm:text-base text-[#051330ff] font-medium leading-[1.65] mb-4 sm:mb-5">
              From building your digital presence to generating leads and growing your audience,
              our services work together to deliver real business results.
            </p>

            {/* Buttons / Link: Plus Jakarta Sans 700 */}
            <button
              id="services-view-all-btn"
              onClick={()=>navigate("/services")}
              className="inline-flex items-center gap-2 text-[15px] sm:text-base font-bold text-[#0a1e38] hover:text-[#0066ff] transition-colors cursor-pointer group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ================= 7 HORIZONTAL CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 xl:gap-3.5">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              onClick={() => navigate(`/services/${card.id}`)}
              className="group relative bg-white rounded-[22px] p-4 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-[0_14px_34px_rgba(0,102,255,0.12)] hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[265px] cursor-pointer"
            >
              <div>
                {/* Top Squircle Icon */}
                <div
                  className={`w-12 h-12 rounded-[14px] ${card.iconBg} flex items-center justify-center shadow-xs mb-5 group-hover:scale-108 transition-transform duration-300`}
                >
                  {card.icon}
                </div>

                {/* Card headings: Plus Jakarta Sans 700 */}
                <h3 className="text-[15px] sm:text-[13.4px] font-semibold text-[#0f2c6cff] tracking-tight leading-snug mb-2 group-hover:text-[#0066ff] transition-colors">
                  {card.title}
                </h3>

                {/* Body paragraphs: Plus Jakarta Sans 500 */}
                <p className="text-[12.5px] sm:text-[12.5px] text-slate-500 font-medium leading-[1.55]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Circle Arrow Button */}
              <div className="pt-4">
                <div className="w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center text-[#0066ff] bg-white group-hover:border-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-200 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
