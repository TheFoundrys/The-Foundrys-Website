import { GenerateOgImage, size, contentType } from '@/lib/og-generator';

export { size, contentType };
export const alt = "The Foundry's - School of Deep Tech, Entrepreneurship & Energy";

export default async function Image() {
  return GenerateOgImage({
      title: "School of Deep Tech, Entrepreneurship & Energy",
      category: "The Foundry's",
      author: "Forging Innovators"
  });
}
