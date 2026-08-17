import type { Metadata, Viewport } from "next";
import { Ubuntu, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Ubuntu classic weights
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a", // slate-900
  width: "device-width",
  initialScale: 1,
};

// Explicitly forcing no-icon to prevent browser defaults
export const metadata: Metadata = {
  metadataBase: new URL("https://thefoundrys.com"),
  title: {
    default: "The Foundrys -A Premium finishing and venture school",
    template: "%s | The Foundrys"
  },
  description: "The Foundrys is a Premium finishing and venture school in Hyderabad",
  keywords: [   
    // Brand Variations & Common Misspellings
    "The Foundry's", "The Foundry", "TheFoundry", "TheFoundrys", "Foundrys", "Foundry School", "The Foundery", "The Foundries","Premium finishing", "Venture School","Best Finishing School in Hyderabad","Vishwanath Akuthota",

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
    title: "The Foundry's - Premium finishing and venture school",
    description: "The Foundrys is a Premium finishing and venture school in Hyderabad",
    siteName: "The Foundrys",
    images: [
      {
        url: "/logo.png",
        width: 1000,
        height: 1000,
        alt: "The Foundry's",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "The Foundry's - Premium finishing and venture school",
    description: "The Foundrys is a Premium finishing and venture school in Hyderabad",
    creator: "@thefoundrys",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://thefoundrys.com",
  },
  category: "education",
};

import { JsonLd } from "@/components/seo/json-ld";
import { ScrollFix } from "@/components/scroll-fix";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} ${cinzel.variable} antialiased`}>
        <ScrollFix />
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
