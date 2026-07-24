import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const localities = [
    'anna-nagar',
    'velachery',
    't-nagar',
    'adyar',
    'omr',
    'porur',
    'guindy',
    'tambaram',
    'mylapore',
    'besant-nagar',
    'kilpauk',
    'nungambakkam'
  ];

  const localityUrls: MetadataRoute.Sitemap = localities.map((loc) => ({
    url: `https://www.sravaninettingsolutions.com/areas/${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: `https://www.sravaninettingsolutions.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://www.sravaninettingsolutions.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://www.sravaninettingsolutions.com/areas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.sravaninettingsolutions.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...localityUrls,
    ...blogUrls,
  ];
}
