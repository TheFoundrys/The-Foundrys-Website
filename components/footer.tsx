import Link from "next/link";

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
                        <p className="mt-6 text-sm font-semibold tracking-wider text-red-500 uppercase">Limited Seats. Selective Entry.</p>
                    </div>
                )}

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
                    <p>&copy; 2026 The Foundry's. Hitech City, Hyderabad.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="/campus" className="hover:text-slate-900 transition-colors">The Campus</Link>
                        <Link href="/faq" className="hover:text-slate-900 transition-colors">FAQs</Link>
                        <Link href="/" className="hover:text-slate-900 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
