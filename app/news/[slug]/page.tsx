import NewsClient from "./NewsClient";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { slug } = await params;

    // Valid slugs for now
    const validSlugs = ["the-future-of-deep-tech", "thefoundrys-partnered-with-csi", "thefoundrys-partnered-with-keshava-college", "thefoundrys-certified-by-startup-india"];

    if (!validSlugs.includes(slug)) {
        return notFound();
    }

    return <NewsClient slug={slug} />;
}
