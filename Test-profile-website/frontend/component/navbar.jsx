import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <Link to="/" /*CSS stuff here */>
                SteveticustheThird
            </Link>
            <div /*CSS stuff here */ onClick={() => setMenuOpen(!menuOpen)}>
            {/* <span></span>
                <span></span>
                <span></span> */}
            </div>
            <ul /*CSS stuff here */className={menuOpen ? "open" : ""}>
                <li><NavLink to="/"></NavLink>Home</li>
                <li><NavLink to="/projects"></NavLink>Projects</li>
                <li><NavLink to="/hobbies"></NavLink>Hobbies</li>
                <li><NavLink to="/twitch"></NavLink>twitch</li>
                <li><NavLink to="/contact"></NavLink>Contact</li>
            </ul>
        </nav>
    );
};