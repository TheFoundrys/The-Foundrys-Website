import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

interface FooterProps {
    hideCTA?: boolean;
    isDark?: boolean;
}

export function Footer({ hideCTA = false, isDark = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${isDark ? 'bg-black text-neutral-400 border-neutral-900' : 'bg-white text-neutral-500 border-neutral-200'} font-medium py-4 border-t font-sans tracking-tight`}>
            <div className="max-w-[1900px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Top Section */}
                <div className={`mb-4 border-b ${isDark ? 'border-neutral-900' : 'border-neutral-200'} pb-2`}>
                    <div className="max-w-5xl leading-relaxed">
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-black'} text-xl block mb-0.5`}>
                            The Foundry's.
                        </span>
                        <span className="text-sm">
                            We forge Architects in Deep Tech, Entrepreneurship, Sustainability and Energy.
                        </span>
                    </div>
                </div>

                {/* Fixed Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4 mb-4">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-1 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>
                            School of Deep Tech
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <FooterLink href="/schools/ai" isDark={isDark}>Artificial Intelligence</FooterLink>
                            <FooterLink href="/schools/cyber" isDark={isDark}>Cyber Security</FooterLink>
                            <FooterLink href="/schools/quantum-computing" isDark={isDark}>Quantum Computing</FooterLink>
                            <FooterLink href="/schools/blockchain" isDark={isDark}>Blockchain</FooterLink>
                            <FooterLink href="/schools/datascience" isDark={isDark}>Data Science</FooterLink>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-1 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>
                            Specialized Schools
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <FooterLink href="/schools/venture-building" isDark={isDark}>School of Entrepreneurship</FooterLink>
                            <FooterLink href="/schools/esg" isDark={isDark}>School of Sustainability</FooterLink>
                            <FooterLink href="/schools/renewable-energy" isDark={isDark}>School of Energy</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-1 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>
                            Programs
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <FooterLink href="/programs/professional" isDark={isDark}>Professional Learning</FooterLink>
                            <FooterLink href="/programs/fellow-executive" isDark={isDark}>Fellow Executive Program</FooterLink>
                            <FooterLink href="/programs/educators" isDark={isDark}>Educators and Faculty</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-1 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>
                            Explore
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <FooterLink href="/campus" isDark={isDark}>Campus</FooterLink>
                            <FooterLink href="/about" isDark={isDark}>About Us</FooterLink>
                            <FooterLink href="/testimonials" isDark={isDark}>Testimonials</FooterLink>
                            <FooterLink href="/faq" isDark={isDark}>FAQs</FooterLink>
                            <FooterLink href="/contact" isDark={isDark}>Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="flex flex-col gap-1 md:min-w-[180px] flex-1">
                        <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <FooterLink href="/blog" isDark={isDark}>Blog</FooterLink>
                            <FooterLink href="/news" isDark={isDark}>News</FooterLink>
                            <FooterLink href="/events" isDark={isDark}>Events & Webinars</FooterLink>
                        </ul>
                    </div>

                </div>

                {/* Contact Section */}
                <div className={`pt-4 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'} mb-4`}>
                    <h3 className={`${isDark ? 'text-white' : 'text-black'} font-bold mb-2 text-sm uppercase tracking-wider`}>
                        Contact
                    </h3>

                    <div className="flex flex-col lg:flex-row gap-x-16 gap-y-4">
                        {/* Email, Phone & Social */}
                        <div className="flex flex-col gap-2 md:min-w-[250px]">
                            <a
                                href="mailto:info@thefoundrys.com"
                                className={`flex items-center gap-2 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                            >
                                <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                    <Mail size={12} />
                                </div>
                                <span className={`${isDark ? 'text-neutral-300' : 'text-black'} font-bold text-sm`}>
                                    info@thefoundrys.com
                                </span>
                            </a>

                            <a
                                href="tel:+917981171474"
                                className={`flex items-center gap-2 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                            >
                                <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                    <Phone size={12} />
                                </div>
                                <span className={`${isDark ? 'text-neutral-300' : 'text-black'} font-bold text-sm`}>
                                    +91 79811 71474
                                </span>
                            </a>

                            <div className="flex gap-4 items-center mt-0.5">
                                <Link href="https://twitter.com/thefoundrys" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Twitter size={18} /></Link>
                                <Link href="https://www.linkedin.com/company/the-foundry-s/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Linkedin size={18} /></Link>
                                <Link href="https://www.instagram.com/the.foundrys/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Instagram size={18} /></Link>
                                <Link href="https://www.youtube.com/@thefoundrys" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Youtube size={18} /></Link>
                                <Link href="https://www.facebook.com/thefoundrys/" className={`${isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-black'} transition-all`}><Facebook size={18} /></Link>
                            </div>
                        </div>

                        {/* Addresses Group - All three side by side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                            {/* USA Office */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center">
                                    <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={12} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>United States</span>
                                </div>
                                <p className="text-xs leading-relaxed pl-8 italic opacity-80">
                                    2343 Dulles Station Blvd, Apt 256, Herndon, Virginia 20171
                                </p>
                            </div>

                            {/* Hyderabad Office */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center">
                                    <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={12} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>Hyderabad Office</span>
                                </div>
                                <p className="text-xs leading-relaxed pl-8 italic opacity-80">
                                    Jubilee Hills, Road No 36 & 37, Hyderabad, Telangana - 500033
                                </p>
                            </div>

                            {/* Warangal Office */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-2 items-center">
                                    <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-neutral-950 border border-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'} flex items-center justify-center shrink-0`}>
                                        <MapPin size={12} />
                                    </div>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} font-bold text-sm`}>Warangal Office</span>
                                </div>
                                <p className="text-xs leading-relaxed pl-8 italic opacity-80">
                                    2-6-983 New, 2/725/1-1-X/5-3 old circuit house road, KLN Reddy colony, Hanamkonda Warangal Telangana 506001.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className={`pt-3 border-t ${isDark ? 'border-neutral-900' : 'border-neutral-200'} flex flex-col md:flex-row justify-between items-center gap-4 text-xs`}>
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