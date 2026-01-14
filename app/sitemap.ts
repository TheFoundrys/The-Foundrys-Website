import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thefoundrys.com';

    // Core pages
    const routes = [
        '',
        '/campus',
        '/apply',
        '/resources', // Assuming this exists or will exist
        '/programs/ai',
        '/programs/blockchain',
        '/programs/cyber',
        '/programs/quantum-computing',
        '/programs/renewable-energy',
        '/programs/venture-building',
        '/programs/strategy',
        '/programs/esg',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Add specific high-priority pages if needed

    return routes;
}
