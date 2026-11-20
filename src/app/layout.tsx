import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { siteConfig } from '@/data/siteData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jahidoffice.com'),
  title: {
    default: 'Jahid Office Equipment | Authorized Toshiba Photocopier Importer Since 1990',
    template: '%s | Jahid Office Equipment',
  },
  description: 'Jahid Office Equipment (JOE) is established in 1990. Leading importer and nationwide service provider of Toshiba Japan Photocopiers, Unibind Steel Binding machines, and digital office equipment in Bangladesh.',
  keywords: [
    'Jahid Office Equipment',
    'JOE',
    'Toshiba Photocopier Bangladesh',
    'Toshiba e-Studio 4508A price Bangladesh',
    'Toshiba e-Studio 3008A',
    'Toshiba e-Studio 2508A',
    'Toshiba e-Studio 5008A',
    'Toshiba e-Studio 2809A',
    'Toshiba e-Studio 2309A',
    'Toshiba e-Studio 2303A',
    'Unibind Steel Binding Machine Bangladesh',
    'Photocopier servicing Dhaka',
    'Motijheel office equipment',
    'Toshiba photocopier authorized distributor',
  ],
  authors: [{ name: 'Jahid Office Equipment', url: 'https://www.jahidoffice.com' }],
  creator: 'Jahid Office Equipment',
  publisher: 'Jahid Office Equipment',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jahidoffice.com',
    siteName: 'Jahid Office Equipment',
    title: 'Jahid Office Equipment | Authorized Toshiba Photocopier Importer Since 1990',
    description: 'Leading importer & service provider of Toshiba Photocopiers and Unibind Steel Binding Machines in Bangladesh.',
    images: [
      {
        url: '/frontend/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Jahid Office Equipment Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jahid Office Equipment - Toshiba Importer Since 1990',
    description: 'Premier sales and servicing of Toshiba Photocopiers in Bangladesh.',
    images: ['/frontend/images/logo.jpg'],
  },
  icons: {
    icon: '/frontend/images/logo.jpg',
    apple: '/frontend/images/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich GEO & SEO JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.jahidoffice.com/#organization',
        name: 'Jahid Office Equipment',
        alternateName: 'JOE',
        url: 'https://www.jahidoffice.com',
        logo: 'https://www.jahidoffice.com/frontend/images/logo.jpg',
        description: 'Authorized importer and service provider of Toshiba Photocopiers & Unibind binding machines in Bangladesh.',
        foundingDate: '1990',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+8801713093300',
            contactType: 'customer service',
            areaServed: 'BD',
            availableLanguage: ['en', 'bn'],
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.jahidoffice.com/#localbusiness',
        name: 'Jahid Office Equipment (Headquarters)',
        image: 'https://www.jahidoffice.com/frontend/images/logo.jpg',
        telephone: '+8801713093300',
        email: 'info@jahidoffice.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '107, Motijheel C/A, Khan Mansion (3rd Floor)',
          addressLocality: 'Dhaka',
          postalCode: '1000',
          addressCountry: 'BD',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.7333,
          longitude: 90.4172,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        priceRange: '$$',
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
        <GoogleAnalytics />
        <CartProvider>
          <Suspense fallback={<div className="h-16 w-full bg-white" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
