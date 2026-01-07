"use client";
import { Hammer, Code2, Users, Rocket } from "lucide-react";

const principles = [
    {
        icon: Hammer,
        title: "Forge, Don't Study",
        desc: "No textbooks. No exams. You learn by building production-grade software that solves real problems."
    },
    {
        icon: Code2,
        title: "Reverse-Engineered",
        desc: "Our curriculum isn't designed by professors. It's reverse-engineered from the hiring requirements of top Deep Tech startups."
    },
    {
        icon: Users,
        title: "Peer-to-Peer",
        desc: "You are the average of the 5 people you push code with. Surround yourself with the hungriest builders in the city."
    },
    {
        icon: Rocket,
        title: "Shipping is Oxygen",
        desc: "If it's not deployed, it doesn't exist. We measure success by live URLs and user acquisition, not GPA."
    }
];

export function Solution() {
  return (
    <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                 <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">The Solution</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Foundry's Method</h2>
                 <p className="text-xl text-slate-500 max-w-2xl mx-auto">We built the ecosystem we wish we had. An environment designed to maximize your slope.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {principles.map((p, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-slate-900">
                            <p.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
