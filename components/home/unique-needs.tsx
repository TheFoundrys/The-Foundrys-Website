"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const programmes = [
  {
    title: "Post Graduate Programs",
    description: "Transformative programs for professionals ready to accelerate leadership, innovation, and cross-industry impact.",
    href: "/programs/professional",
    imageSrc: "/images/professional-indian.png",
  },
  {
    title: "Advanced Management Programs",
    description: "Specialized learning for professionals to lead with expertise and drive meaningful organizational change.",
    href: "/apply-personalized",
    imageSrc: "/images/executive-indian.png",
  },
  {
    title: "Fellowship & Executive Programs",
    description: "Research-led learning that blends theory, applied practice, and real-world problem solving.",
    href: "/programs/fellow-executive",
    imageSrc: "/images/fellow-programmes.png",
  },
  {
    title: "Young Graduate programs",
    description: "Start your journey in emerging technologies with foundational programs designed for beginners.",
    href: "/programs/entry-level",
    imageSrc: "/images/entrepreneur-indian.png",
  },
  {
    title: "Centre of Excellence",
    description: "Explore our Centre of Excellence, where we conduct cutting-edge research and development in emerging technologies.",
    href: "/programs/centre-of-excellence",
    imageSrc: "/images/schools-hero-bg.jpg",
  },
  {
    title: "Explore Programs",
    description: "Unlock the full spectrum of our physical campus programs, or check out our flexible, cohort-driven online offerings.",
    href: "/programs",
    imageSrc: "/images/k12-indian.png",
  },
];

export function UniqueNeeds() {
  return (
    <section className="bg-[#ffffff] px-6 py-16 text-[#031a57] sm:px-10 lg:px-16">
      <style dangerouslySetInnerHTML={{
        __html: `
        .explore-more-text-white {
          color: #ffffff !important;
        }
        .explore-more-text-blue {
          color: #dbeafe !important;
        }
        .explore-more-text-gold {
          color: #f2c230 !important;
        }
        .explore-more-text-gold:hover {
          color: #ffffff !important;
        }
      `}} />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
            Our Programmes
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700">
            Education for your unique needs, for today and beyond.
          </p>
          {/* <Link
            href="/programs"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#002f86] pb-1 text-sm font-bold text-[#002f86] transition-colors hover:text-black"
          >
            Explore All Programmes
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link> */}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className="flex min-h-[430px] flex-col justify-between bg-[#f3f8fb] transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid h-[250px] grid-rows-[88px_96px_auto] p-8 pb-6">
                <h3 className="max-w-[13rem] font-serif text-xl font-bold leading-snug text-[#002f86]">
                  {programme.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-800">
                  {programme.description}
                </p>
                <Link
                  href={programme.href}
                  className="inline-flex items-center gap-2 justify-self-end text-sm font-bold text-[#002f86] transition-colors hover:text-black"
                >
                  Learn More
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
              </div>

              <div className="relative mx-8 mb-8 h-48 overflow-hidden border-t-2 border-[#f2c230] bg-slate-200">
                <Image
                  src={programme.imageSrc}
                  alt={programme.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
