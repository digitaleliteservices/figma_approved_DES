import React from 'react';

// Import all 19 client logos from src/assets/clients-images
import airzenLogo from '../assets/clients-images/AIRZEN.png';
import alizaLogo from '../assets/clients-images/ALIZA.png';
import aquaLogo from '../assets/clients-images/AQUA+.png';
import beLogo from '../assets/clients-images/BE.png';
import beeLogo from '../assets/clients-images/BEE.png';
import chaskaLogo from '../assets/clients-images/CHASKA.png';
import cmsLogo from '../assets/clients-images/CMS.png';
import dhsLogo from '../assets/clients-images/DHS.png';
import gsLogo from '../assets/clients-images/GS.png';
//import mlgLogo from '../assets/clients-images/MLG.png';
import mmLogo from '../assets/clients-images/MM.png';
import neelLogo from '../assets/clients-images/NEEL.png';
import nerLogo from '../assets/clients-images/NER.png';
import petsLogo from '../assets/clients-images/PETS.png';
import plumeriaLogo from '../assets/clients-images/Plumeria.png';
import rmLogo from '../assets/clients-images/RM.png';
import rplLogo from '../assets/clients-images/RPL.png';
import smLogo from '../assets/clients-images/SM.png';
import sseLogo from '../assets/clients-images/SSE.png';

// Row 1: Right-to-Left (moves left)
const row1Clients = [
  { name: 'Airzen', src: airzenLogo },
  { name: 'Aliza', src: alizaLogo },
  { name: 'Aqua+', src: aquaLogo },
  { name: 'BE', src: beLogo },
  { name: 'BEE', src: beeLogo },
  { name: 'Chaska', src: chaskaLogo },
  { name: 'CMS', src: cmsLogo },
  { name: 'DHS', src: dhsLogo },
  { name: 'GS', src: gsLogo },
 // { name: 'MLG', src: mlgLogo },
];

// Row 2: Left-to-Right (moves right)
const row2Clients = [
  { name: 'MM', src: mmLogo },
  { name: 'Neel', src: neelLogo },
  { name: 'NER', src: nerLogo },
  { name: 'Pets', src: petsLogo },
  { name: 'Plumeria', src: plumeriaLogo },
  { name: 'RM', src: rmLogo },
  { name: 'RPL', src: rplLogo },
  { name: 'SM', src: smLogo },
  { name: 'SSE', src: sseLogo },
];

// Repeat each row twice for a seamless infinite loop
const row1List = [...row1Clients, ...row1Clients];
const row2List = [...row2Clients, ...row2Clients];

/**
 * ClientsSection
 * 
 * Displays client brand logos across two opposing continuous marquees:
 * - Row 1: Right to Left (moving left)
 * - Row 2: Left to Right (moving right)
 * Features smooth edge gradients and pause on hover.
 */
export const ClientsSection = () => {
  return (
    <section className="relative z-10 py-10 sm:py-14 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: TRUSTED BY OUR PARTNERS */}
        <div className="text-center mb-8">
          <span className="text-xs font-black text-[#587BA5] uppercase tracking-[1.5px]">
            TRUSTED BY OUR PARTNERS
          </span>
        </div>

      </div>

      {/* Marquee Wrapper with Smooth Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden marquee-pause py-2">
        
        {/* Left & Right Gradient Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Row 1: Right-to-Left (entering right, scrolling left) */}
        <div className="flex overflow-hidden mb-3 sm:mb-6">
          <div className="flex w-max animate-marquee-left">
            {row1List.map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                className="group/card mx-1.5 sm:mx-3 px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.src}
                  alt={`${client.name} Client Logo`}
                  loading="lazy"
                  className="max-h-12 xs:max-h-14 sm:max-h-20 max-w-[120px] sm:max-w-[180px] w-auto object-contain transition-all duration-300 filter group-hover/card:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right (entering left, scrolling right) */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee-right">
            {row2List.map((client, index) => (
              <div
                key={`row2-${client.name}-${index}`}
                className="group/card mx-1.5 sm:mx-3 px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.src}
                  alt={`${client.name} Client Logo`}
                  loading="lazy"
                  className="max-h-12 xs:max-h-14 sm:max-h-20 max-w-[120px] sm:max-w-[180px] w-auto object-contain transition-all duration-300 filter group-hover/card:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default ClientsSection;
