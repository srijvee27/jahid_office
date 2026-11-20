'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Building, Landmark, GraduationCap, Building2 } from 'lucide-react';
import { clientData } from '@/data/siteData';

interface ClientLogoGridProps {
  initialCategory?: 'all' | 'bank' | 'corporate' | 'government' | 'university';
  showFilters?: boolean;
}

export default function ClientLogoGrid({
  initialCategory = 'all',
  showFilters = true,
}: ClientLogoGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'bank' | 'corporate' | 'government' | 'university'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const allClients = useMemo(() => {
    return [
      ...clientData.bank.map((c) => ({ ...c, type: 'bank' as const, typeLabel: 'Bank' })),
      ...clientData.corporate.map((c) => ({ ...c, type: 'corporate' as const, typeLabel: 'Corporate' })),
      ...clientData.government.map((c) => ({ ...c, type: 'government' as const, typeLabel: 'Government' })),
      ...clientData.university.map((c) => ({ ...c, type: 'university' as const, typeLabel: 'University' })),
    ];
  }, []);

  const filteredClients = useMemo(() => {
    let list = allClients;
    if (activeTab !== 'all') {
      list = list.filter((c) => c.type === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [allClients, activeTab, searchQuery]);

  const tabs = [
    { id: 'all', label: 'All Clients', count: allClients.length, icon: Building2 },
    { id: 'bank', label: 'Banks', count: clientData.bank.length, icon: Landmark },
    { id: 'corporate', label: 'Corporates', count: clientData.corporate.length, icon: Building },
    { id: 'government', label: 'Government', count: clientData.government.length, icon: Building2 },
    { id: 'university', label: 'Universities', count: clientData.university.length, icon: GraduationCap },
  ];

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      {showFilters && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            />
          </div>

        </div>
      )}

      {/* Grid of Client Logos */}
      {filteredClients.length === 0 ? (
        <div className="text-center py-16 bg-white/60 rounded-2xl border border-dashed border-slate-300">
          <p className="text-sm font-semibold text-slate-600">No client found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
            }}
            className="mt-3 text-xs text-red-600 font-bold hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200/80 hover:border-red-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between card-3d"
            >
              <div className="relative w-full h-20 sm:h-24 bg-slate-50/60 rounded-lg overflow-hidden flex items-center justify-center p-2 group-hover:bg-red-50/20 transition">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="w-full text-center mt-2">
                <p className="text-[11px] font-bold text-slate-800 line-clamp-1 group-hover:text-red-600 transition" title={client.name}>
                  {client.name}
                </p>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                  {client.typeLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Footer */}
      <div className="text-center text-xs text-slate-500 pt-2">
        Showing {filteredClients.length} reputable organizations powered by Jahid Office Equipment
      </div>
    </div>
  );
}
