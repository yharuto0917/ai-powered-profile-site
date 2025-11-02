import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SakuraBackground from "@/components/common/sakura";
import HeaderMenu from "@/components/common/headerMenu";
import AskMeWithAI from "@/components/common/askMeWithAI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/yharutoIcon.svg',
  },
  title: "Y.Haruto | AI Engineer",
  description: "Y.Haruto is an AI engineer who is passionate about LLMs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SakuraBackground>
          <header>
            <HeaderMenu />
          </header>
          {children}
          <AskMeWithAI />
          <footer>
            <div className="flex items-center justify-center">
              <p className="text-[12px] text-gray-500">Copyright © 2025 YAMAZAKI Haruto. All rights reserved.</p>
            </div>
          </footer>
        </SakuraBackground>
      </body>
    </html>
  );
}