import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <>
            <div >
                <header className="bg-Midnightsnow flex py-3 justify-around items-center font-semibold text-base" >
                    <a href="/"> 
                        <img src="https://placehold.co/600x150" alt="" className="w-52 hover:scale-105 transition-all"></img> 
                    </a>
                    <ul className="flex ">
                        <li>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/projects">
                            <button>Projects</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/hobbies">
                            <button>Hobbies</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/twitch">
                            <button>Twitch</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/contact">
                            <button>Contact</button>
                        </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}