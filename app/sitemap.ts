import { MetadataRoute } from 'next';
import { client } from "@/sanity/client";

// Force dynamic rendering so sitemap is always fresh
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://thefoundrys.com';

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/campus',
        '/apply',
        '/blog',
        '/schools/ai',
        '/schools/blockchain',
        '/schools/cyber',
        '/schools/quantum-computing',
        '/schools/renewable-energy',
        '/schools/venture-building',
        '/schools/strategy',
        '/schools/esg',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Dynamic Blog Routes
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts = await client.fetch(`*[_type == "post"] { 
            "slug": slug.current, 
            _updatedAt,
            publishedAt 
        }`);

        blogRoutes = posts.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post._updatedAt || post.publishedAt),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Sitemap: Failed to fetch posts", error);
    }

    return [...staticRoutes, ...blogRoutes];
}
