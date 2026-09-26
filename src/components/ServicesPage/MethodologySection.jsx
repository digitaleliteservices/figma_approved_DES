import React from 'react';

export const MethodologySection = () => {
  const steps = [
    {
      number: 1,
      side: 'right',
      title: 'Step 1: DEEP DISCOVERY',
      description:
        'We begin by analyzing your business goals, target audience, a to create a clear strategy.',
    },
    {
      number: 2,
      side: 'left',
      title: 'Step 2: STRATEGIC BLUEPRINT',
      description:
        'We begin by analyzing your business goals, target audience, and competitors to create a clear strategy.',
    },
    {
      number: 3,
      side: 'right',
      title: 'Step 3 : CREATIVE EXCELLENCE',
      description:
        'Our team delivers outstanding designns, campaigns, and solutions that make your brand unforgettable.',
    },
    {
      number: 4,
      side: 'left',
      title: 'Step 4: SEAMLESS COLLABORATION',
      description:
        'Agile feedback loops with your team ensuring speed, accuracy, and absolute clarity at every stage.',
    },
    {
      number: 5,
      side: 'right',
      title: 'Step 5 : CONTINUOUS INNOVATION',
      description:
        'We constantly refine and optimize your campaigns to maximize performance and ROI.',
    },
    {
      number: 6,
      side: 'left',
      title: 'Step 6: MEASURABLE RESULTS',
      description:
        'We focus on tangible outcomes that drive real business growth and long-term success.',
    },
    {
      number: 7,
      side: 'right',
      title: 'Step 7 : PREMIUM DELIVERY',
      description:
        'We deliver exceptional quality with unmatched precision and punctuality, every single time.',
    },
  ];

  return (
    <section className="relative isolate w-full pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36 bg-white overflow-hidden select-none">
      
      {/* ================= EXACT BACKGROUND CIRCLES (MATCHING UI) ================= */}
      {/* 1. Top-Right Large Circle (Upper right behind header) */}
      <div
        className="
          absolute
          -top-16 lg:-top-24
          -right-28 lg:-right-36 xl:-right-44
          w-[220px] sm:w-[280px] lg:w-[340px]
          h-[220px] sm:h-[280px] lg:h-[340px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 2. Top-Left Giant Circle (Opposite Steps 1 & 2) */}
      <div
        className="
          absolute
          top-20 sm:top-28 lg:top-32
          -left-32 sm:-left-44 lg:-left-56
          w-[460px] sm:w-[520px] lg:w-[380px]
          h-[460px] sm:h-[520px] lg:h-[380px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 3. Middle-Left Soft Circle (Positioned right below Step 4) */}
      <div
        className="
          absolute
          top-[50%] sm:top-[52%]
          left-[15%] sm:left-[19%] lg:left-[22%]
          w-[100px] sm:w-[120px] lg:w-[130px]
          h-[100px] sm:h-[120px] lg:h-[130px]
          rounded-full
          pointer-events-none
          opacity-85
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 4. Middle-Right Accent Dot (Right of Timeline, around Step 4/5) */}
      <div
        className="
          absolute
          top-[56%] sm:top-[58%]
          right-[30%] sm:right-[34%] lg:right-[36%]
          w-11 sm:w-13 lg:w-14
          h-11 sm:h-13 lg:h-14
          rounded-full
          pointer-events-none
          opacity-80
          blur-[1px]
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 5. Lower-Left Small Accent Circle (Far left margin level with Step 6) */}
      <div
        className="
          absolute
          top-[74%] sm:top-[76%]
          left-[2%] sm:left-[3%] lg:left-[4%]
          w-11 sm:w-13 lg:w-14
          h-11 sm:h-13 lg:h-14
          rounded-full
          pointer-events-none
          opacity-75
          blur-[1px]
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 6. Bottom-Right Huge Circle (Spanning opposite Steps 6 & 7) */}
      <div
        className="
          absolute
          bottom-16 sm:bottom-24 lg:bottom-28
          -right-36 sm:-right-48 lg:-right-60
          w-[520px] sm:w-[300px] lg:w-[380px]
          h-[520px] sm:h-[300px] lg:h-[380px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      {/* 7. Bottom-Left Medium/Large Circle (Grounding the bottom) */}
      <div
        className="
          absolute
          -bottom-2 sm:-bottom-8 lg:-bottom-2
          -left-24 sm:-left-36 lg:-left-4
          w-[380px] sm:w-[240px] lg:w-[300px]
          h-[380px] sm:h-[240px] lg:h-[300px]
          rounded-full
          pointer-events-none
          z-0
        "
        style={{ backgroundColor: '#ddf0fe' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-24 lg:mb-28">
          <div className="inline-block text-xs sm:text-[13px] font-bold text-[#0066ff] tracking-[0.16em] uppercase mb-3">
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[24px] lg:text-[38px] font-bold text-[#062A78] tracking-[-0.035em] leading-[1.12] mb-4 uppercase">
            ALWAYS GIVING YOU EXACTLY WHAT <br className="hidden sm:inline" />
            YOU NEED
          </h2>
          <p className="text-[#475569] sm:text-[#334155] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            No more scattered details or convoluted tasks. We line everything up so nothing gets missed.
          </p>
        </div>

        {/* 7-Step Vertical Timeline */}
        <div className="relative max-w-[1080px] mx-auto py-8">
          
          {/* Continuous Multi-Stop Gradient Vertical Timeline Bar */}
          {/* Mobile: centered at 32px (exact center of the 64px badge column) */}
          {/* Desktop: centered at 50% (exact center of the 64px center grid column) */}
          <div
            className="
              absolute
              left-[32px] md:left-1/2
              top-[-20px] bottom-[-28px]
              w-[6px]
              -translate-x-1/2
              rounded-full
              pointer-events-none
              z-0
            "
            style={{
              background:
                'linear-gradient(180deg, #0066ff 0%, #1d4ed8 15%, #4f46e5 28%, #7c3aed 42%, #9333ea 56%, #be185d 70%, #c2410c 82%, #d97706 90%, #facc15 100%)',
            }}
          />

          {/* Timeline Step Items */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24 relative z-10">
            {steps.map((item) => {
              const isRight = item.side === 'right';

              return (
                <div
                  key={item.number}
                  className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_64px_1fr] items-center group min-h-[54px]"
                >
                  {/* Desktop Left Side Column: Text sits to the left of the node and is left-aligned */}
                  <div className="hidden md:flex justify-end pr-10 lg:pr-14">
                    {!isRight ? (
                      <div className="max-w-[340px] text-left">
                        <h3 className="text-[17px] lg:text-[18px] font-extrabold text-[#062A78] tracking-tight mb-1.5 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Center Column: Exactly 64px wide, mathematically locked to the center line */}
                  <div className="flex items-center justify-center relative z-20">
                    <div
                      className="
                        w-[44px] h-[52px]
                        rounded-[14px]
                        bg-white
                        border-[1.5px] border-[#3b82f6]
                        shadow-[0_4px_14px_rgba(0,102,255,0.14)]
                        flex items-center justify-center
                        text-[17px] font-black text-[#0066ff]
                        transition-transform duration-200 group-hover:scale-105
                      "
                    >
                      {item.number}
                    </div>
                  </div>

                  {/* Desktop Right Side Column / Mobile Text Column */}
                  <div className="pl-6 md:pl-10 lg:pl-14 flex justify-start">
                    {/* On Desktop: Only render if step belongs on the right */}
                    {isRight && (
                      <div className="hidden md:block max-w-[340px] text-left">
                        <h3 className="text-[17px] lg:text-[18px] font-extrabold text-[#062A78] tracking-tight mb-1.5 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}

                    {/* On Mobile: Render all steps here */}
                    <div className="block md:hidden max-w-[340px] text-left">
                      <h3 className="text-[17px] lg:text-[18px] font-extrabold text-[#062A78] tracking-tight mb-1.5 uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
