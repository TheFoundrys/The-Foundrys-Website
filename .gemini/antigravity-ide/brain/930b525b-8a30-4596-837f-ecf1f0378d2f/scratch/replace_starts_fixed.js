const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\professional\\ai\\certified-professional-in-ai-research\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\professional\\ai\\certified-professional-in-ai-engineering-in-telugu\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\professional\\ai\\agentic-ai-bootcamp\\page.tsx',
        replacements: [
            {
                target: '<span>Starting April 2026</span>',
                replacement: '<span>Starting <StartsDate fallback="April 2026" /></span>'
            },
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\ai-strategy-and-institutional-intelligence\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">August 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="August 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\certified-in-prompt-engineering\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\certified-professional-in-ai\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\certified-in-zero-to-one-llm\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">May 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="May 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\certified-in-ai-engineering\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\entry-level\\ai\\certified-in-ai-research\\page.tsx',
        replacements: [
            {
                target: '<p className="text-lg font-bold text-slate-900">April 2026</p>',
                replacement: '<p className="text-lg font-bold text-slate-900"><StartsDate fallback="April 2026" /></p>'
            }
        ]
    },
    {
        filePath: 'c:\\Users\\Jayavardhan\\The-Foundrys-Website\\app\\programs\\professional\\ai\\AIClient.tsx',
        replacements: [
            {
                target: 'badges={["In-Person @ Hyderabad", "April 2026"]}',
                replacement: 'badges={["In-Person @ Hyderabad", <StartsDate key="starts" fallback="April 2026" />]}'
            },
            {
                target: 'badges?: string[]',
                replacement: 'badges?: React.ReactNode[]'
            }
        ]
    }
];

function processFiles() {
    for (const item of filesToUpdate) {
        if (!fs.existsSync(item.filePath)) {
            console.error(`File does not exist: ${item.filePath}`);
            continue;
        }

        let content = fs.readFileSync(item.filePath, 'utf8');
        let updated = false;

        // Apply replacements (even if target was already replaced, we can verify)
        for (const rep of item.replacements) {
            if (content.includes(rep.target)) {
                content = content.replaceAll(rep.target, rep.replacement);
                updated = true;
            }
        }

        // Force check for starts-date import statement
        if (!content.includes('import StartsDate from')) {
            const importStmt = 'import StartsDate from "@/components/ui/starts-date";\n';
            if (content.includes('"use client";')) {
                content = content.replace('"use client";', '"use client";\n' + importStmt);
                updated = true;
            } else {
                content = importStmt + content;
                updated = true;
            }
        }

        if (updated) {
            fs.writeFileSync(item.filePath, content, 'utf8');
            console.log(`Successfully updated/re-imported: ${path.basename(item.filePath)}`);
        } else {
            console.log(`No updates needed for: ${path.basename(item.filePath)}`);
        }
    }
}

processFiles();
