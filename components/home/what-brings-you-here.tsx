"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

// Option lists
const ROLES = [
  "Prospective Student",
  "Working Professional",
  "Parent",
  "Partner / Recruiter",
];

const GOALS = [
  "Programmes",
  "Venture Building / Incubation",
  "Research Collaboration",
  "Admissions & Campus Tour",
];

// Dynamic results based on role & goal
function getRelatedResults(role: string, goal: string) {
  if (goal === "Programmes") {
    if (role === "Working Professional") {
      return [
        { label: "Fellow Executive Suite", href: "/programs/fellow-executive" },
        { label: "Post Graduate Programs", href: "/programs/professional" },
        { label: "Explore all Programmes", href: "/programs" },
      ];
    }
    return [
      { label: "Compare Programmes", href: "/programs" },
      { label: "Programme Finder", href: "/programs" },
      { label: "Explore all Programmes", href: "/programs" },
    ];
  }

  if (goal === "Venture Building / Incubation") {
    return [
      { label: "Venture Building Ecosystem", href: "/venture-building" },
      { label: "Launchpad / Foundry Studio", href: "/studio" },
      { label: "Partner with Us", href: "/contact" },
    ];
  }

  if (goal === "Research Collaboration") {
    return [
      { label: "Our Research & Publications", href: "/blog?category=research" },
      { label: "Explore CoE Labs", href: "/programs/centre-of-excellence" },
      { label: "Partner Engagement", href: "/contact" },
    ];
  }

  // Admissions & Campus Tour
  return [
    { label: "Schedule Campus Visit", href: "/contact" },
    { label: "Admissions Process", href: "/contact" },
    { label: "Our Story & Team", href: "/about/team" },
  ];
}

export function WhatBringsYouHere() {
  const [role, setRole] = useState(ROLES[0]);
  const [goal, setGoal] = useState(GOALS[0]);

  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [isGoalOpen, setIsGoalOpen] = useState(false);

  const roleRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (roleRef.current && !roleRef.current.contains(event.target as Node)) {
        setIsRoleOpen(false);
      }
      if (goalRef.current && !goalRef.current.contains(event.target as Node)) {
        setIsGoalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = getRelatedResults(role, goal);

  return (
    <div id="brings-you-here-container" className="w-full bg-transparent select-none pb-12">
      {/* Styles block with ID specificity to bypass global overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        #brings-you-here-container .finder-bg-purple {
          background-color: #2A0081 !important;
        }
        #brings-you-here-container .purple-panel-text,
        #brings-you-here-container .purple-panel-text h2,
        #brings-you-here-container .purple-panel-text button,
        #brings-you-here-container .purple-panel-text span,
        #brings-you-here-container .purple-panel-text svg {
          color: #ffffff !important;
        }
        #brings-you-here-container .purple-panel-text button {
          border-color: rgba(255, 255, 255, 0.4) !important;
        }
        #brings-you-here-container .purple-panel-text .finder-text-emerald {
          color: #10b981 !important;
        }
        #brings-you-here-container .purple-panel-text a {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        #brings-you-here-container .purple-panel-text a:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        /* Dropdown options reset to slate on white background */
        #brings-you-here-container .purple-panel-text .dropdown-menu-reset,
        #brings-you-here-container .purple-panel-text .dropdown-menu-reset button,
        #brings-you-here-container .purple-panel-text .dropdown-menu-reset span {
          color: #334155 !important;
        }
        #brings-you-here-container .purple-panel-text .dropdown-menu-reset button:hover,
        #brings-you-here-container .purple-panel-text .dropdown-menu-reset button:hover span {
          color: #2A0081 !important;
          background-color: #ECE7E1 !important;
        }
        `
      }} />

      {/* Screen-Wide Side-by-Side Split Container with reduced height */}
      <div className="w-full flex flex-col lg:flex-row overflow-hidden min-h-[460px] lg:min-h-[500px] border-t border-slate-200/80">
        
        {/* Left Panel - Dynamic Selector */}
        <div className="w-full lg:w-[40%] p-8 sm:p-10 lg:p-12 xl:p-16 finder-bg-purple flex flex-col justify-between purple-panel-text">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight mb-6 lg:mb-8">
              What brings you<br />here?
            </h2>

            {/* Selector Rows */}
            <div className="space-y-4 lg:space-y-4 mb-6 lg:mb-8">
              
              {/* Selector 1: Role */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-between relative">
                <span className="text-sm font-medium tracking-wide opacity-70 uppercase sm:w-28 shrink-0">I am a</span>
                
                <div className="relative flex-1" ref={roleRef}>
                  <button
                    onClick={() => {
                      setIsRoleOpen(!isRoleOpen);
                      setIsGoalOpen(false);
                    }}
                    className="w-full flex items-center justify-between text-left pb-2 border-b font-serif text-base sm:text-lg font-semibold hover:border-white transition-all group"
                  >
                    <span>{role}</span>
                    <ChevronDown size={18} className="transition-transform duration-300" style={{ transform: isRoleOpen ? 'rotate(180deg)' : '' }} />
                  </button>

                  {/* Role Dropdown List */}
                  {isRoleOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden dropdown-menu-reset animate-in fade-in slide-in-from-top-2 duration-200">
                      {ROLES.map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setRole(r);
                            setIsRoleOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${r === role ? 'font-bold' : ''}`}
                        >
                          <span>{r}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Selector 2: Goal */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-between relative">
                <span className="text-sm font-medium tracking-wide opacity-70 uppercase sm:w-28 shrink-0">looking for</span>
                
                <div className="relative flex-1" ref={goalRef}>
                  <button
                    onClick={() => {
                      setIsGoalOpen(!isGoalOpen);
                      setIsRoleOpen(false);
                    }}
                    className="w-full flex items-center justify-between text-left pb-2 border-b font-serif text-base sm:text-lg font-semibold hover:border-white transition-all group"
                  >
                    <span>{goal}</span>
                    <ChevronDown size={18} className="transition-transform duration-300" style={{ transform: isGoalOpen ? 'rotate(180deg)' : '' }} />
                  </button>

                  {/* Goal Dropdown List */}
                  {isGoalOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden dropdown-menu-reset animate-in fade-in slide-in-from-top-2 duration-200">
                      {GOALS.map((g) => (
                        <button
                          key={g}
                          onClick={() => {
                            setGoal(g);
                            setIsGoalOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${g === goal ? 'font-bold' : ''}`}
                        >
                          <span>{g}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Dynamic Results Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider finder-text-emerald mb-2 font-mono">
              Related results:
            </p>
            <div className="space-y-2">
              {results.map((res) => (
                <Link
                  key={res.label}
                  href={res.href}
                  className="flex items-center justify-between p-2 rounded-xl border transition-all font-semibold text-xs sm:text-sm group"
                >
                  <span>{res.label}</span>
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Split Screen Image stretching fully to edge */}
        <div className="w-full lg:w-[60%] relative min-h-[400px] lg:min-h-auto lg:h-auto">
          <Image
            src="/images/students-walking.jpg"
            alt="Students walking on campus"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
}
