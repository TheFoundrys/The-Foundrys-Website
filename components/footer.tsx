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
                        <FooterLink href="/contact">Contact Us</FooterLink>
                        <FooterLink href="/faq">FAQs</FooterLink>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-900 font-bold mb-1">Contact</h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <a href="mailto:info@thefoundrys.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                                <Mail size={16} />
                                <span>info@thefoundrys.com</span>
                            </a>

                            <div className="flex items-start gap-2 leading-relaxed">
                                <MapPin size={16} className="shrink-0 mt-1" />
                                <p>(INDIA)</p>
                            </div>
                            <div>
                                <span>
                                    QHUB, Beside Madhapur Metro Station,
                                    Jubilee Hills, Road No 36 & 37,
                                    Hyderabad, Telangana - 500033.
                                </span>
                            </div>
                            <div className="flex items-start gap-2 leading-relaxed">
                                <MapPin size={16} className="shrink-0 mt-1" />
                                <p>(USA)</p>
                            </div>
                            <div>
                                <span>2343 Dulles Station Blvd, Apt 256,
                                    Herndon, Virginia 20171</span>
                            </div>
                        </div>

                        <div className="h-px bg-slate-200 my-1" />

                        <div className="flex gap-4">
                            <Link href="https://x.com/thefoundrys" className="hover:text-slate-900 transition-colors"><Twitter size={18} /></Link>
                            <Link href="https://www.linkedin.com/company/the-foundry-s" className="hover:text-slate-900 transition-colors"><Linkedin size={18} /></Link>
                            <Link href="https://www.instagram.com/the.foundrys/" className="hover:text-slate-900 transition-colors"><Instagram size={18} /></Link>
                            <Link href="https://www.youtube.com/@TheFoundrys" className="hover:text-slate-900 transition-colors"><Youtube size={18} /></Link>
                            <Link href="https://www.facebook.com/profile.php?id=61587055543711" className="hover:text-slate-900 transition-colors"><Facebook size={18} /></Link>
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
