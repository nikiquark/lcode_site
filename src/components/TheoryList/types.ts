interface Paper {
  link: string
  text: string
  arxiv?: string
}
interface PaperListItem {
  title: string
  links: Paper[]
}

type PaperList = PaperListItem[]

export type { Paper, PaperList }
