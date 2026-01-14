import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information | The Foundry's",
  description: "Legal disclaimers, accreditation information, and regulatory compliance.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">Legal Information</h1>
         <p className="text-slate-500 mb-12">Official Disclosures and Compliance</p>

        <div className="prose prose-slate prose-sm md:prose-base max-w-none text-slate-600">
          
          <h2 className="text-slate-900 font-semibold mt-8 mb-4 text-xl">1. Educational Disclaimer</h2>
          <p>
            The Foundry's offers specialized vocational and advanced technical training programs. While our curriculum is designed to meet industry standards, completion of our programs does not guarantee employment or specific salary outcomes. Our programs are designed to equip students with practical skills in Deep Tech, Entrepreneurship, and Energy sectors.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">2. Anti-Discrimination Policy</h2>
          <p>
            The Foundry's does not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or age in its admissions, employment, or educational programs. We are committed to fostering a diverse and inclusive environment.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">3. Grievance Redressal</h2>
          <p>
            We have a dedicated mechanism for addressing student and staff grievances. Any valid complaint will be addressed within a stipulated timeframe as per our internal policies.
          </p>
          <div className="bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r mt-4">
              <p className="text-orange-900 font-medium text-sm">To file a formal grievance, please email <a href="mailto:grievance@thefoundrys.com" className="underline hover:text-orange-700">grievance@thefoundrys.com</a> with the subject line "Formal Grievance - [Your Name]".</p>
          </div>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">4. Copyright Notice</h2>
          <p>
             All content including course materials, videos, code repositories, and brand assets are the exclusive property of The Foundry's and are protected by Indian and International copyright laws. Unauthorized reproduction or distribution is strictly prohibited.
          </p>


        </div>
      </div>
      <Footer />
    </main>
  );
}
