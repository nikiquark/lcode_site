import '@/app/globals.css'
import { Providers } from '@/app/provider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Nanum_Myeongjo } from 'next/font/google'

const nanum = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://new.lcode.info'),
  title: 'LCODE',
  openGraph: {
    title: 'LCODE',
    description: 'Code for simulations of plasma wakefield acceleration',
    images: [
      {
        url: '/lcode_og.jpg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navLinks = [
    {
      link: '/',
      text: 'LCODE 3D',
    },
    {
      link: '/2d',
      text: 'LCODE 2D',
    },
    // {
    //   link: '/students',
    //   text: 'For students',
    // },
  ]
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={nanum.className + ' flex flex-col min-h-svh'}>
        <Providers>
          <Navbar links={navLinks} lang="RU" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
