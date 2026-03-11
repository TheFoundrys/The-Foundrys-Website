import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin, Facebook, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
    isDark?: boolean;
}

export function Footer({ hideCTA = false, isDark = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${isDark ? 'bg-[#0a0f1e] text-slate-400 border-slate-800' : 'bg-slate-50 text-slate-500 border-slate-200'} font-medium py-12 border-t font-sans tracking-tight`}>
            <div className="container mx-auto px-10 md:px-16 lg:px-24">

                {/* Note / Breadcrumb Style Top */}
                <div className={`mb-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} pb-6`}>
                    <div className="max-w-3xl leading-relaxed">
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'} text-xl block mb-2`}>The Foundry's.</span>
                        <span className="text-lg">We forge Architects in Deep Tech, Entrepreneurship, Sustainability and Energy.</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
                    {/* Column 1: Deep Tech */}
                    <div className="flex flex-col gap-4">
                        <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-1`}>School of Deep Tech</h3>
                        <FooterLink href="/schools/ai" isDark={isDark}>Artificial Intelligence</FooterLink>
                        <FooterLink href="/schools/cyber" isDark={isDark}>Cyber Security</FooterLink>
                        <FooterLink href="/schools/quantum-computing" isDark={isDark}>Quantum Computing</FooterLink>
                        <FooterLink href="/schools/blockchain" isDark={isDark}>Blockchain</FooterLink>
                    </div>

                    {/* Column 2: Specialized Schools */}
                    <div className="flex flex-col gap-7">
                        <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-1`}>Specialized Schools</h3>
                        <FooterLink href="/schools/venture-building" isDark={isDark}>School of Entrepreneurship</FooterLink>
                        <FooterLink href="/schools/esg" isDark={isDark}>School of Sustainability</FooterLink>
                        <FooterLink href="/schools/renewable-energy" isDark={isDark}>School of Energy</FooterLink>
                    </div>

                    {/* Column 3: Programs */}
                    <div className="flex flex-col gap-7">
                        <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-1`}>Programs</h3>
                        <FooterLink href="/programs/professional" isDark={isDark}>Professional Learning</FooterLink>
                        <FooterLink href="/programs/executive" isDark={isDark}>Executive Learning</FooterLink>
                        <FooterLink href="/programs/educators" isDark={isDark}>Educators and Faculty</FooterLink>
                    </div>

                    {/* Column 4: Explore */}
                    <div className="flex flex-col gap-3">
                        <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-1`}>Explore</h3>
                        <FooterLink href="/campus" isDark={isDark}>Campus</FooterLink>
                        <FooterLink href="/about" isDark={isDark}>About Us</FooterLink>
                        <FooterLink href="/news" isDark={isDark}>News</FooterLink>
                        <FooterLink href="/events" isDark={isDark}>Events</FooterLink>
                        <FooterLink href="/contact" isDark={isDark}>Contact Us</FooterLink>
                        <FooterLink href="/faq" isDark={isDark}>FAQs</FooterLink>
                    </div>
                </div>

                {/* Contact & Social Section */}
                <div className={`pt-8 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} mb-12`}>
                    <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-6`}>Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-x-12 gap-y-6">
                        {/* Email */}
                        <div className="md:col-start-1 md:row-start-1">
                            <a href="mailto:info@thefoundrys.com" className={`flex items-center gap-3 ${isDark ? 'hover:text-emerald-400' : 'hover:text-slate-900'} transition-colors group`}>
                                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-slate-100'} flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors`}>
                                    <Mail size={14} className={isDark ? 'text-emerald-400' : 'text-slate-600'} />
                                </div>
                                <span className={`text-sm font-bold ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>info@thefoundrys.com</span>
                            </a>
                        </div>

                        {/* Social Icons - below addresses on mobile, below email on desktop */}
                        <div className="order-last md:order-none md:col-start-1 md:row-start-2">
                            <div className="flex gap-3 pl-1">
                                <Link href="https://x.com/thefoundrys" className={`w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'} transition-all`}><Twitter size={14} /></Link>
                                <Link href="https://www.linkedin.com/company/the-foundry-s" className={`w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'} transition-all`}><Linkedin size={14} /></Link>
                                <Link href="https://www.instagram.com/the.foundrys/" className={`w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'} transition-all`}><Instagram size={14} /></Link>
                                <Link href="https://www.youtube.com/@TheFoundrys" className={`w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'} transition-all`}><Youtube size={14} /></Link>
                                <Link href="https://www.facebook.com/profile.php?id=61587055543711" className={`w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white'} transition-all`}><Facebook size={14} /></Link>
                            </div>
                        </div>

                        {/* USA Office */}
                        <div className="md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col gap-2">
                            <div className="flex items-start gap-4">
                                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-emerald-400' : 'bg-slate-100 text-slate-600'} flex items-center justify-center shrink-0`}>
                                    <MapPin size={14} />
                                </div>
                                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'} mt-2`}>United States of America</span>
                            </div>
                            <span className="block italic leading-relaxed text-sm pl-12">
                                2343 Dulles Station Blvd, Apt 256, Herndon, Virginia 20171
                            </span>
                        </div>

                        {/* Hyderabad Office */}
                        <div className="md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-2 flex flex-col gap-2">
                            <div className="flex items-start gap-4">
                                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-slate-900 border border-slate-800 text-emerald-400' : 'bg-slate-100 text-slate-600'} flex items-center justify-center shrink-0`}>
                                    <MapPin size={14} />
                                </div>
                                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'} mt-2`}>Hyderabad Office</span>
                            </div>
                            <span className="block italic leading-relaxed text-sm pl-12">
                                Sasi Icon, Beside Madhapur Metro Station, Jubilee Hills, <br />
                                Road No 36 & 37, Hyderabad, Telangana - 500033
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} flex flex-col md:flex-row justify-between items-center gap-4 text-sm`}>
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
                        <p>Copyright © {currentYear} The Foundry's. All rights reserved.</p>
                        <div className={`hidden md:block h-3 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
                        <div className="flex gap-4">
                            <Link href="/privacy" className={`hover:underline decoration-slate-400 underline-offset-2 ${isDark ? 'hover:text-emerald-400' : ''}`}>Privacy Policy</Link>
                            <Link href="/terms" className={`hover:underline decoration-slate-400 underline-offset-2 ${isDark ? 'hover:text-emerald-400' : ''}`}>Terms of Use</Link>
                            <Link href="/legal" className={`hover:underline decoration-slate-400 underline-offset-2 ${isDark ? 'hover:text-emerald-400' : ''}`}>Legal</Link>
                            <Link href="/refund-policy" className={`hover:underline decoration-slate-400 underline-offset-2 ${isDark ? 'hover:text-emerald-400' : ''}`}>Refund Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, children, isDark = false }: { href: string, children: React.ReactNode, isDark?: boolean }) {
    return (
        <Link href={href} className={`hover:underline decoration-slate-400 underline-offset-2 ${isDark ? 'hover:text-emerald-400 text-slate-400' : 'hover:text-slate-900 text-slate-500'} transition-colors`}>
            {children}
        </Link>
    )
}
