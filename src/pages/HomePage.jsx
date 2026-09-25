import React from 'react';
import { Hero } from '../components/HomePage/Hero.jsx';
import { AboutSection } from '../components/HomePage/AboutSection.jsx';
import { ServicesSection } from '../components/HomePage/ServicesSection.jsx';
import { HowWeWorkSection } from '../components/HomePage/HowWeWorkSection.jsx';
import { SelectedWorkSection } from '../components/HomePage/SelectedWorkSection.jsx';
import { TestimonialsSection } from '../components/HomePage/TestimonialsSection.jsx';
import { CtaSection } from '../components/HomePage/CtaSection.jsx';

export function HomePage({
  onStartProject,
  onExploreServices,
  onMoreAboutUs,
}) {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        onStartProject={() => onStartProject()}
        onExploreServices={() => onExploreServices()}
        onSelectService={(serviceName) => onExploreServices(serviceName)}
      />

      {/* About Section */}
      <AboutSection
        onMoreAboutUs={() => onMoreAboutUs()}
        onPillarClick={(pillar) => onMoreAboutUs(pillar)}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectService={(serviceName) => onExploreServices(serviceName)}
        onViewAllServices={() => onExploreServices()}
      />

      {/* Process / How We Work Section */}
      <HowWeWorkSection
        onExploreProcess={() => onStartProject('Process Consultation')}
        onSelectStep={(num, title) => onExploreServices(`${num} ${title}`)}
      />

      {/* Selected Work & Results Section */}
      <SelectedWorkSection
        onViewAllWork={() => onStartProject('All Work Portfolio')}
        onSelectProject={(title) => onStartProject(title)}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        onLearnMore={() => onStartProject('Client Testimonials & Case Studies')}
      />

      {/* Call to Action Section */}
      <CtaSection
        onStartProject={() => onStartProject('Digital Solution Project')}
      />
    </div>
  );
}
