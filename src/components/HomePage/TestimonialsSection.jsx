import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import rahulAvatar from '../../assets/images/avatar_rahul_mehta_1790061709561.jpg';
import snehaAvatar from '../../assets/images/avatar_sneha_iyer_1790061727449.jpg';

export const TestimonialsSection = ({
  onLearnMore,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 'rahul-mehta',
      name: 'Rahul Mehta',
      role: 'Founder',
      company: 'Mehta Retail',
      quote:
        '“DES transformed our online presence. Our leads have grown significantly in just a few months.”',
      avatar: rahulAvatar,
      stars: 5,
    },
    {
      id: 'sneha-iyer',
      name: 'Sneha Iyer',
      role: 'Marketing Manager',
      company: 'CloudKart',
      quote:
        '“Professional, creative and result-driven. The DES team really understands business goals.”',
      avatar: snehaAvatar,
      stars: 5,
    },
    {
      id: 'vikram-singhania',
      name: 'Vikram Singhania',
      role: 'Co-Founder',
      company: 'Apex Health',
      quote:
        '“The team’s strategic velocity and digital innovation helped our revenue expand over 250% in two quarters.”',
      avatar: rahulAvatar,
      stars: 5,
    },
    {
      id: 'ananya-roy',
      name: 'Ananya Roy',
      role: 'VP Growth',
      company: 'EduNova Tech',
      quote:
        '“Seamless collaboration and flawless execution. They exceeded every metric we established for our launch.”',
      avatar: snehaAvatar,
      stars: 5,
    },
  ];

  const visibleCount = 2;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-white overflow-hidden select-none py-14 sm:py-16 lg:py-20 border-t border-slate-100"
    >
      {/* ================= LEFT BACKGROUND CIRCULAR DOME ================= */}
      {/* Matches reference screenshot: light sky-blue circular arc entering from top-left */}
      <svg
        id="testimonials-left-bg-circle"
        className="absolute top-0 left-0 w-[420px] sm:w-[480px] lg:w-[520px] h-[580px] pointer-events-none z-0"
        viewBox="0 0 520 580"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 0,0 L 260,0 C 330,80 340,190 300,290 C 270,360 220,430 140,480 C 80,515 30,535 0,545 Z"
          fill="#daf0ff"
        />
      </svg>

      {/* ================= RIGHT BACKGROUND CIRCULAR DOME ================= */}
      {/* Matches reference screenshot: soft light-blue dome rising from bottom-right corner */}
      <div
        id="testimonials-right-bg-circle"
        className="absolute -bottom-28 -right-20 sm:-bottom-32 sm:-right-24 w-[360px] sm:w-[420px] lg:w-[480px] h-[360px] sm:h-[420px] lg:h-[480px] rounded-full pointer-events-none z-0"
        style={{
          backgroundColor: '#daf0ff',
        }}
      />

      {/* Content Container */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Top Carousel Navigation Arrows (Aligned directly to the top-right above cards) */}
        <div className="flex justify-end items-center gap-3 mb-4 sm:mb-5">
          {/* Previous Button (White circle, subtle border, dark arrow) */}
          <button
            id="testimonials-carousel-prev"
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-[#0a1e38] hover:border-slate-300 hover:bg-slate-50/80 active:scale-95 transition-all duration-200 shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Next Button (White circle, electric blue border, blue arrow) */}
          <button
            id="testimonials-carousel-next"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#0066ff] bg-white flex items-center justify-center text-[#0066ff] hover:bg-blue-50/70 active:scale-95 transition-all duration-200 shadow-2xs cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Flex Layout: Left Typography Block + Right 2 Testimonial Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8 xl:gap-12">
          
          {/* ================= LEFT HEADING BLOCK ================= */}
          <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between pt-1">
            <div>
              {/* Eyebrow: Dark Navy with Blue Arrow */}
              <div
                onClick={onLearnMore}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0a1e38] tracking-[0.08em] uppercase mb-4 sm:mb-5 cursor-pointer hover:text-[#0066ff] transition-colors"
              >
                <span>WHAT OUR CLIENTS SAY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0066ff] stroke-[2.5]" />
              </div>

              {/* 4-Line Display Heading: "Trusted by / businesses / that believe in / growth." */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold text-[#0a1e38] tracking-[-0.035em] leading-[1.08] mb-6 sm:mb-8">
                Trusted by <br />
                businesses <br />
                that believe in <br />
                <span className="text-[#0066ff]">growth.</span>
              </h2>
            </div>

            {/* Stylized Golden Yellow Quotation Mark Icon at curve */}
            <div className="mt-2 sm:mt-4 pl-1">
              <svg
                id="testimonials-quote-mark"
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#ffba00] fill-current drop-shadow-2xs select-none"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* ================= RIGHT 2 TESTIMONIAL CARDS ================= */}
          <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4.5 sm:gap-5 xl:gap-6 w-full">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="relative bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 lg:p-7 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,102,255,0.08)] hover:border-blue-100 transition-all duration-300 flex items-start gap-4 sm:gap-5"
              >
                {/* Client Avatar Circular Photo */}
                <div className="shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] xl:w-20 xl:h-20 rounded-full overflow-hidden bg-slate-100 border-2 border-white shadow-2xs">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Testimonial Content: Quote, Author Info & Stars */}
                <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                  {/* Quote Paragraph */}
                  <p className="text-slate-800 text-[13.5px] sm:text-[14px] xl:text-[15px] font-normal leading-[1.6] mb-4 sm:mb-5">
                    {item.quote}
                  </p>

                  {/* Bottom Meta Row: Author Name, Role and 5-Star Rating */}
                  <div className="flex items-end justify-between gap-3 pt-1 mt-auto">
                    {/* Author Name and Role */}
                    <div className="min-w-0">
                      <h4 className="text-[14.5px] sm:text-[15.5px] xl:text-[16px] font-bold text-[#0a1e38] tracking-tight leading-snug truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11.5px] sm:text-[12px] xl:text-[12.5px] text-slate-500 font-medium mt-0.5 truncate">
                        {item.role}, {item.company}
                      </p>
                    </div>

                    {/* 5 Golden Yellow Stars */}
                    <div className="flex items-center gap-0.5 sm:gap-1 text-[#ffba00] shrink-0 pb-0.5">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#ffba00] text-[#ffba00]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
