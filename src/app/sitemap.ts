import { MetadataRoute } from 'next';
import { products, productCategories } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jahidoffice.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/message-from',
    '/service-support',
    '/photo-gallery',
    '/contact-us',
    '/bank-list',
    '/corporate-list',
    '/government-list',
    '/university-college',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: '2026-11-20',
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Product categories
  const categoryRoutes = productCategories.map((cat) => ({
    url: `${baseUrl}/model/${cat.id}/${cat.slug}`,
    lastModified: '2026-11-20',
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Product details
  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/model-details/${prod.id}/${prod.slug}`,
    lastModified: '2026-11-20',
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
