import { LinkList } from ".";

const TheoryList = ({links}:{links:LinkList}) => {
    return (
        <div>
            <ul className="list-disc">
                {links.map((item, idx) => (
                <li key={idx}>
                    <h3 className="text-2xl">{item.title}:</h3>
                    <ul className="list-[circle] pl-10">
                        {item.links.map((link, idx) => (
                            <li key={idx}>
                                <a className="hover:underline" href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                </a>
                                {link.arxiv && (
                                    <a className="hover:underline px-3" href={link.arxiv} target="_blank" rel="noopener noreferrer">
                                        [arXiv]
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TheoryList;