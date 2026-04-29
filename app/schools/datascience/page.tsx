"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Clock,
    Award,
    ArrowUpRight,
    Terminal,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ServerCog,
    ChevronDown,
    Users,
    BarChart3,
    Rocket,
    BrainCircuit,
    Database,
    Globe,
    Bot,
    Layers,
    Cloud,
    Eye,
    Settings,
    Heart,
    Activity,
    Zap,
    Share2,
    Link as LinkIcon,
    LineChart,
    PieChart,
    Table
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";
import { ProgramStats } from "./program-stats";
import { WhyUs } from "./why-us";

function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero')?.offsetHeight || 800;
            setIsSticky(window.scrollY > heroHeight - 100);

            // Active section detection
            const sections = ['overview', 'curriculum', 'eligibility', 'outcomes'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'What you\'ll study' },
        { id: 'eligibility', label: 'Entry requirements' },
        { id: 'outcomes', label: 'Career outcomes' },
    ];

    return (
        <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isSticky ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-0 pointer-events-none opacity-0'
            }`}>
            <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
                <div className="flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                            className={`text-sm font-bold tracking-tight transition-colors ${activeSection === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <Link href="/apply" className="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all shadow-md active:scale-95">
                    Apply Now
                </Link>
            </div>
        </div>
    );
}

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
    { name: "Excel", cat: "Spreadsheets", color: "#217346", url: "https://cdn.simpleicons.org/microsoftexcel" },
    { name: "Kafka", cat: "Big Data", color: "#231F20", url: "https://cdn.simpleicons.org/apachekafka" },
    { name: "Hadoop", cat: "Big Data", color: "#66CCFF", url: "https://cdn.simpleicons.org/apachehadoop" },
    { name: "Python", cat: "Data", color: "#3776AB", url: "https://cdn.simpleicons.org/python" },
];

const TOOLS_ROW_1 = TOOLS.slice(0, 10);
const TOOLS_ROW_2 = TOOLS.slice(10);

const ToolMarquee = ({ tools, reverse = false, speed = 80 }: { tools: any[], reverse?: boolean, speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden select-none py-2 md:py-3 relative bg-white/50 backdrop-blur-sm border-y border-slate-100">
            <motion.div
                className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {[...tools, ...tools].map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <img
                                src={tool.url}
                                alt={tool.name}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=128`;
                                }}
                            />
                        </div>
                        <span
                            className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors duration-300"
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
        desc: "Uses advanced analytics and statistical modeling to solve complex business problems and uncover hidden patterns in data.",
        salary: "₹8L - 12L",
        growth: "+30% YoY",
        skills: [
            "Predictive Modeling",
            "Advanced Statistics",
            "Python/R Programming",
            "ML Algorithms",
            "Experiment Design"
        ],
        responsibilities: [
            "Building predictive models for business growth",
            "Performing deep statistical analysis",
            "Designing A/B tests and experiments",
            "Communicating insights to stakeholders",
            "Optimizing machine learning pipelines"
        ]
    },
    {
        id: "data-engineer",
        label: "Data Engineer",
        title: "Data Engineer",
        desc: "Architects and maintains the infrastructure required for optimal extraction, transformation, and loading of data.",
        salary: "₹7L - 11L",
        growth: "+35% YoY",
        skills: [
            "ETL Pipelines",
            "Big Data (Spark/Kafka)",
            "Data Warehousing",
            "SQL & NoSQL",
            "Cloud Infrastructure"
        ],
        responsibilities: [
            "Developing scalable data pipelines",
            "Managing large-scale databases",
            "Ensuring data quality and integrity",
            "Implementing data security protocols",
            "Optimizing data retrieval performance"
        ]
    },
    {
        id: "bi-analyst",
        label: "Business Intelligence Lead",
        title: "Business Intelligence Lead",
        desc: "Transforms raw data into actionable insights through interactive dashboards and strategic reporting.",
        salary: "₹6L - 10L",
        growth: "+25% YoY",
        skills: [
            "Tableau & Power BI",
            "Data Storytelling",
            "SQL Querying",
            "Business Strategy",
            "Dashboard Design"
        ],
        responsibilities: [
            "Creating executive dashboards",
            "Analyzing market trends and KPIs",
            "Developing reporting frameworks",
            "Collaborating with product teams",
            "Visualizing complex data structures"
        ]
    },
    {
        id: "quantitative-analyst",
        label: "Quantitative Analyst",
        title: "Quantitative Analyst",
        desc: "Applies mathematical and statistical methods to financial and risk management problems.",
        salary: "₹9L - 14L",
        growth: "+28% YoY",
        skills: [
            "Financial Modeling",
            "Stochastic Calculus",
            "Risk Assessment",
            "Algorithmic Trading",
            "Time Series Analysis"
        ],
        responsibilities: [
            "Developing risk management models",
            "Implementing trading algorithms",
            "Analyzing financial market data",
            "Backtesting quantitative strategies",
            "Validating model performance"
        ]
    },
    {
        id: "ml-engineer",
        label: "ML Ops Engineer",
        title: "ML Ops Engineer",
        desc: "Bridges the gap between data science and software engineering to deploy and scale machine learning models.",
        salary: "₹7L - 11L",
        growth: "+40% YoY",
        skills: [
            "Model Deployment",
            "CI/CD for ML",
            "Kubernetes",
            "Cloud Computing",
            "System Monitoring"
        ],
        responsibilities: [
            "Deploying ML models to production",
            "Automating training workflows",
            "Monitoring model drift and decay",
            "Scaling inference services",
            "Optimizing resource utilization"
        ]
    },
    {
        id: "data-architect",
        label: "Data Architect",
        title: "Data Architect",
        desc: "Designs the overarching blueprints for data management systems and integrated data environments.",
        salary: "₹10L - 15L",
        growth: "+22% YoY",
        skills: [
            "System Design",
            "Metadata Management",
            "Data Governance",
            "Enterprise Architecture",
            "Schema Design"
        ],
        responsibilities: [
            "Defining data strategy and roadmaps",
            "Designing enterprise data schemas",
            "Implementing governance standards",
            "Aligning IT and business goals",
            "Evaluating new data technologies"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        year: 1,
        title: "The Data Foundation",
        topics: [
            "Mathematical Foundations: Linear Algebra, Calculus, Statistics & Probability",
            "Programming for Data Science: Python, NumPy, Pandas",
            "Database Systems: SQL Mastery & Data Normalization",
            "Data Visualization Fundamentals: Matplotlib, Seaborn, Tableau",
            "Exploratory Data Analysis (EDA): Uncovering Hidden Patterns",
            "Business Communication: Storytelling with Data"
        ]
    },
    {
        year: 2,
        title: "Advanced Analytics & ML",
        topics: [
            "Statistical Modeling: Regression, Hypothesis Testing, ANOVA",
            "Machine Learning I: Supervised & Unsupervised Learning",
            "Big Data Engineering: Apache Spark, Hadoop, NoSQL",
            "Data Warehousing: Snowflake, BigQuery, ETL Pipelines",
            "Optimization Techniques & Operations Research",
            "Startup Lab: Turning Data Insights into Products"
        ]
    },
    {
        year: 3,
        title: "Mastery & Predictive Impact",
        topics: [
            "Deep Learning & Predictive Analytics",
            "Time Series Analysis & Forecasting",
            "MLOps: Deploying and Scaling Models in the Cloud",
            "Data Ethics, Privacy & Governance",
            "Capstone: solving Real-world Industry Challenges with Data",
            "Founder Track: Building a Data-Driven Startup"
        ]
    },
    {
        year: 4,
        title: "Enterprise Intelligence & Strategic Insights",
        topics: [
            "Advanced Big Data Architectures: Streaming & Real-time Analytics",
            "Generative AI for Business: Implementation & Fine-tuning",
            "Data Governance, Privacy Engineering & Compliance at Scale",
            "Strategic Decision Science: Game Theory & Market Modeling",
            "Major Capstone: Deploying a Multi-Region Data Infrastructure",
            "Founder Track: Scaling Data-First Ventures & Go-to-Market"
        ]
    }
];

function CurriculumTabs({ duration }: { duration: 3 | 4 }) {
    const [activeYear, setActiveYear] = useState(1);
    const filteredCurriculum = CURRICULUM_DATA.filter(item => item.year <= duration);
    const activeContent = filteredCurriculum.find(item => item.year === activeYear) || filteredCurriculum[0];

    useEffect(() => {
        if (activeYear > duration) {
            setActiveYear(1);
        }
    }, [duration, activeYear]);

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3">
                {filteredCurriculum.map((item) => (
                    <button
                        key={item.year}
                        onClick={() => setActiveYear(item.year)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeYear === item.year
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
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
                        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
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
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function DataPulse() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const particleCount = 100;

        const resize = () => {
            if (!canvas || !canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        class Particle {
            x: number; y: number; size: number; speedX: number; speedY: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = (Math.random() - 0.5) * 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                else if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                else if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background glow
            const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, 400);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.update();
                p.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 100})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default function DataScienceSchoolPage() {
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const [duration, setDuration] = useState<3 | 4>(4);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="relative min-h-[90vh] flex items-center bg-[#030712] overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block pointer-events-none">
                    <DataPulse />
                </div>

                <div className="container mx-auto max-w-[1450px] relative z-10 px-4">
                    <div className="flex flex-col justify-center text-left py-24 md:py-32 lg:min-h-[90vh] relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl relative z-10"
                        >
                            <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter text-white mb-8 md:mb-10 leading-[0.85] uppercase">
                                Data <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-500 pb-2 inline-block pr-8">Science</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light mb-16 max-w-3xl">
                                A {duration}-year immersive degree merging Advanced Analytics with Entrepreneurship. <br />
                                <span className="text-white font-medium">Graduate with Insight, Precision & Real-World Impact.</span>
                            </p>

                            {/* Duration Toggle */}
                            <div className="flex gap-4 mb-12">
                                <button
                                    onClick={() => setDuration(3)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all ${duration === 3 ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                                >
                                    3-Year Program
                                </button>
                                <button
                                    onClick={() => setDuration(4)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all ${duration === 4 ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                                >
                                    4-Year Program
                                </button>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-10 md:gap-16 pt-12 border-t border-white/10 max-w-4xl relative z-10">
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Available Degrees</p>
                                    <div className="space-y-1.5 border-l-2 border-blue-500/30 pl-4">
                                        {duration === 3 ? (
                                            <>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">B.Sc in Data Science</p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">B.Tech in Data Science</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {duration === 3 && (
                                    <div>
                                        <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Partner Institutions</p>
                                        <div className="space-y-1.5 border-l-2 border-indigo-500/30 pl-4">
                                            <p className="text-sm md:text-base font-semibold text-white tracking-tight">Keshava Degree College</p>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Industry Certifications</p>
                                    <div className="flex gap-5 border-l-2 border-blue-500/30 pl-4 h-full items-start">
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-blue-400 tracking-widest block mb-0.5">FCEP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Exec</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-indigo-400 tracking-widest block mb-0.5">FCIP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Pract</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-blue-300 tracking-widest block mb-0.5">FFP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Prof</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

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
            <div className="relative z-20 px-4 -mt-10 mb-12">
                <div className="mx-auto max-w-[1450px]">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 py-6 px-6 md:py-5 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-14 flex-1 text-left w-full">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Program Length</p>
                                <p className="text-lg font-bold text-slate-900">{duration}-Year Full-Time</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Delivery Mode</p>
                                <p className="text-lg font-bold text-slate-900">On-Campus, Immersive</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Campus</p>
                                <p className="text-lg font-bold text-slate-900">{duration === 4 ? "Hyderabad" : "Warangal"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Admissions</p>
                                <p className="text-lg font-bold text-slate-900">Now Open</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <section id="highlights" className="py-24 px-6 bg-white overflow-hidden border-b border-slate-100">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
                        {/* Highlights & Timeline */}
                        <div>
                            <div className="mb-10">
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Program highlights</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                                    Three stages to becoming a <span className="text-blue-600">Data professional</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                    This program is structured as a progressive journey — from understanding data fundamentals to building complex architectures and delivering strategic insights.
                                </p>
                            </div>

                            <div className="flex flex-col gap-0 max-w-xl">
                                {/* Stage 01 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 pb-9 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500 group-last:mb-0">
                                            <Database size={20} className="text-blue-500" />
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2 cursor-default">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 01</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">Data Fluency</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Master the core concepts of Statistics, Probability, and Exploratory Data Analysis. Build a solid foundation in Python and SQL before diving into advanced analytics.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 02 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 pb-9 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                            <Layers size={20} className="text-blue-500" />
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 02</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">Data Architect</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Work on large-scale data engineering projects. Design ETL pipelines, manage big data warehouses, and ensure data integrity for production-grade environments.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 03 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                            <BarChart3 size={20} className="text-blue-500" />
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 03</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">Data Scientist</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Apply advanced machine learning and predictive modeling to solve strategic business challenges. Graduate ready to lead data-driven initiatives at scale.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills and Outcomes Column */}
                        <div className="flex flex-col gap-6 bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm">
                            {/* What you'll learn */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                    What you&apos;ll <span className="text-blue-600">learn</span>
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-lg">
                                    A curriculum built around the skills that modern data teams actually need — from architecture to governance and storytelling.
                                </p>

                                <div className="flex flex-col">
                                    {[
                                        "Data architectural thinking",
                                        "Statistical problem framing",
                                        "Tool selection & evaluation",
                                        "Big data integration & orchestration",
                                        "Privacy, ethics, and governance by design",
                                        "Cost, accuracy, and reliability trade-offs",
                                        "Data storytelling & visualization"
                                    ].map((skill, index) => (
                                        <div key={index} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2 -mx-2">
                                            <span className="text-sm font-bold text-blue-600 min-w-[24px] mt-0.5">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-base text-slate-700 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What you'll achieve */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                    What you&apos;ll <span className="text-blue-600">achieve</span>
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Graduates leave this program with the mindset, vocabulary, and skills to make real decisions in data-driven organisations.
                                </p>

                                <div className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">
                                    You will be able to —
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        "Design data systems instead of static reports",
                                        "Evaluate data bias before deployment",
                                        "Own data behavior, quality, and risk",
                                        "Communicate data insights to business leaders"
                                    ].map((outcome, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="w-[24px] h-[24px] rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-px border border-blue-200">
                                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3" /></svg>
                                            </div>
                                            <div className="text-base font-medium text-slate-900">
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

            {/* Curriculum Section */}
            <section id="curriculum" className="py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">What You Will Study</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From mathematical foundations to building enterprise-scale data architectures. Every year builds on the last.</p>
                    </div>
                    <CurriculumTabs duration={duration} />
                </div>
            </section>

            {/* Industrial Skills Section */}
            <section id="tool-master" className="py-6 bg-slate-50 overflow-hidden relative border-y border-slate-200">
                <div className="container mx-auto max-w-6xl relative z-10 px-6">
                    <div className="text-center mb-2">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1 leading-tight">
                            Industrial Skills
                        </h2>
                    </div>
                </div>

                <div className="relative py-1 md:py-2 overflow-hidden">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <ToolMarquee tools={TOOLS_ROW_1} reverse={false} speed={40} />
                        <div className="hidden md:block">
                            <ToolMarquee tools={TOOLS_ROW_2} reverse={true} speed={55} />
                        </div>
                    </div>
                </div>
            </section>

            <CareerVision
                roles={CAREER_ROLES.map(role => ({
                    icon: role.id === "data-scientist" ? BrainCircuit :
                        role.id === "data-engineer" ? Database :
                            role.id === "bi-analyst" ? BarChart3 :
                                role.id === "quantitative-analyst" ? LineChart :
                                    role.id === "ml-engineer" ? Settings :
                                        role.id === "data-architect" ? Layers : Database,
                    title: role.title,
                    salary: role.salary,
                    growth: role.growth,
                    desc: role.desc,
                    skills: role.skills,
                    responsibilities: role.responsibilities
                }))}
                title="What You'll Become"
                subtitle="From mathematical foundations to architecting global data ecosystems. This is your career in the data era."
                themeColor="indigo"
            />
            <WhyUs />
            <Footer />
        </main>
    );
}
