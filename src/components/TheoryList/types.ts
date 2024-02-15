interface Link {
    link: string,
    text: string,
    arxiv?: string
}
interface LinkListItem {
    title: string,
    links: Link[]
}

type LinkList = LinkListItem[]

export type {Link, LinkList};