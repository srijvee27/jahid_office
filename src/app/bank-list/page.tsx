import React from 'react';
import { Metadata } from 'next';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import { Landmark, Sparkles } from 'lucide-react';
import { clientData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Bank Client List | Jahid Office Equipment (JOE)',
  description: 'Explore the 36+ leading commercial and public banks across Bangladesh relying on Toshiba Photocopiers from Jahid Office Equipment.',
};

export default function BankListPage() {
  return (
    <div className="py-10 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
            <Landmark className="w-3.5 h-3.5" /> Financial Sector Trust
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Banking Sector Clients
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Providing high-duty photocopiers and digital document handling systems to {clientData.bank.length}+ premier banks in Bangladesh.
          </p>
        </div>
      </div>

      {/* Grid */}
      <ClientLogoGrid initialCategory="bank" showFilters={true} />
    </div>
  );
}
