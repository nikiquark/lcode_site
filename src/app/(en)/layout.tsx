import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/app/provider";

const nanum = Nanum_Myeongjo({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://new.lcode.info"),
  title: "LCODE",
  openGraph: {
    "title" : "LCODE",
    "description" : "Code for simulations of plasma wakefield acceleration",
    "images": [
      {
        "url": "/lcode_og.svg"
      }
    ]
  },
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
