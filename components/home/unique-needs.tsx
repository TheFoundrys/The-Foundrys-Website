"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const programmes = [
  {
    title: "Young Graduate programs",
    description: "Start your journey in emerging technologies with foundational programs designed for beginners.",
    href: "/programs/entry-level",
    imageSrc: "/images/entrepreneur-indian.png",
  },
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
    <section className="bg-transparent px-6 pt-8 pb-8 text-brand-blue sm:px-10 lg:px-16">
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
          <h2 className="mb-4 font-serif text-3xl font-bold leading-tight text-blue md:text-4xl">
            Our Programmes
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700">
            Education for your unique needs, for today and beyond.
          </p>
          {/* <Link
            href="/programs"
            className="mt-6 inline-flex items-center gap-2 border-b border-brand-purple pb-1 text-sm font-bold text-brand-purple transition-colors hover:text-black"
          >
            Explore All Programmes
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link> */}
        </div>

        <div className="grid grid-cols-1 gap-y-16 gap-x-6 md:grid-cols-2 lg:grid-cols-3 pb-10">
          {programmes.map((programme) => (
            <div key={programme.title} className="group relative flex flex-col w-full h-full">
              {/* Image Container */}
              <div className="relative w-full h-[280px] overflow-hidden bg-slate-100">
                <Image
                  src={programme.imageSrc}
                  alt={programme.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Overlay Box */}
              <div className="relative z-10 w-[85%] bg-[#f8fafc] border border-slate-200/80 p-6 -mt-16 ml-0 flex flex-col justify-between flex-1 min-h-[190px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-[#DCE7F1]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-purple mb-3">
                    {programme.title}
                  </h3>
                  <p className="text-xs text-slate-800 leading-relaxed font-sans">
                    {programme.description}
                  </p>
                </div>

                <Link
                  href={programme.href}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:text-[#0f172a] transition-colors group/link"
                >
                  Learn More
                  <ChevronRight
                    size={14}
                    strokeWidth={2.5}
                    className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
