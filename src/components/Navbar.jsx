import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Share2,
  Code2,
  Palette,
  Target,
  Search,
  Sparkles,
  LayoutGrid,
} from 'lucide-react';
import { Logo } from './Logo.jsx';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Navbar = ({
  onStartProject,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const subServices = [
    {
      name: 'Digital Marketing',
      path: '/services/digital-marketing',
      description: 'Strategy, PPC & Organic Scaling',
      icon: Megaphone,
      color: 'bg-blue-50 text-[#0066ff]',
    },
    {
      name: 'Social Media Marketing',
      path: '/services/social-media-marketing',
      description: 'Content, Paid Ads & Brand Growth',
      icon: Share2,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      name: 'Web Development',
      path: '/services/web-development',
      description: 'UI/UX & High-Performance Websites',
      icon: Code2,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      name: 'Graphic Design',
      path: '/services/graphic-design',
      description: 'Logos, Identity & Packaging',
      icon: Palette,
      color: 'bg-pink-50 text-pink-600',
    },
    {
      name: 'Lead Generation',
      path: '/services/lead-generation',
      description: 'Targeted PPC & High-Converting Funnels',
      icon: Target,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      name: 'SEO Optimization',
      path: '/services/seo-optimization',
      description: 'Rank #1 on Google & Local Map Packs',
      icon: Search,
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const navLinks = [
    { name: 'HOME', path: '/', id: 'home' },
    { name: 'ABOUT', path: '/about', id: 'about' },
    { name: 'SERVICES', path: '/services', id: 'services', hasDropdown: true },
    { name: 'PORTFOLIO', path: '/portfolio', id: 'portfolio' },
    { name: 'BLOG', path: '/blog', id: 'blog' },
    { name: 'CONTACT', path: '/contact', id: 'contact' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (setActiveSection) {
      setActiveSection(link.id);
    }
    navigate(link.path);
  };

  const handleSubServiceClick = (path) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const isServicesActive =
    location.pathname === '/services' ||
    location.pathname.startsWith('/services/') ||
    [
      '/digital-marketing',
      '/social-media-marketing',
      '/web-development',
      '/graphic-design',
      '/lead-generation',
      '/seo-optimization',
    ].includes(location.pathname);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5'
          : 'bg-white py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            id="brand-logo"
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer"
          >
            <Logo size="md" />
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <button
                      id={`nav-link-${link.id}`}
                      onClick={() => handleNavClick(link)}
                      className={`relative py-1.5 inline-flex items-center gap-1 text-[15px] transition-colors cursor-pointer ${
                        isServicesActive
                          ? 'text-[#0c2340] font-bold'
                          : 'text-[#0c2340]/80 hover:text-[#0066ff] font-semibold'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#0066ff]' : ''
                        }`}
                      />
                      {isServicesActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#0066ff] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] z-50 pointer-events-auto"
                        >
                          <div className="bg-white  p-5 shadow-[0_20px_50px_rgba(8,45,114,0.14)] border border-slate-200/90 backdrop-blur-md">
                            
                            {/* Dropdown Header / All Services Link */}
                            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 px-1">
                              <div>
                                <span className="text-xs font-black uppercase tracking-wider text-[#0066ff]">
                                  OUR EXPERTISE
                                </span>
                                <h4 className="text-sm font-extrabold text-[#082D72]">
                                  Specialized Digital Solutions
                                </h4>
                              </div>
                              <button
                                onClick={() => handleNavClick({ path: '/services', id: 'services' })}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066ff] hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                              >
                                <LayoutGrid className="w-3.5 h-3.5" />
                                <span>All Services</span>
                              </button>
                            </div>

                            {/* 2-Column Grid of 6 Sub-Services */}
                            <div className="grid grid-cols-2 gap-2.5">
                              {subServices.map((sub) => {
                                const Icon = sub.icon;
                                const isSubActive = location.pathname === sub.path;
                                return (
                                  <button
                                    key={sub.name}
                                    type="button"
                                    onClick={() => handleSubServiceClick(sub.path)}
                                    className={`group flex items-start gap-3 p-3 rounded-2xl text-left transition-all duration-150 cursor-pointer ${
                                      isSubActive
                                        ? 'bg-blue-50/70 border border-blue-200/80'
                                        : 'hover:bg-slate-50 border border-transparent'
                                    }`}
                                  >
                                    <div
                                      className={`w-9 h-9 rounded-xl ${sub.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-150 shadow-xs`}
                                    >
                                      <Icon className="w-4 h-4 stroke-[2.2]" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-xs font-black text-[#082D72] group-hover:text-[#0066ff] transition-colors flex items-center gap-1">
                                        <span className="truncate">{sub.name}</span>
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0066ff]" />
                                      </div>
                                      <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                                        {sub.description}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer */}
                            

                          </div>
                          <div className=" border-t border-slate-100 flex items-center justify-end px-4  -mx-5 -mb-5  rounded-b-[24px]">
                              <button
                                type="button"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  if (onStartProject) onStartProject('Free Consultation');
                                }}
                                className="inline-flex items-center bg-[#0066ff] gap-1.5 active:scale-95 p-15 mr-2 text-white font-bold text-sm px-7 py-2  shadow-sm hover:shadow  hover:bg-blue-900 hover:underline decoration-white transition-all cursor-pointer"
                              >
                                <span>Free Consultation</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link)}
                  className={`relative py-1 text-[15px] transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0c2340] font-bold'
                      : 'text-[#0c2340]/80 hover:text-[#0066ff] font-semibold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#0066ff] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              id="cta-start-project-nav"
              onClick={() => navigate('/contact')}
              className="button group inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] active:scale-98 text-[#0c2340] font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="cta-start-project-mobile-quick"
              onClick={onStartProject}
              className="button inline-flex items-center gap-1.5 bg-[#ffb703] text-slate-900 font-bold px-3.5 py-1.5 rounded-full text-xs"
            >
              <span>Start</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.id} className="rounded-xl overflow-hidden border border-slate-100">
                      <div className="flex items-center justify-between px-3 py-2.5 bg-slate-50/70">
                        <button
                          onClick={() => handleNavClick(link)}
                          className={`text-left text-base font-bold transition ${
                            isServicesActive ? 'text-[#0066ff]' : 'text-slate-800'
                          }`}
                        >
                          SERVICES
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded-md text-slate-500 hover:bg-slate-200/60"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileServicesOpen ? 'rotate-180 text-[#0066ff]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Sub-services list in mobile */}
                      {mobileServicesOpen && (
                        <div className="bg-white p-2.5 space-y-1.5 border-t border-slate-100">
                          <button
                            onClick={() => handleNavClick({ path: '/services', id: 'services' })}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#0066ff] bg-blue-50 flex items-center justify-between"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          {subServices.map((sub) => {
                            const Icon = sub.icon;
                            const isSubActive = location.pathname === sub.path;
                            return (
                              <button
                                key={sub.name}
                                onClick={() => handleSubServiceClick(sub.path)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold transition ${
                                  isSubActive
                                    ? 'bg-blue-50/80 text-[#0066ff] font-bold'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-md ${sub.color} flex items-center justify-center shrink-0`}>
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="truncate font-bold text-slate-800">{sub.name}</div>
                                  <div className="text-[10px] text-slate-400 truncate">{sub.description}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition ${
                      isActive
                        ? 'bg-blue-50 text-[#0066ff] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <div className="pt-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="button w-full inline-flex items-center justify-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-slate-900 font-bold px-6 py-3 rounded-full shadow-sm text-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
