import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  description: "The Foundry's is home to the School of Deep Tech, School of Entrepreneurship, and School of Energy. We offer specialized undergraduate programs in AI, Blockchain, Quantum Computing, and Renewable Energy.",
  keywords: [
    // Brand Variations
    "The Foundry's", "The Foundry", "TheFoundry", "TheFoundrys", "Foundrys", "Foundry School",
    
    // Core Segments
    "School of Deep Tech", "School of Entrepreneurship", "School of Energy",
    "Venture Building Program", "Applied Engineering College",
    
    // Location & Intent
    "Engineering Colleges in Hitech City", "Study in Hyderabad", "Technology Institute Hyderabad",
    "Undergraduate Programs in AI", "B.Tech in Artificial Intelligence", "B.Tech in Renewable Energy",
    
    // Program Verticals
    "Artificial Intelligence Engineering", "Blockchain Technology", "Quantum Computing",
    "Cyber Security", "Renewable Energy Systems", "Strategic Management"
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
    description: "The Foundry's comprises the School of Deep Tech, School of Entrepreneurship, and School of Energy. Join us in Hitech City, Hyderabad.",
    siteName: "The Foundry's",
    images: [
      {
        url: "/foundry.jpg", 
        width: 1200,
        height: 630,
        alt: "The Foundry's - 4 Specialized Schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foundry's | School of Deep Tech, Entrepreneurship & Energy",
    description: "Home to the School of Deep Tech, School of Entrepreneurship, and School of Energy. Located in Hitech City.",
    images: ["/foundry.jpg"],
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
      <body className={`${geistSans.variable} antialiased`}>
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
