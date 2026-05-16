import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'BRGD Sports Group | High-Performance Sports Management',
  description: 'Empowering athletes and brands through strategic sports business management. 35 years of legacy shaping champions in Jacksonville.',
  keywords: ["sports management, BJJ, athlete training, sports marketing, Jacksonville sports"],
  openGraph: {
    "title": "BRGD Sports Group | Strategic Sports Solutions",
    "description": "35 years of excellence in sports business, talent development, and event organization.",
    "type": "website",
    "siteName": "BRGD Sports Group"
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
