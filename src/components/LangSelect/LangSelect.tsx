import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lang } from '.';

const LangSelect: React.FC<{ lang: Lang }> = ({ lang }) => {
  const path = usePathname();
  const newPath = lang === 'EN' ? path.replace('/ru/', '/') : '/ru' + path;
  return (
    <div className="mr-2 ml-4 cursor-pointer">
      <p className="text-gray-400 hover:text-white text-3xl duration-300">
        <Link href={newPath}>{lang}</Link>
      </p>
    </div>
  )
}

export default LangSelect
