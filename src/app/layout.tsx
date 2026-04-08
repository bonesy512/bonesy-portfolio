import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/animations/CustomCursor";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bonesy Design | Thomas Schustereit — 14 Years of Digital Excellence in Austin, TX",
  description:
    "Founded by Thomas Schustereit, Bonesy Design is an Austin-based studio specializing in Web Design, Graphic Branding, Agentic AI, and App Development.",
  keywords: [
    "Bonesy Design",
    "Thomas Schustereit",
    "UI/UX Design Austin",
    "Agentic AI Integrations",
    "Custom App Development",
    "Graphic Design Texas",
    "Social Media Marketing Austin",
    "Website Design 14 Years Experience",
    "Digital Strategy",
  ],
  openGraph: {
    title: "Bonesy Design | Expert Digital Craft by Thomas Schustereit",
    description:
      "14 years of high-stakes design and development. Specializing in websites, branding, and Agentic AI integrations for modern businesses.",
    type: "website",
    locale: "en_US",
    url: "https://bonesy.design", // Ensure this matches your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonesy Design | Thomas Schustereit",
    description:
      "Bridging the gap between timeless design and future-tech. 14 years of Web, App, and AI expertise in Austin, TX.",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        {children}
        {modal}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}