import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <>
            <div >
                <header className="bg-Midnightsnow flex py-3 justify-around items-center font-semibold text-base" >
                    <ul className="flex gap-12 ">
                        <li>
                        <Link to="/" >
                            <button className="cursor-pointer">Home</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/projects">
                            <button className="cursor-pointer">Projects</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/hobbies">
                            <button className="cursor-pointer">Hobbies</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/twitch">
                            <button className="cursor-pointer">Twitch</button>
                        </Link>
                        </li>
                        <li>
                        <Link to="/contact">
                            <button className="cursor-pointer">Contact</button>
                        </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}