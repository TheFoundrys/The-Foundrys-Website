"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Award,
    ArrowUpRight,
    Terminal,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ServerCog,
    ChevronDown,
    Lock,
    Shield,
    Fingerprint,
    Search,
    Network,
    FileSpreadsheet,
    Siren,
    Activity,
    Radar
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Vulnerability Lab",
        tag: "Exposure Mgmt",
        desc: "Conduct an automated vulnerability assessment using industry-standard tools. Identify high-risk gaps and author a professional remediation roadmap.",
        tech: ["Nessus", "OpenVAS", "Report Writing", "Risk Scoring"]
    },
    {
        title: "Traffic Analyst",
        tag: "Network Defense",
        desc: "Analyze live network traffic and PCAP files to identify malicious signatures, brute-force attempts, and unauthorized data exfiltration.",
        tech: ["Wireshark", "Tshark", "TCP/IP", "Protocol Analysis"]
    },
    {
        title: "Hardened Perimeter",
        tag: "Infrastructure",
        desc: "Design and implement a secure network perimeter using pfSense. Configure DMZs, NAT, and stateful firewall rules to defend against perimeter breach.",
        tech: ["pfSense", "Firewall Rules", "DMZ", "IDS/IPS"]
    },
    {
        title: "IAM Guard",
        tag: "Access Control",
        desc: "Implement a Least Privilege access model for an enterprise environment. Design Role-Based Access Control (RBAC) and Multi-Factor Auth workflows.",
        tech: ["Active Directory", "RBAC", "MFA", "System Audit"]
    },
    {
        title: "SOC Threat Hunt",
        tag: "SecOps",
        desc: "Operate within a simulated SOC. Use SIEM logs to correlate events, detect lateral movement, and hunt for sophisticated insider threats.",
        tech: ["Splunk", "ELK Stack", "Log Analysis", "Correlation"]
    },
    {
        title: "Response Playbook",
        tag: "Recovery",
        desc: "Create and test an Incident Response playbook for a ransomware simulation. Document the containment, eradication, and recovery lifecycle.",
        tech: ["IR Planning", "Documentation", "BCP/DR", "NIST Framework"]
    }
];

const CAREER_ROLES = [
    {
        "id": "security-analyst",
        "label": "Security Analyst",
        "title": "Cyber Security Analyst",
        "desc": "Monitors organizational networks for security breaches and investigates a violation when one occurs. Installs and uses software, such as firewalls and data encryption programs, to protect sensitive information.",
        "salary": "₹8L - ₹18L",
        "growth": "+35% YoY",
        "skills": [
            "Network Monitoring",
            "Vulnerability Assessment",
            "Firewall Management",
            "Incident Reporting",
            "System Hardening"
        ],
        "responsibilities": [
            "Monitoring networks for security breaches",
            "Investigating security violations",
            "Developing security standards and best practices",
            "Conducting penetration testing",
            "Authoring security reports"
        ]
    },
    {
        "id": "soc-analyst",
        "label": "SOC Analyst",
        "title": "SOC Analyst (Level 1/2)",
        "desc": "Front-line defender in a Security Operations Center. Responsible for real-time monitoring, triage of security alerts, and initial incident response.",
        "salary": "₹6L - ₹15L",
        "growth": "+40% YoY",
        "skills": [
            "SIEM tools (Splunk, QRadar)",
            "Log Analysis",
            "Incident Triage",
            "Threat Intelligence",
            "Ticketing Systems"
        ],
        "responsibilities": [
            "Reviewing and analyzing security alerts",
            "Escalating critical incidents to Level 3",
            "Analyzing email headers for phishing",
            "Conducting basic forensic investigation",
            "Optimizing SIEM alert rules"
        ]
    },
    {
        "id": "entry-pentester",
        "label": "Junior Penetration Tester",
        "title": "Junior Penetration Tester",
        "desc": "Assists in finding security vulnerabilities in target systems, networks, and applications through simulated attacks.",
        "salary": "₹7L - ₹16L",
        "growth": "+45% YoY",
        "skills": [
            "Metasploit Fundamentals",
            "Burp Suite",
            "Scripting (Python/Bash)",
            "Web App Security",
            "OSINT"
        ],
        "responsibilities": [
            "Performing vulnerability scans",
            "Assisting in manual exploitation",
            "Researching zero-day exploits",
            "Testing API and mobile app security",
            "Documenting technical findings"
        ]
    },
    {
        "id": "it-compliance",
        "label": "Compliance Specialist",
        "title": "GRC & Compliance Associate",
        "desc": "Ensures that the organization meets regulatory and industry requirements. Focuses on frameworks like ISO 27001, GDPR, and SOC2.",
        "salary": "₹9L - ₹20L",
        "growth": "+30% YoY",
        "skills": [
            "ISO 27001 / NIST",
            "Risk Management",
            "Policy Writing",
            "Internal Auditing",
            "Data Privacy"
        ],
        "responsibilities": [
            "Developing security policies",
            "Performing internal security audits",
            "Managing third-party risk assessments",
            "Ensuring GDPR/HIPAA compliance",
            "Liaising with legal teams"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "Security Governance & Fundamental Principles",
        topics: [
            "Module 1: The Core Security Framework",
            "Module 2: Governance & Compliance",
            "Module 3: Risk Management Lifecycle",
            "Module 4: Security Policy & Ethics",
            "Module 5: Access Control Models"
        ]
    },
    {
        week: 2,
        title: "Network Defense & Architecture",
        topics: [
            "Module 1: Advanced Protocols & OSI",
            "Module 2: Perimeter Security",
            "Module 3: Intrusion Detection & Prevention",
            "Module 4: Network Segmentation & Zero Trust",
            "Module 5: Virtualization & Software Defined Networking"
        ]
    },
    {
        week: 3,
        title: "Reconnaissance & Vulnerability Assessment",
        topics: [
            "Module 1: Intelligence Gathering & OSINT",
            "Module 2: Active Scanning Techniques",
            "Module 3: Enumeration & Banner Grabbing",
            "Module 4: Vulnerability Management",
            "Module 5: Social Engineering Tactics"
        ]
    },
    {
        week: 4,
        title: "Exploitation & System Hacking",
        topics: [
            "Module 1: The Attack Lifecycle",
            "Module 2: Password & Authentication Attacks",
            "Module 3: Privilege Escalation",
            "Module 4: Post-Exploitation & Persistence",
            "Module 5: Mobile & IoT Hacking"
        ]
    },
    {
        week: 5,
        title: "Application, Web, & Cloud Security",
        topics: [
            "Module 1: Web Application Attacks",
            "Module 2: Secure Software Development (DevSecOps)",
            "Module 3: Cloud Infrastructure Security",
            "Module 4: Container & API Security",
            "Module 5: Wireless & Radio Frequency Security"
        ]
    },
    {
        week: 6,
        title: "Defensive Operations & Incident Mastery",
        topics: [
            "Module 1: Cryptographic Solutions",
            "Module 2: Security Operations Center (SOC) Tools",
            "Module 3: Incident Response (IR) Planning",
            "Module 4: Digital Forensics Basics",
            "Module 5: Disaster Recovery & Business Continuity"
        ]
    }
];

function CurriculumTabs() {
    const [activeWeek, setActiveWeek] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.week === activeWeek);

    return (
        <div className="space-y-8">
            {/* Week Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.week}
                        onClick={() => setActiveWeek(item.week)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeWeek === item.week
                            ? 'bg-emerald-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Week {item.week}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeWeek}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                            Week {activeContent?.week}
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

export default function CertifiedInCybersecurityPage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.certifiedInCybersecurity;

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <ShieldCheck size={16} />
                            <span>Foundational Certification Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified in <br />
                            <span className="text-emerald-400 italic">Cybersecurity (CC)</span>
                        </h1>

                        <p className="text-lg md:text-xl text-emerald-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Kickstart your career with the prestigious (ISC)² CC certification. Master the 5 domains of cybersecurity and prove your skills in the digital battlefield.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-emerald-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>(ISC)² Alignment</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>Guided Hands-on Labs</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>Exam Readiness Training</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-16 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">6 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">Immediate</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">{symbol}{pricing.original[currency]}</span>
                                    <span className="text-lg font-bold text-slate-900">{symbol}{pricing.freshers[currency]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="/enroll/certified-in-cybersecurity" className="block w-full text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why This Program Exists + Who It's For */}
            <section className="py-12 md:py-4 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        {/* Left: Why This Program Exists */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Why This Program Exists</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                The world needs 3M+ cybersecurity professionals right now.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-rose-400 bg-rose-50/50 p-5">
                                    <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-2">The Talent Gap</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Cyber threats are scaling faster than human defenders. Organizations are desperate for individuals who understand foundation-level security.
                                    </p>
                                </div>

                                <div className="border-l-4 border-emerald-400 bg-emerald-50/50 p-5">
                                    <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2">The (ISC)² Standard</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        The CC is the global benchmark for entry-level talent. It shows you&apos;re serious about a career in digital defense.
                                    </p>
                                </div>

                                <div className="border-l-4 border-teal-400 bg-teal-50/50 p-5">
                                    <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wider mb-2">Practical Readiness</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Theoretical knowledge isn&apos;t enough. This program ensures you can <span className="font-semibold text-emerald-900">actually use tools</span> liked Wireshark and Nmap.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Who This Program Is For */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For the curious minds who want to protect the digital frontier.
                            </p>

                            <div className="space-y-2">
                                {[
                                    { title: "IT Beginners", desc: "Individuals looking to start a career in IT with a security-first mindset.", icon: Terminal },
                                    { title: "Career Switchers", desc: "Professionals from other fields moving into the high-growth cyber industry.", icon: Fingerprint },
                                    { title: "Computer Science Students", desc: "Students wanting to complement their degree with a globally recognized certification.", icon: Code2 },
                                    { title: "Future Security Leaders", desc: "Entrepreneurs and leaders who need to understand security to build resilient companies.", icon: Shield }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                                        <div className="shrink-0">
                                            <item.icon size={24} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base font-serif text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Global Standard Curriculum
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Aligned with the 5 domains of the (ISC)² Certified in Cybersecurity (CC) certification
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Tech Stack Scroll */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Master the Cyber Arsenal
                        </h2>
                        <p className="text-slate-400">Get hands-on experience with industry-standard security tools</p>
                    </div>

                    <div className="relative overflow-hidden flex gap-8 py-10">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear"
                            }}
                            style={{ width: "max-content" }}
                        >
                            {[
                                { name: "Snort", url: "/logos/snort.png" },
                                { name: "Wireshark", url: "/logos/wireshark.png" },
                                { name: "Splunk", url: "/logos/splunk.png" },
                                { name: "pfSense", url: "/logos/pfsense.png" },
                                { name: "Nmap", url: "/logos/nmap.png" },
                                { name: "Metasploit", url: "/logos/metasploit.png" },
                                { name: "Nessus", url: "/logos/nessus.png" },
                                { name: "Suricata", url: "/logos/suricata.png" }
                            ].concat([
                                { name: "Snort", url: "/logos/snort.png" },
                                { name: "Wireshark", url: "/logos/wireshark.png" },
                                { name: "Splunk", url: "/logos/splunk.png" },
                                { name: "pfSense", url: "/logos/pfsense.png" },
                                { name: "Nmap", url: "/logos/nmap.png" },
                                { name: "Metasploit", url: "/logos/metasploit.png" },
                                { name: "Nessus", url: "/logos/nessus.png" },
                                { name: "Suricata", url: "/logos/suricata.png" }
                            ]).map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl h-24 w-40 flex flex-col items-center justify-center p-4 gap-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                                >
                                    <img
                                        src={logo.url}
                                        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                                        alt={logo.name}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=' + logo.name;
                                        }}
                                    />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{logo.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
                                <Image
                                    src="/images/cc_sample_final.png"
                                    alt="Certified in Cybersecurity Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Globally Recognized Benchmark</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                The (ISC)² CC proves you have the knowledge and skills for entry-level cybersecurity roles. It is the first step towards the legendary CISSP.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                                    Verified Skills by (ISC)²
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-teal-100 text-teal-600"><CheckCircle2 size={16} /></div>
                                    Accepted by Government & Corporate Orgs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Roles */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Launch Your Career</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            The CC opens doors to foundational roles in the cybersecurity ecosystem.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Desktop Layout Only for brevity in template use, but usually keeping parity */}
                        <div className="hidden lg:flex w-full flex-row gap-8 items-start">
                            <div className="w-1/3 flex flex-col gap-2">
                                {CAREER_ROLES.map((role) => (
                                    <button
                                        key={role.id}
                                        onMouseEnter={() => setActiveRole(role)}
                                        onClick={() => setActiveRole(role)}
                                        className={`text-left p-4 rounded-xl transition-all duration-200 border ${activeRole.id === role.id
                                            ? "bg-white border-emerald-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-emerald-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                    </button>
                                ))}
                            </div>

                            <div className="w-2/3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeRole.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl min-h-[420px]"
                                    >
                                        <RoleDetailsContent role={roleMapper(activeRole)} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile Accordion */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-emerald-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-emerald-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-emerald-500" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {activeRole.id === role.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="p-4 pt-0 border-t border-slate-100">
                                                    <div className="pt-4">
                                                        <RoleDetailsContent role={roleMapper(role)} />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Battle-Hardened <br /><span className="text-emerald-400">Security Labs.</span></h2>
                            <p className="text-slate-400 text-lg">Don&apos;t just read about threats. Defend against them in our immersive virtual labs.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <Shield size={16} className="text-emerald-500" /> NIST Privacy Framework
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                number={`0${index + 1}`}
                                title={project.title}
                                tag={project.tag}
                                desc={project.desc}
                                tech={project.tech}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Program FAQ</h2>
                    <div className="space-y-6">
                        <FAQItem question="What is the (ISC)² CC?" answer="The Certified in Cybersecurity (CC) is an entry-level certification from (ISC)², the same organization that offers the world-renowned CISSP. It is designed for those looking to start a career in cybersecurity." />
                        <FAQItem question="Do I need to pay for the actual exam separately?" answer="The course fee includes comprehensive training and mock exams. The actual (ISC)² CC exam fee may vary based on local promotions from (ISC)², and we guide you through the process of registering for it." />
                        <FAQItem question="Is this course suitable for non-technical backgrounds?" answer="Absolutely! Cybersecurity is about logic, risk management, and systems thinking. While we teach the technical side, the CC is designed to be accessible to everyone." />
                        <FAQItem question="What kind of jobs will I be eligible for?" answer="Graduates typically pursue roles like Security Analyst, SOC Analyst (Level 1), IT Support Specialist with a security focus, and Compliance Associate." />
                        <FAQItem question="Is there any post-course support?" answer="Yes! We provide placement assistance, LinkedIn profile optimization, and guidance on your next advanced certifications like CCNA Security or OSCP." />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Helpers
function roleMapper(role: any) {
    return {
        title: role.title,
        desc: role.desc,
        salary: role.salary,
        growth: role.growth,
        skills: role.skills,
        responsibilities: role.responsibilities
    };
}

function ProjectCard({ number, title, tag, desc, tech }: { number: string, title: string, tag: string, desc: string, tech: string[] }) {
    return (
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50 text-slate-600 text-6xl font-bold select-none -z-0">
                {number}
            </div>
            <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold mb-4 border border-emerald-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm h-20">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-400 text-xs">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                aria-expanded={isOpen}
            >
                <h4 className="text-lg font-bold text-slate-900 pr-8">{question}</h4>
                <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
