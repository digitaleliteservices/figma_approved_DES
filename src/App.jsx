import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProcessPage } from './pages/ProcessPage.jsx';
import { WorkPage } from './pages/WorkPage.jsx';
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
            <Route
              path="/work"
              element={
                <WorkPage
                  onStartProject={handleStartProject}
                />
              }
            />

            {/* Dedicated Contact Route */}
            <Route
              path="/contact"
              element={
                <ContactPage onStartProject={handleStartProject} />
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
