import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://supabase-blog-tau.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: .5,
    },
    {
      url: 'https://supabase-blog-tau.vercel.app/blog',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://supabase-blog-tau.vercel.app/blog/new',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://supabase-blog-tau.vercel.app/about',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://supabase-blog-tau.vercel.app/account',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}