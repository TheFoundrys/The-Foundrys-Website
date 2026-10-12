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
  X,
  Phone,
  MessageSquare,
  FlaskConical,
  Building2,
  Compass,
  FileCheck2,
  CreditCard,
  Target,
  Sparkles,
  Layers,
  GraduationCap
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
          message: `Company: ${formData.company}\nIT Experience: ${formData.experience}\nAI Usage: ${formData.aiUsage}\nTuition: $2,500 USD\nSchedule: Mon–Fri 6:00 AM – 7:00 AM IST (8:30 PM – 9:30 PM EST)`,
          program: "Advanced Management Program in Forward Deployed Engineering",
          source: "FDE Reserve Seat Modal"
        })
      });

      // 2. Create Razorpay Order
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: "advanced-management-fde",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          experienceLevel: formData.experience,
          currency: "USD",
        })
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json().catch(() => ({}));
        throw new Error(errData.error || "Unable to initialize Razorpay order.");
      }

      const orderData = await orderRes.json();

      if (typeof window === "undefined" || !window.Razorpay) {
        throw new Error("Razorpay payment gateway is loading. Please try again in a few moments.");
      }

      const options = {
        key: orderData.key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_SFhhEv00tCaHqt",
        amount: orderData.razorpayAmount,
        currency: orderData.currency || "USD",
        name: "The Foundry's",
        description: "Advanced Management in Forward Deployed Engineering",
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#002f86",
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          try {
            // Verify payment signature and automatically dispatch Tax Invoice & Receipt email
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                enrollmentId: orderData.enrollmentId,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                courseName: "Advanced Management Program in Forward Deployed Engineering",
                amount: 2500,
                currency: "USD",
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              if (typeof window !== "undefined") {
                sessionStorage.setItem(
                  "paymentSuccess",
                  JSON.stringify({
                    courseName: "Advanced Management in Forward Deployed Engineering",
                    amount: 2500,
                    currency: "USD",
                    paymentId: response.razorpay_payment_id,
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    phone: formData.phone,
                    verified: true,
                  })
                );
              }
              setIsSubmitting(false);
              setIsSubmitted(true);
              setIsModalOpen(false);
              router.push(`/payment/success?payment_id=${encodeURIComponent(response.razorpay_payment_id)}`);
            } else {
              setPaymentError("Payment verification failed. Please contact admissions support.");
              setIsSubmitting(false);
            }
          } catch (verifyErr) {
            console.error("Verification error:", verifyErr);
            setPaymentError("Payment verification error. Your payment may have been processed. Please contact admissions support.");
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsSubmitting(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      console.error("Submission/Payment error:", err);
      const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setPaymentError(errMsg);
      setIsSubmitting(false);
      return;
    }
  };

  const curriculum = [
    {
      num: 1,
      title: "AI solution foundations for builders",
      desc: "Deconstruct enterprise workflows into deterministic vs stochastic components. Understand model topology, foundational models vs domain fine-tuning trade-offs, and calculate real cost-per-inference before writing code.",
      deliverables: ["Cost-per-inference matrix", "Deterministic vs probabilistic workflow audit", "Model topology selection blueprint"]
    },
    {
      num: 2,
      title: "Practical LLM application design",
      desc: "Architect low-latency LLM microservices. Context window token economics, model cascading strategies (cheap models for routing, frontier models for reasoning), and streaming user experience patterns.",
      deliverables: ["Streaming SSE architecture", "Model cascading router service", "Context optimization benchmark"]
    },
    {
      num: 3,
      title: "Prompt engineering, workflows, and orchestration",
      desc: "Moving beyond natural language prompts to structured output enforcement (Pydantic / JSON schema). Building state machine orchestration graphs, deterministic routing, and graceful failure fallbacks.",
      deliverables: ["Pydantic validated output pipelines", "Multi-step state graph execution engine", "Fallback recovery handlers"]
    },
    {
      num: 4,
      title: "RAG, enterprise knowledge, and data grounding",
      desc: "Enterprise-grade Retrieval Augmented Generation: chunking heuristics, dense vector embeddings, BM25 sparse hybrid search, cross-encoder re-ranking, and avoiding hallucination in domain-critical data.",
      deliverables: ["Hybrid search RAG pipeline", "Cross-encoder re-ranking implementation", "Domain document ingest engine"]
    },
    {
      num: 5,
      title: "Agents, automation, and tool integration",
      desc: "Implementing ReAct loops, deterministic function-calling, and custom API integrations. Managing multi-agent task delegation and embedding human-in-the-loop validation barriers for high-stakes enterprise actions.",
      deliverables: ["Autonomous function-calling agent", "Human-in-the-loop audit gatekeeper", "Multi-agent coordinator system"]
    },
    {
      num: 6,
      title: "Evaluation, guardrails, and responsible AI",
      desc: "Automated test harnesses for stochastic systems. Building synthetic evaluation datasets, implementing LLM-as-a-judge pipelines, and deploying security guardrails against prompt injection and data leaks.",
      deliverables: ["Synthetic eval benchmark suite", "LLM-as-a-Judge grading harness", "Prompt injection defense perimeter"]
    },
    {
      num: 7,
      title: "Rapid prototyping and deployment basics",
      desc: "Containerizing AI pipelines with Docker, deploying self-hosted models using vLLM and Ollama, cloud staging on AWS/Azure, and real-time observability tracking latency, drift, and token consumption.",
      deliverables: ["Dockerized vLLM deployment", "Real-time latency & drift telemetry", "Staging-to-production CI/CD pipeline"]
    },
    {
      num: 8,
      title: "Mini capstone: build an AI solution",
      desc: "Build and deploy a complete forward-deployed enterprise AI solution solving a real customer problem. Deliver an architecture document, working production repo, and pitch it during our Demo Day.",
      deliverables: ["Production-ready repository", "System design & ROI whitepaper", "Live demo to enterprise DeepTech panel"]
    }
  ];

  const faqs = [
    {
      q: "What is the daily schedule and time commitment?",
      a: "Live classes run Monday through Friday, 6:00 AM – 7:00 AM IST (which corresponds to 8:30 PM – 9:30 PM EST). This 60-minute daily rhythm is specifically engineered so working professionals can learn distraction-free before their workday begins (in India) or right after work hours (in the US) without missing standups or meetings."
    },
    {
      q: "What are the eligibility and admission screening criteria?",
      a: "Admission requires screening to verify relevant professional experience. Participants must have 5+ years of software/IT experience (e.g. Full Stack, ERP, CRM, backend, or cloud systems). Prior machine learning knowledge is NOT required—we teach applied AI systems engineering from the ground up."
    },
    {
      q: "Who is the lead coach leading this cohort?",
      a: "Our lead coach spent one year on Sam Altman's early OpenAI team, contributing to foundational model development. With 15+ years in AI & DeepTech, 20+ papers, and 100+ AI solutions on GitHub, he built OpenVals (an AI trust, validation, and governance platform now preparing for commercialization) and authored a thesis on advanced recursive models."
    },
    {
      q: "What real-world project and placement opportunities are available?",
      a: "Through our partnerships with multiple clients and vendors in the US, we aim to place top performers on real-world AI projects, subject to performance, project availability, and client selection. Additionally, our partner ecosystem (Dr Pinnacle research lab and TechOptima) continuously seeks talent for upcoming AI and DeepTech initiatives."
    },
    {
      q: "Can my employer sponsor my tuition fee ($2,500)?",
      a: "Yes. Many candidates utilize corporate upskilling or L&D budgets. Upon request, we provide a structured Corporate Sponsorship Package, official GST/VAT invoices, and a formal training agreement outlining enterprise ROI."
    },
    {
      q: "What happens if I miss a live session?",
      a: "Every session is recorded in HD and published within 30 minutes to your cohort portal alongside companion code notebooks, architectural diagrams, and transcripts. You can catch up before your next morning or evening session."
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
          <span className="text-amber-300 font-semibold">Strictly Limited Seats</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-slate-200">Mon–Fri | 6:00 AM – 7:00 AM IST (8:30 PM – 9:30 PM EST)</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-slate-300">Executive DeepTech Cohort for 5+ Year IT Veterans</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-white to-[#F2EFE9] border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#002f86] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                  A Premium Finishing School in DeepTech
                </div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 pt-1">
                  People • Skills • AI Solutions • A Brighter Tomorrow
                </div>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#002f86] leading-[1.1]">
                FDE Training for <br />
                <span className="text-slate-900">Working IT Professionals</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 leading-snug">
                Move beyond AI-assisted coding. <br className="hidden sm:block" />
                <span className="text-blue-900">Learn to build real AI solutions.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Designed for experienced engineers who want to go from using tools like Claude or Copilot for syntax assistance to architecting, evaluating, and deploying production-grade AI solutions for global enterprise clients.
              </p>

              {/* Quick Specs Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 max-w-2xl">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Duration</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">2 Months</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">8 Weeks Intensive</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Schedule</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-mono leading-tight">6:00–7:00 AM IST</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">8:30–9:30 PM EST</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Audience</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">5+ Years</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">IT Professionals</div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Tuition Fee</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-600 font-mono mt-1">$2,500</div>
                  <div className="text-[10px] text-slate-600 font-medium mt-0.5 leading-tight">
                    +15% Convenience Fee
                    <span className="text-[9px] text-slate-400 font-normal block">Per Person</span>
                  </div>
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
                  href="#program-details"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-slate-800 hover:bg-white rounded-xl font-bold transition-all text-base"
                >
                  View Program Details
                </a>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Admission: Screening to verify relevant professional experience • Real-world project opportunities</span>
              </div>
            </div>

            {/* Right Column / Monolith Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl text-white">
                <div className="relative h-80 sm:h-[400px] w-full overflow-hidden">
                  <Image
                    src="/images/foundry_monolith.jpg"
                    alt="The Foundry's Monolith Architecture and Mountain Peaks"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/30" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white rounded-full border border-white/20">
                      BUILD REAL AI SOLUTIONS
                    </span>
                    <span className="px-2.5 py-1 bg-blue-500/90 backdrop-blur-md text-white text-[10px] font-mono uppercase rounded-full">
                      HIGHER SKILLS. BIGGER POSSIBILITIES
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
                      Lasting Impact • Delivered by The Foundry&apos;s
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4 bg-slate-950">
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Duration</span>
                      <span className="font-semibold text-slate-200">2 Months (Virtual Live)</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Schedule</span>
                      <span className="font-semibold text-slate-200 font-mono">Mon–Fri | 6:00–7:00 AM IST (8:30–9:30 PM EST)</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Audience</span>
                      <span className="font-semibold text-slate-200">IT Professionals with 5+ Years Exp</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-800">
                      <span className="text-slate-400">Admission</span>
                      <span className="font-semibold text-slate-200">Screening to verify experience</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Tuition Fee</span>
                      <div className="text-right">
                        <span className="font-bold text-base sm:text-lg text-emerald-400 font-mono">$2,500</span>
                        <span className="text-[10px] text-slate-300 block font-mono">+15% convenience fee</span>
                      </div>
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

      {/* Target Audience Narrative: Strong in Full Stack, ERP or CRM */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#002f86] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-blue-600" />
              Target Audience & Problem Statement
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002f86] leading-tight mb-8">
              Strong in Full Stack, ERP or CRM— <br />
              <span className="text-slate-900">but unsure where to start with AI?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002f86] flex items-center justify-center font-bold">
                  <Layers size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Your Experience is Strong</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your technology experience is a strong foundation. The challenge is knowing which problems to solve, what questions to ask, and how to turn AI experiments into reliable real-world solutions.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Target size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Industry-Expert Guidance</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ChatGPT and Claude can accelerate learning, but useful answers depend on asking the <strong className="text-slate-800">right questions</strong> and knowing how to evaluate the results. Industry-expert guidance helps you identify knowledge gaps, make architecture decisions, and practise building complete AI solutions.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Rocket size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">From Use Case to Deployment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Concerned about how AI will change your role? Build on your existing expertise with structured, hands-on training—from <strong className="text-slate-800">use case to deployment</strong>.
                </p>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-900 to-[#001D4A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs uppercase font-mono tracking-wider text-blue-300 font-semibold">
                  Executive Transition Pathway
                </div>
                <div className="text-base font-bold">
                  Bridge the gap between enterprise systems and production AI in 8 weeks.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-white text-[#001D4A] hover:bg-blue-50 font-bold rounded-lg text-sm transition-colors shrink-0 cursor-pointer shadow-md"
              >
                Apply for Screening →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details: Pathway to Real-World AI Projects */}
      <section id="program-details" className="py-20 px-6 bg-[#FAF9F5] border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              Curated Structure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              Your Pathway to Real-World AI Projects
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Transparent specifications designed to fit demanding full-time IT schedules while opening direct access to US enterprise client projects.
            </p>
          </div>

          {/* 5 Program Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {/* Duration */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Calendar size={20} />
                </div>
                <div className="text-xs uppercase font-mono font-semibold text-slate-400">Duration</div>
                <div className="font-serif text-xl font-bold text-slate-900 mt-1">2 Months</div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                8 weeks of intensive daily execution
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Clock size={20} />
                </div>
                <div className="text-xs uppercase font-mono font-semibold text-slate-400">Schedule</div>
                <div className="font-mono text-sm sm:text-base font-bold text-slate-900 mt-1 leading-tight">
                  Mon–Fri <br />
                  6:00–7:00 AM IST
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 font-mono">
                8:30–9:30 PM EST
              </div>
            </div>

            {/* Audience */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <div className="text-xs uppercase font-mono font-semibold text-slate-400">Audience</div>
                <div className="font-serif text-lg font-bold text-slate-900 mt-1">IT Professionals</div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                5+ Years of experience in software / systems
              </div>
            </div>

            {/* Admission */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <FileCheck2 size={20} />
                </div>
                <div className="text-xs uppercase font-mono font-semibold text-slate-400">Admission</div>
                <div className="font-serif text-base font-bold text-slate-900 mt-1">Screening Process</div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Screening to verify relevant professional experience
              </div>
            </div>

            {/* Fee */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CreditCard size={20} />
                </div>
                <div className="text-xs uppercase font-mono font-semibold text-slate-400">Fee</div>
                <div className="font-mono text-xl font-bold text-emerald-700 mt-1">$2,500</div>
                <div className="text-xs text-slate-600 font-mono font-medium mt-1">+15% Convenience Fee</div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Per person • Corporate invoice available
              </div>
            </div>
          </div>

          {/* Assessment, Certification & Project Opportunities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Final Assessment & Certification */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002f86] flex items-center justify-center shrink-0">
                  <Award size={26} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Final Assessment & Certification
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Complete the comprehensive final assessment and code teardown to earn an official completion certificate from <strong className="text-slate-800">The Foundry&apos;s</strong> validating your Forward Deployed Engineering capabilities.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold">
                    <CheckCircle2 size={15} />
                    Rigorous evaluation benchmarked on real system design
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World AI Project Opportunities */}
            <div className="bg-white p-8 rounded-2xl border border-blue-200/90 shadow-sm relative overflow-hidden bg-gradient-to-br from-white to-blue-50/40">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Briefcase size={26} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Real-World AI Project Opportunities
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Through our partnerships with multiple clients and vendors in the US, we aim to place top performers on real-world AI projects, subject to performance, project availability and client selection.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                    <CheckCircle2 size={15} />
                    Direct enterprise client deployment pipeline
                  </div>
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

      {/* Coach Profile Section */}
      <section className="py-20 px-6 bg-[#FAF9F5] border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#001D4A] text-white rounded-3xl p-8 sm:p-12 md:p-14 border border-blue-900 shadow-2xl relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase rounded-full">
                  <ShieldCheck size={14} className="text-blue-300" />
                  Lead Coach Profile
                </div>
                <div className="text-xs font-mono text-slate-400">
                  OpenAI Early Team Alum • DeepTech Researcher
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Learn directly from foundational <br className="hidden sm:block" />
                  <span className="text-blue-300">model developers and active researchers.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  Our lead coach spent <strong className="text-white font-semibold">one year on Sam Altman&apos;s early OpenAI team</strong>, contributing directly to foundational model development.
                </p>
              </div>

              {/* Stats & Credibility Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-blue-300">15+ Years</div>
                  <div className="text-xs text-slate-300 mt-1">in AI & DeepTech</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-300">20+ Papers</div>
                  <div className="text-xs text-slate-300 mt-1">Published Research</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-purple-300">100+ Solutions</div>
                  <div className="text-xs text-slate-300 mt-1">Open-Source on GitHub</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-amber-300">OpenVals</div>
                  <div className="text-xs text-slate-300 mt-1">AI Trust & Governance</div>
                </div>
              </div>

              {/* Research Narrative Box */}
              <div className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-3">
                <div className="text-xs uppercase font-mono tracking-wider text-blue-300 font-semibold">
                  Commercialization & Foundational Research
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Built <strong className="text-white font-semibold">OpenVals</strong> for enterprise AI validation, trust, and governance—currently preparing for commercialization. Authored a landmark thesis on advanced recursive models two years ago.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  During the program, you don&apos;t just read tutorials—you review production code, perform live architectural teardowns, and learn directly from practitioners who built foundational systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum Breakdown */}
      <section id="curriculum" className="py-20 px-6 bg-white border-b border-slate-200">
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
                      ? "bg-[#FAF9F5] border-[#002f86] shadow-md shadow-blue-900/10"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-[#FAF9F5]/50"
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

                      <div className="border-t border-slate-200/70 pt-3">
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

      {/* Partner Ecosystem & Beyond Classroom Learning */}
      <section className="py-20 px-6 bg-[#FAF9F5] border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              DeepTech Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              A Finishing School. <br className="hidden sm:block" />
              A Pathway into the AI Ecosystem.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              The Foundry&apos;s develops experienced IT professionals into an AI talent pool ready for discovery, product development, and implementation. Our purpose goes beyond course completion: we help professionals prepare to contribute to real research and client solutions.
            </p>
          </div>

          {/* 3 Partner Ecosystem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#002f86] flex items-center justify-center mx-auto">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">The Foundry&apos;s</h3>
              <p className="text-sm font-medium text-blue-900">
                Finishing school and AI talent development
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Transforms senior IT professionals through immersive, practical DeepTech curricula benchmarked against real enterprise challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <FlaskConical size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Dr Pinnacle</h3>
              <p className="text-sm font-medium text-emerald-800">
                DeepTech research lab
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Seeks research talent and advances foundational intelligence architectures with a planned 5-year pipeline of AI product initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mx-auto">
                <Building2 size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">TechOptima</h3>
              <p className="text-sm font-medium text-indigo-800">
                AI capabilities and services provider
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Delivers enterprise AI client solution discovery and implementations requiring a rapidly expanding pool of Forward Deployed Engineers.
              </p>
            </div>
          </div>

          {/* Research, products and real-world delivery details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                <Cpu size={14} />
                Research, Products & Real-World Delivery
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                Building OpenVals: AI Trust, Validation & Governance
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Together, this ecosystem is building <strong className="text-slate-800">OpenVals</strong>, an AI trust, validation, and governance platform. Its client solution discovery and implementations are expected to require a growing pool of Forward Deployed Engineers (FDEs).
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dr Pinnacle also seeks talent for its research work. A planned pipeline of AI and DeepTech product initiatives over the next five years creates a long-term need to develop strong AI practitioners.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                <Compass size={14} />
                Learn with Active Researchers & Long-Term Vision
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                World-Class Academic & Research Standards
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Learn with active researchers:</strong> Our coaches contribute directly to AI research and product development. They bring practical experience in investigating problems, testing ideas, and building solutions into the learning process.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800 block">Our Long-Term Vision:</span>
                <span>
                  Establish a university with a world-class DeepTech research lab, inspired by the academic and research standards of institutions such as Harvard.
                </span>
                <span className="text-[11px] text-slate-400 block italic">
                  *An ambition for the future—not a claim of current university status or affiliation.
                </span>
              </div>
            </div>
          </div>

          {/* Ecosystem Callout Strip */}
          <div className="bg-[#001D4A] text-white p-6 sm:p-8 rounded-2xl border border-blue-900 text-center space-y-2 shadow-lg">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Develop skills. Contribute to research. Build real AI solutions.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Opportunities depend on capability, research needs, project availability, and client selection.
            </p>
          </div>
        </div>
      </section>

      {/* Routine Advantage: 6:00–7:00 AM IST / 8:30–9:30 PM EST */}
      <section className="py-20 px-6 bg-[#001D4A] text-white border-b border-blue-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-300 block">
                Engineered for Senior Working Professionals
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                The Routine Advantage: <br />
                <span className="text-blue-300">6:00 AM – 7:00 AM IST</span> <br />
                <span className="text-slate-300 text-2xl font-sans font-normal">(8:30 PM – 9:30 PM EST)</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As an experienced IT professional with 5+ years under your belt, your daytime hours are packed with sprint standups, PR reviews, and client firefighting.
              </p>
              <div className="inline-block px-4 py-2 bg-blue-950/80 border border-blue-800 rounded-lg text-blue-200 text-sm font-mono font-bold">
                Mon–Fri • 60 Mins Daily Virtual Routine
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                5 hours of live, distraction-free execution every week designed to fit seamlessly before your workday in India or right after work hours in the US.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold mb-3">
                  <Cpu size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">High-Neuro Focus</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Start fresh at 6:00 AM IST before daytime office notifications flood in, absorbing complex DeepTech concepts with clear cognitive bandwidth.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold mb-3">
                  <Rocket size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Zero Workday Conflict</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never miss a live session due to daytime meetings or sprint emergencies. Your cohort runs completely outside standard office hours.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold mb-3">
                  <Zap size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Daily Compounding</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rather than cramming 6 exhausting hours on a weekend, a daily 1-hour cadence produces 4x higher concept retention and consistent code progression.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold mb-3">
                  <Users size={18} />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">Elite Peer Accountability</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Show up alongside other driven tech leads, senior engineers, and architects committed to mastering applied AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Now & Direct Support Channels */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-3.5 py-1 bg-blue-50 border border-blue-200 text-[#002f86] text-xs font-mono font-bold uppercase rounded-full mb-3">
            Direct Admissions Line
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86] mb-3">
            Register Now
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
            Focused, high-touch learning for experienced professionals. Speak directly with our admissions and program leads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Direct Call */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002f86] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono font-bold text-slate-400">Call Us</div>
                  <div className="font-bold text-slate-900 text-sm">Direct Phone Numbers</div>
                </div>
              </div>
              <div className="space-y-1.5 pt-2 font-mono text-sm">
                <div>
                  <a href="tel:+15404146956" className="text-blue-700 hover:underline flex items-center gap-2">
                    <span className="text-xs text-slate-400">US:</span> +1 5404146956
                  </a>
                </div>
                <div>
                  <a href="tel:+917981171474" className="text-blue-700 hover:underline flex items-center gap-2">
                    <span className="text-xs text-slate-400">IN:</span> +91 7981171474
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-slate-200 text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono font-bold text-slate-400">WhatsApp</div>
                  <div className="font-bold text-slate-900 text-sm">Instant Chat Support</div>
                </div>
              </div>
              <div className="space-y-1.5 pt-2 font-mono text-sm">
                <div>
                  <a href="https://wa.me/919704448853" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline flex items-center gap-2">
                    <span className="text-xs text-slate-400">WA 1:</span> +91 9704448853
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/917032917578" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline flex items-center gap-2">
                    <span className="text-xs text-slate-400">WA 2:</span> +91 7032917578
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/919966468249" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline flex items-center gap-2">
                    <span className="text-xs text-slate-400">WA 3:</span> +91 99664 68249
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-6 bg-[#FAF9F5] border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase font-bold tracking-widest text-blue-600 mb-2 block">
              Clear Answers for Working Engineers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002f86]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about schedule, admission screening, coach background, and placement opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#002f86] text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-mono font-bold uppercase rounded-full border border-white/20">
                Inaugural Cohort • Strictly Limited Seats
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
                  Welcome to the Inaugural DeepTech Finishing Cohort at The Foundry&apos;s. A formal onboarding kit and syllabus invoice have been sent to your email.
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
                  FDE Training for Working IT Professionals • Mon–Fri 6:00–7:00 AM IST (8:30–9:30 PM EST) • 2 Months Intensive
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
                  <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Tuition Fee:</span>
                      <span className="text-base font-bold text-slate-900 font-mono">$2,500 USD</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Convenience Fee:</span>
                      <span className="font-mono font-medium text-slate-700">+15%</span>
                    </div>
                    <p className="text-xs text-slate-500 pt-1.5 border-t border-slate-200/60 leading-relaxed">
                      Includes 8 weeks live instruction, private code repo reviews, capstone supervision, and finishing school certification. Corporate invoice provided.
                    </p>
                  </div>

                  {/* Contact Help */}
                  <div className="text-xs text-slate-500 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div><strong>Need assistance?</strong> Call US: +1 5404146956 | IN: +91 7981171474</div>
                    <div>WhatsApp: +91 9704448853 | +91 7032917578 | +91 99664 68249</div>
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
