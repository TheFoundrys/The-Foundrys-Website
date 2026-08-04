import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
    isDark?: boolean;
}

export function Footer({ hideCTA = false, isDark = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${isDark ? 'bg-black text-neutral-400 border-neutral-900' : 'bg-white text-neutral-500 border-neutral-200'} font-medium py-12 border-t font-sans tracking-tight`}>
            <div className="max-w-[1900px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Top Section */}
                <div className={`mb-8 border-b ${isDark ? 'border-neutral-900' : 'border-neutral-200'} pb-6`}>
                    <div className="max-w-5xl leading-relaxed">
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-black'} text-3xl block mb-2`}>
                            The Foundry's.
                        </span>
                        <span className="text-xl">
                            We forge Architects in Deep Tech, Entrepreneurship, Sustainability and Energy.
                        </span>
                    </div>
                </div>

                {/* Fixed Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-12">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                            School of Deep Tech
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/schools/ai" isDark={isDark}>Artificial Intelligence</FooterLink>
                            <FooterLink href="/schools/cyber" isDark={isDark}>Cyber Security</FooterLink>
                            <FooterLink href="/schools/quantum-computing" isDark={isDark}>Quantum Computing</FooterLink>
                            <FooterLink href="/schools/blockchain" isDark={isDark}>Blockchain</FooterLink>
                            <FooterLink href="/schools/datascience" isDark={isDark}>Data Science</FooterLink>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                            Specialized Schools
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/schools/venture-building" isDark={isDark}>School of Entrepreneurship</FooterLink>
                            <FooterLink href="/schools/esg" isDark={isDark}>School of Sustainability</FooterLink>
                            <FooterLink href="/schools/renewable-energy" isDark={isDark}>School of Energy</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                            Programs
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/programs/professional" isDark={isDark}>Professional Learning</FooterLink>
                            <FooterLink href="/programs/executive" isDark={isDark}>Executive Learning</FooterLink>
                            <FooterLink href="/programs/educators" isDark={isDark}>Educators and Faculty</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                            Explore
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/campus" isDark={isDark}>Campus</FooterLink>
                            <FooterLink href="/about" isDark={isDark}>About Us</FooterLink>
                            <FooterLink href="/testimonials" isDark={isDark}>Testimonials</FooterLink>
                            <FooterLink href="/faq" isDark={isDark}>FAQs</FooterLink>
                            <FooterLink href="/contact" isDark={isDark}>Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="flex flex-col gap-4 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-lg`}>
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/blog" isDark={isDark}>Blog</FooterLink>
                            <FooterLink href="/news" isDark={isDark}>News</FooterLink>
                            <FooterLink href="/events" isDark={isDark}>Events & Webinars</FooterLink>
                        </ul>
                    </div>

                </div>

                {/* Contact Section */}
                <div className={`pt-8 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'} mb-12`}>
                    <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold mb-8 text-lg uppercase tracking-wider`}>
                        Contact
                    </h3>

                    <div className="flex flex-col lg:flex-row gap-x-16 gap-y-12">
                        {/* Email, Phone & Social */}
                        <div className="flex flex-col gap-4 md:min-w-[250px]">
                            <a
                                href="mailto:info@thefoundrys.com"
                                className={`flex items-center gap-3 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                            >
                                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                    <Mail size={16} />
                                </div>
                                <span className={`${isDark ? 'text-neutral-300' : 'text-black'} font-bold`}>
                                    info@thefoundrys.com
                                </span>
                            </a>

                            <a
                                href="tel:+917981171474"
                                className={`flex items-center gap-3 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                            >
                                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                    <Phone size={16} />
                                </div>
                                <span className={`${isDark ? 'text-neutral-300' : 'text-black'} font-bold`}>
                                    +91 79811 71474
                                </span>
                            </a>

                            <div className="flex gap-4 items-center mt-2">
                                <Link href="https://twitter.com/thefoundrys" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Twitter size={20} /></Link>
                                <Link href="https://www.linkedin.com/company/the-foundry-s/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Linkedin size={20} /></Link>
                                <Link href="https://www.instagram.com/the.foundrys/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Instagram size={20} /></Link>
                                <Link href="https://www.youtube.com/@thefoundrys" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Youtube size={20} /></Link>
                                <Link href="https://www.facebook.com/thefoundrys/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Facebook size={20} /></Link>
                            </div>
                        </div>

                        {/* Addresses Group - All three side by side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 flex-1">
                            {/* USA Office */}
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={16} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold`}>United States</span>
                                </div>
                                <p className="text-sm leading-relaxed pl-11 italic opacity-80">
                                    2343 Dulles Station Blvd, Apt 256, Herndon, Virginia 20171
                                </p>
                            </div>

                            {/* Hyderabad Office */}
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={16} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold`}>Hyderabad Office</span>
                                </div>
                                <p className="text-sm leading-relaxed pl-11 italic opacity-80">
                                    Jubilee Hills, Road No 36 & 37, Hyderabad, Telangana - 500033
                                </p>
                            </div>

                            {/* Warangal Office */}
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3 items-center">
                                    <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={16} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold`}>Warangal Office</span>
                                </div>
                                <p className="text-sm leading-relaxed pl-11 italic opacity-80">
                                    2-6-983 New, 2/725/1-1-X/5-3 old circuit house road, KLN Reddy colony, Hanamkonda Warangal Telangana 506001.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className={`pt-6 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'} flex flex-col md:flex-row justify-between items-center gap-4`}>
                    <p>© {currentYear} The Foundry's. All rights reserved.</p>

                    <div className="flex gap-4">
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/legal">Legal</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function FooterLink({ href, children, isDark = false }: any) {
    return (
        <Link href={href} className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'}`}>
            {children}
        </Link>
    );
}