'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryItems } from '@/data/siteData';

export default function PhotoGalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % galleryItems.length);
  };

  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
              <Sparkles className="w-3.5 h-3.5" /> Corporate Moments & Showroom
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Photo Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Moments from our customer deployments, engineering seminars, product demonstrations, and corporate events across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Interactive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.full + index}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer card-3d aspect-4/3"
            >
              <Image
                src={item.thumb || item.full}
                alt={item.title || `Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                unoptimized
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-white font-semibold">
                  <ZoomIn className="w-4 h-4 text-red-400" /> Click to Enlarge
                </span>
                <p className="text-xs text-slate-200 font-medium truncate mt-0.5">
                  {item.title || `Jahid Office Equipment Event ${index + 1}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Enlarged Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[selectedIdx].full}
              alt="Enlarged photo"
              fill
              className="object-contain drop-shadow-2xl"
              unoptimized
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs font-mono text-slate-300">
            {selectedIdx + 1} of {galleryItems.length}
          </div>
        </div>
      )}

    </div>
  );
}
