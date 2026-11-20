import React from 'react';
import { Metadata } from 'next';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import { Building, Sparkles } from 'lucide-react';
import { clientData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Corporate Client List | Jahid Office Equipment (JOE)',
  description: 'Over 60 leading multinational corporations, pharmaceuticals, and industrial conglomerates equipped by Jahid Office Equipment.',
};

export default function CorporateListPage() {
  return (
    <div className="py-10 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
            <Building className="w-3.5 h-3.5" /> Corporate Excellence
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Corporate & Multinational Clients
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Trusted by {clientData.corporate.length}+ major conglomerates, telecom operators, pharmaceuticals, airlines, and real estate developers.
          </p>
        </div>
      </div>

      {/* Grid */}
      <ClientLogoGrid initialCategory="corporate" showFilters={true} />
    </div>
  );
}
