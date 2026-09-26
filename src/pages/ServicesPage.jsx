import React from 'react';
import {
  ServicesHeroSection,
  TailoredServicesSection,
  ServicesStatsSection,
  StrategicProcessSection,
  MethodologySection,
  ServicesCtaSection,
} from '../components/ServicesPage';

export function ServicesPage({ onSelectServiceToQuote, onStartProject }) {
  const handleSelectService = (serviceTitle) => {
    if (onSelectServiceToQuote) {
      onSelectServiceToQuote(serviceTitle);
    } else if (onStartProject) {
      onStartProject(serviceTitle);
    }
  };

  const handleStartProject = () => {
    if (onStartProject) {
      onStartProject('Digital Solutions');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1e38] overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Hero Section ("We Build Digital Experiences That Drive Results") */}
      <ServicesHeroSection
        onExploreServices={() => {
          const el = document.getElementById('services-offerings');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onStartProject={handleStartProject}
      />

      {/* 2. Tailored Services Section ("WHAT WE OFFER - Tailored Services Built For Scale") */}
      <TailoredServicesSection onSelectService={handleSelectService} />

      {/* 3. Stats Section (500+ Projects, 98% Satisfaction, etc.) */}
      <ServicesStatsSection />

      {/* 4. Strategic Process Section ("Simple Solutions!") */}
      <StrategicProcessSection />

      {/* 5. Methodology Section ("ALWAYS GIVING YOU EXACTLY WHAT YOU NEED") */}
      <MethodologySection />

      {/* 6. Ready to get started? CTA Banner */}
      <ServicesCtaSection onContactClick={handleStartProject} />
    </div>
  );
}
export default ServicesPage;
