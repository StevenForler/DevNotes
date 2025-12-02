import {useEffect, useRef, useState} from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);
    useEffect (() => {
        const handleClickOutside = (e) => {
            if(!dropdownRef.current?.Contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const menuItems = ["Home", "Settings", "Logout"]
    return (
            <div ref={dropdownRef} className="dropdown-container">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    <span> here's a button </span>
                </button>
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
    )
}

export default Dropdown