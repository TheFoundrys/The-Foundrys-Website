"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type TabKey = "k12" | "undergraduates" | "entrepreneurship" | "professional" | "educators" | "executive";

interface TabContent {
  id: TabKey;
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  href: string;
  imageSrc: string; // Using placeholders for now
}

const content: Record<TabKey, TabContent> = {
  k12: {
    id: "k12",
    label: "K-12",
    heading: "Start building the future, not just learning about it",
    description: "Traditional schools wait until college to introduce real engineering. We start now. Equip young minds with computational thinking, AI literacy, and deep tech exposure to turn them from consumers into creators.",
    buttonText: "Explore solutions for K-12",
    href: "/schools",
    imageSrc: "/images/k12-indian.png",
  },
  undergraduates: {
    id: "undergraduates",
    label: "Undergraduates",
    heading: "Don't wait for graduation to make an impact",
    description: "Most degrees are theory. Ours are practice. Build your startup portfolio while you study, mastering the deep tech stack AI, Quantum, and Sustainability that traditional curriculums ignore.",
    buttonText: "Explore Undergraduate Tracks",
    href: "/programs/professional",
    imageSrc: "/images/undergrad-indian.png",
  },
  entrepreneurship: {
    id: "entrepreneurship",
    label: "Entrepreneurs",
    heading: "Forging founders, not just employees",
    description: "The world doesn't need more job seekers. It needs job creators. Our Venture Building track is a relentless foundry where you test, iterate, and launch scalable deep tech startups with real capital support.",
    buttonText: "Enter the Venture Foundry",
    href: "/schools/venture-building",
    imageSrc: "/images/entrepreneur-indian.png",
  },
  educators: {
    id: "educators",
    label: "Educators",
    heading: "Empower your teaching with the tools of tomorrow",
    description: "Don't let your curriculum fall behind. We help faculty master AI, integrate deep tech into the classroom, and prepare the next generation of innovators.",
    buttonText: "Explore Educator Programs",
    href: "/programs/educators",
    imageSrc: "/images/educator-indian-v2.png",
  },
  professional: {
    id: "professional",
    label: " IT Professional",
    heading: "Turn your experience into exponential value",
    description: "Don't just watch the deep tech revolution happen. Master the tools that are reshaping industries Quantum, AI, and Blockchain and position yourself at the forefront of the new economy.",
    buttonText: "Explore Professional Tracks",
    href: "/programs/professional",
    imageSrc: "/images/professional-indian.png",
  },
  // educators: {
  //   id: "educators",
  //   label: "Educators",
  //   heading: "Empower your teaching with the tools of tomorrow",
  //   description: "Don't let your curriculum fall behind. We help faculty master AI, integrate deep tech into the classroom, and prepare the next generation of innovators.",
  //   buttonText: "Explore Educator Programs",
  //   href: "/programs/educators",
  //   imageSrc: "/images/educator-indian-v2.png",
  // },
  executive: {
    id: "executive",
    label: "Executive Leadership",
    heading: "Lead the disruption, don't just react to it",
    description: "In a world driven by AI and Quantum, traditional strategies fail. We equip executives with the technical fluency and foresight needed to navigate uncertainty and drive exponential growth.",
    buttonText: "Explore Executive Programs",
    href: "/programs/executive",
    imageSrc: "/images/executive-indian-portrait-male.png",
  },
};

export function UniqueNeeds() {
  const [activeTab, setActiveTab] = useState<TabKey>("k12");
  
  // Safety check for HMR or invalid state
  const activeContent = content[activeTab] || content["k12"];

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12">
            Education for your unique needs, for today and beyond
          </h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-slate-200">
            {(Object.values(content) as TabContent[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 text-lg font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-lg">
                 {/* Using next/image with fill for responsive behavior */}
                 {activeContent.imageSrc && (
                    <Image 
                        src={activeContent.imageSrc} 
                        alt={activeContent.heading}
                        fill
                        className="object-cover"
                        priority
                    />
                 )}
              </div>

              {/* Text Side */}
              <div className="flex flex-col items-start space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                  {activeContent.heading}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {activeContent.description}
                </p>
                <Link 
                  href={activeContent.href}
                  className="group flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors mt-4"
                >
                  {activeContent.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
