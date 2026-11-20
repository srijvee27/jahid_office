'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingBag, PhoneCall, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { heroSliders } from '@/data/siteData';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/siteData';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openCart } = useCart();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSliders.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSliders.length) % heroSliders.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const activeSlide = heroSliders[current];
  // Match matching product if available
  const matchedProduct = products.find((p) => p.name.toLowerCase().includes(activeSlide.title.toLowerCase().replace('toshiba ', '')));

  return (
    <section
      className="relative w-full bg-gradient-to-br from-[#0b192c] via-[#112239] to-[#0a1525] text-white overflow-hidden py-10 md:py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D background lighting orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
          
          {/* Left Hero Copy & Information (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-in fade-in duration-500">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-red-400 font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-red-500 animate-spin" />
              <span>Sole Distributor & Direct Importer in Bangladesh</span>
            </div>

            {/* Title with 3D gradient text */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                {activeSlide.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Next-Generation High Performance Photocopier
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Equip your corporate enterprise, financial institution, or government agency with Japan's premier office solution. Backed by 34+ years of expertise and nationwide certified on-site service.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-slate-200">
                <Zap className="w-3.5 h-3.5 text-red-400" /> High-Speed Duplex
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 1-Year Full Warranty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> 12-15 Free Servicing Visits
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {matchedProduct ? (
                <Link
                  href={`/model-details/${matchedProduct.id}/${matchedProduct.slug}`}
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 btn-3d flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> View Technical Specs
                </Link>
              ) : (
                <Link
                  href="/model/1/Photocopy"
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 btn-3d flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Explore Photocopiers
                </Link>
              )}

              <button
                onClick={openCart}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider transition border border-white/25 flex items-center gap-2"
              >
                <span>Request Fast Quotation</span>
              </button>

              <a
                href="tel:01713093300"
                className="px-4 py-3.5 rounded-xl text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition"
              >
                <PhoneCall className="w-4 h-4 text-red-500" /> Call Hotline: 01713-093300
              </a>
            </div>

          </div>

          {/* Right 3D Visual Carousel (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Glass Platform */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl flex items-center justify-center group">
              
              {/* Floating Banner */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-widest shadow-md">
                  Original Toshiba
                </span>
              </div>

              {/* Slider Image with 3D Float */}
              <div className="relative w-full h-full flex items-center justify-center animate-float">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="object-contain p-4 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-700"
                  priority
                  unoptimized
                />
              </div>

              {/* Slide Counter Overlay */}
              <div className="absolute bottom-4 left-6 z-20 text-xs font-mono text-slate-400">
                0{current + 1} / 0{heroSliders.length}
              </div>
            </div>

            {/* Left / Right Nav Controls */}
            <button
              onClick={prevSlide}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg transition z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8 pt-4 border-t border-white/10">
          {heroSliders.map((slide, idx) => (
            <button
              key={slide.title}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-8 bg-red-500' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
