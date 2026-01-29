import type { Metadata } from 'next';
import { client } from "@/sanity/client";
import BlogClient from "./BlogClient";
import { BlogJsonLd } from "@/components/seo/blog-json-ld";
import { notFound } from "next/navigation";

// Force dynamic rendering to ensure fresh content
export const revalidate = 60; // Revalidate every 60 seconds

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    publishedAt,
    mainImage,
    category,
    readTime,
    slug,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..155], "") + "...",
    "author": author->{name, image},
    _updatedAt
}`;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.'
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author?.name || "The Foundry's"],
            images: post.mainImage ? [{ url: `https://cdn.sanity.io/images/${client.config().projectId}/${client.config().dataset}/${post.mainImage.asset._ref}` }] : [],
        },
        alternates: {
            canonical: `https://thefoundrys.com/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        return notFound();
    }

    return (
        <>
            <BlogJsonLd post={post} />
            <BlogClient post={post} />
        </>
    );
}
