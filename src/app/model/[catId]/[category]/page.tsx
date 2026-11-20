import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products, productCategories } from '@/data/siteData';
import ProductCard3D from '@/components/ProductCard3D';
import { 
  Printer, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  PhoneCall, 
  ShoppingBag, 
  Sparkles,
  ArrowRight,
  Headphones
} from 'lucide-react';

interface Props {
  params: Promise<{
    catId: string;
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { catId: '1', category: 'Photocopy' },
    { catId: '6', category: 'photocopy' },
    { catId: '2', category: 'Digital-Duplicator' },
    { catId: '7', category: 'digital-fax' },
    { catId: '3', category: 'Fax' },
    { catId: '4', category: 'Steel-Binding-Machine' },
    { catId: '8', category: 'steel-binding-machine' },
    { catId: '5', category: 'Paper-Shredder' },
    { catId: '9', category: 'paper-shredder' },
    { catId: '10', category: 'spiral-machine' },
    { catId: '11', category: 'laminating-machine' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category).replace(/-/g, ' ');
  return {
    title: `${decoded.toUpperCase()} | Jahid Office Equipment`,
    description: `Explore ${decoded} products and official specifications from Jahid Office Equipment (JOE). Authorized importer and service provider since 1990.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { catId, category } = await params;
  const decodedCategory = decodeURIComponent(category).toLowerCase();

  // Find category definition
  const cat = productCategories.find(
    (c) =>
      c.id === catId ||
      c.slug.toLowerCase() === decodedCategory ||
      decodedCategory.includes(c.slug.toLowerCase()) ||
      c.slug.toLowerCase().includes(decodedCategory)
  ) || {
    id: catId,
    name: decodeURIComponent(category).replace(/-/g, ' ').toUpperCase(),
    slug: decodedCategory,
    description: 'High-quality office equipment imported and serviced nationwide in Bangladesh.',
    available: decodedCategory.includes('photo'),
    count: decodedCategory.includes('photo') ? products.length : 0,
  };

  const isPhotocopy =
    cat.slug.includes('photo') ||
    decodedCategory.includes('photo') ||
    catId === '1' ||
    catId === '6';

  const categoryProducts = isPhotocopy ? products : [];

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0b192c] via-[#142c4b] to-[#0b192c] text-white rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-red-400">
            <Sparkles className="w-3.5 h-3.5" /> Official Category Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight capitalize">
            {cat.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            {cat.description}
          </p>
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {productCategories.map((c) => {
          const isActive =
            c.id === catId ||
            c.slug === cat.slug ||
            (isPhotocopy && c.slug.includes('photo'));

          return (
            <Link
              key={c.id}
              href={`/model/${c.id}/${c.slug}`}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{c.name}</span>
              {c.count > 0 && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {c.count}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Photocopiers Product Grid */}
      {isPhotocopy ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl font-bold text-[#0b192c]">Toshiba e-Studio Lineup</h2>
              <p className="text-xs text-slate-500">
                Displaying all 7 genuine Toshiba digital multifunctional copiers.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-red-50 text-red-600 rounded-full border border-red-200">
              {products.length} Models Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((p) => (
              <ProductCard3D key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : (
        /* Non-photocopy Category Inquiry / Product Showcase */
        <div className="p-8 sm:p-12 bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-md text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200/80">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">{cat.name}</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {cat.slug.includes('steel-binding')
                ? 'Jahid Office Equipment is the Sole Distributor of UNIBIND Brand Steel Binding Machines (made by Unibind Manufacturing Co. Belgium) in Bangladesh. Contact us for machine demonstration, binding supplies, and official price quotes.'
                : 'We provide premium office solutions and commercial supplies across Bangladesh. Contact our corporate sales team at 107 Motijheel C/A for available models, catalog sheets, and customized bulk orders.'}
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Full 1-Year Free Service Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Nationwide On-site Installation & Staff Training</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Wholesale Bulk Pricing & Guaranteed Original Consumables</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:01713093300"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-red-600/30 btn-3d flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Hotline: 01713-093300
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-[#0b192c] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md btn-navy-3d"
            >
              Request Price Quotation
            </Link>
          </div>
        </div>
      )}

      {/* Need Help Strip */}
      <div className="p-6 bg-slate-100/90 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <Headphones className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-slate-800">
            Unsure which office machine best suits your organization's volume?
          </span>
        </div>
        <Link
          href="/contact-us"
          className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1"
        >
          <span>Consult with our technical engineers</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
