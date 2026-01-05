"use client";
import { Wifi, Coffee, Clock, Lock, Zap, Armchair } from "lucide-react";

const amenities = [
    { icon: Wifi, label: "Gigabit Fiber" },
    { icon: Coffee, label: "Specialty Coffee" },
    { icon: Clock, label: "24/7 Access" },
    { icon: Lock, label: "Biometric Entry" },
    { icon: Zap, label: "Power Backup" },
    { icon: Armchair, label: "Ergo Chairs" },
];

export function Amenities() {
  return (
    <section className="py-24 border-y border-slate-100 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-4 text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-12">Built for Builders</h2>
             
             <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                {amenities.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:border-blue-200">
                            <item.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                        </div>
                        <span className="font-semibold text-slate-600">{item.label}</span>
                    </div>
                ))}
             </div>
        </div>
    </section>
  )
}
