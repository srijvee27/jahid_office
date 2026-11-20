import React from 'react';
import { Metadata } from 'next';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import { GraduationCap, Sparkles } from 'lucide-react';
import { clientData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'University & College Client List | Jahid Office Equipment (JOE)',
  description: 'Supplying photocopiers and digital duplication systems to 39+ leading universities, colleges, and medical institutes in Bangladesh.',
};

export default function UniversityCollegePage() {
  return (
    <div className="py-10 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
            <GraduationCap className="w-3.5 h-3.5" /> Higher Education Support
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Universities & Colleges
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Empowering examination halls, libraries, and administrative departments across {clientData.university.length}+ universities and colleges.
          </p>
        </div>
      </div>

      {/* Grid */}
      <ClientLogoGrid initialCategory="university" showFilters={true} />
    </div>
  );
}
