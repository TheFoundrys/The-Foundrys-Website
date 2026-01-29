import { GenerateOgImage } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const revalidate = 60;

export default async function Image() {
  return GenerateOgImage({
    title: "School of Renewable Energy",
    category: "School of Energy",
    slug: "schools/renewable-energy",
  });
}
