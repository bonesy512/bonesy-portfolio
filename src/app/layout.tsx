import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bonesy Design | Thomas Schustereit — Senior UI/UX & Digital Strategist in Austin, TX",
  description:
    "Austin-based Senior UI/UX Designer & Digital Strategit specialising in logos, 3D design, and AI Agentic Integrations for high-stakes digital products.",
  keywords: [
    "UI/UX Design Austin",
    "Digital Strategy",
    "Product Design",
    "AI Agentic Integrations",
    "3D Design",
    "IT Consulting Austin",
    "Logo Design Texas",
    "Bonesy Design",
    "Thomas Schustereit",
  ],
  openGraph: {
    title: "Bonesy Design | Thomas Schustereit — Austin, TX",
    description:
      "Senior UI/UX & Digital Strategist architecting high-stakes digital products, AI Agentic Integrations, and 3D experiences in Austin, TX.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonesy Design | Thomas Schustereit — Austin, TX",
    description:
      "Senior UI/UX & Digital Strategist architecting high-stakes digital products, AI Agentic Integrations, and 3D experiences in Austin, TX.",
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
        {children}
        {modal}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
