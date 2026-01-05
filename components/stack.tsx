"use client";
import { Cpu, Coffee, Network } from "lucide-react";
import { motion } from "framer-motion";

export function Stack() {
  return (
    <section className="py-32 px-4 bg-slate-50 text-slate-900">
        <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center">
                 <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-slate-900">Everything you need to ship.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <motion.div whileHover={{ scale: 1.01 }} className="col-span-1 md:col-span-2">
                    <div className="h-64 p-8 rounded-3xl bg-white border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                        <Cpu className="w-10 h-10 text-blue-600" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Enterprise Compute</h3>
                            <p className="text-slate-500 font-medium">Access to H100 GPUs and Cloud Infrastructure.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="col-span-1">
                    <div className="h-64 p-8 rounded-3xl bg-white border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                        <Coffee className="w-10 h-10 text-orange-500" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">The Fuel</h3>
                            <p className="text-slate-500 font-medium">Premium coffee on tap. 24/7 Access.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="col-span-1 md:col-span-3">
                    <div className="h-48 p-8 rounded-3xl bg-white border border-slate-100 flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-all duration-300">
                        <div className="flex-1 mb-6 md:mb-0">
                            <Network className="w-10 h-10 text-emerald-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">The Network</h3>
                            <p className="text-slate-500 font-medium">Direct access to Hyderabad’s top VCs and Founders.</p>
                        </div>
                        <div className="hidden md:flex space-x-4 pl-8 border-l border-slate-100">
                            <div className="w-14 h-14 rounded-full bg-slate-100 border-4 border-white shadow-sm" />
                            <div className="w-14 h-14 rounded-full bg-slate-200 border-4 border-white -ml-6 shadow-sm" />
                            <div className="w-14 h-14 rounded-full bg-slate-300 border-4 border-white -ml-6 shadow-sm" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
}
