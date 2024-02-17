import TheoryList, { PaperList } from '@/components/TheoryList'
import { Metadata } from 'next'
import Link from 'next/link'
import { FaAngleDown, FaGithub } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'LCODE 3D — код для моделирования кильватерного ускорения',
  description:
    'LCODE - это свободно распространяемый код для моделирования кильватерного ускорения. Для расчета отклика плазмы используется квазистатическое приближение. Пучки моделируются полностью релятивистскими макрочастицами.',
  alternates: {
    canonical: '/ru',
  },
}

export default function L3D() {
  const links: PaperList = [
    {
      title: 'Квазистатическое приближение',
      links: [
        {
          text: 'Преимущества',
          link: 'https://doi.org/10.1134/S1063780X22601249',
          arxiv: 'https://doi.org/10.48550/arXiv.2205.04390',
        },
        {
          text: 'Диагностика энергетических показателей',
          link: 'http://dx.doi.org/10.1103/PhysRevE.69.046405',
        },
      ],
    },
    {
      title: 'LCODE 3D',
      links: [
        {
          text: 'Beam and plasma solvers, declustering',
          link: 'https://arxiv.org/abs/2401.11924',
        },
      ],
    },
  ]
  const props = [
    {
      id: 1,
      title: 'Проверенный временем',
      text: 'LCODE 2D, лежащий в основе LCODE 3D, был использован для моделирования большого количества экспериментов и показал хорошую сходимость с экспериментальными результатами',
    },
    {
      id: 2,
      title: 'Скорость',
      text: 'Кильватерное ускорение в квазистатическом приближении вычисляется на несколько порядков быстрее, чем в обычных PIC-кодах',
    },
  ]
  return (
    <main className="relative">
      <section className="flex flex-col h-svh pt-20 bg-[color:rgb(var(--first-bg-rgb))]">
        <div className="flex flex-1 flex-col lg:flex-row justify-center items-center px-12 2xl:px-36 gap-x-20">
          <img
            width={700}
            height={500}
            className="hidden lg:block h-80"
            src="/l3d_anim.gif"
            alt="Animation of LCODE 2D"
          />
          <div className="flex flex-col gap-y-9 items-start">
            <h2 className="text-3xl lg:text-6xl">LCODE 3D</h2>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              Недавно разработанная трехмерная версия квазистатического кода
              LCODE обладает новым свойством, позволяющим с высокой точностью
              моделировать долговременную эволюцию волн в плазменных
              кильватерных ускорителях.
            </p>
            <Link
              className="text-xl bg-gradient-to-r from-blue-500 to-green-500 rounded-md p-2 px-4 hover:shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] duration-300"
              href="#resourses"
            >
              Получить доступ
            </Link>
          </div>
        </div>
        <Link
          href="#theory"
          className="flex flex-col items-center p-4 text-lg hover:-translate-y-2 duration-300"
        >
          Explore
          <FaAngleDown />
        </Link>
      </section>
      <section id="theory" className="w-full flex justify-center ">
        <div className="py-16 lg:py-60 lg:px-12 flex flex-col items-begin justify-center w-9/12 lg:text-2xl">
          <h2 id="test" className="self-center text-5xl mb-8 lg:mb-16">
            Теория
          </h2>
          <p className="mb-4">
            Подробнее о квазистатическом моделировании и деталях кода вы можете
            узнать из следующих статей:
          </p>
          <TheoryList links={links} />
        </div>
      </section>
      <section id="why-lcode" className="">
        <div className="flex flex-col items-center justify-center py-24 lg:py-56 md:px-32 2xl:px-72 clip-romb-mb lg:clip-romb  bg-[color:rgb(var(--secondary-bg-rgb))]">
          <h2 className="text-3xl md:text-5xl mb-12">Почему LCODE 3D?</h2>
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
        className="flex items-center justify-center py-10 md:py-32"
      >
        <div className=" flex flex-col items-center justify-center text-center w-11/12 md:w-7/12 lg:text-2xl">
          <h2 className="text-3xl md:text-5xl mb-12">Теперь open source</h2>
          <p className="mb-4">
            Поддержка сообщества очень важна для нас. Именно поэтому мы выложили
            LCODE 3D в открытый доступ под лицензией BSD. Для программирования
            LCODE 3D мы использовали язык Python, чтобы сделать его более
            понятным. Мы также приложили много усилий для документирования кода.
            Мы надеемся на поддержку сообщества.{' '}
          </p>
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-10 mt-8 text-3xl">
            <div className="flex">
              <FaGithub />
              <a
                className="hover:underline"
                target="_blank"
                href="https://github.com/lcodePy-team/lcodePy/"
              >
                Github
              </a>
            </div>
            <div className="flex">
              <SiReadthedocs />
              <a
                className="hover:underline"
                target="_blank"
                href="https://github.com/lcodePy-team/lcodePy/"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
