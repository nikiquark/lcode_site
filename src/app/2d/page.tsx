import { Metadata } from "next/types";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { IoMdDocument } from "react-icons/io";


export const metadata: Metadata = {
    title: "LCODE 2D —  code for simulations of plasma wakefield acceleration",
    description: "LCODE is a freely-distributed code for simulations of particle beam-driven plasma wake eld acceleration. The quasi-static approximation is used for calculating plasma response. The beams are modeled by fully relativistic macro-particles.",
    alternates: {
      canonical: "/2d",
    }
}

export default function L2D() {
    const links = [
      {
        id: 1,
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0168900215016034",
        text: "LCODE: A parallel quasistatic code for computationally heavy problems of plasma wakefield acceleration"
      },
      {
        id: 2,
        link: "https://pubs.aip.org/aip/pop/article-abstract/5/3/785/263445/Simulation-of-ultrarelativistic-beam-dynamics-in",
        text: "Simulation of ultrarelativistic beam dynamics in plasma wake-field accelerators "
      }
    ]
    const props = [
      {
        id: 1,
        title: "Time-tested",
        text: "LCODE 2D has been used to model a large number of installations and has shown good convergence with experimental results",
      },
      {
        id: 2,
        title: "Fast",
        text: "Wake acceleration in the quasi-static approximation is computed several orders of magnitude faster than conventional PIC codes"
      }
    ];
    return (
      <main className="relative">
        <section className="flex flex-col h-svh pt-20 bg-[color:rgb(var(--first-bg-rgb))]">
          <div className="flex flex-1 flex-col lg:flex-row justify-center items-center px-12 2xl:px-36 gap-x-20">
            <Image width={1078} height={535} className="hidden lg:block h-56" src="/l2d_anim.gif" alt="Animation of LCODE 2D" />
            <div className="flex flex-col gap-y-9 items-start">
              <h2 className="text-3xl lg:text-6xl">LCODE 2D</h2>
              <p className="text-xl lg:text-2xl xl:text-3xl">LCODE is a freely-distributed code for simulations of particle beam-driven plasma wakefield acceleration. The quasi-static approximation is used for calculating plasma response. The beams are modeled by fully relativistic macro-particles.</p>
              <Link className="text-xl bg-gradient-to-r from-blue-500 to-green-500 rounded-md p-2 px-4 hover:shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] duration-300" href="#resourses">Try it now</Link>
            </div>
          </div>
          <Link href="#theory" className="flex flex-col items-center p-4 text-lg hover:-translate-y-2 duration-300"> Explore<FaAngleDown/> </Link>
        </section>
        <section id="theory" className="w-full flex justify-center ">
          <div className="py-16 lg:py-60 lg:px-12 flex flex-col items-begin justify-center w-9/12 lg:text-2xl">
            <h2 id="test" className="self-center text-5xl mb-8 lg:mb-16">Theory</h2>
            <p className="mb-4">You can read more about quasi-static modeling and code construction in the following articles:
            </p>
            <ul className="list-disc">
                {links.map(({ id, link, text }) => (
                    <li key={id}>{text} <a href={link} className="hover:text-blue-500 hover:underline" target="_blank">[Link]</a></li>
                ))}
                
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
        <section id="resourses" className="flex items-center justify-center py-32">
          <div className=" flex flex-col items-center justify-center text-center w-7/12 lg:text-2xl">
            <h2 className="text-3xl md:text-5xl mb-12">Resourses</h2>
            <p className="mb-4">Feel free to contact us at team@lcode.info for assistance and consultation.</p>
            <div className="flex flex-col gap-y-2">
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline" target="_blank" href="https://lcode.info/site-files/manual.pdf">Documentation</a>
              </div>
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline" target="_blank" href="https://lcode.info/site-files/lcode.exe">Executable for Windows</a>
              </div>
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline" target="_blank" href="https://lcode.info/site-files/lcode-mpi-halfbaked.run">Executable for Linux</a>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    );
  }