"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const teamMembers = [
    {
        name: "Vishwanath Akuthota",
        role: "Founder & CEO",
        bio: "Deep Tech Entrepreneur & AI Architect with over 1.5 decades of experience. Building at the intersection of AI, Quantum, and Human Potential.",
        image: "/images/vishwa-new.jpg",
        profileLink: "/about/faculty/vishwanath-akuthota",
        socials: {
            linkedin: "https://www.linkedin.com/in/vishwanathakuthota/",
            website: "https://www.drpinnacle.com"
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
        role: "Head of the School of Sustainability",
        bio: "Veteran operator and Sustainability Architect with 19+ years of experience. Leading the transition to a 'Cultivation Economy' through tech-driven ESG compliance and biological scaling principles.",
        image: "/images/venkat-reddy.jpg",
        profileLink: "/about/faculty/p-venkata-nagendra-reddy",
        socials: {
            linkedin: "https://www.linkedin.com/in/pvenkatanreddy",
        }
    },
    {
        name: "Vivek Rangabhashyam",
        role: "3D Animation Specialist & Serial Entrepreneur",
        bio: "Veteran 3D Animation Specialist and entrepreneur. Former Google 'GXBO' contributor and founder of Markitome, specializing in startup mentorship and global networking.",
        image: "/images/Vivek.jpg",
        profileLink: "/about/faculty/vivek-rangabhashyam",
        socials: {
            linkedin: "https://www.linkedin.com/in/vivekranga/",
            website: "https://vivekrangabhashyam.com/"
        }
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            Our People
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            The Architects.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            We are not just educators. We are builders, researchers, and founders who have lived the journey from zero to one.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The Architects</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Building the foundations of the cultivation economy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board Section */}
            <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Advisory Board</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Strategic guidance from industry veterans and visionaries.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SmallTeamCard
                            member={{
                                name: "Dr. Suman Rangabhashyam",
                                role: "Social Entrepreneur & Author",
                                image: "/images/suman rangabhasyam.jpg",
                                bio: "TEDx Speaker, Author, and Social Entrepreneur helping individuals and enterprises scale through branding.",
                                profileLink: "/about/faculty/suman-rangabhashyam"
                            }}
                            index={0}
                        />
                        <SmallTeamCard
                            member={{
                                name: "Gunda Lakshmaiah",
                                role: "Business Development Executive",
                                image: "/images/laxman.jpg",
                                bio: "Driving growth at The Foundry’s through strategic partnerships and business opportunities in Deep Tech and Sustainability.",
                                profileLink: "/about/faculty/gunda-lakshmaiah"
                            }}
                            index={1}
                        />
                        <SmallTeamCard
                            member={{
                                name: "Akuthota Aravind",
                                role: "Business Development Executive",
                                image: "/images/akuthota.png",
                                bio: "Enabling strategic partnerships and expanding market opportunities at the convergence of Deep Tech and Sustainability.",
                                profileLink: "/about/faculty/akuthota-aravind"
                            }}
                            index={3}
                        />
                        <SmallTeamCard
                            member={{
                                name: "Soujanya Kanagala",
                                role: "Management Consultant",
                                image: "/images/soujanya.jpg",
                                bio: "Management Consultant with 14 years of experience specializing in business setup, operations, and organizational scaling.",
                                profileLink: "/about/faculty/soujanya-kanagala"
                            }}
                            index={2}
                        />
                    </div>
                </div>
            </section>

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
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col"
        >
            <div className="aspect-square relative bg-slate-100 overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{member.name}</h3>
                <div className="text-blue-600 font-semibold text-xs uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                </p>

                {member.profileLink && (
                    <div className="mt-auto">
                        <Link href={member.profileLink} className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                            View Profile <ArrowUpRight size={14} />
                        </Link>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

function TeamCard({ member, index }: { member: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
        >
            <div className="aspect-[4/5] relative bg-slate-200 overflow-hidden">
                {/* Image Placeholder if source not found, usually next/image handles this but for mockup we use color */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />

                {/* Socials Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex gap-3">
                    {member.socials.linkedin && (
                        <Link href={member.socials.linkedin} className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                            <Linkedin size={18} />
                        </Link>
                    )}
                    {member.socials.website && (
                        <Link href={member.socials.website} className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                            <Globe size={18} />
                        </Link>
                    )}
                </div>

                {member.image && (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                )}
            </div>

            <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</div>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    {member.bio}
                </p>

                {member.profileLink && (
                    <Link href={member.profileLink} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        Show More <ArrowUpRight size={16} />
                    </Link>
                )}
            </div>
        </motion.div>
    )
}
