"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

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
        text: "Hi, This is Raju working at the intersection of cybersecurity operations like application and network security. I've been able to grow and achieve this with the guidance of Vishwanath Akuthota, whose mentorship has changed my professional journey. I like the way of teaching made even complex topics like cryptography easy to understand. I'd also like to congratulate him on his great journey with Foundry's. Wishing him great success ahead!"
    },
    {
        name: "Sai Charan Neeli",
        designation: "Cybersecurity Professional",
        image: "/images/testimonials/charan.jpeg",
        text: "Hi I am Sai Charan Neeli I am an Cyber security Professional, I had the opportunity to learn from Vishwanath Akuthota, and his guidance played an important role in shaping my understanding of cybersecurity. His practical teaching style made complex concepts easy to understand. He not only teaches concepts but also helps build the right mindset for cybersecurity. I'm truly grateful for his guidance. I would like to congratulate him on his new journey with The Foundry's in Warangal, and I wish him great success in building an inspiring platform for the cybersecurity community."
    },
    {
        name: "Krishna Prasad Avula",
        designation: "AI Researcher",
        image: "/images/testimonials/Krishna.jpeg",
        text: "Hi, I am Krishna Prasad, and I work as an AI researcher. Before this, I had no idea about AI. I learned AI/ML and data science from Vishwanath. He guided me step by step and made AI concepts very easy to understand. Because of that, I was able to build projects with confidence. I also learned how to apply my knowledge in real-world applications. At the same time, I studied theory like machine learning basics and system design. I am really thankful to Vishwa for his training, and I'm excited about The Foundry's journey"
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
    },
    {
        name: "Veda Bharathi Bhagavatula",
        designation: "Skill Compass Alumna",
        text: "Hi, I'm Veda Bharathi. I personally found the whole experience to be very efficient and intuitive, and I now have a clear understanding of various courses. I would definitely recommend Skill Compass for other students or professionals because of its curated content, which is structured in a proper format."
    },
    {
        name: "Akshitha Reddy",
        designation: "AI Intern",
        text: "Hi, I am Akshitha Reddy. I'm currently studying at CBIT, and for the past month I've been working as an intern. Skill Compass helped me to learn key concepts and also dive deep into concepts like NLP and LLMs. My favorite feature of Skill Compass is the AI assistance. It made my learning much faster and also helped me learn complex topics easily. I would recommend Skill Compass to anyone who is looking for a smarter and more personalized way of learning with the help of AI assistance."
    },
    {
        name: "Hansika",
        designation: "Research Intern",
        text: "Hi, I am Hansika. I joined the company as a research intern. For the past month, I've been working on full stack development projects, which includes role-based access control systems used for user authentication and authorization. The most valuable part of Skill Compass was the AI-powered assistant and structured learning path, which made complex tasks easier to solve in an interactive way. I would recommend Skill Compass to anyone looking for a smart, interactive way to learn concepts easily."
    },
    {
        name: "Hriday",
        designation: "AI Intern",
        text: "Hello, my name is Hriday, and I'm currently working as an AI Intern. Skill Compass was a great platform to upskill myself and equip myself better in the current market. I think the AI Tutor feature was the best feature in Skill Compass and it really helped me understand concepts better. It's an excellent platform for anyone who's looking to position themselves better in their career. I would absolutely recommend it to anyone who's willing to upskill themselves and position themselves better in their career."
    },
    {
        name: "Preethika",
        designation: "Web Development Intern",
        text: "Hi, I'm Preethika and I'm doing an internship in web development. I used Skill Compass for testing my skills and reading documents to learn more about AI and ML. There is an AI chatbot where you can just listen to it and learn what is in the document. I recommend this to my friends and people who are very interested in learning about new topics such as AI and ML."
    },
    {
        name: "Anirudh",
        designation: "AI/ML Student",
        text: "Hi, my name is Anirudh. I've done an AI/ML course and it has been really helpful for me, especially since I'm a beginner. My favorite feature in Skill Compass is the voice assistant that teaches us and gives us a quiz after every concept. I would recommend Skill Compass to my friends and to my colleagues. It's a really good tool."
    }
];

export function TestimonialsClient() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            <div className="mx-4 sm:mx-6 md:mx-auto bg-white mt-20">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foundry-text">
                        Our Alumni Stories.
                    </h1>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-2xl">
                        Hear from our alumni who transitioned into high-impact roles in Artificial Intelligence, Cybersecurity, and Deep Tech under our practical mentorship.
                    </p>
                </section>
            </div>

            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                <section className="p-8 sm:p-12 md:p-16 text-brand-purple">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[number]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col w-full h-full"
        >
            <div className="relative z-10 w-full bg-[#F7F7F4] border border-slate-200/80 p-6 flex flex-col justify-between flex-1 min-h-[190px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-[#DCE7F1]">
                <div>
                    <h3 className="font-serif text-xl font-bold text-brand-purple mb-1">
                        {testimonial.name}
                    </h3>
                    <div className="text-deep-blue font-semibold text-xs uppercase tracking-wider mb-3">
                        {testimonial.designation}
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-sans line-clamp-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
