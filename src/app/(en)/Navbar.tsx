"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkThemeToggle from "@/components/DarkThemeToggle";
import LangSelect from "@/components/LangSelect";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "/",
            text: "LCODE 3D"
        },
        {
            id: 2,
            link: "/2d",
            text: "LCODE 2D"
        },
        {
            id: 3,
            link: "/students",
            text: "For students"
        }
    ];

    return (
        <div className="flex justify-between items-center w-full py-2 md:py-4 px-2 md:px-10 2xl:px-52 text-white bg-slate-900/70 fixed top-0 z-10">
            <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-signature ml-2 select-none">
                    LCODE
                </h1>
            </div>

            <ul className="hidden lg:flex">
                {links.map(({ id, link, text }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer text-3xl capitalize font-medium text-gray-400 hover:scale-110 hover:text-white duration-200 link"
                    >
                        <Link href={link}>{text}</Link>
                    </li>
                ))}
            </ul>

            

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[color:rgb(var(--first-bg-rgb))] text-gray-500 z-10">
                {links.map(({ id, link, text }) => (
                    <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                    <Link onClick={() => setNav(!nav)} href={link}>
                        {text}
                    </Link>
                    </li>
                ))}
                </ul>
            )}
            <LangSelect lang="RU"/>
            <DarkThemeToggle />
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
        </div>
    );
};

export default Navbar;