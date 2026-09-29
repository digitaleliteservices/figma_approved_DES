import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Users,
  TrendingUp,
  Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import workEcommerceImg from '../../assets/images/work_ecommerce_laptop_1790060147830.jpg';
import workBrandingImg from '../../assets/images/work_branding_identity_1790060162943.jpg';
import workMarketingImg from '../../assets/images/work_marketing_dashboard_1790060176379.jpg';

export const SelectedWorkSection = ({
  onViewAllWork,
  onSelectProject,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // All portfolio items for carousel rotation
  const allProjects = [
    {
      id: 'ecommerce',
      title: 'E–Commerce Platform',
      category: 'Web Development • UI/UX',
      image: workEcommerceImg,
      alt: 'Modern laptop showing e-commerce catalog store on wooden desk with green plant',
      twoLineTitle: false,
    },
    {
      id: 'branding',
      title: 'Brand Identity Redesign',
      category: 'Branding • Graphic Design',
      image: workBrandingImg,
      alt: 'Luxury corporate brand stationery mockup with notebooks and cards on executive desk',
      twoLineTitle: false,
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation Campaign',
      titleLine1: 'Lead Generation',
      titleLine2: 'Campaign',
      category: 'Digital Marketing • SEO',
      image: workMarketingImg,
      alt: 'Marketing performance analytics dashboard with charts on laptop screen',
      twoLineTitle: true,
    },
    {
      id: 'fintech-app',
      title: 'Fintech Banking Portal',
      category: 'Web Development • Security',
      image: workEcommerceImg,
      alt: 'Modern banking web application with real-time analytics',
      twoLineTitle: false,
    },
    {
      id: 'creative-studio',
      title: 'Creative Studio Rebrand',
      category: 'Branding • Art Direction',
      image: workBrandingImg,
      alt: 'Studio corporate identity stationery set mockup',
      twoLineTitle: false,
    },
  ];

  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? allProjects.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= allProjects.length - visibleCount ? 0 : prev + 1));
  };

  // 3 currently visible projects in order
  const visibleProjects = [
    allProjects[startIndex % allProjects.length],
    allProjects[(startIndex + 1) % allProjects.length],
    allProjects[(startIndex + 2) % allProjects.length],
  ];

  return (
    <section id="work" className="relative w-full bg-white overflow-hidden select-none">
      
      <div className="relative pt-10 sm:pt-12 lg:pt-10 pb-10 sm:pb-12 lg:pb-16">
        
        <svg
          id="selected-work-bg-circle"
          className="absolute top-0 left-0 w-[520px] lg:w-[360px] h-[480px] pointer-events-none z-0"
          viewBox="0 0 560 680"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 0,0 L 360,0 C 425,90 435,210 395,330 C 370,410 340,480 285,550 C 230,610 140,650 0,665 Z"
            fill="#daf0ff"
          />
        </svg>

        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          
          <div className="flex justify-end items-center gap-3 mb-3.5 sm:mb-4">
            <button
              id="work-carousel-prev"
              onClick={handlePrev}
              aria-label="Previous projects"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-[#0a1e38] hover:border-slate-300 hover:bg-slate-50/80 active:scale-95 transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              id="work-carousel-next"
              onClick={handleNext}
              aria-label="Next projects"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#0066ff] bg-white flex items-center justify-center text-[#0066ff] hover:bg-blue-50/70 active:scale-95 transition-all duration-200 shadow-2xs cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6 xl:gap-8">
            
            <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between pt-1">
              <div>
                <div className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.08em] uppercase mb-3 sm:mb-4">
                  <span>SELECTED WORK</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[40px] font-bold text-[#062A78] tracking-[-0.035em] leading-[1.08] mb-4 sm:mb-5">
                  Ideas are good. <br />
                  Results are <br />
                  <span className="text-[#0066ff]">better.</span>
                </h2>

                <p className="text-slate-600 sm:text-slate-700 text-xs sm:text-[13.5px] xl:text-[15px] font-normal leading-[1.65] max-w-[340px] mb-6 sm:mb-8">
                  Explore some of the digital experiences, campaigns and solutions we’ve created to help
                  businesses move forward.
                </p>
              </div>

              <div>
                <button
                  id="selected-work-view-all-cta"
                  onClick={()=>navigate("/portfolio")}
                  className="group inline-flex items-center gap-2 bg-[#ffba00] hover:bg-[#faa307] active:scale-98 text-[#0a1e38] font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-[14px] shadow-[0_8px_22px_rgba(255,186,0,0.42)] hover:shadow-[0_12px_28px_rgba(255,186,0,0.55)] transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                >
                  <span>View All Work</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#0a1e38]" />
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 xl:gap-5">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  id={`work-card-${project.id}`}
                  onClick={() => onSelectProject?.(project.title)}
                  className="group relative bg-white rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_34px_rgba(0,102,255,0.12)] hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3 sm:p-3.5 xl:p-4 flex items-center justify-between gap-2.5 bg-white">
                    <div className="flex-1 min-w-0">
                      {project.twoLineTitle && project.titleLine1 && project.titleLine2 ? (
                        <h3 className="text-[13px] sm:text-[13.5px] xl:text-[14.5px] font-bold text-[#0a1e38] tracking-tight leading-[1.25] group-hover:text-[#0066ff] transition-colors">
                          {project.titleLine1} <br />
                          {project.titleLine2}
                        </h3>
                      ) : (
                        <h3 className="text-[13px] sm:text-[13.5px] xl:text-[14.5px] font-bold text-[#0a1e38] tracking-tight leading-snug truncate group-hover:text-[#0066ff] transition-colors">
                          {project.title}
                        </h3>
                      )}
                      <p className="text-[11px] sm:text-[11.5px] xl:text-[12px] text-slate-500 font-medium mt-0.5 truncate">
                        {project.category}
                      </p>
                    </div>

                    <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[#0066ff] bg-white flex items-center justify-center text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-200 shadow-2xs shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ================= ZONE 2: DARK NAVY STATISTICS BANNER ================= */}
      <div className="relative w-full bg-[#062A78] py-4 sm:py-6 border-t border-slate-800/50 overflow-hidden">
        
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
            <path
              d="M 0 70 Q 60 45, 120 70 T 240 65"
              stroke="#38bdf8"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 0 85 Q 70 60, 140 85 T 240 80"
              stroke="#38bdf8"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 0 55 Q 80 35, 160 55 T 240 50"
              stroke="#38bdf8"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute inset-y-0 right-0 w-64 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 240 100" fill="none" preserveAspectRatio="none">
            <path
              d="M 240 70 Q 180 45, 120 70 T 0 65"
              stroke="#38bdf8"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 240 85 Q 170 60, 100 85 T 0 80"
              stroke="#38bdf8"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 240 55 Q 160 35, 80 55 T 0 50"
              stroke="#38bdf8"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center">

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 text-[#ffba00]">
                <Trophy className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                  150+
                </div>
                <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium  leading-snug">
                  Projects Delivered
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 text-[#ffba00]">
                <Users className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                  70+
                </div>
                <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Metric 3: 300% Average ROI Growth */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 text-[#ffba00]">
                <TrendingUp className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                  300%
                </div>
                <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                  Average ROI Growth
                </div>
              </div>
            </div>

            {/* Metric 4: 5+ Years of Experience */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 text-[#ffba00]">
                <Star className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-white tracking-tight leading-none">
                  5+
                </div>
                <div className="text-xs sm:text-[13.5px] text-slate-300 font-medium leading-snug">
                  Years of Experience
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
