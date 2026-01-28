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
    ArrowUpRight,
    BookOpen,
    BrainCircuit,
    Database,
    Lightbulb,
    ShieldAlert,
    ChevronDown,
    GraduationCap,
    Languages
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Data Storyteller",
        tag: "Data Analysis",
        desc: "Analyze a real-world dataset (e.g., sales or weather) to uncover trends and visualize insights using charts.",
        tech: ["Excel/Sheets", "Basic Statistics", "Data Visualization"]
    },
    {
        title: "House Price Predictor",
        tag: "Machine Learning",
        desc: "Build a simple supervised learning model to predict house prices based on features like size and location.",
        tech: ["Regression", "Scikit-learn (No-code/Low-code)", "Python Basics"]
    },
    {
        title: "Image Classifier Demo",
        tag: "Deep Learning",
        desc: "Train a basic neural network to recognize handwritten digits or clothing items.",
        tech: ["Neural Networks", "Computer Vision", "MNIST Dataset"]
    },
    {
        title: "AI Ethics Auditor",
        tag: "Responsible AI",
        desc: "Analyze a hypothetical AI system for bias and fairness issues, proposing mitigation strategies.",
        tech: ["Ethics Frameworks", "Bias Detection", "Case Study"]
    },
    {
        title: "Smart Content Generator",
        tag: "Generative AI",
        desc: "Use LLMs to generate marketing copy and images, applying prompt engineering best practices.",
        tech: ["ChatGPT/Claude", "Prompt Engineering", "Image Gen"]
    },
    {
        title: "Business AI Proposal",
        tag: "AI Strategy",
        desc: "Identify a business problem and propose an AI-based solution, calculating potential ROI and feasibility.",
        tech: ["Business Strategy", "ROI Analysis", "Feasibility Study"]
    }
];

const CAREER_ROLES = [
    {
        "id": "junior-ai-associate",
        "label": "Junior AI Associate",
        "title": "Junior AI Associate",
        "desc": "Supports AI teams by preparing data, running basic models, and documenting results. A perfect entry point into the field.",
        "salary": "₹6L - ₹12L",
        "growth": "+30% YoY",
        "skills": [
            "AI Fundamentals",
            "Data Handling",
            "Basic Python",
            "Model Evaluation",
            "Documentation"
        ],
        "responsibilities": [
            "Data cleaning and preparation",
            "Running baseline models",
            "Documenting experiments",
            "Assisting senior engineers",
            "Monitoring model performance"
        ]
    },
    {
        "id": "data-analyst",
        "label": "Data Analyst (Entry)",
        "title": "Data Analyst",
        "desc": "Interprets data and turns it into information which can offer ways to improve a business, thus affecting business decisions.",
        "salary": "₹5L - ₹10L",
        "growth": "+25% YoY",
        "skills": [
            "Data Visualization",
            "Statistical Analysis",
            "SQL Basics",
            "Excel/Sheets",
            "Reporting"
        ],
        "responsibilities": [
            "Collecting and interpreting data",
            "Analyzing results",
            "Reporting results back to the relevant members of the business",
            "Identifying patterns and trends in data sets",
            "Defining new data collection and analysis processes"
        ]
    },
    {
        "id": "ai-product-coordinator",
        "label": "AI Product Coordinator",
        "title": "AI Product Coordinator",
        "desc": "Bridges the gap between business needs and technical AI capabilities, helping to manage AI product roadmaps.",
        "salary": "₹8L - ₹15L",
        "growth": "+40% YoY",
        "skills": [
            "Product Management Basics",
            "AI Use Case Identification",
            "Communication",
            "Agile Methodologies",
            "User Research"
        ],
        "responsibilities": [
            "Gathering requirements for AI features",
            "Coordinating between stakeholders and dev teams",
            "Tracking project timelines",
            "Conducting user acceptance testing",
            "Market research"
        ]
    }
];

export default function AIFoundationsTeluguCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/entry-level/ai" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to Entry Level Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold">
                                    <GraduationCap size={16} /> Entry Level Certification
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold">
                                    <Languages size={16} /> Taught in Telugu
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Certified Professional in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">AI Foundations</span>
                                <span className="block text-2xl md:text-3xl mt-2 text-slate-400 font-normal">(Telugu Medium)</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Start your AI journey here. Build a strong conceptual foundation in AI, Machine Learning, and Data Science. <span className="text-amber-400 font-semibold">Taught entirely in Telugu.</span>
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">45 Days</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Telugu • Weekend Hybrid</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/apply" className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-500/25 text-center">
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
                                <span className="text-4xl lg:text-5xl font-bold text-white">₹50,000</span>
                                <span className="text-xl text-slate-500 line-through">₹100,000</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="Live Weekend Classes in Telugu" />
                                <InfoRow text="Beginner Friendly - No Coding Req." />
                                <InfoRow text="Industry Recognized Certification" />
                            </div>

                            <p className="text-slate-500 text-sm font-medium leading-relaxed text-center mt-4">
                                *Flexible EMI options available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Demystify Artificial Intelligence.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            AI is transforming every industry. The Certified Professional in AI Foundations is a <span className="font-bold text-slate-900">45-day program</span> designed for students, fresh graduates, and professionals who want to understand the &quot;Magic&quot; behind the machines.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mt-4">
                            You will move from basic definitions to understanding <span className="font-bold text-slate-900">Neural Networks, Data Science, and Generative AI</span>. This course focuses on building a strong conceptual understanding and practical application, ensuring you are ready for the AI-driven future.
                        </p>
                        <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-4">
                            <Languages className="text-amber-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-amber-900">Why Telugu?</h4>
                                <p className="text-amber-800 text-sm">
                                    Learning complex concepts like Neural Networks and Algorithms is often easier in your native language. This course covers the exact same rigorous curriculum as our English track, but explained in Telugu to ensure deeper understanding and faster mastery.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={BookOpen} title="Conceptual Clarity" desc="Understand the 'Why' and 'How' of AI without getting lost in complex math." />
                        <HighlightCard icon={Database} title="Data Fluency" desc="Learn how data is collected, cleaned, and used to train intelligent systems." />
                        <HighlightCard icon={BrainCircuit} title="ML & DL Basics" desc="Grasp the core concepts of Machine Learning and Deep Learning algorithms." />
                        <HighlightCard icon={Lightbulb} title="Generative AI" desc="Explore the latest in LLMs, prompt engineering, and creative AI tools." />
                        <HighlightCard icon={ShieldAlert} title="Ethics & Safety" desc="Understand the societal impact, bias, and ethical considerations of AI." />
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn by <br /><span className="text-amber-400">Doing.</span></h2>
                            <p className="text-slate-400 text-lg">Theory is important, but practice makes perfect. Apply your knowledge in hands-on mini-projects.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-amber-500" /> Practical Experience
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
                        Concepts You&apos;ll Master
                    </h2>
                    <p className="text-slate-400">
                        The building blocks of modern AI
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
                            <span>Machine Learning</span> <span>&bull;</span>
                            <span>Deep Learning</span> <span>&bull;</span>
                            <span>Neural Networks</span> <span>&bull;</span>
                            <span>Data Science</span> <span>&bull;</span>
                            <span>Statistics</span> <span>&bull;</span>
                            <span>Python Basics</span> <span>&bull;</span>
                            <span>Computer Vision</span> <span>&bull;</span>
                            <span>NLP</span> <span>&bull;</span>
                            <span>Generative AI</span> <span>&bull;</span>
                            <span>Prompt Engineering</span> <span>&bull;</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Curriculum */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <p className="text-lg text-slate-600">A structured 45-day journey from basics to capstone.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Phase 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-amber-100">01</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Foundations of AI & Data</h3>
                                    <p className="text-slate-500">Focus: Understanding the core concepts of AI, Computing, and Data.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 1" title="Foundations of AI & Computing" topics={["Introduction to AI & History", "How Computers Think (Algorithms)", "Types of AI (Narrow vs General)", "AI in Everyday Life"]} />
                                <WeekCard week="Week 2" title="Data Foundations for AI" topics={["Structured vs Unstructured Data", "Data Collection & Quality", "Introduction to Statistics", "Data Visualization"]} />
                                <WeekCard week="Week 3" title="Machine Learning Fundamentals" topics={["Supervised vs Unsupervised Learning", "Regression & Classification", "Clustering", "Model Evaluation Metrics"]} />
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-amber-100">02</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Deep Learning & Applications</h3>
                                    <p className="text-slate-500">Focus: Neural Networks, Modern Tools, and Responsible AI.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 4" title="Deep Learning & Neural Networks" topics={["Biological vs Artificial Neurons", "CNNs & RNNs", "Intro to Transformers", "Limitations of Deep Learning"]} />
                                <WeekCard week="Week 5" title="AI Applications & Tools" topics={["AI Development Stack", "Generative AI & LLMs", "Prompt Engineering Basics", "AI in Business & ROI"]} />
                                <WeekCard week="Week 6" title="Ethics, Governance & Responsible AI" topics={["Bias & Fairness", "Privacy & Security", "Explainable AI", "Future of AI & Careers"]} />
                                <WeekCard week="Final Phase" title="Capstone & Certification" topics={["Capstone Project Planning", "Execution & Solution Design", "Final Presentation & Certification Exam"]} />
                            </div>
                        </div>
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
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Prove your knowledge. Earn a certificate that validates your understanding of AI fundamentals and your ability to apply them in real-world scenarios.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-amber-100 text-amber-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-orange-100 text-orange-600"><CheckCircle2 size={16} /></div>
                                    Gateway to Advanced AI Careers
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
                            This course opens doors to entry-level roles and prepares you for further specialization.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-amber-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-amber-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-amber-500" : ""}`}
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
                                            ? "bg-white border-amber-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-amber-600" : "text-slate-700"}`}>
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
                        <FAQItem question="Is the curriculum different from the English batch?" answer="No. The curriculum, projects, and certification are exactly the same. The only difference is the language of instruction." />
                        <FAQItem question="Will the materials/slides be in Telugu?" answer="The slides and code will be in English (standard industry practice), but the spoken explanation and Q&A will be in Telugu." />
                        <FAQItem question="Do I need any programming experience?" answer="No. This course is designed for absolute beginners. We introduce programming concepts conceptually and use no-code/low-code tools where possible." />
                        <FAQItem question="Is this course suitable for non-technical backgrounds?" answer="Yes! Whether you are in marketing, sales, HR, or finance, understanding AI is crucial. This course explains AI in plain English (and Telugu!)." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to start your AI journey?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join the next cohort and build your foundation in Artificial Intelligence.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-amber-600 text-white rounded-full font-bold text-xl hover:bg-amber-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
            <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

function HighlightCard({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function WeekCard({ week, title, topics }: { week: string, title: string, topics: string[] }) {
    return (
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{week}</div>
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
                <div className="inline-block px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 text-xs font-bold mb-4 border border-amber-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
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
