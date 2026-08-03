import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Linkedin, Mail, GraduationCap, Award, BookOpen, Briefcase, Quote } from "lucide-react";

export default function PramodJPPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Header/Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shrink-0">
                            <Image
                                src="/images/pramod-jp.png"
                                alt="Pramod J. P."
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                Head of R&D
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                Pramod J. P.
                            </h1>
                            <p className="text-xl text-blue-400 font-medium mb-6">
                                Head of R&D
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="https://www.linkedin.com/in/jp-pramod-a710985a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Linkedin size={20} className="text-blue-400" />
                                </a>
                                <a href="mailto:#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Mail size={20} className="text-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Column - Main Bio */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Briefcase className="text-blue-600" /> Professional Profile
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        Pramod J. P. is a distinguished academic leader and researcher with over three decades of expertise and international exposure at the intersection of advanced physics, semiconductor technology, and sustainable energy.
                                    </p>
                                    <p>
                                        Exemplifying a rigorous school of finish, his portfolio focuses on piezotronics, ferroelectric ceramics, and green energy systems through global collaborations with premier institutions like IIT Hyderabad, IICT, CSIR, and Avira University.
                                    </p>
                                    <p>
                                        Blending technical mastery with specialized credentials in Intellectual Property Rights (IPR), Pramod actively protects and guides deep-tech and AI innovations while cultivating high-performance learning environments and robust academic-industrial partnerships.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 italic relative">
                                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                                <p className="text-xl text-slate-800 relative z-10 leading-relaxed">
                                    "My primary objective is to provide a safe and nurturing learning environment that encourages student growth and development, fostering an interest for research, learning, critical thinking, and problem-solving skills."
                                </p>
                            </div>

                            {/* Publications section */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <BookOpen className="text-blue-600" /> Publications & Patents
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                                        <div className="text-4xl font-extrabold text-blue-600 mb-2">12+</div>
                                        <div className="text-slate-700 font-semibold">Scopus Indexed Articles</div>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                                        <div className="text-4xl font-extrabold text-blue-600 mb-2">62+</div>
                                        <div className="text-slate-700 font-semibold">Multi-disciplinary Journal Articles</div>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                                        <div className="text-4xl font-extrabold text-blue-600 mb-2">3</div>
                                        <div className="text-slate-700 font-semibold">Book Chapters Published</div>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
                                        <div className="text-4xl font-extrabold text-blue-600 mb-2">2</div>
                                        <div className="text-slate-700 font-semibold">Patents Held</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Qualifications */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <GraduationCap className="text-blue-600" /> Education
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Doctor of Philosophy (Ph.D.)</p>
                                        <p className="text-sm text-slate-600">Material Science (Thesis in review)</p>
                                        <p className="text-sm text-blue-600 font-semibold">Lincoln University, Malaysia</p>
                                        <p className="text-xs text-slate-500 mt-1">In Collaboration with Avira University, Portugal (Lab Work at IITH, IICT, CSIR-I & OU-H)</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Additional Degrees</p>
                                        <p className="text-sm text-slate-600">M.Sc.(Phy), M.Sc.(Psy), M.Ed.(Edtec), PGDES, PGDCA, PGDIPR</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="text-blue-600" /> Certifications & Training
                                </h3>
                                <div className="space-y-4 text-sm text-slate-600">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                        <p className="font-medium">Ratified Assistant Professor in Physics – Osmania University & JNTU, Hyderabad</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                        <p className="font-medium">Essentials of Nanoscience & Nanotechnology – Department of Physics, IIT Roorkee (STC Under QIP)</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" /> Research Focus & Expertise
                                </h3>
                                <div className="space-y-4 text-sm text-slate-600">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Semiconductors & Nanomaterials</p>
                                        <p className="text-xs text-slate-600 mt-1">Piezotronics, ZnO Nanowires, Quantum Computing nanomaterials.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Sustainable Energy & Storage</p>
                                        <p className="text-xs text-slate-600 mt-1">Lead-free ferroelectric ceramics, electrocaloric response, energy storage particulate composites (NBT-BT/AlN).</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Advanced Physics & Fluid Dynamics</p>
                                        <p className="text-xs text-slate-600 mt-1">Unsteady MHD Casson fluid flow, free convection heat and mass transfer.</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Academic Leadership & Mentorship</p>
                                        <p className="text-xs text-slate-600 mt-1">Curriculum delivery, multidisciplinary research collaboration, and faculty development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
