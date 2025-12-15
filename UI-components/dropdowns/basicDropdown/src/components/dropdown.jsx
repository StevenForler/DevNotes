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
        <div className="something">
            <div ref={dropdownRef} className="dropdown-container">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    {text}
                </button>
                    {isOpen && (
                    <div className="dropdown-info">
                        {content.map(item => (
                            <a key={item}>{item}</a>
                        ))}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Dropdown