import React from 'react';
import {
  ArrowRight,
  Target,
  Compass,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Award,
  Star,
} from 'lucide-react';
import teamCollaboratingImg from '../assets/images/about_team_collaborating_1790337271848.jpg';
import { useNavigate } from 'react-router-dom';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';

export function AboutPage({ onStartProject, onMoreAboutUs }) {
  const navigate = useNavigate();

  const handleStartProjectClick = (service = 'Digital Solutions') => {
    if (onStartProject) {
      onStartProject(service);
    } else {
      navigate('/contact');
    }
  };

  const principles = [
    {
      id: '01',
      number: '01',
      title: 'Relentless Quality',
      description:
        'We hold every pixel, line of code,and growth campaign to world-class standards. Good enough is never enough.',
      icon: ShieldCheck,
    },
    {
      id: '02',
      number: '02',
      title: 'Data–Driven Strategy',
      titleLine1: 'Data–Driven',
      titleLine2: 'Strategy',
      description:
        'We combine creative intuition with rigorous analytics to ensure every initiative delivers measurable ROI.',
      icon: Zap,
    },
    {
      id: '03',
      number: '03',
      title: 'Transparent Partnership',
      titleLine1: 'Transparent',
      titleLine2: 'Partnership',
      description:
        'We operate as an agile extension of your internal team with total clarity, integrity, and daily collaboration.',
      icon: HeartHandshake,
    },
    {
      id: '04',
      number: '04',
      title: 'Future–Proof Scalability',
      titleLine1: 'Future–Proof',
      titleLine2: 'Scalability',
      description:
        'We build digital products and marketing engines engineered to evolve seamlessly as your enterprise grows.',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a1e38] overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* ========================================================================= */}
      {/* 1. TOP HERO SECTION (ABOUT DIGITAL ELITE SERVICES)                        */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-10 sm:pt-14 lg:pt-18 pb-16 sm:pb-20 lg:py-24 overflow-hidden select-none bg-white">
        {/* ========================================================================= */}
        {/* 1. EXACT LEFT BACKGROUND CIRCLE                                           */}
        {/* Visible rounded pale sky-blue circle framing the top-left typography     */}
        {/* ========================================================================= */}
        {/* <div
          className="
            absolute
            -top-12 sm:-top-16 lg:-top-20
            -left-28 sm:-left-36 lg:-left-44 xl:-left-48
            w-[260px] sm:w-[320px] lg:w-[260px] xl:w-[280px]
            h-[260px] sm:h-[320px] lg:h-[260px] xl:h-[280px]
            rounded-full
            pointer-events-none
            -z-10
          "
          style={{
            backgroundColor: '#ddf0fe',
          }}
        /> */}

        {/* Main Content Container with Exact Proportions */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
              {/* Eyebrow Link: "ABOUT DIGITAL ELITE SERVICES →" */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#0066ff] tracking-[0.08em] uppercase mb-4 sm:mb-5 z-10">
                <span>ABOUT DIGITAL ELITE SERVICES</span>
                <ArrowRight className="w-4 h-4 text-[#0066ff] stroke-[2.5]" />
              </div>

              {/* Exact Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-[#062A78] tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6 z-10" style={{ lineHeight: '1.1' }}>
                Empowering businesses <br />
                through digital excellence <br />
                and <span className="text-[#0066ff]">real growth.</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-[#475569] text-sm sm:text-[15px] xl:text-[16px] font-normal leading-[1.65] max-w-[560px] mb-7 sm:mb-9 z-10">
                DES (Digital Elite Services) is a premier full-service digital solutions agency. We
                combine strategy, human-centered design, modern engineering, and performance
                marketing to help ambitious businesses get noticed, trusted, and chosen.
              </p>

              {/* Thin Horizontal Divider (Exact to Screenshot) */}
              <div className="pt-6 sm:pt-7 border-t border-slate-200/90 max-w-[560px] z-10">
                {/* 4 Stats Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
                  {/* Stat 1 */}
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#062A78] tracking-tight leading-none">
                      150+
                    </div>
                    <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                      Projects Completed
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#062A78] tracking-tight leading-none">
                      70+
                    </div>
                    <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                      Happy Clients
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#062A78] tracking-tight leading-none">
                      300%
                    </div>
                    <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                      Average ROI Increase
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#062A78] tracking-tight leading-none">
                      5+
                    </div>
                    <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium leading-snug mt-1.5">
                      Years of Innovation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photography Card */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[450px] lg:max-w-[480px]">

                 <div
                  className="
                    absolute
                    -top-80
                    -left-250
                    w-[220px] sm:w-[280px] lg:w-[460px]
                    h-[220px] sm:h-[280px] lg:h-[460px]
                    rounded-full
                    pointer-events-none
                    -z-10
                  "
                  style={{
                    backgroundColor: '#ddf0fe',
                  }}
                />
                {/* 2. EXACT RIGHT BACKGROUND CIRCLE */}
                <div
                  className="
                    absolute
                    -top-64 sm:-top-48 lg:-top-40
                    right-3 sm:right-2 lg:-right-12 xl:-right-15
                    w-[220px] sm:w-[280px] lg:w-[460px]
                    h-[220px] sm:h-[280px] lg:h-[460px]
                    rounded-full
                    pointer-events-none
                    -z-10
                  "
                  style={{
                    backgroundColor: '#ddf0fe',
                  }}
                />

                {/* Rounded Photo Frame (Exact to Screenshot) */}
                <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_24px_50px_-12px_rgba(6,42,120,0.18)] border border-slate-100/80 bg-white aspect-square z-10">
                  <img
                    src={teamCollaboratingImg}
                    alt="Digital Elite Services team collaborating around conference table with laptops"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle Media Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Translucent Pill Badge: "Our Passion" */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-[22px] px-4.5 sm:px-5 py-3.5 sm:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/80 flex items-center justify-between z-20">
                    <div className="pr-2">
                      <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#062A78] leading-tight">
                        Our Passion
                      </h4>
                      <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-tight mt-0.5">
                        Turning ideas into measurable impact
                      </p>
                    </div>

                    {/* Circular Golden Yellow Star Accent Button */}
                    <button
                      type="button"
                      onClick={() => handleStartProjectClick('Passion & Innovation')}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fec006] hover:bg-[#faa307] text-[#062A78] flex items-center justify-center shadow-xs shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
                      aria-label="Our Passion & Innovation"
                    >
                      <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#062A78] text-[#062A78]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS BANNER BAR ================= */}
      <StatsBannerBar />

      {/* ========================================================================= */}
      {/* 2. PURPOSE & DIRECTION (OUR MISSION & OUR VISION CARDS)                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-white overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          
          {/* Section Header (Centered) */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-semibold text-[#0066ff] tracking-[0.14em] uppercase mb-3">
              PURPOSE & DIRECTION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[38px] font-bold text-[#062A78] tracking-[-0.03em] leading-tight mb-4">
              Driven by purpose, guided by vision.
            </h2>
            <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
              Every project we take on is backed by a clear mission to create lasting digital advantage for our partners.
            </p>
          </div>

          {/* Cards Wrapper with Exact Background Circles Anchored Directly to the 2 Cards */}
          <div className="relative max-w-[1040px] mx-auto">
            
            {/* 1. Left Pale Sky-Blue Circle (Anchored behind the left edge of Our Mission card) */}
            <div
              className="
                absolute
                top-[52%] -translate-y-1/2
                -left-12 sm:-left-20 md:-left-28 lg:-left-30
                w-[140px] sm:w-[200px] lg:w-[260px]
                h-[140px] sm:h-[200px] lg:h-[260px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            />

            {/* 2. Right Pale Sky-Blue Circle (Anchored behind the lower-right of Our Vision card) */}
            <div
              className="
                absolute
                -bottom-16 sm:-bottom-24 lg:-bottom-28
                -right-32 sm:-right-44 md:-right-35 lg:-right-40
                w-[280px] sm:w-[300px] lg:w-[320px]
                h-[280px] sm:h-[300px] lg:h-[320px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            />

            {/* 2 Large Purpose Cards (Our Mission & Our Vision) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10">
              
              {/* Card 1: Our Mission */}
              <div className="bg-[#f5f9fbff] rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(6,42,120,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(0,102,255,0.12)] transition-all duration-300 min-h-[280px] sm:min-h-[360px] flex flex-col justify-start group">
                {/* Header: Icon + Title horizontally aligned */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                  {/* Electric Blue Squircle Icon */}
                  <div className="w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-[18px] sm:rounded-[20px] bg-[#0066ff] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Target className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-[27px] font-bold text-[#062A78] tracking-tight">
                    Our Mission
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#475569] sm:text-[#0e1a2aff] text-[12px] sm:text-[14px] leading-[1.75] font-normal">
                  To transform ambitious business concepts into category-defining digital experiences. We bridge the gap between creative design, advanced engineering, and revenue growth so our clients can stay ahead in a fast-changing world.
                </p>
              </div>

              {/* Card 2: Our Vision */}
              <div className="bg-[#f5f9fbff] rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(6,42,120,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(124,58,237,0.12)] transition-all duration-300 min-h-[280px] sm:min-h-[360px] flex flex-col justify-start group">
                {/* Header: Icon + Title horizontally aligned */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                  {/* Vibrant Violet/Purple Squircle Icon */}
                  <div className="w-14 h-14 sm:w-[58px] sm:h-[58px] rounded-[18px] sm:rounded-[20px] bg-[#7928ca] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Compass className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-[27px] font-bold text-[#062A78] tracking-tight">
                    Our Vision
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#475569] sm:text-[#071527ff] text-[12px] sm:text-[14px] leading-[1.75] font-normal">
                  To be recognized globally as the most trusted digital innovation partner—known for technical excellence, creative bravery, and an unwavering commitment to driving scalable, real-world business results.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT DRIVES US (OUR CORE PRINCIPLES)                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-1 sm:py-2 lg:py-4 bg-white overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          
          {/* Section Header (Centered) */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.14em] uppercase mb-3">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[43px] font-semibold text-[#062A78] tracking-[-0.03em] leading-tight mb-4">
              Our Core Principles
            </h2>
            <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-[14px] font-normal max-w-2xl mx-auto leading-relaxed">
              These fundamental values shape our culture, decisions, and how we build lasting relationships.
            </p>
          </div>

          {/* Cards Container with Exact Background Circles Anchored Directly to the Grid */}
          <div className="relative max-w-[1280px] mx-auto">
            
            {/* 1. Upper-Left Accent Circle (Above and to the left of Card 01) */}
            {/* <div
              className="
                absolute
                -top-12 lg:-top-16
                -left-12 lg:-left-20
                w-[220px] lg:w-[260px]
                h-[220px] lg:h-[260px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            /> */}

            {/* 2. Main Left Large Circle (Framing Card 01 and sweeping behind it) */}
            <div
              className="
                absolute
                -bottom-40
                top-1/2 -translate-y-1/2
                -left-44 sm:-left-56 lg:-left-64 xl:-left-72
                w-[260px] sm:w-[220px] lg:w-[320px]
                h-[260px] sm:h-[220px] lg:h-[320px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            />

            {/* 3. Bottom Circle (Underneath Card 03 & Card 04) */}
            <div
              className="
                absolute
                -bottom-24 sm:-bottom-32 lg:-bottom-36
                left-[42%] sm:left-[48%] lg:left-[56%]
                w-[120px] sm:w-[180px] lg:w-[280px]
                h-[120px] sm:h-[180px] lg:h-[280px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            />

            {/* 4. Top-Right Floating Circle (Floating cleanly in upper-right space) */}
            <div
              className="
                hidden sm:block
                absolute
                -top-12 sm:-top-10 lg:-top-8
                -right-16 sm:-right-24 lg:-right-32 xl:-right-36
                w-[120px] sm:w-[140px] lg:w-[160px]
                h-[120px] sm:h-[140px] lg:h-[160px]
                rounded-full
                pointer-events-none
                -z-10
              "
              style={{ backgroundColor: '#ddf0fe' }}
            />

            {/* 4 Core Principles Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onMoreAboutUs?.(item.title)}
                    className="bg-white rounded-[28px] sm:rounded-[30px] p-7 sm:p-8 lg:p-8 border border-slate-100/90 shadow-[0_12px_36px_rgba(6,42,120,0.05)] hover:shadow-[0_20px_45px_rgba(0,102,255,0.1)] transition-all duration-300 min-h-[380px] sm:min-h-[400px] flex flex-col justify-start group cursor-pointer"
                  >
                    {/* Top Row: Squircle Icon on Left, 01/02/03/04 Number on Right */}
                    <div className="flex items-center justify-between mb-7 sm:mb-8">
                      <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-[16px] sm:rounded-[18px] bg-[#eef7ff] text-[#0066ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-base sm:text-[17px] font-bold text-[#0066ff] tracking-tight">
                        {item.number}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#062A78] leading-[1.25] tracking-tight mb-4 sm:mb-5">
                      {item.titleLine1 && item.titleLine2 ? (
                        <>
                          {item.titleLine1} <br />
                          {item.titleLine2}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[#475569] sm:text-[#334155] text-[13.5px] sm:text-[14px] font-normal leading-[1.68]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. READY TO TURN YOUR VISION INTO DIGITAL IMPACT? (CTA BANNER)           */}
      {/* ========================================================================= */}
      <section
        className=" mb-10 max-w-6xl  mx-auto rounded-2xl text-white py-10 sm:py-14 lg:py-18 px-6 sm:px-10 lg:px-16 text-center overflow-hidden select-none "
        style={{
          background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] xl:text-[46px] font-semibold text-white tracking-[-0.03em] leading-[1.08] mb-4 sm:mb-5" style={{ lineHeight: 1.1 }}>
            Ready to turn your vision into digital <br />
            impact?
          </h2>

          {/* Subtitle */}
          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[16px] font-normal leading-[1.65] max-w-[640px] mx-auto mb-8 sm:mb-9">
            Let's collaborate to build high-converting websites, powerful applications, and <br className="hidden sm:inline" />
            growth strategies that move your business forward.
          </p>

          {/* Golden-Yellow Pill CTA Button */}
          <div>
            <button
              id="about-cta-connect-today-btn"
              onClick={() => handleStartProjectClick('General Inquiries')}
              className="group inline-flex items-center gap-2.5 bg-[#ffb703] hover:bg-[#faa307] active:scale-95 text-[#062A78] font-bold px-9 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.32)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.42)] transition-all duration-200 cursor-pointer text-[15px] sm:text-base"
            >
              <span>Connect Us Today</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:translate-x-1.5 text-[#062A78] stroke-[2.8]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
