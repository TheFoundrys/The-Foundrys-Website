"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Our Team",
    description: "Meet the visionary founders, industry veterans and research expertise who make The Foundry what it is.",
    image: "/images/our_team_leaders.png",
    href: "/about/team",
    hoverBg: "group-hover:bg-[#DCE7F1]",
  },
  {
    title: "Our Research",
    description: "Rigorous, applied research in Deep Tech, AI, Quantum, and Sustainability that solves real-world industry challenges.",
    image: "/images/research_book_closed.png",
    href: "/blog?category=research",
    hoverBg: "group-hover:bg-[#DCE7F1]",
  },
  {
    title: "Our Alumni",
    description: "A powerful network of creators, technical leaders, and builders who are driving transformative change across the tech landscape.",
    image: "/images/undergrad-indian.png",
    href: "/testimonials",
    hoverBg: "group-hover:bg-[#DCE7F1]",
  },
];

export function OurStory() {
  return (
    <section className="bg-transparent px-6 pt-10 pb-8 text-brand-purple sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl bg-white p-8 sm:p-12 md:p-16 rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-deep-blue md:text-4xl">
            Our Story
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-700">
            The Foundry's is a premium Finishing and Venture School at the innovation hub of the Hyderabad. We were founded to bridge the gap between academic theory and the raw velocity of the deep tech industry. Established by visionary leaders from technology and academia, The Foundry develops global talent who can navigate complex technological and industrial challenges. We emphasize hands-on creation, building real-world products, and establishing strong connections with industry leaders and research institutions to ensure a highly relevant and rigorous curriculum. Our innovative programs forge sovereign innovators and technical leaders with the competence, resilience, and foresight needed to drive meaningful impact across industries worldwide.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-8 pb-10">
          {cards.map((card) => (
            <div key={card.title} className="group relative flex flex-col w-full h-full">
              {/* Image Container */}
              <div className="relative w-full h-[280px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlapping Mint Overlay Box */}
              <div className={`relative z-10 w-[85%] bg-[#F7F7F4] border border-slate-200/80 p-6 -mt-16 ml-0 flex flex-col justify-between flex-1 min-h-[190px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${card.hoverBg}`}>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-purple mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-800 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
                
                <Link
                  href={card.href}
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
