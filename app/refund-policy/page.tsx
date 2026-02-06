import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund Policy | The Foundry's",
    description: "Transparent and fair policies for your peace of mind.",
};

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
                <div className="border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm bg-white">
                    <h1 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">Refund Policy</h1>
                    <p className="text-slate-500 mb-12">Transparent and fair policies for your peace of mind.</p>

                    <div className="prose prose-slate prose-sm md:prose-base max-w-none text-slate-600">
                        <p className="lead text-lg text-slate-800 mb-8">
                            At The Foundry's, we are committed to providing high-quality educational content. We want you to be completely satisfied with your learning experience. Please read our refund policy carefully to understand your rights and our obligations.
                        </p>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">1. General Policy</h2>
                        <p>
                            The Foundry's generally does not offer direct refunds on purchased courses. We believe in the quality of our value-driven education. Refunds are typically reserved for cases involving technical payment errors (e.g., double deduction) or exceptional circumstances deemed considerable by our administration.
                        </p>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">2. 7-Day Consideration Window</h2>
                        <p>
                            Any request for a refund due to technical issues or special considerations must be raised within 7 days of the payment date. Requests made after this 7-day period will not be entertained under any circumstances.
                        </p>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">3. Eligibility Criteria</h2>
                        <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
                            <li>The request is raised within 7 days of the transaction.</li>
                            <li>There is a verifiable technical issue with the payment or content access that we cannot resolve.</li>
                        </ul>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">4. Non-Refundable Scenarios</h2>
                        <p>We do not provide refunds for:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4 mb-8">
                            <li>Change of mind after purchasing.</li>
                            <li>Failure to use the account or access the content.</li>
                            <li>Issues arising from user's hardware or internet connection limitations.</li>
                        </ul>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">5. How to Request a Refund</h2>
                        <p>
                            To initiate a refund, please contact our support team at <a href="mailto:support@thefoundrys.com" className="text-blue-600 hover:underline">support@thefoundrys.com</a> with your order details and the reason for the request. We aim to process all eligible requests within 5-7 business days.
                        </p>

                        <h2 className="text-slate-900 font-semibold mt-10 mb-4 text-xl">6. Processing of Refunds</h2>
                        <p>
                            Refunds will be credited back to the original payment method used for the purchase. Depending on your bank or credit card issuer, it may take an additional 3-10 business days for the funds to appear in your account after we have processed the refund.
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
