import { Lang } from '@/components/LangSelect'

interface NavbarProps {
  links: NavLinkList
  lang: Lang
}

type NavLinkList = LinkItem[]

interface LinkItem {
  link: string
  text: string
}

export type { NavbarProps, NavLinkList }
