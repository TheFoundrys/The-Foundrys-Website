"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface ProgramDetail {
    label: string;
    value: string;
}

interface IncludedItem {
    text: string;
}

interface ProgramDetailsCardProps {
    details: ProgramDetail[];
    fee: {
        original: string;
        discounted: string;
        discount: string;
    };
    included: IncludedItem[];
    ctaButton: {
        text: string;
        href: string;
    };
    theme?: "blue" | "purple" | "red" | "indigo" | "emerald" | "teal" | "amber";
}

export function ProgramDetailsCard({
    details,
    fee,
    included,
    ctaButton,
    theme = "blue"
}: ProgramDetailsCardProps) {
    const themeColors = {
        blue: "bg-blue-100 text-blue-600 hover:bg-blue-500",
        purple: "bg-purple-100 text-purple-600 hover:bg-purple-500",
        red: "bg-red-100 text-red-600 hover:bg-red-500",
        indigo: "bg-indigo-100 text-indigo-600 hover:bg-indigo-500",
        emerald: "bg-emerald-100 text-emerald-600 hover:bg-emerald-500",
        teal: "bg-teal-100 text-teal-600 hover:bg-teal-500",
        amber: "bg-amber-100 text-amber-600 hover:bg-amber-500"
    };

    const buttonColors = {
        blue: "bg-blue-600 hover:bg-blue-500",
        purple: "bg-purple-600 hover:bg-purple-500",
        red: "bg-red-600 hover:bg-red-500",
        indigo: "bg-indigo-600 hover:bg-indigo-500",
        emerald: "bg-emerald-600 hover:bg-emerald-500",
        teal: "bg-teal-600 hover:bg-teal-500",
        amber: "bg-amber-600 hover:bg-amber-500"
    };

    return (
        <div className="relative z-20 px-4 -mt-24 mb-12">
            <div className="mx-auto max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left: Program Fee */}
                        <div>
                            <h3 className="text-slate-900 text-xl font-bold mb-4">Program Fee</h3>
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl font-bold text-slate-900">{fee.discounted}</span>
                                <span className="text-xl text-slate-400 line-through">{fee.original}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className={`${themeColors[theme]} text-xs font-bold px-2 py-1 rounded uppercase`}>
                                    {fee.discount}
                                </span>
                                <span className="text-slate-500 text-sm">Limited time offer</span>
                            </div>

                            {/* Program Details */}
                            <div className="grid grid-cols-2 gap-4">
                                {details.map((detail, index) => (
                                    <div key={index}>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                                            {detail.label}
                                        </p>
                                        <p className="text-base font-bold text-slate-900">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: What's Included */}
                        <div>
                            <h3 className="text-slate-900 text-xl font-bold mb-4">What's Included</h3>
                            <div className="space-y-3 mb-6">
                                {included.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className={`text-${theme}-500 shrink-0`} />
                                        <span className="text-slate-600 text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link
                                href={ctaButton.href}
                                className={`block w-full text-center px-8 py-3 ${buttonColors[theme]} text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95`}
                            >
                                {ctaButton.text}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
