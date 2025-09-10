import { Link } from "react-router-dom"
import { useState } from "react"

export function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <>
            <div >
                <header className="bg-Midnightsnow flex py-2 justify-evenly items-center font-semibold text-base" >
                    <div className="hidden xl:flex gap-12 items-center">
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

                    
                        <span className='xl:hidden' ><i className=" block text-5xl cursor-pointer bx bx-menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen) }></i></span> 
                    <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col 
            items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                        
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