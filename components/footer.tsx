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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
                    {/* Column 1: Deep Tech */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-900 font-bold mb-1">School of Deep Tech</h3>
                        <FooterLink href="/schools/ai">Artificial Intelligence</FooterLink>
                        <FooterLink href="/schools/cyber">Cyber Security</FooterLink>
                        <FooterLink href="/schools/quantum-computing">Quantum Computing</FooterLink>
                        <FooterLink href="/schools/blockchain">Blockchain</FooterLink>
                    </div>

                    {/* Column 2: Specialized Schools */}
                    <div className="flex flex-col gap-7">
                        <h3 className="text-slate-900 font-bold mb-1">Specialized Schools</h3>
                        <FooterLink href="/schools/venture-building">School of Entrepreneurship</FooterLink>
                        <FooterLink href="/schools/esg">School of Sustainability</FooterLink>
                        <FooterLink href="/schools/renewable-energy">School of Energy</FooterLink>
                    </div>

                    {/* Column 3: Programs */}
                    <div className="flex flex-col gap-7">
                        <h3 className="text-slate-900 font-bold mb-1">Programs</h3>
                        <FooterLink href="/programs/professional">Professional Learning</FooterLink>
                        <FooterLink href="/programs/executive">Executive Learning</FooterLink>
                        <FooterLink href="/programs/educators">Educators and Faculty</FooterLink>
                    </div>

                    {/* Column 4: Explore */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-slate-900 font-bold mb-1">Explore</h3>
                        <FooterLink href="/campus">Campus</FooterLink>
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/events">Events</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                        <FooterLink href="/faq">FAQs</FooterLink>
                    </div>
                </div>

                {/* Contact & Social Section */}
                <div className="pt-8 border-t border-slate-200 mb-12">
                    <h3 className="text-slate-900 font-bold mb-6">Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-4">
                        {/* Headers / Primary Row */}
                        <div className="md:col-span-1">
                            <a href="mailto:info@thefoundrys.com" className="flex items-center gap-3 hover:text-slate-900 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                    <Mail size={14} className="text-slate-600" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">info@thefoundrys.com</span>
                            </a>
                        </div>
                        <div className="md:col-span-1 flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                <MapPin size={14} className="text-slate-600" />
                            </div>
                            <span className="text-sm font-bold text-slate-900 mt-2">United States of America</span>
                        </div>
                        <div className="md:col-span-2 flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                <MapPin size={14} className="text-slate-600" />
                            </div>
                            <span className="text-sm font-bold text-slate-900 mt-2">Hyderabad Office</span>
                        </div>

                        {/* Content Row */}
                        <div className="md:col-span-1">
                            <div className="flex gap-3 pl-1">
                                <Link href="https://x.com/thefoundrys" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Twitter size={14} /></Link>
                                <Link href="https://www.linkedin.com/company/the-foundry-s" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Linkedin size={14} /></Link>
                                <Link href="https://www.instagram.com/the.foundrys/" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Instagram size={14} /></Link>
                                <Link href="https://www.youtube.com/@TheFoundrys" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Youtube size={14} /></Link>
                                <Link href="https://www.facebook.com/profile.php?id=61587055543711" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all"><Facebook size={14} /></Link>
                            </div>
                        </div>
                        <div className="md:col-span-1 pl-12">
                            <span className="block text-slate-500 leading-relaxed text-sm">
                                2343 Dulles Station Blvd, Apt 256, Herndon, Virginia 20171
                            </span>
                        </div>
                        <div className="md:col-span-2 pl-12">
                            <span className="block text-slate-500 leading-relaxed text-sm">
                                Sasi Icon, Beside Madhapur Metro Station, Jubilee Hills, <br />
                                Road No 36 & 37, Hyderabad, Telangana - 500033
                            </span>
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
