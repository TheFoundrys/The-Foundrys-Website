"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    CheckCircle2,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    Rocket,
    BrainCircuit,
    Database,
    Bot,
    Layers,
    LineChart,
    PieChart,
    Table
} from "lucide-react";
import Link from "next/link";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";
import { ProgramStats } from "./program-stats";
import { WhyUs } from "./why-us";

const TOOLS = [
    { name: "pandas", cat: "Data & ML", color: "#150458", url: "https://cdn.simpleicons.org/pandas" },
    { name: "NumPy", cat: "Data & ML", color: "#013243", url: "https://cdn.simpleicons.org/numpy" },
    { name: "Scikit-learn", cat: "Data & ML", color: "#F7931E", url: "https://cdn.simpleicons.org/scikitlearn" },
    { name: "Tableau", cat: "Visualization", color: "#E97627", url: "https://cdn.simpleicons.org/tableau" },
    { name: "Power BI", cat: "Visualization", color: "#F2C811", url: "https://cdn.simpleicons.org/powerbi" },
    { name: "SQL", cat: "Data", color: "#336791", url: "https://cdn.simpleicons.org/postgresql" },
    { name: "Apache Spark", cat: "Big Data", color: "#E25A1C", url: "https://cdn.simpleicons.org/apachespark" },
    { name: "Snowflake", cat: "Data", color: "#29B5E8", url: "https://cdn.simpleicons.org/snowflake" },
    { name: "R", cat: "Stats", color: "#276DC3", url: "https://cdn.simpleicons.org/r" },
    { name: "Plotly", cat: "Visualization", color: "#3F4F75", url: "https://cdn.simpleicons.org/plotly" },
    { name: "D3.js", cat: "Visualization", color: "#F9A03C", url: "https://cdn.simpleicons.org/d3dotjs" },
    { name: "Airflow", cat: "Engineering", color: "#017CEE", url: "https://cdn.simpleicons.org/apacheairflow" },
    { name: "MongoDB", cat: "Data", color: "#47A248", url: "https://cdn.simpleicons.org/mongodb" },
    { name: "BigQuery", cat: "Cloud", color: "#4285F4", url: "https://cdn.simpleicons.org/googlecloud" },
    { name: "AWS S3", cat: "Cloud", color: "#FF9900", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Databricks", cat: "Big Data", color: "#FF3621", url: "https://cdn.simpleicons.org/databricks" },
    { name: "Excel", cat: "Spreadsheets", color: "#217346", url: "https://cdn.simpleicons.org/microsofexcel" },
    { name: "Kafka", cat: "Big Data", color: "#231F20", url: "https://cdn.simpleicons.org/apachekafka" },
    { name: "Hadoop", cat: "Big Data", color: "#66CCFF", url: "https://cdn.simpleicons.org/apachehadoop" },
    { name: "Python", cat: "Data", color: "#3776AB", url: "https://cdn.simpleicons.org/python" },
];

const TOOLS_ROW_1 = TOOLS.slice(0, 10);
const TOOLS_ROW_2 = TOOLS.slice(10);

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

const CAREER_ROLES = [
    {
        id: "data-scientist",
        label: "Data Scientist",
        title: "Data Scientist",
        desc: "Extracts actionable insights from complex datasets using advanced statistical models and custom machine learning pipelines.",
        salary: "₹6L - 11L",
        growth: "+32% YoY",
        skills: [
            "Python & R",
            "Predictive Modeling",
            "Regression Analysis",
            "Feature Engineering",
            "A/B Testing"
        ],
        responsibilities: [
            "Building predictive and statistical models",
            "Analyzing large structured and unstructured datasets",
            "Performing exploratory data analysis",
            "Communicating data-driven solutions to stakeholders",
            "Evaluating model accuracy and reliability"
        ]
    },
    {
        id: "data-engineer",
        label: "Data Engineer",
        title: "Data Engineer",
        desc: "Designs, builds, and maintains data pipelines and architectures to support large-scale analytical systems.",
        salary: "₹6L - 10L",
        growth: "+38% YoY",
        skills: [
            "SQL & NoSQL Databases",
            "ETL Pipelines",
            "Apache Spark / Kafka",
            "Cloud Storage (AWS/Azure)",
            "Data Warehousing"
        ],
        responsibilities: [
            "Building clean data extraction pipelines",
            "Optimizing queries and data warehouses",
            "Orchestrating real-time streaming architectures",
            "Ensuring data quality and integrity",
            "Managing large-scale cloud databases"
        ]
    },
    {
        id: "bi-analyst",
        label: "Business Intelligence Lead",
        title: "Business Intelligence Lead",
        desc: "Translates core business queries into interactive dashboards and reporting systems for executive decisions.",
        salary: "₹5L - 9L",
        growth: "+28% YoY",
        skills: [
            "Tableau & Power BI",
            "Data Storytelling",
            "SQL Reporting",
            "KPI Formulation",
            "Dashboard Design"
        ],
        responsibilities: [
            "Creating analytical dashboards",
            "Consolidating data across business systems",
            "Tracking key corporate performance metrics",
            "Supporting operations with regular reports",
            "Training teams on self-service BI platforms"
        ]
    },
    {
        id: "decision-scientist",
        label: "Decision Scientist",
        title: "Decision Scientist",
        desc: "Combines data science with behavioral psychology and design thinking to help businesses make optimal choices.",
        salary: "₹6L - 12L",
        growth: "+35% YoY",
        skills: [
            "Statistical Decision Theory",
            "Causal Inference",
            "Optimization Theory",
            "Behavioral Modeling",
            "Experimental Design"
        ],
        responsibilities: [
            "Designing business experiments",
            "Formulating decision-making frameworks",
            "Analyzing causal relations in business data",
            "Applying optimization models to operations",
            "Unlocking structural product improvements"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        year: 1,
        title: "Analytics Foundations",
        topics: [
            "Mathematics for Data: Calculus, Probability, and Statistical Inference",
            "Programming for Data Science: Python & R Mastery",
            "Database Systems: SQL, NoSQL, and Query Optimization",
            "Data Wrangling & Exploratory Data Analysis (EDA)",
            "Data Visualization: Tableau & D3.js Foundations",
            "Entrepreneurship 101: Value Creation & Problem Framing"
        ]
    },
    {
        year: 2,
        title: "Machine Learning & Engineering",
        topics: [
            "Core Machine Learning: Regression, Classification, and Clustering",
            "Feature Engineering & Dimensionality Reduction",
            "Big Data Technologies: Apache Spark & Hadoop Ecosystems",
            "Data Engineering: ETL Pipelines, Airflow, and Cloud Storage",
            "Time Series Forecasting & Analysis",
            "Startup Lab: Prototype Building & Validation"
        ]
    },
    {
        year: 3,
        title: "Advanced Modelling & Applications",
        topics: [
            "Deep Learning Fundamentals: Neural Networks & Deep Models",
            "Natural Language Processing & Text Analytics",
            "Vector Databases & Advanced Search Infrastructures",
            "A/B Testing, Causal Inference, and Decision Analytics",
            "Capstone: Industry-backed Analytics Solutions",
            "Founder Track: Growth Strategy, Product Analytics, and Pitching"
        ]
    },
    {
        year: 4,
        title: "Specialization & Scale",
        topics: [
            "Domain Analytics: Finance, Healthcare, or Operational Optimization",
            "Mangement Analytics: Global Analytics Team Leadership",
            "Real-Time Data Orchestration at Global Scale",
            "Major Capstone: Deploying Enterprise-Grade Analytic Models",
            "Residency: 6-Month Full-Time Internship with Global Partners",
            "Founder Track: Venture Launch, Metrics, and Scaling"
        ]
    }
];

export default function DataScienceSchoolPage() {
    const [duration, setDuration] = useState<3 | 4>(3);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
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
                        src="/images/school-datascience.png" 
                        alt="School of Data Science" 
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                </div>

                <div className="container mx-auto max-w-[1450px] relative z-10 px-6 sm:px-12 lg:px-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        School of Deep Tech
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
                        School of Data Science
                    </h1>
                </div>
            </section>

            {/* Introduction & Overview Section with Floating Specs Card */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden">
                <section className="bg-white p-8 sm:p-12 md:p-16 text-[#031a57]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
                            {/* Left: Intro & Toggles */}
                            <div className="max-w-3xl">
                                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Insight & Analytics</p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#031a57] font-serif mb-6 leading-tight">
                                    Turn raw data into predictive decision architectures.
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    A {duration}-year immersive degree merging Advanced Analytics with Entrepreneurship. <br />
                                    <span className="text-[#031a57] font-medium">Graduate with Insight, Precision & Real-World Impact.</span>
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
                                    <div className="space-y-1.5 border-l-2 border-blue-500 pl-4">
                                        <p className="text-sm font-bold text-[#031a57]">{duration === 3 ? "B.Sc in Data Science" : "B.Tech in Data Science"}</p>
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
                            <p className="text-base sm:text-lg font-bold text-slate-800">{duration === 4 ? "Hyderabad" : "Warangal"}</p>
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
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]" />
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div>
                                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-4 font-mono">Program Overview</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 leading-tight tracking-tight">
                                    A Degree Built for <br />
                                    <span className="text-[#002f86]">the Data Era.</span>
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 font-light">
                                    The Foundry&apos;s {duration}-year Data Science program combines deep statistical knowledge with scalable data pipelines and execution. Students don&apos;t just study metrics — they construct real-time data warehouses, design visualization architectures, and deploy robust modeling workflows.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Statistical Inference", "Machine Learning", "ETL Engineering", "Data Visualizations", "Big Data Clusters", "Predictive Analytics"].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-default select-none">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 w-full">
                                {[
                                    { value: duration.toString(), unit: "Years", label: "Full-time immersive program" },
                                    { value: (duration * 2).toString(), unit: "Semesters", label: "Progressive skill building" },
                                    { value: "100%", unit: "Applied", label: "Project-based curriculum" },
                                    { value: "100+", unit: "Concepts", label: "End-to-end industrial execution" },
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
                                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 font-mono">{stat.unit}</div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* PROGRAM STATS & ELIGIBILITY CONSOLIDATED CARD */}
            <section id="eligibility" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                
                {/* Program Stats section wrapper (inner) */}
                <div className="py-16 relative border-b border-[#c5d8ec]/60 z-10">
                    <ProgramStats />
                </div>

                {/* Eligibility section wrapper (inner) */}
                <div className="py-16 px-6 relative z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            
                            {/* Who is this for */}
                            <div className="space-y-12">
                                <div>
                                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Built for the next generation</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif tracking-tight">Who Is This For</h2>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { num: "01", title: "Future Analytics Leaders", desc: "Class 12 / Intermediate graduates from any stream — MPC, BiPC, CEC, HEC, or Arts.", color: "bg-blue-50 border-blue-100 text-blue-600" },
                                        { num: "02", title: "Future Tech Founders", desc: "Students who want to build data-driven startups and launch real products before graduation.", color: "bg-purple-50 border-purple-100 text-purple-600" },
                                        { num: "03", title: "Zero Analytics Background", desc: "No prior data science background required. We teach statistical coding from logical zero.", color: "bg-emerald-50 border-emerald-100 text-emerald-600" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-5 p-6 bg-white border border-slate-200/60 rounded-2xl hover:border-blue-300 transition-all hover:bg-white hover:shadow-lg">
                                            <div className={`shrink-0 w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center`}>
                                                <span className="font-mono font-bold text-base">{item.num}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#031a57] mb-2 font-serif">{item.title}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Eligibility requirements */}
                            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-12 lg:sticky lg:top-32 h-fit">
                                <div className="mb-10">
                                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-4 font-mono">Academic Criteria</p>
                                    <h2 className="text-3xl font-bold text-[#031a57] font-serif tracking-tight">Academic Eligibility</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                                        <h4 className="text-base font-bold text-[#031a57] font-serif mb-5 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold font-mono">01</div>
                                            Standard Admission Pathway
                                        </h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Grade 12 / Intermediate from any recognized board.",
                                                "MPC, BiPC, CEC, HEC, or Arts—all streams are eligible.",
                                                "Minimum 60% aggregate in core academic subjects."
                                            ].map((req, j) => (
                                                <li key={j} className="flex items-start gap-3.5 text-slate-600 text-sm leading-relaxed">
                                                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* OUTCOMES & MILESTONES */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section id="outcomes" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
                            
                            {/* Timeline / Highlights */}
                            <div>
                                <div className="mb-12">
                                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Program highlights</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif tracking-tight leading-tight mb-6">
                                        Three paths to becoming a <span className="text-blue-600">Data professional</span>
                                    </h2>
                                    <p className="text-base text-slate-550 leading-relaxed max-w-xl font-light">
                                        This program is structured as a progressive journey — from understanding data analysis fundamentals to scaling predictive models and operating at enterprise analytics standards.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-0 max-w-xl">
                                    {/* Stage 01 */}
                                    <div className="grid grid-cols-[48px_1fr] gap-x-6 pb-10 relative group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-blue-250 shadow-sm">
                                                <span className="font-mono text-xs font-bold text-blue-600">01</span>
                                            </div>
                                            <div className="w-[1px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                        </div>
                                        <div className="pt-2.5 pb-2 cursor-default">
                                            <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1 font-mono">Stage 01</div>
                                            <div className="text-xl font-bold text-[#031a57] mb-2 font-serif">Data Literacy</div>
                                            <div className="text-sm text-slate-550 leading-relaxed font-normal">
                                                Learn statistical thinking, database structure, and visualization fundamentals. Understand patterns in raw information before deploying code.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage 02 */}
                                    <div className="grid grid-cols-[48px_1fr] gap-x-6 pb-10 relative group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-blue-250 shadow-sm">
                                                <span className="font-mono text-xs font-bold text-blue-600">02</span>
                                            </div>
                                            <div className="w-[1px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                        </div>
                                        <div className="pt-2.5 pb-2 cursor-default">
                                            <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1 font-mono">Stage 02</div>
                                            <div className="text-xl font-bold text-[#031a57] mb-2 font-serif">Data Analyst</div>
                                            <div className="text-sm text-slate-555 leading-relaxed font-normal">
                                                Build real-time reporting metrics, clean raw databases, and deploy visualization dashboards that support corporate decision paths.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage 03 */}
                                    <div className="grid grid-cols-[48px_1fr] gap-x-6 relative group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-blue-250 shadow-sm">
                                                <span className="font-mono text-xs font-bold text-blue-600">03</span>
                                            </div>
                                            <div className="w-[1px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                        </div>
                                        <div className="pt-2.5 pb-2 cursor-default">
                                            <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1 font-mono">Stage 03</div>
                                            <div className="text-xl font-bold text-[#031a57] mb-2 font-serif">Data Scientist</div>
                                            <div className="text-sm text-slate-555 leading-relaxed font-normal">
                                                Engineer predictive models, establish causality metrics, and optimize data lakes at global scale.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outcomes Details Panel */}
                            <div className="flex flex-col gap-8 bg-slate-50 border border-slate-200 p-8 lg:p-10 rounded-[2rem] shadow-sm">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#031a57] font-serif mb-2">
                                        What you&apos;ll <span className="text-blue-600">learn</span>
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                        A curriculum built around the skills that modern analytics teams actually need — from causality to storage pipelines.
                                    </p>

                                    <div className="flex flex-col divide-y divide-slate-200/60">
                                        {[
                                            "Exploratory Data Analysis (EDA)",
                                            "Feature selection and data wrangling",
                                            "Regression and predictive modeling",
                                            "ETL warehousing and cloud database scaling",
                                            "Causal inference and experimental design",
                                            "Cost, latency, and dashboard refresh trade-offs",
                                            "Data-driven strategic communication"
                                        ].map((skill, index) => (
                                            <div key={index} className="flex items-start gap-4 py-3 first:pt-0 last:pb-0 group">
                                                <span className="text-sm font-bold text-blue-600 min-w-[24px] mt-0.5 font-mono">
                                                    {(index + 1).toString().padStart(2, '0')}
                                                </span>
                                                <span className="text-sm text-slate-700 font-medium">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h3 className="text-lg font-bold text-[#031a57] font-serif mb-2">
                                        What you&apos;ll <span className="text-blue-600">achieve</span>
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                        Graduates leave this program with the vocabulary, statistics, and pipeline skills to own business metrics.
                                    </p>

                                    <div className="flex flex-col gap-3">
                                        {[
                                            "Construct predictive frameworks instead of static reports",
                                            "Deploy clean real-time streaming warehouses",
                                            "Formulate statistical business optimization models",
                                            "Present clear causal insights to product designers and executives"
                                        ].map((outcome, index) => (
                                            <div key={index} className="flex items-start gap-3.5 group">
                                                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3" /></svg>
                                                </div>
                                                <div className="text-xs font-semibold text-slate-700">
                                                    {outcome}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* 3. WHAT YOU WILL STUDY (CURRICULUM) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section id="curriculum" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Academic Map</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 tracking-tight">What You Will Study</h2>
                            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">From mathematical foundations to building enterprise-scale data architectures. Every year builds on the last.</p>
                        </div>
                        
                        <SyllabusMindMap
                            data={CURRICULUM_DATA.filter((item) => item.year <= duration).map(({ year, title, topics }) => ({ period: year, title, topics }))}
                            periodLabel="Year"
                            hubTitle="DATA SCIENCE"
                            theme="blue"
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
                        <ToolMarquee tools={TOOLS_ROW_1} reverse={false} speed={40} />
                        <div className="hidden md:block">
                            <ToolMarquee tools={TOOLS_ROW_2} reverse={true} speed={50} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <CareerVision
                    roles={CAREER_ROLES.map(role => ({
                        icon: role.id === "data-scientist" ? LineChart :
                            role.id === "data-engineer" ? Database :
                                role.id === "bi-analyst" ? PieChart :
                                    role.id === "decision-scientist" ? Table : LineChart,
                        title: role.title,
                        growth: role.growth,
                        salary: role.salary,
                        desc: role.desc,
                        skills: role.skills,
                        responsibilities: role.responsibilities
                    }))}
                    title="What You'll Become"
                    subtitle="From mathematical foundations to causal business optimization. This is your career in 2035."
                    themeColor="blue"
                    isDark={false}
                />
            </div>
            
            <WhyUs />

            <Footer />
        </main>
    );
}
