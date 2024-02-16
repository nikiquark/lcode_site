import { Metadata } from "next/types";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { IoMdDocument } from "react-icons/io";
import TheoryList, {LinkList} from "@/components/TheoryList";
import { IoInformationCircleOutline } from "react-icons/io5";
import HoverInfo from "@/components/HoverInfo";
export const metadata: Metadata = {
    title: "LCODE 2D — Код для моделирования кильватерного ускорения",
    description: "LCODE - это свободно распространяемый код для моделирования кильватерного ускорения. Для расчета отклика плазмы используется квазистатическое приближение. Пучки моделируются полностью релятивистскими макрочастицами.",
    alternates: {
      canonical: "/ru/2d",
    }
}



export default function L2D() {
    const links: LinkList = [
      {
        title: "Квазистатическое приближение",
        links: [{
          text: "Преимущества",
          link: "https://doi.org/10.1134/S1063780X22601249",
          arxiv: "https://doi.org/10.48550/arXiv.2205.04390"
          },
          {
            text: "Диагностика энергетических показателей",
            link: "http://dx.doi.org/10.1103/PhysRevE.69.046405"
          },
        ]
      },
      {
        title: "LCODE 2D",
        links: [
          {
            text: "Кинетическая модель",
            link: "http://dx.doi.org/10.1103/PhysRevSTAB.6.061301"
          },
          {
            text: "Жидкостная модель",
            link: "http://dx.doi.org/10.1063/1.872765",
          },
          {
            text: "Распараллеливание",
            link: "http://dx.doi.org/10.1016/j.nima.2015.12.032",
            arxiv: "https://doi.org/10.48550/arXiv.1511.04193"
          },
          {
            text: "Документация",
            link: "https://lcode.info/site-files/manual.pdf",
          },
        ]
      }
    ]
      
      
    const props = [
      {
        id: 1,
        title: "Провернный временем",
        text: "LCODE 2D, лежащий в основе LCODE 3D, был использован для моделирования большого количества экспериментов и показал хорошую сходимость с экспериментальными результатами",
      },
      {
        id: 2,
        title: "Скорость",
        text: "Кильватерное ускорение в квазистатическом приближении вычисляется на несколько порядков быстрее, чем в обычных PIC-кодах"
      }
    ];
    return (
      <main className="relative">
        <section className="flex flex-col h-svh pt-20 bg-[color:rgb(var(--first-bg-rgb))]">
          <div className="flex flex-1 flex-col lg:flex-row justify-center items-center px-12 2xl:px-36 gap-x-20">
            <img width={1078} height={535} className="hidden lg:block h-56" src="/l2d_anim.gif" alt="Animation of LCODE 2D" />
            <div className="flex flex-col gap-y-9 items-start">
              <h2 className="text-3xl lg:text-6xl">LCODE 2D</h2>
              <p className="text-xl lg:text-2xl xl:text-3xl">LCODE - это свободно распространяемый код для моделирования кильватерного ускорения. Для расчета отклика плазмы используется квазистатическое приближение. Пучки моделируются полностью релятивистскими макрочастицами.</p>
              <Link className="text-xl bg-gradient-to-r from-blue-500 to-green-500 rounded-md p-2 px-4 hover:shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] duration-300" href="#resourses">Try it now</Link>
            </div>
          </div>
          <Link href="#theory" className="flex flex-col items-center p-4 text-lg hover:-translate-y-2 duration-300"> Explore<FaAngleDown/> </Link>
        </section>
        <section id="theory" className="w-full flex justify-center ">
          <div className="py-16 lg:py-60 lg:px-12 flex flex-col items-begin justify-center w-9/12 lg:text-2xl">
            <h2 id="test" className="self-center text-5xl mb-8 lg:mb-16">Теория</h2>
            <p className="mb-4">Подробнее о квазистатическом моделировании и деталях кода вы можете узнать из следующих статей:
            </p>
            <ul className="list-disc">
                <TheoryList links={links}/>
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
            <h2 className="text-3xl md:text-5xl mb-12">Файлы</h2>
            <p className="mb-4">Не стесняйтесь обращаться к нам по адресу team@lcode.info за помощью и консультацией.</p>
            <div className="flex flex-col gap-y-2">
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline" target="_blank" href="https://lcode.info/site-files/manual.pdf">Документация</a>
              </div>
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline whitespace-nowrap" target="_blank" href="https://lcode.info/site-files/lcode.exe">Executable for Windows</a>
                <HoverInfo>
                  <pre>
{"\
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
"}
                  </pre>
                </HoverInfo>
              </div>
              <div className="flex">
                <IoMdDocument />
                <a className="hover:underline" target="_blank" href="https://lcode.info/site-files/lcode-mpi-halfbaked.run">Executable for Linux</a>
                <HoverInfo>
                  <pre className="">
{"\
`lcode-mpi-halfbaked.run`, should be executed on working host,\n\
  will perform the final compilation step,\n\
  linking the otherwise-precompiled LCODE with that host&apos;s MPI.\n\
  This is theoretically unsupported, but works like a charm.\n\
\n\
It will produce lcode in current directory.\n\
\n\
If you have any problem with it, feel free to contact us. \n\
"}
                  </pre>
                </HoverInfo>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    );
  }