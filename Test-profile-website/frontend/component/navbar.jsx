import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full">
            <link to="/">
                <span className=" font-semibold text-lg flex items-center gap-3 text-blue-400">
                    <img src="https://placehold.co/600x150" alt="" className="w-52 hover:scale-105 transition-all"></img> 
                </span>
                <span className="font-semibold text-2xl"> Fuck you I do what I want </span>
            </link>
            <div className="flex item-center gap-5 text-black">

                <link to="/" className="py-1 px-3 text-lg font-light
                text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
                transition duration-300">
                Home
                </link>

                <link to="/" className="py-1 px-3 text-lg font-light
                text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
                transition duration-300">
                Projects
                </link>

                <link to="/" className="py-1 px-3 text-lg font-light
                text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
                transition duration-300">
                Hobbies
                </link>

                <link to="/" className="py-1 px-3 text-lg font-light
                text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
                transition duration-300">
                Twitch
                </link>

                <link to="/" className="py-1 px-3 text-lg font-light
                text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700
                transition duration-300">
                Contact
                </link>
            </div>
        </nav>
    )
} 