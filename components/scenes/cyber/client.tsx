"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Award,
  ShieldCheck,
  Code2,
  Rocket,
  BrainCircuit,
  Globe,
  Shield,
  Lock,
  Bug,
  Fingerprint,
  ServerCog,
  Siren,
  Radar,
  Skull
} from "lucide-react";
import Link from "next/link";

const CAREER_ROLES = [
  {
    id: "ai-security-analyst",
    label: "AI Security Analyst",
    title: "AI Security Analyst",
    desc: "Protects neural networks from adversarial attacks and data poisoning. Ensures AI models are secure, resilient, and ethically sound in production environments.",
    salary: "₹45L - 75L",
    growth: "+55% YoY",
    skills: [
      "Adversarial ML",
      "Model Auditing",
      "Python & PyTorch",
      "Threat Modeling",
      "AI Governance"
    ],
    responsibilities: [
      "Auditing AI pipelines for vulnerabilities",
      "Defending against model extraction attacks",
      "Implementing AI safety guardrails",
      "Monitoring deployed models for drift and abuse",
      "Collaborating with ML engineers on secure design"
    ]
  },
  {
    id: "ml-security-engineer",
    label: "ML Security Engineer",
    title: "ML Security Engineer",
    desc: "Designs self-healing security systems that use machine learning to detect and neutralize threats in real-time across enterprise infrastructure.",
    salary: "₹55L - 90L",
    growth: "+50% YoY",
    skills: [
      "SIEM & SOAR",
      "Deep Learning",
      "Anomaly Detection",
      "Cloud Security",
      "Threat Intelligence"
    ],
    responsibilities: [
      "Building ML-driven intrusion detection systems",
      "Automating threat response with intelligent agents",
      "Designing real-time security data pipelines",
      "Training models on network traffic patterns",
      "Reducing false positives in alert systems"
    ]
  },
  {
    id: "synthetic-threat-analyst",
    label: "Synthetic Threat Analyst",
    title: "Synthetic Threat Analyst",
    desc: "Detects and mitigates AI-generated deepfakes, synthetic phishing campaigns, and automated social engineering attacks at scale.",
    salary: "₹40L - 70L",
    growth: "+65% YoY",
    skills: [
      "Deepfake Detection",
      "NLP & LLMs",
      "Digital Forensics",
      "OSINT",
      "Incident Response"
    ],
    responsibilities: [
      "Identifying AI-generated disinformation campaigns",
      "Building deepfake detection pipelines",
      "Analyzing synthetic phishing at scale",
      "Advising on AI-enabled social engineering risks",
      "Creating threat intelligence reports"
    ]
  },
  {
    id: "cyber-forensics-expert",
    label: "Cyber Forensics Expert",
    title: "Cyber Forensics Expert (AI Era)",
    desc: "Traces digital footprints across decentralized networks to solve crimes involving weaponized AI, autonomous agents, and encrypted communications.",
    salary: "₹50L - 85L",
    growth: "+40% YoY",
    skills: [
      "Digital Forensics",
      "Blockchain Analysis",
      "Reverse Engineering",
      "Memory Forensics",
      "Legal Compliance"
    ],
    responsibilities: [
      "Conducting post-breach forensic investigations",
      "Tracing transactions across blockchain networks",
      "Reverse engineering malware and exploits",
      "Presenting digital evidence in legal proceedings",
      "Building forensic tooling for emerging threats"
    ]
  }
];

const CURRICULUM_DATA = [
  {
    year: 1,
    title: "Foundations of Security",
    topics: [
      "Computer Networks: TCP/IP, DNS, HTTP, and Protocol Analysis",
      "Operating Systems: Linux Internals, Windows Architecture & Shell Scripting",
      "Programming for Security: Python, C, and Assembly Fundamentals",
      "Introduction to Cryptography: Symmetric, Asymmetric & Hashing",
      "Web Application Security: OWASP Top 10 & Secure Coding",
      "Entrepreneurship 101: Problem Discovery & Ideation in Security"
    ]
  },
  {
    year: 2,
    title: "Offensive & Defensive Operations",
    topics: [
      "Penetration Testing: Recon, Exploitation & Post-Exploitation",
      "Red Teaming: Advanced Attack Simulation & Social Engineering",
      "Blue Team Operations: SOC, SIEM, Incident Response & Threat Hunting",
      "Malware Analysis: Static, Dynamic & Reverse Engineering",
      "Cloud Security: AWS, Azure & GCP Hardening",
      "Startup Lab: Building Your First Security Product (MVP)"
    ]
  },
  {
    year: 3,
    title: "Mastery & Specialization",
    topics: [
      "AI-Powered Security: ML for Threat Detection & Anomaly Analysis",
      "Zero-Day Research: Vulnerability Discovery & Responsible Disclosure",
      "Blockchain Security: Smart Contract Auditing & DeFi Exploits",
      "Embedded & IoT Security: Hardware Hacking & Firmware Analysis",
      "Capstone: Production-Grade Security System with Industry Partner",
      "Founder Track: Cybersecurity Startup — Pitch, Fundraise & Launch"
    ]
  }
];

function CurriculumTabs() {
  const [activeYear, setActiveYear] = useState(1);
  const activeContent = CURRICULUM_DATA.find(item => item.year === activeYear);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {CURRICULUM_DATA.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeYear === item.year
              ? 'bg-emerald-600 text-white shadow-lg scale-105'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            Year {item.year}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
              Year {activeContent?.year}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {activeContent?.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-1 gap-4">
            {activeContent?.topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors"
              >
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function CyberClient() {
  const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 select-none">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="Cybersecurity"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              Cyber <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-cyan-200">Security.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Master the art of Offensive & Defensive Security. <br />
              <span className="text-white font-medium">Defend the digital frontier. Build the future of trust.</span>
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Program Details Card */}
      <div className="relative z-20 px-4 -mt-14 mb-12">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                <p className="text-lg font-bold text-slate-900">3-Year Full-Time</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Delivery Mode</p>
                <p className="text-lg font-bold text-slate-900">On-Campus, Immersive</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Campus</p>
                <p className="text-lg font-bold text-slate-900">Hyderabad, India</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions</p>
                <p className="text-lg font-bold text-slate-900">Now Open</p>
              </div>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Apply Now
              </Link>
              <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Overview */}
      <section id="overview" className="py-28 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">Program Overview</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Built for the <br />
                <span className="text-emerald-600">Digital Battlefield.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The Foundry&apos;s 3-year Cybersecurity program trains you to think like an attacker, defend like an architect, and lead like a strategist. From kernel hacking to red teaming — you graduate battle-ready for the real world.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Penetration Testing", "Red Teaming", "Malware Analysis", "Cloud Security", "AI Security", "Digital Forensics"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "3", unit: "Years", label: "Full-time immersive program" },
                { value: "6", unit: "Semesters", label: "Progressive skill building" },
                { value: "100%", unit: "Hands-on", label: "Lab-based from day one" },
                { value: "CTF", unit: "Weekly", label: "Capture The Flag challenges" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">{stat.unit}</div>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For — Dark section with numbered cards */}
      <section className="py-24 px-6 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-14">
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">Built for defenders & breakers</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Who Is This For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Future Security Engineers", desc: "Class 12 / Intermediate graduates from HEC, MEC, CEC, or MPC streams ready to master the art of cyber defense.", icon: Shield, color: "from-emerald-500 to-cyan-400" },
              { num: "02", title: "Ethical Hackers in the Making", desc: "Students fascinated by how things break — and determined to learn how to fix them before attackers exploit them.", icon: Bug, color: "from-violet-500 to-purple-400" },
              { num: "03", title: "Zero Coding Background", desc: "No prior programming required. We teach you from shell scripts to exploit development, step by step.", icon: Code2, color: "from-amber-500 to-orange-400" },
              { num: "04", title: "Digital Guardians", desc: "Individuals who want to protect critical infrastructure, governments, and enterprises from the next generation of threats.", icon: Lock, color: "from-rose-500 to-red-400" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-5">
                  <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-500 tracking-widest">{item.num}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Achieve — Milestone cards */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3">Your Transformation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What You&apos;ll Achieve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Perform end-to-end penetration tests on enterprise networks", highlight: "Pen Testing" },
              { num: "02", text: "Build and operate a Security Operations Center from scratch", highlight: "SOC Operations" },
              { num: "03", text: "Reverse engineer malware and write detection signatures", highlight: "Malware Analysis" },
              { num: "04", text: "Secure cloud infrastructure across AWS, Azure & GCP", highlight: "Cloud Security" },
              { num: "05", text: "Detect and respond to AI-powered cyber threats", highlight: "AI Security" },
              { num: "06", text: "Graduate with OSCP-level skills and a portfolio of real exploits", highlight: "Real Portfolio" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-500" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-emerald-100 group-hover:text-emerald-200 transition-colors">{item.num}</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-full">{item.highlight}</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Eligibility */}
      <section id="eligibility" className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Eligibility</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are looking for students with analytical minds and a passion for solving complex problems. Your background doesn&apos;t need to be technical — your curiosity does.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 px-8 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Award size={20} className="text-emerald-400" />
                  Academic Eligibility
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Standard Pathway</h4>
                    <ul className="space-y-4 text-slate-700">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>Successful completion of <strong>Class 12 / Intermediate</strong> (or equivalent).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>Eligible streams: <strong>HEC, MEC, CEC, MPC</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>Minimum aggregate of <strong>60%</strong> in core subjects.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Alternative Credentials</h4>
                    <ul className="space-y-4 text-slate-700">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span><strong>IB Diploma</strong>: Minimum 24 points.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span><strong>A-Levels</strong>: Passed in at least 3 subjects.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span><strong>BTEC/Vocational</strong>: Evaluated on a case-by-case basis.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">Prerequisites</h3>
                </div>
                <ul className="space-y-5">
                  <li>
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Coding Experience</p>
                    <p className="text-slate-600 text-sm"><strong>Zero prior coding experience</strong> required. We start from bash scripting fundamentals.</p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">English Proficiency</p>
                    <p className="text-slate-600 text-sm"><strong>No IELTS or TOEFL</strong> required. Communication skills are developed on-campus.</p>
                  </li>
                  <li>
                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Entrance Tests</p>
                    <p className="text-slate-600 text-sm"><strong>No traditional entrance exams</strong>. Seats allocated based on academic merit and profile evaluation.</p>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-emerald-600 rounded-2xl text-white">
                <h3 className="text-2xl font-bold italic mb-4">Who we look for</h3>
                <p className="text-emerald-50 leading-relaxed mb-6">
                  We want the curious ones — the students who take things apart to understand how they work, and dream about building systems that can&apos;t be broken.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    Analytical Thinking
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    Attention to Detail
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    Persistence & Grit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You Will Study (Curriculum) */}
      <section id="curriculum" className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What You Will Study</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From networking fundamentals to zero-day research. Every year builds on the last.</p>
          </div>
          <CurriculumTabs />
        </div>
      </section>

      {/* 4. Post 2035 Jobs */}
      <section id="careers" className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cybersecurity Post 2035 Jobs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">The roles our graduates are being trained to lead. These aren&apos;t jobs — they&apos;re missions.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CAREER_ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeRole.id === role.id
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {role.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{activeRole.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{activeRole.desc}</p>
                  <div className="flex gap-6 mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Avg. Compensation</div>
                      <div className="text-xl font-bold text-slate-900">{activeRole.salary}</div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <div className="text-xs text-emerald-600 uppercase tracking-widest font-bold mb-1">Growth</div>
                      <div className="text-xl font-bold text-emerald-600">{activeRole.growth}</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeRole.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-[350px]">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Responsibilities</h4>
                  <div className="space-y-3">
                    {activeRole.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
