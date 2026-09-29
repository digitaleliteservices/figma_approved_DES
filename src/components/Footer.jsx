import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import LogoImg from "../assets/images/logo(1).png";
import { useNavigate } from 'react-router-dom';
import LogoWhite from "../assets/images/white-logo.png";

export const Footer = ({
  onStartProject,
  setActiveSection,
}) => {
  const navigate = useNavigate();

  const navigateTo = (path, id) => {
    if (setActiveSection && id) {
      setActiveSection(id);
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
    const pathMap = {
      home: '/',
      about: '/about',
      services: '/services',
      process: '/process',
      work: '/portfolio',
      blog: '/blog',
      contact: '/contact',
    };
    if (pathMap[id]) {
      navigate(pathMap[id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#051c4e] text-white overflow-hidden select-none">
      
      <div className="absolute -bottom-6 -left-10 w-96 h-64 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none">
          <path
            d="M -40 180 C 60 140, 160 220, 260 170 C 320 140, 370 160, 420 180"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            fill="none"
          />
          <path
            d="M -40 210 C 70 170, 170 240, 280 195 C 330 175, 380 190, 430 205"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            fill="none"
          />
          <path
            d="M -40 150 C 50 110, 150 190, 240 145 C 300 115, 360 135, 410 155"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle Cyan Dotted/Dashed Wave: Top-Right */}
      <div className="absolute -top-10 -right-10 w-96 h-64 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 240" fill="none">
          <path
            d="M 440 60 C 340 100, 240 20, 140 70 C 80 100, 30 80, -20 60"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            fill="none"
          />
          <path
            d="M 440 30 C 330 70, 230 0, 120 45 C 70 65, 20 50, -30 35"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            fill="none"
          />
          <path
            d="M 440 90 C 350 130, 250 50, 160 95 C 100 125, 40 105, -10 85"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="3 4"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[1540px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 pb-12 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">

            <div
              id="footer-logo"
              onClick={scrollToTop}
              className="flex flex-col items-start cursor-pointer group mb-5"
            >
              <img src={LogoWhite} className="w-40 h-19"/>

              {/* <span className="text-[10.5px] sm:text-[11px] tracking-[0.18em] font-semibold text-white/90 uppercase mt-2.5 leading-none">
                DIGITAL ELITE SERVICES
              </span> */}
            </div>

            <p className="text-slate-300 text-[14px] sm:text-[14.5px] leading-[1.65] max-w-[320px] mb-7 font-normal">
              We design, build and grow digital experiences that help businesses get noticed, trusted
              and chosen.
            </p>

            <div className="flex items-center gap-4.5 text-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#38bdf8] transition-colors"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.8} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#38bdf8] transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.8} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#38bdf8] transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.8} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#38bdf8] transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[16.5px] sm:text-[17px] font-bold text-white mb-5 sm:mb-6 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-slate-300 text-[14px] sm:text-[14.5px] font-normal">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[16.5px] sm:text-[17px] font-bold text-white mb-5 sm:mb-6 tracking-tight">
              Our Services
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-slate-300 text-[14px] sm:text-[14.5px] font-normal">
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  SEO
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Graphic Design
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Lead Generation
                </button>
              </li>
              <li>
                <button
                  onClick={onStartProject}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  WhatsApp Automation
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-[16.5px] sm:text-[17px] font-bold text-white mb-5 sm:mb-6 tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-4 text-slate-300 text-[14px] sm:text-[14.5px] font-normal">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-300 shrink-0 stroke-[1.8]" />
                <a
                  href="mailto:hello@desdigital.com"
                  className="hover:text-white transition-colors"
                >
                  hello@desdigital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-300 shrink-0 stroke-[1.8]" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-300 shrink-0 stroke-[1.8]" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR WITH COPYRIGHT & BACK TO TOP ================= */}
      <div className="w-full border-t border-blue-900/60 py-5 sm:py-6 relative z-10">
        <div className="max-w-[1540px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          
          {/* Copyright Notice */}
          <div className="text-slate-400 text-xs sm:text-[13.5px] font-normal">
            © 2024 DES Digital Elite Services. All rights reserved.
          </div>

          {/* Tagline + Circular Back to Top Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-slate-300 text-xs sm:text-[13.5px] font-medium hidden sm:inline-block">
              Ideas Into Impact
            </span>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#051c4e] flex items-center justify-center shadow-md hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
