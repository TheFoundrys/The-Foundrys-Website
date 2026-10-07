"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, Calendar, User } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

interface NewsArticle {
    title: string;
    date: string;
    readTime: string;
    category: string;
    excerpt?: string;
    image?: string;
    imagePosition?: string;
    content: React.ReactNode;
}

const ARTICLES: Record<string, NewsArticle> = {
    "thefoundrys-partnered-with-ekashila-degree-college": {
        title: "The Foundry's Partnered with Ekashila Degree College, Jangaon",
        date: "October 07, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/mou-ekashila-college.jpg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed a Memorandum of Understanding (MOU) with Ekashila Degree College, Jangaon (Affiliated to Kakatiya University) to empower undergraduate students with industry-aligned training in Artificial Intelligence and modern deep technologies.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Empowering Regional Talent in Deep Tech</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    The Foundry&apos;s has entered into a strategic collaboration with Ekashila Degree College, Jangaon. Established in 1993 and affiliated with Kakatiya University, Ekashila Degree College has long served as a key higher-education institution in the region. This partnership marks an important milestone in bringing practical industry mentorship, future-ready curricula, and placement-driven learning models to students in computer science, physical sciences, life sciences, and commerce streams.
                </p>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Bringing world-class deep-tech training and practical industry exposure directly to college classrooms is fundamental to democratizing opportunities for students across Telangana.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Focus Areas of the Partnership</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Artificial Intelligence &amp; Data Science:</strong> Practical coursework in applied machine learning, prompt engineering, generative AI, and data analytics.</li>
                    <li><strong>Full Stack &amp; Software Development:</strong> Hands-on project work covering modern software development, full-stack frameworks, and industry coding standards.</li>
                    <li><strong>Cloud Computing &amp; Cybersecurity:</strong> Foundational architecture training covering cloud deployment, infrastructure management, and digital defense.</li>
                    <li><strong>Career Readiness &amp; Placements:</strong> Direct mentorship, interview preparation, and skill bootcamps to transition graduates into high-growth technology roles.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Academic Vision &amp; Leadership</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    The MOU exchange was conducted in the presence of college management and representatives from The Foundry&apos;s, including J P Pramod. The leadership of Ekashila Degree College highlighted their commitment to ensuring students gain tangible, hands-on competencies that match global technological demands.
                </p>
                <p className="text-slate-700 leading-relaxed font-sans">
                    Through this collaboration, The Foundry&apos;s reinforces its mission to connect academic talent with frontier industry opportunities, building the next generation of builders and technologists.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-pratibha-degree-college": {
        title: "The Foundry's Partnered with Pratibha Degree & PG College, Siddipet",
        date: "September 24, 2026",
        readTime: "2 min read",
        category: "News",
        image: "/mou-pratibha-college.jpg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed a Memorandum of Understanding (MOU) with Pratibha Degree & PG College, Siddipet to deliver advanced technology training and empower students with future-ready skills.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Empowering Students Through Advanced Technology Training</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    The Foundry&apos;s has entered into a strategic collaboration with Pratibha Degree & PG College, Siddipet. This Memorandum of Understanding (MOU) marks a significant step forward in bringing industry-aligned training, deep-tech skills, and practical technology education to degree and postgraduate students.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Technology Domains Covered</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Artificial Intelligence (AI):</strong> Foundations of AI, prompt engineering, applied LLMs, and real-world machine learning workflows.</li>
                    <li><strong>Data Science:</strong> Data analytics, statistical modeling, and data-driven decision-making tools.</li>
                    <li><strong>Cloud Technologies:</strong> Modern cloud infrastructure, deployment pipelines, and scalable computing environments.</li>
                    <li><strong>Cyber Security:</strong> Essential security protocols, systems protection, and threat defense fundamentals.</li>
                    <li><strong>Robotics & Automation:</strong> Automation principles, intelligent agents, and robotics control workflows.</li>
                    <li><strong>Software Development:</strong> Modern software development practices, full-stack engineering, and industry-standard coding conventions.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Leadership &amp; Vision</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    The MOU ceremony was attended by college leadership and representatives of The Foundry&apos;s. Dr. Suryaprakash Rao Datharu, Principal of Pratibha Degree &amp; PG College, Siddipet, emphasized the importance of bringing global curriculum and practical industry exposure directly to college classrooms.
                </p>
                <p className="text-slate-700 leading-relaxed font-sans">
                    The Foundry&apos;s representative, J P Pramod, commended the college management&apos;s proactive dedication to their students&apos; future and reinforced The Foundry&apos;s commitment to bridging the gap between academia and modern tech industry requirements.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-vareon": {
        title: "The Foundry's Partnered with Vareon",
        date: "July 28, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/vareon-partnership-graphic.png",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed a Memorandum of Understanding (MOU) with Vareon to build the future of technical skills, innovation, and direct placement opportunities.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Building the Future Together</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    We are thrilled to share that The Foundry&apos;s has entered into a strategic MOU partnership with Vareon! This collaboration represents a strong alignment of values and resources, dedicated to bringing state-of-the-art training, industrial mentorship, and high-performance career paths to students and early-career professionals.
                </p>

                <div className="my-8 flex justify-center">
                    <img 
                        src="/vareon-partnership-mou.jpg" 
                        alt="The Foundry's and Vareon MOU Signing" 
                        className="border border-slate-200/80 shadow-md max-w-full md:max-w-2xl"
                    />
                </div>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Through this partnership, Vareon and The Foundry&apos;s are bringing academic training and real-world deployment closer than ever before. We will deliver industry-relevant programs and foster innovation that creates limitless impact.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Objectives of the MoU</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Industry-Aligned Training:</strong> Collaborative design of training programs tailored to modern software engineering, AI engineering, and systems risk architectures.</li>
                    <li><strong>Innovation & Research:</strong> Enabling shared research pathways and technology-led solutions to bridge technical training and deployment.</li>
                    <li><strong>Direct Placements:</strong> Creating career transformation pathways and connecting qualified candidates directly to placement opportunities at Vareon.</li>
                </ul>

                <p className="text-slate-700 leading-relaxed font-sans">
                    By merging Vareon&apos;s industry expertise with The Foundry&apos;s premium finishing school curriculum, we are excited to empower learners with the hands-on competence required to lead in the intelligent age.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-ttpoa": {
        title: "The Foundry's Partnered with Telangana Training and Placement Officers Association (TTPOA)",
        date: "July 08, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/images/ttpoa-logo.webp",
        imagePosition: "contain",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed an MOU with the Telangana Training and Placement Officers Association (TTPOA). Additionally, TTPOA President Dr. Jayaram joins The Foundry’s Advisory Board to align academic training with industry hiring and drive career placements.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Aligning Academia with Deep Tech Industry Hiring</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This partnership between The Foundry&apos;s and the Telangana Training and Placement Officers Association (<a href="https://www.ttpoa.in/" target="_blank" rel="noopener noreferrer" className="text-[#002f86] hover:underline font-bold">TTPOA</a>) marks a milestone in empowering engineering graduates across Telangana. By combining forces, we aim to bridge the gap between traditional curriculum models and the rigorous requirements of global technology teams.
                </p>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Bridging academic curriculum with real-world deployment is critical. Through this strategic alliance, we will ensure that engineering graduates in Telangana are not only trained in deep tech, but are ready to deliver value to industry teams from day one.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Pillars of the MOU</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Industry Placement Readiness:</strong> Designing targeted placement bootcamps and assessment frameworks aligned with active hiring standards.</li>
                    <li><strong>AI & Deep Tech Bootcamps:</strong> Organizing technical workshops and certifications directly accessible to students in member colleges under TTPOA.</li>
                    <li><strong>Faculty Development:</strong> Providing training programs for placement coordinators and educators on industry shifts and tools.</li>
                </ul>
            </>
        )
    },
    "thefoundrys-partnered-with-ebs": {
        title: "The Foundry's Partnered with EBS Ethames Business School",
        date: "April 02, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/ebs-partnership.png",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s is proud to announce a strategic partnership with Ethames Business School (EBS).
                </p>

                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This Memorandum of Understanding (MOU) marks a significant step forward in our mission to bring advanced technical education to a broader student body. By partnering with EBS, we are committed to providing the next generation of tech leaders with the tools, mentorship, and training required to excel in Artificial Intelligence and Deep Tech.
                </p>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;This partnership with EBS represents a crucial step forward in our mission to bridge the gap between academic learning and industry demands in the rapidly evolving tech landscape.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Future-Ready Training and Mentorship</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Specialized AI Training:</strong> Hands-on workshops focusing on Generative AI, LLM development, and Machine Learning.</li>
                    <li><strong>Industry Mentorship:</strong> Exclusive access to a network of industry experts and deep-tech entrepreneurs.</li>
                    <li><strong>Strategic Ecosystem:</strong> Building a robust ecosystem of innovation, where students can transition from academic learning to building real-world applications.</li>
                </ul>

                <p className="text-slate-700 leading-relaxed font-sans">
                    The Foundry&apos;s remains dedicated to creating inclusive, accessible, and high-impact educational pathways. We look forward to seeing the breakthroughs and innovations that emerge from this exciting new partnership.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-keshava-college": {
        title: "The Foundrys Partnered with Keshava Degree College for Women",
        date: "March 17, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/mou-keshava-college.jpg",
        imagePosition: "object-top",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s is proud to announce a strategic partnership with Keshava Degree College for Women, Hanamakonda.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Empowering Women in Deep Tech</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This Memorandum of Understanding (MOU) marks a significant step forward in our mission to bring advanced technical education to a broader student body. By partnering with Keshava Degree College for Women, we are committed to providing the next generation of female tech leaders with the tools, mentorship, and training required to excel in Artificial Intelligence and Deep Tech.
                </p>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Bridging the gender gap in technical leadership is not just a social imperative, but an economic one. Our collaboration with Keshava College is a blueprint for empowering women to lead the future of innovation.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Future-Ready Training and Mentorship</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Specialized AI Training:</strong> Hands-on workshops focusing on Generative AI, LLM development, and Machine Learning.</li>
                    <li><strong>Industry Mentorship:</strong> Exclusive access to a network of industry experts and deep-tech entrepreneurs.</li>
                    <li><strong>Strategic Ecosystem:</strong> Building a robust ecosystem of innovation, where students can transition from academic learning to building real-world applications.</li>
                </ul>

                <p className="text-slate-700 leading-relaxed font-sans">
                    The Foundry&apos;s remains dedicated to creating inclusive, accessible, and high-impact educational pathways. We look forward to seeing the breakthroughs and innovations that emerge from this exciting new partnership.
                </p>
            </>
        )
    },
    "thefoundrys-certified-by-startup-india": {
        title: "The Foundry's Officially Certified by Startup India",
        date: "March 17, 2026",
        readTime: "3 min read",
        category: "Achievements",
        image: "/startup-india-certificate.jpg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s is proud to announce its official recognition and certification by Startup India, the Government of India’s flagship initiative to foster innovation and entrepreneurship.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Recognized for Deep Tech Excellence</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This recognition validates our commitment to building an ecosystem that merges deep technology education, venture acceleration, and strategic industry collaboration.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-csi": {
        title: "Thefoundrys Partnered with CSI Computer Society of India",
        date: "February 28, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/csi-partnership.jpeg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    We’re incredibly excited to share that The Foundry’s has officially partnered with the Computer Society of India (CSI)!
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Empowering Next-Generation Tech Leaders</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    We’ve signed an MOU to train the next generation of students and professionals in AI and deep tech, equipping them with future-ready skills.
                </p>
            </>
        )
    }
};

export default function NewsClient({ slug }: { slug: string }) {
    const [copied, setCopied] = useState(false);
    const article = ARTICLES[slug] || ARTICLES["thefoundrys-partnered-with-vareon"];

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Header Section */}
                <section className="bg-[#F7F7F4] p-8 sm:p-12 md:p-16 border-b border-slate-200/50">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-6 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /> Back to Newsroom
                        </Link>

                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002f86] mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 border-t border-slate-200/80 pt-4">
                            <span className="flex items-center gap-1.5">
                                <User size={14} className="text-[#002f86]" /> The Foundry&apos;s Editorial
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-[#002f86]" /> {article.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-[#002f86]" /> {article.readTime}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Article Content Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl mx-auto">
                        {article.image && (
                            <div className="mb-10 bg-[#F7F7F4] border border-slate-200/80 overflow-hidden flex items-center justify-center p-2 sm:p-4 mx-auto">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-auto max-w-full max-h-[550px] object-contain shadow-xs mx-auto block"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg max-w-none text-slate-700 font-sans">
                            {article.content}
                        </div>

                        {/* Share Action */}
                        <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center justify-between">
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold font-mono transition-colors cursor-pointer"
                            >
                                <Share2 size={15} />
                                {copied ? "Link Copied!" : "Share Article"}
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
