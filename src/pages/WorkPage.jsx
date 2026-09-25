import React, { useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Award, CheckCircle } from 'lucide-react';
import ecommerceImg from '../assets/images/work_ecommerce_laptop_1790060147830.jpg';
import brandingImg from '../assets/images/work_branding_identity_1790060162943.jpg';
import dashboardImg from '../assets/images/work_marketing_dashboard_1790060176379.jpg';
import { Link } from 'react-router-dom';

export function WorkPage({ onStartProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'SaaS & Analytics' },
    { id: 'branding', label: 'Brand & Creative' },
  ];

  const projects = [
    {
      id: 'apex-global-ecommerce',
      category: 'ecommerce',
      title: 'Apex Retail — Next-Gen Headless E-Commerce',
      subtitle: 'Complete storefront overhaul with sub-second checkout speeds',
      image: ecommerceImg,
      metric: '+240% Checkout Conversion',
      tags: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe'],
      summary: 'Migrated an omnichannel luxury retailer from legacy monolith to a headless React storefront, eliminating cart friction and boosting mobile conversions.',
    },
    {
      id: 'lumina-saas-dashboard',
      category: 'saas',
      title: 'Lumina Cloud — Enterprise Intelligence Dashboard',
      subtitle: 'High-frequency telemetry visualization for fintech operators',
      image: dashboardImg,
      metric: '3.8x Data Ingestion Speed',
      tags: ['React', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      summary: 'Built real-time financial dashboards handling thousands of live concurrent telemetry events with zero client-side latency.',
    },
    {
      id: 'verve-brand-transformation',
      category: 'branding',
      title: 'Verve Studio — Premium Brand Re-Architecture',
      subtitle: 'Identity design, design systems, and digital product experience',
      image: brandingImg,
      metric: '1.8M Organic Impressions',
      tags: ['Brand Identity', 'UI/UX Design', 'Design Systems', 'SEO'],
      summary: 'Complete brand repositioning and multi-platform digital redesign that established market leadership in contemporary luxury hospitality.',
    },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white pt-8 pb-20">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-4">
            PROVEN RESULTS & CASE STUDIES
          </span>
          <h1 className="section-title text-[#0c2340] mb-5">
            Real Work Built For Industry Leaders
          </h1>
          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto mb-8">
            Browse through our portfolio of custom software, enterprise platforms, and digital growth campaigns that delivered measurable business returns.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`button px-5 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-[#0c2340] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md border border-slate-100 group relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0c2340] shadow-sm flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{project.metric}</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl text-[#0c2340] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0066ff] mb-4">
                    {project.subtitle}
                  </p>
                  <p className="body-text text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onStartProject?.(project.title)}
                    className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-6 py-2.5 rounded-full text-sm transition cursor-pointer shadow-sm"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#0c2340] rounded-3xl p-10 sm:p-14 text-center text-white shadow-xl">
          <h2 className="section-title text-white text-3xl sm:text-4xl mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Tell us about your requirements and let us engineer a tailored digital solution that exceeds expectations.
          </p>
          <button
            onClick={() => onStartProject?.('New Case Study Project')}
            className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer text-sm"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
