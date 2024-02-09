import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main Page",
  description: "Main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader/>
        <main className="main">
          {children}
          </main>
       
        <TheFooter/>
        </body>
    </html>
  );
}
