"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { use } from "react";
import { Award } from "lucide-react";
import { EnrollmentFlow } from "@/components/ui/enrollment-flow";
import { COURSE_CATALOG } from "@/lib/courses";

export default function EnrollPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  const course = COURSE_CATALOG[courseId];

  if (!course) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Course Not Found
          </h1>
          <p className="text-slate-600">
            The course you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Award size={16} />
              <span>Secure Enrollment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Start Your Journey in <br/>
              <span className="text-blue-400">{course.name}</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Verify your email to unlock secure payment and instant course access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Wizard Section */}
      <section className="py-16 px-6 -mt-10 relative z-20">
        <div className="container mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <EnrollmentFlow 
              courseId={courseId} 
              amount={course.prices.INR} 
              initialOpen={true} 
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
