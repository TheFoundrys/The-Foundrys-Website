import { Navbar } from "@/components/ui/navbar";
import { CampusHero } from "@/components/campus/hero";
import { CampusGallery } from "@/components/campus/gallery";
import { Amenities } from "@/components/campus/amenities";
import { Footer } from "@/components/footer";

export default function CampusPage() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <CampusHero />
        <Amenities />
        <CampusGallery />
        
        {/* Location / CTA */}
        <section className="py-32 px-4 text-center bg-slate-900 text-white relative overflow-hidden">
             {/* Background Image Overlay */}
             <div className="absolute inset-0 z-0 opacity-20">
                <img 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80" 
                    alt="City Night"
                    className="w-full h-full object-cover"
                />
             </div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">You are the average of the 5 people you sit with.</h2>
                <p className="text-xl text-slate-300 mb-10">Don't sit with students. Sit with founders.</p>
                <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
                    VISIT THE FOUNDRY
                </button>
             </div>
        </section>

        <Footer />
    </main>
  );
}
