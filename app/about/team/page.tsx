"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Users, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Vishwanath Akuthota",
        role: "Founder & CEO",
        bio: "Deep Tech Entrepreneur & AI Architect building at the intersection of AI, Quantum, and Human Potential.",
        image: "/images/vishwa-new.jpg",
        profileLink: "/vishwanathakuthota",
        socials: {
            linkedin: "https://www.linkedin.com/in/vishwanathakuthota/",
            website: "https://www.drpinnacle.com"
        }
    },
    {
        name: "Pramod Chada",
        role: "Advisory Board Member",
        bio: "Visionary IT leader with 2.5 decades of expertise in SDLC evolution. Co-founder and CEO of TechOptima, driving business transformation through cutting-edge AI solutions.",
        image: "/images/pramod-chada.jpg",
        profileLink: "/about/faculty/pramod-chada",
        socials: {
            linkedin: "https://www.linkedin.com/in/pramod-chada-profile/",
        }
    },
    {
        name: "Pramod J. P.",
        role: "Head of R&D",
        bio: "Senior Assistant Professor of Physics & distinguished deep-tech researcher with 3+ decades of expertise in semiconductors, piezotronics, and sustainable energy.",
        image: "/images/pramod-jp.png",
        profileLink: "/about/faculty/pramod-jp",
        socials: {
            linkedin: "https://www.linkedin.com/in/jp-pramod-a710985a/",
        }
    },
    {
        name: "Srinivas Sadasyula",
        role: "Vice President",
        bio: "Veteran operations leader with 35 years of experience in the logistics sector. Bringing large-scale operational rigor to the agility of a venture ecosystem, empowering the next generation to become creators of the future.",
        image: "/images/srinivas-sadasyula.jpg",
        profileLink: "/about/faculty/srinivas-sadasyula",
        socials: {
            linkedin: "https://www.linkedin.com/in/srinivas-sadasyula-411b79161/",
        }
    },
{
        name: "Abhishek Sharma",
        role: "Senior Data Analyst",
        image: "/images/abhishek shaarma.png",
        imageClass: "brightness-125 contrast-110 object-[center_20%]",
        bio: "Analytical professional with 8+ years of experience in driving organizational performance through deep data insights and actionable dashboards.",
        profileLink: "/about/faculty/abhishek-sharma",
        socials: {
            linkedin: "https://linkedin.com/in/abhishek-sharma-27b585ba"
        }
    },
    {
        name: "Akuthota Aravind",
        role: "Business Development Executive",
        image: "/images/araavind.png",
        bio: "Enabling strategic partnerships and expanding market opportunities at the convergence of Deep Tech and Sustainability.",
        profileLink: "/about/faculty/akuthota-aravind",
        socials: {
            linkedin: "https://www.linkedin.com/in/akuthota-aravind-608455193/"
        }
    },
    {
        name: "Soujanya Kanagala",
        role: "Operations Head",
        image: "/images/soujanya.jpg",
        bio: "Operations Head with 14 years of experience specializing in business setup, operations, and organizational scaling.",
        profileLink: "/about/faculty/soujanya-kanagala",
        socials: {
            linkedin: "https://www.linkedin.com/in/soujanya-kanagala-07304833/"
        }
    },
    {
        name: "Dr. Suman Rangabhashyam",
        role: "SME in Social Entrepreneurship",
        image: "/images/suman rangabhasyam.jpg",
        bio: "TEDx Speaker, Author, and Social Entrepreneur helping individuals and enterprises scale through branding.",
        profileLink: "/about/faculty/suman-rangabhashyam",
        socials: {
            linkedin: "https://www.linkedin.com/in/sumiranga/",
        }
    },
    {
        name: "Dr. Srikanth Itapu",
        role: "SME in the Quantum Technologies",
        bio: "Subject matter expert in quantum technologies, advanced materials, and semiconductor devices with over 12 years of research experience.",
        image: "/images/dr-itapu-srikanth.jpg",
        profileLink: "/about/faculty/dr-srikanth-itapu",
        socials: {
            linkedin: "https://www.linkedin.com/in/sitapu/",
        }
    },
    {
        name: "P. Venkata Nagendra Reddy",
        role: "SME in Sustainability",
        bio: "Veteran operator and Sustainability Architect with 19+ years of experience. Leading the transition to a 'Cultivation Economy' through tech-driven ESG compliance and biological scaling principles.",
        image: "/images/venkat-reddy.jpg",
        profileLink: "/about/faculty/p-venkata-nagendra-reddy",
        socials: {
            linkedin: "https://www.linkedin.com/in/pvenkatanreddy",
        }
    },
    {
        name: "Vivek Rangabhashyam",
        role: "SME in Graphic Design",
        bio: "Veteran 3D Animation Specialist and entrepreneur. Former Google 'GXBO' contributor and founder of Markitome, specializing in startup mentorship and global networking.",
        image: "/images/Vivek.jpg",
        profileLink: "/about/faculty/vivek-rangabhashyam",
        socials: {
            linkedin: "https://www.linkedin.com/in/vivekranga/",
            website: "https://vivekrangabhashyam.com/"
        }
    },
    {
        name: "Sai Pramodu",
        role: "Academic Advisor",
        bio: "Bringing 15+ years of diverse industry experience across software engineering, research, and strategy consulting. Expert in scaling tech ventures from ideation to market leadership, with a strong focus on emerging technologies, venture building, and go-to-market execution.",
        image: "/images/testimonials/saipramod.jpeg",
        // profileLink: "/about/faculty/sai-pramodu",
        // socials: {
        //     linkedin: "https://www.linkedin.com/in/maruthipelluri/",
        // }
    },
    {
        name: "Maruthi Ram Prasad Pelluri",
        role: "Advisory Member",
        bio: "Renowned educator with 36+ years of leadership at HPS Begumpet and Ramadevi Public School. National Award recipient and international ambassador for educational excellence.",
        image: "/images/maruthi.jpg",
        profileLink: "/about/faculty/maruthi-ram-prasad-pelluri",
        socials: {
            linkedin: "https://www.linkedin.com/in/maruthipelluri/",
        }
    },
    {
        name: "Dr. Jayaram",
        role: "Advisory Board Member",
        bio: "President of the Telangana Training and Placement Officers Association (TTPOA) and Vice President of the All India TPO Association. Bringing decades of experience in campus placements and aligning training ecosystems with industry needs.",
        image: "/images/dr-jayaram.jpg",
        socials: {
            linkedin: "#",
        }
    },
    {
        name: "Thirupathi Reddy",
        role: "Academics SME",
        bio: "Holds a Master of Commerce (M.Com) and a Master of Social Work (MSW). Brings over 23 years of teaching experience, including 5 years as a Junior College Principal and 13 years as a Degree College Principal.",
        image: "/images/ThirupathiReddy.jpeg",
        socials: {
            linkedin: "#",
        }
    },
    {
        name: "Krishna",
        role: "Technical SME",
        bio: "With over 10 years of hands-on experience in the electronics design and manufacturing industry, Krishna excels in driving engineering excellence from concept to delivery. He holds a Master of Technology (M.Tech) from IIT Madras, complementing a strong foundation in designing complex hardware systems and managing end-to-end product lifecycles in fast-paced environments.",
        image: "/images/testimonials/Krishna.jpeg",
        socials: {
            linkedin: "#",
        }
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />
            {/* Hero Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto bg-white mt-20">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foundry-text">
                        Our Team Members.
                    </h1>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-2xl">
                        We are not just educators. We are builders, researchers, and founders who have lived the journey from zero to one.
                    </p>
                </section>
            </div>

            {/* Team Grid Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                <section className="p-8 sm:p-12 md:p-16 text-brand-purple">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <SmallTeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

function SmallTeamCard({ member, index }: { member: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col w-full h-full"
        >
            <div className="relative w-full h-[320px] overflow-hidden bg-slate-100">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                        className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${member.imageClass ?? ""}`}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-foundry-off-white flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-600/5 border border-blue-500/10 flex items-center justify-center mb-2">
                            <Users className="text-blue-400" size={24} />
                        </div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Photo Pending</span>
                    </div>
                )}
            </div>

            <div className="relative z-10 w-[85%] bg-[#F7F7F4] border border-slate-200/80 p-6 -mt-10 ml-0 flex flex-col justify-between flex-1 min-h-[190px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-[#DCE7F1]">
                <div>
                    <h3 className="font-serif text-xl font-bold text-brand-purple mb-1">
                        {member.name}
                    </h3>
                    <div className="text-deep-blue font-semibold text-xs uppercase tracking-wider mb-3">
                        {member.role}
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-sans line-clamp-4">
                        {member.bio}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    {member.profileLink ? (
                        <Link
                            href={member.profileLink}
                            target={member.profileLink.startsWith("http") ? "_blank" : undefined}
                            rel={member.profileLink.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:text-[#0f172a] transition-colors group/link"
                        >
                            View Profile
                            <ChevronRight
                                size={14}
                                strokeWidth={2.5}
                                className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5"
                            />
                        </Link>
                    ) : (
                        <span />
                    )}

                    {member.socials?.linkedin && member.socials.linkedin !== "#" && (
                        <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-1.5 rounded-lg bg-white hover:bg-blue-50 text-slate-400 hover:text-blue-600 border border-slate-200 hover:border-blue-200 transition-all"
                            title="View LinkedIn Profile"
                        >
                            <Linkedin size={16} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

