import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 text-slate-500 text-xs font-medium py-12 border-t border-slate-200 font-sans tracking-tight">
            <div className="container mx-auto px-6 max-w-5xl">
                
                {/* Note / Breadcrumb Style Top */}
                <div className="mb-8 border-b border-slate-200 pb-6">
                    <p className="max-w-2xl leading-relaxed">
                        <span className="font-semibold text-slate-700">The Foundry's.</span> 
                        <br />
                         Degrees are printed. Companies are built. 
                         <br />
                        We forge Architects in Deep Tech, Entrepreneurship, and Sustainable Energy in Hitech City, Hyderabad.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
                    
                    {/* Column 1: Deep Tech */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">School of Deep Tech</h3>
                        <FooterLink href="/programs/ai">Artificial Intelligence</FooterLink>
                        <FooterLink href="/programs/cyber">Cyber Security</FooterLink>
                        <FooterLink href="/programs/quantum-computing">Quantum Computing</FooterLink>
                        <FooterLink href="/programs/blockchain">Blockchain</FooterLink>
                    </div>

                    {/* Column 2: Specialized Schools */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Specialized Schools</h3>
                        <FooterLink href="/programs/venture-building">School of Entrepreneurship</FooterLink>
                        <FooterLink href="/programs/esg">School of Sustainability</FooterLink>
                        <FooterLink href="/programs/renewable-energy">School of Energy</FooterLink>
                        {/* <FooterLink href="/programs/strategy">Strategic Innovation</FooterLink> */}
                    </div>

                    {/* Column 3: Explore */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Explore</h3>
                        <FooterLink href="/campus">The Campus</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                        <FooterLink href="/faq">FAQs</FooterLink>
                    </div>

                    {/* Column 4: Account/Student */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">For Students</h3>
                        <FooterLink href="/apply">Apply Now</FooterLink>
                        <li className="list-none">
                            <Link 
                                href="https://compass.thefoundrys.com" 
                                target="_blank"
                                className="hover:underline decoration-slate-400 underline-offset-2 flex items-center gap-1"
                            >
                                <span>Compass Portal</span>
                                <ArrowUpRight size={10} className="opacity-50" />
                            </Link>
                        </li>
                    </div>

                    {/* Column 5: Connect */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Connect</h3>
                        <FooterLink href="https://x.com/thefoundrys">X (Twitter)</FooterLink>
                        <FooterLink href="https://www.linkedin.com/company/thefoundrys">LinkedIn</FooterLink>
                        <FooterLink href="https://www.instagram.com/the.foundrys/">Instagram</FooterLink>
                        <FooterLink href="https://www.youtube.com/@TheFoundrys">YouTube</FooterLink>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
                        <p>Copyright © {currentYear} The Foundry's. All rights reserved.</p>
                        <div className="hidden md:block h-3 w-px bg-slate-300"></div>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:underline decoration-slate-400 underline-offset-2">Privacy Policy</Link>
                            <Link href="/terms" className="hover:underline decoration-slate-400 underline-offset-2">Terms of Use</Link>
                            <Link href="/legal" className="hover:underline decoration-slate-400 underline-offset-2">Legal</Link>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-700">
                        India
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:underline decoration-slate-400 underline-offset-2 hover:text-slate-900 transition-colors">
            {children}
        </Link>
    )
}
