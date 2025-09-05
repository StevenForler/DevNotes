import React from "react"; // this was changed from the destructured method
import {Link} from "react-router-dom"

export const Navbar = () => {
    
    return(
        <nav>
            <ul /*CSS stuff here */>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li>
                    <Link to="/twitch">Twitch</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};
