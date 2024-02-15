import TheoryList, { LinkList } from "@/components/TheoryList";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";


export const metadata: Metadata = {
    title: "LCODE 3D — code for simulations of plasma wakefield acceleration",
    description: "LCODE is a freely-distributed code for simulations of particle beam-driven plasma wake eld acceleration. The quasi-static approximation is used for calculating plasma response. The beams are modeled by fully relativistic macro-particles.",
    alternates: {
      canonical: "/",
    }
}

export default function L3D() {
  const links: LinkList = [
    {
      title: "Quasistatic model",
      links: [{
        text: "Advantages",
        link: "https://doi.org/10.1134/S1063780X22601249",
        arxiv: "https://doi.org/10.48550/arXiv.2205.04390"
        },
        {
          text: "Energy diagnostics",
          link: "http://dx.doi.org/10.1103/PhysRevE.69.046405"
        },
      ]
    },
    {
      title: "LCODE 3D",
      links: [
        {
          text: "Beam and plasma solvers, declustering",
          link: "https://arxiv.org/abs/2401.11924"
        }
      ]
    }
  ]
  const props = [
    {
      id: 1,
      title: "Time-tested",
      text: "LCODE 2D, the basis for LCODE 3D, has been used to model a large number of installations and has shown good convergence with experimental results",
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
          <Image width={700} height={500} className="hidden lg:block h-80" src="/l3d_anim.gif" alt="Animation of LCODE 2D" />
          <div className="flex flex-col gap-y-9 items-start">
            <h2 className="text-3xl lg:text-6xl">LCODE 3D</h2>
            <p className="text-xl lg:text-2xl xl:text-3xl">A recently developed three-dimensional version of the quasistatic code LCODE has a novel feature that enables high-accuracy simulations of the long-term evolution of waves in plasma wakefield accelerators.</p>
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
          <TheoryList links={links} />
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
      <section id="resourses" className="flex items-center justify-center py-10 md:py-32">
        <div className=" flex flex-col items-center justify-center text-center w-11/12 md:w-7/12 lg:text-2xl">
          <h2 className="text-3xl md:text-5xl mb-12">Now open source</h2>
          <p className="mb-4">The support of the community is very important to us. That&apos;s why we put LCODE 3D into open access under BSD license. For programming LCODE 3D we used Python language to make it easier to understand. We also put a lot of effort into documenting the code. We are looking forward to community support.</p>
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-10 mt-8 text-3xl">
            <div className="flex">
              <FaGithub />
              <a className="hover:underline" target="_blank" href="https://github.com/lcodePy-team/lcodePy/">Github</a>
            </div>
            <div className="flex">
              <SiReadthedocs />
              <a className="hover:underline" target="_blank" href="https://github.com/lcodePy-team/lcodePy/">Documentation</a>
            </div>
     
            
          </div>
        </div>
      </section>
    </main>
  );
}
