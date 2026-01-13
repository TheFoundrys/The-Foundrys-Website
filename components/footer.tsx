import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
    return (
        <footer className="py-24 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
             {/* Ethereal Glow at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                
                {!hideCTA && (
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6">
                            AMBITION IS COMMON. <br/>
                            <span className="text-slate-400">EXECUTION IS RARE.</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 font-medium">Are you ready to stop studying and start building?</p>
                        
                        <Link href="/apply" className="px-12 py-6 bg-slate-900 text-white rounded-full font-bold text-xl hover:bg-slate-800 transition-all hover:scale-105 shadow-xl hover:shadow-2xl inline-block">
                            APPLY FOR PROGRAM
                        </Link>
                    </div>
                )}

                <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <p>&copy; 2026 The Foundry's. Hitech City, Hyderabad.</p>
                        
                        {/* Social Media Links */}
                        <div className="flex items-center gap-6">
                            <Link href="https://x.com/thefoundrys" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                <span className="sr-only">X (Twitter)</span>
                            </Link>
                            <Link href="https://www.instagram.com/the.foundrys/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                                <Instagram size={18} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://www.youtube.com/@TheFoundrys" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                                <Youtube size={18} />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="https://www.linkedin.com/company/thefoundrys" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                                <Linkedin size={18} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex space-x-8 mt-10 md:mt-0">
                        <Link href="/campus" className="hover:text-slate-900 transition-colors">The Campus</Link>
                        <Link href="/faq" className="hover:text-slate-900 transition-colors">FAQs</Link>
                        <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
