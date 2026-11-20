import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Quote, PhoneCall, Mail, Building2, CheckCircle2, Award, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Message From Managing Director | Jahid Office Equipment (JOE)',
  description: 'Official message from the Managing Director of Jahid Office Equipment (JOE). Over 34 years of excellence in Toshiba photocopiers and office automation in Bangladesh.',
};

export default function MessageFromMDPage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
              <Sparkles className="w-3.5 h-3.5" /> Leadership Perspective
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Message From Managing Director
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Committed to uncompromising service, mutual trust, and next-generation Japanese photocopier solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Message Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Executive Profile Card (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-lg text-center space-y-4 card-3d">
              
              <div className="relative w-44 h-44 mx-auto rounded-2xl overflow-hidden border-4 border-red-500/20 shadow-xl bg-slate-50 p-2">
                <Image
                  src="/frontend/images/call_support.png"
                  alt="Managing Director - Jahid Office Equipment"
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Md. Jahidul Islam</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-red-600 mt-0.5">
                  Managing Director
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Jahid Office Equipment (JOE)
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-left text-slate-600">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">01713-093300</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>joe@jahidoffice.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>107 Motijheel C/A, Dhaka</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md btn-3d flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" /> Direct Inquiry
                </Link>
              </div>

            </div>

            {/* Core Values Callout */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-[#10233b] text-white rounded-3xl shadow-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Core Philosophy</span>
              <h4 className="text-base font-bold">100% Customer Satisfaction First</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                "All our customers receive our utmost respect and attention. The sale of a product is simply the beginning of our lifelong service commitment."
              </p>
            </div>
          </div>

          {/* Detailed Message Text (Cols 5-12) */}
          <div className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md space-y-6">
            
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Address</span>
                <h2 className="text-2xl font-black text-[#0b192c]">
                  To Our Valued Clients & Partners
                </h2>
              </div>
            </div>

            {/* Exact Text from Original Site */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong>JAHID OFFICE EQUIPMENT (JOE)</strong> is a very well known name in the Photocopier market in Bangladesh. We have been in the market from the very early of 1990 and recently celebrated its glorious years of success. With the passage of time we have grown up to become one of the largest sellers of Photocopier & Fax machines in Bangladesh.
              </p>

              <p>
                Our aim is to always try to promote a long term relationship with all our clients through better service. All our customers receive our utmost respect and attention. We are extending after-sale service to our innumerable clients from the very inception of the company by our well trained & experienced engineers. Besides serving our existing customers, we have extensive effort to intensify our range of sales & services across the country.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-600" /> Solid Footing With Global Principals
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our company has put a solid footing with the Principals of <strong>TOSHIBA, Brothers, Quality, Unibind, Biosystem</strong> among others by virtue of importing Photocopier, Fax & other office equipment in large scale for marketing in Bangladesh over the decades.
                </p>
              </div>

              <p>
                Our dedication is to earn satisfaction of the customers and our commitment to serve quality products and provide better service. Customer’s satisfaction is always our utmost priority. Our Sales & Marketing Department is also running with a smart & experienced team.
              </p>

              <p>
                Our office is well decorated and we have a well equipped workshop from where we used to provide maintenance/overhauling services, if necessary, to our valued clients. Our main objective is to become a leading business house and solutions provider in the country through offering the highest level customer service & support.
              </p>

              <p className="italic text-slate-600 pt-2">
                We would like to express our deepest gratitude to all our banking partners, corporate organizations, government institutions, and university leaders for their steadfast trust in Jahid Office Equipment.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg font-bold text-slate-900 italic">Md. Jahidul Islam</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Managing Director, Jahid Office Equipment
                </p>
              </div>

              <Link
                href="/service-support"
                className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-4 py-2 rounded-xl transition"
              >
                <span>Explore Our Service Guarantees</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
