import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesCtaSection = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 rounded-3xl text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 text-center overflow-hidden select-none"
      style={{
        background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
          Ready to get started?
        </h2>

        {/* Subtitle */}
        <p className="text-white/85 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9">
          Book a free 30-minute consultation with our strategists and grow
        </p>

        {/* Outlined Pill Button: "Contact Us →" */}
        <div>
          <button
            type="button"
            id="services-cta-contact-btn"
            onClick={()=>navigate("/contact")}
            className="group inline-flex items-center gap-2.5 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full border border-white/40 bg-white/10 hover:bg-white hover:text-[#062A78] active:scale-95 text-white font-bold text-sm sm:text-[15px] transition-all duration-200 cursor-pointer shadow-lg shadow-black/20"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
