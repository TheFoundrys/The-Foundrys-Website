import { MetadataRoute } from 'next';
import { client } from "@/sanity/client";

// Force dynamic rendering so sitemap is always fresh
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://thefoundrys.com';

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/about/team',
        '/about/faculty/dr-srikanth-itapu',
        '/campus',
        '/apply',
        '/blog',
        '/schools',
        '/schools/ai',
        '/schools/blockchain',
        '/schools/cyber',
        '/schools/quantum-computing',
        '/schools/renewable-energy',
        '/schools/venture-building',
        '/schools/certified-innovator',
        '/schools/esg',
        '/programs',
        '/programs/educators',
        '/programs/entry-level',
        '/programs/entry-level/ai',
        '/programs/entry-level/ai/certified-professional-in-ai-foundations',
        '/programs/entry-level/ai/certified-professional-in-ai-foundations-in-telugu',
        '/programs/entry-level/ai/certified-professional-in-prompt-engineering',
        '/programs/executive',
        '/programs/executive/ai-leadership',
        '/programs/executive/delivering-in-age-of-ai',
        '/programs/executive/strategic-impact',
        '/programs/professional',
        '/programs/professional/ai',
        '/programs/entry-level/ai/certified-professional-in-ai-engineering',
        '/programs/professional/ai/certified-professional-in-ai-engineering',
        '/programs/professional/ai/certified-professional-in-ai-engineering-in-telugu',
        '/programs/professional/ai/certified-professional-in-ai-operations',
        '/programs/professional/ai/certified-professional-in-ai-research',
        '/programs/professional/blockchain',
        '/programs/professional/cyber-security',
        '/programs/professional/quantum-computing',
        '/programs/professional/quantum-computing/certified-professional-in-quantum-fundamentals',
        '/programs/global-climate-change',
        '/programs/sustainability-in-the-age-of-ai',
        '/resources',
        '/contact',
        '/faq',
        '/legal',
        '/refundpolicy',
        '/privacy',
        '/terms',
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
