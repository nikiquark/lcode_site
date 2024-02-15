import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./provider";

const nanum = Nanum_Myeongjo({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "LCODE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={nanum.className + " flex flex-col min-h-svh"} >
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
        </body>
    </html>
  );
}
