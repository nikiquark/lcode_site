import Link from 'next/link'
import { Lang } from '.'

const LangSelect: React.FC<{ lang: Lang }> = ({ lang }) => {
  return (
    <div className="mr-2 ml-4 cursor-pointer">
      <p className="text-gray-400 hover:text-white text-3xl duration-300">
        <Link href={lang === 'EN' ? '/' : '/ru'}>{lang}</Link>
      </p>
    </div>
  )
}

export default LangSelect
