import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, Wifi, Eye, Cpu, Share2, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

// Decrypting Text Component
const DecryptText = ({ text, parentHover }: { text: string, parentHover: boolean }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    useEffect(() => {
        if (!parentHover) {
            setDisplayText(text);
            return;
        }

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split("").map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [parentHover, text]);

    return <span>{displayText}</span>;
}

export function EngineeringSkills() {
    const skills = [
        {
            icon: <Terminal className="w-8 h-8 text-emerald-400" />,
            title: "Ethical Hacking",
            desc: "Advanced offensive security techniques to identify and exploit vulnerabilities."
        },
        {
            icon: <Shield className="w-8 h-8 text-emerald-400" />,
            title: "Network Defense",
            desc: "Designing secure network architectures and implementing multi-layered defense protocols."
        },
        {
            icon: <Lock className="w-8 h-8 text-emerald-400" />,
            title: "Cryptography",
            desc: "Mastering the mathematical foundations of security and breaking weak ciphers."
        },
        {
            icon: <Eye className="w-8 h-8 text-emerald-400" />,
            title: "Computer Forensics",
            desc: "Investigating digital crimes, acquiring evidence, and analyzing file systems."
        },
        {
            icon: <Cpu className="w-8 h-8 text-emerald-400" />,
            title: "Penetration Testing",
            desc: "Systematic testing of networks and applications to ensure rigorous security."
        },
        {
            icon: <Share2 className="w-8 h-8 text-emerald-400" />,
            title: "Risk Management",
            desc: "Developing frameworks for cybersecurity governance and business risk mitigation."
        },
        {
            icon: <Wifi className="w-8 h-8 text-emerald-400" />,
            title: "Wireless Security",
            desc: "Securing radio frequency communications and attacking modern wireless protocols."
        },
        {
            icon: <Activity className="w-8 h-8 text-emerald-400" />,
            title: "Threat Hunting",
            desc: "Proactively detecting sophisticated malware that has evaded standard defenses."
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Image Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0 bg-contain bg-right bg-no-repeat hue-rotate-90 saturate-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563206767-5b1d972e9fb9?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The <span className="text-emerald-500">Arsenal</span> you will build.
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We don't teach tools. Tools change. We teach the underlying physics of cyberspace.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, i) => {
                        // eslint-disable-next-line
                        const [isHovered, setIsHovered] = useState(false);

                        return (
                            <motion.div
                                key={i}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-emerald-500/30 transition-colors group cursor-crosshair"
                            >
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 font-mono min-h-[1.75rem]">
                                    <DecryptText text={skill.title} parentHover={isHovered} />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
