import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CtaSection = ({ onStartProject }) => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full text-white py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 text-center overflow-hidden select-none"
      style={{
        background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] xl:text-[56px] font-black sm:font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-4 sm:mb-5">
          Ready to turn your vision into digital <br />
          impact?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.65] max-w-[640px] mx-auto mb-8 sm:mb-9">
          Let's collaborate to build high-converting websites, powerful applications, and <br className="hidden sm:inline" />
          growth strategies that move your business forward.
        </p>

        {/* Golden-Yellow Pill CTA Button */}
        <div>
          <button
            id="cta-connect-today-btn"
            onClick={handleConnectClick}
            className="group inline-flex items-center gap-2.5 bg-[#ffb703] hover:bg-[#faa307] active:scale-95 text-[#062A78] font-bold px-9 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.32)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.42)] transition-all duration-200 cursor-pointer text-[15px] sm:text-base"
          >
            <span>Connect Us Today</span>
            <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:translate-x-1.5 text-[#062A78] stroke-[2.8]" />
          </button>
        </div>
      </div>
    </section>
  );
};
