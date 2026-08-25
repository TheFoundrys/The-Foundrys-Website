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
        image: "/images/vishwa-new.jpg",
        profileLink: "/vishwanathakuthota",
        socials: {
            linkedin: "https://www.linkedin.com/in/vishwanathakuthota/",
            website: "https://www.drpinnacle.com"
        }
    },
    {
        name: "Pramod Chada",
        role: "Cheif opernation officer",
        image: "/images/pramod-chada.jpg",
        profileLink: "/about/faculty/pramod-chada",
        socials: {
            linkedin: "https://www.linkedin.com/in/pramod-chada-profile/",
        }
    },
    {
        name: "Pramod J. P.",
        role: "Head of R&D",
        image: "/images/pramod-jp.png",
        profileLink: "/about/faculty/pramod-jp",
        socials: {
            linkedin: "https://www.linkedin.com/in/jp-pramod-a710985a/",
        }
    },
    {
        name: "Soujanya Kanagala",
        role: "Operations Head",
        image: "/images/soujanya.jpg",
        profileLink: "/about/faculty/soujanya-kanagala",
        socials: {
            linkedin: "https://www.linkedin.com/in/soujanya-kanagala-07304833/"
        }
    },
    {
        name: "Akuthota Aravind",
        role: "Business Development Executive",
        image: "/images/araavind.png",
        profileLink: "/about/faculty/akuthota-aravind",
        socials: {
            linkedin: "https://www.linkedin.com/in/akuthota-aravind-608455193/"
        }
    },
    {
        name: "Srinivas Sadasyula",
        role: "Vice President",
        image: "/images/srinivas-sadasyula.jpg",
        profileLink: "/about/faculty/srinivas-sadasyula",
        socials: {
            linkedin: "https://www.linkedin.com/in/srinivas-sadasyula-411b79161/",
        }
    },
{
        name: "Abhishek Sharma",
        role: "SME in Data analytics",
        image: "/images/abhishek shaarma.png",
        imageClass: "brightness-125 contrast-110 object-[center_20%]",
        profileLink: "/about/faculty/abhishek-sharma",
        socials: {
            linkedin: "https://linkedin.com/in/abhishek-sharma-27b585ba"
        }
    },
    {
        name: "Dr. Suman Rangabhashyam",
        role: "SME in Social Entrepreneurship",
        image: "/images/suman rangabhasyam.jpg",
        profileLink: "/about/faculty/suman-rangabhashyam",
        socials: {
            linkedin: "https://www.linkedin.com/in/sumiranga/",
        }
    },
    {
        name: "Dr. Srikanth Itapu",
        role: "SME in the Quantum Technologies",
        image: "/images/dr-itapu-srikanth.jpg",
        profileLink: "/about/faculty/dr-srikanth-itapu",
        socials: {
            linkedin: "https://www.linkedin.com/in/sitapu/",
        }
    },
    {
        name: "P. Venkata Nagendra Reddy",
        role: "SME in Sustainability",
        image: "/images/venkat-reddy.jpg",
        profileLink: "/about/faculty/p-venkata-nagendra-reddy",
        socials: {
            linkedin: "https://www.linkedin.com/in/pvenkatanreddy",
        }
    },
    {
        name: "Vivek Rangabhashyam",
        role: "SME in Graphic Design",
        image: "/images/Vivek.jpg",
        profileLink: "/about/faculty/vivek-rangabhashyam",
        socials: {
            linkedin: "https://www.linkedin.com/in/vivekranga/",
            website: "https://vivekrangabhashyam.com/"
        }
    },
    {
        name: "Thirupathi Reddy",
        role: "SME in Academics",
        image: "/images/ThirupathiReddy.jpeg",
        profileLink: "/about/faculty/thirupathi-reddy",
        socials: {
            linkedin: "#",
        }
    },
    {
        name: "Maruthi Ram Prasad Pelluri",
        role: "Advisory Member",
        image: "/images/maruthi.jpg",
        profileLink: "/about/faculty/maruthi-ram-prasad-pelluri",
        socials: {
            linkedin: "https://www.linkedin.com/in/maruthipelluri/",
        }
    },
    {
        name: "Dr. Jayaram",
        role: "Advisory Member",
        image: "/images/dr-jayaram.jpg",
        profileLink: "/about/faculty/dr-jayaram",
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
                <section className="p-6 sm:p-10 md:p-12 text-brand-purple">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            <div className="relative w-full h-[280px] overflow-hidden bg-slate-100 border border-slate-200/80">
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

            <div className="relative z-10 w-[88%] bg-[#F1F1EC] border border-slate-200/80 p-4 -mt-6 mx-auto flex flex-col justify-between h-[105px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-[#DCE7F1]">
                <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-purple mb-0.5 truncate" title={member.name}>
                        {member.name}
                    </h3>
                    <div className="text-deep-blue font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider truncate mb-1" title={member.role}>
                        {member.role}
                    </div>
                </div>

                <div className="mt-auto pt-1 flex items-center justify-between">
                    {member.profileLink ? (
                        <Link
                            href={member.profileLink}
                            target={member.profileLink.startsWith("http") ? "_blank" : undefined}
                            rel={member.profileLink.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-brand-purple hover:text-[#0f172a] transition-colors group/link"
                        >
                            View Profile
                            <ChevronRight
                                size={13}
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
                            className="inline-flex items-center justify-center p-1 rounded-lg bg-white hover:bg-blue-50 text-slate-400 hover:text-blue-600 border border-slate-200 hover:border-blue-200 transition-all"
                            title="View LinkedIn Profile"
                        >
                            <Linkedin size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

