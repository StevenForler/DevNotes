import {useState} from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = ["Home", "Settings", "Logout"]
    return (
        <div>
            <div className="main-container">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    here's a button
                </button>
            </div>
            <div className="dropdown-container">
                {isOpen && (
                <div id="dropdown-info">
                    {menuItems.map((item) =>(
                        <a  key={item} href={item}> 
                            {item}
                        </a>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
}

export default Dropdown