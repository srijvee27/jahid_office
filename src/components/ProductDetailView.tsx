'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingBag, 
  PhoneCall, 
  ShieldCheck, 
  Check, 
  Zap, 
  FileText, 
  Printer, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import ProductCard3D from '@/components/ProductCard3D';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({ product, relatedProducts }: Props) {
  const [selectedImg, setSelectedImg] = useState(product.images[0] || product.thumbnail || '/frontend/images/logo.jpg');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handlePrintSpecs = () => {
    window.print();
  };

  // Group specs into General, Copier/Print, and Scan/System if possible
  const generalSpecs = product.specs.slice(0, 10);
  const detailedSpecs = product.specs.slice(10);

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-red-600 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/model/1/Photocopy" className="hover:text-red-600 transition">Photocopier</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold truncate">{product.name}</span>
      </nav>

      {/* Main 3D Product Canvas & Buy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: 3D Product Images & Gallery (Cols 1-6) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Main 3D Image Platform */}
          <div className="relative w-full aspect-square sm:h-[450px] bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 flex items-center justify-center overflow-hidden group">
            
            {/* Background lighting glow */}
            <div className="absolute inset-0 bg-radial from-red-500/5 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-md">
                <Zap className="w-3.5 h-3.5" /> {product.badge || 'Toshiba Japan'}
              </span>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImg}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Thumbnails row */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden bg-white border-2 transition flex-shrink-0 p-1 ${
                    selectedImg === img ? 'border-red-600 shadow-md' : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>1-Year Machine Warranty</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>12-15 Free Annual Visits</span>
            </div>
          </div>

        </div>

        {/* Right: Product Summary & Quotation Actions (Cols 7-12) */}
        <div className="lg:col-span-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-slate-200/90 shadow-xl space-y-6">
          
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
              Toshiba Digital Photocopier
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b192c] tracking-tight mt-1">
              {product.name}
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {product.description || 'Enterprise high-performance multifunctional copier engineered with robust Japanese architecture, cloud connectivity, and industry-leading durability.'}
            </p>
          </div>

          {/* Key Specs Quick Matrix */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {generalSpecs.slice(0, 6).map((spec, i) => (
                <div key={i} className="flex justify-between p-2 rounded-lg bg-white border border-slate-100">
                  <span className="text-slate-500 font-medium truncate pr-2">{spec.key}:</span>
                  <span className="font-bold text-slate-900 truncate">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Commercial Availability Note */}
          <div className="p-4 bg-red-50/80 rounded-2xl border border-red-200/80 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-red-800 uppercase tracking-wider">Official Wholesale Rate</p>
              <p className="text-lg font-black text-red-600">Call / Inquire For Best Price</p>
            </div>
            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-emerald-700 border border-emerald-300 shadow-sm">
              In Stock & Ready
            </span>
          </div>

          {/* Interactive Quantity & Quotation Action */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-slate-600 hover:bg-slate-100 transition"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 py-2 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-slate-600 hover:bg-slate-100 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30 btn-3d'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Request Quotation / Add to Cart
                  </>
                )}
              </button>

              <a
                href="tel:01713093300"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#0b192c] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 btn-navy-3d"
              >
                <PhoneCall className="w-4 h-4 text-red-500" />
                <span>Call Hotline</span>
              </a>
            </div>

            <button
              onClick={handlePrintSpecs}
              className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 transition"
            >
              <FileText className="w-3.5 h-3.5" /> Print / Save Specification Sheet
            </button>
          </div>

        </div>

      </div>

      {/* Comprehensive Technical Specification Table */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">Engineering Details</span>
          <h2 className="text-2xl font-extrabold text-[#0b192c] tracking-tight mt-1">
            Complete Technical Specifications
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Exact manufacturer specifications certified by Toshiba Japan.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <tbody>
              {product.specs.map((spec, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-slate-100 transition ${
                    idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                  } hover:bg-red-50/30`}
                >
                  <td className="py-3 px-4 font-bold text-slate-800 w-1/3 sm:w-1/4 border-r border-slate-100">
                    {spec.key}
                  </td>
                  <td className="py-3 px-4 text-slate-700 leading-relaxed">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Photocopiers */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Explore Alternatives</span>
              <h3 className="text-xl font-bold text-[#0b192c]">Other Toshiba e-Studio Models</h3>
            </div>
            <Link
              href="/model/1/Photocopy"
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <span>View All Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard3D key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
