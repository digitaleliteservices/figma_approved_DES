import React from 'react';
import { ArrowRight, Users, TrendingUp, Lightbulb, ShieldCheck, CheckCircle2, Award, Zap, HeartHandshake } from 'lucide-react';
import teamImg from '../assets/images/team_collaboration_1790002998338.jpg';
import { Link } from 'react-router-dom';

export function AboutPage({ onStartProject, onMoreAboutUs }) {
  const pillars = [
    {
      id: 'client-first',
      title: 'Client First Approach',
      icon: Users,
      description: 'Your goals guide every decision. We immerse ourselves in your brand to build solutions that solve actual business challenges.',
      highlight: 'Deep stakeholder alignment & continuous transparent communication',
    },
    {
      id: 'result-driven',
      title: 'Result Driven Solutions',
      icon: TrendingUp,
      description: 'We focus on measurable outcomes — from conversion boosts and user retention to rock-solid infrastructure performance.',
      highlight: 'Data-informed design sprints and conversion-optimized architectures',
    },
    {
      id: 'creative-thinking',
      title: 'Creative Thinking',
      icon: Lightbulb,
      description: 'Blending bold visual aesthetics with technical rigor to give your digital products a distinct and memorable competitive edge.',
      highlight: 'Award-winning digital experiences tailored to your audience',
    },
    {
      id: 'long-term',
      title: 'Long Term Partnership',
      icon: ShieldCheck,
      description: 'We do not just ship and leave. We maintain, iterate, and continuously scale alongside your business growth trajectory.',
      highlight: 'Post-launch optimization, proactive security & growth roadmapping',
    },
  ];

  const stats = [
    { value: '100+', label: 'Successful Projects Delivered' },
    { value: '98%', label: 'Client Retention & Satisfaction' },
    { value: '5+ Years', label: 'Driving Digital Innovation' },
    { value: '24/7', label: 'Dedicated Support & Advisory' },
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-20">
      {/* Hero Banner for About */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-4">
              ABOUT DIGITAL ELITE SERVICES
            </span>
            <h1 className="section-title text-[#0c2340] mb-6">
              Empowering Businesses Through Purposeful Digital Innovation
            </h1>
            <p className="section-subtitle text-slate-600 max-w-2xl mx-auto mb-8">
              We are a team of strategists, engineers, and designers passionate about turning ambitious ideas into scalable, high-converting digital realities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onStartProject?.()}
                className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-7 py-3 rounded-full shadow-md transition cursor-pointer"
              >
                <span>Start a Project With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="button inline-flex items-center gap-2 border border-slate-300 hover:border-[#0066ff] text-[#0c2340] hover:text-[#0066ff] px-6 py-3 rounded-full transition"
              >
                <span>View Our Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Team Photography Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={teamImg}
                alt="Digital Elite Services Collaborative Team"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[280px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  5+
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0c2340]">Years of Excellence</div>
                  <div className="text-xs text-slate-500">Transforming brands worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#0066ff] uppercase tracking-wider">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="section-title text-[#0c2340] mt-2 mb-6">
              We don’t just build websites; we engineer growth engines.
            </h2>
            <p className="body-text text-slate-600 mb-6">
              At Digital Elite Services, we believe that every enterprise, startup, and business deserves digital tools that perform relentlessly. By merging deep design craftsmanship with high-velocity web engineering, we help clients outpace competitors and create authentic connections with their customers.
            </p>
            <p className="body-text text-slate-600 mb-8">
              From responsive e-commerce portals to enterprise SaaS dashboards and performance-driven SEO architectures, our multidisciplinary team treats your business objectives as our own North Star.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0c2340]">Enterprise-grade security</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0c2340]">Sub-second loading times</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0c2340]">Human-centric UX design</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#0c2340]">Proactive 24/7 maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="py-16 bg-slate-50/60 mt-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#0066ff] uppercase tracking-wider">
              OUR FOUNDATIONAL VALUES
            </span>
            <h2 className="section-title text-[#0c2340] mt-2 mb-4">
              The 4 Pillars Behind Every Project
            </h2>
            <p className="section-subtitle text-slate-600">
              Our operating framework guarantees consistent quality, strategic discipline, and compounding business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={() => onMoreAboutUs?.(pillar.title)}
                  className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#0066ff] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="service-title text-[#0c2340] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="body-text text-slate-600 text-sm mb-4">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5">
                      <span>Explore pillar</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c2340] rounded-3xl p-10 lg:p-14 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700/60">
            {stats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-6 lg:pt-0' : ''}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffb703] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-300 max-w-[200px] mx-auto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
