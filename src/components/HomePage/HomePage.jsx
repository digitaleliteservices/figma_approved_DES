import React from 'react';
import { Hero } from './Hero.jsx';
import { AboutSection } from './AboutSection.jsx';
import { ServicesSection } from './ServicesSection.jsx';
import { HowWeWorkSection } from './HowWeWorkSection.jsx';
import { SelectedWorkSection } from './SelectedWorkSection.jsx';
import { ShowcaseSection } from './ShowcaseSection.jsx';
import { TestimonialsSection } from './TestimonialsSection.jsx';
import { CtaSection } from './CtaSection.jsx';
import { ClientsSection } from '../ClientsSection.jsx';

export function HomePage({
  onStartProject,
  onExploreServices,
  onMoreAboutUs,
}) {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        onStartProject={() => onStartProject && onStartProject()}
        onExploreServices={() => onExploreServices && onExploreServices()}
        onSelectService={(serviceName) => onExploreServices && onExploreServices(serviceName)}
      />

      {/* Clients Section */}
      <ClientsSection />

      {/* About Section */}
      <AboutSection
        onMoreAboutUs={() => onMoreAboutUs && onMoreAboutUs()}
        onPillarClick={(pillar) => onMoreAboutUs && onMoreAboutUs(pillar)}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectService={(serviceName) => onExploreServices && onExploreServices(serviceName)}
        onViewAllServices={() => onExploreServices && onExploreServices()}
      />

      {/* Process / How We Work Section */}
      <HowWeWorkSection
        onExploreProcess={() => onStartProject && onStartProject('Process Consultation')}
        onSelectStep={(num, title) => onExploreServices && onExploreServices(`${num} ${title}`)}
      />

      {/* Selected Work & Results Section */}
      <SelectedWorkSection
        onViewAllWork={() => onStartProject && onStartProject('All Work Portfolio')}
        onSelectProject={(title) => onStartProject && onStartProject(title)}
      />

      {/* Showcasing Our Work Continuous Marquee Section */}
      <ShowcaseSection />

      {/* Testimonials Section */}
      <TestimonialsSection
        onLearnMore={() => onStartProject && onStartProject('Client Testimonials & Case Studies')}
      />

      {/* Call to Action Section */}
      <CtaSection
        onStartProject={() => onStartProject && onStartProject('Digital Solution Project')}
      />
    </div>
  );
}
