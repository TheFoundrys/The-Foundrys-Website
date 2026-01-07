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

export const metadata: Metadata = {
  metadataBase: new URL("https://thefoundrys.com"),
  title: {
    default: "The Foundry's | India's First Deep Tech & Venture School",
    template: "%s | The Foundry's - Architect Your Future",
  },
  description: "Don't just study. Build. The Foundry's offers elite programs in AI, Cyber Security, Quantum Computing, and Entrepreneurship for ambitious students and future founders in Hyderabad.",
  keywords: [
    "Deep Tech School",
    "AI Course for 12th pass",
    "Cyber Security career",
    "Startup School India",
    "Entrepreneurship course Hyderabad",
    "Alternative to Engineering College",
    "Upskilling for Engineers",
    "Quantum Computing India",
    "Venture Building",
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
    title: "The Foundry's | Build the Future",
    description: "Degrees are printed. Skills are forged. Join India's first Deep Tech ecosystem designed for builders, not test-takers.",
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
    title: "The Foundry's | Architect Deep Tech",
    description: "Where ambitious students become founders. AI, Cyber, Quantum, and Venture Building.",
    images: ["/og-image.jpg"],
    creator: "@thefoundrys", // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html lang="en">
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
