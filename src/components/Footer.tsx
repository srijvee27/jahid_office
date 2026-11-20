import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Printer, 
  ExternalLink, 
  CheckCircle, 
  Headphones 
} from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hotline Action Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900/40 to-slate-950/40 border border-red-900/30">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="p-3 bg-red-600 rounded-xl text-white shadow-lg shadow-red-600/30 flex-shrink-0 hidden sm:block">
                <Headphones className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Need Sales or Emergency Photocopier Service?</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Our certified Toshiba technical engineers provide rapid on-site outdoor maintenance across Bangladesh.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a
                href="tel:01713093300"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-red-600/30 btn-3d flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> 01713-093300
              </a>
              <a
                href="tel:01922117201"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> 01922-117201
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Summary (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md">
                <Image
                  src="/frontend/images/logo.jpg"
                  alt="Jahid Office Equipment Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  JAHID OFFICE <span className="text-red-500">EQUIPMENT</span>
                </span>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Leading Office Technology Importer Since 1990
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Jahid Office Equipment (JOE) is established in 1990 and specializes in sales & service of Toshiba Photocopiers, Digital Fax & other office equipment with nationwide service coverage in Bangladesh. Sole distributor of Unibind Brand Steel Binding Machine (Belgium).
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>34+ Years of Industry Trust & Reliability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Certified Toshiba Japanese Engineering Standards</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>12-15 Guaranteed Free Maintenance Calls Per Year</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-red-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-red-400 transition">About JOE</Link>
              </li>
              <li>
                <Link href="/message-from" className="hover:text-red-400 transition">Message from MD</Link>
              </li>
              <li>
                <Link href="/model/1/Photocopy" className="hover:text-red-400 transition">Toshiba Photocopiers</Link>
              </li>
              <li>
                <Link href="/service-support" className="hover:text-red-400 transition">Service & Support</Link>
              </li>
              <li>
                <Link href="/photo-gallery" className="hover:text-red-400 transition">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-red-400 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Client Directory */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Our Clients
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/bank-list" className="hover:text-red-400 transition flex items-center justify-between">
                  <span>Bank List</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">36 Banks</span>
                </Link>
              </li>
              <li>
                <Link href="/corporate-list" className="hover:text-red-400 transition flex items-center justify-between">
                  <span>Corporate List</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">60 Groups</span>
                </Link>
              </li>
              <li>
                <Link href="/government-list" className="hover:text-red-400 transition flex items-center justify-between">
                  <span>Government List</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">32 Ministries</span>
                </Link>
              </li>
              <li>
                <Link href="/university-college" className="hover:text-red-400 transition flex items-center justify-between">
                  <span>University & College</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">39 Campuses</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Products</h5>
              <p className="text-[11px] text-slate-400 leading-normal">
                Toshiba e-Studio 4508A, 3008A, 2508A, 5008A, 2809A, 2309A, 2303A & Unibind Steel Binding.
              </p>
            </div>
          </div>

          {/* Corporate Headquarters */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  107, Motijheel C/A, Khan Mansion (3rd Floor), Dhaka-1000.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-slate-300">01713-093300, 02-7111617</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-slate-300">info@jahidoffice.com</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold"
                >
                  <span>View All 5 Branch Offices</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Branches Showcase Grid */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Nationwide Branch Network & Service Centers
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.branches.map((b) => (
              <div
                key={b.name}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between mb-1">
                  <h5 className="text-xs font-bold text-white truncate">{b.name}</h5>
                  {b.isHQ && (
                    <span className="text-[9px] bg-red-600/30 text-red-400 border border-red-500/40 px-1 rounded">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 mb-1">{b.address}</p>
                {b.mobile && (
                  <p className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-red-500" /> {b.mobile}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Jahid Office Equipment. All Rights Reserved. Established 1990.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-white transition">About Us</Link>
            <Link href="/service-support" className="hover:text-white transition">Warranty Terms</Link>
            <Link href="/contact-us" className="hover:text-white transition">Nationwide Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
