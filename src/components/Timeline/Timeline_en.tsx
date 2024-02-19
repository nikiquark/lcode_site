import type { Timeline_item } from './types'

export default function Timeline_en({times}: {times: Timeline_item[]}) {
    return (
        <ol className="mx-4 lg:mx-48 relative border-s border-[color:rgb(var(--foreground-rgb))]">   
            {times.map(({ time, title, desc, href }, idx) => (
                <li key={idx} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[color:rgb(var(--foreground-rgb))] rounded-full mt-1.5 -start-1.5 border border-[color:rgb(var(--foreground-rgb))]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
                <h3 className="text-lg  text-[color:rgb(var(--foreground-rgb))]">{title}</h3>
                <p className="mb-4 text-base font-normal  text-gray-500">{desc}</p>
                {href&&
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 ">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg></a>}
            </li>
            ))}               
            
           
        </ol>
    )
}