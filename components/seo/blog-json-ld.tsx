import Script from "next/script";
import { urlForImage } from "@/sanity/image";

export function BlogJsonLd({ post }: { post: any }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.mainImage ? [urlForImage(post.mainImage).url()] : [],
        "datePublished": post.publishedAt,
        "dateModified": post._updatedAt || post.publishedAt,
        "author": {
            "@type": "Person",
            "name": post.author?.name || "The Foundry's"
        },
        "publisher": {
            "@type": "Organization",
            "name": "The Foundry's",
            "logo": {
                "@type": "ImageObject",
                "url": "https://thefoundrys.com/logo.png"
            }
        },
        "description": post.excerpt || `Read ${post.title} on The Foundry's blog.`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://thefoundrys.com/blog/${post.slug.current}`
        }
    };

    return (
        <Script
            id={`json-ld-article-${post._id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
