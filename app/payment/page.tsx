"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { useRegionalPricing, COURSE_PRICING, CoursePricing } from "@/lib/useRegionalPricing";
import { useRazorpay } from "@/hooks/useRazorpay";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

function PaymentContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { currency, symbol } = useRegionalPricing();
    const { openCheckout } = useRazorpay();

    const courseId = searchParams.get("course") as keyof CoursePricing;
    const tier = (searchParams.get("type") || "freshers") as "original" | "freshers" | "zeroToTwo" | "twoToFive";

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [couponError, setCouponError] = useState<string | null>(null);

    const COUPONS: Record<string, { discount: number; courses?: string[] }> = {
        "FOUNDRY10": { discount: 10 },
        "FOUNDRY20": { discount: 20 },
        "GENAIF100": { discount: 100 },
        "EARLYBIRD": { discount: 25 },
        "AIPLX35K": { discount: 30, courses: ["professionalAIResearch"] }
    };

    const applyCoupon = () => {
        setCouponError(null);
        const coupon = COUPONS[couponCode];
        if (coupon) {
            if (coupon.courses && !coupon.courses.includes(courseId)) {
                setDiscount(0);
                setCouponError("This coupon is not valid for this course");
                return;
            }
            const amount = (numericPrice * coupon.discount) / 100;
            setDiscount(amount);
        } else {
            setDiscount(0);
            setCouponError("Invalid coupon code");
        }
    };

    const pricing = courseId ? COURSE_PRICING[courseId] : null;
    const coursePrice = pricing ? pricing[tier][currency] : "0";
    const numericPrice = parseFloat(coursePrice.replace(/,/g, ""));

    const courseDisplayNames: Record<string, string> = {
        promptEngineering: "Certified Prompt Engineering",
        aiEngineer: "Certified AI Engineer",
        aiResearch: "Certified AI Research",
        professionalAIEngineer: "Professional AI Engineer",
        professionalAIOperations: "Professional AI Operations",
        professionalAIResearch: "Professional AI Research",
        quantumFundamentals: "Quantum Fundamentals",
        deliveringAgeOfAI: "Delivering in the Age of AI",
        aiEngineeringTelugu: "AI Engineering (Telugu)",
        aiFoundationsTelugu: "AI Foundations (Telugu)",
        sustainability: "ESG and Sustainability",
        certifiedInnovator: "Certified Innovator",
        certifiedInnovatorMBA: "Certified Innovator (MBA)",
        agenticAIBootcamp: "Agentic AI Bootcamp",
        aiFluency: "AI Fluency",
        certifiedInCybersecurity: "Certified in Cybersecurity",
    };

    const courseName = courseId ? courseDisplayNames[courseId] || courseId : "Unknown Course";

    const [user, setUser] = useState<any>(null);
    const [isLoginMode, setIsLoginMode] = useState(false);

    // Load user from cookie on mount
    useEffect(() => {
        const authCookie = document.cookie.split("; ").find((row) => row.startsWith("auth_user="));
        if (authCookie) {
            try {
                setUser(JSON.parse(decodeURIComponent(authCookie.split("=")[1])));
            } catch (e) {
                console.error("Cookie parse error");
            }
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Login failed");
                return;
            }
            setUser(data.user);
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // If not logged in, we are in "Sign Up" mode
        if (!user) {
            if (!formData.name || !formData.username || !formData.email || !formData.phone || !formData.password) {
                setError("Please fill in all details");
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                // This will create the user and send verification email
                const res = await fetch("/api/payments/create-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: numericPrice - discount,
                        currency,
                        courseName,
                        courseId,
                        ...formData
                    }),
                });

                const data = await res.json();
                if (!res.ok) {
                    setError(data.error || "Signup failed");
                    return;
                }

                // Always show verification message first for new signups
                setIsSuccess(true);
            } catch (err: any) {
                setError(err.message || "Error creating account");
            } finally {
                setIsLoading(false);
            }
            return;
        }

        // If logged in, proceed to Razorpay
        setIsLoading(true);
        try {
            await openCheckout({
                amount: numericPrice - discount,
                currency,
                courseName,
                courseId,
                userName: user.name,
                userEmail: user.email,
                userPhone: user.phone || formData.phone, // fallback
                onSuccess: (response) => {
                    // Note: openCheckout internally handles verification for paid
                    // For free, it calls onSuccess directly
                    setIsSuccess(true);
                },
                onFailure: (error) => setError(error.description)
            });
        } catch (err) {
            setError("Error opening checkout");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                    <CheckCircle2 size={40} />
                </motion.div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Step 1 Complete!</h1>
                <p className="text-slate-600 mb-8 max-w-md leading-relaxed">
                    We&apos;ve sent a verification link to your email. Please **verify your email address** to activate your account and access your courses in the Compass portal.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => router.push("/")}
                        className="px-8 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => router.push("/login")}
                        className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    if (!courseId || !pricing) {
        return (
            <div className="py-24 px-6 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Course not found</h2>
                <button onClick={() => router.back()} className="mt-4 text-purple-600 hover:underline flex items-center justify-center gap-2 mx-auto">
                    <ArrowLeft size={16} /> Go back
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-6xl px-6 py-12 min-h-[80vh]">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left side: Course info */}
                <div className="space-y-8 sticky top-32">
                    <div>
                        <button onClick={() => router.back()} className="text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-2 mb-8 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
                        </button>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">{courseName}</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">Secure your spot in the curriculum and join the next generation of innovators.</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 font-medium">Program Fee</span>
                            <span className="text-3xl font-bold text-slate-900">{symbol}{coursePrice}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-6 space-y-4">
                            <BenefitItem text="Access to all curriculum modules" />
                            <BenefitItem text="Industry-recognized certification" />
                            <BenefitItem text="Expert-led live sessions" />
                        </div>
                        
                        <div className="pt-6 border-t border-slate-100">
                            <label className="text-xs font-bold text-slate-400 mb-3 block uppercase tracking-widest">Coupon Code</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                    className="flex-1 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all uppercase text-sm font-bold"
                                    placeholder="ENTER CODE"
                                />
                                <button
                                    type="button"
                                    onClick={applyCoupon}
                                    className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors text-sm"
                                >
                                    Apply
                                </button>
                            </div>
                            {couponError && (
                                <p className="text-xs text-red-500 font-medium mt-2 ml-1">{couponError}</p>
                            )}
                            {discount > 0 && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center justify-between text-emerald-600 font-bold text-sm bg-emerald-50 p-3 rounded-xl border border-emerald-100 mt-3"
                                >
                                    <span>Discount Applied</span>
                                    <span>-{symbol}{discount.toLocaleString()}</span>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 text-sm">Secure Payment</p>
                            <p className="text-xs text-slate-500">Encrypted transaction secured by Razorpay.</p>
                        </div>
                    </div>
                </div>

                {/* Right side: Signup/Login Form */}
                <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-white/10 text-white overflow-hidden relative min-h-[600px] flex flex-col justify-center">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 w-full">
                        {user ? (
                            <div className="text-center space-y-8">
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-500/30">
                                    <Zap className="text-blue-400" size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">Welcome, {user.name}</h2>
                                    <p className="text-slate-400 text-lg">{user.email}</p>
                                </div>
                                <button
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                    className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3 text-lg group"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <>PROCEED TO PAYMENT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                                </button>
                                <button 
                                    onClick={() => {
                                        document.cookie = "auth_user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                                        setUser(null);
                                    }}
                                    className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Not you? Log out
                                </button>
                            </div>
                        ) : isLoginMode ? (
                            <>
                                <h2 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">Welcome Back</h2>
                                <p className="text-slate-400 text-center mb-10 leading-relaxed">Log in to your account to continue</p>
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <FormInput
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(v: string) => setFormData({ ...formData, email: v })}
                                    />
                                    <FormInput
                                        type="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(v: string) => setFormData({ ...formData, password: v })}
                                    />
                                    {error && <ErrorMessage message={error} />}
                                    <SubmitButton isLoading={isLoading} text="LOG IN" />
                                </form>
                                <ModeToggle text="Don't have an account?" actionText="Sign Up" onClick={() => setIsLoginMode(false)} />
                            </>
                        ) : (
                            <>
                                <h2 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">Join the Future</h2>
                                <p className="text-slate-400 text-center mb-10 leading-relaxed">Create your account to start forging your career</p>
                                <form onSubmit={handlePayment} className="space-y-4">
                                    <FormInput placeholder="Full Name" value={formData.name} onChange={(v: string) => setFormData({ ...formData, name: v })} />
                                    <FormInput placeholder="Username" value={formData.username} onChange={(v: string) => setFormData({ ...formData, username: v })} />
                                    <FormInput type="email" placeholder="Email Address" value={formData.email} onChange={(v: string) => setFormData({ ...formData, email: v })} />
                                    <div className="flex gap-3">
                                        <div className="px-4 py-4 rounded-2xl bg-[#1a1a1a] border border-white/5 text-slate-400 text-sm flex items-center gap-2">IN +91</div>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="flex-1 px-6 py-4 rounded-2xl bg-[#1a1a1a] border border-white/5 text-white placeholder:text-slate-600 focus:border-blue-500/50 outline-none transition-all"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <FormInput type="password" placeholder="Create Password" value={formData.password} onChange={(v: string) => setFormData({ ...formData, password: v })} />
                                    {error && <ErrorMessage message={error} />}
                                    <SubmitButton isLoading={isLoading} text="CREATE ACCOUNT" />
                                </form>
                                <ModeToggle text="Already have an account?" actionText="Sign In" onClick={() => setIsLoginMode(true)} />
                            </>
                        )}
                        
                        <div className="mt-12 flex items-center justify-center gap-6 opacity-20 filter grayscale invert">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Secured by Razorpay</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 text-slate-600">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <CheckCircle2 size={14} />
            </div>
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
}

function FormInput({ type = "text", placeholder, value, onChange }: { type?: string, placeholder: string, value: string, onChange: (v: string) => void }) {
    return (
        <input
            type={type}
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-[#1a1a1a] border border-white/5 text-white placeholder:text-slate-600 focus:border-blue-500/50 outline-none transition-all"
            placeholder={placeholder}
        />
    );
}

function ErrorMessage({ message }: { message: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-400/10 text-red-400 rounded-2xl text-xs font-bold border border-red-400/20 uppercase tracking-widest"
        >
            {message}
        </motion.div>
    );
}

function SubmitButton({ isLoading, text }: { isLoading: boolean, text: string }) {
    return (
        <button
            type="submit"
            disabled={isLoading}
            className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest disabled:opacity-50"
        >
            {isLoading ? <Loader2 size={24} className="animate-spin" /> : text}
        </button>
    );
}

function ModeToggle({ text, actionText, onClick }: { text: string, actionText: string, onClick: () => void }) {
    return (
        <div className="mt-8 text-center">
            <button onClick={onClick} className="text-slate-500 hover:text-white transition-colors text-sm">
                {text} <span className="text-white font-bold ml-1">{actionText}</span>
            </button>
        </div>
    );
}

export default function PaymentPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-24">
            <Navbar />
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loader2 size={40} className="animate-spin text-purple-600" />
                </div>
            }>
                <PaymentContent />
            </Suspense>
            <Footer />
        </main>
    );
}
