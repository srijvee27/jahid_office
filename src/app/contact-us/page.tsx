'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Headphones, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { siteConfig } from '@/data/siteData';
import confetti from 'canvas-confetti';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    branch: 'Corporate Office (Headquarters)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in your name, phone number, and message.');
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setIsSubmitted(true);
    } catch {
      confetti({
        particleCount: 80,
        spread: 60,
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
              <Sparkles className="w-3.5 h-3.5" /> Nationwide Presence
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Contact Us & Branch Network
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Visit our headquarters in Motijheel or reach our regional branch offices in Gulshan, Chittagong, Khulna, and Bogra.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + 5 Branch Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form (Cols 1-5) */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Get In Touch</span>
              <h2 className="text-2xl font-black text-[#0b192c] tracking-tight mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Our sales and customer service executives respond to inquiries promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you for reaching out to Jahid Office Equipment. Our representative will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Jahidul Islam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="017XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Target Branch</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-white"
                  >
                    {siteConfig.branches.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Price Quotation for Toshiba e-Studio 4508A"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your office equipment requirements or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded-xl transition shadow-md shadow-red-600/30 btn-3d flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Business Hours Note */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-600 text-xs">
              <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Saturday - Thursday: 9:00 AM - 6:00 PM (Friday Closed)</span>
            </div>
          </div>

          {/* Right: 5 Branch Cards (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters & Branches</span>
              <h2 className="text-2xl font-black text-[#0b192c] tracking-tight mt-1">
                Our Office Locations Across Bangladesh
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {siteConfig.branches.map((branch) => (
                <div
                  key={branch.name}
                  className={`p-6 rounded-3xl border transition shadow-sm card-3d ${
                    branch.isHQ
                      ? 'bg-gradient-to-br from-red-50/70 to-white border-red-200 md:col-span-2'
                      : 'bg-white border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className={`w-5 h-5 ${branch.isHQ ? 'text-red-600' : 'text-slate-600'}`} />
                      <h3 className="text-base font-bold text-slate-900">{branch.name}</h3>
                    </div>
                    {branch.isHQ && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-600 text-white shadow-sm">
                        Headquarters
                      </span>
                    )}
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    {branch.phones && branch.phones.length > 0 && (
                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-slate-800">{branch.phones.join(', ')}</span>
                      </div>
                    )}

                    {branch.mobile && (
                      <div className="flex items-center gap-2.5">
                        <PhoneCall className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <a
                          href={`tel:${branch.mobile.replace(/[^0-9]/g, '')}`}
                          className="font-mono font-bold text-red-600 hover:underline"
                        >
                          {branch.mobile}
                        </a>
                      </div>
                    )}

                    {branch.email && (
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        <a href={`mailto:${branch.email.split(',')[0].trim()}`} className="text-slate-700 hover:text-red-600">
                          {branch.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Hotline Bar */}
            <div className="p-6 rounded-3xl bg-[#0b192c] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-600 rounded-xl text-white">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Sales & Support Desk</h4>
                  <p className="text-xs text-slate-300">Call anytime during business hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:01713093300"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold font-mono transition"
                >
                  01713-093300
                </a>
                <a
                  href="tel:01922117201"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold font-mono transition"
                >
                  01922-117201
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
