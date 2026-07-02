"use client";

import { useEffect, useState } from "react";

interface StartsDateProps {
    fallback: string;
}

export function StartsDate({ fallback }: StartsDateProps) {
    const [dateText, setDateText] = useState(fallback);

    useEffect(() => {
        const date = new Date();
        // Advance to the next month
        date.setMonth(date.getMonth() + 1);
        
        const formatter = new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
        });
        setDateText(formatter.format(date));
    }, []);

    return <>{dateText}</>;
}
export default StartsDate;
