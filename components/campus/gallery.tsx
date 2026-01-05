"use client";
import { motion } from "framer-motion";

const spaces = [
    {
        title: "The Deep Work Zone",
        desc: "Noise-cancelled. Focus-optimized. Ship code without interruption.",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80", // Individual desk
        col: "md:col-span-2"
    },
    {
        title: "The Caffeine Lab",
        desc: "Premium espresso on tap. Where ideas are brewed.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80", // Coffee shop
        col: "md:col-span-1"
    },
    {
        title: "War Rooms",
        desc: "Whiteboards everywhere. Architecture reviews and debates.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80", // Brainstorming
        col: "md:col-span-1"
    },
    {
        title: "The Arena",
        desc: "Demo days, hackathons, and guest lectures from founders.",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80", // Conference/Meetup
        col: "md:col-span-2"
    }
];

export function CampusGallery() {
  return (
    <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {spaces.map((space, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative h-80 rounded-3xl overflow-hidden shadow-lg ${space.col}`}
                    >
                        <img 
                            src={space.img} 
                            alt={space.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                            <p className="text-slate-300 font-medium">{space.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
