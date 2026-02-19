import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin, Facebook, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 text-slate-500 font-medium py-12 border-t border-slate-200 font-sans tracking-tight">
            <div className="container mx-auto px-6">

                {/* Note / Breadcrumb Style Top */}
                <div className="mb-8 border-b border-slate-200 pb-6">
                    <div className="max-w-3xl leading-relaxed text-slate-500">
                        <span className="font-bold text-slate-800 text-xl block mb-2">The Foundry's.</span>
                        <span className="text-lg">We forge Architects in Deep Tech, Entrepreneurship, Sustainability and Energy.</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-sm">

                    {/* Column 1: Deep Tech */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">School of Deep Tech</h3>
                        <FooterLink href="/schools/ai">Artificial Intelligence</FooterLink>
                        <FooterLink href="/schools/cyber">Cyber Security</FooterLink>
                        <FooterLink href="/schools/quantum-computing">Quantum Computing</FooterLink>
                        <FooterLink href="/schools/blockchain">Blockchain</FooterLink>
                    </div>

                    {/* Column 2: Specialized Schools */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Specialized Schools</h3>
                        <FooterLink href="/schools/venture-building">School of Entrepreneurship</FooterLink>
                        <FooterLink href="/schools/esg">School of Sustainability</FooterLink>
                        <FooterLink href="/schools/renewable-energy">School of Energy</FooterLink>
                        {/* <FooterLink href="/schools/strategy">Strategic Innovation</FooterLink> */}
                    </div>

                    {/* Column 3: Programs */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Programs</h3>
                        <FooterLink href="/programs/professional">Professional Learning</FooterLink>
                        <FooterLink href="/programs/executive">Executive Learning</FooterLink>
                        <FooterLink href="/programs/educators">Educators and Faculty</FooterLink>
                    </div>

                    {/* Column 4: Explore */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Explore</h3>
                        {/* <FooterLink href="/programs">Online Programs</FooterLink> */}
                        <FooterLink href="/campus">Campus</FooterLink>
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/events">Events</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                        <FooterLink href="/faq">FAQs</FooterLink>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left col-span-2 md:col-span-1">
                        <h3 className="text-slate-900 font-bold mb-1 w-full text-center md:text-left">Contact</h3>

                        <div className="flex flex-col gap-4 text-sm w-full items-center md:items-start">
                            <a href="mailto:info@thefoundrys.com" className="flex flex-col items-center gap-2 hover:text-slate-900 transition-colors text-center md:flex-row md:text-left md:gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                    <Mail size={14} className="text-slate-600" />
                                </div>
                                <span>info@thefoundrys.com</span>
                            </a>

                            <div className="flex flex-col items-center gap-2 leading-relaxed text-center md:flex-row md:items-start md:text-left md:gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-slate-600" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-800 block text-xs tracking-wider mb-1">HeadQuarters</span>
                                    <span className="block text-slate-500">
                                        2343 Dulles Station Blvd, Apt 256,<br />
                                        Herndon, Virginia 20171
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2 leading-relaxed text-center md:flex-row md:items-start md:text-left md:gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-slate-600" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-800 block text-xs tracking-wider mb-1">INDIA</span>
                                    <span className="block text-slate-500">
                                        SASI ICON, Beside Madhapur Metro Station,
                                        Jubilee Hills, Road No 36 &amp; 37, Hyderabad, Telangana - 500033.
                                    </span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="h-px bg-slate-200 my-2 w-full" />

                        <div className="flex justify-center gap-4 w-full md:justify-start">
                            <Link href="https://x.com/thefoundrys" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Twitter size={16} /></Link>
                            <Link href="https://www.linkedin.com/company/the-foundry-s" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Linkedin size={16} /></Link>
                            <Link href="https://www.instagram.com/the.foundrys/" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Instagram size={16} /></Link>
                            <Link href="https://www.youtube.com/@TheFoundrys" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Youtube size={16} /></Link>
                            <Link href="https://www.facebook.com/profile.php?id=61587055543711" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Facebook size={16} /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
                        <p>Copyright © {currentYear} The Foundry's. All rights reserved.</p>
                        <div className="hidden md:block h-3 w-px bg-slate-300"></div>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:underline decoration-slate-400 underline-offset-2">Privacy Policy</Link>
                            <Link href="/terms" className="hover:underline decoration-slate-400 underline-offset-2">Terms of Use</Link>
                            <Link href="/legal" className="hover:underline decoration-slate-400 underline-offset-2">Legal</Link>
                            <Link href="/refund-policy" className="hover:underline decoration-slate-400 underline-offset-2">Refund Policy</Link>
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
