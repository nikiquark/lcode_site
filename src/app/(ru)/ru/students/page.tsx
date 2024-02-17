import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'LCODE — Код для моделирования кильватерного ускорения',
  description: '',
  alternates: {
    canonical: '/ru/students',
  },
}

export default function Students() {
  return (
    <main className="flex-1 flex items-center justify-center text-5xl">
      В разработке...
    </main>
  )
}
