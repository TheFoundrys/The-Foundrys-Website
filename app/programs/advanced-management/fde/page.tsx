"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import {
  Clock,
  Calendar,
  Users,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Code2,
  Zap,
  Rocket,
  Terminal,
  BookOpen,
  ArrowUpRight,
  Briefcase,
  X
} from "lucide-react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export default function FDEProgramPage() {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedModule, setSelectedModule] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    experience: "8 – 12 Years",
    aiUsage: "Using Claude / Copilot for code completion & debugging",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPaymentError(null);
    try {
      // 1. Submit lead details to CRM, Google Sheets, and Admin email
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          occupation: `${formData.company || "Not specified"} (${formData.experience || "N/A"})`,
          experience: formData.experience,
          aiUsage: formData.aiUsage,
          message: `Company: ${formData.company}\nIT Experience: ${formData.experience}\nAI Usage: ${formData.aiUsage}\nTuition: $2,500 USD`,
          program: "Advanced Management Program in Forward Deployed Engineering",
          source: "FDE Reserve Seat Modal"
        })
      });

      // 2. Create Stripe Checkout Session
      const stripeRes = await fetch("/api/payment/stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          experience: formData.experience,
        })
      });

      if (stripeRes.ok) {
        const stripeData = await stripeRes.json();
        if (stripeData.url) {
          window.location.href = stripeData.url;
          return;
        }
      } else {
        const errData = await stripeRes.json().catch(() => ({}));
        const errMsg = errData.error || "Unable to initialize Stripe payment. Please check your Stripe keys.";
        setPaymentError(errMsg);
        setIsSubmitting(false);
        return;
      }
    } catch (err: unknown) {
      console.error("Submission/Payment error:", err);
      const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setPaymentError(errMsg);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const curriculum = [
    {
      num: 1,
      title: "AI Solution Foundations for Builders",
      desc: "Deconstruct enterprise workflows into deterministic vs stochastic components. Understand model topology, foundational models vs domain fine-tuning trade-offs, and calculating real cost-per-inference before writing code.",
      deliverables: ["Cost-per-inference matrix", "Deterministic vs probabilistic workflow audit", "Model topology selection blueprint"]
    },
    {
      num: 2,
      title: "Practical LLM Application Design",
      desc: "Architecting low-latency LLM microservices. Context window token economics, model cascading strategies (cheap models for routing, frontier models for reasoning), and streaming user experience patterns.",
      deliverables: ["Streaming SSE architecture", "Model cascading router service", "Context optimization benchmark"]
    },
    {
      num: 3,
      title: "Prompt Engineering, Workflows & Orchestration",
      desc: "Moving beyond natural language prompts to structured output enforcement (Pydantic / JSON schema). Building state machine orchestration graphs, deterministic routing, and graceful failure fallbacks.",
      deliverables: ["Pydantic validated output pipelines", "Multi-step state graph execution engine", "Fallback recovery handlers"]
    },
    {
      num: 4,
      title: "RAG, Enterprise Knowledge & Data Grounding",
      desc: "Enterprise-grade Retrieval Augmented Generation: chunking heuristics, dense vector embeddings, BM25 sparse hybrid search, cross-encoder re-ranking, and avoiding hallucination in domain-critical data.",
      deliverables: ["Hybrid search RAG pipeline", "Cross-encoder re-ranking implementation", "Domain document ingest engine"]
    },
    {
      num: 5,
      title: "Agents, Automation & Tool Integration",
      desc: "Implementing ReAct loops, deterministic function-calling, and custom API integrations. Managing multi-agent task delegation and embedding human-in-the-loop validation barriers for high-stakes enterprise actions.",
      deliverables: ["Autonomous function-calling agent", "Human-in-the-loop audit gatekeeper", "Multi-agent coordinator system"]
    },
    {
      num: 6,
      title: "Evaluation, Guardrails & Responsible AI",
      desc: "Automated test harnesses for stochastic systems. Building synthetic evaluation datasets, implementing LLM-as-a-judge pipelines, and deploying security guardrails against prompt injection and data leaks.",
      deliverables: ["Synthetic eval benchmark suite", "LLM-as-a-Judge grading harness", "Prompt injection defense perimeter"]
    },
    {
      num: 7,
      title: "Rapid Prototyping & Production Deployment",
      desc: "Containerizing AI pipelines with Docker, deploying self-hosted models using vLLM and Ollama, cloud staging on AWS/Azure, and real-time observability tracking latency, drift, and token consumption.",
      deliverables: ["Dockerized vLLM deployment", "Real-time latency & drift telemetry", "Staging-to-production CI/CD pipeline"]
    },
    {
      num: 8,
      title: "Mini Capstone: Deploy Real Enterprise AI",
      desc: "Build and deploy a complete forward-deployed enterprise AI solution solving a real customer problem. Deliver an architecture document, working production repo, and pitch it during our Demo Day.",
      deliverables: ["Production-ready repository", "System design & ROI whitepaper", "Live demo to enterprise DeepTech panel"]
    }
  ];

  const faqs = [
    {
      q: "Why is the cohort capped strictly with limited seats?",
      a: "Forward Deployed Engineering cannot be taught via massive 200-person webinars. Real systems engineering requires direct code review, architecture red-teaming, and bespoke feedback on your production repository. A small, limited cohort guarantees every single engineer gets individualized guidance from lead practitioners."
    },
    {
      q: "What are the prerequisite skills for this training?",
      a: "Participants must have at least 5+ years of IT / software engineering experience, solid proficiency in Python or modern backend frameworks, and an understanding of APIs, databases, and git workflows. Prior machine learning knowledge is NOT required—we teach applied AI systems engineering from the ground up."
    },
    {
      q: "Can my employer sponsor my tuition?",
      a: "Yes. Over 65% of our candidates utilize corporate L&D or upskilling budgets. Upon request, we provide a structured Corporate Sponsorship Package, official GST/VAT invoices, and a formal training agreement outlining business ROI."
    },
    {
      q: "What will I actually build during the mini capstone?",
      a: "You will architect and deploy an end-to-end forward deployed AI system. Examples include: multi-agent customer incident triage, hybrid search RAG over complex enterprise PDFs with hallucination evaluation, or an autonomous workflow automation system integrated with enterprise APIs."
    },
    {
      q: "What happens if I miss a live session?",
      a: "Every session is recorded in HD and published within 30 minutes to your private cohort portal alongside companion code notebooks, architectural diagrams, and transcripts. You can catch up before your next session."
    }
  ];

  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden bg-[#FAF9F5] text-slate-900">
      <Navbar />

      {/* Top Banner Alert / Ticker */}
      <div className="w-full bg-[#001D4A] text-white/90 text-xs py-2.5 px-4 text-center font-mono border-b border-blue-900/40 mt-16 sm:mt-20">
        <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-blue-300 font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Inaugural Induction Batch #1
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Strictly Limited Seats</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-slate-300">Executive DeepTech Cohort for 5+ Year IT Veterans</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-white to-[#F2EFE9] border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#002f86] leading-[1.1]">
                FDE Training for <br />
                <span className="text-slate-900">Working IT Professionals</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 leading-snug">
                Move beyond AI-assisted coding. <br className="hidden sm:block" />
                <span className="text-blue-900">Learn to build and deploy real AI solutions.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Designed for experienced engineers who want to go from using tools like Claude or Copilot for development support to actually architecting, evaluating, and deploying production-grade AI-powered enterprise solutions.
              </p>

              {/* Quick Specs Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-xl">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] uppercase font-mono font-semibold text-slate-400">Duration</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">2 Months</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">8 Weeks Intensive</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] uppercase font-mono font-semibold text-slate-400">Schedule</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mt-1 font-mono">8:30–9:30 PM EST</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Mon–Fri Virtual</div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] uppercase font-mono font-semibold text-slate-400">Cohort Size</div>
                  <div className="text-base sm:text-lg font-bold text-[#002f86] mt-1 whitespace-nowrap">Limited Seats</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Strictly Capped</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#002f86] hover:bg-[#002366] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all text-base cursor-pointer"
                >
                  Reserve Your Seat for Batch #1
                  <ArrowRight size={18} />
                </button>

                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-slate-800 hover:bg-white rounded-xl font-bold transition-all text-base"
                >
                  View 8-Week Syllabus
                </a>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>Eligibility: 5+ years of software/IT experience • Company sponsorships accepted</span>
              </div>
            </div>

            {/* Right Column / Monolith Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl text-white">
                <div className="relative h-96 sm:h-[440px] w-full overflow-hidden">
                  <Image
                    src="/images/foundry_monolith.jpg"
                    alt="The Foundry's Monolith Architecture and Mountain Peaks"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/20" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white rounded-full border border-white/20">
                      BUILD REAL AI SOLUTIONS
                    </span>
                    <span className="px-2.5 py-1 bg-blue-500/80 backdrop-blur-md text-white text-[10px] font-mono uppercase rounded-full">
                      BATCH CAP: LIMITED SEATS
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[11px] uppercase font-mono tracking-widest text-slate-300">
                      The Finishing School for DeepTech Engineers
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                      Real Skills • Real Solutions
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-1">
                      Technology • People • Progress
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4 bg-slate-950">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                      <span className="text-slate-400">Program Track</span>
                      <span className="font-semibold text-slate-200">Advanced Management in FDE</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                      <span className="text-slate-400">Target Experience</span>
                      <span className="font-semibold text-slate-200">5+ Years (Leads & Architects)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                      <span className="text-slate-400">Pedagogy</span>
                      <span className="font-semibold text-slate-200">Daily Live Code Teardowns & Red-Teaming</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2">
                      <span className="text-slate-400">Tuition Fee</span>
                      <span className="font-bold text-lg text-emerald-400 font-mono">$2,500 USD</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors text-sm cursor-pointer"
                  >
                    Apply for Candidate Screening
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Paradigm Shift: AI-Assisted User vs FDE System Architect */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              The Career Trajectory Shift
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              Move Beyond AI-Assisted Coding. <br className="hidden sm:block" />
              Become a Forward Deployed Engineer.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Using Copilot to write boilerplate makes you 15% faster at typing syntax. Architecting Forward Deployed AI solutions makes you the most indispensable engineer in your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Trap */}
            <div className="bg-[#FAF9F6] border border-rose-200/80 rounded-2xl p-8 relative overflow-hidden">
              <div className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-[11px] font-mono font-bold uppercase rounded-md mb-4">
                Current Trap: AI-Assisted User
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Using Claude & Copilot for Dev Support</h3>

              <ul className="space-y-4">
                {[
                  "Prompting LLMs in web chats to generate isolated, context-fragile snippets.",
                  "Copy-pasting generated code without understanding underlying context degradation.",
                  "Zero insight into RAG retrieval accuracy, vector stores, or hallucination rates.",
                  "Unable to deploy autonomous agents safely inside enterprise security perimeters.",
                  "Vulnerable to commoditization as developer tools continue to automate syntax."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <XCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Foundry's Path */}
            <div className="bg-[#001D4A] text-white border border-blue-900 rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-blue-950/20">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold uppercase rounded-md mb-4 border border-emerald-500/30">
                The Foundry: Forward Deployed AI Engineer
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Building & Owning Real AI Solutions</h3>

              <ul className="space-y-4">
                {[
                  "Architecting production-grade multi-agent and hybrid RAG systems from scratch.",
                  "Designing deterministic evaluation benchmarks (LLM-as-a-Judge) for enterprise reliability.",
                  "Implementing security guardrails against jailbreaks, prompt injection, and data leaks.",
                  "Optimizing latency, streaming UX, and GPU token expenditure for enterprise ROI.",
                  "Operating as a trusted technical architect commanding top-tier DeepTech compensation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum Breakdown */}
      <section id="curriculum" className="py-20 px-6 bg-[#FAF9F5] border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              Comprehensive Syllabus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              What Will Be Covered in 2 Months
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              An intensive, production-first roadmap curated for engineers with 5+ years of software experience. Click any module to inspect weekly deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curriculum.map((mod) => {
              const isSelected = selectedModule === mod.num;
              return (
                <div
                  key={mod.num}
                  onClick={() => setSelectedModule(mod.num)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-white border-[#002f86] shadow-md shadow-blue-900/10"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                        isSelected
                          ? "bg-[#002f86] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      0{mod.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {mod.desc}
                      </p>

                      <div className="border-t border-slate-100 pt-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Key Deliverables:
                        </div>
                        <div className="space-y-1.5">
                          {mod.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8:30 PM Routine Advantage */}
      <section className="py-20 px-6 bg-[#001D4A] text-white border-b border-blue-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-300 block">
                Engineered for Senior Working Professionals
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                The 8:30 PM – 9:30 PM EST Advantage
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As an experienced IT professional with 5+ years under your belt, your daytime hours are packed with sprint standups, PR reviews, and client firefighting.
              </p>
              <div className="inline-block px-4 py-2 bg-blue-950/80 border border-blue-800 rounded-lg text-blue-200 text-sm font-mono font-bold">
                Mon–Fri • 60 Mins Daily Virtual Routine (EST)
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                5 hours of live, distraction-free execution every week designed to fit seamlessly around your professional schedule.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold mb-3">
                  <Cpu size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">High-Neuro Focus</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Absorb complex DeepTech concepts through focused, interactive evening sessions with industry peers.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-3">
                  <Rocket size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Zero Workday Conflict</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never miss a lecture due to daytime meetings or sprint emergencies. Your program runs conveniently after work hours (8:30–9:30 PM EST).
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold mb-3">
                  <Zap size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Daily Compounding</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rather than cramming 6 hours on a single Sunday, daily 1-hour cadence produces 4x higher concept retention.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold mb-3">
                  <Users size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Elite Peer Accountability</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Show up alongside other driven tech leads and senior engineers committed to mastering DeepTech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              Clear Answers for Working Engineers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about eligibility, schedule, and corporate sponsorships.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-[#FAF9F5]">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#002f86] text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-mono font-bold uppercase rounded-full border border-white/20">
                Inaugural Cohort • Limited Seats
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ready to Become a Forward Deployed Engineer?
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Join our 2-month executive finishing school. Cross the chasm from AI tool consumer to enterprise DeepTech systems architect.
              </p>

              <div className="pt-4 flex justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#002f86] hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all text-base cursor-pointer"
                >
                  Reserve Your Seat ($2,500 USD)
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="text-xs text-blue-200/80 pt-2">
                Questions? Email our admissions team at{" "}
                <a href="mailto:info@thefoundrys.com" className="underline font-bold text-white">
                  info@thefoundrys.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-slate-900">Seat Reserved!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Welcome to the Inaugural DeepTech Finishing Cohort at The Foundry. A formal onboarding kit and syllabus invoice have been sent to your email.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-8 py-3 bg-[#0A1628] hover:bg-[#15253F] text-white font-bold rounded-xl text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#001D4A]">
                  Reserve Your Seat
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  FDE Training for Working IT Professionals • Mon–Fri 8:30–9:30 PM EST • 2 Months Intensive
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                    />
                  </div>

                  {/* Company & Experience Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Current Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Microsoft / Cisco / FinTech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Years of IT Experience *
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                      >
                        <option value="5 – 8 Years">5 – 8 Years</option>
                        <option value="8 – 12 Years">8 – 12 Years</option>
                        <option value="12+ Years">12+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* AI Usage */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      How do you currently use AI in your daily work?
                    </label>
                    <select
                      value={formData.aiUsage}
                      onChange={(e) => setFormData({ ...formData, aiUsage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                    >
                      <option value="Using Claude / Copilot for code completion & debugging">
                        Using Claude / Copilot for code completion & debugging
                      </option>
                      <option value="Built basic RAG / prototype workflows">
                        Built basic RAG / prototype workflows
                      </option>
                      <option value="Leading team AI adoption initiatives">
                        Leading team AI adoption initiatives
                      </option>
                      <option value="None / exploring for the first time">
                        None / exploring for the first time
                      </option>
                    </select>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Mobile Number (with country code)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-sm bg-white"
                    />
                  </div>

                  {/* Tuition Fee Card */}
                  <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Tuition Fee:</span>
                      <span className="text-base font-bold text-slate-900 font-mono">$2,500 USD</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Includes 8 weeks live instruction, private code repo reviews, capstone supervision, and finishing school certification. Corporate invoice provided.
                    </p>
                  </div>

                  {/* Error Alert */}
                  {paymentError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3 flex items-start gap-2">
                      <span className="font-bold">⚠️</span>
                      <span>{paymentError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0A1628] hover:bg-[#15253F] text-white font-bold rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? "Connecting to Payment Gateway..." : "Lock In Admission & Pay $2,500 USD →"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
