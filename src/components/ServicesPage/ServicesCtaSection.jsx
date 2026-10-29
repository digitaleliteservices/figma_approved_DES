import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-8 sm:mb-12">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl mx-auto rounded-[24px] sm:rounded-[32px] text-white py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 text-center overflow-hidden select-none shadow-2xl"
        style={{
          background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
            Ready to get started?
          </h2>

          {/* Subtitle */}
          <p className="text-white/85 text-xs sm:text-base md:text-[17px] font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9">
            Book a free 30-minute consultation with our strategists and grow your business today.
          </p>

          {/* Outlined Pill Button: "Contact Us →" */}
          <div className="w-full sm:w-auto">
            <button
              type="button"
              id="services-cta-contact-btn"
              onClick={()=>navigate("/contact")}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full border border-white/40 bg-white/10 hover:bg-white hover:text-[#062A78] active:scale-95 text-white font-bold text-sm sm:text-[15px] transition-all duration-200 cursor-pointer shadow-lg shadow-black/20 text-center"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
