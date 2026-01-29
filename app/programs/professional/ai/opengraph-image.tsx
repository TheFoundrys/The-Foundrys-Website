import { GenerateOgImage, size, contentType } from '@/lib/og-generator';

export { size, contentType };
export const alt = "Artificial Intelligence - Professional Certification";

export default async function Image() {
  return GenerateOgImage({
      title: "Artificial Intelligence Engineering",
      category: "Professional Certification",
      author: "The Foundry's"
  });
}
