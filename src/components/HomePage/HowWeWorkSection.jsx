import React from 'react';
import {
  ArrowRight,
  Search,
  Lightbulb,
  Settings,
  BarChart2,
} from 'lucide-react';

export const HowWeWorkSection = ({
  onExploreProcess,
  onSelectStep,
}) => {
  return (
    <section
      id="process"
      className="relative w-full py-4 sm:py-6 lg:py-8 overflow-hidden bg-white select-none"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}

      {/* 1. Large Light-Blue Dome on Far Right Edge (Exact Match to Reference) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-[260px] sm:-right-[200px] md:-right-[160px] lg:-right-[120px] xl:-right-[90px] w-[460px] sm:w-[540px] lg:w-[600px] h-[460px] sm:h-[540px] lg:h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          backgroundColor: '#cbe4ff',
        }}
      />

      {/* 2. Floating Tilted Light-Blue Pill: Top Right near Strategize */}
      <div
        className="absolute top-10 sm:top-14 right-[23%] sm:right-[25%] lg:right-[26%] w-3 sm:w-3.5 h-5 sm:h-5.5 rounded-full pointer-events-none -z-10"
        style={{
          backgroundColor: '#badcff',
          transform: 'rotate(-25deg)',
        }}
      />

      {/* 3. Floating Tilted Light-Blue Pill: Far Right near Grow */}
      <div
        className="absolute top-1/2 translate-y-8 right-5 sm:right-8 lg:right-10 w-3 sm:w-3.5 h-5 sm:h-5.5 rounded-full pointer-events-none -z-10"
        style={{
          backgroundColor: '#badcff',
          transform: 'rotate(-20deg)',
        }}
      />

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ================= LEFT COLUMN: EXACT TO DESIGN ================= */}
          <div className="lg:col-span-5 relative z-10">
            {/* EXACT LARGE LIGHT-BLUE BACKGROUND CIRCLE */}
            <div
              className="absolute -left-[180px] sm:-left-[140px] lg:-left-[110px] -top-4 sm:-top-6 lg:-top-10 w-[220px] sm:w-[280px] lg:w-[320px] h-[220px] sm:h-[280px] lg:h-[320px] rounded-full pointer-events-none -z-10"
              style={{
                backgroundColor: '#cbe4ff',
              }}
            />

            {/* Eyebrow: Plus Jakarta Sans 700 */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.08em] uppercase mb-4 sm:mb-5">
              <span>HOW WE WORK</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Section H2: Plus Jakarta Sans 800 with Blue Period */}
            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-bold text-[#062A78] tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6">
              A simple process <br />
              for extraordinary <br />
              <span>results</span>
              <span className="text-[#0066ff]">.</span>
            </h2>

            {/* Body paragraph: Plus Jakarta Sans 500 */}
            <p className="text-[#0a1e38]/80 sm:text-[#0a1e38]/85 text-base sm:text-[16.5px] font-medium leading-[1.6] max-w-[460px] mb-8 sm:mb-10">
              We follow a proven process to turn your ideas into meaningful digital outcomes.
            </p>

            {/* Bottom Row: Accent Pill + Dashed Flight Curve + Airplane + Golden Button */}
            <div className="relative flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 pt-1">
              
              {/* Flight path trajectory with Paper Plane */}
              <div className="flex items-center">
                {/* Small Tilted Light-Blue Capsule Pill */}
                <div
                  className="w-3.5 h-5 rounded-full shrink-0 mr-3 -translate-y-1"
                  style={{
                    backgroundColor: '#badcff',
                    transform: 'rotate(-25deg)',
                  }}
                />

                {/* Curved Dashed Trajectory Arc */}
                <div className="relative w-28 sm:w-36 h-12 flex items-center">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 140 48"
                    fill="none"
                  >
                    <path
                      d="M 2 34 C 42 38, 82 32, 126 10"
                      stroke="#0066ff"
                      strokeWidth="1.6"
                      strokeDasharray="4 4"
                      fill="none"
                      opacity="0.9"
                    />
                  </svg>

                  {/* Origami Paper Airplane Vector pointing towards the button */}
                  <div className="absolute right-0 top-0 transform translate-x-1.5 -translate-y-1.5 rotate-[36deg] text-[#0066ff]">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0066ff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Golden Yellow Button with Soft Amber Drop Shadow */}
              <button
                id="how-we-work-cta"
                onClick={onExploreProcess}
                className="group inline-flex items-center gap-2.5 bg-[#ffb703] hover:bg-[#faa307] active:scale-98 text-[#0a1e38] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_12px_28px_rgba(255,183,3,0.48)] hover:shadow-[0_16px_34px_rgba(255,183,3,0.6)] transition-all duration-200 cursor-pointer text-sm sm:text-[15px] shrink-0"
              >
                <span>Our Process</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#0a1e38]" />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: EXACT ORBITAL DIAGRAM ================= */}
          <div className="lg:col-span-7 flex items-center justify-center relative overflow-visible pt-4 lg:pt-0">
            <div className="relative w-full max-w-[640px] h-[520px] sm:h-[560px] flex items-center justify-center">

              {/* SVG Dashed Orbit Rings, Radial Spokes, and Accent Dots */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 640 560"
              >
                {/* 1. Outer Dashed Orbit Ring (passes directly through the 4 nodes) */}
                <circle
                  cx="320"
                  cy="280"
                  r="195"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                  strokeDasharray="4 5"
                />

                {/* 2. Inner Dashed Orbit Ring */}
                <circle
                  cx="320"
                  cy="280"
                  r="130"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1.3"
                  strokeDasharray="4 4"
                  opacity="0.85"
                />

                {/* 3. Radial Spoke Lines from Inner Ring outward through each Node */}
                {/* Top-Left Spoke (Discover - 135°) */}
                <line
                  x1="228"
                  y1="188"
                  x2="150"
                  y2="110"
                  stroke="#cbd5e1"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />

                {/* Top-Right Spoke (Strategize - 45°) */}
                <line
                  x1="412"
                  y1="188"
                  x2="490"
                  y2="110"
                  stroke="#cbd5e1"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />

                {/* Bottom-Left Spoke (Build - 225°) */}
                <line
                  x1="228"
                  y1="372"
                  x2="150"
                  y2="450"
                  stroke="#cbd5e1"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />

                {/* Bottom-Right Spoke (Grow - 315°) */}
                <line
                  x1="412"
                  y1="372"
                  x2="490"
                  y2="450"
                  stroke="#cbd5e1"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />

                {/* 4. Accent Dots on Inner & Outer Rings (Exact to Reference) */}
                {/* Yellow Dots on Inner Ring at 9 o'clock and 3 o'clock */}
                <circle cx="190" cy="280" r="4.5" fill="#ffb703" />
                <circle cx="450" cy="280" r="4.5" fill="#ffb703" />

                {/* Blue Dots on Inner Ring at 12 o'clock and 6 o'clock */}
                <circle cx="320" cy="150" r="3.5" fill="#0066ff" />
                <circle cx="320" cy="410" r="3.5" fill="#0066ff" />

                {/* Blue Dots on Outer Ring */}
                <circle cx="485" cy="200" r="3.5" fill="#0066ff" />
                <circle cx="485" cy="360" r="3.5" fill="#0066ff" />
                <circle cx="320" cy="85" r="3.2" fill="#0066ff" />
                <circle cx="295" cy="88" r="2.4" fill="#0066ff" />
                <circle cx="345" cy="88" r="2.4" fill="#0066ff" />
              </svg>

              {/* ================= CENTER 3D SPHERE ================= */}
              <div
                className="absolute z-20 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full text-white flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 select-none"
                style={{
                  background: 'radial-gradient(circle at 35% 28%, #2f8dff 0%, #0066ff 48%, #004ecc 82%, #003ca6 100%)',
                  boxShadow: '0 20px 48px -4px rgba(0, 102, 255, 0.44), 0 6px 16px rgba(0, 78, 204, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.35)',
                }}
              >
                <span className="text-white text-sm sm:text-base font-semibold tracking-tight">
                  From Ideas
                </span>

                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-white/95 text-xs sm:text-sm font-medium">to</span>
                  <span className="text-[#ffd000] text-base sm:text-lg font-extrabold tracking-tight">
                    Impact
                  </span>
                </div>

                {/* Smile curve under Impact */}
                <svg width="46" height="10" viewBox="0 0 46 10" fill="none" className="mt-1">
                  <path
                    d="M 4 3 Q 23 10 42 3"
                    stroke="#ffd000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* ================= SATELLITE 01: DISCOVER (Top-Left) ================= */}
              <div
                className="absolute z-20 flex items-center gap-3 cursor-pointer group"
                style={{
                  left: '2%',
                  top: '18%',
                }}
                onClick={() => onSelectStep?.('01', 'Discover')}
              >
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0066ff]">01</span>
                  {/* Card headings: Plus Jakarta Sans 700 */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0a1e38] group-hover:text-[#0066ff] transition-colors leading-tight">
                    Discover
                  </h3>
                  {/* Body paragraphs: Plus Jakarta Sans 500 */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight max-w-[130px] sm:max-w-[155px] mt-0.5">
                    Understand your business, audience and goals.
                  </p>
                </div>

                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(0,102,255,0.22)] transition-all duration-300">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066ff]" strokeWidth={2.4} />
                </div>
              </div>

              {/* ================= SATELLITE 02: STRATEGIZE (Top-Right) ================= */}
              <div
                className="absolute z-20 flex items-center gap-3 cursor-pointer group"
                style={{
                  right: '2%',
                  top: '18%',
                }}
                onClick={() => onSelectStep?.('02', 'Strategize')}
              >
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(0,102,255,0.22)] transition-all duration-300">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066ff]" strokeWidth={2.4} />
                </div>

                <div className="text-left">
                  <span className="text-xs font-bold text-[#0066ff]">02</span>
                  {/* Card headings: Plus Jakarta Sans 700 */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0a1e38] group-hover:text-[#0066ff] transition-colors leading-tight">
                    Strategize
                  </h3>
                  {/* Body paragraphs: Plus Jakarta Sans 500 */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight max-w-[130px] sm:max-w-[155px] mt-0.5">
                    Build a tailored strategy for your brand.
                  </p>
                </div>
              </div>

              {/* ================= SATELLITE 03: BUILD (Bottom-Left) ================= */}
              <div
                className="absolute z-20 flex items-center gap-3 cursor-pointer group"
                style={{
                  left: '2%',
                  bottom: '16%',
                }}
                onClick={() => onSelectStep?.('03', 'Build')}
              >
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0066ff]">03</span>
                  {/* Card headings: Plus Jakarta Sans 700 */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0a1e38] group-hover:text-[#0066ff] transition-colors leading-tight">
                    Build
                  </h3>
                  {/* Body paragraphs: Plus Jakarta Sans 500 */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight max-w-[130px] sm:max-w-[155px] mt-0.5">
                    Design, develop and launch your solution.
                  </p>
                </div>

                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(0,102,255,0.22)] transition-all duration-300">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066ff]" strokeWidth={2.4} />
                </div>
              </div>

              {/* ================= SATELLITE 04: GROW (Bottom-Right) ================= */}
              <div
                className="absolute z-20 flex items-center gap-3 cursor-pointer group"
                style={{
                  right: '2%',
                  bottom: '16%',
                }}
                onClick={() => onSelectStep?.('04', 'Grow')}
              >
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100/90 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(0,102,255,0.22)] transition-all duration-300">
                  <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066ff]" strokeWidth={2.4} />
                </div>

                <div className="text-left">
                  <span className="text-xs font-bold text-[#0066ff]">04</span>
                  {/* Card headings: Plus Jakarta Sans 700 */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0a1e38] group-hover:text-[#0066ff] transition-colors leading-tight">
                    Grow
                  </h3>
                  {/* Body paragraphs: Plus Jakarta Sans 500 */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight max-w-[130px] sm:max-w-[155px] mt-0.5">
                    Optimize, market and scale for better results.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
