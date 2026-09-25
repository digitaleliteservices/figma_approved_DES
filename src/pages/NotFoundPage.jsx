import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="text-center max-w-md">
        <div className="text-7xl font-extrabold text-[#0c2340] mb-4">404</div>
        <h1 className="section-title text-[#0c2340] text-2xl sm:text-3xl mb-3">
          Page Not Found
        </h1>
        <p className="body-text text-slate-600 text-sm mb-8">
          The page you are looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="button inline-flex items-center gap-2 bg-[#ffb703] hover:bg-[#faa307] text-[#0c2340] px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/services"
            className="button inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 px-5 py-2.5 rounded-full text-sm transition"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
