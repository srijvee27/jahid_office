import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '@/data/siteData';
import ProductDetailView from '@/components/ProductDetailView';

interface Props {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, slug } = await params;
  const product = products.find((p) => p.id === id || p.slug === slug);

  if (!product) {
    return {
      title: 'Product Details | Jahid Office Equipment',
    };
  }

  return {
    title: `${product.name} | Toshiba Photocopier Bangladesh`,
    description: `Official specifications, price quotation, and 1-year warranty for ${product.name}. Authorized Japanese importer Jahid Office Equipment (JOE).`,
    openGraph: {
      title: `${product.name} | Toshiba Photocopier Bangladesh`,
      description: `Official technical specifications and sales support for ${product.name}.`,
      images: [
        {
          url: product.thumbnail || product.images[0] || '/frontend/images/logo.jpg',
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id, slug } = await params;
  const product = products.find((p) => p.id === id || p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  // JSON-LD Product Schema for Google Search & AI Engines (GEO)
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://www.jahidoffice.com${product.thumbnail || product.images[0]}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Toshiba',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BDT',
      price: '0.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Jahid Office Equipment',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
