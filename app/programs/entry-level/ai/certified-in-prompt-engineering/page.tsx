"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Clock,
    Award,
    ArrowUpRight,
    ShieldCheck,
    Briefcase,
    ChevronDown,
    MessageSquare,
    Sparkles,
    Zap,
    Workflow
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Smart Email Assistant",
        tag: "Productivity",
        desc: "A personalized email drafting tool that adapts to your writing style and tone using few-shot prompting techniques.",
        tech: ["OpenAI API", "Few-Shot Prompting", "Streamlit"]
    },
    {
        title: "Legal Doc Analyzer",
        tag: "Data Extraction",
        desc: "Extract structured data (dates, parties, clauses) from complex legal contracts using advanced structured output prompting.",
        tech: ["JSON Mode", "Chain-of-Thought", "Python"]
    },
    {
        title: "Support Agent Pro",
        tag: "Customer Service",
        desc: "A customer support bot with strict guardrails and personality guidelines, capable of handling escalation protocols.",
        tech: ["Role Prompting", "Guardrails", "Evaluation"]
    },
    {
        title: "Creative Studio",
        tag: "Generative Art",
        desc: "A suite of optimized prompts for Midjourney and DALL-E 3 to generate consistent character assets for games.",
        tech: ["Image Generation", "Midjourney", "DALL-E 3"]
    },
    {
        title: "Code Refactor Bot",
        tag: "Developer Tools",
        desc: "An automated code reviewer that suggests improvements, writes tests, and documents legacy code.",
        tech: ["Code Generation", "Documentation", "Testing"]
    },
    {
        title: "Marketing Omni-Mind",
        tag: "Marketing",
        desc: "End-to-end campaign generator: Blog posts, social media captions, and ad visuals from a single product description.",
        tech: ["Multi-Modal", "Chaining", "Content Strategy"]
    }
];

const CAREER_ROLES = [
    {
        "id": "prompt-engineer",
        "label": "Prompt Engineer",
        "title": "Prompt Engineer",
        "desc": "Specializes in crafting, refining, and optimizing text inputs (prompts) to get the most accurate and relevant outputs from Generative AI models.",
        "salary": "₹12L - ₹25L",
        "growth": "+65% YoY",
        "skills": [
            "Prompt Design",
            "LLM Architecture",
            "Python Basics",
            "API Integration",
            "Data Analysis",
            "A/B Testing"
        ],
        "responsibilities": [
            "Designing and testing prompt strategies",
            "Optimizing model outputs for accuracy",
            "Building prompt libraries",
            "Collaborating with developers",
            "Monitoring AI performance"
        ]
    },
    {
        "id": "ai-content-specialist",
        "label": "AI Content Specialist",
        "title": "AI Content Specialist",
        "desc": "Leverages AI tools to produce high-quality content at scale, blending human creativity with machine efficiency.",
        "salary": "₹8L - ₹18L",
        "growth": "+40% YoY",
        "skills": [
            "Content Strategy",
            "Copywriting",
            "SEO",
            "Generative AI Tools",
            "Editing & Fact-Checking"
        ],
        "responsibilities": [
            "Generating blog posts and articles",
            "Creating social media campaigns",
            "Editing AI-generated content",
            "Managing content workflows",
            "Ensuring brand consistency"
        ]
    },
    {
        "id": "ai-ops-specialist",
        "label": "AI Operations Specialist",
        "title": "AI Operations Specialist",
        "desc": "Focuses on the operational side of AI implementation, ensuring workflows are efficient, ethical, and scalable.",
        "salary": "₹10L - ₹22L",
        "growth": "+50% YoY",
        "skills": [
            "Workflow Automation",
            "Quality Assurance",
            "Tool Integration",
            "Process Optimization",
            "Data Privacy"
        ],
        "responsibilities": [
            "Managing AI tool stacks",
            "Overseeing quality control",
            "Implementing safety protocols",
            "Training teams on AI usage",
            "Optimizing operational costs"
        ]
    }
];

export default function PromptEngineeringCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);

        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/entry-level/ai" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to AI Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
                                <Award size={16} /> Professional Certification
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Certified in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Prompt Engineering</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Master the language of AI. Learn to design, optimize, and deploy advanced prompts to build powerful applications and workflows.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">2 Weeks</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Hybrid</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://compass.thefoundrys.com/courses/ai/certified-in-prompt-engineering" className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 text-center">
                                    Enroll Now
                                </Link>
                                <Link href="#overview" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center">
                                    Explore Course
                                </Link>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-10">
                            <h3 className="text-white text-xl font-bold mb-6">Program Fee</h3>
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white">₹10,000</span>
                                <span className="text-xl text-slate-500 line-through">₹20,000</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="Hybrid" />
                                <InfoRow text="Hands-on Projects & Portfolio" />
                                <InfoRow text="Industry Recognized Certification" />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Unlock the true potential of AI.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            AI models are only as good as the instructions you give them. The Certified Professional in Prompt Engineering is a comprehensive <span className="font-bold text-slate-900">2 Weeks program</span> designed to turn you into an expert AI communicator.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mt-4">
                            You will move beyond simple queries to mastering <span className="font-bold text-slate-900">Chain-of-Thought reasoning, few-shot prompting, and agentic workflows</span>. Whether you are a developer, writer, or product manager, this course will empower you to build reliable, high-quality AI systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={MessageSquare} title="Advanced Techniques" desc="Master Zero-shot, Few-shot, Chain-of-Thought, and Tree-of-Thoughts prompting." />
                        <HighlightCard icon={Zap} title="Model Optimization" desc="Learn to reduce hallucinations, improve accuracy, and lower API costs." />
                        <HighlightCard icon={Briefcase} title="Build a Portfolio" desc="Create 6 real-world projects, from chatbots to automated content engines." />
                        <HighlightCard icon={ShieldCheck} title="AI Safety & Ethics" desc="Understand bias mitigation, prompt injection defense, and responsible AI." />
                        <HighlightCard icon={Sparkles} title="Multi-Modal AI" desc="Work with image generation (Midjourney, DALL-E) and audio models." />
                        <HighlightCard
                            icon={Workflow}
                            title="Agentic Thinking & Workflow Design"
                            desc="Design multi-step, goal-driven AI workflows using agents, tools, and structured reasoning."
                        />
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Real <br /><span className="text-purple-400">AI Applications.</span></h2>
                            <p className="text-slate-400 text-lg">Theory is not enough. You will build and deploy functional AI tools that solve real problems.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-purple-500" /> Production-Ready Skills
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

            {/* Skills */}
            <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
                <div className="container mx-auto px-6 mb-16 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-slate-400">
                        Master the modern AI stack
                    </p>
                </div>

                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap will-change-transform mb-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 120,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-center gap-12 text-slate-400 font-bold text-2xl uppercase tracking-widest"
                        >
                            <span>OpenAI API</span> <span>&bull;</span>
                            <span>Anthropic Claude</span> <span>&bull;</span>
                            <span>Midjourney</span> <span>&bull;</span>
                            <span>LangChain</span> <span>&bull;</span>
                            <span>Hugging Face</span> <span>&bull;</span>
                            <span>Python</span> <span>&bull;</span>
                            <span>Streamlit</span> <span>&bull;</span>
                            <span>JSON Mode</span> <span>&bull;</span>
                            <span>Playground</span> <span>&bull;</span>
                            <span>Llama 3</span> <span>&bull;</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Curriculum */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <p className="text-lg text-slate-600">A structured path to prompt engineering mastery.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <WeekCard week="Week 1 - Part 1" title="Foundations & Core Mechanics" topics={["How LLMs Work & Capabilities", "Zero-shot & Few-shot Prompting", "Role-Based Prompting Strategies"]} />
                        <WeekCard week="Week 1 - Part 2" title="Advanced Reasoning & Reliability" topics={["Chain-of-Thought (CoT) & Tree-of-Thoughts", "Hallucination Mitigation & Defense", "Structured Outputs (JSON/XML) & APIs"]} />
                        <WeekCard week="Week 2 - Part 1" title="Multi-Modal AI & Operations" topics={["Vision Models & Image Generation", "Evaluation Frameworks & A/B Testing", "Optimizing Prompts for Cost & Speed"]} />
                        <WeekCard week="Week 2 - Part 2" title="Agents & Capstone Deployment" topics={["Agentic Workflows (ReAct, Planning)", "Tool Use & Function Calling", "End-to-End Application Deployment"]} />
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
                                    src="/sample-certificate.png"
                                    alt="Foundry Professional Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Prove your expertise. Receive a verifiable digital certificate that demonstrates your ability to harness the power of Generative AI professionally.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-pink-100 text-pink-600"><CheckCircle2 size={16} /></div>
                                    Validates Practical Skills
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who you can become</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Prompt Engineering is one of the fastest-growing skill sets. Prepare for the roles of tomorrow.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-purple-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-purple-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-purple-500" : ""}`}
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
                                                        <RoleDetailsContent role={role} />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:flex w-full flex-row gap-8 items-start">
                            <div className="w-1/3 flex flex-col gap-2">
                                {CAREER_ROLES.map((role) => (
                                    <button
                                        key={role.id}
                                        onMouseEnter={() => setActiveRole(role)}
                                        onClick={() => setActiveRole(role)}
                                        className={`text-left p-4 rounded-xl transition-all duration-200 border ${activeRole.id === role.id
                                            ? "bg-white border-purple-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-purple-600" : "text-slate-700"}`}>
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
                                        <RoleDetailsContent role={activeRole} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <FAQItem question="Do I need coding experience?" answer="Basic familiarity with computers is required. While we touch on Python for API usage, the core focus is on English-language prompting. We provide templates for any code needed." />
                        <FAQItem question="Is this course relevant for non-technical roles?" answer="Absolutely. Product Managers, Marketers, and Writers will benefit immensely. We teach you how to integrate AI into your specific workflows." />
                        <FAQItem question="What tools will we use?" answer="We primarily use OpenAI's GPT-4, Anthropic's Claude, and Midjourney. We also explore open-source models and tools like LangChain for more advanced users." />
                        <FAQItem question="How is this different from watching YouTube tutorials?" answer="YouTube gives you tips; we give you a system. You will learn the underlying principles of LLMs, how to evaluate them, and how to build reliable production-grade workflows, not just 'cool tricks'." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to master the future of work?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join the next cohort and become a Certified Professional in Prompt Engineering.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 text-white rounded-full font-bold text-xl hover:bg-purple-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Start Application <ArrowUpRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function InfoRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-purple-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function WeekCard({ week, title, topics }: { week: string, title: string, topics: string[] }) {
    return (
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 transition-colors">
            <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">{week}</div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
            <ul className="space-y-2">
                {topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ProjectCard({ number, title, tag, desc, tech }: { number: string, title: string, tag: string, desc: string, tech: string[] }) {
    return (
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50 text-slate-600 text-6xl font-bold select-none -z-0">
                {number}
            </div>
            <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold mb-4 border border-purple-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
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
