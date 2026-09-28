import React from 'react';
import {
  ArrowRight,
  Check,
  Flame,
  Zap,
  Users,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';
import avatarRahul from '../../assets/images/avatar_rahul_mehta_1790061709561.jpg';
import avatarSneha from '../../assets/images/avatar_sneha_iyer_1790061727449.jpg';

export const ServicesHeroSection = ({ onExploreServices, onStartProject }) => {
  const handleScrollToOfferings = () => {
    const el = document.getElementById('services-offerings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onExploreServices) {
      onExploreServices();
    }
  };

  return (
    <section className="relative isolate w-full pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-white overflow-hidden select-none">
      {/* ================= EXACT TOP-LEFT BACKGROUND CIRCLE ================= */}
      {/* Positioned on section with z-0, completely behind the relative z-10 content */}
      <div
        className="
          absolute
          -top-16 sm:-top-20 lg:-top-28
          -left-28 sm:-left-36 md:-left-44 lg:-left-20 xl:-left-20
          w-[420px] sm:w-[480px] lg:w-[540px] xl:w-[350px]
          h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[350px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ================= LEFT CONTENT COLUMN WITH ANCHORED BACKGROUND CIRCLE ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative z-10">
            {/* Eyebrow Pill: Ice-blue pill with flame icon and electric blue text */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef7ff] border border-blue-200/80 text-[#0066ff] text-xs sm:text-[12.5px] font-bold tracking-wide uppercase mb-5 w-fit shadow-2xs relative z-10">
              <Flame className="w-3.5 h-3.5 text-[#ff7700] fill-[#ff9900]" />
              <span>DIGITAL EXCELLENCE</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[40px] xl:text-[44px] font-bold text-[#062A78] tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6">
              We Build Digital <br />
              Experiences That <span className="text-[#0066ff]">Drive</span> <br />
              <span className="text-[#0066ff]">Results</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-base xl:text-[16.5px] font-normal leading-[1.68] max-w-[560px] mb-7 sm:mb-8">
              We combine creativity, technology, and data to craft powerful digital solutions that
              help your business grow faster and smarter.
            </p>

            {/* Checklist Capsules Grid (Exact to Reference UI) */}
            <div className="flex flex-col gap-2.5 max-w-[580px] mb-8 sm:mb-9">
              {/* Row 1: Data-Driven + Proven Growth */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100/90 bg-white shadow-2xs text-xs sm:text-[13px]">
                  <Check className="w-3.5 h-3.5 text-[#0066ff] stroke-[3]" />
                  <span className="font-bold text-[#062A78]">Data–Driven</span>
                  <span className="text-[#64748b]">(Smart strategies)</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100/90 bg-white shadow-2xs text-xs sm:text-[13px]">
                  <Check className="w-3.5 h-3.5 text-[#0066ff] stroke-[3]" />
                  <span className="font-bold text-[#062A78]">Proven Growth</span>
                  <span className="text-[#64748b]">(Real & measurable)</span>
                </div>
              </div>

              {/* Row 2: 24/7 Support */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100/90 bg-white shadow-2xs text-xs sm:text-[13px]">
                  <Check className="w-3.5 h-3.5 text-[#0066ff] stroke-[3]" />
                  <span className="font-bold text-[#062A78]">24/7 Support</span>
                  <span className="text-[#64748b]">(Always by your side)</span>
                </div>
              </div>
            </div>

            {/* Action Bar: Yellow Pill Button + Avatars Capsule */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Golden Yellow Button */}
              <button
                type="button"
                id="hero-explore-services-btn"
                onClick={handleScrollToOfferings}
                className="group inline-flex items-center gap-2.5 bg-[#fec006] hover:bg-[#faa307] active:scale-95 text-[#062A78] font-bold px-8 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-[0_12px_28px_rgba(254,192,6,0.42)] transition-all duration-200 cursor-pointer text-sm sm:text-[15px]"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.8]" />
              </button>

              {/* Overlapping Avatars Capsule */}
              <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-full border border-slate-200/80 bg-white shadow-2xs">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    src={avatarRahul}
                    alt="Client Rahul"
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src={avatarSneha}
                    alt="Client Sneha"
                    className="inline-block w-8 h-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#062A78] text-white text-[10px] font-bold ring-2 ring-white">
                    DES
                  </div>
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#062A78] pr-2">
                  500+ Happy Clients
                </span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT CARD: "Why Choose DES?" ================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[450px] bg-white rounded-[32px] p-7 sm:p-8 lg:p-9 border border-slate-100 shadow-[0_24px_60px_rgba(6,42,120,0.06)] hover:shadow-[0_28px_70px_rgba(0,102,255,0.08)] transition-all duration-300">
              
              {/* Card Header: "Why Choose DES?" + "OUR PROMISE" */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100/90">
                <h3 className="text-xl sm:text-[23px] font-bold text-[#062A78] tracking-tight">
                  Why Choose DES?
                </h3>
                <span className="px-3.5 py-1 rounded-full border border-blue-200/90 bg-blue-50/50 text-[#0066ff] text-[11px] font-bold tracking-wider uppercase">
                  OUR PROMISE
                </span>
              </div>

              {/* 4 Feature Items */}
              <div className="space-y-6">
                
                {/* Item 1: Customized Solutions */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[16px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Zap className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[15.5px] font-bold text-[#062A78] mb-0.5">
                      Customized Solutions
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                      Tailored strategies built specifically for your unique business needs.
                    </p>
                  </div>
                </div>

                {/* Item 2: Expert Team */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[16px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Users className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[15.5px] font-bold text-[#062A78] mb-0.5">
                      Expert Team
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                      Passionate industry experts dedicated to accelerating your growth.
                    </p>
                  </div>
                </div>

                {/* Item 3: Transparent Process */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[16px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[15.5px] font-bold text-[#062A78] mb-0.5">
                      Transparent Process
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                      Daily clarity, open communication, and complete transparency.
                    </p>
                  </div>
                </div>

                {/* Item 4: Measurable Results */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[16px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <BarChart3 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[15.5px] font-bold text-[#062A78] mb-0.5">
                      Measurable Results
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                      Empirical data and analytics that generate real revenue growth.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
