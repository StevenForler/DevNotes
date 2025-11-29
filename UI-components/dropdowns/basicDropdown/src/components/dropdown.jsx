import {useEffect, useRef, useState} from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef(null);
    useEffect (() => { // revisit in video explaining this useEffect and useRef in detail
        const handleClickOutside = (e) => {
            if(!dropdownRef.current?.Contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen])
    /* this is half working. Currently only when I select any links cause the dropdown to close.
    This might be due to how I separating the drop box into its own div to control how the line up works
     2 options here and I'm inclined to do both as a learning opportunity
     1. rework it to work with the menuItems in the same div.
     2. get it to work as is but this might require finding a new video to follow an example of
     ... or maybe get some things on this from Johanna.*/

    const menuItems = ["Home", "Settings", "Logout"]
    return (
        <div>
            <div ref={dropdownRef} className="main-container">
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