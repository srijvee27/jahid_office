'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ShoppingBag, 
  Headphones, 
  Printer, 
  Building2, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about-us',
      dropdown: [
        { name: 'Company Profile', href: '/about-us', desc: 'Over 34+ years of excellence in Bangladesh' },
        { name: 'Message From MD', href: '/message-from', desc: 'Words from our Managing Director' },
      ],
    },
    {
      name: 'Products',
      href: '/model/1/Photocopy',
      dropdown: [
        { name: 'Photocopier (Toshiba e-Studio)', href: '/model/1/Photocopy', badge: '7 Models' },
        { name: 'Digital Duplicator', href: '/model/2/Digital-Duplicator' },
        { name: 'Digital Fax Machine', href: '/model/3/Fax' },
        { name: 'Steel Binding Machine (Unibind)', href: '/model/4/Steel-Binding-Machine', badge: 'Sole Importer' },
        { name: 'Paper Shredder', href: '/model/5/Paper-Shredder' },
        { name: 'Multimedia Projector', href: '/model/6/Multimedia-Projector' },
      ],
    },
    {
      name: 'Client List',
      href: '/bank-list',
      dropdown: [
        { name: 'Bank List', href: '/bank-list', count: '36+ Banks' },
        { name: 'Corporate List', href: '/corporate-list', count: '60+ Corporates' },
        { name: 'Government List', href: '/government-list', count: '32+ Ministries' },
        { name: 'University & College', href: '/university-college', count: '39+ Campuses' },
      ],
    },
    { name: 'Service & Support', href: '/service-support' },
    { name: 'Photo Gallery', href: '/photo-gallery' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Hotline Bar */}
      <div className="bg-[#0b192c] text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>Sat - Thu: 9:00 AM - 6:00 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>107 Motijheel C/A, Dhaka-1000</span>
            </span>
            <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
              Authorized Toshiba Importer Since 1990
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a
              href="tel:01713093300"
              className="flex items-center gap-1.5 text-slate-200 hover:text-red-400 transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>01713-093300</span>
            </a>
            <a
              href="mailto:info@jahidoffice.com"
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-red-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>info@jahidoffice.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Solid Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white border-b border-slate-200 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-1 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/frontend/images/logo.jpg"
                alt="Jahid Office Equipment Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-base sm:text-lg xl:text-xl font-extrabold tracking-tight text-[#0b192c] group-hover:text-red-600 transition-colors whitespace-nowrap">
                JAHID OFFICE <span className="text-red-600">EQUIPMENT</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-0.5 whitespace-nowrap">
                Sole Distributor & Importer Since 1990
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.dropdown && link.dropdown.some((d) => pathname === d.href));
              
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group shrink-0"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'text-red-600 bg-red-50'
                          : 'text-slate-700 hover:text-red-600 hover:bg-slate-100/80'
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-80 sm:w-[340px] pt-2 hidden group-hover:block transition-all z-50">
                      <div className="p-2.5 bg-white rounded-2xl shadow-2xl border border-slate-200/90 space-y-1">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`group/item block p-2.5 rounded-xl transition ${
                              pathname === subItem.href
                                ? 'bg-red-50 text-red-600 font-bold'
                                : 'hover:bg-slate-100/80 text-slate-700 hover:text-slate-900'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-xs font-semibold whitespace-nowrap text-slate-800 group-hover/item:text-red-600 transition">
                                {subItem.name}
                              </span>
                              {'badge' in subItem && (
                                <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-md font-bold whitespace-nowrap shrink-0">
                                  {subItem.badge}
                                </span>
                              )}
                              {'count' in subItem && (
                                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium whitespace-nowrap shrink-0">
                                  {subItem.count}
                                </span>
                              )}
                            </div>
                            {'desc' in subItem && (
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{subItem.desc}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-red-600 bg-red-50'
                      : 'text-slate-700 hover:text-red-600 hover:bg-slate-100/80'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Cart / Quotation Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition border border-slate-200 shadow-sm whitespace-nowrap shrink-0"
              title="View Quotation Cart"
            >
              <ShoppingBag className="w-4 h-4 text-red-600 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap font-bold">Quote Cart</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center animate-pulse shrink-0">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Call Button */}
            <a
              href="tel:01713093300"
              className="hidden sm:flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-red-600/25 btn-3d whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Call Sales</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 transition shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white/95 backdrop-blur-xl border-b border-slate-200 space-y-2 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-1">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded-lg mt-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-100"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="tel:01713093300"
                className="w-full py-2.5 px-4 bg-red-600 text-white rounded-xl font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Hotline: 01713-093300
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
