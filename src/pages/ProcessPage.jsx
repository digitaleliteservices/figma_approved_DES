import React from 'react';
import { ArrowRight, CheckCircle2, Clock, FileCode, Layers, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProcessPage({ onStartProject }) {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Research',
      duration: 'Week 1 - 2',
      tagline: 'Understanding the problem before writing a single line of code.',
      description: 'We audit your existing digital assets, analyze competitor performance, conduct stakeholder interviews, and pinpoint high-leverage growth opportunities.',
      deliverables: ['Comprehensive Technical Audit', 'Competitor Landscape Analysis', 'Project Scope & KPI Alignment Document'],
    },
    {
      number: '02',
      title: 'Strategy & Architecture',
      duration: 'Week 2 - 3',
      tagline: 'Blueprint for reliability, velocity, and conversion.',
      description: 'Our system architects construct wireframes, user flow diagrams, database schemas, and define technology stack integrations tailored to your budget and growth targets.',
      deliverables: ['Interactive UX Wireframes', 'System Architecture Diagram', 'Milestone Schedule & Delivery Roadmap'],
    },
    {
      number: '03',
      title: 'UI/UX Design & Prototyping',
      duration: 'Week 3 - 5',
      tagline: 'Crafting visually arresting, human-centric interfaces.',
      description: 'We develop high-fidelity Figma prototypes incorporating your brand identity, interactive micro-interactions, and accessible typography.',
      deliverables: ['Complete High-Fidelity UI Mockups', 'Interactive Clickable Prototype', 'Component Design System & Style Guide'],
    },
    {
      number: '04',
      title: 'Agile Development & QA Testing',
      duration: 'Week 5 - 8',
      tagline: 'Clean code, continuous integration, and rigorous testing.',
      description: 'Our senior developers build modular, responsive, and secure codebases with automated CI/CD testing, Core Web Vitals optimization, and cross-browser validation.',
      deliverables: ['Production-Ready Source Code', 'Automated QA & Security Test Reports', 'Staging Environment Preview Access'],
    },
    {
      number: '05',
      title: 'Launch & Compounding Growth',
      duration: 'Post-Launch',
      tagline: 'Seamless deployment with ongoing optimization.',
      description: 'We manage domain configuration, zero-downtime DNS cutover, Google Analytics 4 integration, and provide proactive post-launch maintenance.',
      deliverables: ['Production Cloud Deployment', 'Staff Training & Admin Handover Docs', '30-Day Guarantee & Growth Monitoring'],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-20">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-4">
            TRANSPARENT & PREDICTABLE EXECUTION
          </span>
          <h1 className="section-title text-[#0c2340] mb-5">
            How We Turn Ideas Into Market-Leading Products
          </h1>
          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto mb-8">
            No guesswork. No hidden bottlenecks. Our proven 5-step engineering framework guarantees transparency, on-time delivery, and compounding digital ROI.
          </p>

          <button
            onClick={() => onStartProject?.('Process Consultation')}
            className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-7 py-3 rounded-full shadow-md transition cursor-pointer"
          >
            <span>Schedule a Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0c2340] text-white flex items-center justify-center font-extrabold text-xl shrink-0 group-hover:bg-[#0066ff] transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="section-title text-xl sm:text-2xl text-[#0c2340]">
                        {step.title}
                      </h3>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#0066ff] uppercase tracking-wider mb-3">
                      {step.tagline}
                    </p>
                    <p className="body-text text-slate-600 text-sm mb-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables Box */}
              <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 mt-2 border border-slate-100">
                <div className="text-xs font-bold text-[#0c2340] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>Key Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="service-title text-[#0c2340] text-base mb-1">
                Zero Surprise Guarantee
              </h4>
              <p className="text-xs text-slate-600">
                Fixed milestone agreements, direct Slack / WhatsApp communication, and full intellectual property ownership handed to you on day one.
              </p>
            </div>
          </div>
          <button
            onClick={() => onStartProject?.()}
            className="button bg-[#0c2340] hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs shrink-0 cursor-pointer shadow-sm"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
