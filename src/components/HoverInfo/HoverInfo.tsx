import { IoInformationCircleOutline } from "react-icons/io5";


const HoverInfo = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="group lg:relative ">
            <IoInformationCircleOutline  className="text-xl lg:text-3xl cursor-pointer ml-2"/>
            <div className="hidden absolute left-0 lg:bottom-8 lg:-left-52 group-hover:block bg-gray-400 p-5 w-full overflow-x-scroll  lg:w-auto lg:overflow-hidden">
                <p className="text-xs text-left">{children}</p>
            </div>
            
        </div>
    )
}

export default HoverInfo;