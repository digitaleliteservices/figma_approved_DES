import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group flex items-center justify-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878f9] focus-visible:ring-offset-2 rounded-full"
        >
          {/* Circular Progress SVG Container */}
          <div className="relative w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 52 52"
            >
              {/* Background Track */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-slate-200/90"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Scroll Progress Ring */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-[#0878f9] transition-[stroke-dashoffset] duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Inner Center Circle with Icon */}
            <div className="w-9.5 h-9.5 sm:w-10.5 sm:h-10.5 rounded-full bg-gradient-to-tr from-[#082d72] to-[#0878f9] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(8,120,249,0.35)] group-hover:shadow-[0_6px_22px_rgba(8,120,249,0.55)] group-hover:from-[#0a3587] group-hover:to-[#1a88ff] transition-all duration-300">
              <ArrowUp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.4] transition-transform duration-300 group-hover:-translate-y-0.5 text-black" />
            </div>

            {/* Hover Tooltip (desktop only) */}
            <span className="pointer-events-none absolute -top-9 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-sm rounded-md whitespace-nowrap shadow-md hidden sm:block">
              Back to top
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
