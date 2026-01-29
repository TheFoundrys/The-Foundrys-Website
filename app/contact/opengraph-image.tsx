import { GenerateOgImage } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const revalidate = 60;

export default async function Image() {
  return GenerateOgImage({
    title: "Contact Us",
    category: "Get in Touch",
    slug: "contact",
  });
}
