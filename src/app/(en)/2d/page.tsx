import { Metadata } from 'next/types'
import Image from 'next/image'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'
import { IoMdDocument } from 'react-icons/io'
import TheoryList, { PaperList } from '@/components/TheoryList'
import { IoInformationCircleOutline } from 'react-icons/io5'
import HoverInfo from '@/components/HoverInfo'
export const metadata: Metadata = {
  title: 'LCODE 2D —  code for simulations of plasma wakefield acceleration',
  description:
    'LCODE is a freely-distributed code for simulations of particle beam-driven plasma wake eld acceleration. The quasi-static approximation is used for calculating plasma response. The beams are modeled by fully relativistic macro-particles.',
  alternates: {
    canonical: '/2d',
  },
}

export default function L2D() {
  const links: PaperList = [
    {
      title: 'Quasistatic model',
      links: [
        {
          text: 'Advantages',
          link: 'https://doi.org/10.1134/S1063780X22601249',
          arxiv: 'https://doi.org/10.48550/arXiv.2205.04390',
        },
        {
          text: 'Energy diagnostics',
          link: 'http://dx.doi.org/10.1103/PhysRevE.69.046405',
        },
      ],
    },
    {
      title: 'LCODE 2D',
      links: [
        {
          text: 'Kinetic model',
          link: 'http://dx.doi.org/10.1103/PhysRevSTAB.6.061301',
        },
        {
          text: 'Fluid model',
          link: 'http://dx.doi.org/10.1063/1.872765',
        },
        {
          text: 'Parallelization',
          link: 'http://dx.doi.org/10.1016/j.nima.2015.12.032',
          arxiv: 'https://doi.org/10.48550/arXiv.1511.04193',
        },
        {
          text: 'Manual',
          link: 'https://lcode.info/site-files/manual.pdf',
        },
      ],
    },
  ]

  const props = [
    {
      id: 1,
      title: 'Time-tested',
      text: 'LCODE 2D has been used to model a large number of installations and has shown good convergence with experimental results',
    },
    {
      id: 2,
      title: 'Fast',
      text: 'Wake acceleration in the quasi-static approximation is computed several orders of magnitude faster than conventional PIC codes',
    },
  ]
  return (
    <main className="relative">
      <section className="flex flex-col h-svh pt-20 bg-[color:rgb(var(--first-bg-rgb))]">
        <div className="flex flex-1 flex-col lg:flex-row justify-center items-center px-12 2xl:px-36 gap-x-20">
          <img
            width={1078}
            height={535}
            className="hidden lg:block h-56"
            src="/l2d_anim.gif"
            alt="Animation of LCODE 2D"
          />
          <div className="flex flex-col gap-y-9 items-start">
            <h2 className="text-3xl lg:text-6xl">LCODE 2D</h2>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              LCODE is a freely-distributed code for simulations of particle
              beam-driven plasma wakefield acceleration. The quasi-static
              approximation is used for calculating plasma response. The beams
              are modeled by fully relativistic macro-particles.
            </p>
            <Link
              className="text-xl bg-gradient-to-r from-blue-500 to-green-500 rounded-md p-2 px-4 hover:shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] duration-300"
              href="#resourses"
            >
              Try it now
            </Link>
          </div>
        </div>
        <Link
          href="#theory"
          className="flex flex-col items-center p-4 text-lg hover:-translate-y-2 duration-300"
        >
          {' '}
          Explore
          <FaAngleDown />{' '}
        </Link>
      </section>
      <section id="theory" className="w-full flex justify-center ">
        <div className="py-16 lg:py-60 lg:px-12 flex flex-col items-begin justify-center w-9/12 lg:text-2xl">
          <h2 id="test" className="self-center text-5xl mb-8 lg:mb-16">
            Theory
          </h2>
          <p className="mb-4">
            You can learn more about quasistatic modeling and code details in
            the following papers:
          </p>
          <ul className="list-disc">
            <TheoryList links={links} />
          </ul>
        </div>
      </section>
      <section id="why-lcode" className="">
        <div className="flex flex-col items-center justify-center py-24 lg:py-56 md:px-32 2xl:px-72 clip-romb-mb lg:clip-romb  bg-[color:rgb(var(--secondary-bg-rgb))]">
          <h2 className="text-3xl md:text-5xl mb-12">Why LCODE 2D?</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            {props.map(({ id, title, text }) => (
              <div key={id} className="flex flex-col gap-y-4 items-center">
                <h3 className="text-2xl md:text-3xl">{title}</h3>
                <p className="text-xl text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="resourses"
        className="flex items-center justify-center py-32"
      >
        <div className=" flex flex-col items-center justify-center text-center w-7/12 lg:text-2xl">
          <h2 className="text-3xl md:text-5xl mb-12">Resourses</h2>
          <p className="mb-4">
            Feel free to contact us at team@lcode.info for assistance and
            consultation.
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="flex">
              <IoMdDocument />
              <a
                className="hover:underline"
                target="_blank"
                href="https://lcode.info/site-files/manual.pdf"
              >
                Documentation
              </a>
            </div>
            <div className="flex">
              <IoMdDocument />
              <a
                className="hover:underline whitespace-nowrap"
                target="_blank"
                href="https://lcode.info/site-files/lcode.exe"
              >
                Executable for Windows
              </a>
              <HoverInfo>
                <pre>
                  {
                    "\
Install MSMPI (runtime)\n\
  https://docs.microsoft.com/en-us/message-passing-interface/microsoft-mpi\n\
\n\
For serial running:\n\
  put lcode.exe in working directory with your lcode.cfg and run it with double-click\n\
\n\
For parallel running:\n\
  put lcode.exe in working directory with your lcode.cfg\n\
  and run 'mpiexec -n <cpu-number> lcode.exe' in command line\n\
\n\
\n\
If you have any problem with it, feel free to contact us. \n\
"
                  }
                </pre>
              </HoverInfo>
            </div>
            <div className="flex">
              <IoMdDocument />
              <a
                className="hover:underline"
                target="_blank"
                href="https://lcode.info/site-files/lcode-mpi-halfbaked.run"
              >
                Executable for Linux
              </a>
              <HoverInfo>
                <pre className="">
                  {
                    '\
`lcode-mpi-halfbaked.run`, should be executed on working host,\n\
  will perform the final compilation step,\n\
  linking the otherwise-precompiled LCODE with that host&apos;s MPI.\n\
  This is theoretically unsupported, but works like a charm.\n\
\n\
It will produce lcode in current directory.\n\
\n\
If you have any problem with it, feel free to contact us. \n\
'
                  }
                </pre>
              </HoverInfo>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
