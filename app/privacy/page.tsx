import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Foundry's",
  description: "Our commitment to protecting your personal data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: January 14, 2026</p>

        <div className="prose prose-slate prose-sm md:prose-base max-w-none text-slate-600">
          <p className="lead text-lg text-slate-800 mb-8">
            The Foundry's ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or apply to our programs.
          </p>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register for an application or newsletter.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li>Review and process your application for admission to our various Schools.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Send you a newsletter or email regarding admissions updates.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.</li>
          </ul>

          <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>


        </div>
      </div>
      <Footer />
    </main>
  );
}
