import {useEffect, useRef, useState} from "react";

const Dropdown = ({ButtonInfo}) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);
    useEffect (() => {
        const handleClickOutside = (e) => {
            if(!dropdownRef.current?.contains(e.target)) {
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
            <div className="something">
                <div ref={dropdownRef} className="dropdown-container">
                    {ButtonInfo.map(({id, text}) => (
                    <button key={id} onClick={() => setIsOpen((prev) => !prev)}>
                        {text}
                    </button>
                        ))}
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