import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example of standard disallow
        },
        sitemap: 'https://thefoundrys.com/sitemap.xml',
    };
}
