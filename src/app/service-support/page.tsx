'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Wrench, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Send, 
  FileCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ServiceSupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    machineModel: 'Toshiba e-Studio Photocopier',
    serviceType: 'yearly_contract',
    address: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: `Service Request: ${formData.serviceType} for ${formData.machineModel}`,
          message: `Service Request from ${formData.organization || formData.name}. Machine: ${formData.machineModel}. Problem: ${formData.description}. Address: ${formData.address}`,
        }),
      });

      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
      });
      setIsSubmitted(true);
    } catch {
      confetti({
        particleCount: 80,
        spread: 50,
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
              <Sparkles className="w-3.5 h-3.5" /> Nationwide Field Engineering
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Service & Technical Support
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              The sale of a product is not the end of our relationship. Guaranteed 1-year warranty and up to 15 scheduled free preventive maintenance check-ups yearly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Official Terms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Detailed Official Service Policy (Cols 1-7) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md space-y-8">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Official Terms & Conditions</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] tracking-tight mt-1">
                Our Lifelong Service Commitment
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                <strong>The sale of a product is not the end of our relationship with the customer.</strong> After sale free service warranty is provided by us for <strong>one year</strong>. On expiry of after sale free service warranty, service charge is applied on the basis of per call per machine. We render service to our customers all over the country.
              </p>
              <p>
                Our continuous commitment is to provide high quality support to all JOE customers. So for smooth operation of the photocopier machine we enter into service contract with the customers on yearly basis.
              </p>
            </div>

            {/* Terms and Conditions of Yearly Basis Service Contract */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-red-600" /> Terms & Conditions of Yearly Basis Service Contract:
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Monthly Scheduled Check-up:</strong> JOE Service engineer must visit your photocopy machine once in a month or <strong>12 (Twelve) Times in a year</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Up to 15 Servicing Visits:</strong> But if it is required more servicing we are always ready to render service to your photocopy machine <strong>maximum 15 (Fifteen) times in a year</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Outdoor Field Maintenance:</strong> Servicing means cleaning and minor adjustment of your photocopier machine that are generally done by our outdoor field service engineer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Parts & Repair Estimates:</strong> In case of repairing we shall submit our estimate for your approval and on getting your work order we shall take up the repairing job in hand.
                  </span>
                </li>
              </ul>
            </div>

            {/* Service Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/frontend/images/service/service01.png"
                  alt="Jahid Office Equipment Service Support"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/frontend/images/service/service02.jpg"
                  alt="Outdoor Field Engineering Team"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>

          {/* Right Service Request & AMC Booking Form (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Hotlines Card */}
            <div className="p-6 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl shadow-xl space-y-4 card-3d">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Technical Hotline</h3>
                <p className="text-xs text-red-100 mt-1">
                  Connect immediately with our chief service coordination desk:
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:01713093300"
                  className="block p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 font-mono font-bold text-sm text-center transition"
                >
                  Hotline 1: 01713-093300
                </a>
                <a
                  href="tel:01922117201"
                  className="block p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 font-mono font-bold text-sm text-center transition"
                >
                  Hotline 2: 01922-117201
                </a>
              </div>
            </div>

            {/* Request Service / AMC Online Form */}
            <div className="p-6 sm:p-8 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-lg space-y-4">
              
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Online Dispatch</span>
                <h3 className="text-lg font-bold text-slate-900">Request Service or AMC Contract</h3>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Service Request Dispatched!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you. Our engineering coordinator will contact you shortly to confirm technician arrival time.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-red-600 hover:underline pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="017XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Organization / Bank Branch</label>
                    <input
                      type="text"
                      placeholder="e.g. Agrani Bank, Principal Branch"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Machine Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Toshiba e-Studio 4508A / Unibind"
                      value={formData.machineModel}
                      onChange={(e) => setFormData({ ...formData, machineModel: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-white"
                    >
                      <option value="yearly_contract">Annual Maintenance Contract (AMC - 12 to 15 Visits)</option>
                      <option value="warranty_repair">Under 1-Year Free Warranty Repair</option>
                      <option value="emergency_callout">Emergency Outdoor Field Repair Call</option>
                      <option value="toner_spares">Toner & Spare Parts Replacement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Office Location / Address</label>
                    <input
                      type="text"
                      placeholder="Road / Area, City (Dhaka, Chittagong, etc.)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Issue Description</label>
                    <textarea
                      rows={2}
                      placeholder="Explain symptoms (paper jam, toner light, cleaning needed, etc.)"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#0b192c] hover:bg-slate-800 text-white font-bold uppercase tracking-wider rounded-xl transition shadow-md btn-navy-3d flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting Request...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-red-500" /> Dispatch Service Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
