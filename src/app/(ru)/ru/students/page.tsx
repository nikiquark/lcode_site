import Timeline_en from '@/components/Timeline/Timeline_en'
import times from '@/components/Timeline/times_ru'
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
    <main className="flex-1 flex flex-col items-center mt-20 text-5xl">
    <h2 className='text-3xl py-3'>Мероприятия</h2>
      <Timeline_en times={times}/>
  </main>
  )
}
