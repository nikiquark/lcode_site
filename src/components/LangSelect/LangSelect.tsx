"use client"

import Link from "next/link";
import { lazy, useState } from "react";

const LangSelect: React.FC<{lang: "EN" | "RU"}> = ({lang}) => {

    return (
        <div className="mr-2 ml-4 cursor-pointer">
            <p className="text-gray-400 hover:text-white text-3xl duration-300">
                <Link href={lang === 'EN' ? '/' : '/ru'}>{lang}</Link>    
            </p>
            
        </div>
    )
}

export default LangSelect;