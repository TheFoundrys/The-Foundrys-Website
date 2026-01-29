"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const allFaqs = [
  {
    category: "Academics & Degree",
    items: [
      {
        q: "Do you provide a recognized Degree?",
        a: "Yes. We offer a **3-Year Degree** program. Unlike a traditional 4-year B.Tech, our model is accelerated and focused purely on high-impact skills. You graduate one year early with a portfolio of real-world products."
      },
      {
        q: "Is this better than a B.Tech?",
        a: "It depends on your goal. If you want a government stamp and theory, B.Tech is fine. If you want to **build products**, launch startups, and master AI/Cybersecurity, The Foundry's is the superior choice. We replace exams with product shipping."
      },
      {
        q: "Who are the faculty?",
        a: "We don't have 'professors'. We have 'Forgers'. Our mentors are CTOs, Founders, and Senior Engineers from the industry who teach what is actually used in the market today."
      }
    ]
  },
  {
    category: "Admissions & Eligibility",
    items: [
      {
        q: "Can I join after Intermediate / Class 12?",
        a: "Yes. This program is designed specifically for students finishing Class 12 (MPC/MEC) who are passionate about technology."
      },
      {
        q: "Do I need an EAMCET/JEE Rank?",
        a: "No. We believe standardized tests measure memory, not intelligence. Our admission is based on your passion, logic, and potential to build."
      }
    ]
  },
  {
    category: "Career & Placements",
    items: [
      {
        q: "Do you guarantee a job placement?",
        a: "We guarantee **competence**, not a job offer. In the age of AI, a 'placement guarantee' is often a marketing gimmick. We forge you to be so technically dominant and future-ready that jobs chase you, not the other way around."
      },
      {
        q: "What is the average package?",
        a: "Since our students graduate with 3 years of building experience, they enter the market as 'Lateral Hires' (Experienced Professionals) rather than freshers, often commanding significantly higher starting packages."
      }
    ]
  }
];

export default function FAQPage() {
  const flatFaqs = allFaqs.flatMap(c => c.items.map(i => ({ question: i.q, answer: i.a })));

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <FaqJsonLd questions={flatFaqs} />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-6">
                  <HelpCircle size={16} /> Common Queries
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Everything you need to know about The Foundry's, our philosophy, and your future.
              </p>
           </div>

           <div className="space-y-12">
              {allFaqs.map((section, idx) => (
                <div key={idx}>
                   <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                      {section.category}
                   </h2>
                   <div className="space-y-4">
                      {section.items.map((item, i) => (
                        <FaqItem key={i} question={item.q} answer={item.a} />
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-slate-800 text-lg">{question}</span>
        <span className={`p-1 rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
           {answer}
        </div>
      </motion.div>
    </div>
  )
}
