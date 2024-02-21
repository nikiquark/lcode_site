import Timeline_en from '@/components/Timeline/Timeline_en';
import times from '@/components/Timeline/times_en';
import Link from 'next/link';
import { Metadata } from 'next/types';
import { FaTimeline } from "react-icons/fa6";

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
      <Timeline_en times={times} max={3}/>
      <Link className='flex mx-4 lg:mx-48 mb-3 mt-2 text-2xl self-start underline-offset-8 hover:underline' href={'/timeline'}>Archive <FaTimeline className='ml-1' size={30}/></Link>
    </main>
  )
}
