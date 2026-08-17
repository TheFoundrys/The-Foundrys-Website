"use client";

import { Navbar } from "@/components/ui/navbar";
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";
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
  Skull,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { DecryptText } from "@/components/ui/decrypt-text";

const CAREER_ROLES = [
  {
    id: "ai-security-analyst",
    label: "AI Security Analyst",
    title: "AI Security Analyst",
    desc: "Protects neural networks from adversarial attacks and data poisoning. Ensures AI models are secure, resilient, and ethically sound in production environments.",
    salary: "₹6L - 14L",
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
    salary: "₹8L - 18L",
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
    salary: "₹5L - 12L",
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
    salary: "₹4L - 10L",
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
  },
  {
    id: "autonomous-incident-orchestrator",
    label: "Autonomous Incident Orchestrator",
    title: "Autonomous Incident Orchestrator",
    desc: "Designs and manages high-velocity response systems where AI agents autonomously contain, eradicate, and recover from sophisticated cyber-attacks.",
    salary: "₹8L - 16L",
    growth: "+58% YoY",
    skills: [
      "SOAR Architecture",
      "Agentic Frameworks",
      "Incident Response",
      "Cloud Infrastructure",
      "Behavioral Analysis"
    ],
    responsibilities: [
      "Building autonomous response playbooks",
      "Managing agentic-defense swarms",
      "Optimizing mean-time-to-contain (MTTC)",
      "Coordinating multi-cloud recovery ops",
      "Validating automated decision logic"
    ]
  },
  {
    id: "bio-digital-identity-guard",
    label: "Bio-Digital Identity Guard",
    title: "Bio-Digital Identity Guard",
    desc: "Secures the next generation of identity systems, protecting biometric and neural data against synthetic spoofing and decentralized identity theft.",
    salary: "₹7L - 15L",
    growth: "+42% YoY",
    skills: [
      "Decentralized Identity (DID)",
      "Biometric Encryption",
      "Zero-Knowledge Proofs",
      "Privacy Engineering",
      "Self-Sovereign Identity"
    ],
    responsibilities: [
      "Designing secure biometric storage",
      "Preventing synthetic-identity fraud",
      "Implementing ZK-proof protocols",
      "Auditing decentralized ID networks",
      "Ensuring regulatory privacy compliance"
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
  },
  {
    year: 4,
    title: "Zero-Day Research & Strategic Defense",
    topics: [
      "Advanced Exploit Development: Kernel & Browser Exploitation",
      "Zero-Day Research: Bug Hunting & Responsible Disclosure",
      "Industrial Control Systems (ICS/SCADA) Security",
      "Cyber Warfare & National Security Strategy",
      "Major Capstone: Building an Autonomous Defense System",
      "Founder Track: Seed Funding & Launching your Security Startup"
    ]
  }
];

const CYBER_TOOLS = [
  { name: "Wireshark", url: "https://cdn.simpleicons.org/wireshark" },
  { name: "Nmap", url: "https://cdn.simpleicons.org/nmap" },
  { name: "Burp Suite", url: "https://cdn.simpleicons.org/burpsuite" },
  { name: "Metasploit", url: "https://cdn.simpleicons.org/metasploit" },
  { name: "Kali Linux", url: "https://cdn.simpleicons.org/kalilinux" },
  { name: "Splunk", url: "https://cdn.simpleicons.org/splunk" },
  { name: "Ghidra", url: "https://cdn.simpleicons.org/ghidra" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker" },
  { name: "AWS", url: "https://cdn.simpleicons.org/amazonwebservices" },
  { name: "Python", url: "https://cdn.simpleicons.org/python" },
];

const ToolMarquee = ({ tools, reverse = false, speed = 80 }: { tools: any[], reverse?: boolean, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden select-none py-2 md:py-3 relative bg-slate-50 border-y border-slate-200">
      <motion.div
        className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...tools, ...tools].map((tool, idx) => (
          <div key={idx} className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-200 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
              <img
                src={tool.url}
                alt={tool.name}
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=128`;
                }}
              />
            </div>
            <span
              className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-400 group-hover:text-slate-800 transition-colors duration-300 font-sans"
            >
              {tool.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Sub-components for better state management (Rules of Hooks)
const WhoIsThisForCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-emerald-500/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)] transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
          <item.icon size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-slate-400 tracking-widest">{item.num}</span>
            <h3 className="text-xl font-bold text-[#031a57] font-serif">
              <DecryptText text={item.title} parentHover={isHovered} />
            </h3>
          </div>
          <p className="text-slate-600 leading-relaxed font-normal text-sm">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MilestoneCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-500/20 transition-all duration-300"
    >
      <div className="h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-500" />
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-500/20 transition-colors">{item.num}</span>
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">{item.highlight}</span>
        </div>
        <h4 className="text-lg font-bold text-[#031a57] font-serif mb-2">
          <DecryptText text={item.highlight} parentHover={isHovered} />
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">{item.text}</p>
      </div>
    </motion.div>
  );
};

export function CyberClient() {
  const [duration, setDuration] = useState<3 | 4>(3);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-800 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
      <Navbar />

      {/* 1. TOP BANNER IMAGE SECTION */}
      <section className="relative h-[260px] md:h-[380px] mt-16 flex items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{
            __html: `
            .school-title-white {
                color: #ffffff !important;
            }
            .school-tag-white {
                color: #ffffff !important;
                border-color: rgba(255, 255, 255, 0.2) !important;
                background-color: rgba(255, 255, 255, 0.1) !important;
            }
            `
        }} />
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="/images/school-cybersecurity.png" 
            alt="School of Cyber Security" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            School of Deep Tech
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
            School of Cyber Security
          </h1>
        </div>
      </section>

      {/* Introduction & Overview Section with Floating Specs Card */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
        <section className="bg-white p-8 sm:p-12 md:p-16 text-[#031a57]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
              {/* Left: Intro & Toggles */}
              <div className="max-w-3xl">
                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Defense & Operations</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#031a57] font-serif mb-6 leading-tight">
                  Defend the digital frontier. Build the future of trust.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
                  A {duration}-year immersive degree merging Offensive & Defensive Security. <br />
                  <span className="text-[#031a57] font-medium">Graduate battle-ready for distributed cloud defense, kernel auditing, and real-world intelligence ops.</span>
                </p>

                {/* Duration Toggle */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setDuration(3)}
                    className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                      duration === 3 
                        ? 'bg-[#002f86] text-white shadow-lg shadow-blue-900/25 scale-105' 
                        : 'bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    3-Year Program
                  </button>
                  <button
                    onClick={() => setDuration(4)}
                    className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                      duration === 4 
                        ? 'bg-[#002f86] text-white shadow-lg shadow-blue-900/25 scale-105' 
                        : 'bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    4-Year Program
                  </button>
                </div>
              </div>

              {/* Right: Info Boxes in clean grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] min-w-full lg:min-w-[340px]">
                {/* Degrees */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Available Degrees</p>
                  <div className="space-y-1.5 border-l-2 border-emerald-500 pl-4">
                    <p className="text-sm font-bold text-[#031a57]">{duration === 3 ? "B.Sc in Cyber Security" : "B.Tech in Cyber Security"}</p>
                  </div>
                </div>

                {/* Partners */}
                {duration === 3 && (
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Partner Institutions</p>
                    <div className="space-y-1.5 border-l-2 border-cyan-500 pl-4">
                      <p className="text-sm font-bold text-[#031a57]">Keshava Degree College</p>
                    </div>
                  </div>
                )}

                {/* Certifications */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Industry Credentials</p>
                  <div className="flex gap-4 border-l-2 border-purple-500 pl-4 items-center">
                    <div>
                      <span className="text-sm font-extrabold text-blue-600 tracking-wider block leading-none">FCEP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Executive</span>
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-cyan-600 tracking-wider block leading-none">FCIP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Practitioner</span>
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-purple-600 tracking-wider block leading-none">FFP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Professional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details specs block (nested inside card) */}
        <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Length</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">{duration}-Year Full-Time</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">On-Campus, Immersive</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Campus Location</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">Hyderabad, India</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Cohort Status</p>
              <p className="text-base sm:text-lg font-bold text-emerald-600">Admissions Closed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-[#002f86] text-white border border-[#002f86] font-bold rounded-xl hover:bg-[#002f86]/90 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,47,134,0.15)] whitespace-nowrap text-sm">
              Apply Now
            </Link>
            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-white text-slate-750 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all hover:scale-[1.02] whitespace-nowrap text-sm">
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* 1. OVERVIEW */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <section id="overview" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-4 font-mono">Program Overview</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 leading-tight tracking-tight">
                  Built for the <br />
                  <span className="text-emerald-600 font-serif">Digital Battlefield.</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 font-light">
                  The Foundry&apos;s {duration}-year Cybersecurity program trains you to think like an attacker, defend like an architect, and lead like a strategist. From kernel hacking to red teaming — you graduate battle-ready for the real world.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Penetration Testing", "Red Teaming", "Malware Analysis", "Cloud Security", "AI Security", "Digital Forensics"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 transition-colors cursor-default select-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { value: duration.toString(), unit: "Years", label: "Full-time immersive program" },
                  { value: (duration * 2).toString(), unit: "Semesters", label: "Progressive skill building" },
                  { value: "100%", unit: "Hands-on", label: "Lab-based from day one" },
                  { value: "CTF", unit: "Weekly", label: "Capture The Flag challenges" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/50 shadow-sm text-center transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-[#031a57] mb-1 tracking-tight font-serif">{stat.value}</div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 font-mono">{stat.unit}</div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Who Is This For Section */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="mb-14">
              <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Built for defenders & breakers</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif">Who Is This For</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Future Security Engineers", desc: "Class 12 / Intermediate graduates from HEC, MEC, CEC, or MPC streams ready to master the art of cyber defense.", icon: Shield, color: "from-emerald-500 to-cyan-400" },
                { num: "02", title: "Ethical Hackers in the Making", desc: "Students fascinated by how things break — and determined to learn how to fix them before attackers exploit them.", icon: Bug, color: "from-violet-500 to-purple-400" },
                { num: "03", title: "Zero Coding Background", desc: "No prior programming required. We teach you from shell scripts to exploit development, step by step.", icon: Code2, color: "from-amber-500 to-orange-400" },
                { num: "04", title: "Digital Guardians", desc: "Individuals who want to protect critical infrastructure, governments, and enterprises from the next generation of threats.", icon: Lock, color: "from-rose-500 to-red-400" },
              ].map((item, i) => (
                <WhoIsThisForCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* What You'll Achieve Section */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <section className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-14">
              <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Your Transformation</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif">What You&apos;ll Achieve</h2>
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
                <MilestoneCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 2. Eligibility Requirements */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <section id="eligibility" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-5 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#002f86] text-sm font-bold uppercase tracking-[0.3em] mb-6 font-mono">Entry Standards</p>
                  <h2 className="text-4xl md:text-6xl font-bold text-[#031a57] font-serif mb-10 tracking-tight leading-[0.9]">
                    Unlocking <br />
                    <span className="text-slate-400">Potential.</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
                    Admissions at The Foundry prioritized logical clarity over rote memorization. Master the art of defense, regardless of your academic stream or prior technical experience.
                  </p>

                  <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2rem] text-slate-800 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
                    <h3 className="text-2xl font-bold text-[#031a57] font-serif mb-4">Who we look for</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      We seek the <span className="text-[#031a57] font-bold">&quot;misfits&quot;</span> and the <span className="text-[#031a57] font-bold">&quot;builders&quot;</span>—individuals with analytical minds and a passion for solving complex, real-world problems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Analytical", "Precise", "Persistent", "Grit"].map((t) => (
                        <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#002f86] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href="/apply" className="mt-8 inline-flex items-center gap-2 text-[#002f86] font-bold group text-sm">
                      Unlock Potential
                      <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Requirements Grid */}
              <div className="lg:col-span-7 space-y-20">
                {/* Academic Row */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Academic Eligibility</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold border border-blue-100">1</div>
                      <h4 className="text-xl font-bold text-[#031a57] font-serif">Standard Pathway</h4>
                      <ul className="space-y-4 text-slate-600 text-sm font-medium">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                          <span>Grade 12 / Intermediate from any recognized board.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                          <span>HEC, MEC, CEC, or MPC—all streams are eligible.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                          <span>Min. 60% aggregate in core subjects.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold border border-indigo-100">2</div>
                      <h4 className="text-xl font-bold text-[#031a57] font-serif">Global Credentials</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end pb-2 border-b border-slate-200">
                          <span className="text-sm text-slate-500">IB Diploma</span>
                          <span className="font-bold text-[#031a57]">24+ Points</span>
                        </div>
                        <div className="flex justify-between items-end pb-2 border-b border-slate-200">
                          <span className="text-sm text-slate-500">A-Levels</span>
                          <span className="font-bold text-[#031a57]">3 Subjects</span>
                        </div>
                        <p className="text-[10px] text-slate-400 italic">Other vocational boards evaluated case-by-case.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Zero-Gate Row */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-px bg-slate-200 flex-1" />
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Zero-Gate Admissions</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[#031a57]">
                        <Code2 className="text-emerald-600" size={24} />
                        <h4 className="text-lg font-bold font-serif">Zero Code Required</h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        We start from the absolute basics of shell scripting. No prior programming background is required to join.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[#031a57]">
                        <ShieldCheck className="text-indigo-600" size={24} />
                        <h4 className="text-lg font-bold font-serif">Aptitude Over Exams</h4>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Beyond grades, we value your ability to deconstruct complex systems and your persistence in solving puzzles.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. What You Will Study (Curriculum) */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <section id="curriculum" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Academic Map</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-4">What You Will Study</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">From networking fundamentals to zero-day research. Every year builds on the last.</p>
            </div>
            <SyllabusMindMap
              data={CURRICULUM_DATA.filter((item) => item.year <= duration).map(({ year, title, topics }) => ({ period: year, title, topics }))}
              periodLabel="Year"
              hubTitle="CYBER SECURITY"
              theme="emerald"
            />
          </div>
        </section>
      </div>

      {/* INDUSTRIAL SKILLS (TOOL MASTER) */}
      <section id="tool-master" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 py-12 mt-[30px] mb-8 overflow-hidden relative">
        <div className="container mx-auto max-w-6xl relative z-10 px-6 text-center mb-10">
          <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Core Stack</p>
          <h2 className="text-3xl md:text-5xl font-black text-[#031a57] font-serif tracking-tighter mb-4 leading-tight">
            Industrial Skills
          </h2>
        </div>

        <div className="relative py-2 overflow-hidden w-full">
          <div className="flex flex-col gap-1 md:gap-2">
            <ToolMarquee tools={CYBER_TOOLS} reverse={false} speed={40} />
          </div>
        </div>
      </section>

      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <CareerVision
          roles={CAREER_ROLES.map(role => ({
            icon: role.id === "ai-security-analyst" ? Shield :
              role.id === "ml-security-engineer" ? BrainCircuit :
                role.id === "synthetic-threat-analyst" ? Bug :
                  role.id === "cyber-forensics-expert" ? Fingerprint :
                    role.id === "quantum-security-strategist" ? Radar :
                      role.id === "autonomous-incident-orchestrator" ? Siren :
                        role.id === "bio-digital-identity-guard" ? Fingerprint : Shield,
            title: role.title,
            salary: role.salary,
            growth: role.growth,
            desc: role.desc,
            skills: role.skills,
            responsibilities: role.responsibilities
          }))}
          title="What You'll Become"
          subtitle="The roles our graduates are being trained to lead. These aren't jobs — they're missions."
          themeColor="emerald"
          isDark={false}
        />
      </div>

      <Footer />
    </main>
  );
}
