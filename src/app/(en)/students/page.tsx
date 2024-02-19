import Timeline_en from '@/components/Timeline/Timeline_en'
import times from '@/components/Timeline/times_en'
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
    <main className="flex-1 flex flex-col items-center mt-20 text-5xl">
      <h2 className='text-3xl py-3'>Our timeline</h2>
      <Timeline_en times={times}/>
    </main>
  )
}
