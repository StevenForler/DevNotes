import {useEffect, useRef, useState} from "react";

function Dropdown ({DropdownPackage}) {
const {id,text,content} = DropdownPackage

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


    return (
            <div ref={dropdownRef} className="dropdown-container">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    {text}
                </button>
                    {isOpen && (
                    <div className="dropdown-info">
                        {content.map(item => (
                            <div key={item}>{item}</div>
                        ))}
                        </div>
                    )}
            </div>
    )
}

export default Dropdown

{/* 
// const menuItems = ["Home", "Settings", "Logout"]
    
    <div className="dropdown-info">
                        {menuItems.map((items) =>(
                            <a  key={items} href={items}> 
                                {items}
                            </a>
                        ))}
                    </div>
                )} */}