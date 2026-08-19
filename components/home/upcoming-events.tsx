"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const EVENTS = [
  {
    title: "Quantum Computing & Emerging Tech",
    description: "From Physics to Possibilities. Join our live podcast with guest Dr. Ram Soorat (Assistant Professor of Physics, Woxsen University) and host Vishwanath Akuthota.",
    month: "Aug",
    day: "22",
    image: "/quantum-computing-podcast.jpg",
    href: "/events"
  },
  {
    title: "Next-Gen AI & LLM Builder Workshop",
    description: "Learn to build, fine-tune, and deploy large language models (LLMs) and custom RAG pipelines. A hands-on, practical session for class 12th/Intermediate MPC students and coding enthusiasts.",
    month: "Sep",
    day: "12",
    image: "/images/classroom_session.png",
    href: "/events"
  },
  {
    title: "Foundry Venture Pitch Day 2026",
    description: "Watch our student-founders pitch their live startups and products to top VC firms, angel investors, and incubators. Connect with recruiters and explore venture opportunities.",
    month: "Oct",
    day: "05",
    image: "/images/exec_classroom_session.png",
    href: "/events"
  }
];

export function UpcomingEvents() {
  return (
    <section className="bg-transparent px-6 py-12 text-brand-purple sm:px-10 lg:px-16" id="upcoming-events">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="mb-2 font-serif text-3xl font-bold leading-tight text-deep-blue md:text-4xl">
            Upcoming Events
          </h2>
          <Link
            href="/events"
            className="inline-flex items-center text-brand-purple hover:text-brand-purple/85 font-bold group"
          >
            <span>Browse All Events</span>
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <Link
              href={event.href}
              key={event.title}
              className="flex flex-col w-full h-full bg-[#f8fafc] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group no-underline cursor-pointer"
            >
              {/* Image Container with overlay Date Tag */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Date Tag Overlay top-left */}
                <div className="absolute top-4 left-4 z-10 bg-[#5ce1e6] text-[#0f172a] px-3.5 py-2 flex flex-col items-center justify-center shadow-md select-none font-mono">
                  <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                    {event.month}
                  </span>
                  <span className="text-lg font-bold leading-none mt-1">
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Text content area */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-5">
                <div className="space-y-4">

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-brand-purple transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-4">
                    {event.description}
                  </p>
                </div>

                {/* Read More Link */}
                <div
                  className="inline-flex items-center text-brand-purple font-bold text-sm"
                >
                  <span>Read More</span>
                  <ChevronRight size={14} className="ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
