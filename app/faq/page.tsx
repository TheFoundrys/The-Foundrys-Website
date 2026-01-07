"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly is The Foundry?",
    answer: "The Foundry is an alternative to traditional engineering colleges. We are a school for Deep Tech (AI, Cyber, Quantum) and Entrepreneurship. We don't just print degrees; we build companies and careers. Our curriculum is designed for the top 1% of builders who want to skip the fluff and get straight to building the future."
  },
  {
    question: "Do I need a degree to join?",
    answer: "No. We value skills, portfolio, and hunger over paper credentials. Whether you are a college dropout, a 12th-grade pass-out, or a working professional looking to pivot, if you have the drive to build, you belong here."
  },
  {
    question: "Is this program online or offline?",
    answer: "Our core programs are fully offline and residential at our Hitech City campus in Hyderabad. We believe that deep work and serendipitous innovation happen best when high-agency individuals share a physical space."
  },
  {
    question: "How does the admissions process work?",
    answer: "We are currently in a 'Waitlist' phase. You can express your interest via the form. When admissions open, we select candidates based on a challenge/hackathon rather than a standard exam. We look for proof of work, not memorization skills."
  },
  {
    question: "What is the fee structure?",
    answer: "Our fees vary by program and cohort. We offer various financial models, including income-share agreements (ISA) for select high-potential candidates, ensuring that money is never a barrier to talent."
  },
  {
    question: "Can I build a startup while studying?",
    answer: "Absolutely. In fact, it's encouraged. Our 'Venture Building' track is specifically designed for this. You will have access to mentorship, legal support, and potentially pre-seed funding if your idea shows promise."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                    Frequently Asked Questions
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Everything you need to know about The Foundry, our philosophy, and how we are redesigning education.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'} transition-colors`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                    {answer}
                </div>
            </motion.div>
        </motion.div>
    )
}
