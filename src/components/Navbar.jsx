import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo.jsx';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Navbar = ({
  onStartProject,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Process', path: '/process', id: 'process' },
    { name: 'Work', path: '/work', id: 'work' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (setActiveSection) {
      setActiveSection(link.id);
    }
    navigate(link.path);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
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
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
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
              onClick={onStartProject}
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
            className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => {
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
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
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
