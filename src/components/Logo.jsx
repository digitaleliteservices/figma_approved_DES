import React from 'react';
import LogoImg from "../assets/images/logo.png"

export const Logo = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none cursor-pointer group ${className}`}>
      {/* Exact Dual-Color Logo Icon with 4 pixel dots */}
     <img src={LogoImg} alt="logo" className="w-34 h-15" />

      {/* Brand Name Typography */}
      
    </div>
  );
};
