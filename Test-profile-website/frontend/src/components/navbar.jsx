import { Link } from "react-router-dom"
import { useState } from "react"

export function Navbar(){


    return(
        <>
            <div>
                <header className="bg-Midnightsnow flex py-2 justify-evenly items-center font-semibold text-base" >
                    <div className=" md:flex gap-12 items-center">
                        <Link to="/" >
                            <button className="p-2 text-gray-600 hover:bg-Paleiceblue hover:text-white rounded-md transition-all cursor-pointer">Home</button>
                        </Link>
                        <Link to="/projects">
                            <button className="p-2 text-gray-600 hover:bg-Paleiceblue hover:text-white rounded-md transition-all cursor-pointer">Projects</button>
                        </Link>
                        <Link to="/hobbies">
                            <button className="p-2 text-gray-600 hover:bg-Paleiceblue hover:text-white rounded-md transition-all cursor-pointer">Hobbies</button>
                        </Link>
                        <Link to="/twitch">
                            <button className="p-2 text-gray-600 hover:bg-Paleiceblue hover:text-white rounded-md transition-all cursor-pointer">Twitch</button>
                        </Link>
                        <Link to="/contact">
                            <button className="p-2 text-gray-600 hover:bg-Paleiceblue hover:text-white rounded-md transition-all cursor-pointer">Contact</button>
                        </Link>
                    </div>   
                </header>
            </div>
        </>
    )
}

// Next update: Add break points to move the Navbar to the bottom.