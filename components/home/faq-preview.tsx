"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plus, Minus, MessageCircleQuestion } from "lucide-react";

const hotFaqs = [
  {
    q: "Do you provide a recognized Degree?",
    a: "Yes. We offer a **3-Year Degree** program. You graduate one year early compared to B.Tech, with a portfolio of products."
  },
  {
    q: "Is this better than B.Tech?",
    a: "Yes. B.Tech is 4 years of theory. We are 3 years of building. It's the difference between studying swimming and actually swimming."
  },
  {
    q: "Do you guarantee a job placement?",
    a: "We guarantee **competence**, not a job. We make you technically strong and future-ready. By the time you graduate, your portfolio and skills will speak louder than any placement cell."
  }
];

export function FaqPreview() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
         
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">
                    <MessageCircleQuestion size={16} /> FAQs
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Questions Parents Ask
                </h2>
            </div>
            
            <Link href="/faq" className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md">
                View all FAQs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>

         <div className="space-y-4">
            {hotFaqs.map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
         </div>
         
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
      >
        <span className="font-bold text-slate-800 text-lg md:text-xl">{question}</span>
        <span className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 md:p-8 pt-0 text-slate-600 text-lg leading-relaxed max-w-3xl">
           {answer}
        </div>
      </motion.div>
    </div>
  )
}
