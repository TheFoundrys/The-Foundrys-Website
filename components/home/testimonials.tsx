"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { text } from 'stream/consumers';

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
    image: "/images/testimonials/raju.jpeg",
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
    image: "/images/testimonials/yamuna_kalukuri.jpeg",
    text: "Hi, Iam Yamuna, I'm happy to share that i have learned artificial intelligence under the guidance of Vishwanath Akuthota. The way he explanation is clear and neat. Learning from him, i gained strong foundation in artificial intelligence and i worked on real-life application by using LLMs, RAG pipelines, machine learning, and scalable ai system. I'm excited to share that he started a new branch in Warangal. wishing continuing success to Vishwanath Akuthota, Thank you."
  },
  {
    name: "Sai Pramodu",
    designation: "Software Developer",
    image: "/images/testimonials/saipramod.jpeg",
    text: "I am Pramod, working as a Software Developer. As a fresher, I was exploring my path, and I would like to thank Vishwanath Akutota for his guidance in AI engineering, where I was introduced to concepts like machine learning and model training. Even though these are complex topics, he made them easy to understand through his approach of learning while doing, which helped me grasp them effectively and grow both technically and professionally. As a Software Developer today, I truly appreciate his mentorship in helping me become who I am. Congratulations to Vishwanath Akutota and the entire team of The Foundrys on starting this new journey in Warangal."
  }
];

export function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-8 bg-white relative overflow-hidden" id="testimonials">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 mb-5">
        <div className="text-center">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Stories of Transformation.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Hear from our alumni who have successfully transitioned into high-impact roles in AI and Cybersecurity.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-full overflow-hidden hover:pause-scroll group">
          <motion.div
            className="flex items-center flex-nowrap py-3"
            initial={{ x: "calc(50vw - 500px)" }}
            animate={{
              x: [
                "calc(50vw - 500px)", "calc(50vw - 500px)",
                "calc(50vw - 1500px)", "calc(50vw - 1500px)",
                "calc(50vw - 2500px)", "calc(50vw - 2500px)",
                "calc(50vw - 3500px)", "calc(50vw - 3500px)",
                "calc(50vw - 4500px)", "calc(50vw - 4500px)",
                "calc(50vw - 5500px)", "calc(50vw - 5500px)",
                "calc(50vw - 6500px)", "calc(50vw - 6500px)",
              ]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                times: [
                  0, 0.133,
                  0.166, 0.3,
                  0.333, 0.466,
                  0.5, 0.633,
                  0.666, 0.8,
                  0.833, 0.966,
                  1
                ],
                ease: "easeInOut",
              },
            }}
            style={{ width: "max-content" }}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-[90vw] md:w-[1000px] px-4"
              >
                <div className="glass-card p-8 md:p-12 rounded-3xl h-[650px] md:h-[380px] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left group-hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden">
                  {/* Image and Info */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-white shadow-lg mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      {/* Fallback pattern if image is missing */}
                      <div className="absolute inset-0 bg-slate-100 -z-10 flex items-center justify-center text-slate-300">
                        <span className="text-[10px]">Placeholder</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900">{testimonial.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{testimonial.designation}</p>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 relative h-full flex items-center">
                    <Quote className="absolute -top-2 -left-4 text-blue-50/80 w-16 h-16 md:w-24 md:h-24 -z-10" />
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed italic pr-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hover\:pause-scroll:hover div {
            animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
