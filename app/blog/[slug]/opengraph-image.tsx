import { GenerateOgImage, size, contentType } from '@/lib/og-generator';
import { client } from "@/sanity/client";

export { size, contentType };
export const alt = 'The Foundry\'s Blog Post';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch data from Sanity
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    category,
    "authorName": author->name
  }`, { slug });

  // Fallback Data
  const title = post?.title || "The Foundry's";
  const category = post?.category || "Deep Tech Education";
  const author = post?.authorName || "The Foundry's Team";

  return GenerateOgImage({
      title,
      category,
      author
  });
}
