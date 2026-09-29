import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { DigitalMarketingServicePage } from './pages/DigitalMarketingServicePage.jsx';
import { SocialMediaMarketingServicePage } from './pages/SocialMediaMarketingServicePage.jsx';
import { WebDevelopmentServicePage } from './pages/WebDevelopmentServicePage.jsx';
import { GraphicDesignServicePage } from './pages/GraphicDesignServicePage.jsx';
import { LeadGenerationServicePage } from './pages/LeadGenerationServicePage.jsx';
import { SeoOptimizationServicePage } from './pages/SeoOptimizationServicePage.jsx';
import { ProcessPage } from './pages/ProcessPage.jsx';
import { WorkPage } from './pages/WorkPage.jsx';
import { BlogPage } from './pages/BlogPage.jsx';
import { BlogDetailPage } from './pages/BlogDetailPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { ProjectModal } from './components/ProjectModal.jsx';
import { ServicesModal } from './components/ServicesModal.jsx';
import { AboutModal } from './components/AboutModal.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(undefined);
  const [selectedPillar, setSelectedPillar] = useState(undefined);

  const handleStartProject = (serviceName) => {
    setSelectedService(serviceName || 'Strategy & Consulting');
    setIsServicesModalOpen(false);
    setIsAboutModalOpen(false);
    setIsProjectModalOpen(true);
  };

  const handleExploreServices = (serviceName) => {
    setSelectedService(serviceName);
    setIsServicesModalOpen(true);
  };

  const handleMoreAboutUs = (pillar) => {
    setSelectedPillar(pillar);
    setIsAboutModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar
          onStartProject={() => handleStartProject()}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            {/* Root Landing Route */}
            <Route
              path="/"
              element={
                <HomePage
                  onStartProject={handleStartProject}
                  onExploreServices={handleExploreServices}
                  onMoreAboutUs={handleMoreAboutUs}
                />
              }
            />

            {/* Dedicated About Route */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onStartProject={handleStartProject}
                  onMoreAboutUs={handleMoreAboutUs}
                />
              }
            />

            {/* Dedicated Services Route */}
            <Route
              path="/services"
              element={
                <ServicesPage
                  onSelectServiceToQuote={handleStartProject}
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: Digital Marketing & SEO */}
            <Route
              path="/services/digital-marketing"
              element={
                <DigitalMarketingServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/digital-marketing"
              element={
                <DigitalMarketingServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: Social Media Marketing */}
            <Route
              path="/services/social-media-marketing"
              element={
                <SocialMediaMarketingServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/social-media-marketing"
              element={
                <SocialMediaMarketingServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: Web Development */}
            <Route
              path="/services/web-development"
              element={
                <WebDevelopmentServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/web-development"
              element={
                <WebDevelopmentServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: Graphic Design */}
            <Route
              path="/services/graphic-design"
              element={
                <GraphicDesignServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/graphic-design"
              element={
                <GraphicDesignServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: Lead Generation */}
            <Route
              path="/services/lead-generation"
              element={
                <LeadGenerationServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/lead-generation"
              element={
                <LeadGenerationServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Sub-Service Route: SEO Optimization */}
            <Route
              path="/services/seo-optimization"
              element={
                <SeoOptimizationServicePage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/seo-optimization"
              element={
                <SeoOptimizationServicePage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Process / How We Work Route */}
            <Route
              path="/process"
              element={
                <ProcessPage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Selected Work / Portfolio Route */}
            <Route
              path="/portfolio"
              element={
                <WorkPage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Insights & Blog Routes */}
            <Route
              path="/blog"
              element={
                <BlogPage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <BlogDetailPage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/blogs"
              element={
                <BlogPage
                  onStartProject={handleStartProject}
                />
              }
            />
            <Route
              path="/blogs/:slug"
              element={
                <BlogDetailPage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Contact Route */}
            <Route
              path="/contact"
              element={
                <ContactPage />
              }
            />

            {/* 404 Catch-All Route */}
            <Route
              path="*"
              element={
                <NotFoundPage />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer
          onStartProject={() => handleStartProject()}
          setActiveSection={setActiveSection}
        />

        {/* Interactive Modals */}
        <ProjectModal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
          defaultService={selectedService}
        />

        <ServicesModal
          isOpen={isServicesModalOpen}
          onClose={() => setIsServicesModalOpen(false)}
          onSelectServiceToQuote={(service) => handleStartProject(service)}
          activeServiceName={selectedService}
        />

        <AboutModal
          isOpen={isAboutModalOpen}
          onClose={() => setIsAboutModalOpen(false)}
          onStartProject={() => handleStartProject()}
          highlightedPillar={selectedPillar}
        />
      </div>
    </BrowserRouter>
  );
}
