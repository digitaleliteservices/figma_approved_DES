import React from 'react';
import { X, Calendar, Clock, Share2, ArrowRight, CheckCircle2, Bookmark, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BlogReaderModal({ article, onClose, onStartProject }) {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0066ff] bg-blue-50 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                • {article.readTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-2 rounded-full text-slate-500 hover:text-[#0066ff] hover:bg-blue-50 transition cursor-pointer"
                title="Share article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-7">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#082D72] leading-[1.2] tracking-tight">
              {article.title}
            </h1>

            {/* Author Card Top */}
            <div className="flex items-center gap-3.5 pt-1 pb-4 border-b border-slate-100">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <div className="text-sm font-black text-[#082D72]">
                  {article.author.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {article.author.role}
                </div>
              </div>
            </div>

            {/* Hero Banner Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-video max-h-[380px] w-full bg-slate-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Executive Summary Callout */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-[#082D72]">
              <div className="text-xs font-black uppercase tracking-wider text-[#0066ff] mb-1.5">
                Key Takeaway
              </div>
              <p className="text-sm leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              {article.content &&
                article.content.map((sec, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#082D72] pt-2">
                      {sec.heading}
                    </h3>
                    <p className="text-slate-600 font-normal leading-relaxed">
                      {sec.paragraph}
                    </p>
                  </div>
                ))}
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
              {article.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Box Bottom */}
            <div className="mt-8 p-6 rounded-2xl bg-[#082D72] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div>
                <h4 className="text-base font-extrabold text-white">
                  Ready to put this strategy to work?
                </h4>
                <p className="text-xs text-blue-200 mt-1 max-w-md">
                  Speak with our specialists to review your architecture, marketing funnels, and growth pipeline.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onStartProject) onStartProject(article.title);
                }}
                className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#faa307] text-[#082D72] font-black text-xs px-5 py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-md"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default BlogReaderModal;
