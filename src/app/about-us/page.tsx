import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Target, 
  Compass, 
  Wrench, 
  Users, 
  PhoneCall, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Jahid Office Equipment (JOE) - Established 1990',
  description: 'Learn about Jahid Office Equipment (JOE), established in 1990. Sole distributor of Unibind Brand Steel Binding Machine (Belgium) and authorized importer of Toshiba Photocopiers in Bangladesh.',
};

export default function AboutUsPage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
              <Sparkles className="w-3.5 h-3.5" /> Company Profile & Heritage
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About Jahid Office Equipment
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Specializing in sales & service of Toshiba Photocopiers, Digital Fax & Office Equipment in Bangladesh since 1990.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Detailed Narrative (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-8 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/90 shadow-md">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Established 1990</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] tracking-tight mt-1">
                Welcome to Jahid Office Equipment (JOE)
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong>JAHID OFFICE EQUIPMENT (JOE)</strong> is established in 1990 and specializes in sales & service of Photocopier, Fax & other office equipment in Bangladesh since its inception. JOE has over 34 years of experience in the Copier & Fax market and has built a solid reputation among the customers for providing ongoing quality in the services & support. The company believes in a long term mutually beneficial relationship through better service.
              </p>
              
              <div className="p-5 bg-red-50/80 rounded-2xl border border-red-200/80 space-y-2">
                <h3 className="text-sm font-bold text-red-800 flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-600" /> Sole Distributor of Unibind Brand Steel Binding (Belgium)
                </h3>
                <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                  As a sole distributor in Bangladesh, the company has first introduced the product <strong>UNIBIND Brand Steel Binding Machine</strong>, made by Unibind Manufacturing Co. Belgium.
                </p>
              </div>

              <p>
                The Company provides service to the customers through a team of skilled engineers. The engineers ensure uncompromised customer service both at pre-sales and post-sales period. Our distinguished clients include Govt, Semi-Govt, Autonomous-Bodies, Semi-Autonomous Bodies, Corporate Bodies, Financial Institutions, Foreign Missions, Private owned enterprises etc.
              </p>

              <p>
                The team of skilled sales representatives can assist the clients in finding the best machine, equipment and maintenance plans to fit their satisfaction needs. As we often deal in large volumes, we are able to provide the clients with the best rates and large cost savings for their business by providing them with wholesale prices that cannot be beat.
              </p>
            </div>

            {/* Vision and Mission Cards (3D Glass) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b192c] text-white shadow-lg space-y-3 card-3d border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To become a leading company in the country as a seller of Photocopier, Fax & other office equipment and service provider.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg space-y-3 card-3d border border-red-500/40">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Our Mission</h3>
                <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                  To promote 100% customer satisfaction through better service, authentic Japanese machinery, and rapid on-site maintenance.
                </p>
              </div>

            </div>

          </div>

          {/* Right Sidebar Key Highlights (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Fact Sheet */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-base font-bold text-[#0b192c] border-b border-slate-100 pb-2">
                Fast Facts at a Glance
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Company Name:</span>
                  <span className="font-bold text-slate-900 text-right">Jahid Office Equipment (JOE)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Established:</span>
                  <span className="font-bold text-slate-900">1990 (34+ Years)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Specialization:</span>
                  <span className="font-bold text-slate-900 text-right">Toshiba Copiers & Binding</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Sole Distributor:</span>
                  <span className="font-bold text-red-600 text-right">Unibind Brand (Belgium)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Warranty Coverage:</span>
                  <span className="font-bold text-emerald-600">1 Year Free Warranty</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Free Servicing:</span>
                  <span className="font-bold text-slate-900">12 - 15 Annual Visits</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 font-medium">Headquarters:</span>
                  <span className="font-bold text-slate-900 text-right">107 Motijheel C/A, Dhaka</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md btn-3d flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" /> Contact Sales Team
                </Link>
              </div>
            </div>

            {/* Nationwide Engineering Team */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-[#10233b] text-white rounded-3xl shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-red-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold">Skilled Engineering Team</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our factory-trained technicians provide rapid on-site outdoor maintenance and overhauling support directly to your office.
              </p>
              <Link
                href="/service-support"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 pt-1"
              >
                <span>Read Service & Support Terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
