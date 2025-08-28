import {Link} from "react-router-dom"

export function Navbar (){
    return(
        <>
            <Link to="/"><button>About Me</button></Link>
            <Link to="/???"><button>???</button></Link>
            <Link to="/hobbies"><button>Hobbies</button></Link>
            <Link to="/steveticusthethird"><button>Watch Live</button></Link>
            <Link to="/contact-page"><button>Contact Me</button></Link>
        </>
    )
}