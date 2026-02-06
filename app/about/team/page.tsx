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
        bio: "Deep Tech Entrepreneur & Architect. Building at the intersection of AI, Quantum, and Human Potential.",
        image: "/images/vishwa-new.jpg",
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
    // Add more team members here
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
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}

                        {/* Hiring / Join Us Card */}
                        {/* <div className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-slate-300 min-h-[400px]">
                      <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400">
                          <ArrowUpRight size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Foundry</h3>
                      <p className="text-slate-600 mb-6">
                          Are you a deep tech expert or founder? We are always looking for mentors and architects.
                      </p>
                      <Link href="/apply" className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
                          Apply to Join
                      </Link>
                  </div> */}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
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
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
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
