"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Quote, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
    {
        name: "Manikanta",
        designation: "AI Researcher",
        image: "/images/testimonials/manianna.jpeg",
        text: "Hi, I am manikanta, I started my carrier as a fullstack developer, but I always knew that I wanted to dive deeper into the future technology. Under the guidance of my mentor Vishwanath Akuthota, I successfully transitioned into my current role as a AI Researcher. Vishwa has a unique way of teaching, he strips away the noise and focuses on building foundations from the absolute scratch. From understanding the math behind the neural networks to building Advanced AI Application, his mentorship made complex feels accessible. Now, he is bringing that passion to \"The Foundry's\". offering the bachelor degree in AI and Cyber Security. Congratulations Vishwa for the Successful journey."
    },
    {
        name: "Venkata Shiva Ranga Reddy",
        designation: "AI Researcher",
        image: "/images/testimonials/shiva.jpeg",
        text: "Hi, iam venkata shiva ranga reddy, my journey with vishwanath akuthota started after my graduation, as a student i was very curious passionate about learning AI and under guidence of vishwanath akuthota and with his experience and expertise it was very easy to me to understand systems and build scalable systems which are very efficient and optimised so now the foundrys is starting in warangal city i wish him all the best"
    },
    {
        name: "Raju Kalla",
        designation: "Cybersecurity Operations",
        image: "/images/testimonials/kalla.jpeg",
        text: "Hi, This is Raju working at the intersection of cybersecurity operations like application and network security. I’ve been able to grow and achieve this with the guidance of Vishwanath Akuthota, whose mentorship has changed my professional journey. I like the way of teaching made even complex topics like cryptography easy to understand. I’d also like to congratulate him on his great journey with Foundry’s. Wishing him great success ahead!"
    },
    {
        name: "Sai Charan Neeli",
        designation: "Cybersecurity Professional",
        image: "/images/testimonials/charan.jpeg",
        text: "Hi I am Sai Charan Neeli I am an Cyber security Professional, I had the opportunity to learn from Vishwanath Akuthota, and his guidance played an important role in shaping my understanding of cybersecurity. His practical teaching style made complex concepts easy to understand. He not only teaches concepts but also helps build the right mindset for cybersecurity. I’m truly grateful for his guidance. I would like to congratulate him on his new journey with The Foundry’s in Warangal, and I wish him great success in building an inspiring platform for the cybersecurity community."
    },
    {
        name: "Krishna Prasad Avula",
        designation: "AI Researcher",
        image: "/images/testimonials/Krishna.jpeg",
        text: "Hi, I am Krishna Prasad, and I work as an AI researcher. Before this, I had no idea about AI. I learned AI/ML and data science from Vishwanath. He guided me step by step and made AI concepts very easy to understand. Because of that, I was able to build projects with confidence. I also learned how to apply my knowledge in real-world applications. At the same time, I studied theory like machine learning basics and system design. I am really thankful to Vishwa for his training, and I’m excited about The Foundry’s journey"
    },
    {
        name: "Yamuna Devi Kallakuri",
        designation: "AI Researcher",
        image: "/images/testimonials/yk.jpeg",
        text: "Hi, Iam Yamuna, I'm happy to share that i have learned artificial intelligence under the guidance of Vishwanath Akuthota. The way he explanation is clear and neat. Learning from him, i gained strong foundation in artificial intelligence and i worked on real-life application by using LLMs, RAG pipelines, machine learning, and scalable ai system. I'm excited to share that he started a new branch in Warangal. wishing continuing success to Vishwanath Akuthota, Thank you."
    },
    {
        name: "Sai Pramodu",
        designation: "Software Developer",
        image: "/images/testimonials/saipramod.jpeg",
        text: "I am Pramod, working as a Software Developer. As a fresher, I was exploring my path, and I would like to thank Vishwanath Akutota for his guidance in AI engineering, where I was introduced to concepts like machine learning and model training. Even though these are complex topics, he made them easy to understand through his approach of learning while doing, which helped me grasp them effectively and grow both technically and professionally. As a Software Developer today, I truly appreciate his mentorship in helping me become who I am. Congratulations to Vishwanath Akutota and the entire team of The Foundrys on starting this new journey in Warangal."
    }
];

export function TestimonialsClient() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-slate-900 text-white">
                {/* Subtle background decorative blobs */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            <Sparkles size={14} className="text-amber-400" />
                            Stories of Success
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                            Stories of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Real Transformation.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Hear from our alumni who transitioned into high-impact roles in Artificial Intelligence, Cybersecurity, and Deep Tech under our practical mentorship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="relative">
                                    <Quote className="absolute -top-4 -left-4 text-blue-50 w-12 h-12 -z-0" />
                                    <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm bg-slate-100">
                                        {testimonial.image ? (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl uppercase">
                                                {testimonial.name[0]}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-blue-600 font-semibold mt-0.5">
                                            {testimonial.designation}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px]" />
                </div>
                <div className="container mx-auto max-w-3xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Start Your Own Journey.
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join India's first Deep Tech & Venture School and build a career that speaks for itself. Get hands-on mentorship, real-world project portfolios, and career transition support.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/apply"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                            >
                                Apply Now
                                <ArrowUpRight size={20} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-full font-bold text-lg hover:bg-slate-800 hover:text-white transition-all"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
