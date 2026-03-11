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
    isDark?: boolean;
}

export function RoleDetailsContent({ role, isDark = false }: RoleDetailsContentProps) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{role.title}</h3>
                    <p className={`leading-relaxed text-base mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {role.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {role.skills.map(skill => (
                            <span key={skill} className={`px-3 py-1 rounded-full text-sm font-semibold ${isDark ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-blue-50 text-blue-700"}`}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-48 shrink-0 flex flex-col gap-3">
                    <div className={`p-3 rounded-2xl border ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"}`}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Avg. Salary</div>
                        <div className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{role.salary}</div>
                    </div>
                    <div className={`p-3 rounded-2xl border ${isDark ? "bg-emerald-500/10 border-emerald-500/20" : "bg-emerald-50 border-emerald-100"}`}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? "text-emerald-500" : "text-emerald-600"}`}>Growth</div>
                        <div className={`text-xl font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>{role.growth}</div>
                    </div>
                </div>
            </div>

            <div className={`border-t pt-4 ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? "text-slate-200" : "text-slate-900"}`}>Core Responsibilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className={`${isDark ? "text-emerald-500" : "text-blue-500"} mt-0.5 shrink-0`} />
                            <span className={`${isDark ? "text-slate-400" : "text-slate-600"} text-sm font-medium`}>{resp}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
