import { CheckCircle2 } from "lucide-react";

interface RoleDetailsContentProps {
    role: {
        title: string;
        desc: string;
        salary: string;
        growth: string;
        skills: string[];
        responsibilities: string[];
    };
}

export function RoleDetailsContent({ role }: RoleDetailsContentProps) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{role.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-base mb-4">
                        {role.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {role.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-48 shrink-0 flex flex-col gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Avg. Salary</div>
                        <div className="text-xl font-bold text-slate-900">{role.salary}</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Growth</div>
                        <div className="text-xl font-bold text-emerald-700">{role.growth}</div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Core Responsibilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                            <span className="text-slate-600 text-sm font-medium">{resp}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
