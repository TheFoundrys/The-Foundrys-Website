import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Foundry's",
  description: "Rules and regulations for the use of The Foundry's Website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">Terms of Service</h1>
         <p className="text-slate-500 mb-12">Last Updated: January 14, 2026</p>

        <div className="prose prose-slate prose-sm md:prose-base max-w-none text-slate-600">
          <p className="lead text-lg text-slate-800 mb-8">
            These Terms of Service outline the rules and regulations for the use of The Foundry's Website and our educational services. By accessing this website we assume you accept these terms and conditions.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">1. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, The Foundry's and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">2. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li>Publishing any Website material in any other media without prior consent.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
            <li>Publicly performing and/or showing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website in any way that impacts user access to this Website.</li>
          </ul>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">3. Student Code of Conduct</h2>
          <p>
             Students enrolled in our School of Deep Tech, School of Entrepreneurship, or School of Energy programs are expected to adhere to the highest standards of academic integrity and professional conduct. Plagiarism, harassment, or misuse of campus resources may result in immediate expulsion.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">4. Limitation of Liability</h2>
          <p>
            In no event shall The Foundry's, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. The Foundry's, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>
          
           <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State of Telangana, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Hyderabad for the resolution of any disputes.
          </p>



        </div>
      </div>
      <Footer />
    </main>
  );
}
