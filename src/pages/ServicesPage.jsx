import React, { useState } from 'react';
import { ArrowRight, Code2, Globe, Search, Smartphone, Shield, Zap, Sparkles, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage({ onSelectServiceToQuote, onStartProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engineering', label: 'Engineering & Web' },
    { id: 'marketing', label: 'Growth & Marketing' },
    { id: 'creative', label: 'Design & Branding' },
  ];

  const services = [
    {
      id: 'web-development',
      category: 'engineering',
      title: 'Full-Stack Web Development',
      badge: 'Most Popular',
      description: 'Custom, blazing-fast web applications built on modern frameworks designed to handle enterprise scale and high user traffic.',
      features: [
        'React, Next.js, and modern TypeScript architecture',
        'Mobile-first responsive design across all devices',
        'API & headless CMS integrations',
        'High security standards and sub-second load times',
      ],
      tech: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      id: 'digital-marketing',
      category: 'marketing',
      title: 'Digital Marketing & Growth',
      badge: 'High ROI',
      description: 'Data-driven omni-channel campaigns that convert visitors into lifetime customers, maximizing ad spend efficiency.',
      features: [
        'PPC & social advertising campaign management',
        'Full funnel conversion tracking and attribution',
        'Targeted email marketing automation',
        'Transparent weekly analytics reporting',
      ],
      tech: ['Google Ads', 'Meta Ads', 'HubSpot', 'GA4'],
    },
    {
      id: 'seo',
      category: 'marketing',
      title: 'Search Engine Optimization (SEO)',
      badge: 'Organic Scale',
      description: 'Technical, on-page, and local SEO strategies that elevate search engine rankings to secure compounding organic traffic.',
      features: [
        'Comprehensive technical SEO architecture & Core Web Vitals',
        'Targeted keyword research & competitive intelligence',
        'Authoritative backlink building & content strategy',
        'Google Business Profile & local SEO domination',
      ],
      tech: ['Ahrefs', 'Semrush', 'Search Console', 'Schema.org'],
    },
    {
      id: 'ui-ux-design',
      category: 'creative',
      title: 'UI/UX & Product Design',
      badge: 'User Centric',
      description: 'Intuitive user experiences crafted through iterative wireframing, user testing, and high-fidelity interactive design systems.',
      features: [
        'User research & persona journey mapping',
        'Interactive Figma prototypes & usability testing',
        'Modular design systems for seamless developer handoff',
        'Accessibility compliance (WCAG 2.1 AA)',
      ],
      tech: ['Figma', 'Prototyping', 'Design Systems', 'User Testing'],
    },
    {
      id: 'cloud-automation',
      category: 'engineering',
      title: 'Cloud Architecture & Automation',
      badge: 'High Reliability',
      description: 'Resilient cloud infrastructure and workflow automation pipelines to optimize operational overhead and guarantee zero downtime.',
      features: [
        'Automated CI/CD build and deploy pipelines',
        'Serverless & containerized deployments',
        'Automated database backups & disaster recovery',
        'Custom workflow and CRM webhook automations',
      ],
      tech: ['Docker', 'AWS', 'GCP', 'GitHub Actions'],
    },
    {
      id: 'strategy-consulting',
      category: 'creative',
      title: 'Digital Strategy & Consulting',
      badge: 'Executive Level',
      description: 'Actionable technology roadmaps that de-risk digital investments and align IT infrastructure directly with commercial goals.',
      features: [
        'Digital transformation roadmap formulation',
        'Tech stack auditing & modernization blueprints',
        'Product-market fit & conversion rate optimization',
        'Dedicated senior technical advisory',
      ],
      tech: ['Roadmaps', 'Architecture Audit', 'Tech Stack Advisory'],
    },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-8 pb-20">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-4">
            COMPREHENSIVE DIGITAL SERVICES
          </span>
          <h1 className="section-title text-[#0c2340] mb-5">
            Engineered For Scale, Built For Conversions
          </h1>
          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto mb-8">
            Explore our end-to-end suite of digital capabilities. From rapid MVP deployments to enterprise digital marketing campaigns.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`button px-5 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0c2340] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="service-title text-[#0c2340] text-xl mb-3 group-hover:text-[#0066ff] transition-colors">
                  {service.title}
                </h3>
                <p className="body-text text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectServiceToQuote?.(service.title)}
                  className="button w-full inline-flex items-center justify-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] py-2.5 px-4 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-r from-[#0c2340] to-[#1e3a8a] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="section-title text-white text-2xl sm:text-3xl mb-3">
              Need a bespoke or hybrid digital solution?
            </h3>
            <p className="text-slate-300 max-w-xl text-sm sm:text-base">
              We specialize in custom enterprise projects with unique compliance, high concurrency, or specialized architecture requirements.
            </p>
          </div>
          <button
            onClick={() => onStartProject?.('Custom Enterprise Solution')}
            className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 shrink-0 cursor-pointer text-sm"
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
