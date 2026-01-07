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
    default: "The Foundry's | India's First Deep Tech & Venture School",
    template: "%s | The Foundry's - Architect Your Future",
  },
  description: "Degrees are printed. Companies are built. Join The Foundry's School of Deep Tech (AI, Cyber, Quantum) and School of Entrepreneurship (Venture Building, Strategy). Architect your future.",
  keywords: [
    "Deep Tech School",
    "AI Course for 12th pass",
    "Cyber Security career",
    "Startup School India",
    "School of Entrepreneurship",
    "Alternative to Engineering College",
    "Upskilling for Engineers",
    "Quantum Computing India",
    "Venture Building",
    "Strategic Innovation",
    "Coding Bootcamp India",
  ],
  authors: [{ name: "The Foundry's Team" }],
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
    locale: "en_US",
    url: "https://thefoundrys.com",
    title: "The Foundry's | School of Deep Tech & Entrepreneurship",
    description: "Degrees are printed. Companies are built. Join The Foundry's School of Deep Tech (AI, Cyber, Quantum) and School of Entrepreneurship (Venture Building, Strategy). Architect your future.",
    siteName: "The Foundry's",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this exists or use a remote fallback
        width: 1200,
        height: 630,
        alt: "The Foundry's Campus and Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foundry's | School of Deep Tech & Entrepreneurship",
    description: "Degrees are printed. Companies are built. Join The Foundry's School of Deep Tech (AI, Cyber, Quantum) and School of Entrepreneurship (Venture Building, Strategy). Architect your future.",
    images: ["/og-image.jpg"],
    creator: "@thefoundrys", // Placeholder
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
