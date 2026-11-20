'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Eye, Zap, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductCard3DProps {
  product: Product;
}

export default function ProductCard3D({ product }: ProductCard3DProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('');

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Find quick highlights from specs
  const speedSpec = product.specs.find((s) => s.key.toLowerCase().includes('speed'))?.value;
  const paperSpec = product.specs.find((s) => s.key.toLowerCase().includes('capacity') || s.key.toLowerCase().includes('paper'))?.value;
  const memorySpec = product.specs.find((s) => s.key.toLowerCase().includes('memory') || s.key.toLowerCase().includes('ram'))?.value;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease',
      }}
      className="group relative bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner & Badges */}
      <div className="p-4 pb-0 flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-red-600 border border-red-200/60">
          <Zap className="w-3 h-3 fill-red-500 text-red-500" />
          {product.badge || 'Toshiba Japan'}
        </span>
        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
          Photocopier
        </span>
      </div>

      {/* 3D Image Canvas with Floating Effect */}
      <Link href={`/model-details/${product.id}/${product.slug}`} className="block relative w-full h-56 p-4">
        <div className="relative w-full h-full bg-slate-50/60 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center group-hover:bg-red-50/20 transition-colors">
          <Image
            src={product.thumbnail || product.images[0] || '/frontend/images/logo.jpg'}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-108 transition-transform duration-500 ease-out"
            unoptimized
          />
        </div>
      </Link>

      {/* Content Area */}
      <div className="p-5 pt-0 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/model-details/${product.id}/${product.slug}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Quick Specs Chips */}
          <div className="grid grid-cols-2 gap-1.5 mt-3 text-[11px]">
            {speedSpec && (
              <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 truncate" title={speedSpec}>
                <span className="font-semibold text-slate-900">Speed:</span> {speedSpec}
              </div>
            )}
            {memorySpec && (
              <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 truncate" title={memorySpec}>
                <span className="font-semibold text-slate-900">RAM:</span> {memorySpec}
              </div>
            )}
            {paperSpec && (
              <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700 truncate col-span-2" title={paperSpec}>
                <span className="font-semibold text-slate-900">Paper:</span> {paperSpec}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/model-details/${product.id}/${product.slug}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Specs</span>
          </Link>

          <button
            onClick={handleAddToCart}
            className={`py-2.5 px-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/25 btn-3d'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
