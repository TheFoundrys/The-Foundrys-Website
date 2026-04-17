"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollFix() {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Disable browser's automatic scroll restoration to prevent "starting from middle"
        if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // 2. Force scroll to top on every route change
        // We use a small timeout to ensure Next.js has finished its internal navigation
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" // Use instant to ensure it starts at the top immediately
            });
        }, 0);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
