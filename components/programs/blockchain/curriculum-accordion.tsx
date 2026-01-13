"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { blockchainCurriculum } from "@/data/blockchain-curriculum";

export function BlockchainCurriculumAccordion() {
  const [openYear, setOpenYear] = useState<string | null>("Year 1");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            Curriculum
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From cryptographic primitives to scaling global financial infrastructure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {blockchainCurriculum.map((year, index) => {
            const isOpen = openYear === year.year;
            return (
              <div 
                key={year.year}
                className={`rounded-3xl border transition-all duration-300 ${isOpen ? "border-purple-200 bg-purple-50/30 shadow-lg" : "border-slate-200 bg-white hover:border-purple-200"}`}
              >
                <button
                  onClick={() => setOpenYear(isOpen ? null : year.year)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-2">{year.year}</div>
                    <h3 className="text-2xl font-bold text-slate-900">{year.title}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-purple-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-slate-600 mb-8 text-lg">{year.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {year.subjects.map((subjectGroup, i) => (
                             <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                <ul className="space-y-2">
                                    {subjectGroup.map((subject, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                             </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
