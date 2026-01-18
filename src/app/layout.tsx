// 'use client';
import { Geist, Geist_Mono,Inter } from "next/font/google";
import { CopilotKit } from "@copilotkit/react-core";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";
import type { Metadata } from "next";
import { RegisterFrontendTools } from "@/components/frontendTools";
import { CopilotProvider } from "@/components/CopilotProvider";
import BackgroundMusic from "@/components/game/BackgroundMusic";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App with BGM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CopilotProvider>
          <RegisterFrontendTools>
            {children}
            <BackgroundMusic />
          </RegisterFrontendTools>
        </CopilotProvider>
      </body>
    </html>
  );
}

const inter = Inter({ subsets: ["latin"] });



