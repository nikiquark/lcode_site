import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/app/provider";

const nanum = EB_Garamond({weight: "400", subsets: ["latin", "cyrillic"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://new.lcode.info"),
  title: "LCODE",
  openGraph: {
    "title" : "LCODE",
    "description" : "Код для моделирования кильватерного ускорения",
    "images": [
      {
        "url": "/lcode_og.jpg"
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
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
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
