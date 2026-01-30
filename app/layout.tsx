import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Ubuntu classic weights
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a", // slate-900
};

// Explicitly forcing no-icon to prevent browser defaults
export const metadata: Metadata = {
  icons: {
    icon: 'data:image/x-icon;base64,',
    shortcut: 'data:image/x-icon;base64,',
    apple: 'data:image/x-icon;base64,',
  },
  metadataBase: new URL("https://thefoundrys.com"),
  title: {
    default: "The Foundry's | Best Deep Tech & AI College in Hyderabad",
    template: "%s | The Foundry's"
  },
  description: "The Foundry's: A new era of education in Hyderabad. Bridging the gap in Deep Tech, Sustainability, and Entrepreneurship. Forging innovators, not just Graduates.",
  keywords: [
    // Brand Variations & Common Misspellings
    "The Foundry's", "The Foundry", "TheFoundry", "TheFoundrys", "Foundrys", "Foundry School", "The Foundery", "The Foundries",

    // Competitor & Comparative Keywords (Strategic)
    "Bower School of Entrepreneurship", "Nextwave Hyderabad", "Nextwave Institute of Advanced Technologies",
    "Top Colleges like IIT", "Alternatives to IIT", "Best Engineering Colleges in Hyderabad", "Top NITs",
    "Premium Engineering Colleges India", "Comparison with Scaler School of Technology", "Newton School Alternatives",

    // Core Segments & Programs
    "School of Deep Tech", "School of Entrepreneurship", "School of Energy", "School of Sustainability",
    "Venture Building Program", "Applied Engineering College", "BBA in Entrepreneurship", "B.Tech in Artificial Intelligence",

    // Broad Education Keywords
    "Engineering", "BBA", "MBA Alternatives", "Computer Science Engineering", "B.Tech Computer Science",
    "Study in Hyderabad", "Technology Institute Hyderabad", "Best College for Startup Founders",

    // Targeted Local Trends (Hyderabad/Telangana Students)
    "Intermediate 2nd Year Students", "Class 12 MPC", "After 12th Best Courses", "Engineering Colleges in Hyderabad with High Placement",
    "EAMCET Alternatives", "Best Private Engineering College Hyderabad", "New Age Engineering", "Practical Engineering College",
    "Parents Guide to Engineering 2026", "Future Proof Career for Child",

    // Career & Outcome Focused (High Intent)
    "High paying jobs after 12th MPC", "Guaranteed placement engineering colleges", "Startup incubation centers in Hyderabad colleges",
    "Colleges for Entrepreneurship in India", "How to become an AI Engineer after 12th", "Cyber Security Careers India",

    // Comparison & Decision Support
    "Better than B.Tech", "Practical engineering degrees", "New age tech schools India", "Is B.Tech worth it in 2026",
    "Alternative to IIT for bright students", "Best college for coding in Hyderabad", "No theory only practical college",

    // Program Verticals
    "Artificial Intelligence Engineering", "Blockchain Technology", "Quantum Computing", "Generative AI Course",
    "Cyber Security", "Renewable Energy Systems", "Strategic Management", "ESG and Sustainability"
  ],
  authors: [{ name: "The Foundry's" }],
  creator: "The Foundry's",
  publisher: "The Foundry's",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thefoundrys.com",
    title: "The Foundry's | School of Deep Tech, Entrepreneurship & Energy",
    description: "The Foundry's: A new era of education in Hyderabad. Bridging the gap in Deep Tech, Sustainability, and Entrepreneurship. Forging innovators, not just Graduates.",
    siteName: "The Foundry's",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foundry's | School of Deep Tech, Entrepreneurship & Energy",
    description: "The Foundry's: A new era of education in Hyderabad. Bridging the gap in Deep Tech, Sustainability, and Entrepreneurship. Forging innovators, not just Graduates.",
    creator: "@thefoundrys",
  },

  category: "education",
};

import { JsonLd } from "@/components/seo/json-ld";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XQCKK6L717"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XQCKK6L717');
          `}
        </Script>

        {/* Structured Data */}
        <JsonLd />

        {children}
      </body>
    </html>
  );
}
