"use client"
import { useTheme } from "next-themes";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const DarkThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="pr-2 lg:pr-0 cursor-pointer text-yellow-200 hover:drop-shadow-[0_0_4px_rgba(254,240,138,1)] duration-300">
            {theme === "dark" ? <MdOutlineWbSunny className="drop-shadow-lg"  size={30}/> : <FaRegMoon className="" size={30}/>}
        </div>
    )
}

export default DarkThemeToggle;