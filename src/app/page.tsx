import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Printer, 
  Layers, 
  FileCheck, 
  PhoneCall, 
  Headphones, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Building2,
  Building
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import ProductCard3D from '@/components/ProductCard3D';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import { products, partners, siteConfig, clientData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Jahid Office Equipment | Authorized Toshiba Photocopier Importer Since 1990',
  description: 'Welcome to Jahid Office Equipment (JOE). Importer of Toshiba Japan Photocopiers & Sole Distributor of Unibind Brand Steel Binding in Bangladesh. 34+ years experience.',
};

export default function HomePage() {
  const featuredProducts = products;

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. 3D Hero Slider */}
      <HeroSlider />

      {/* 2. Key Stats & Metric Ticker (Glass Panel) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/80 shadow-2xl">
          
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/60 flex items-center justify-center text-red-600 shadow-sm flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">34+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years of Trust (Est. 1990)</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">167+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Tier Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">12-15</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Free Annual Visits</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 shadow-sm flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">5</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nationwide Branches</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Welcome & Company Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
              <Sparkles className="w-3.5 h-3.5" /> Established in 1990
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
              Leading Importer & Service Provider of Office Equipment in Bangladesh
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong>Jahid Office Equipment (JOE)</strong> was founded in 1990 with a vision to revolutionize office workflow automation across Bangladesh. Over the past 34 years, we have emerged as one of the nation's most trusted importers and authorized distributors of high-precision Japanese photocopiers and digital document handling systems.
              </p>
              <p>
                We are proud to be the <strong>Sole Distributor of Unibind Brand Steel Binding Machines (Belgium)</strong> and an authorized direct importer of world-renowned <strong>Toshiba Japan Photocopiers</strong>. We deliver unmatched after-sales technical support backed by skilled, factory-trained engineers.
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>100% Genuine Toshiba Japan Machines</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>1-Year Full Machine Warranty</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>12-15 Guaranteed Free Servicing Visits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>Sole Importer of Unibind Belgium Steel Binding</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/about-us"
                className="px-6 py-3 rounded-xl bg-[#0b192c] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md btn-navy-3d flex items-center gap-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/service-support"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition border border-slate-200"
              >
                <span>Warranty & Service Terms</span>
              </Link>
            </div>
          </div>

          {/* Right 3D Visual Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl shadow-xl space-y-4 card-3d">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Uncompromising Quality Since 1990</h3>
                <p className="text-xs sm:text-sm text-red-100 mt-2 leading-relaxed">
                  Serving over 36 commercial banks, 60 corporate industrial groups, 32 government ministries, and 39 universities nationwide with zero downtime philosophy.
                </p>
              </div>
              <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                <span>Nationwide Outdoor Field Engineers</span>
                <span className="text-red-200 font-bold">Fast Response</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-lg space-y-3 card-3d">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sole Dealership</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">Belgium Brand</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Unibind Steel Binding Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The world's leading document presentation and steel binding solution. Exclusively imported and distributed in Bangladesh by Jahid Office Equipment.
              </p>
              <Link
                href="/model/4/Steel-Binding-Machine"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 pt-1"
              >
                <span>Explore Binding Machines</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Managing Director Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#0b192c] via-[#162a45] to-[#0b192c] text-white rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle Authentic Background Texture */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-[center_left] pointer-events-none mix-blend-luminosity" 
            style={{ backgroundImage: "url('/frontend/images/managingdirector.jpg')" }}
          />
          <div className="absolute right-0 top-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-red-500/40 shadow-2xl bg-slate-900 group ring-4 ring-white/10">
                <Image
                  src="/frontend/images/md-portrait.jpg"
                  alt="Managing Director - Jahid Office Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-extrabold text-white mt-4">Managing Director</h3>
              <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">Jahid Office Equipment (JOE)</p>
              <p className="text-[11px] text-slate-400 mt-1">Authorised Importer & Service Since 1990</p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-3xl text-red-500 font-serif">“</span>
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed -mt-4">
                Our relentless commitment since 1990 has been simple: provide Bangladesh's financial institutions, educational hubs, and enterprises with world-class Toshiba photocopying machines and guaranteed lifelong technical service. We value your business continuity above all else.
              </p>
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Backed by dedicated customer support teams in Dhaka, Chittagong, Khulna & Bogra.
                </span>
                <Link
                  href="/message-from"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Toshiba Photocopiers (3D Interactive Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 mb-2">
              <Printer className="w-3.5 h-3.5" /> High Performance Photocopiers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b192c] tracking-tight">
              Featured Toshiba e-Studio Models
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Engineered for demanding workloads with crystal-clear output, duplex capability, and high durability.
            </p>
          </div>

          <Link
            href="/model/1/Photocopy"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 bg-red-50 px-4 py-2.5 rounded-xl border border-red-200/80 transition"
          >
            <span>View All 7 Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3D Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard3D key={product.id} product={product} />
          ))}
        </div>

      </section>

      {/* 6. Business Partner Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-md space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Global Alliances</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Our Trusted Technology & Business Partners
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Collaborating with world leaders in document solutions, imaging systems, and precision engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="h-20 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 hover:shadow-md hover:border-slate-300 transition"
                title={partner.name}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition duration-300"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Trust Spotlight (Preview Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-2">
              <Building2 className="w-3.5 h-3.5" /> Nationwide Footprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] tracking-tight">
              Trusted By 167+ Leading Institutions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore our extensive client base across commercial banking, corporate giants, government ministries, and universities.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/bank-list"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
            >
              Banks ({clientData.bank.length})
            </Link>
            <Link
              href="/corporate-list"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
            >
              Corporates ({clientData.corporate.length})
            </Link>
            <Link
              href="/government-list"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
            >
              Government ({clientData.government.length})
            </Link>
            <Link
              href="/university-college"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
            >
              Universities ({clientData.university.length})
            </Link>
          </div>
        </div>

        {/* Live Filterable Grid */}
        <ClientLogoGrid initialCategory="all" showFilters={true} />
      </section>

      {/* 8. Service & Support Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0b192c] to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600/30 text-red-400 border border-red-500/30">
                <ShieldCheck className="w-4 h-4" /> Official Guarantee & Service Terms
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Comprehensive 1-Year Machine Warranty & Free Servicing
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every photocopier supplied by Jahid Office Equipment includes a 1-year warranty against any mechanical or electrical factory defect. In addition, our field engineers provide <strong>12 to 15 scheduled free preventive maintenance check-ups each year</strong> right at your premises.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">1-Year Warranty</p>
                  <p className="text-slate-400">Covers manufacturing faults & technical component integrity.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">12-15 Free Visits</p>
                  <p className="text-slate-400">Proactive servicing to ensure peak print resolution & zero paper jam.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Outdoor Field Team</p>
                  <p className="text-slate-400">Prompt emergency response dispatched from nearest branch.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 text-center">
              <Headphones className="w-12 h-12 text-red-400 animate-bounce" />
              <div>
                <h4 className="text-base font-bold text-white">Need Technician Support?</h4>
                <p className="text-xs text-slate-300 mt-1">Our hotline operates Saturday to Thursday.</p>
              </div>
              <a
                href="tel:01713093300"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-red-600/30 btn-3d flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> 01713-093300
              </a>
              <Link
                href="/service-support"
                className="text-xs font-semibold text-slate-300 hover:text-white underline"
              >
                Learn More About Service Terms
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Contact / Callback CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-[#0b192c]">Ready to Upgrade Your Office Printing?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Contact our sales headquarters at 107 Motijheel C/A or reach any of our branches in Gulshan, Chittagong, Khulna, and Bogra for official quotations and product trials.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-red-600/30 btn-3d"
            >
              Contact Branch Offices
            </Link>
            <Link
              href="/photo-gallery"
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition border border-slate-300"
            >
              View Photo Gallery
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
