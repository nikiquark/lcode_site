import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'LCODE — code for simulations of plasma wakefield acceleration',
  description: '',
  alternates: {
    canonical: '/students',
  },
}

export default function Students() {
  return (
    <main className="flex-1 flex items-center justify-center text-5xl">
      In developing...
    </main>
  )
}
