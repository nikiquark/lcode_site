import '@/app/globals.css'
import { Providers } from '@/app/provider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'

const nanum = EB_Garamond({ weight: '400', subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://new.lcode.info'),
  title: 'LCODE',
  openGraph: {
    title: 'LCODE',
    description: 'Код для моделирования кильватерного ускорения',
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
      link: '/ru',
      text: 'LCODE 3D',
    },
    {
      link: '/ru/2d',
      text: 'LCODE 2D',
    },
    {
      link: '/ru/events',
      text: 'Мероприятия',
    },
  ]
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={nanum.className + ' flex flex-col min-h-svh'}>
        <Providers>
          <Navbar links={navLinks} lang="EN" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
